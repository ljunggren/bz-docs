"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9889],{9313:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=r(4848),t=r(8453),c=r(3628);const o={id:"branching",title:"Branching and merging"},s=void 0,a={id:"core-concepts/versioning/branching",title:"Branching and merging",description:"Branching and merging",source:"@site/docs/core-concepts/versioning/branching.mdx",sourceDirName:"core-concepts/versioning",slug:"/core-concepts/versioning/branching",permalink:"/docs/core-concepts/versioning/branching",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/versioning/branching.mdx",tags:[],version:"current",frontMatter:{id:"branching",title:"Branching and merging"},sidebar:"docs",previous:{title:"Canvas Testing",permalink:"/docs/core-concepts/canvas-testing"},next:{title:"Stashing changes",permalink:"/docs/core-concepts/versioning/stash"}},h={},l=[{value:"Branching and Merging",id:"branching-and-merging",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Branching in Boozang",id:"branching-in-boozang",level:3},{value:"Creating a New Branch",id:"creating-a-new-branch",level:4},{value:"Working on Your Branch",id:"working-on-your-branch",level:4},{value:"Committing Changes",id:"committing-changes",level:3},{value:"Merging Changes",id:"merging-changes",level:3},{value:"Merging Back to Master",id:"merging-back-to-master",level:4},{value:"Handling Merge Conflicts",id:"handling-merge-conflicts",level:4},{value:"Best Practices",id:"best-practices",level:3},{value:"Conclusion",id:"conclusion",level:3}];function g(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.A,{embedId:"XnpwfRqf7zA",children:"Branching and merging"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=3",children:"00:03"})," Boozang tool now supports improved branching and merging features."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=39",children:"00:39"})," Implementing general branch management"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=68",children:"01:08"})," Boozang allows branching and merging for easy workflow management."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=103",children:"01:43"})," Boozang allows branching and merging for efficient testing"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=139",children:"02:19"})," Branching and merging in Boozang"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=176",children:"02:56"})," Boozang allows branching, merging, and switching branches for continuous integration."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=203",children:"03:23"})," Merging module B into C with a new commit"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XnpwfRqf7zA&t=233",children:"03:53"})," Boozang feature provides a familiar Git-like workflow."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"branching-and-merging",children:"Branching and Merging"}),"\n",(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This guide covers the process of using branching and merging in Boozang when working with non-protected branches. This is particularly useful in environments where direct commits to the master branch are allowed or in smaller teams."}),"\n",(0,i.jsx)(n.h3,{id:"branching-in-boozang",children:"Branching in Boozang"}),"\n",(0,i.jsx)(n.h4,{id:"creating-a-new-branch",children:"Creating a New Branch"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Select Your Project"}),': Choose the project you want to work on, such as "unit test".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create a New Branch"}),": Name your branch according to the feature or fix you're working on, e.g., ",(0,i.jsx)(n.code,{children:"feature-branch"})," or ",(0,i.jsx)(n.code,{children:"bug-fix-123"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"working-on-your-branch",children:"Working on Your Branch"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After creating your branch, switch to it to begin your work."}),"\n",(0,i.jsx)(n.li,{children:"Regular commits to this branch are recommended to save progress."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"committing-changes",children:"Committing Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Commit Regularly"}),": Make sure to commit your changes with clear commit messages.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'For example, after adding a new test, commit with a message like "Added new test for navigation".'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"merging-changes",children:"Merging Changes"}),"\n",(0,i.jsx)(n.h4,{id:"merging-back-to-master",children:"Merging Back to Master"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Switch to the Master Branch"}),": If you\u2019re ready to merge your changes, switch back to the master branch."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Merge Your Branch"}),": Select your feature or bug-fix branch and merge it into the master."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Commit the Merge"}),": Finalize the merge by committing it in the master branch."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"handling-merge-conflicts",children:"Handling Merge Conflicts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In cases where there are conflicts between your branch and the master, Boozang provides an interface for conflict resolution."}),"\n",(0,i.jsx)(n.li,{children:"Choose the correct changes from each branch and order them as needed."}),"\n",(0,i.jsx)(n.li,{children:"After resolving conflicts, commit these changes to complete the merge."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Regularly Update Branches"}),": Keep your branches updated with the latest changes from the master to minimize conflicts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Clear Commit Messages"}),": Always use clear and descriptive commit messages for easy tracking of changes."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Working with non-protected branches in Boozang allows for a more flexible approach to version control, especially in smaller teams or projects with less strict control mechanisms. However, it's important to maintain discipline in commits and merges to ensure the integrity of the master branch."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},3628:(e,n,r)=>{r.d(n,{A:()=>t});r(6540);var i=r(4848);const t=e=>{let{embedId:n}=e;return(0,i.jsx)("div",{className:"video-responsive",children:(0,i.jsx)("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${n}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var i=r(6540);const t={},c=i.createContext(t);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);