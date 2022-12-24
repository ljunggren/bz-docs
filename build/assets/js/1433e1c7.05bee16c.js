"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8098],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return o?r.createElement(g,i(i({ref:t},d),{},{components:o})):r.createElement(g,i({ref:t},d))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},555:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const n=e=>{let{embedId:t}=e;return r.createElement("div",{className:"video-responsive"},r.createElement("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))}},9748:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=o(7462),n=(o(7294),o(3905)),a=o(555);const i={id:"recording",title:"Recording your first test"},s=void 0,c={unversionedId:"getting-started/recording",id:"getting-started/recording",title:"Recording your first test",description:"Boozang works within the browser which allows for a very stable recording function. Simply click on the record button in the tool. As you perform actions on your web page actions will be recorded. To remove an un-wanted action that was recorded press the trashbin next to the action in the main tool view.",source:"@site/docs/getting-started/recording.mdx",sourceDirName:"getting-started",slug:"/getting-started/recording",permalink:"/docs/getting-started/recording",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/recording.mdx",tags:[],version:"current",frontMatter:{id:"recording",title:"Recording your first test"},sidebar:"docs",previous:{title:"Modules and tests",permalink:"/docs/getting-started/modules-and-tests"},next:{title:"In-tool help",permalink:"/docs/getting-started/in-tool-help"}},l={},d=[{value:"A note on Window alignment",id:"a-note-on-window-alignment",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boozang works within the browser which allows for a very stable recording function. Simply click on the record button in the tool. As you perform actions on your web page actions will be recorded. To remove an un-wanted action that was recorded press the trashbin next to the action in the main tool view. "),(0,n.kt)("p",null,"As soon as a test has been created you can use the playback button to replay the test steps. Boozang supports four different playback modes: ",(0,n.kt)("strong",{parentName:"p"},"Normal"),", ",(0,n.kt)("strong",{parentName:"p"},"demo"),", ",(0,n.kt)("strong",{parentName:"p"},"remote")," and ",(0,n.kt)("strong",{parentName:"p"},"automation")," mode. Demo mode slows down the playback speed and annotates every test step. This is good for demos and when trying to understand a test that someone else has authored. Remote play allows you to dispatch a test run to a remote server. Upon completion of the test, the result will be reported back to you."),(0,n.kt)("p",null,"A test is automatically saved in the local storage of the browser. If you want to prevent other team members from doing any changes to a test you are working on, click the lock. Other team members will see the test as locked, and will be un-able to do any changes. Any lock can be forcibly opened by any other team member. You will be notified if someone unlocks a test you have locked. "),(0,n.kt)("h2",{id:"a-note-on-window-alignment"},"A note on Window alignment"),(0,n.kt)("p",null,"To use Boozang well, we recommend aligning the Boozang tool and your application next to each other side by side in the following way"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",src:o(2567).Z,width:"949",height:"625"})),(0,n.kt)("p",null,"This allows you to get a good overview of the recorded actions, and an easy way to modify or delete recorded actions."),(0,n.kt)(a.Z,{embedId:"YcCw6cS7Uy0",mdxType:"YouTubeEmbed"},"Docusaurus green"))}p.isMDXComponent=!0},2567:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/side-by-side-79887f167f6b3c54598d87337c77e0ee.png"}}]);