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
*   An end-to-end example

On this page

An end-to-end example
=====================

[00:02](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=2) Boozang now supports proper branching and merging with merge requests

[01:28](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=88) Creating and managing feature branches

[02:54](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=174) Creating and managing merge requests

[04:23](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=263) Approving merge requests and creating merge requests with conflicts

[05:48](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=348) Creating and merging branches in Boozang

[07:19](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=439) Merging conflict resolution process

[08:52](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=532) Merging feature branches and conflict resolution

[10:28](https://www.youtube.com/watch?v=ja7ETXsjKGI&t=628) Handling conflicts in a merge request

* * *

An end-to-end example[​](#an-end-to-end-example "Direct link to An end-to-end example")
---------------------------------------------------------------------------------------

### Introduction[​](#introduction "Direct link to Introduction")

This guide provides a detailed example of using branches, commits, and merge requests in Boozang, with an emphasis on working with a protected master branch. This ensures a stable and controlled integration of changes.

### Step 1: Initial Setup[​](#step-1-initial-setup "Direct link to Step 1: Initial Setup")

#### Setting Up a Protected Master Branch[​](#setting-up-a-protected-master-branch "Direct link to Setting Up a Protected Master Branch")

*   **Protect the Master**: In Boozang, configure the master branch as protected, restricting direct commits and merges to authorized personnel only.

#### Creating a Feature Branch[​](#creating-a-feature-branch "Direct link to Creating a Feature Branch")

1.  **Create a New Branch**: From the master branch, create a new branch for your feature, e.g., `feature-enhancement`.
2.  **Switch to Your Branch**: Move to the `feature-enhancement` branch to begin development.

### Step 2: Developing Your Feature[​](#step-2-developing-your-feature "Direct link to Step 2: Developing Your Feature")

#### Implementing Changes[​](#implementing-changes "Direct link to Implementing Changes")

1.  **Develop the Feature**: Work on your feature in the `feature-enhancement` branch, making sure to save and test your progress.
2.  **Commit Changes**: Commit your changes with clear, descriptive commit messages, e.g., `Added new UI test cases`.

### Step 3: Preparing for Integration[​](#step-3-preparing-for-integration "Direct link to Step 3: Preparing for Integration")

#### Syncing with Master[​](#syncing-with-master "Direct link to Syncing with Master")

1.  **Pull Latest Changes**: Regularly pull and merge the latest changes from the protected master branch to your feature branch.
2.  **Resolve Any Conflicts**: If conflicts arise during the merge, resolve them promptly.

#### Finalizing Your Work[​](#finalizing-your-work "Direct link to Finalizing Your Work")

*   **Last Commit**: Once you are satisfied with your feature and it's fully tested, commit any final changes.

### Step 4: Merge Request Process[​](#step-4-merge-request-process "Direct link to Step 4: Merge Request Process")

#### Initiating a Merge Request[​](#initiating-a-merge-request "Direct link to Initiating a Merge Request")

1.  **Create a Merge Request**: From your `feature-enhancement` branch, initiate a merge request towards the master branch.
2.  **Document Your Request**: Clearly describe the purpose and scope of your changes in the merge request.

#### Review and Discussion[​](#review-and-discussion "Direct link to Review and Discussion")

*   **Engage with Reviewers**: Collaborate with assigned reviewers, responding to comments and making any necessary revisions.

### Step 5: Completing the Merge[​](#step-5-completing-the-merge "Direct link to Step 5: Completing the Merge")

#### Final Approval and Merge[​](#final-approval-and-merge "Direct link to Final Approval and Merge")

1.  **Approval from Authorized Personnel**: Wait for the approval from those authorized to merge into the master branch.
2.  **Merge Your Changes**: Once approved, the authorized person will merge your changes into the master branch.

#### Post-Merge Steps[​](#post-merge-steps "Direct link to Post-Merge Steps")

*   **Verify in Master**: After the merge, test the changes in the master branch to ensure everything works as expected.
*   **Close the Merge Request**: Mark the merge request as completed.

### Step 6: Post-Merge Clean-up[​](#step-6-post-merge-clean-up "Direct link to Step 6: Post-Merge Clean-up")

#### Cleaning Up Branches[​](#cleaning-up-branches "Direct link to Cleaning Up Branches")

*   **Optional Branch Deletion**: Consider deleting the `feature-enhancement` branch if it's no longer needed to keep the repository clean.

### Conclusion[​](#conclusion "Direct link to Conclusion")

This workflow demonstrates how to effectively use branches, commits, and merge requests in Boozang, particularly with a protected master branch, to ensure high-quality and controlled updates to your project.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/versioning/end2end.mdx)

[

Previous

Protected branches and merge requests

](/docs/core-concepts/versioning/protected)[

Next

Overview

](/docs/reporting/overview)

*   [An end-to-end example](#an-end-to-end-example)
    *   [Introduction](#introduction)
    *   [Step 1: Initial Setup](#step-1-initial-setup)
    *   [Step 2: Developing Your Feature](#step-2-developing-your-feature)
    *   [Step 3: Preparing for Integration](#step-3-preparing-for-integration)
    *   [Step 4: Merge Request Process](#step-4-merge-request-process)
    *   [Step 5: Completing the Merge](#step-5-completing-the-merge)
    *   [Step 6: Post-Merge Clean-up](#step-6-post-merge-clean-up)
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

Copyright © 2024 Boozang Technologies, Inc. Built with Docusaurus.