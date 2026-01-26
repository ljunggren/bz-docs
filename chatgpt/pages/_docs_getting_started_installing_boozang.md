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
    
    *   [Installing Boozang](/docs/getting-started/installing-boozang)
    *   [Overview of the Tool](/docs/getting-started/overview-of-the-tool)
    *   [End-to-End Testing](/docs/getting-started/end-to-end-testing)
*   [Core Concepts](/docs/core-concepts/modules)
    
*   [Reporting](/docs/reporting/overview)
    
*   [Continuous Integration](/docs/continuous-integration/introduction)
    
*   [Integrations](/docs/integrations/feature)
    
*   [API testing](/docs/api-testing/api-overview)
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   Getting Started
*   Installing Boozang

On this page

Installing Boozang
==================

Signing up / Logging in[​](#signing--up--logging-in "Direct link to Signing  up / Logging in")
----------------------------------------------------------------------------------------------

Short Summary for [Boozang Introduction: Signing up & creating your first test](https://www.youtube.com/watch?v=RdMmKp5j6Wc) by [Merlin](https://merlin.foyer.work/)

"Boozang Introduction: Signing up & Creating Your First Test"

[00:03](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=3) Signing up & creating first test

[00:37](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=37) Signing up and creating your first test on Boozang

[01:13](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=73) Boozang test tool can be launched and test projects can be managed.

[01:51](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=111) Entering the application URL to create a test project

[02:22](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=142) Creating a module for testing

[03:00](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=180) Boozang allows easy test creation and execution

[03:31](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=211) Easily record and playback tests

[04:08](https://www.youtube.com/watch?v=RdMmKp5j6Wc&t=248) Boozang is module-based for large-scale test automation.

* * *

You can sign-up for Boozang from the Boozang homepage at [https://boozang.com](https://boozang.com). The sign-up link will take you to [https://ai.boozang.com](https://ai.boozang.com). If you are in Europe or Asia, try switching to our European site [https://eu.boozang.com](https://eu.boozang.com). These are the Boozang application servers, which are responsible for communicating with any instances of the Boozang tool, which is running locally on the client-side.

This is also where an administrator can maintain different teams and different projects, without having to launch anything client-side.

Creating a project[​](#creating-a-project "Direct link to Creating a project")
------------------------------------------------------------------------------

As soon as you have signed up, you can go ahead and create your first project in the Cloud dashboard, by clicking the button: "Create Project". There are a lot of options available here, but the only thing required is the project name.

![](/assets/images/mgmt-page-2a8686c62eab607a23652feca64433c6.png)

Environments[​](#environments "Direct link to Environments")
------------------------------------------------------------

![example image](/assets/images/environment-3278f6ce7b27ad66992c5599cf4db4ca.png "An exemplary image")

Boozang supports many application interfaces (for example: management, traffic, store) across many different environments (test, QA, staging, production). The purpose of this is to be able to allow a single test to be re-used across different environments without any risk of having to edit the test. If tests are duplicated and individually customized to run on an environment, over time, maintaining these tests gets very expensive, so it´s better to set this up properly from the get-go.

Recording a test[​](#recording-a-test "Direct link to Recording a test")
------------------------------------------------------------------------

Boozang works within the browser which allows for a very stable recording function. Simply click on the record button in the tool. As you perform actions on your web page actions will be recorded. To remove an un-wanted action that was recorded press the trashbin next to the action in the main tool view.

As soon as a test has been created you can use the playback button to replay the test steps. Boozang supports four different playback modes: **Normal**, **demo**, **remote** and **automation** mode. Demo mode slows down the playback speed and annotates every test step. This is good for demos and when trying to understand a test that someone else has authored. Remote play allows you to dispatch a test run to a remote server. Upon completion of the test, the result will be reported back to you.

A test is automatically saved in the local storage of the browser. If you want to prevent other team members from doing any changes to a test you are working on, click the lock. Other team members will see the test as locked, and will be un-able to do any changes. Any lock can be forcibly opened by any other team member. You will be notified if someone unlocks a test you have locked.

### A note on Window alignment[​](#a-note-on-window-alignment "Direct link to A note on Window alignment")

To use Boozang well, we recommend aligning the Boozang tool and your application next to each other side by side in the following way

![](/assets/images/side-by-side-79887f167f6b3c54598d87337c77e0ee.png)

This allows you to get a good overview of the recorded actions, and an easy way to modify or delete recorded actions.

In-tool help[​](#in-tool-help "Direct link to In-tool help")
------------------------------------------------------------

As Boozang is completely hosted in the Cloud it's easy to do changes and add useful features quickly. This has a huge upside as we can deploy features that customer asks for to all our customers at the same time, to the benefit of all. This also means that new things can appear in the user interface without warning, and in some cases, the documentation might not be up-to-date all the time.

For this reason, to be able to deliver new features fast without forcing the end-user to re-learn, we added an online help function inside the tool. To activate help, click the question mark in the user interface, and click the functionality and an explanation will appear.

![example image](/assets/images/help-annotations-91e3407a06f48c4fed9ddef7546a95a8.png "An exemplary image")

In the help text, you will find an explanation of the function you selected. You will also find any related videos to that function, if available. When clicking a video link, a separate video window will appear and you will be able to follow along with the tool if needed.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/installing-boozang.mdx)

[

Previous

Resource summary

](/docs/overview/all-resources)[

Next

Overview of the Tool

](/docs/getting-started/overview-of-the-tool)

*   [Signing up / Logging in](#signing--up--logging-in)
*   [Creating a project](#creating-a-project)
*   [Environments](#environments)
*   [Recording a test](#recording-a-test)
    *   [A note on Window alignment](#a-note-on-window-alignment)
*   [In-tool help](#in-tool-help)

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