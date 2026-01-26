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
    
    *   [Overview](/docs/reporting/overview)
    *   [Root-cause analysis](/docs/reporting/rca)
    *   [Log formatter](/docs/reporting/log-formatter)
*   [Continuous Integration](/docs/continuous-integration/introduction)
    
*   [Integrations](/docs/integrations/feature)
    
*   [API testing](/docs/api-testing/api-overview)
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   Reporting
*   Log formatter

Log formatter
=============

In using the reports provided by the open-source reporting engine for Cucumber, we found the report to sometimes be inadequate.

We therefor created the Boozang log formatter, which takes the Boozang execution logs and formats it into an easy to readreport, which directly links to the Boozang tool. Here, you can sort on the following different aspects, like

*   Completion
*   Id
*   Name
*   Result
*   Performance
*   Worker

You can also automatically open the Boozang tool from certain key places in the report, and see failure screenshots.=

[00:04](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=4) Introduction of the log formatter in Boozang

[00:38](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=38) Introducing the log formatter as a game changer for troubleshooting complex logs.

[01:04](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=64) Activate the log formatter for a specific URL

[01:38](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=98) Log formatter feature improves troubleshooting

[02:13](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=133) Logging formatter helps track IDE and extension versions.

[02:46](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=166) Boozang Feature: Log formatter provides overview, success and failures, and sorting functions

[03:20](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=200) Boozang Feature: Log formatter allows sorting by result, performance, and worker.

[03:48](https://www.youtube.com/watch?v=YYi0thrp8Fc&t=228) Encouragement to check out the improvements

* * *

In a way, this is a way to super-charge the system log, and another great advantage to the Cucumber standard reports is that this formatted system log can be monitored while the test run is executing, not afterwards.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reporting/log-formatter.mdx)

[

Previous

Root-cause analysis

](/docs/reporting/rca)[

Next

Introduction

](/docs/continuous-integration/introduction)

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