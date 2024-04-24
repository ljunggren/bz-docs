"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4531],{1963:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=n(4848),i=n(8453),r=n(3628);const o={id:"rca",title:"Root-cause analysis"},a=void 0,l={id:"reporting/rca",title:"Root-cause analysis",description:"Root-cause analysis",source:"@site/docs/reporting/rca.mdx",sourceDirName:"reporting",slug:"/reporting/rca",permalink:"/docs/reporting/rca",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reporting/rca.mdx",tags:[],version:"current",frontMatter:{id:"rca",title:"Root-cause analysis"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/reporting/overview"},next:{title:"Log formatter",permalink:"/docs/reporting/log-formatter"}},c={},h=[{value:"The problem",id:"the-problem",level:2},{value:"The report file",id:"the-report-file",level:2},{value:"The script",id:"the-script",level:2},{value:"Jenkins CI",id:"jenkins-ci",level:2},{value:"Conclusions",id:"conclusions",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{embedId:"GGPygfe3dpk",children:"Root-cause analysis"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=2",children:"00:02"})," Boozang's root cause analysis helps with complex test scenarios."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=35",children:"00:35"})," Boozang allows sorting by result and root cause analysis"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=73",children:"01:13"})," Identifying and categorizing memory issues"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=106",children:"01:46"})," Root-cause analysis helps identify issues quickly."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=136",children:"02:16"})," Integration with ticket system for root-cause analysis"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=167",children:"02:47"})," Boozang allows easy navigation to specific URLs during test execution."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=200",children:"03:20"})," Boozang's log formatter makes root cause analysis more powerful"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GGPygfe3dpk&t=237",children:"03:57"})," Boozang provides root-cause analysis for failed scenarios"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"Using Cucumber to do Behaviour driven development (BDD) is great but sometimes a single bug can have impacts on several tests. This article tries to address this."}),"\n",(0,t.jsx)(s.h2,{id:"the-problem",children:"The problem"}),"\n",(0,t.jsx)(s.p,{children:"After introducing Cucumber support to our test tool we realized that there was something missing in the standard Cucumber report view."}),"\n",(0,t.jsx)(s.p,{children:"Check the following example"}),"\n",(0,t.jsx)(s.p,{children:"Looks bad, eh? It\u2019s hard to say. We can see that the business impact is vast, as we have many features breaking. Let\u2019s say we have a problem with the login, and a single issue is breaking all the tests? We have no idea how many underlying bugs are causing these failures. A single problem or a myriad of issues?"}),"\n",(0,t.jsx)(s.p,{children:"Moreover, it would be interesting to classify if issues are due to known problems in the application or automation code. As a single tester, this is not so necessary, but as a team, it\u2019s crucial that if someone has already analyzed an issue, it is highlighted as a \u201cknown issue.\u201d"}),"\n",(0,t.jsx)(s.p,{children:"As we typically are running several parallel test workers, we also found it complex troubleshooting tests, as we did not know which worker that ran which scenario."}),"\n",(0,t.jsx)(s.p,{children:"To summarize, we needed the following information."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Show number of root causes, not counted several times for each scenario"}),"\n",(0,t.jsx)(s.li,{children:"Classify the issue as an automation or application issue"}),"\n",(0,t.jsx)(s.li,{children:"Highlight slow test steps to find optimization opportunities"}),"\n",(0,t.jsx)(s.li,{children:"Show which worker ran which scenario"}),"\n",(0,t.jsx)(s.li,{children:"Adding root cause"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"To solve this, we added we added additional data to the Cucumber report JSON. We also updated our tool with a view where users can map the error hash (a simple MD5 sum of the error message) to their own bug system and also categorize the issue in one of the following categories"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Automation issue"}),"\n",(0,t.jsx)(s.li,{children:"Application issue"}),"\n",(0,t.jsx)(s.li,{children:"Not sure"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If you are working in any other tool or using Open Source Cucumber, you can easily add this lookup in a JSON or flat file on your system."}),"\n",(0,t.jsx)(s.h2,{id:"the-report-file",children:"The report file"}),"\n",(0,t.jsx)(s.p,{children:"We added the additional fields directly in the Cucumber report JSON inside the scenario tag like this"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'   "extraData": {\n          "id": "m119.t1(1)",\n          "name": "Minimum items",\n          "worker": "Mats Ljunggren - 3",\n          "start": "22:15:24",\n          "end": "22:16:13",\n          "failed": "5e3f275e64f84941a326d4d8/ci50/m10/t29/5/",\n          "rootCase": {\n            "createStamp": {\n              "user": "592ed7aefcaff23cca3a703d",\n              "time": 1612540246197,\n              "ip": "1"\n            },\n            "updateStamp": {\n              "user": "592ed7aefcaff23cca3a703d",\n              "time": 1612540246197,\n              "ip": "1"\n            },\n            "_id": "601d695609eb4153f44a79e8",\n            "type": "auto",\n            "scope": "*",\n            "errHash": "B68D3847DEBE588EBD496BB67857D23C",\n            "errDesc": "Concurrency worker problem",\n            "desc": "Known concurrency problem",\n            "url": "http://mybugtracker.com/bug",\n            "projectId": "5e3f275e64f84941a326d4d8",\n            "__v": 0\n          }\n        }\n'})}),"\n",(0,t.jsx)(s.p,{children:"You can find a sample log here"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"https://github.com/ljunggren/bz-utils/blob/main/scripts/test/report_cucumber-m88-t1.json"})}),"\n",(0,t.jsx)(s.p,{children:"Disclaimer: This might not be according to Cucumber report specifications, but we do find it a very useful hack to compliment the Cucumber logs."}),"\n",(0,t.jsx)(s.h2,{id:"the-script",children:"The script"}),"\n",(0,t.jsx)(s.p,{children:"We then created a script to gather this into a custom report that can be added to your CI pipeline."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"https://github.com/ljunggren/bz-utils/blob/main/scripts/generate_summary.sh"})}),"\n",(0,t.jsx)(s.p,{children:"It\u2019s written in bash so it should be easily run on any system, but it does require the jq json parser to run."}),"\n",(0,t.jsx)(s.h2,{id:"jenkins-ci",children:"Jenkins CI"}),"\n",(0,t.jsx)(s.p,{children:"To show the report in Jenkins, we use the HTML publisher plugin using the following configuration."}),"\n",(0,t.jsx)(s.p,{children:"To allow for the CSS rendering, we needed to do the following update to our Jenkins setup."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"sandbox; default-src 'none'; img-src 'self'; style-src 'self';"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://stackoverflow.com/questions/35783964/jenkins-html-publisher-plugin-no-css-is-displayed-when-report-is-viewed-in-j",children:"https://stackoverflow.com/questions/35783964/jenkins-html-publisher-plugin-no-css-is-displayed-when-report-is-viewed-in-j"})}),"\n",(0,t.jsx)(s.p,{children:"In the end we added the following step to our Jenkins pipeline."}),"\n",(0,t.jsx)(s.h2,{id:"conclusions",children:"Conclusions"}),"\n",(0,t.jsx)(s.p,{children:"This is the final result"}),"\n",(0,t.jsx)(s.p,{children:"The new report allows us to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Mine out root causes of any problem"}),"\n",(0,t.jsx)(s.li,{children:"See the impact of a single bug by listing how many tests it breaks"}),"\n",(0,t.jsx)(s.li,{children:"Get an understanding of which worker did what in a parallel run"}),"\n",(0,t.jsx)(s.li,{children:"Show slow test steps to highlight opportunities for optimization"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Let us know if this is helpful in any way."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3628:(e,s,n)=>{n.d(s,{A:()=>i});n(6540);var t=n(4848);const i=e=>{let{embedId:s}=e;return(0,t.jsx)("div",{className:"video-responsive",children:(0,t.jsx)("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${s}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);