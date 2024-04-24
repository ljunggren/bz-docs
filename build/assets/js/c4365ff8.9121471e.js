"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1362],{6478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=n(4848),o=n(8453),s=n(3628);const i={id:"troubleshooting",title:"Troubleshooting"},r=void 0,c={id:"core-concepts/using-data/troubleshooting",title:"Troubleshooting",description:"Troubleshooting",source:"@site/docs/core-concepts/using-data/troubleshooting.mdx",sourceDirName:"core-concepts/using-data",slug:"/core-concepts/using-data/troubleshooting",permalink:"/docs/core-concepts/using-data/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts/using-data/troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Predefined regexp",permalink:"/docs/core-concepts/using-data/predefined"},next:{title:"Canvas Testing",permalink:"/docs/core-concepts/canvas-testing"}},d={},h=[{value:"Console window",id:"console-window",level:6},{value:"Tmp data",id:"tmp-data",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",h6:"h6",hr:"hr",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{embedId:"IQx-a1KWkaA",children:"Troubleshooting"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=3",children:"00:03"})," Debugging in Boozang offers multiple options"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=31",children:"00:31"})," Override test data with the debug action"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=64",children:"01:04"})," Setting breakpoints during test runs"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=92",children:"01:32"})," Debugging test cases in Boozang"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=127",children:"02:07"})," Boozang provides advanced debugging capabilities for test-cases."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=161",children:"02:41"})," Debugging Javascript with console window."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=193",children:"03:13"})," Add breakpoints and use debugging capability in Chrome browser."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IQx-a1KWkaA&t=222",children:"03:42"})," Debugging test cases using the Chrome console"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h6,{id:"console-window",children:"Console window"}),"\n",(0,a.jsx)(t.p,{children:"When running a test, it is sometimes desirable to inspect the data that is being run. In many cases, upstream test cases are sending data as parameters, and it gets even more tricky when data is being loaded from external data sources or Javascript functions. To inspect the data that is being used, you can use the console window. This window is located in the hamburger menu and allows users to spy on data."}),"\n",(0,a.jsx)(t.p,{children:"The console can be used to check the following data:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Assigned data: ",(0,a.jsx)(t.code,{children:"$parameter"}),", ",(0,a.jsx)(t.code,{children:"$test"}),", ",(0,a.jsx)(t.code,{children:"$module"}),", and ",(0,a.jsx)(t.code,{children:"$project"})]}),"\n",(0,a.jsxs)(t.li,{children:["Loop data: ",(0,a.jsx)(t.code,{children:"$loop"})]}),"\n",(0,a.jsxs)(t.li,{children:["Regexp data generators: ",(0,a.jsx)(t.code,{children:"/[a-z]{3,10}@bzmail[.]com/"})," (email),  ",(0,a.jsx)(t.code,{children:"/[A-Z][0-9][A-Z] [0-9][A-Z][0-9]/"})," (Canadian zipcode)"]}),"\n",(0,a.jsxs)(t.li,{children:["Complex data generators: ",(0,a.jsx)(t.code,{children:"/{today|YYYY-MM-DD}/"}),", ",(0,a.jsx)(t.code,{children:"/{tomorrow|MM/DD hh:ss}/"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"tmp-data",children:"Tmp data"}),"\n",(0,a.jsx)(t.p,{children:'There is also another way to inspect data and do more advanced troubleshooting. For each action, in the action details menu, you can find a link called "Tmp data". This data is updated every time a test is run and will show the data that was used when the action was run. This allows you to keep the last input data that was used and replay the action with this data.'}),"\n",(0,a.jsx)(t.p,{children:'To inspect data during a run, add a breakpoint to the test or pause the test case during a run. Click on the action that uses the data, and click "Tmp data" in action details.'}),"\n",(0,a.jsx)(t.p,{children:'To re-run the action with the data that you see in the "Tmp data" window,  check the checkbox "As initial data for playing the action". To keep this data (not override the data in the next run) hit the "keep" button, and the data will be saved in the keep tab.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"Tip: Hit keep and Save to save the action data in the database to troubleshoot with other team members."})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},3628:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4848);const o=e=>{let{embedId:t}=e;return(0,a.jsx)("div",{className:"video-responsive",children:(0,a.jsx)("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);