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
*   GitLab

On this page

GitLab
======

\*Note: This implementation can probably be improved, and we invite you to share any updates with us, either via email or on our [forum](https://boozang.com/forum). \*

###### Implementation steps[​](#implementation-steps "Direct link to Implementation steps")

1.  Click "CI / CD" in your GitLab repo
2.  Click Editor
3.  Paste below code
4.  Click "Commit changes"
5.  The job will be triggered automatically!

###### Sample code[​](#sample-code "Direct link to Sample code")

Below is a sample of code generated. Note that most of these settings will vary depending on your particular project settings and selected test to run.

    stages:  - build  - test  - package  - deploydefault:    image: docker:18.09.7-dind    interruptible: true    timeout: 30mservices:    - docker:18.09.7-dindvariables:  DOCKER_HOST: tcp://docker:2375/  DOCKER_DRIVER: overlay2  BASE: http://staging-be.boozang.com  TOKEN: my-secret-token  ENV: 4  PROJECT: 5e3f275e64f84941a326d4d8  BRANCH: jira61  SELF: 0  TEST: m72/t10  WORKERS: 1slave-workers:  stage: test  artifacts:    untracked: true  script:    - >      for i in $(seq 2 ${WORKERS}); do        nohup docker run --rm -v "$(pwd):/var/boozang/" --name bzworker${i} styrman/boozang-runner "${BASE}/extension?&token=${TOKEN}${PROJECT}&env=${ENV}&key=${i}&self=${SELF}#${PROJECT}/${BRANCH}" > nohup${i}.out      donemaster-worker:  stage: test  artifacts:    untracked: true  script:    - docker run --rm -v "$(pwd):/var/boozang/" --name bzworker1 styrman/boozang-runner "${BASE}/extension?token=${TOKEN}${PROJECT}&env=${ENV}&key=1&self=${SELF}#${PROJECT}/${BRANCH}/${TEST}"report:  stage: package  dependencies:     - master-worker  artifacts:    untracked: true  script:    - docker run --rm -v "$(pwd):/var/boozang/" --name reporter styrman/bz-cucumber

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/continuous-integration/gitlab.mdx)

[

Previous

GitHub actions

](/docs/continuous-integration/github-actions)[

Next

Feature Integration

](/docs/integrations/feature)

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