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
        'the-tool/code-editor',
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
        'core-concepts/test-types',
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
      label: 'Reporting',
      collapsed: true,
      items: [
        'reporting/overview',
        'reporting/rca',
        'reporting/log-formatter',
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
        "integrations/further",
      ],
    },
    {
      type: 'category',
      label: 'API testing',
      collapsed: true,
      items: [
        'api-testing/api-overview',
        'api-testing/api-json',
        'api-testing/temporary-database',
        'api-testing/tree-view',
        'api-testing/json-path',
        'api-testing/json-compare',
        'api-testing/load-test',
      ],
    },
    {
      type: 'category',
      label: 'Canvas testing',
      collapsed: true,
      items: [
        'canvas/gojs',
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