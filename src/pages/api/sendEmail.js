import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { full_name, email, cv_file, phone_number, address, note, job_title } =
      req.body;

    try {
      // Set up Nodemailer transport (configure with your email provider)
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail address
          pass: process.env.GMAIL_PASS, // Your Gmail app password
        },
      });

      // Ensure the cv_file exists
      const filePath = `${process.env.NEXT_PUBLIC_API_URL_IMG}/jobs/${cv_file}`;
      const attachment = {
        filename: cv_file,
        path: filePath,
      };

      // Send email
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "the.hrm11@gmail.com", // Replace with the target email
        subject: `ປະ​ຫວັດ​ສະ​ໝັກ​ວຽກ​ຂອງ ${full_name}`,
        html: `
          <h3>${job_title}</h3>
          <p><strong>ຊື່ ແລະ ນາມ​ສະ​ກຸນ:</strong> ${full_name}</p>
          <p><strong>​ອີ​ເມວ:</strong> ${email}</p>
          <p><strong>​ເບີ​ໂທ:</strong> ${phone_number}</p>
          <p><strong>​ທີ່​ຢູ່:</strong> ${address}</p>
          <p><strong>​ຫົວ​ຂໍ້​ສະ​ໝັກ​ວຽກ:</strong> ${note}</p>
        `,
        attachments: [attachment],
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
