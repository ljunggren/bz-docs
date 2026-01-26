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
*   End-to-End Testing

On this page

End-to-End Testing
==================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

[00:04](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=4) Boozang now features new functionalities in working with Cucumber

[00:44](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=44) Boozang introduces Cucumber features and scenarios

[01:16](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=76) Boozang allows synchronization with various systems for feature and scenario lives.

[01:54](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=114) Introduction to organizing cucumber files

[02:29](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=149) Boozang allows easy import of Cucumber features and scenarios

[03:01](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=181) Boozang allows running scenarios inside a feature

[03:39](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=219) Boozang allows easy linking of test step implementations to scenarios.

[04:14](https://www.youtube.com/watch?v=7jNc2kpdMEo&t=254) Creating and implementing test scenarios with Cucumber Features

* * *

Let's jump directly to a hands-on example, where we define an End-to-end search scenario. In this example we use Cucumber scenarios to drive tests in Boozang. This is not mandatory, but it has many advantages, and it's the recommended test approach in Boozang.

We need to do the following steps in this example

1.  Define a Feature file with two Scenarios, where one is data-driven (Scenario Outline)
2.  Import the Feature file to Boozang
3.  Implement tests for each Sceanario test step
4.  Link each test step
5.  Dry-run the test
6.  Run the test on a CI server

_Note: If you want to do the same test in a non-Cucumber way, simply define a test suite and link the tests together, or merge the actions to a single test._

Defining a feature file[​](#defining-a-feature-file "Direct link to Defining a feature file")
---------------------------------------------------------------------------------------------

We start by defining a feature file that describes a simple Google search.

    Feature: Google search	When I go to the Google search page, and search for an item,	I expect to see some reference to that item in the result summary.Scenario: Search returns relevant result	Given that I have gone to the Google page	When I search "cats"	Then "cats" should be mentioned in the resultsScenario Outline: Search returns relevant result - data-driven	Given that I have gone to the Google page    When I search <searchTerm>	Then <searchTerm> should be mentioned in the resultsExamples|searchTerm||cats      ||dogs      |

Importing the feature file[​](#importing-the-feature-file "Direct link to Importing the feature file")
------------------------------------------------------------------------------------------------------

It's now time to import the file to Boozang. You can import the feature file contents using copy paste or import the feature file via the file dialog. You can also use an external system, such as GitLab, GitHub, or Xray to import the feature files directly.

1.  Go to the project root
2.  Click the kebab menu (...)
3.  Select how to import the file contents (By text, By file, Sync from server)

![](/assets/images/import-features-69a668dc7e4e711965be4cfc2b786a8b.png)

4.  Copy-paste the content of thefeature file above
5.  Click "Load". When browsing a scenario you should see the following

![](/assets/images/unlinked-google-scenario-4ed17e49522da173f206503a232189ec.png)

Implementing the test steps[​](#implementing-the-test-steps "Direct link to Implementing the test steps")
---------------------------------------------------------------------------------------------------------

Now it's time to implement the test steps. Try to make the test step implementation as short and re-usable as possible.

1.  Go to the project root
2.  Click "Modules" ("code domain")
3.  Create Module ("Search")

![](/assets/images/create-module-search-3fe8d6851d1a01423535a8e0e575ef78.png)

4.  Create test ("Navigate to Google")

![](/assets/images/navigate-to-google-d6962a54c244f06c447fab7be33642ee.png)

5.  Make sure the URL is right. This test can be left blank.

![](/assets/images/navigate-to-google-contents-efe9f1cdc2df02cf004622a6c6201008.png)

6.  Create test ("Search Google")

![](/assets/images/search-google-537a2d84f67ba3e95d9b7b1e32f826f4.png)

7.  Record a test doing a simple Google search
8.  Make sure you are using `$parameter.searchTerm` as parameter to make it data driven
9.  Pick some good value to be the default search term ("Boozang")

![](/assets/images/search-google-contents-4a77aa94e6dfee0850c5e6f9b98aeba1.png)

11.  Create validation test case for the "Then" condition

![](/assets/images/validate-search-results-b5504c609744df4bae2d72c487f9cfcb.png)

12.  Now you should have a search module with the following tests

![](/assets/images/search-module-contents-984fafdcfe93e325bd73f9719fa53d6e.png)

Linking the test steps[​](#linking-the-test-steps "Direct link to Linking the test steps")
------------------------------------------------------------------------------------------

Now it's time to link all the tests. Make sure all the test steps in every scenario goes from "red" to "black".

![](/assets/images/unlinked-google-scenario-4ed17e49522da173f206503a232189ec.png)

1.  Click on a test step marked as "NOT IMPLEMENTED"
2.  Link the test step using the drop-down

![](/assets/images/link-google-scenario-692d80f726b6c396412962ff77854524.png)

3, Link all test steps until they go from "red" to "black"

![](/assets/images/linked-google-scenario-de4f0c8e218aa9182984466713562b5b.png)

Dry-run the test[​](#dry-run-the-test "Direct link to Dry-run the test")
------------------------------------------------------------------------

Now it's time to dry-run the test. Press play and make sure the test executes successfully.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/end-to-end-testing.mdx)

[

Previous

Overview of the Tool

](/docs/getting-started/overview-of-the-tool)[

Next

Modules & Features

](/docs/core-concepts/modules)

*   [Introduction](#introduction)
*   [Defining a feature file](#defining-a-feature-file)
*   [Importing the feature file](#importing-the-feature-file)
*   [Implementing the test steps](#implementing-the-test-steps)
*   [Linking the test steps](#linking-the-test-steps)
*   [Dry-run the test](#dry-run-the-test)

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