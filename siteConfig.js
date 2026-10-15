// EDIT THIS FILE to update your contact details and links.
// Links that still contain "_HERE" are hidden automatically on the site,
// so visitors never see a broken placeholder.
export const siteConfig = {
  name: "Muthumari M",
  headline: "Building Intelligent Solutions with AI & Machine Learning.",
  role: "AI & Machine Learning Engineering Student",
  email: "mmuthumari0402@gmail.com",
  phone: "9360740546",
  showPhone: true, // set to false to hide your phone number
  github: "https://github.com/muthumari04m",     // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/muthumari-m-ムトゥマリ・マー-3166a4290", // e.g. "https://www.linkedin.com/in/your-id"
  resumePath: "/resume.pdf",     // file lives in /public/resume.pdf
};

// True only for real links (hides placeholders)
export const isValidUrl = (url) => typeof url === "string" && /^https?:\/\//.test(url);
