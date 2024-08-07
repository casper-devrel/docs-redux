// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
require("dotenv").config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`,
});

const {
  themeNavbarConfig,
  themeFooterConfig,
  themeAlgoliaConfig,
} = require("./config");

const { getEditUrl } = require("./src/utils/docs");

const docsOnlyMode = process.env.DOCS_MODE || true;
const routePrefix = !docsOnlyMode ? "/docs" : "/";

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Casper Docs - Redux',
  tagline: 'Casper documentation',
  favicon: 'icon/favicon.ico',

  // Set the production url of your site here
  url: 'https://casper-devrel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-redux',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'docs-redux',
  organizationName: 'casper-devrel',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
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
