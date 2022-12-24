// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Boozang',
        logo: {
          alt: 'My Site Logo',
          src: 'img/bz-square-padded.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/onboarding',
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
                to: 'http://docs.boozang.com/docs/introduction/onboarding',
              },
              {
                label: 'Previous version',
                to: 'http://docs-old.boozang.com',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
