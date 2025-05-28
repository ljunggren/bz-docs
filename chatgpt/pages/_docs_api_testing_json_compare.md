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
    
*   [Reporting](/docs/reporting/overview)
    
*   [Continuous Integration](/docs/continuous-integration/introduction)
    
*   [Integrations](/docs/integrations/feature)
    
*   [API testing](/docs/api-testing/api-overview)
    
    *   [Overview](/docs/api-testing/api-overview)
    *   [Example with JSON server](/docs/api-testing/api-json)
    *   [Temporary database](/docs/api-testing/temporary-database)
    *   [Tree view](/docs/api-testing/tree-view)
    *   [JSON compare](/docs/api-testing/json-compare)
    *   [Load testing](/docs/api-testing/load-test)
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   API testing
*   JSON compare

On this page

JSON compare
============

Utility function[​](#utility-function "Direct link to Utility function")
------------------------------------------------------------------------

We also support data validation nbased on the JSON-path

    - $util.validateData(data, JSONPathValidationExpression)

This allows you to run validations of JSON payloads, similar to the JSON extract function. The `JSONPathValidationExpression` supports regular expressions, and a syntax similar to the JSON extract.

JSON compare editor[​](#json-compare-editor "Direct link to JSON compare editor")
---------------------------------------------------------------------------------

To simplify the creation of a suitable `JSONPathValidationExpression`, we have also created a novel editor. This can be accessed from the sidebar just under the `Temporary database` icon.

When opened, you can try different expressions on any data. The left view is the `JSONPathValidationExpression` and the center view has the data you want to validate. The right view contains the validation result, as shown in the diagram.

![JSON compare](/assets/images/validate-data-354264caaeaa316327f168dedd5918f4.png)

Try experimenting with different data and validation expressions.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-testing/json-compare-view.mdx)

[

Previous

Tree view

](/docs/api-testing/tree-view)[

Next

Load testing

](/docs/api-testing/load-test)

*   [Utility function](#utility-function)
*   [JSON compare editor](#json-compare-editor)

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