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
*   Utilities

On this page

Utilities
=========

Notes[​](#notes "Direct link to Notes")
---------------------------------------

You can add notes to a test step, by clicking "Set notes / Todos" in the _Action Details_ view. A note will show up as a blue badge in the action list, while a TODO will show up as a red badge. These can be very useful when leaving unfinished testwork, especially when working in teams.

[00:03](https://www.youtube.com/watch?v=YmBce5D9nGM&t=3) Boozang allows leaving notes and todos in projects.

[00:25](https://www.youtube.com/watch?v=YmBce5D9nGM&t=25) Creating and recording a test in Boozang for programming

[00:50](https://www.youtube.com/watch?v=YmBce5D9nGM&t=50) Boozang Feature: Notes and Todos demo on lab.boozang.com

[01:12](https://www.youtube.com/watch?v=YmBce5D9nGM&t=72) Adding notes in Boozang

[01:32](https://www.youtube.com/watch?v=YmBce5D9nGM&t=92) Boozang Feature: Notes and Todos enables marking notes and todos for easy navigation.

[01:58](https://www.youtube.com/watch?v=YmBce5D9nGM&t=118) Create and prioritize urgent to-dos

[02:20](https://www.youtube.com/watch?v=YmBce5D9nGM&t=140) Boozang allows users to create notes and todos within the testing progress.

[02:46](https://www.youtube.com/watch?v=YmBce5D9nGM&t=166) Boozang allows leaving notes for test cases

Execute as single action[​](#execute-as-single-action "Direct link to Execute as single action")
------------------------------------------------------------------------------------------------

Boozang default execution mode is _Execute as single action_. That means that form fills and similar actions are executed in groupwithout communicating with the IDE. This greatly speeds up test execution, but in some particular cases you might want to disable this.

To make sure an action is executed in isolation, simply go to _Action Details_ / ... (three dot menu -> Non-rapid action

* * *

[00:03](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=3) Execute as single action speeds up tests

[00:37](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=37) Demonstrating form fill and default data binding

[01:12](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=72) Executing actions individually vs. as single action

[01:51](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=111) Enabling single action execution speeds up test execution.

[02:26](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=146) Boozang allows disabling actions to customize test execution.

[02:56](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=176) Executing as a single action to speed up tests

[03:29](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=209) Changing default behavior to not execute a single action

[04:07](https://www.youtube.com/watch?v=HRhM3dUovCQ&t=247) Execute as single action for faster tests

* * *

Keywords[​](#keywords "Direct link to Keywords")
------------------------------------------------

In data-driven testing, we support the keywords "bz-skip" and "bz-stop" to be able to trigger conditional functionality based on data. This mans as soon as a parameter is being sent with these keywords, a specific behavior is triggered.

As soon as "bz-skip" occur the test will skip without generating a failure.

If "bz-stop" occur the all upstream tests will stop without generating an error.

[00:02](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=2) Boozang provides strong support for robot process automation.

[00:20](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=20) Using automation tool to address API issues

[00:35](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=35) Improved CSV view for better presentation

[00:56](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=56) Boozang now allows selection of data start and end index for running tests.

[01:10](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=70) Boozang introduces loop data view for better visualization.

[01:29](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=89) Loop data view shows processed data and generates report

[01:46](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=106) Boozang feature: Loop data view allows adding an unlimited number of columns with statuses.

[02:04](https://www.youtube.com/watch?v=zHDmcl2pIh0&t=124) Boozang feature allows loop data view for robot process automation.

* * *

Identify Loading Status[​](#identify-loading-status "Direct link to Identify Loading Status")
---------------------------------------------------------------------------------------------

In many applications there are loading indicators, such as spinners, to show the the application is not done rendering.

Boozang supports automatically waiting for these elements to disappear before proceeding with the testing.

As this is a global project setting, it increases test stability and means you can avoid increasing custom time-outs for many actions.

You can set this in: _Settings_ / _Content Policy_ / _Identify Loading Status_

[00:01](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=1) Automatically wait for loading elements

[00:21](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=21) Global setting for test execution timeouts

[00:39](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=39) Troubleshooting with Google Chrome Console

[00:53](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=53) Boozang allows pausing the application and capturing loading elements.

[01:13](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=73) Capturing loading elements can be tricky

[01:45](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=105) Using the typography root to capture the h5 element.

[02:03](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=123) Using the display block and selector for loading

[02:24](https://www.youtube.com/watch?v=ofUZX1QxOeA&t=144) Automatic waiting for loading element

* * *

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/utilities.mdx)

[

Previous

Control Flow

](/docs/core-concepts/control-flow)[

Next

Stable NLP selectors

](/docs/core-concepts/element-selectors/introduction)

*   [Notes](#notes)
*   [Execute as single action](#execute-as-single-action)
*   [Keywords](#keywords)
*   [Identify Loading Status](#identify-loading-status)

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