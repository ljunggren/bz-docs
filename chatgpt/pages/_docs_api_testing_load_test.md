!function(){function t(t){document.documentElement.setAttribute("data-theme",t)}var e=function(){try{return new URLSearchParams(window.location.search).get("docusaurus-theme")}catch(t){}}()||function(){try{return localStorage.getItem("theme")}catch(t){}}();t(null!==e?e:"light")}(),function(){try{const c=new URLSearchParams(window.location.search).entries();for(var\[t,e\]of c)if(t.startsWith("docusaurus-data-")){var a=t.replace("docusaurus-data-","data-");document.documentElement.setAttribute(a,e)}}catch(t){}}()

[Skip to main content](#__docusaurus_skipToContent_fallback)

[

![Boozang Logo](/img/bz-square-padded.png)![Boozang Logo](/img/bz-square-padded.png)

](/)[Documentation](/docs/overview/why-boozang)

*   [Overview](/docs/overview/why-boozang)
    
    *   [Why Boozang?](/docs/overview/why-boozang)
    *   [Boozang from the trenches](/docs/overview/boozang-from-the-trenches)
    *   [Boozang Buddy](/docs/overview/chat-gpt)
    *   [Resource summary](/docs/overview/all-resources)
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
*   Load testing

Load testing
============

[00:03](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=3) Boozang now supports API load test as a new action type

[00:49](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=49) Creating an API load test with supported HTTP methods.

[01:28](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=88) Boozang allows grouping of various API requests for load testing

[02:02](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=122) Boozang allows for testing various API requests including post, get, and delete.

[02:35](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=155) Automate validation of returned data and id handling

[03:10](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=190) Testing API load with 30 seconds, 10 users, and 10 seconds ramp up time

[03:46](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=226) Boozang Feature: API load test focuses on managing concurrent users and ramp up load tests.

[04:21](https://www.youtube.com/watch?v=Vzp5W-AoVJM&t=261) Ramping up requests increases response time, but still processes over 3,000 requests in 30 seconds.

* * *

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-testing/load-test.mdx)

[

Previous

JSON compare

](/docs/api-testing/json-compare)[

Next

Introduction to model-based testing

](/docs/model-based-testing/introduction)

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

Copyright © 2025 Boozang Technologies, Inc. Built with Docusaurus.