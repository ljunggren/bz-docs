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
    
    *   [Introduction](/docs/continuous-integration/introduction)
    *   [Jenkins](/docs/continuous-integration/jenkins)
    *   [GitHub actions](/docs/continuous-integration/github-actions)
    *   [GitLab](/docs/continuous-integration/gitlab)
*   [Integrations](/docs/integrations/feature)
    
*   [API testing](/docs/api-testing/api-overview)
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   Continuous Integration
*   Introduction

On this page

Introduction
============

To connect to an external CI server using Boozang, you'll need to use the Docker runner or NPM package described in the previous section. We will automatically generate the script code needed to get this up and running. The script can then be customized to suit your particular setup.

Generating the integration code[​](#generating-the-integration-code "Direct link to Generating the integration code")
---------------------------------------------------------------------------------------------------------------------

To get started, start by visiting the CI sidebar option in the Boozang tool.

![continuous-integration](/assets/images/ci-server-integration-2cdffc859633e97b19dc08e76e8e9880.png)

The current options are currently supported

*   Jenkins: Use to create boilerplate Jenkins script code based on the Docker Xvfb runner
*   Docker stand-alone: Use to create your own Docker-based runner
*   GitLab CI config: Boilerplate code based on the Docker Xvfb runner
*   Node / NPM config: Develop your own pipeline based on the NPM package Boozang
*   GitHub actions config: Boilerplate code based on the Boozang npm package and GabrielBB/xvfb-action@v1
*   Microsoft Azure: Sample boilerplate code based on Docker Xvfb runner
*   Other CI server: Sample boilerplate code based on Docker Xvfb runner

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/continuous-integration/introduction.mdx)

[

Previous

Log formatter

](/docs/reporting/log-formatter)[

Next

Jenkins

](/docs/continuous-integration/jenkins)

*   [Generating the integration code](#generating-the-integration-code)

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