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
    
    *   [Overview](/docs/api-testing/api-overview)
    *   [Example with JSON server](/docs/api-testing/api-json)
    *   [Temporary database](/docs/api-testing/temporary-database)
    *   [Tree view](/docs/api-testing/tree-view)
    *   [JSON compare](/docs/api-testing/json-compare)
    *   [Load testing](/docs/api-testing/load-test)
*   [Model-based testing](/docs/model-based-testing/introduction)
    
*   [Coded tests](/docs/coded/introduction)
    
*   [Other](/docs/other/security)
    

*   [](/)
*   API testing
*   Example with JSON server

On this page

Example with JSON server
========================

Dependencies[​](#dependencies "Direct link to Dependencies")
------------------------------------------------------------

In this exercise, we use the NPM package JSON-server to emulate a REST API locally. We then use Boozang to create a data-driven API test consisting of create-operations and edit-operations, along with validations.

I based this post on the blog post from Sebastien Eschweiler: [https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d).

It’s a great starting point as it gives a more in-depth look at JSON-server and Postman.

Installing JSON server[​](#installing-json-server "Direct link to Installing JSON server")
------------------------------------------------------------------------------------------

JSON server is a handy tool to emulate an API. Start by installing the npm package globally on your computer.

    npm install -g json-server

Next, create a db.json with the following content.

    {  "employees": [  {    "id","1",   "first_name": "Mats",   "last_name": "Ljunggren",   "email": "aa@bb.com"  } ]}

Start the server locally.

    $ json-server --watch db.json

You can now easily verify that the API is running by accessing the URL in your browser: [http://localhost:3000](http://localhost:3000)

Getting started in Boozang[​](#getting-started-in-boozang "Direct link to Getting started in Boozang")
------------------------------------------------------------------------------------------------------

You can skip this section if you have already created an account and are familiar with Boozang.

### Signing up[​](#signing-up "Direct link to Signing up")

To get started, sign-up for a free account at: boozang.com.

![Homepage](/assets/images/api1-32260214069cd4c9733654cc328cd880.png "Homepage")

You will receive a confirmation email, and you are ready to get started.

We recently opened up the free tier of Boozang to unlimited API testing.

### Creating your first project[​](#creating-your-first-project "Direct link to Creating your first project")

Go ahead and create your first project by clicking the “New project” button. Let’s name the project: “API lab” and click “Submit.” You can ignore the other options for now.

![Project page](/assets/images/api2-3945d08ee94cfd2a350274ae108b418c.png "Project page")

As you can see, the project will show in the project list.

### Installing the extension[​](#installing-the-extension "Direct link to Installing the extension")

To launch the Boozang tool, you’ll need a supported browser. Supported browsers are Google Chrome, Microsoft Edge, or Chromium. Go ahead and install the Boozang extension using the browser of your choice.

The extension can be found here.

### Launching the tool[​](#launching-the-tool "Direct link to Launching the tool")

Launch the tool by clicking launch next to the project name “API lab” in the management UI. The Boozang tool (or the IDE) will be launched in a new browser window. This window is running locally in your web browser and can be treated similarly to a desktop application.

Start by entering the URL to your local JSON-server when you get prompted for Environment config. You can always revisit this configuration in the Settings -> Environment using the sidebar navigation.

![Enviroments](/assets/images/api3-b344cf988703d5aef852c641006b6486.png "Enviroments")

BTW: If you get prompted to “Enable AI authorization,” go ahead and skip this step.

### Switching to test authoring view[​](#switching-to-test-authoring-view "Direct link to Switching to test authoring view")

Make sure to navigate to the top icon using the sidebar navigation. You are now at the test authoring view, where you can create modules and tests. In Boozang, a module-based tool, all tests need to be inside modules.

![Test authoring](/assets/images/api4-55940b5a8c3d1f66f6d776351ecf8959.png "Test authoring")

Even though all the work we will do from now on will be in this authoring view, try playing around using the sidebar to discover what can be done using the tool.

### Module and test creation[​](#module-and-test-creation "Direct link to Module and test creation")

Boozang is comprised of modules and tests. Start by creating a module from the authoring view by clicking “New module.” Enter the module name “JSON server”.

![Test creation](/assets/images/api5-41f260c74aca6949cb4f02c88f837032.png "Test creation")

To create a test, make sure you click into the module “JSON server” and select the API tests from the module tabs. Click “New API test”.

![API tests](/assets/images/api6-30f7bdfc31bffc9b7005ea4b3672bf32.png "API tests")

You can now select the JSON server you installed as your API host. GO ahead and click “Submit,” and you will see an empty API test created.

As soon as you create a new API test, you can access the API action details.

Getting started with API tests[​](#getting-started-with-api-tests "Direct link to Getting started with API tests")
------------------------------------------------------------------------------------------------------------------

The steps we have taken previously were for setup only. We can now make all the rest of the API requests inside the same API test.

Defining data: Employee[​](#defining-data-employee "Direct link to Defining data: Employee")
--------------------------------------------------------------------------------------------

![Defining data](/assets/images/api7-83ee15dcb89411e3f984ed9649735287.png "Defining data")

Start by defining the data we will use. Let’s start by going to the Data tab, adding object data on the $test level, and entering the following information.

    {"firstname":"Mats","lastname":"Ljunggren","email":"mats.ljunggren@boozang.com"}

See below screenshot

![Defining data](/assets/images/api8-1df246cc8203afc8466353f2f86afe9f.png "Defining data")

### First API call: Create employee[​](#first-api-call-create-employee "Direct link to First API call: Create employee")

Now it’s time to do the initial API call – to create the employee data via the employee. This is done using the HTTP method POST.

Make sure you use the dynamic data in the body of the request according to the picture below.

![Defining data](/assets/images/api9-a330f9ca3f3340039652bbfa9d8a17f7.png "Defining data")

Do you get a green checkmark? Try it using the play button within the “Try” tab.

![Green](/assets/images/api10-dc794e68f04a49ba9b130567aef2aa98.png "Green")

Great, let’s move on.

### First API validation: Create employee[​](#first-api-validation-create-employee "Direct link to First API validation: Create employee")

The green checkmark on the “Try” tab is great, but what does it tell us? It only tells us that the request went out successfully. You can also see a green checkmark on the “Script” tab. Let’s look a little closer at this.

    (()=>{  if($result.status>=400){    return false;  }  return true;})()

Here, a return value of false means the API call failed, and a return value of true means success. By default, we are only looking for HTTP status codes < 400. Let’s tune this a little bit to make validation a little stricter.

    (()=>{  console.log("BZ-LOG: ### Result: " + $result.responseJSON.id)  if ($result.status >201) {    return false;  }      console.log("BZ-LOG: ### Result: " + $result.responseJSON.id)  $test.response_id=$result.responseJSON.id;  return !isNaN($result.responseJSON.id);})();

That’s better.

![Defining data](/assets/images/api11-ac1427b325aeff2abd69eb343df82395.png "Defining data")

### Saving the id[​](#saving-the-id "Direct link to Saving the id")

It’s often necessary to save some data from a previous API call to be used in a subsequent one. This example is not an exception. Here we would like to save the id. We can do that in a very straightforward manner in Boozang.

    $test.response_id=$result.responseJSON.id;

### Second API call: Retrieve employee[​](#second-api-call-retrieve-employee "Direct link to Second API call: Retrieve employee")

We want to make sure the data has been saved in the API server correctly. We will use the GET function for this.

Now we could choose to add one more API action to the test. Instead, we will add an additional API call to the API test using the plus button (+) next to the API call drop-down to keep it simple.

![Defining data](/assets/images/api12-1165ce1fe80f9a19cc8788ec65d8d714.png "Defining data")

We get a new blank test to work with.

![Defining data](/assets/images/api13-7e6ec39276c38898f294430eca95cad7.png "Defining data")

Make sure to fill out the host field and end-point

![Defining data](/assets/images/api14-7936456eb6ddace0cd861750746de94c.png "Defining data")

Here, we will insert the id as a query to make sure we fetch the right employee.

![Defining data](/assets/images/api15-902c16e1bd08226142ad4481d57f7eae.png "Defining data")

Go to the Try tab and make sure the information is correct.

![Defining data](/assets/images/api16-6d9c0630f6c3f010f335ec674ae760ca.png "Defining data")

Second API call: Validating employee information[​](#second-api-call-validating-employee-information "Direct link to Second API call: Validating employee information")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

In this step, we want to validate that the API stored the employee information correctly. We do this by modifying the script in the following way.

    (()=>{  console.log("BZ-LOG: ### Result: " + $result.responseJSON.id)  if ($result.status >201) {    return false;  }     let status = $result.responseJSON[0].first_name === $test.person.firstName &&  $result.responseJSON[0].last_name === $test.person.lastName &&  $result.responseJSON[0].email === $test.person.email;     return status;})();

In the tool, it should look like this

![Defining data](/assets/images/api17-88202c9342caea410d13722f368e52a6.png "Defining data")

You can now play the test

![Defining data](/assets/images/api18-ba225356d0556af8bd3ac81ac7bd3339.png "Defining data")

As you can see, there is limited information here. It only shows the green checkmark that the test executed successfully.

To get more information, switch to the report view

![Defining data](/assets/images/api19-5bdaa29b4bdded980d32c17d746ff34e.png "Defining data")

This was an example of how you can create a data-driven test in Boozang that carries over data for validation to a subsequent API call.

Conclusion[​](#conclusion "Direct link to Conclusion")
------------------------------------------------------

As you can see, Boozang requires some work to get started. Once you have your initial module, it’s fairly straightforward to keep adding API requests and tie them together using data.

As Boozang was designed for end-to-end UI tests, API tests, and a mix of the two, there is some added complexity to work through. The advantage is that having access to the application interface via the browser provides several benefits to the user. Read more about these benefits here: [https://boozang.com/blog/advanced-api-testing](https://boozang.com/blog/advanced-api-testing).

[Edit this page](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-testing/api-json.mdx)

[

Previous

Overview

](/docs/api-testing/api-overview)[

Next

Temporary database

](/docs/api-testing/temporary-database)

*   [Dependencies](#dependencies)
*   [Installing JSON server](#installing-json-server)
*   [Getting started in Boozang](#getting-started-in-boozang)
    *   [Signing up](#signing-up)
    *   [Creating your first project](#creating-your-first-project)
    *   [Installing the extension](#installing-the-extension)
    *   [Launching the tool](#launching-the-tool)
    *   [Switching to test authoring view](#switching-to-test-authoring-view)
    *   [Module and test creation](#module-and-test-creation)
*   [Getting started with API tests](#getting-started-with-api-tests)
*   [Defining data: Employee](#defining-data-employee)
    *   [First API call: Create employee](#first-api-call-create-employee)
    *   [First API validation: Create employee](#first-api-validation-create-employee)
    *   [Saving the id](#saving-the-id)
    *   [Second API call: Retrieve employee](#second-api-call-retrieve-employee)
*   [Second API call: Validating employee information](#second-api-call-validating-employee-information)
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