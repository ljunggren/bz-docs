"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4049],{825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(4848),a=n(8453);const s={id:"regexp",title:"Regular Expressions"},r=void 0,o={id:"core-concepts/using-data/regexp",title:"Regular Expressions",description:"regexp",source:"@site/docs/core-concepts/using-data/regexp.mdx",sourceDirName:"core-concepts/using-data",slug:"/core-concepts/using-data/regexp",permalink:"/docs/core-concepts/using-data/regexp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/using-data/regexp.mdx",tags:[],version:"current",frontMatter:{id:"regexp",title:"Regular Expressions"},sidebar:"docs",previous:{title:"Data binding",permalink:"/docs/core-concepts/using-data/databind"},next:{title:"Predefined regexp",permalink:"/docs/core-concepts/using-data/predefined"}},l={},c=[{value:"Boozang regular expression engine",id:"boozang-regular-expression-engine",level:3},{value:"Setting up regular expressions",id:"setting-up-regular-expressions",level:3},{value:"Setting up a new regular expression",id:"setting-up-a-new-regular-expression",level:3},{value:"Using auto-fill functionality",id:"using-auto-fill-functionality",level:3},{value:"Binding auto-fill with data-bind",id:"binding-auto-fill-with-data-bind",level:3}];function d(e){const t={code:"code",em:"em",h3:"h3",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"regexp",src:n(3479).A+"",width:"292",height:"192"})}),"\n",(0,i.jsx)(t.h3,{id:"boozang-regular-expression-engine",children:"Boozang regular expression engine"}),"\n",(0,i.jsx)(t.p,{children:"Boozang also supports a regular expression engine that can generate random data that complies with a certain regular expression. This can be useful when generating random test data, but also when creating test validations to make sure certain field constraints are being enforced."}),"\n",(0,i.jsx)(t.h3,{id:"setting-up-regular-expressions",children:"Setting up regular expressions"}),"\n",(0,i.jsx)(t.p,{children:"To set up a new regular expression, click Settings -> Content Policy and scroll down to the regular expressions. Here you can find several pre-defined regex and associated labels. First, make sure the type of regular expression isn\xb4t in the list. As a phone number or zip code will vary from country to country, it\xb4s natural that these are modified to match your specific project."}),"\n",(0,i.jsx)(t.p,{children:'Also, make sure that all possible labels are matching the indicated regular expressions. This way, auto-fill functionality and future AI functions will be able to better identify different fields and make "better guesses".'}),"\n",(0,i.jsx)(t.h3,{id:"setting-up-a-new-regular-expression",children:"Setting up a new regular expression"}),"\n",(0,i.jsx)(t.p,{children:'To set up a new regular expression, click new and add in the necessary fields. The Field mapping will determine which form labels to look for when trying to match data. Use the OR sign ("|") to separate several fields.'}),"\n",(0,i.jsx)(t.h3,{id:"using-auto-fill-functionality",children:"Using auto-fill functionality"}),"\n",(0,i.jsx)(t.p,{children:"When using the auto-fill functionality in the toolbar, the Boozang tool without choosing to data-bind, Boozang will use the regexp engine to generate data into the form. When recording, this can be used to quickly create test cases with temp data."}),"\n",(0,i.jsx)(t.h3,{id:"binding-auto-fill-with-data-bind",children:"Binding auto-fill with data-bind"}),"\n",(0,i.jsx)(t.p,{children:"When enabling data-bind and clicking autofill form, Boozang will look in the current data scope for matching data. If that isn\xb4t found, Boozang will use the regexp engine to automatically bind the data scope to the form. This is a great way to quickly create a data-driven test case."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Tip: Using autofill with data-bind on ",(0,i.jsx)(t.code,{children:"$parameter"})," scope is a quick way to create a versatile, data-driven test case."]})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3479:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/regexp-2f377c0630fad0ae4fee90c02aaf0480.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);