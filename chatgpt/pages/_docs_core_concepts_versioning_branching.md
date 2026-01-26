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
    
    *   [Modules & Features](/docs/core-concepts/modules)
    *   [Testing Types](/docs/core-concepts/testing-types)
    *   [Action types](/docs/core-concepts/action-types)
    *   [Control Flow](/docs/core-concepts/control-flow)
    *   [Utilities](/docs/core-concepts/utilities)
    *   [Element Selectors](/docs/core-concepts/element-selectors/introduction)
        
    *   [Using Data](/docs/core-concepts/using-data/introduction)
        
    *   [Canvas Testing](/docs/core-concepts/canvas-testing)
    *   [Versioning](/docs/core-concepts/versioning/branching)
        
        *   [Branching and merging](/docs/core-concepts/versioning/branching)
        *   [Stashing changes](/docs/core-concepts/versioning/stash)
        *   [Protected branches and merge requests](/docs/core-concepts/versioning/protected)
        *   [An end-to-end example](/docs/core-concepts/versioning/end2end)
*   [Reporting](/docs/reporting/overview)
    
*   [Continuous Integration](/docs/continuous-integration/introduction)
    
*   [Integrations](/docs/integrations/feature)
    
*   [API testing](/docs/api-testing/api-overview)
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   Core Concepts
*   Versioning
*   Branching and merging

On this page

Branching and merging
=====================

[00:03](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=3) Boozang tool now supports improved branching and merging features.

[00:39](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=39) Implementing general branch management

[01:08](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=68) Boozang allows branching and merging for easy workflow management.

[01:43](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=103) Boozang allows branching and merging for efficient testing

[02:19](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=139) Branching and merging in Boozang

[02:56](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=176) Boozang allows branching, merging, and switching branches for continuous integration.

[03:23](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=203) Merging module B into C with a new commit

[03:53](https://www.youtube.com/watch?v=XnpwfRqf7zA&t=233) Boozang feature provides a familiar Git-like workflow.

* * *

Branching and Merging[​](#branching-and-merging "Direct link to Branching and Merging")
---------------------------------------------------------------------------------------

### Introduction[​](#introduction "Direct link to Introduction")

This guide covers the process of using branching and merging in Boozang when working with non-protected branches. This is particularly useful in environments where direct commits to the master branch are allowed or in smaller teams.

### Branching in Boozang[​](#branching-in-boozang "Direct link to Branching in Boozang")

#### Creating a New Branch[​](#creating-a-new-branch "Direct link to Creating a New Branch")

1.  **Select Your Project**: Choose the project you want to work on, such as "unit test".
2.  **Create a New Branch**: Name your branch according to the feature or fix you're working on, e.g., `feature-branch` or `bug-fix-123`.

#### Working on Your Branch[​](#working-on-your-branch "Direct link to Working on Your Branch")

*   After creating your branch, switch to it to begin your work.
*   Regular commits to this branch are recommended to save progress.

### Committing Changes[​](#committing-changes "Direct link to Committing Changes")

*   **Commit Regularly**: Make sure to commit your changes with clear commit messages.
    *   For example, after adding a new test, commit with a message like "Added new test for navigation".

### Merging Changes[​](#merging-changes "Direct link to Merging Changes")

#### Merging Back to Master[​](#merging-back-to-master "Direct link to Merging Back to Master")

1.  **Switch to the Master Branch**: If you’re ready to merge your changes, switch back to the master branch.
2.  **Merge Your Branch**: Select your feature or bug-fix branch and merge it into the master.
3.  **Commit the Merge**: Finalize the merge by committing it in the master branch.

#### Handling Merge Conflicts[​](#handling-merge-conflicts "Direct link to Handling Merge Conflicts")

*   In cases where there are conflicts between your branch and the master, Boozang provides an interface for conflict resolution.
*   Choose the correct changes from each branch and order them as needed.
*   After resolving conflicts, commit these changes to complete the merge.

### Best Practices[​](#best-practices "Direct link to Best Practices")

*   **Regularly Update Branches**: Keep your branches updated with the latest changes from the master to minimize conflicts.
*   **Clear Commit Messages**: Always use clear and descriptive commit messages for easy tracking of changes.

### Conclusion[​](#conclusion "Direct link to Conclusion")

Working with non-protected branches in Boozang allows for a more flexible approach to version control, especially in smaller teams or projects with less strict control mechanisms. However, it's important to maintain discipline in commits and merges to ensure the integrity of the master branch.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/versioning/branching.mdx)

[

Previous

Canvas Testing

](/docs/core-concepts/canvas-testing)[

Next

Stashing changes

](/docs/core-concepts/versioning/stash)

*   [Branching and Merging](#branching-and-merging)
    *   [Introduction](#introduction)
    *   [Branching in Boozang](#branching-in-boozang)
    *   [Committing Changes](#committing-changes)
    *   [Merging Changes](#merging-changes)
    *   [Best Practices](#best-practices)
    *   [Conclusion](#conclusion)

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