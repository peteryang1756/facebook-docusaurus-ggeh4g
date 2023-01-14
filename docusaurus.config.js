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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      hideOnScroll: true,
      
      logo: {
        alt: '雙龍體育 Logo',
        src: 'https://img.ssangyongsports.eu.org/logo2.png',
      className: 'custom-navbar-logo-class',
           },
      items: [
         {
        label: "體育",
        position: "left",
        items: [
          {
            label: "雙龍職棒",
          href: 'https://slbtw.cf/',
          },
          {
          label: '雙龍職籃',
          href: 'https://sbatw.ml/',
          },
        ],
      },
    {
        label: "支援",
        position: "left",
        items: [
          {
            label: "幫助中心",
          href: 'https://help.ssangyongsports.eu.org/',
          },
          {
          label: '社區',
          href: 'https://DISCUSS.ssangyongsports.eu.org/',
          },
          {
            label: "聯繫",
            to: "/c",
          },
        ],
      },
       {
        label: "組織",
        position: "left",
        items: [
          {
            label: "Blog",
            to: "/blog/",
            activeBaseRegex: "/blog/?$",
          },
          {
          label: '狀態',
          href: 'https://status.ssangyongsports.eu.org/',
          },
        ],
      },
        {
        label: "條款",
        position: "left",
        items: [
          {
            label: "隱私政策",
            to: "/p",
          },
          {
           label: "服務條款",
            to: "/t",
          },
        ],
      },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
      alt: '雙龍體育',
      src: 'https://img.ssangyongsports.eu.org/logo2.png',
      href: '/',
      width: 160,
      height: 51,
    },
      links: [
        {
        title: '體育',
          items: [
            {
                label: '雙龍職棒',
                href: 'https://slbtw.cf',
            },
            {
              label: '雙龍職籃',
              href: 'https://sbatw.ml',
            },
            {
              label: '雙龍足球',
              href: '/',
            },
          ],
        },
        {
         title: '組織',
          items: [
            {
              label: 'blog',
              href: '/blog',
            },
            {
              label: '狀態',
              href: 'https://status.ssangyongsports.eu.org/',
            },              
          ],
        },
        {
          title: '幫助',
          items: [
            {
              label: '幫助',
              href: 'https://help.ssangyongsports.eu.org/',
            },
            {
              label: '社區',
              href: 'https://discuss.ssangyongsports.eu.org/',
            },
            {
              label: '聯繫',
              href: '/c',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 雙龍體育, org. 維護團隊：雙龍體育.`,
    },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
