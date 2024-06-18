module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        // "introduction/onboarding",
        // "introduction/glance",
        "overview/why-boozang",
        "overview/boozang-from-the-trenches",
        "overview/chat-gpt",
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'getting-started/installing-boozang', 
        'getting-started/overview-of-the-tool', 
        "getting-started/end-to-end-testing",
      ]
    },
    // {
    //   type: 'category',
    //   label: 'The Tool',
    //   collapsed: true,
    //   items: [
    //     'the-tool/overview', 
    //     'the-tool/navigation', 
    //     'the-tool/toolbars',
    //     'the-tool/action-list',
    //     'the-tool/record',
    //     'the-tool/code-editor',
    //     'the-tool/settings',
    //     'the-tool/other',
    //   ],
    // },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: true,
      items: [

        'core-concepts/modules',
        'core-concepts/testing-types',
        'core-concepts/action-types',
        'core-concepts/control-flow',
        'core-concepts/utilities',
        {
          type: 'category',
          label: 'Element Selectors',
          items: [
            'core-concepts/element-selectors/introduction',
            'core-concepts/element-selectors/dom-picker',
            'core-concepts/element-selectors/element-policy',
            'core-concepts/element-selectors/repairing',
          ],
        },
        {
          type: 'category',
          label: 'Using Data',
          items: [
            'core-concepts/using-data/introduction',
            'core-concepts/using-data/datatypes',
            'core-concepts/using-data/databind',
            'core-concepts/using-data/regexp',
            'core-concepts/using-data/predefined',
            'core-concepts/using-data/troubleshooting',
          ],
        },
        'core-concepts/canvas-testing',
        {
          type: 'category',
          label: 'Versioning',
          items: [
            'core-concepts/versioning/branching',
            'core-concepts/versioning/stash',
            'core-concepts/versioning/protected',
            'core-concepts/versioning/end2end',
          ],
        },
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
        'continuous-integration/introduction',
        'continuous-integration/jenkins',
        'continuous-integration/github-actions',
        'continuous-integration/gitlab',
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
        // 'api-testing/json-path',
        'api-testing/json-compare',
        'api-testing/load-test',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Canvas testing',
    //   collapsed: true,
    //   items: [
    //     'canvas/gojs',
    //   ],
    // },
    {
      type: 'category',
      label: 'Model-based testing',
      collapsed: true,
      items: [
        'model-based-testing/introduction',
        'model-based-testing/advantages',
        'model-based-testing/how-to',
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