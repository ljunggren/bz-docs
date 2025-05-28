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
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
    *   [Coded tests in Boozang](/docs/coded/introduction)
    *   [Comparison with Playwright and Cypress](/docs/coded/migration)
*   [Other](/docs/other/security)
    

*   [](/)
*   Coded tests
*   Coded tests in Boozang

On this page

Introduction to Coded Tests in Boozang
======================================

In Boozang, you have the flexibility to create and manage tests using either a visual approach or by directly writing code. This capability allows you to leverage the best of both worlds, making Boozang a versatile tool for test automation. Here's an overview of how coded tests work in Boozang and how you can get started with them.

What are Coded Tests?[​](#what-are-coded-tests "Direct link to What are Coded Tests?")
--------------------------------------------------------------------------------------

Coded tests in Boozang allow you to write test scripts directly in code, offering a more hands-on approach to test creation and management. This is particularly useful for complex scenarios that might be cumbersome to handle using only the visual recorder. By switching between the visual and coded views, you can fine-tune your tests and gain more control over their behavior.

Getting Started with Coded Tests[​](#getting-started-with-coded-tests "Direct link to Getting Started with Coded Tests")
------------------------------------------------------------------------------------------------------------------------

1.  **Recording a Test:** Begin by recording a test using the Boozang recorder. This creates a series of actions that represent your test steps. For example, filling out a form or navigating through your application.
    
2.  **Switching to Code View:** Once you have recorded the test, switch to the coded view. This view displays the underlying code for the test you just recorded. The simplicity of Boozang's selectors ensures that the generated code is easy to understand and modify.
    
3.  **Editing the Code:** In the coded view, you can make adjustments to the test script. This might include adding loops, conditions, or other logic that enhances the functionality of your test. The code editor in Boozang supports auto-complete, helping you explore available functions and actions within the tool.
    
4.  **Running and Debugging:** After editing the code, you can run the test directly from the coded view. Boozang allows you to debug the test by setting breakpoints, viewing variable values, and stepping through the code. This ensures that you can identify and fix issues efficiently.
    
5.  **Switching Back to Visual View:** If needed, you can switch back to the visual view at any time. This bi-directional capability allows you to learn the code by observing how recorded actions translate into code and vice versa.
    

Benefits of Using Coded Tests[​](#benefits-of-using-coded-tests "Direct link to Benefits of Using Coded Tests")
---------------------------------------------------------------------------------------------------------------

*   **Flexibility:** Combining visual and coded approaches provides the flexibility to handle simple and complex test scenarios effectively.
*   **Control:** Directly writing and editing code gives you more control over the test logic and flow.
*   **Learning Opportunity:** Switching between visual and coded views helps you understand the underlying mechanics of your tests, promoting better learning and mastery of test automation.

Conclusion[​](#conclusion "Direct link to Conclusion")
------------------------------------------------------

Boozang's support for coded tests bridges the gap between visual test automation and traditional scripting. Whether you're a beginner or an experienced user, this feature enables you to create robust, flexible, and maintainable tests. Start by recording your tests visually, refine them in the coded view, and enjoy the best of both approaches in your test automation journey with Boozang.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coded/introduction.mdx)

[

Previous

How to do model-based testing

](/docs/model-based-testing/how-to)[

Next

Comparison with Playwright and Cypress

](/docs/coded/migration)

*   [What are Coded Tests?](#what-are-coded-tests)
*   [Getting Started with Coded Tests](#getting-started-with-coded-tests)
*   [Benefits of Using Coded Tests](#benefits-of-using-coded-tests)
*   [Conclusion](#conclusion)

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