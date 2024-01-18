"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,g=d["".concat(r,".").concat(h)]||d[h]||c[h]||s;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const s={id:"api-overview",title:"Overview"},i=void 0,l={unversionedId:"api-testing/api-overview",id:"api-testing/api-overview",title:"Overview",description:"Note on pricing",source:"@site/docs/api-testing/api-overview.mdx",sourceDirName:"api-testing",slug:"/api-testing/api-overview",permalink:"/docs/api-testing/api-overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-testing/api-overview.mdx",tags:[],version:"current",frontMatter:{id:"api-overview",title:"Overview"},sidebar:"docs",previous:{title:"Taking it further",permalink:"/docs/integrations/further"},next:{title:"Example with JSON server",permalink:"/docs/api-testing/api-json"}},r={},p=[{value:"Note on pricing",id:"note-on-pricing",level:2},{value:"Overview",id:"overview",level:2},{value:"Background",id:"background",level:2},{value:"API data model",id:"api-data-model",level:2},{value:"Modules",id:"modules",level:3},{value:"API action relationships",id:"api-action-relationships",level:3},{value:"The new API UI",id:"the-new-api-ui",level:2},{value:"Creating an API test",id:"creating-an-api-test",level:3},{value:"The API details (upper part)",id:"the-api-details-upper-part",level:3},{value:"List of API calls",id:"list-of-api-calls",level:4},{value:"Add, copy, paste, delete, disable, re-order",id:"add-copy-paste-delete-disable-re-order",level:4},{value:"HTTP Method (GET, POST, \u2026) + end-point",id:"http-method-get-post---end-point",level:4},{value:"Content-type",id:"content-type",level:4},{value:"The API details (sub-tabs)",id:"the-api-details-sub-tabs",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Headers",id:"headers",level:4},{value:"Query",id:"query",level:4},{value:"Body (POST only)",id:"body-post-only",level:4},{value:"Script",id:"script",level:4},{value:"Adding an additional API call",id:"adding-an-additional-api-call",level:3},{value:"How to use the API UI",id:"how-to-use-the-api-ui",level:3},{value:"Importing and exporting API tests",id:"importing-and-exporting-api-tests",level:2},{value:"A note on imports",id:"a-note-on-imports",level:3},{value:"Exporting API call (Postman example)",id:"exporting-api-call-postman-example",level:3},{value:"Importing the API call to Boozang",id:"importing-the-api-call-to-boozang",level:3},{value:"Exporting an API call",id:"exporting-an-api-call",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"note-on-pricing"},"Note on pricing"),(0,o.kt)("p",null,"We are really excited to announce that Boozang now provides unlimited API testing for FREE so I\u2019m reposting some relevant blog posts."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"By introducing a new set of API testing features in Boozang, we provide a single browser-based solution for both API and UI tests, allowing for a unified testing process based on Cucumber / BDD, fully integrated to JIRA / XRay."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Most people will agree that Postman stands out as the option most people will turn to when it comes to API testing. It\u2019s easy to get started and relatively user-friendly. For more extensive end-to-end tests, we have found some limiting factors where Postman falls short."),(0,o.kt)("p",null,"These include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mixing UI tests and API tests"),(0,o.kt)("li",{parentName:"ul"},"Creating API tests suites where data is carried forward between the API calls"),(0,o.kt)("li",{parentName:"ul"},"Creating BDD / Cucumber API tests"),(0,o.kt)("li",{parentName:"ul"},"Integration to external systems, such as JIRA / XRay"),(0,o.kt)("li",{parentName:"ul"},"Using the UI interactions to facilitate API test creation")),(0,o.kt)("p",null,"In Boozang, we support all these use-cases. But we still lacked ease-of-use and debugging capabilities. In our latest feature release, we have tried to improve this significantly."),(0,o.kt)("p",null,"We have also launched features that will allow you to easily migrate between other tools, such as Postman and JMeter. This way, it opens up for collaboration within an organization where different tools are used. Also, it greatly mitigates any lock-in concerns."),(0,o.kt)("h2",{id:"api-data-model"},"API data model"),(0,o.kt)("p",null,"A note on test types\nIn Boozang, two of our test types supports API calls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Regular tests"),(0,o.kt)("li",{parentName:"ul"},"API tests")),(0,o.kt)("p",null,"The only difference is that Regular tests can consist of both UI actions and API actions, while API tests cannot do UI actions. It\u2019s therefore recommended that you use regular tests for mixed UI and API tests and API tests for pure API tests. "),(0,o.kt)("p",null,"For flexibility, both test types support Javascript, Group, and Plug-test case actions."),(0,o.kt)("p",null,"Note: Nothing would stop you from using only regular tests, but for housekeeping purposes, we recommend that you utilize the API test type if you know you will not be adding UI interactions."),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,"To create an API test, you will need to have a module created. In the below image, you can see that a generic module called \u201cJSON-server\u201d has been created."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(4809).Z,title:"Homepage",width:"770",height:"444"})),(0,o.kt)("p",null,"In projects where you use both UI and API tests, we recommend that you follow a shared module structure, where UI and API tests can be found in the same modules. If you decide to create a new API module structure, use a naming prefix, such as API, to keep them apart easily. "),(0,o.kt)("h3",{id:"api-action-relationships"},"API action relationships"),(0,o.kt)("p",null,"When creating an API test, an API action will automatically be added to the test. An API test can have several API actions, which will be executed in a sequence, similar to clicks and validations in a UI test."),(0,o.kt)("p",null,"An API action can also execute several API calls. This means we have an unusually intricate hierarchy, with the following one -> many relationships (denoted -*>). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Test suites -*> API tests -*> API actions -*> API calls\n")),(0,o.kt)("p",null,"This might seem overly complex, but there is a reason for this complexity. Boozang was built to be able to run complex end-to-end API call flows alongside UI actions."),(0,o.kt)("p",null,"As a single UI action can trigger many API requests, this structure allows us to keep a one-to-one mapping between UI actions and API actions. Another bonus is that API load tests, that are set up on a per-action basis in Boozang, can support complex load scenarios, comprised of many API calls."),(0,o.kt)("h2",{id:"the-new-api-ui"},"The new API UI"),(0,o.kt)("h3",{id:"creating-an-api-test"},"Creating an API test"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(1200).Z,title:"Homepage",width:"899",height:"771"})),(0,o.kt)("p",null,"Click \u201cNew API test\u201d within the selected module. Besides the name, make sure you select the API host. If the host isn\u2019t shown, make sure it\u2019s set up under Settings-> Environment."),(0,o.kt)("p",null,"Start by creating an API test from scratch. We will see the following view."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(9575).Z,title:"Homepage",width:"899",height:"771"})),(0,o.kt)("p",null,"The view is divided into an upper part and a lower part with sub-tabs."),(0,o.kt)("h3",{id:"the-api-details-upper-part"},"The API details (upper part)"),(0,o.kt)("h4",{id:"list-of-api-calls"},"List of API calls"),(0,o.kt)("p",null,"For most API actions, a single API call is enough. There are some cases where is better to group API calls together in a single API action. Let\u2019s imagine the product creation flow, where an API endpoint needs to be called to create the product, then the product id that is returned needs to be used to call a different API endpoint to create a default subproduct."),(0,o.kt)("p",null,"As both of these API calls are used to create a single product, consider grouping them as two calls in the same \u201cCreate product\u201d API action."),(0,o.kt)("h4",{id:"add-copy-paste-delete-disable-re-order"},"Add, copy, paste, delete, disable, re-order"),(0,o.kt)("p",null,"All the API calls in the dropdown list can be manipulated with the controls on the right of the dropdown. Notice that you can use the up-down arrows to re-order the API calls."),(0,o.kt)("h4",{id:"http-method-get-post---end-point"},"HTTP Method (GET, POST, \u2026) + end-point"),(0,o.kt)("p",null,"Set the HTTP method and the end-point for the API call here."),(0,o.kt)("h4",{id:"content-type"},"Content-type"),(0,o.kt)("p",null,"Indicates the Content-type in the POST data being sent. Typical content-type headers are \u201ctext/plain\u201d, \u201capplication/xml\u201d, \u201ctext/html\u201d, \u201capplication/json\u201d, \u201cimage/gif\u201d, and \u201cimage/jpeg\u201d."),(0,o.kt)("p",null,"In Boozang, you typically want to use JSON data (Object data) for REST APIs. In this case, make sure the content-type is set to \u201capplication/json\u201d."),(0,o.kt)("h3",{id:"the-api-details-sub-tabs"},"The API details (sub-tabs)"),(0,o.kt)("p",null,"For each API call, you can configure the request details in the sub-tabs"),(0,o.kt)("h4",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(17).Z,title:"Homepage",width:"767",height:"193"})),(0,o.kt)("p",null,"Handles API authentication. As an alternative to setting the authentication headers manually under Headers tab, you can specify the authentication method here. Either pick from one of the suggested policies, or use an auth token directly from the UI interface."),(0,o.kt)("p",null,"If you choose to use an authorization token from the UI interface, you\u2019ll need to set up the Retrieve token test-case using Boozang AI authorization. This can be setup in Settings -> Environments."),(0,o.kt)("h4",{id:"headers"},"Headers"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(1870).Z,title:"Homepage",width:"757",height:"152"})),(0,o.kt)("p",null,"Add request headers using the JSON or key-value editor."),(0,o.kt)("p",null,"Remember that you can use dynamic data from all data scopes here ($project, $module, $test, $parameter). This is useful to carry over data from a previous API test (or call), or even a UI test."),(0,o.kt)("h4",{id:"query"},"Query"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(1041).Z,title:"Homepage",width:"765",height:"152"})),(0,o.kt)("p",null,"The request URL queries can sometimes be a little messy. Use the query editor to be able to add URL parameters using the JSON or key-value editor."),(0,o.kt)("p",null,"As mentioned previously, you can use dynamic data from all data scopes here ($project, $module, $test, $parameter)."),(0,o.kt)("h4",{id:"body-post-only"},"Body (POST only)"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(2161).Z,title:"Homepage",width:"762",height:"181"})),(0,o.kt)("p",null,"Use the JSON or Key-value editor to set the body content for HTTP POST."),(0,o.kt)("p",null,"As mentioned previously, you can use dynamic data from all data scopes here ($project, $module, $test, $parameter)."),(0,o.kt)("h4",{id:"script"},"Script"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(2627).Z,title:"Homepage",width:"759",height:"245"})),(0,o.kt)("p",null,"Use the script window to validate the response and assert if the API call is successful or not. Note how returning true means success and false means failure."),(0,o.kt)("p",null,"The key data structure here is $result. This contains the whole result payload that is being returned. The following things can be accessed from the $result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$result.actionResult: Boozang internal containing the execution status\n$result.headers: The response headers\n$result.idx: Boozang internal id for load tests\n$result.request: The request object\n$result.responseJSON: The response parsed as JSON\n$result.responseText: The response as text\n$result.status: The HTTP response code\n")),(0,o.kt)("p",null,"If you want to examine these in detail you can add the following script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'(()=>{\n  console.log("BZ-LOG: ### Result: " + $result.responseJSON.id)\n  if ($result.status >201) {\n    return false;\n  } \n  console.log("BZ-LOG: ### actionResult ", $result.actionResult); \n  console.log("BZ-LOG: ### headers ", $result.headers); \n  console.log("BZ-LOG: ### idx ", $result.idx);\n  console.log("BZ-LOG: ### request ", $result.request);\n  console.log("BZ-LOG: ### responseText ", $result.responseJSON);\n  console.log("BZ-LOG: ### responseText ", $result.responseText);\n  console.log("BZ-LOG: ### status ", $result.status);\n\nreturn true;\n})();\n')),(0,o.kt)("p",null,"This way they will show up in the Boozang console window (and the Chrome console)."),(0,o.kt)("p",null,"This script is not limited to only validating HTTP response codes, like in the default script. In below example the script validates that the response id is a number. It also saves the response id in a temporary variable ($test.response_id)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'(()=>{\n  console.log("BZ-LOG: ### Result: " + $result.responseJSON.id)\n  if ($result.status >201) {\n    return false;\n  } \n  \n  console.log("BZ-LOG: ### Result: " + $result.responseJSON.id)\n  $test.response_id=$result.responseJSON.id;\n  return !isNaN($result.responseJSON.id);\n})();\n')),(0,o.kt)("p",null,"As mentioned previously, you can use dynamic data from all data scopes here (",(0,o.kt)("inlineCode",{parentName:"p"},"$project"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$module"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$test"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$parameter"),")."),(0,o.kt)("p",null,"Try"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(5643).Z,title:"Homepage",width:"759",height:"183"})),(0,o.kt)("p",null,"Before running the test, make sure its setup correctly using the this tab. You can try using different data-sets. A green check-mark will show if the request was successful or not. Note how a checkmark appears on the script tab as well. This shows if the script returned true or false, which will be the exit status of the API call."),(0,o.kt)("h3",{id:"adding-an-additional-api-call"},"Adding an additional API call"),(0,o.kt)("p",null,"You can add an additional API call using the plus (+) icon. As you can see, you can also, copy, paste, delete, and disable API calls in this menu."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(3344).Z,title:"Homepage",width:"809",height:"241"})),(0,o.kt)("h3",{id:"how-to-use-the-api-ui"},"How to use the API UI"),(0,o.kt)("p",null,"The best way of getting to know the API UI is to test it out on a familiar API. The layout should be familiar enough to Postman users, and to new users, it is recommended they try it out on an API placeholder service such as JSON-server. "),(0,o.kt)("h2",{id:"importing-and-exporting-api-tests"},"Importing and exporting API tests"),(0,o.kt)("h3",{id:"a-note-on-imports"},"A note on imports"),(0,o.kt)("p",null,"Boozang now supports importing API calls. As an API call needs an API action, it\u2019s ideal that the user starts by creating an empty API test as a starting point."),(0,o.kt)("p",null,"Start by adding the API call using the plus button next to the API call drop-down."),(0,o.kt)("h3",{id:"exporting-api-call-postman-example"},"Exporting API call (Postman example)"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(1784).Z,title:"Homepage",width:"441",height:"383"})),(0,o.kt)("p",null,"To export the API call from Postman, use the Source code view in the below image."),(0,o.kt)("p",null,"Note: Boozang currently supports HTTP and cURL format."),(0,o.kt)("h3",{id:"importing-the-api-call-to-boozang"},"Importing the API call to Boozang"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(5629).Z,title:"Homepage",width:"578",height:"661"})),(0,o.kt)("p",null,"Simple copy-paste the text content from the Postman window to the Boozang window according to the below image. "),(0,o.kt)("p",null,"Remember to verify that the correct format is selected."),(0,o.kt)("p",null,"After the import, use the \u201cTry\u201d tab to verify that the API call can be made and that the import was successful. If not, verify that the information in the other tabs is correct."),(0,o.kt)("h3",{id:"exporting-an-api-call"},"Exporting an API call"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Homepage",src:a(4198).Z,title:"Homepage",width:"898",height:"687"})),(0,o.kt)("p",null,"As most tools don\u2019t share the API test hierarchy, we support export of individual API calls rather than whole API tests. Just like in Postman, API calls can be dependent on dynamic data from Boozang variables, and as these variables might not be meaningful outside Boozang, the export needs to be done using real data."),(0,o.kt)("p",null,"As you can see from the above image, the export therefore happens from within the Try-tab, where the user can pick the values used."),(0,o.kt)("p",null,"After clicking the \u201cExport\u201d button, the user chooses the export format"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTP: Good for imports into other tools, easy to read"),(0,o.kt)("li",{parentName:"ul"},"CURL: Good for imports into other tools, troubleshooting")),(0,o.kt)("p",null,"Using the cURL export function is very useful when troubleshooting, as it can be run from command-line. That\u2019s why this should be the format of choice when opening a ticket to a team that doesn\u2019t have access to the Boozang tool."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"There are great tools out there for API testing, like Postman, but it\u2019s limited when you have advanced data dependencies between API calls. If you have dependencies between API and UI tests, you\u2019ll probably need to build your own framework."),(0,o.kt)("p",null,"Boozang is focused on solving these kind of problems, using a single browser-based solution. As we support BDD / Cucumber and JIRA / XRay integration we enable a unified testing process where Gherkin business language can be used for all tests, regardless if it\u2019s manual, UI tests, or API tests."),(0,o.kt)("p",null,"By having a unified testing process instead of a siloed approach, tools such as JIRA and XRay can truly be utilized, allowing for improved output from the whole organization, not just the Quality Assurance team."))}d.isMDXComponent=!0},4809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix1-04bcf1ba0658e949a0fadbc8b89c5e33.png"},5643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix10-e2456d618a0447069866c1165a95e418.png"},3344:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix11-e6bff19afba0e92053a398fbdbe867f2.png"},1784:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix12-a4fd3342b92e67fb2abb32d236f24551.png"},5629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix13-a3e57adc03a31b981e2ed49f10d5d821.png"},4198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix14-1c4fef823ac05e1b0d066b1af4294272.png"},1200:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix2-e31e20583a29364c06d9a4c6d072b2f7.png"},9575:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix3-d1700fcd74ec29f73eb03b7cf838f926.png"},17:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix4-f8cbf93d6192f570aa72897089b17a3f.png"},1870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix5-f22e8f9a1eed87eb3dca7011fb9ae4d8.png"},1041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix6-81b8270015d93246f8cf6fddf09db77a.png"},2161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix7-a493932d8d7eb3927b2d943204237bec.png"},2627:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apix8-630f12a3a60fb33d99e584f492c28d49.png"}}]);