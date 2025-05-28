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
    
    *   [Introduction to model-based testing](/docs/model-based-testing/introduction)
    *   [Benefits of model based testing](/docs/model-based-testing/advantages)
    *   [How to do model-based testing](/docs/model-based-testing/how-to)
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   Model-based testing
*   How to do model-based testing

How to do model-based testing
=============================

We also support model-based testing in Boozang. This allows you to builod a model of the application, and Boozang will automatically generate the tests. It's usually harder to get started with model-based testing, but after the user manages to create his first workable model, a user can significantly reduce test maintanence effort, and scale up automation coverage faster.

[00:03](https://www.youtube.com/watch?v=bzocfoIlyS4&t=3) Boozang introduces a concept for scanning applications to build test coverage.

[00:19](https://www.youtube.com/watch?v=bzocfoIlyS4&t=19) Building a virtual representation of the application in the AI module

[00:31](https://www.youtube.com/watch?v=bzocfoIlyS4&t=31) Building a data model for a project management application

[00:49](https://www.youtube.com/watch?v=bzocfoIlyS4&t=49) Identify critical elements in your application

[01:05](https://www.youtube.com/watch?v=bzocfoIlyS4&t=65) The Boozang tool suggests 'create project' as the button, but it should be called 'create new project'.

[01:21](https://www.youtube.com/watch?v=bzocfoIlyS4&t=81) Boozang allows for building tests without manual record and replay

[01:38](https://www.youtube.com/watch?v=bzocfoIlyS4&t=98) Capturing all dependencies inside forms

[01:54](https://www.youtube.com/watch?v=bzocfoIlyS4&t=114) Boozang enables fast and efficient end-to-end test building

* * *

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/model-based-testing/how-to.mdx)

[

Previous

Benefits of model based testing

](/docs/model-based-testing/advantages)[

Next

Coded tests in Boozang

](/docs/coded/introduction)

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