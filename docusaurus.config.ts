import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';


const config: Config = {
  title: 'Tenor testdatasøk dokumentasjon',
  favicon: 'img/favicon.png',

  // Future flagg, se https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://skatteetaten.github.io/',
  baseUrl: 'testnorge-tenor-dokumentasjon/',

  organizationName: 'skatteetaten',
  projectName: 'testnorge-tenor-dokumentasjon',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'nb',
    locales: ['nb'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: "/",
        },
        blog: {
          path: "nyheter-og-driftsvarsler",
          routeBasePath: "nyheter-og-driftsvarsler",
          blogTitle: "nyheter",
          showReadingTime: false,
          blogSidebarCount: 25,
          postsPerPage: 25,
          feedOptions: {
            type: ['atom'],
            title: "Tenor - nyheter",
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    navbar: {
      title: 'Tenor testdatasøk dokumentasjon',
      logo: {
        alt: 'Tenor Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/nyheter-og-driftsvarsler', label: 'Nyheter', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'infoSidebar',
          position: 'left',
          label: 'Informasjon',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'api',
          sidebarId: 'apisidebar',
          position: 'left',
          label: 'API',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Tenor testdatasøk forvaltes av Skatteetaten.',
          items: [
            {
              label: 'Informasjon om løsningen',
              to: 'https://www.skatteetaten.no/skjema/testdata/',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    languageTabs: [
      {highlight: 'bash', language: 'curl', logoClass: 'curl'},
      {highlight: 'python', language: 'python', logoClass: 'python', variant: 'requests'},
      {highlight: 'javascript', language: 'javascript', logoClass: 'javascript', variant: 'fetch'},
      {highlight: 'java', language: 'java', logoClass: 'java', variant: 'okhttp'},
    ],
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: './api/sidebar.ts',
        docItemComponent: '@theme/ApiItem',
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'api',
        config: {
          publisering: {
            specPath:
              'https://gist.githubusercontent.com/skatteetaten-tenor-bot/d26936c76a4b82de4531166c44c5b102/raw',
            outputDir: 'api/teknisk/publisering',
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          soek: {
            specPath:
              'https://gist.githubusercontent.com/skatteetaten-tenor-bot/59ea64aad03d5adf953729793fcbde19/raw',
            outputDir: 'api/teknisk/soek',
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],
};

export default config;
