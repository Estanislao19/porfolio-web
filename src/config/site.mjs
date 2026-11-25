const domain = (process.env.PUBLIC_SITE_URL ?? "https://devvtechh.netlify.app").replace(/\/$/, "");
const candidateWhatsApp = process.env.PUBLIC_WHATSAPP_NUMBER ?? "";
const whatsappDigits = candidateWhatsApp.replace(/\D/g, "");
const whatsappNumber = /^\d{8,15}$/.test(whatsappDigits) && whatsappDigits[0] !== "0" ? whatsappDigits : "";

export const siteConfig = {
  name: "Dev-Tech",
  domain,
  url: new URL(domain),
  email: process.env.PUBLIC_CONTACT_EMAIL ?? "devtech344@gmail.com",
  whatsappNumber,
};
