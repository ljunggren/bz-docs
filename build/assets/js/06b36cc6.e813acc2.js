"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1246],{210:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>h,toc:()=>l});var t=n(4848),a=n(8453),i=n(3628);const o={id:"stash",title:"Stashing changes"},r=void 0,h={id:"core-concepts/versioning/stash",title:"Stashing changes",description:"Stashing changes",source:"@site/docs/core-concepts/versioning/stash.mdx",sourceDirName:"core-concepts/versioning",slug:"/core-concepts/versioning/stash",permalink:"/docs/core-concepts/versioning/stash",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/versioning/stash.mdx",tags:[],version:"current",frontMatter:{id:"stash",title:"Stashing changes"},sidebar:"docs",previous:{title:"Branching and merging",permalink:"/docs/core-concepts/versioning/branching"},next:{title:"Protected branches and merge requests",permalink:"/docs/core-concepts/versioning/protected"}},c={},l=[{value:"Stashing Changes",id:"stashing-changes",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Stashing Changes",id:"stashing-changes-1",level:3},{value:"How to Stash Changes",id:"how-to-stash-changes",level:4},{value:"Viewing Stashed Changes",id:"viewing-stashed-changes",level:4},{value:"Applying a Stash (Stash Pop)",id:"applying-a-stash-stash-pop",level:3},{value:"Restoring Stashed Changes",id:"restoring-stashed-changes",level:4},{value:"After Applying a Stash",id:"after-applying-a-stash",level:4},{value:"Best Practices",id:"best-practices",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const s={a:"a",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{embedId:"bXUsK1S4eRQ",children:"Stashing changes"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=3",children:"00:03"})," Boozang supports stash, similar to G stash"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=25",children:"00:25"})," Boozang feature: Stash and Stash Pop allows for easy testing of changes and tracking them."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=45",children:"00:45"})," Stash feature allows you to save changes without committing."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=60",children:"01:00"})," Boozang introduces Stash and Stash Pop for comparing and managing changes."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=81",children:"01:21"})," Stashing allows testing changes"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=101",children:"01:41"})," Stash and Stash Pop helps bring back changes."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=119",children:"01:59"})," Stash feature allows you to temporarily save work"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bXUsK1S4eRQ&t=139",children:"02:19"})," Stash feature is very useful for infrequent commits or merges."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"stashing-changes",children:"Stashing Changes"}),"\n",(0,t.jsx)(s.h3,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(s.p,{children:"In Boozang, stashing changes allows users to temporarily store modifications and revert to a clean working state. This is particularly useful when needing to switch contexts or branches without committing incomplete work. Applying a stash (or stash pop) restores these changes."}),"\n",(0,t.jsx)(s.h3,{id:"stashing-changes-1",children:"Stashing Changes"}),"\n",(0,t.jsx)(s.h4,{id:"how-to-stash-changes",children:"How to Stash Changes"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Make Changes"}),": Work on your tests or modules in Boozang."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Stash Your Work"}),": When you need to switch tasks without committing, stash your changes. This moves your changes to a temporary space and reverts your working area to the last commit state."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"viewing-stashed-changes",children:"Viewing Stashed Changes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"List of Stashes"}),": Boozang may provide a way to view a list of all stashed changes. This can be used to identify and select the correct stash later."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"applying-a-stash-stash-pop",children:"Applying a Stash (Stash Pop)"}),"\n",(0,t.jsx)(s.h4,{id:"restoring-stashed-changes",children:"Restoring Stashed Changes"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Selecting the Stash"}),": Choose the stash you wish to apply from your list of stashed changes."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Apply the Stash"}),': Use the "stash pop" functionality to apply the changes to your current working branch.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Resolve Conflicts if Any"}),": If there are conflicts between the stashed changes and the current state of your branch, resolve them as needed."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"after-applying-a-stash",children:"After Applying a Stash"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Check Changes"}),": Ensure all stashed changes are correctly applied and working as intended."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Commit if Necessary"}),": If the applied changes are complete and functioning, consider committing them to your branch."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Regular Stash Labels"}),": Label your stashes with meaningful names or descriptions to easily identify them later."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Stash Housekeeping"}),": Periodically review and clear out unnecessary stashes to keep your workspace clean."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(s.p,{children:"Stashing is a powerful feature in Boozang that helps manage changes more flexibly, especially when juggling multiple tasks or issues. Proper use of stashing and applying stashes can enhance workflow efficiency without risking loss of work."})]})}function g(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3628:(e,s,n)=>{n.d(s,{A:()=>a});n(6540);var t=n(4848);const a=e=>{let{embedId:s}=e;return(0,t.jsx)("div",{className:"video-responsive",children:(0,t.jsx)("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${s}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var t=n(6540);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);