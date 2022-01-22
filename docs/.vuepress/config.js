const guideChildren = [
  '/guide/README.md',
  '/guide/getting-started.md',
  '/guide/about.md',
];

module.exports = {

  description: 'Sample VuePress app',

  head: [
    ['meta', { name: 'application-name', content: 'avPlanner Docs' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'avPlanner Docs' }],
    ['meta', { name: 'theme-color', content: '#4DBA87' }],
    ['meta', { name: 'msapplication-TileColor', content: '#4DBA87' }],
    ['meta', { name: 'robots', content: 'noindex' }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/mstile-150x150.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/icons/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#4DBA87',
      },
    ],
  ],

  lang: 'en-US',

  plugins: [
    ['@vuepress/plugin-pwa', { cleanupOutdatedCaches: true }],
    '@vuepress/plugin-pwa-popup',
  ],

  port: 9090,

  theme: '@vuepress/theme-default',

  themeConfig: {
    logo: '/images/icons/android-chrome-192x192.png',

    navbar: [
      {
        text: 'Guide',
        children: [...guideChildren],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [...guideChildren],
        },
      ],
    },
  },

  title: 'VP2-Min-PWA',
};
