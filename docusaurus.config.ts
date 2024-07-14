import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Hi. 👋",
  tagline: "I hope you find something useful here!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://beadev.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BeADev", // Usually your GitHub org/user name.
  projectName: "vinicinbgs.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
  },

  plugins: ["docusaurus-plugin-image-zoom"],

  presets: [
    [
      "classic",
      {
        // docs: {
        //   sidebarPath: "./sidebars.ts",
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/vinicinbgs/vinicinbgs.github.io/blob/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "@beadev",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/beadev1.png",
      // },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        { to: "/about", label: "About", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/repositories", label: "Repositories", position: "left" },
        {
          href: "https://github.com/vinicinbgs",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://github.com/vinicinbgs",
          label: "LinkedIn",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/vinicinbgs",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/software-engineer-vinicius-morais-dutra/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @vinicinbgs. Built with Docusaurus. 🦖`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: ".markdown img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
