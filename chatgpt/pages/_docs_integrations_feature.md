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
    
    *   [Feature Integration](/docs/integrations/feature)
    *   [Xray Integration](/docs/integrations/xray)
    *   [Other platforms](/docs/integrations/other)
    *   [Taking it further](/docs/integrations/further)
*   [API testing](/docs/api-testing/api-overview)
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   Integrations
*   Feature Integration

On this page

Feature Integration
===================

In addition to integrating with CI servers for test execution, Boozang supports loading Cucumber feature files from an external system. This is convenient as it allows teams to keep the Cucumber features stored with the application source code (in the case of GitLab, GitHub, or BitBucket) or as part of the test management life-cycle (in the case of XRay / Jira).

In this case, Boozang acts as a slave system, which means the master copy of any feature should reside on the external system, and upon synchronization, local changes in Boozang will be lost.

Connecting to an external API[​](#connecting-to-an-external-api "Direct link to Connecting to an external API")
---------------------------------------------------------------------------------------------------------------

To connect to an external API to Boozang, go to Settings -> Integrations. From the dropdown you can select between the following external systems

*   Jira / XRay
*   GitHub
*   BitBucket
*   GitLab
*   Azure

You will need to generate the access token for the external APIs on the respective sites. Remember, the APIs have a tendency to change, which means that the placeholder we suggest could be inaccurate. If so, simply change the connection URL according to the documentation of the providers and try again.

The following fields need to be entered

*   File List URL: The URL end-point to get a list of the feature files
*   Token: The authorization header
*   Match File: File-match pattern
*   In Zip: Check if files are being loaded as a zip

![settings-integrations](/assets/images/settings-integrations-d9468520e9bf840d4f6de1a0256aab6d.png)

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/integrations/feature.mdx)

[

Previous

GitLab

](/docs/continuous-integration/gitlab)[

Next

Xray Integration

](/docs/integrations/xray)

*   [Connecting to an external API](#connecting-to-an-external-api)

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