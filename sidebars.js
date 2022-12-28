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
      ],
    },
    {
      type: 'category',
      label: 'The Tool',
      collapsed: true,
      items: [
        'the-tool/overview', 
        'the-tool/toolbars',
        'the-tool/action-list',
        'the-tool/record',
        'the-tool/settings',
        'the-tool/other',
      ],
    },
    {
      type: 'category',
      label: 'Element Selectors',
      collapsed: true,
      items: [
        'element-selectors/introduction',
        'element-selectors/note',
        'element-selectors/selecting',
        'element-selectors/dom-picker',
        'element-selectors/element-policy',
        'element-selectors/repairing',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: true,
      items: [
        'core-concepts/action-types',
        'core-concepts/features',
      ],
    },
    {
      type: 'category',
      label: 'Using data',
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
      label: 'Cucumber',
      collapsed: true,
      items: [
        'cucumber/feature',
        'cucumber/xray',
        'cucumber/other',
        'cucumber/rca',
        'cucumber/log-formatter',
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