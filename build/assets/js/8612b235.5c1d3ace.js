"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[116],{2442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),a=n(8453);const o={id:"feature",title:"Feature Integration"},s=void 0,r={id:"integrations/feature",title:"Feature Integration",description:"In addition to integrating with CI servers for test execution, Boozang supports loading Cucumber feature files from an external system. This is convenient as it allows teams to keep the Cucumber features stored with the application source code (in the case of GitLab, GitHub, or BitBucket) or as part of the test management life-cycle (in the case of XRay / Jira).",source:"@site/docs/integrations/feature.mdx",sourceDirName:"integrations",slug:"/integrations/feature",permalink:"/docs/integrations/feature",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/integrations/feature.mdx",tags:[],version:"current",frontMatter:{id:"feature",title:"Feature Integration"},sidebar:"docs",previous:{title:"GitLab",permalink:"/docs/continuous-integration/gitlab"},next:{title:"Xray Integration",permalink:"/docs/integrations/xray"}},c={},l=[{value:"Connecting to an external API",id:"connecting-to-an-external-api",level:2}];function u(e){const t={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In addition to integrating with CI servers for test execution, Boozang supports loading Cucumber feature files from an external system. This is convenient as it allows teams to keep the Cucumber features stored with the application source code (in the case of GitLab, GitHub, or BitBucket) or as part of the test management life-cycle (in the case of XRay / Jira)."}),"\n",(0,i.jsx)(t.p,{children:"In this case, Boozang acts as a slave system, which means the master copy of any feature should reside on the external system, and upon synchronization, local changes in Boozang will be lost."}),"\n",(0,i.jsx)(t.h2,{id:"connecting-to-an-external-api",children:"Connecting to an external API"}),"\n",(0,i.jsx)(t.p,{children:"To connect to an external API to Boozang, go to Settings -> Integrations. From the dropdown you can select between the following external systems"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Jira / XRay"}),"\n",(0,i.jsx)(t.li,{children:"GitHub"}),"\n",(0,i.jsx)(t.li,{children:"BitBucket"}),"\n",(0,i.jsx)(t.li,{children:"GitLab"}),"\n",(0,i.jsx)(t.li,{children:"Azure"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You will need to generate the access token for the external APIs on the respective sites. Remember, the APIs have a tendency to change, which means that the placeholder we suggest could be inaccurate. If so, simply change the connection URL according to the documentation of the providers and try again."}),"\n",(0,i.jsx)(t.p,{children:"The following fields need to be entered"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"File List URL: The URL end-point to get a list of the feature files"}),"\n",(0,i.jsx)(t.li,{children:"Token: The authorization header"}),"\n",(0,i.jsx)(t.li,{children:"Match File: File-match pattern"}),"\n",(0,i.jsx)(t.li,{children:"In Zip: Check if files are being loaded as a zip"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"settings-integrations",src:n(1395).A+"",width:"1041",height:"823"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1395:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/settings-integrations-d9468520e9bf840d4f6de1a0256aab6d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);