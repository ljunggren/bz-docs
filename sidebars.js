module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        "introduction/onboarding",
        "introduction/glance",
        "introduction/why",
        "introduction/getting-started",
        "introduction/end-to-end",
        "introduction/the-book",
      ],
    },
    {
      type: 'category',
      label: 'The Tool',
      collapsed: true,
      items: [
        'the-tool/overview', 
        'the-tool/navigation', 
        'the-tool/toolbars',
        'the-tool/action-list',
        'the-tool/record',
        'the-tool/settings',
        'the-tool/other',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: true,
      items: [
        'core-concepts/modules',
        'core-concepts/action-types',
        'core-concepts/control-flow',
        'core-concepts/utilities',
      ],
    },
    {
      type: 'category',
      label: 'Element Selectors',
      collapsed: true,
      items: [
        'element-selectors/introduction',
        'element-selectors/dom-picker',
        'element-selectors/element-policy',
        'element-selectors/repairing',
      ],
    },
    {
      type: 'category',
      label: 'Using Data',
      collapsed: true,
      items: [
        'using-data/introduction',
        'using-data/datatypes',
        'using-data/databind',
        'using-data/regexp',
        'using-data/predefined',
        'using-data/troubleshooting',

      ],
    },
    {
      type: 'category',
      label: 'Continuous Integration',
      collapsed: true,
      items: [
        'ci-server/introduction',
        'ci-server/jenkins',
        'ci-server/github-actions',
        'ci-server/gitlab',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/feature',
        'integrations/xray',
        'integrations/other',
        'integrations/rca',
        'integrations/log-formatter',
        "integrations/further",
      ],
    },
    {
      type: 'category',
      label: 'API testing',
      collapsed: true,
      items: [
        'api-testing/introduction',
        'api-testing/tree-view',
        'api-testing/temporary-database',
        'api-testing/load-test',
      ],
    },
    {
      type: 'category',
      label: 'Canvas testing',
      collapsed: true,
      items: [
        'canvas/canvas',
      ],
    },
    {
      type: 'category',
      label: 'Model-based testing',
      collapsed: true,
      items: [
        'model-based/advantages',
        'model-based/how-to',
      ],
    },
    {
      type: 'category',
      label: 'Other',
      collapsed: true,
      items: [
        'other/security',
        'other/trade-offs',
      ],
    }
  ],
};