"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"extract",title:"Extract data"},i=void 0,c={unversionedId:"actions/extract",id:"actions/extract",title:"Extract data",description:"This is used to extract data from the application window and to store in a data variable.",source:"@site/docs/actions/extract.mdx",sourceDirName:"actions",slug:"/actions/extract",permalink:"/docs/actions/extract",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/actions/extract.mdx",tags:[],version:"current",frontMatter:{id:"extract",title:"Extract data"},sidebar:"docs",previous:{title:"Validations (assertions)",permalink:"/docs/actions/validations"},next:{title:"Javascript",permalink:"/docs/actions/javascript"}},l={},s=[{value:"Default behavior",id:"default-behavior",level:6}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is used to extract data from the application window and to store in a data variable. "),(0,r.kt)("h6",{id:"default-behavior"},"Default behavior"),(0,r.kt)("p",null,"When you add an extract data action, you'll be prompted to select something from the application window. As you can see from the example, data is extracted the following way"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"$test.tmpValue=$element.innerText.trim()\n")),(0,r.kt)("p",null,"This is just an example to help you along. If you have your own data variable, for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"$project.myHappyData")," you can simply replace the code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Extract Data")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"$project.myHappyData=$element.innerText.trim()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dynamic data and element selector")),(0,r.kt)("p",null,"When selecting some data in a page that is dynamic, such as a database id or project name, it's important to pay special attention to the element. By default, Boozang natural language selectors will try and identify the element by the actual text, which would be changing, generating an element not found error. "),(0,r.kt)("p",null,'Here it is needed to click on "Edit element" icon to open the DOM picker, and explicitly choose a selector that doesn\'t contain the dynamic data. In the example below, ',(0,r.kt)("inlineCode",{parentName:"p"},"tiger")," is the dynamic data that was highlighted by default. To extract this data, we have instead chosen to use a selector based on the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," which should be equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"string1")," (denoted with Javascript shorthand below as ",(0,r.kt)("inlineCode",{parentName:"p"},".string1"),"). "))}d.isMDXComponent=!0}}]);