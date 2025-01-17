const config = {
  siteUrl: "https://wimbledon-pets.co.uk",
  generateRobotsTxt: true,
  changefreq: "never", // How often your content is likely to change
  priority: 1.0, // Priority of URLs (0.1 - 1.0)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://wimbledon-pets.co.uk/sitemap.xml"],
  },
};

export default config;
