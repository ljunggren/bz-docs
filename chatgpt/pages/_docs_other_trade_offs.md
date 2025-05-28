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
    
*   [Other](/docs/other/security)
    
    *   [Security Concerns](/docs/other/security)
    *   [Trade-offs](/docs/other/trade-offs)

*   [](/)
*   Other
*   Trade-offs

On this page

Trade-offs
==========

There are several limitations to the Boozang technology, some that are a limiting factor of the technology and security of the browser context, and others that are conscious product decisions. Here is an attempt to address some of them head-on.

Only web[​](#only-web "Direct link to Only web")
------------------------------------------------

Boozang support only testing web and hybrid applications. There are plenty of good tools to test native and desktop applications in the market, and we will be happy to recommend some. When doing testing across web and native/desktop, we recommend driving the tests on the web over Boozang while driving the other tests over another tool. Boozang has excellent support to read data from external sources and is designed to be able to have a source of truth outside the tool.

No tests are driven from the Cloud[​](#no-tests-are-driven-from-the-cloud "Direct link to No tests are driven from the Cloud")
------------------------------------------------------------------------------------------------------------------------------

Boozang doesn´t currently drive your tests from the Cloud. The Boozang technology allows us to host your tests and allow you to drive them locally from your browser. This has the benefit that we can operate behind your company firewall without any problem. It also means that you can host the test data locally and serve it up to your local web browser.

As our test runner is open source and can be used and modified freely, we welcome companies and Cloud testing providers to do so, and we welcome serious partnership proposals.

Limited BI[​](#limited-bi "Direct link to Limited BI")
------------------------------------------------------

New: With the addition of Root-cause analysis and Trend reports, we provide quite a lot of Business Intelligence Insights.

Long-term, we will expand our reporting capability and business intelligence functions. As we expose our reports in both JSON and HTML, and fully support integration over REST or via our test-runner (DIY), we are welcoming you to integrate into your Business Intelligence system of choice and for you to see Boozang as one source of insights among many.

Frequent Maintenance Releases[​](#frequent-maintenance-releases "Direct link to Frequent Maintenance Releases")
---------------------------------------------------------------------------------------------------------------

We do nightly maintenance releases frequently, sometimes as often as once per week. All paying subscribers will be notified when this release takes place, but often they are done 10 pm - 1 am EST during Sundays (this timeslot works for both European and American customers and amounts to a maximum of 30 seconds of service down-time). This means that we generally can provide less than a one-week turnaround on bugs reported by our customers.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/other/trade-offs.mdx)

[

Previous

Security Concerns

](/docs/other/security)

*   [Only web](#only-web)
*   [No tests are driven from the Cloud](#no-tests-are-driven-from-the-cloud)
*   [Limited BI](#limited-bi)
*   [Frequent Maintenance Releases](#frequent-maintenance-releases)

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