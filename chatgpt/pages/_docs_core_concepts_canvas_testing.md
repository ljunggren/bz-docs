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
*   Canvas Testing

On this page

Canvas Testing
==============

Introduction to Canvas testing[​](#introduction-to-canvas-testing "Direct link to Introduction to Canvas testing")
------------------------------------------------------------------------------------------------------------------

[00:02](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=2) Canvas testing for test automation is incredibly challenging.

[00:26](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=26) Challenges in automated testing for Canvas elements

[00:43](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=43) Using XY coordinates for drag and drop testing

[00:59](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=59) Using the canvas game for automated testing

[01:18](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=78) Resetting the position of a ball for emulation success.

[01:42](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=102) Testing feature including record, reset button, and drag-drop event

[02:00](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=120) Boozang enables drag-and-drop testing with stable selectors.

[02:15](https://www.youtube.com/watch?v=JhZ6QrVL3BU&t=135) Achieve test automation on canvas with reduced flakiness

The HTML Canvas[​](#the-html-canvas "Direct link to The HTML Canvas")
---------------------------------------------------------------------

Create tests on top of graphical elements in your application using canvas testing. Unlike other methods, Boozang allows us to record clicks and do validations inside the canvas, just like we do on elements in the DOM tree.

Doing testing on top of HTML canvases has always been challenging. The biggest challenge is that the details inside the canvas isn’t exposed in the DOM tree, so regular record/replay tools simple can’t do the job.

GoJS introduction[​](#gojs-introduction "Direct link to GoJS introduction")
---------------------------------------------------------------------------

We illustrate this with an example using GoJS. This is a versatile library for creating diagrams of different kinds, including

*   Flowcharts
*   State charts
*   Org charts
*   Industrial processes

It’s widely used, and has native support for all major Javascript frameworks, including React, Angular, and Vue.

For a complete description of GoJS consult [https://gojs.net/latest/index.html](https://gojs.net/latest/index.html). You can also see a bunch of different diagram samples: [https://gojs.net/latest/samples/index.html.](https://gojs.net/latest/samples/index.html).

The Kanban board[​](#the-kanban-board "Direct link to The Kanban board")
------------------------------------------------------------------------

Take a look at an example of a clickable Kanban board, as shown [here](https://gojs.net/latest/samples/kanban.html).

![Kanban board](/assets/images/kanban-69a78871e6bd49b2ed00cf02d24ff28d.png "Kanban board")

A Kanban board written in GoJS.

Let’s look at the click of the “New Item”. This is displayed as a HTML canvas element. Looking at the generated code we see that the whole logic has been hidden inside the `<canvas>` element.

    <canvas tabindex="0" width="1808" height="966" style="position: absolute; top: 0px; left: 0px; z-index: 2; user-select: none; width: 904px; height: 483px;">This text is displayed if your browser does not support the Canvas HTML element.</canvas>

As we cannot manipulate the DOM tree directly, this makes conventional testing methods unusable. Let’s look at some of the existing options out there.

Existing test methods[​](#existing-test-methods "Direct link to Existing test methods")
---------------------------------------------------------------------------------------

So far, there are few options for testing Canvas elements. Usually, you’ll need to do plenty of custom development. In order to interact with the Canvas you’ll need to manually trigger browser events, such as on-click or mouse-down events, which become very sensitive to small changes, such as browser window dimensions. It’s also makes it very hard to automate drag-and-drop events, which is needed for our Kanban example.

More-over, the only way to do validation of the Canvas is to use visual verification. This also tends to create brittle tests, often generating false negatives (false bugs).

To read more about these methods, check below for Selenium and Cypress respectively

*   Selenium Canvas testing
*   Cypress Visual Testing

In the end, the limited support for Canvas testing usually results in resorting to manual tests, losing important automated test coverage.

Canvas testing in Boozang[​](#canvas-testing-in-boozang "Direct link to Canvas testing in Boozang")
---------------------------------------------------------------------------------------------------

In Boozang we take a quite different approach. Instead of settling for the methods explained below, we are able to look inside the html Canvas element, and record operations on it.

![Kanban in booang](/assets/images/kanban-69a78871e6bd49b2ed00cf02d24ff28d.png "Kanban in Boozang")

We introduce a new set of selectors called

    CANVASCANVAS:textElement

Using these element selectors you can both capture events done on the canvas, such as clicks or drag-and-drop (as in the animation above), and do validations (assertions) on items inside the canvas. This means that instead of having to specify starting and ending coordinates for a drag-and-drop action, we can say drag box with label “Banana” to box label “Apple”.

This means tests become stable to initial conditions changing. It also allows us to do actions and validations inside the canvas, instead of doing actions inside the canvas, and relying to validations outside, which is typical for other approaches.

Offset[​](#offset "Direct link to Offset")
------------------------------------------

![Kanban in booang](/assets/images/gojs-offset-4017a3888b6fb3634483c7579264d6ad.png "Kanban in Boozang")

As we match the text content of an element in the HTML canvas, it's sometimes useful to specify a relative offset beetwen the text and where the drag-and-drop should be initiated

Try it[​](#try-it "Direct link to Try it")
------------------------------------------

In order to try different GoJS examples, you can check out [https://gojs.net/latest/samples/index.html.](https://gojs.net/latest/samples/index.html) or our own small Canvas example [https://thelab.boozang.com/canvasGame](https://thelab.boozang.com/canvasGame).

Summary[​](#summary "Direct link to Summary")
---------------------------------------------

Being able to implement different graphical elements using the HTML Canvas element can be really useful. Unfortunately, it often blocks you from doing any meaningful automated testing, forcing you do either change your development approach, or resort to manual testing.

Boozang bridges this gap by introducing a new set of selectors that can look inside the Canvas element, allowing for the creation of sophisticated functional tests.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/canvas-testing.md)

[

Previous

Troubleshooting

](/docs/core-concepts/using-data/troubleshooting)[

Next

Branching and merging

](/docs/core-concepts/versioning/branching)

*   [Introduction to Canvas testing](#introduction-to-canvas-testing)
*   [The HTML Canvas](#the-html-canvas)
*   [GoJS introduction](#gojs-introduction)
*   [The Kanban board](#the-kanban-board)
*   [Existing test methods](#existing-test-methods)
*   [Canvas testing in Boozang](#canvas-testing-in-boozang)
*   [Offset](#offset)
*   [Try it](#try-it)
*   [Summary](#summary)

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