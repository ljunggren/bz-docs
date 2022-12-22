
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','a87'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','d62'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','d09'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','192'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','39f'),
    routes: [
      {
        path: '/docs/actions/action-types',
        component: ComponentCreator('/docs/actions/action-types','175'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/actions/comment',
        component: ComponentCreator('/docs/actions/comment','362'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/actions/events',
        component: ComponentCreator('/docs/actions/events','54a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/actions/extract',
        component: ComponentCreator('/docs/actions/extract','e9b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/actions/javascript',
        component: ComponentCreator('/docs/actions/javascript','36d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/actions/refresh',
        component: ComponentCreator('/docs/actions/refresh','85b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/actions/validations',
        component: ComponentCreator('/docs/actions/validations','5e2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/actions/visit',
        component: ComponentCreator('/docs/actions/visit','93a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/cucumber-google/dry-run',
        component: ComponentCreator('/docs/cucumber-google/dry-run','29e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/cucumber-google/feature',
        component: ComponentCreator('/docs/cucumber-google/feature','a81'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/cucumber-google/implement',
        component: ComponentCreator('/docs/cucumber-google/implement','10a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/cucumber-google/importing',
        component: ComponentCreator('/docs/cucumber-google/importing','47a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/cucumber-google/introduction',
        component: ComponentCreator('/docs/cucumber-google/introduction','f7e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/cucumber-google/linking',
        component: ComponentCreator('/docs/cucumber-google/linking','466'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/element-selectors/dom-picker',
        component: ComponentCreator('/docs/element-selectors/dom-picker','4c7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/element-selectors/element-policy',
        component: ComponentCreator('/docs/element-selectors/element-policy','4eb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/element-selectors/introduction',
        component: ComponentCreator('/docs/element-selectors/introduction','630'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/element-selectors/note',
        component: ComponentCreator('/docs/element-selectors/note','24a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/element-selectors/repairing',
        component: ComponentCreator('/docs/element-selectors/repairing','af2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/element-selectors/selecting',
        component: ComponentCreator('/docs/element-selectors/selecting','f3c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/element-selectors/smart-selectors',
        component: ComponentCreator('/docs/element-selectors/smart-selectors','af0'),
        exact: true
      },
      {
        path: '/docs/element-selectors/welcome',
        component: ComponentCreator('/docs/element-selectors/welcome','700'),
        exact: true
      },
      {
        path: '/docs/getting-started/creating',
        component: ComponentCreator('/docs/getting-started/creating','bb3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/getting-started/environments',
        component: ComponentCreator('/docs/getting-started/environments','8d1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/getting-started/in-tool-help',
        component: ComponentCreator('/docs/getting-started/in-tool-help','113'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/getting-started/modules-and-tests',
        component: ComponentCreator('/docs/getting-started/modules-and-tests','550'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/getting-started/recording',
        component: ComponentCreator('/docs/getting-started/recording','c9d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/getting-started/signing-up',
        component: ComponentCreator('/docs/getting-started/signing-up','4fb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','e84'),
        exact: true
      },
      {
        path: '/docs/introduction/before',
        component: ComponentCreator('/docs/introduction/before','7c0'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/introduction/glance',
        component: ComponentCreator('/docs/introduction/glance','99d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/introduction/onboarding',
        component: ComponentCreator('/docs/introduction/onboarding','4de'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/introduction/welcome',
        component: ComponentCreator('/docs/introduction/welcome','04e'),
        exact: true
      },
      {
        path: '/docs/introduction/when',
        component: ComponentCreator('/docs/introduction/when','e7a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/introduction/why',
        component: ComponentCreator('/docs/introduction/why','3f7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/introduction/why-boozang',
        component: ComponentCreator('/docs/introduction/why-boozang','ec6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/other-tool-views/reports',
        component: ComponentCreator('/docs/other-tool-views/reports','668'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/other-tool-views/team',
        component: ComponentCreator('/docs/other-tool-views/team','b4e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/settings/content-policy',
        component: ComponentCreator('/docs/settings/content-policy','2e2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/settings/databind',
        component: ComponentCreator('/docs/settings/databind','6a7'),
        exact: true
      },
      {
        path: '/docs/settings/environments',
        component: ComponentCreator('/docs/settings/environments','5c3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/settings/overview',
        component: ComponentCreator('/docs/settings/overview','d59'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/tool-views/action-list',
        component: ComponentCreator('/docs/tool-views/action-list','4ef'),
        exact: true
      },
      {
        path: '/docs/tool-views/hamburger',
        component: ComponentCreator('/docs/tool-views/hamburger','a00'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/tool-views/overview',
        component: ComponentCreator('/docs/tool-views/overview','2bd'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/tool-views/record',
        component: ComponentCreator('/docs/tool-views/record','08b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/tool-views/sidebar',
        component: ComponentCreator('/docs/tool-views/sidebar','732'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/tool-views/toolbar',
        component: ComponentCreator('/docs/tool-views/toolbar','306'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/tool-views/topbar',
        component: ComponentCreator('/docs/tool-views/topbar','a91'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','7ef'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','2c8'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','f0d'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','ca5'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','508'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','f90'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','d64'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','16a'),
        exact: true
      },
      {
        path: '/docs/using-data/databind',
        component: ComponentCreator('/docs/using-data/databind','91b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/using-data/datatypes',
        component: ComponentCreator('/docs/using-data/datatypes','9f9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/using-data/introduction',
        component: ComponentCreator('/docs/using-data/introduction','006'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/using-data/predefined',
        component: ComponentCreator('/docs/using-data/predefined','141'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/using-data/regexp',
        component: ComponentCreator('/docs/using-data/regexp','cf3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/using-data/troubleshooting',
        component: ComponentCreator('/docs/using-data/troubleshooting','2f0'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
