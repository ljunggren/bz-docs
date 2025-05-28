!function(){function t(t){document.documentElement.setAttribute("data-theme",t)}var e=function(){try{return new URLSearchParams(window.location.search).get("docusaurus-theme")}catch(t){}}()||function(){try{return localStorage.getItem("theme")}catch(t){}}();t(null!==e?e:"light")}(),function(){try{const c=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of c)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}()

[Skip to main content](#__docusaurus_skipToContent_fallback)

[

![Boozang Logo](/img/bz-square-padded.png)![Boozang Logo](/img/bz-square-padded.png)

](/)[Documentation](/docs/overview/why-boozang)

*   [Overview](/docs/overview/why-boozang)
    
    *   [Why Boozang?](/docs/overview/why-boozang)
    *   [Boozang from the trenches](/docs/overview/boozang-from-the-trenches)
    *   [Boozang Buddy](/docs/overview/chat-gpt)
*   [Getting Started](/docs/getting-started/installing-boozang)
    
*   [Core Concepts](/docs/core-concepts/modules)
    
    *   [Modules & Features](/docs/core-concepts/modules)
    *   [Testing Types](/docs/core-concepts/testing-types)
    *   [Action types](/docs/core-concepts/action-types)
    *   [Control Flow](/docs/core-concepts/control-flow)
    *   [Utilities](/docs/core-concepts/utilities)
    *   [Element Selectors](/docs/core-concepts/element-selectors/introduction)
        
    *   [Using Data](/docs/core-concepts/using-data/introduction)
        
    *   [Canvas Testing](/docs/core-concepts/canvas-testing)
    *   [Versioning](/docs/core-concepts/versioning/branching)
        
*   [Reporting](/docs/reporting/overview)
    
*   [Continuous Integration](/docs/continuous-integration/introduction)
    
*   [Integrations](/docs/integrations/feature)
    
*   [API testing](/docs/api-testing/api-overview)
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   Core Concepts
*   Testing Types

On this page

Testing Types
=============

Boozang supports a number of different test types.

*   Tests
*   API tests
*   Test Suites
*   Scenarios

Test are unique as they are a super-set of all the other test types.

Tests[​](#tests "Direct link to Tests")
---------------------------------------

Tests is the base of doiong testing in Boozang, and they support the following action types

*   Validation actions (all types)
*   Mouse actions
*   Keyboard events
*   Set component
*   Extract actions
*   Script actions
*   Plug-in test
*   Group
*   Refresh
*   Take screenshot
*   Comment
*   API action
*   Visit links
*   Validate form fields

API tests[​](#api-tests "Direct link to API tests")
---------------------------------------------------

API tests are build to perform requests and validate responses towards an API. Except for API load tests, tests support all the action types.

We recommend using API test type for "pure" API tests for house-keeping purposes.

*   API actions
*   Script actions
*   Script validations
*   Plug-in test
*   Group
*   Refresh
*   Load test action

Test suites[​](#test-suites "Direct link to Test suites")
---------------------------------------------------------

Use test suites to run a list of tests. Regular tests support the same action type (plug-in tests), but we recommend that you use test suites for house-keeping purposes.

*   Plug-in test

Scenarios[​](#scenarios "Direct link to Scenarios")
---------------------------------------------------

Scenarios are used to mapped Gherkin syntax to plug-in test action. The following action-types are supported:

*   Plug-in test

This connects a certain Gherkin phrase to a test, such as

    As an Admin -> Login as Admin

As soon as a link has been established, any scenarios containing the line "As an Admin" will automically be linked to the test "Login as Admin".

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/testing-types.mdx)

[

Previous

Modules & Features

](/docs/core-concepts/modules)[

Next

Action types

](/docs/core-concepts/action-types)

*   [Tests](#tests)
*   [API tests](#api-tests)
*   [Test suites](#test-suites)
*   [Scenarios](#scenarios)

Docs

*   [Start page](http://docs.boozang.com/docs/overview/why-boozang)
*   [Previous version](http://docs-old.boozang.com)

Community

*   [Udemy Course](https://www.udemy.com/course/advanced-test-automation-using-boozang/)
*   [Videos](https://boozang.com/videos)
*   [LinkedIn](https://linkedin.com/company/10640313)

More

*   [Blog](https://boozang.com/blog)
*   [GitHub](https://github.com/ljunggren)

Copyright © 2024 Boozang Technologies, Inc. Built with Docusaurus.