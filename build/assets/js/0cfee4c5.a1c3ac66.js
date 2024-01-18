"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="When to use Boozang",s={unversionedId:"overview/when",id:"overview/when",title:"When to use Boozang",description:"Good fit vs bad fit",source:"@site/docs/overview/when.mdx",sourceDirName:"overview",slug:"/overview/when",permalink:"/docs/overview/when",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview/when.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Good fit vs bad fit",id:"good-fit-vs-bad-fit",level:2},{value:"A note on supported technology",id:"a-note-on-supported-technology",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"when-to-use-boozang"},"When to use Boozang"),(0,r.kt)("h2",{id:"good-fit-vs-bad-fit"},"Good fit vs bad fit"),(0,r.kt)("p",null,"Boozang is great when testing anything that runs in the web browser. This includes any modern SaaS application, no matter how complex. It\u2019s great when you need to automate testing of flows that can be determined by a machine, that doesn't exhibit random behaviour. "),(0,r.kt)("p",null,"A rule of thumb is that the more you feel the need to run regression testing, the more value you will find in the Boozang implementation. This means, if you release business-critical software often, you will find great value in Boozang. If you release rarely and bugs don't have a significant impact, maybe not so much. "),(0,r.kt)("p",null,"A less than ideal fit is also SaaS applications that have a graphical interface that needs a human to make a judgment call. These flows can never be fully automated, and the value of automation can be limited. "),(0,r.kt)("h2",{id:"a-note-on-supported-technology"},"A note on supported technology"),(0,r.kt)("p",null,"Boozang supports any application that runs in the web browser. Boozang also supports hybrid approaches, such as Cordova, Ionic, and Xamarin."),(0,r.kt)("p",null,"Since March 2019, Boozang also fully supports Shadow DOM / Web Components. "),(0,r.kt)("p",null,"Boozang does not support any testing of native IOS applications, Android applications, or any desktop-based applications."))}p.isMDXComponent=!0}}]);