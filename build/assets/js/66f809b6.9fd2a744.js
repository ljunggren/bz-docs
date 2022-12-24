"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),f=r,y=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={id:"datatypes",title:"Data types"},i=void 0,s={unversionedId:"using-data/datatypes",id:"using-data/datatypes",title:"Data types",description:"Boozang supports several different data types: Property, Object, Array, CSV, File, Request data and JS (Javascript function).",source:"@site/docs/using-data/datatypes.mdx",sourceDirName:"using-data",slug:"/using-data/datatypes",permalink:"/docs/using-data/datatypes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-data/datatypes.mdx",tags:[],version:"current",frontMatter:{id:"datatypes",title:"Data types"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/using-data/introduction"},next:{title:"Data bidning",permalink:"/docs/using-data/databind"}},l={},d=[{value:"Properties",id:"properties",level:6},{value:"Objects",id:"objects",level:6},{value:"Array",id:"array",level:6},{value:"CSV data",id:"csv-data",level:6},{value:"File data",id:"file-data",level:6},{value:"Request Data",id:"request-data",level:6},{value:"JS (Javascript functions",id:"js-javascript-functions",level:6}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boozang supports several different data types: Property, Object, Array, CSV, File, Request data and JS (Javascript function). "),(0,r.kt)("h6",{id:"properties"},"Properties"),(0,r.kt)("p",null,"The property is a simple name-value pair and can be referenced directly. For instance, a property username = boozang added on test-level, can be referenced ",(0,r.kt)("inlineCode",{parentName:"p"},"{{$test.username}} (=boozang)"),". "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tip: You can verify this in execution by printing it to your application console window by creating the following Javascript action",(0,r.kt)("inlineCode",{parentName:"em"}," $TW.console.log($test.username)"),".")),(0,r.kt)("h6",{id:"objects"},"Objects"),(0,r.kt)("p",null,"Objects in Boozang are the one-level sub-set of JSON objects and are ideal for grouping related data together. For instance, create the Object loginInfo and add username = boozang and password = p@ssw0rd. The data can be referenced by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"{{$test.loginInfo.username}}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{{$test.loginInfo.password}}"),"."),(0,r.kt)("h6",{id:"array"},"Array"),(0,r.kt)("p",null,"The arrays are great for storing a list of items. "),(0,r.kt)("p",null,"Tip: Arrays can be used to drive data loops"),(0,r.kt)("h6",{id:"csv-data"},"CSV data"),(0,r.kt)("p",null,"CSV data allows you to handle a large collection of Objects and copy data from software such as Excel. Create a name for the collection, such as inventory items. Start by adding the field names as headings separated by tab spaces. When you are done defining the data, hit Enter and fill out the values tab-separated. Pro-tip: You can copy a whole table from Excel by using copy-paste. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tip: CSV data can be used to drive data loops.")," "),(0,r.kt)("h6",{id:"file-data"},"File data"),(0,r.kt)("p",null,"File data is used to test file upload and similar user interactions. Try and use small sample files as large files tend to weight down on the test client, consuming memory or slowing down performance. It is also recommended to fetch files from an external source (see Request Data). "),(0,r.kt)("h6",{id:"request-data"},"Request Data"),(0,r.kt)("p",null,"It is also possible to fetch data from an external source. Simply type in a URL and choose CSV, JSON or File. The CSV file should be comma-separated (",(0,r.kt)("inlineCode",{parentName:"p"},"field1name1, fieldname2, \\n value1, value2"),") and not tab-separated. "),(0,r.kt)("h6",{id:"js-javascript-functions"},"JS (Javascript functions"),(0,r.kt)("p",null,"It is also possible to specify Javascript functions directly. The functions can be in two forms: Date.now() or fining the data hit Enter and fill out the values tab-separated. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tip: You can copy a whole table from Excel by using copy-paste.")))}c.isMDXComponent=!0}}]);