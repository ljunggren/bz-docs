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
*   Root-cause analysis

On this page

Root-cause analysis
===================

[00:02](https://www.youtube.com/watch?v=GGPygfe3dpk&t=2) Boozang's root cause analysis helps with complex test scenarios.

[00:35](https://www.youtube.com/watch?v=GGPygfe3dpk&t=35) Boozang allows sorting by result and root cause analysis

[01:13](https://www.youtube.com/watch?v=GGPygfe3dpk&t=73) Identifying and categorizing memory issues

[01:46](https://www.youtube.com/watch?v=GGPygfe3dpk&t=106) Root-cause analysis helps identify issues quickly.

[02:16](https://www.youtube.com/watch?v=GGPygfe3dpk&t=136) Integration with ticket system for root-cause analysis

[02:47](https://www.youtube.com/watch?v=GGPygfe3dpk&t=167) Boozang allows easy navigation to specific URLs during test execution.

[03:20](https://www.youtube.com/watch?v=GGPygfe3dpk&t=200) Boozang's log formatter makes root cause analysis more powerful

[03:57](https://www.youtube.com/watch?v=GGPygfe3dpk&t=237) Boozang provides root-cause analysis for failed scenarios

* * *

Using Cucumber to do Behaviour driven development (BDD) is great but sometimes a single bug can have impacts on several tests. This article tries to address this.

The problem[​](#the-problem "Direct link to The problem")
---------------------------------------------------------

After introducing Cucumber support to our test tool we realized that there was something missing in the standard Cucumber report view.

Check the following example

Looks bad, eh? It’s hard to say. We can see that the business impact is vast, as we have many features breaking. Let’s say we have a problem with the login, and a single issue is breaking all the tests? We have no idea how many underlying bugs are causing these failures. A single problem or a myriad of issues?

Moreover, it would be interesting to classify if issues are due to known problems in the application or automation code. As a single tester, this is not so necessary, but as a team, it’s crucial that if someone has already analyzed an issue, it is highlighted as a “known issue.”

As we typically are running several parallel test workers, we also found it complex troubleshooting tests, as we did not know which worker that ran which scenario.

To summarize, we needed the following information.

*   Show number of root causes, not counted several times for each scenario
*   Classify the issue as an automation or application issue
*   Highlight slow test steps to find optimization opportunities
*   Show which worker ran which scenario
*   Adding root cause

To solve this, we added we added additional data to the Cucumber report JSON. We also updated our tool with a view where users can map the error hash (a simple MD5 sum of the error message) to their own bug system and also categorize the issue in one of the following categories

*   Automation issue
*   Application issue
*   Not sure

If you are working in any other tool or using Open Source Cucumber, you can easily add this lookup in a JSON or flat file on your system.

The report file[​](#the-report-file "Direct link to The report file")
---------------------------------------------------------------------

We added the additional fields directly in the Cucumber report JSON inside the scenario tag like this

       "extraData": {          "id": "m119.t1(1)",          "name": "Minimum items",          "worker": "Mats Ljunggren - 3",          "start": "22:15:24",          "end": "22:16:13",          "failed": "5e3f275e64f84941a326d4d8/ci50/m10/t29/5/",          "rootCase": {            "createStamp": {              "user": "592ed7aefcaff23cca3a703d",              "time": 1612540246197,              "ip": "1"            },            "updateStamp": {              "user": "592ed7aefcaff23cca3a703d",              "time": 1612540246197,              "ip": "1"            },            "_id": "601d695609eb4153f44a79e8",            "type": "auto",            "scope": "*",            "errHash": "B68D3847DEBE588EBD496BB67857D23C",            "errDesc": "Concurrency worker problem",            "desc": "Known concurrency problem",            "url": "http://mybugtracker.com/bug",            "projectId": "5e3f275e64f84941a326d4d8",            "__v": 0          }        }

You can find a sample log here

`https://github.com/ljunggren/bz-utils/blob/main/scripts/test/report_cucumber-m88-t1.json`

Disclaimer: This might not be according to Cucumber report specifications, but we do find it a very useful hack to compliment the Cucumber logs.

The script[​](#the-script "Direct link to The script")
------------------------------------------------------

We then created a script to gather this into a custom report that can be added to your CI pipeline.

`https://github.com/ljunggren/bz-utils/blob/main/scripts/generate_summary.sh`

It’s written in bash so it should be easily run on any system, but it does require the jq json parser to run.

Jenkins CI[​](#jenkins-ci "Direct link to Jenkins CI")
------------------------------------------------------

To show the report in Jenkins, we use the HTML publisher plugin using the following configuration.

To allow for the CSS rendering, we needed to do the following update to our Jenkins setup.

`sandbox; default-src 'none'; img-src 'self'; style-src 'self';`

[https://stackoverflow.com/questions/35783964/jenkins-html-publisher-plugin-no-css-is-displayed-when-report-is-viewed-in-j](https://stackoverflow.com/questions/35783964/jenkins-html-publisher-plugin-no-css-is-displayed-when-report-is-viewed-in-j)

In the end we added the following step to our Jenkins pipeline.

Conclusions[​](#conclusions "Direct link to Conclusions")
---------------------------------------------------------

This is the final result

The new report allows us to:

*   Mine out root causes of any problem
*   See the impact of a single bug by listing how many tests it breaks
*   Get an understanding of which worker did what in a parallel run
*   Show slow test steps to highlight opportunities for optimization

Let us know if this is helpful in any way.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reporting/rca.mdx)

[

Previous

Overview

](/docs/reporting/overview)[

Next

Log formatter

](/docs/reporting/log-formatter)

*   [The problem](#the-problem)
*   [The report file](#the-report-file)
*   [The script](#the-script)
*   [Jenkins CI](#jenkins-ci)
*   [Conclusions](#conclusions)

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