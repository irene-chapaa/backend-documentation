/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GoChapaa Express API Documentation",
  tagline: "The Future of Finance for Africa  Blockchain",
  favicon: "./static/img/GochapaaLogo.png",

  url: "https://gochapaa.io", // Official site URL
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/gochapaa-social-card.jpg",
    navbar: {
      title: "GoChapaa Express API",
      logo: {
        alt: "GoChapaa Logo",
        src: "img/GochapaaLogo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "API Documentation",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} GoChapaa.`,
    },
  },
};

export default config;
