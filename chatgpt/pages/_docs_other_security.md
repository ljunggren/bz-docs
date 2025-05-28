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
*   Security Concerns

On this page

Security Concerns
=================

Fragment security[​](#fragment-security "Direct link to Fragment security")
---------------------------------------------------------------------------

When installing the bz-fragment we get the security of the web browser without the limitation of being bound to Chrome extension policy. This limits cross-browser execution but allows running Boozang without the need of any Extension.

Note: This requires access to the application directory to install an HTML fragment.

GDPR[​](#gdpr "Direct link to GDPR")
------------------------------------

As we are running locally in your web browser, it´s been easier to be GDPR compliant than for regular Cloud-testing services. We recommend that you'll host sensitive test data in CSV files hosted on your servers. That way, the data will never be loaded into our Cloud and be present in the browser local storage on the test computers.

Hosting[​](#hosting "Direct link to Hosting")
---------------------------------------------

In our Cloud, we host the data you enter into our system and the tests, including our proprietary element selectors. To get an understanding of the kind of data we store, you can look at the Source tab on any test. Our servers are located in Canada.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/other/security.mdx)

[

Previous

Comparison with Playwright and Cypress

](/docs/coded/migration)[

Next

Trade-offs

](/docs/other/trade-offs)

*   [Fragment security](#fragment-security)
*   [GDPR](#gdpr)
*   [Hosting](#hosting)

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