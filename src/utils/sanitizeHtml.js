/**
 * sanitizeHtml - ทำความสะอาด HTML เพื่อป้องกัน XSS
 *
 * ลบออก:
 * - <script> tags และ content ทั้งหมด
 * - Inline event handlers (onclick, onload, onerror, ...)
 * - javascript: URIs ใน href/src
 * - <iframe>, <object>, <embed>, <form> tags ที่ไม่จำเป็น
 */
export function sanitizeHtml(html) {
  if (typeof html !== "string") return "";

  return html
    // Remove <script> tags and their content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    // Remove <iframe>, <object>, <embed>, <form> tags entirely
    .replace(/<(iframe|object|embed|form|base)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(iframe|object|embed|form|base)\b[^>]*\/?>/gi, "")
    // Remove inline event handlers (onclick, onmouseover, onerror, etc.)
    .replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, "")
    // Remove javascript: URIs
    .replace(/href\s*=\s*["']\s*javascript:[^"']*/gi, 'href="#"')
    .replace(/src\s*=\s*["']\s*javascript:[^"']*/gi, 'src=""')
    // Remove data: URIs (can be used for XSS in some contexts)
    .replace(/src\s*=\s*["']\s*data:[^"']*/gi, 'src=""');
}
