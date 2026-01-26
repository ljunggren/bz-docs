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
*   GitHub actions

On this page

GitHub actions
==============

Boozang supports integration to GitHub actions. This particular implementation uses the GabrielBB/xvfb-action@v1 package to enable headless browseer runs. It utilizes Multiple Cucumber HTML Reporter ([https://www.npmjs.com/package/multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)) to generate HTML Cucumber report dashboards, and publishes the test results as GitHub pages.

\*Note: This implementation can probably be improved, and we invite you to share any updates with us, either via email or on our [forum](https://boozang.com/forum). \*

###### Implementation steps[​](#implementation-steps "Direct link to Implementation steps")

1.  Add a directory .github in your project root
2.  Create the directory .github/workflows
3.  Add the below code into the file .github/workflows/my-test-flow.yml
4.  Enable GitHub pages for your repo
5.  Push the code
6.  The test results will be published on the GitHub pages of your repo

###### Sample code[​](#sample-code "Direct link to Sample code")

Below is a sample of code generated. Note that most of these settings will vary depending on your particular project settings and selected test to run.

    name: my-test-flowon: [push]jobs:  run-boozang-tests:    runs-on: ubuntu-latest    steps:      - uses: actions/checkout@v2      - uses: actions/setup-node@v1      - run: npm install -g boozang            - name: Run headless test with Boozang        uses: GabrielBB/xvfb-action@v1        with:          working-directory: ./ #optional          run: boozang --file="json/report" "http://staging-be.boozang.com/extension?parameter=&token=my-secret-token5e3f275e64f84941a326d4d8&group=&scope=&env=4&key=1&self=0#5e3f275e64f84941a326d4d8/jira61/m72/t10"                - run: npm install multiple-cucumber-html-reporter --save-dev && node reporter.js        if: always()        - name: Deploy report page        if: always()        uses: peaceiris/actions-gh-pages@v3        with:          github_token: ${{ secrets.GITHUB_TOKEN }}          publish_dir: ./public          user_name: 'github-actions[bot]'          user_email: 'github-actions[bot]@users.noreply.github.com'

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/continuous-integration/github-actions.mdx)

[

Previous

Jenkins

](/docs/continuous-integration/jenkins)[

Next

GitLab

](/docs/continuous-integration/gitlab)

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