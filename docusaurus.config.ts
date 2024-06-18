import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Kane\'s Personal Site',
  tagline: 'Important information about myself~',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://i.wangkang.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'w4lk3r', // Usually your GitHub org/user name.
  projectName: 'i', // Usually your repo name.

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
      {
        theme: {
          customCss: './src/css/custom.css',
        },
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        sitemap: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kane\'s Site',
      logo: {
        alt: 'Kane\'s Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Resume',
        },
        {
          type: 'docSidebar',
          sidebarId: 'showcase',
          position: 'left',
          label: 'Showcase',
        },
        {
          href: 'https://tools.wangkang.tech/',
          position: 'left',
          label: 'Tools',
        },
        {
          href: 'https://www.linkedin.com/in/wangkane/',
          position: 'right',
          className: 'header-linkedin-link',
        },
        {
          href: 'https://github.com/w4lk3r/',
          position: 'right',
          className: 'header-github-link',
        },
        {
          href: 'https://leetcode.com/u/wangkane/',
          position: 'right',
          className: 'header-leetcode-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site Map',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Resume',
              to: '/docs/information',
            },
            {
              label: 'Major Apps',
              to: '/docs/showcase/list',
            },
            {
              label: 'Tools',
              href: 'https://tools.wangkang.tech/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/wangkane',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/w4lk3r',
            },
            {
              label: 'Leetcode',
              href: 'https://leetcode.com/u/wangkane',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Music Education Apps in Xihang (Chinese)',
              href: 'https://quthing.com/ourProducts',
            },
            {
              label: 'Other Apps in Xihang (Chinese)',
              href: 'https://quthing.com/moreApplications',
            },
            {
              label: 'meituan.com (English)',
              href: 'https://www.meituan.com/en-US/about-us',
            },
            {
              label: 'meituan.com (Chinese)',
              href: 'https://www.meituan.com/',
            },
            {
              label: 'dianping.com (Chinese)',
              href: 'https://www.dianping.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kane's Personal Site`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
