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
        
        *   [Stable NLP selectors](/docs/core-concepts/element-selectors/introduction)
        *   [Selection wizard](/docs/core-concepts/element-selectors/dom-picker)
        *   [Element Policy](/docs/core-concepts/element-selectors/element-policy)
        *   [Repairing an action](/docs/core-concepts/element-selectors/repairing)
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
*   Element Selectors
*   Stable NLP selectors

On this page

Stable NLP selectors
====================

_The element selection policy has undergone changes related to our 6.x release (April 2021). I recommend checking out these updates in on our blog: [https://boozang.com/element-selectors/](https://boozang.com/element-selectors/)_

Being able to identify HTML elements in your application is central to test automation. Boozang has a unique approach to this, so it's worth spending some time learning about it. Normally, the record function takes care of capturing elements very well, but the unique Boozang selection policy enables us to do very powerful data-driven development, where dynamical data can be used as selectors.

Natural language selectors[​](#natural-language-selectors "Direct link to Natural language selectors")
------------------------------------------------------------------------------------------------------

Our element selector policy is based on natural language. This means Boozang primarily uses what an end-user sees, rather than hidden element attributes, such as `class` or `id`.

This has the following benefits:

*   Great support for applications with dynamic classes and ids
    
*   Automated form fills
    
*   Intelligent test repairs
    
*   Closer alignment to requirements
    
*   Auto-generation of tests through model-based testing
    
*   Great support for dynamic classes and ids
    

By not relying on attributes like `class` or `id` by default, recorded tests are not broken when these are changed in the application. This makes Boozang well-suited for testing on top of applications with dynamic attributes. For special cases where you need to depend on `id` or `class` (such as extracting data), the user can opt-in to use these attributes.

*   Automated form fills

It's also great to handle data. The following form example illustrates this

    <form> First name<br> <input type="text" class="forminput"><br> Last name<br> <input type="text" class="forminput"></form>

In Boozang, the element locator would be based on the strings `first_name` and `last_name`. This will allow us to automatically match the following `JSON` data

    {  "first_name": "John",  "last_name": "Doe"}

This might seem like a small win, but this can make a huge difference when testing data-intense applications, and when making form fills based on spreadsheet data.

*   Intelligent test repairs: By basing the element locators on what the user sees, tests are sensitive to updates to the element verbatim rather than other invisible attributes. This means tests often fail explicitly for changes in the UI, which allows the user to re-select the element from the tools. For instance, when a button text changes from "Create" to "Add", the next time it cannot find the label "Create", it will scan the UI for "Add" and suggest the update.
    
*   Closer alignment to requirements: As the selectors are based on what the user sees, the test code will read much like a requirement. This means that tests in Boozang are closely aligned with the business domain, making it easier to create a "living document" of the code. This makes it easier to keep requirements up to date and to have a single source of truth.
    
*   Auto-generation of tests: With the introduction of requirements into Boozang (for instance, with the introduction of Gherkin tests), we can apply machine learning to suggest test code based on the Gherkin syntax. As the Boozang test automation language is a type of natural language, we can apply simple NLP machine learning to suggest test code without the need for test authoring.
    

### A note on other machine learning tools\*[​](#a-note-on-other-machine-learning-tools "Direct link to A note on other machine learning tools*")

It's also possible to use machine-learning on the element selectors, like

`weigh1 * .someclass + weight2 * #someid + weight3 * “Some text”`

This can give short term benefits in terms of stability, but can also introduce noise and false positives. At Boozang we believe that what has been written in a requirement (and what is seen in a UI) is the truth, not what a developer decided to put in a class or id attribute. This is why we apply a stricter element policy and action representation. By doing this, we can create a model of the whole application, resulting in higher impact on productivity and better test coverage.

Selecting an element[​](#selecting-an-element "Direct link to Selecting an element")
------------------------------------------------------------------------------------

Boozang uses custom element selectors based on what a user will see rather than classes, ids or other attributes. This means that to use class or id, this usually needs to be explicitly defined. By avoiding using classes and ids as primary identifiers, Boozang tests become very stable to code changes and can automate applications with dynamic ids and classes freely.

*   The element bar: For most actions, the user can select an element (Validations, Events, Javascript and Extract Data). When recording or picking an element Boozang tries to guess the best path to the element. Usually, this is sufficient, but sometimes this needs to be edited.
    
*   Re-picking an element: The first step if an action isn´t working as expected is to re-pick the element in the application window. To make sure, double-click the action and confirm that the action is working.
    
    _Tip: Click on the element dialog and see if the correct element is highlighted in the application window._
    
*   Edit element with DOM picker: If this is still not sufficient, you can try to edit the element. If the current element is not found in the application window, the user will be asked to pick the element. If found, the DOM picker window will be launched which allows the user to fine-tune the element path
    

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/element-selectors/introduction.mdx)

[

Previous

Utilities

](/docs/core-concepts/utilities)[

Next

Selection wizard

](/docs/core-concepts/element-selectors/dom-picker)

*   [Natural language selectors](#natural-language-selectors)
    *   [A note on other machine learning tools\*](#a-note-on-other-machine-learning-tools)
*   [Selecting an element](#selecting-an-element)

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