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
        "introduction/why-boozang",
        "introduction/when"
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        "getting-started/signing-up",
        "getting-started/environments",
        "getting-started/creating",
        "getting-started/modules-and-tests",
        "getting-started/recording",
        "getting-started/in-tool-help",
      ],
    },
    {
      type: 'category',
      label: 'An End-to-End example',
      collapsed: true,
      items: [
        'cucumber-google/introduction',
        'cucumber-google/feature',
        'cucumber-google/importing',
        'cucumber-google/implement',
        'cucumber-google/linking',
        'cucumber-google/dry-run', 
      ],
    },
    {
      type: 'category',
      label: 'Views and toolbars',
      collapsed: true,
      items: [
        'tool-views/overview', 
        'tool-views/sidebar',
        'tool-views/hamburger',
        'tool-views/topbar',
        'tool-views/toolbar',
        'tool-views/record',
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
      label: 'Actions',
      collapsed: true,
      items: [
        'actions/action-types',
        'actions/events',
        'actions/validations',
        'actions/extract',
        'actions/javascript',
        'actions/comment',
        'actions/refresh',
        'actions/visit',
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
      label: 'Settings',
      collapsed: true,
      items: [
        'settings/overview',
        'settings/environments',
        'settings/content-policy',
      ],
    },
    {
      type: 'category',
      label: 'Other tool views',
      collapsed: true,
      items: [
        'other-tool-views/reports',
        'other-tool-views/team',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: true,
      items: [
        'features/loops',
        'features/switch',
        'features/keywords',
        'features/notes',
        'features/loading',
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