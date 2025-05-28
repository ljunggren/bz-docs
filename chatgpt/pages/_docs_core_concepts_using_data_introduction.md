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
        
        *   [Introduction to data types](/docs/core-concepts/using-data/introduction)
        *   [Data types](/docs/core-concepts/using-data/datatypes)
        *   [Data binding](/docs/core-concepts/using-data/databind)
        *   [Regular Expressions](/docs/core-concepts/using-data/regexp)
        *   [Predefined regexp](/docs/core-concepts/using-data/predefined)
        *   [Troubleshooting](/docs/core-concepts/using-data/troubleshooting)
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
*   Using Data
*   Introduction to data types

Introduction to data types
==========================

[00:03](https://www.youtube.com/watch?v=eumv5m0rmOI&t=3) Boozang supports many different data types for creating reusable tests.

[00:29](https://www.youtube.com/watch?v=eumv5m0rmOI&t=29) Data can be defined on three different levels

[00:55](https://www.youtube.com/watch?v=eumv5m0rmOI&t=55) Adding and experimenting with different data types

[01:21](https://www.youtube.com/watch?v=eumv5m0rmOI&t=81) Pairs and CSV data are loopable data types for storing and managing data.

[01:53](https://www.youtube.com/watch?v=eumv5m0rmOI&t=113) Matrix data is similar to CSV with a primary key.

[02:25](https://www.youtube.com/watch?v=eumv5m0rmOI&t=145) Boozang allows fetching data from external sources

[02:52](https://www.youtube.com/watch?v=eumv5m0rmOI&t=172) JavaScript to generate data and properties for single named value pairs

[03:21](https://www.youtube.com/watch?v=eumv5m0rmOI&t=201) Arrays in Boozang are powerful and easy to use

* * *

Data is used to be able to create data-driven tests. This means that a test that takes data as input (for instance: "Login" or "Create Project") can be re-used for different data sets. Data handling is at the core of Boozang, and a large variety of data types are supported.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/using-data/introduction.mdx)

[

Previous

Repairing an action

](/docs/core-concepts/element-selectors/repairing)[

Next

Data types

](/docs/core-concepts/using-data/datatypes)

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