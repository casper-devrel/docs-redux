// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
const globalConfig = require("./global.config.js");
const {
  themeNavbarConfig,
  themeFooterConfig,
  themeAlgoliaConfig,
} = require("./config");

const { getEditUrl } = require("./src/utils/docs");
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Casper Docs - Redux',
  tagline: 'Casper Documentation',
  favicon: 'icon/favicon.ico',
  url: globalConfig.siteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: globalConfig.baseUrl,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'Casper Docs v2.0',
  organizationName: 'Casper Association',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: "throw",
  markdown: {
    format: "detect"
  },
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './config/sidebar.config.js',
          //sidebarPath: './sidebars.js',
          path: "docs",
          routeBasePath: globalConfig.routePrefix, // IMPORTANT: Turn on docs-only mode
          exclude: ["./contract-dsl/archived", "./economics/archived", "./theory"]
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: themeAlgoliaConfig,
      navbar: themeNavbarConfig,
      footer: themeFooterConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
