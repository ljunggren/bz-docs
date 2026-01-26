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
    
*   [Integrations](/docs/integrations/feature)
    
*   [API testing](/docs/api-testing/api-overview)
    
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
    *   [Coded tests in Boozang](/docs/coded/introduction)
    *   [Comparison with Cypress and Playwright](/docs/coded/migration)
*   [Other](/docs/other/security)
    

*   [](/)
*   Coded tests
*   Comparison with Cypress and Playwright

On this page

Comparison with Cypress and Playwright
======================================

Navigation and Page Actions[​](#navigation-and-page-actions "Direct link to Navigation and Page Actions")
---------------------------------------------------------------------------------------------------------

Coded tests in Boozang are in Beta, so there are rapid changes happening. If any of these functions are missing or not working as expected, drop us an email at: [support@boozang.com](mailto:support@boozang.com).

Boozang Command

Cypress Command

Playwright Command

Description

`$script.visitPage(url)`

`cy.visit(url)`

`await page.goto(url)`

Navigates to a URL.

`$script.go(direction)`

`cy.go(direction)`

`await page.goBack()` / `await page.goForward()`

Navigates back or forward in browser history.

`$script.visitPage(url)`

`cy.reload()`

`await page.reload()`

Reloads the current page.

`$script.viewport(width, height)`

`cy.viewport(width, height)`

`await page.setViewportSize({ width, height })`

Sets the browser viewport size.

Element Selection[​](#element-selection "Direct link to Element Selection")
---------------------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.get(selector)`

`cy.get(selector)`

`await page.$(selector)` / `page.locator(selector)`

Gets one or more DOM elements by selector.

`$script.contains(text)`

`cy.contains(text)`

`await page.locator('text=' + text)`

Gets DOM elements containing the specified text.

`$script.find(selector)`

`cy.find(selector)`

`await elementHandle.$(selector)`

Finds descendants of the DOM elements that match the selector.

Interactions[​](#interactions "Direct link to Interactions")
------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.click(selector)`

`cy.click()`

`await page.click(selector)`

Clicks on a DOM element.

`$script.type(selector, text)`

`cy.type(text)`

`await page.type(selector, text)`

Types into a DOM element.

`$script.clear(selector)`

`cy.clear()`

`await page.fill(selector, '')`

Clears the value of an input or textarea.

`$script.set(value)`

`cy.select(value)`

`await page.selectOption(selector, value)`

Selects an option in a `<select>` element.

Assertions[​](#assertions "Direct link to Assertions")
------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.hasData(locator, value)`

`cy.should(assertion)`

`expect(locator).toHaveProperty('property', value)`

Asserts that the element satisfies the given condition.

`$script.expect(subject)`

`cy.expect(subject)`

`expect(subject).toBe(value)`

Asserts that the subject satisfies the condition.

`$script.and(assertion)`

`cy.and(assertion)`

`expect(locator).toHaveProperty('property', value)`

Adds additional assertions.

Waiting[​](#waiting "Direct link to Waiting")
---------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.wait(time)`

`cy.wait(time)`

`await page.waitForTimeout(time)`

Waits for a specified amount of time.

`$script.wait(alias)`

`cy.wait(alias)`

`await page.waitForResponse(route)`

Waits for a route or request alias.

Network Requests[​](#network-requests "Direct link to Network Requests")
------------------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.server()`

`cy.server()`

`await page.route(url, handler)`

Starts a server to begin routing responses.

`$script.route(url)`

`cy.route(url)`

`await page.route(url, handler)`

Defines a route for a URL to intercept requests.

`$script.request(options)`

`cy.request(options)`

`await page.request(url, options)`

Makes an HTTP request.

Fixtures[​](#fixtures "Direct link to Fixtures")
------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.fixture(filePath)`

`cy.fixture(filePath)`

`await page.addInitScript({ path: filePath })`

Loads a fixed set of data located in a file.

Clock and Timers[​](#clock-and-timers "Direct link to Clock and Timers")
------------------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.clock()`

`cy.clock()`

`await page.context().newCDPSession(page)` and `await session.send('Animation.enable')`

Controls the clock to test time-dependent code.

`$script.tick(time)`

`cy.tick(time)`

`await session.send('Animation.setPlaybackRate', { playbackRate: time })`

Moves time forward by a specified amount.

Aliases[​](#aliases "Direct link to Aliases")
---------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.as(alias)`

`cy.as(alias)`

`const alias = await page.$(selector)`

Alias a DOM element or a route.

`$script.get(alias)`

`cy.get(alias)`

`await alias.click()`

Gets the element or route by alias.

Custom Commands[​](#custom-commands "Direct link to Custom Commands")
---------------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.add(name, callback)`

`Cypress.Commands.add(name, callback)`

Extend Playwright's Page or Browser context by adding custom functions directly to the Playwright API objects.

Adds a custom command to Cypress.

Handling Frames and Windows[​](#handling-frames-and-windows "Direct link to Handling Frames and Windows")
---------------------------------------------------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.frameLoaded()`

`cy.frameLoaded()`

`await page.frameLocator(selector)`

Checks that a frame has loaded.

`$script.iframe()`

`cy.iframe()`

`await page.frameLocator(selector).frame()`

Gets an iframe by selector.

`$script.window()`

`cy.window()`

`const [newPage] = await Promise.all([ page.waitForEvent('popup'), page.click(selector) ]);`

Accesses the window object.

File Uploads[​](#file-uploads "Direct link to File Uploads")
------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.attachFile('input[type="file"]', filePath)`

`cy.get('input[type="file"]').attachFile(filePath)`

`await page.setInputFiles('input[type="file"]', filePath)`

Sets files to upload for an input element.

Screenshots and PDFs[​](#screenshots-and-pdfs "Direct link to Screenshots and PDFs")
------------------------------------------------------------------------------------

Boozang Command

Cypress Command

Playwright Command

Description

`$script.screenshot()`

`cy.screenshot()`

`await page.screenshot({ path: 'screenshot.png' })`

Takes a screenshot of the page.

`$script.screenshot('filename')`

`cy.screenshot('filename')`

`await page.screenshot({ path: 'filename.png' })`

Takes a screenshot with a specified filename.

`$script.pdf()`

`cy.pdf()`

`await page.pdf({ path: 'document.pdf' })`

Generates a PDF of the page.

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coded/migration.mdx)

[

Previous

Coded tests in Boozang

](/docs/coded/introduction)[

Next

Security Concerns

](/docs/other/security)

*   [Navigation and Page Actions](#navigation-and-page-actions)
*   [Element Selection](#element-selection)
*   [Interactions](#interactions)
*   [Assertions](#assertions)
*   [Waiting](#waiting)
*   [Network Requests](#network-requests)
*   [Fixtures](#fixtures)
*   [Clock and Timers](#clock-and-timers)
*   [Aliases](#aliases)
*   [Custom Commands](#custom-commands)
*   [Handling Frames and Windows](#handling-frames-and-windows)
*   [File Uploads](#file-uploads)
*   [Screenshots and PDFs](#screenshots-and-pdfs)

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