// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Boozang',
  tagline: 'Model-based test automation',
  url: 'https://boozang.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ljunggren',
  projectName: 'bz-docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ljunggren/bz-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Boozang Logo',
          src: 'img/bz-square-padded.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/why-boozang',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start page',
                to: 'https://docs.boozang.com/docs/overview/why-boozang',
              },
              {
                label: 'Previous version',
                to: 'https://docs-old.boozang.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Udemy Course',
                href: 'https://www.udemy.com/course/advanced-test-automation-using-boozang/',
              },
              {
                label: 'Videos',
                href: 'https://boozang.com/videos',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/10640313',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://boozang.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ljunggren',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Boozang Technologies, Inc. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
