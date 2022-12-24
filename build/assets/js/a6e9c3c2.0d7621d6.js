"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"content-policy",title:"Content Policy"},a=void 0,s={unversionedId:"settings/content-policy",id:"settings/content-policy",title:"Content Policy",description:"The content policy contains several advanced features. Nevertheless, spending some time here to fine-tune the project can increase the stability of tests and also speed up test creation significantly.",source:"@site/docs/settings/content-policy.mdx",sourceDirName:"settings",slug:"/settings/content-policy",permalink:"/docs/settings/content-policy",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/settings/content-policy.mdx",tags:[],version:"current",frontMatter:{id:"content-policy",title:"Content Policy"},sidebar:"docs",previous:{title:"Environments",permalink:"/docs/settings/environments"},next:{title:"Reports",permalink:"/docs/other-tool-views/reports"}},l={},c=[{value:"Ignore validation on pop window",id:"ignore-validation-on-pop-window",level:6},{value:"Ignore Classes",id:"ignore-classes",level:6},{value:"Text Attribute",id:"text-attribute",level:6},{value:"Clickable Elements",id:"clickable-elements",level:6},{value:"Attribute Content for Autofill",id:"attribute-content-for-autofill",level:6}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The content policy contains several advanced features. Nevertheless, spending some time here to fine-tune the project can increase the stability of tests and also speed up test creation significantly."),(0,o.kt)("h6",{id:"ignore-validation-on-pop-window"},"Ignore validation on pop window"),(0,o.kt)("p",null,"When checked, any pop windows (alerts, prompts, confirm pop-up dialogs) will not be verified by Boozang. When un-checked, Boozang will add an assertion during recording based on pop windows that appeared. On playing back the tests, Boozang will make sure that the same pop windows appear as during the recording and fail the test otherwise. "),(0,o.kt)("h6",{id:"ignore-classes"},"Ignore Classes"),(0,o.kt)("p",null,"Normally when clicking or asserting an element, classes are ignored. There is also an explicit setting for you to highlight your dynamic classes to make sure it\xb4s ignored. "),(0,o.kt)("h6",{id:"text-attribute"},"Text Attribute"),(0,o.kt)("h6",{id:"clickable-elements"},"Clickable Elements"),(0,o.kt)("p",null,"List of elements that are clickable in your application. Add elements here to be able to easily capture clicks on these elements during recording. "),(0,o.kt)("h6",{id:"attribute-content-for-autofill"},"Attribute Content for Autofill"),(0,o.kt)("p",null,"Use this to set regular expressions to be used for content generation."))}u.isMDXComponent=!0}}]);