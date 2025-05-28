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
    

*   [](/)
*   Overview
*   Why Boozang?

On this page

Why Boozang?
============

Why do test automation[​](#why-do-test-automation "Direct link to Why do test automation")
------------------------------------------------------------------------------------------

There are several reasons why test automation is important:

*   Improved testing efficiency: Automated testing allows you to test more code in less time. This can be especially helpful when you have to test your application repeatedly, such as in the case of regression testing.
    
*   Faster time-to-market: By reducing the amount of time it takes to test your application, you can get your product to market faster.
    
*   Improved test coverage: Automated tests can cover a wider range of scenarios and edge cases, ensuring that your application is thoroughly tested.
    
*   Reduced human error: Manual testing is prone to human error. Automated tests, on the other hand, are reliable and repeatable.
    
*   Cost-effective: Automated testing can reduce the cost of testing over time. While there is an upfront investment in developing automated tests, the savings over the long run can be significant.
    
*   Scalability: Automated testing can easily scale up to handle large and complex applications, which can be difficult or impossible with manual testing.
    

Overall, test automation helps improve the quality, reliability, and efficiency of your testing process, which in turn can lead to better software and a more satisfied user base.

Why use Boozang[​](#why-use-boozang "Direct link to Why use Boozang")
---------------------------------------------------------------------

### Stable to code changes[​](#stable-to-code-changes "Direct link to Stable to code changes")

Boozang is fundamentally different from other test tools. Boozang uses natural language to identify browser elements, instead of the DOM elements, making tests incredibly stable to changes in the underlying implementation. It's possible to completely change the underlying technology without affecting the tests. You can go from a Java legacy application to Angular or React. The tests remain the same, as long as the business requirements do.

### Automated documentation[​](#automated-documentation "Direct link to Automated documentation")

As Boozang is completely based on natural language, all recorded tests are also a user manual. When a label changes, for example: "Create Project" being changed to: "Add Project", the test will need to be updated accordingly. This means the automated tests acts as living documentation.

### AI test repair[​](#ai-test-repair "Direct link to AI test repair")

As your code changes, Boozang tests remain stable. If you do change any labels or item identifiers, Boozang will automatically suggest how to repair your tests, or if no suggestion is available, allow you to reselect the element on the page. This reduces test maintenance immensely and allows you to repair broken tests on the fly.

### BDD / Cucumber support[​](#bdd--cucumber-support "Direct link to BDD / Cucumber support")

Built-in support for BDD. Write Gherkin tests directly in our interface, our import them from XRay / Jira. This allows you to write test specifications before the actual code and better distribute the team workload during the project lifecycle. It also allows you to engage business analysts in the testing process, who will have important product knowledge, but might lack in technical skills.

### Versioning, branching and merging[​](#versioning-branching-and-merging "Direct link to Versioning, branching and merging")

Boozang has built-in versioning, with support for branching and merging. This allows the team to collaborate in teams seamlessly. It also allows the team to align the automation work with the software development process.

### Linkability[​](#linkability "Direct link to Linkability")

Boozang is completely built-in Javascript, and being Cloud-based, there is no need for any client-side installation. Simply add an HTML fragment to your site to activate it for testing.

### API testing[​](#api-testing "Direct link to API testing")

API testing is supported out of the box, allowing you to create tests that mixes API and UI operations. Automatically generate API tests by recording actions in the browser.

### Web components / Shadow DOM support and socket-based testing[​](#web-components--shadow-dom-support-and-socket-based-testing "Direct link to Web components / Shadow DOM support and socket-based testing")

Supports Web Components / Shadow DOM testing and socket-based testing.

At the core[​](#at-the-core "Direct link to At the core")
---------------------------------------------------------

Boozang is a code-less front end testing tool built for the modern web using only Javascript. It allows developers and Quality Assurance engineers to develop front-end tests quickly without the need for programming.

Boozang is not based on Selenium and does not have the limitations of Selenium and Selenium webdriver. Boozang uses its own selection language based on natural language, allowing for native support of TDD / BDD (test/behavior-driven development) and allows for tests to be automatically generated from models (model-based testing).

About the Technology[​](#about-the-technology "Direct link to About the Technology")
------------------------------------------------------------------------------------

Boozang test technology is divided into two parts. The proprietary part of the tool, that allows you to author tests record fast and the Open Source test runner which is built on Google Puppeteer, which allows you to run tests from command-line and integrate Boozang into your CI flow or other tools.

*   **Boozang tool**: Sign up at [https://boozang.com](https://boozang.com) for free and paid license offerings.
    
*   **Boozang test-runner**: For the Boozang Puppeteer open-source test runner, see [https://github.com/ljunggren/bz-puppeteer](https://github.com/ljunggren/bz-puppeteer) and the Docker container [https://github.com/ljunggren/bz-docker-xvfb](https://github.com/ljunggren/bz-docker-xvfb)
    

When to use Boozang[​](#when-to-use-boozang "Direct link to When to use Boozang")
---------------------------------------------------------------------------------

### Good fit vs bad fit[​](#good-fit-vs-bad-fit "Direct link to Good fit vs bad fit")

Boozang is great when testing anything that runs in the web browser. This includes any modern SaaS application, no matter how complex. It’s great when you need to automate testing of flows that can be determined by a machine, that doesn't exhibit random behaviour.

A rule of thumb is that the more you feel the need to run regression testing, the more value you will find in the Boozang implementation. This means, if you release business-critical software often, you will find great value in Boozang. If you release rarely and bugs don't have a significant impact, maybe not so much.

A less than ideal fit is also SaaS applications that have a graphical interface that needs a human to make a judgment call. These flows can never be fully automated, and the value of automation can be limited.

### A note on supported technology[​](#a-note-on-supported-technology "Direct link to A note on supported technology")

Boozang supports any application that runs in the web browser. Boozang also supports hybrid approaches, such as Cordova, Ionic, and Xamarin.

Since March 2019, Boozang also fully supports Shadow DOM / Web Components.

Boozang does not support any testing of native IOS applications, Android applications, or any desktop-based applications.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview/why-boozang.mdx)

[

Next

Boozang from the trenches

](/docs/overview/boozang-from-the-trenches)

*   [Why do test automation](#why-do-test-automation)
*   [Why use Boozang](#why-use-boozang)
    *   [Stable to code changes](#stable-to-code-changes)
    *   [Automated documentation](#automated-documentation)
    *   [AI test repair](#ai-test-repair)
    *   [BDD / Cucumber support](#bdd--cucumber-support)
    *   [Versioning, branching and merging](#versioning-branching-and-merging)
    *   [Linkability](#linkability)
    *   [API testing](#api-testing)
    *   [Web components / Shadow DOM support and socket-based testing](#web-components--shadow-dom-support-and-socket-based-testing)
*   [At the core](#at-the-core)
*   [About the Technology](#about-the-technology)
*   [When to use Boozang](#when-to-use-boozang)
    *   [Good fit vs bad fit](#good-fit-vs-bad-fit)
    *   [A note on supported technology](#a-note-on-supported-technology)

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