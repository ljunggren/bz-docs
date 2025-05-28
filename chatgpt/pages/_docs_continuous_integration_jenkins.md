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
*   Jenkins

Jenkins
=======

Jenkins Ci integration is fairly straightforward, and we recommend using the Docker Xvfb runner. That way we avoid setting up Xvfb for headless runs, which can be quite complex.

Start by copying the boilerplate script and create a free-style job according to the instructions given

1.  Click "New Item" in the Jenkins main view
2.  Choose "Freestyle project"
3.  Add build step -> Execute Shell
4.  Copy the below code into the shell
5.  Add a Post-build action -> Add Cucumber reports
6.  The job is ready to run!

Below is a sample of code generated. Note that most of these settings will vary depending on your particular project settings and selected test to run.

    BASE=http://staging-be.boozang.comTOKEN=my-secret-tokenENV=4PROJECT=5e3f275e64f84941a326d4d8BRANCH=jira61SELF=0TEST=m72/t10GROUP=SCOPE=PARAMETER=WORKERS=1echo Running $workers processes for test: $testecho Setting up slavescounter=1while [ $counter -lt ${WORKERS} ]do  ((counter++))  WORKER_URL="${BASE}/extension?parameter=${PARAMETER}&token=${TOKEN}${PROJECT}group=${GROUP}&scope=${SCOPE}&env=${ENV}&key=${counter}&self=${SELF}#${PROJECT}/${BRANCH}"  nohup docker run --rm -v "$(pwd):/var/boozang/" --name=bzworker${counter} styrman/boozang-runner "${WORKER_URL}" > out_${counter}.log &doneecho All slaves done. Starting master job. MASTER_URL="${BASE}/extension?parameter=${PARAMETER}&token=${TOKEN}${PROJECT}&group=${GROUP}&scope=${SCOPE}&env=${ENV}&key=1&self=${SELF}#${PROJECT}/${BRANCH}/${TEST}/run"docker run --rm -v "$(pwd):/var/boozang/" --name=bzworker1 styrman/boozang-runner "${MASTER_URL}"

It's often a good idea to add parameters to the job, for instance "module\_id/test\_id" and "number\_of\_workers".

In order to see an example setup using an upstream pipeline, check out this post on our user forum: [https://boozang.com/forum/topic/jenkins-config-for-distributed-runs/](https://boozang.com/forum/topic/jenkins-config-for-distributed-runs/)

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/continuous-integration/jenkins.mdx)

[

Previous

Introduction

](/docs/continuous-integration/introduction)[

Next

GitHub actions

](/docs/continuous-integration/github-actions)

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