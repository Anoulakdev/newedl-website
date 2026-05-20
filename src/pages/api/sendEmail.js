import nodemailer from "nodemailer";

// --- Helpers ---

/**
 * Simple in-memory rate limiter: allows max MAX_REQUESTS per IP per WINDOW_MS.
 */
const rateMap = new Map();
const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || { count: 0, start: now };

  if (now - entry.start > WINDOW_MS) {
    // Reset window
    rateMap.set(ip, { count: 1, start: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  rateMap.set(ip, { count: entry.count + 1, start: entry.start });
  return false;
}

/**
 * Sanitize a plain text value: strip HTML tags and trim whitespace.
 */
function sanitizeText(value) {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim();
}

/**
 * Validate email format.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate that a filename is safe (no path traversal, only alphanumeric + safe chars).
 * Must end with .pdf since we only accept PDF CVs.
 */
function isValidFilename(filename) {
  if (typeof filename !== "string") return false;
  // No slashes, dots only for extension, only safe chars
  return /^[\w\- ]+\.pdf$/i.test(filename);
}

// --- API Handler ---

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Rate limiting by IP
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({ message: "Too many requests. Please try again later." });
  }

  const { full_name, email, cv_file, phone_number, address, note, job_title } =
    req.body;

  // --- Input Validation ---
  const cleanName = sanitizeText(full_name);
  const cleanEmail = sanitizeText(email);
  const cleanPhone = sanitizeText(phone_number);
  const cleanAddress = sanitizeText(address);
  const cleanNote = sanitizeText(note);
  const cleanJobTitle = sanitizeText(job_title);
  const cleanCvFile = sanitizeText(cv_file);

  if (!cleanName || cleanName.length > 200) {
    return res.status(400).json({ message: "Invalid full name." });
  }
  if (!isValidEmail(cleanEmail)) {
    return res.status(400).json({ message: "Invalid email address." });
  }
  if (!cleanPhone || !/^\+?[\d\s\-()]{6,20}$/.test(cleanPhone)) {
    return res.status(400).json({ message: "Invalid phone number." });
  }
  if (!cleanAddress || cleanAddress.length > 500) {
    return res.status(400).json({ message: "Invalid address." });
  }
  if (!cleanNote || cleanNote.length > 1000) {
    return res.status(400).json({ message: "Invalid note." });
  }
  if (!cleanJobTitle || cleanJobTitle.length > 300) {
    return res.status(400).json({ message: "Invalid job title." });
  }

  // Security: Validate the CV filename to prevent SSRF / path traversal
  if (!isValidFilename(cleanCvFile)) {
    return res.status(400).json({ message: "Invalid CV file name. Only PDF files are accepted." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Build attachment path from validated, sanitized filename only
    const filePath = `${process.env.NEXT_PUBLIC_API_URL_IMG}/jobs/${cleanCvFile}`;
    const attachment = {
      filename: cleanCvFile,
      path: filePath,
    };

    const recipientEmail = process.env.HR_EMAIL || "the.hrm11@gmail.com";

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      subject: `ປະ​ຫວັດ​ສະ​ໝັກ​ວຽກ​ຂອງ ${cleanName}`,
      // Use text-only body to avoid HTML injection; escaping all user data
      html: `
        <h3>${escapeHtml(cleanJobTitle)}</h3>
        <p><strong>ຊື່ ແລະ ນາມ​ສະ​ກຸນ:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>​ອີ​ເມວ:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>​ເບີ​ໂທ:</strong> ${escapeHtml(cleanPhone)}</p>
        <p><strong>​ທີ່​ຢູ່:</strong> ${escapeHtml(cleanAddress)}</p>
        <p><strong>​ຫົວ​ຂໍ້​ສະ​ໝັກ​ວຽກ:</strong> ${escapeHtml(cleanNote)}</p>
      `,
      attachments: [attachment],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    // Log without exposing details to the client
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}

/**
 * Escape HTML special characters to prevent injection in email body.
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
