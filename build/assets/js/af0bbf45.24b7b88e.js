"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2777],{7801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(4848),s=n(8453);const i={id:"github-actions",title:"GitHub actions"},r=void 0,a={id:"the-tool/continuous-integration/github-actions",title:"GitHub actions",description:"Boozang supports integration to GitHub actions. This particular implementation uses the  GabrielBB/xvfb-action@v1 package to enable headless browseer runs. It utilizes Multiple Cucumber HTML Reporter (https://www.npmjs.com/package/multiple-cucumber-html-reporter) to generate HTML Cucumber report dashboards, and publishes the test results as GitHub pages.",source:"@site/docs/the-tool/continuous-integration/github-actions.mdx",sourceDirName:"the-tool/continuous-integration",slug:"/the-tool/continuous-integration/github-actions",permalink:"/docs/the-tool/continuous-integration/github-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/the-tool/continuous-integration/github-actions.mdx",tags:[],version:"current",frontMatter:{id:"github-actions",title:"GitHub actions"}},u={},l=[{value:"Implementation steps",id:"implementation-steps",level:6},{value:"Sample code",id:"sample-code",level:6}];function c(e){const t={a:"a",code:"code",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Boozang supports integration to GitHub actions. This particular implementation uses the  GabrielBB/xvfb-action@v1 package to enable headless browseer runs. It utilizes Multiple Cucumber HTML Reporter (",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/multiple-cucumber-html-reporter",children:"https://www.npmjs.com/package/multiple-cucumber-html-reporter"}),") to generate HTML Cucumber report dashboards, and publishes the test results as GitHub pages."]}),"\n",(0,o.jsxs)(t.p,{children:["*Note: This implementation can probably be improved, and we invite you to share any updates with us, either via email or on our ",(0,o.jsx)(t.a,{href:"https://boozang.com/forum",children:"forum"}),". *"]}),"\n",(0,o.jsx)(t.h6,{id:"implementation-steps",children:"Implementation steps"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Add a directory .github in your project root"}),"\n",(0,o.jsx)(t.li,{children:"Create the directory .github/workflows"}),"\n",(0,o.jsx)(t.li,{children:"Add the below code into the file .github/workflows/my-test-flow.yml"}),"\n",(0,o.jsx)(t.li,{children:"Enable GitHub pages for your repo"}),"\n",(0,o.jsx)(t.li,{children:"Push the code"}),"\n",(0,o.jsx)(t.li,{children:"The test results will be published on the GitHub pages of your repo"}),"\n"]}),"\n",(0,o.jsx)(t.h6,{id:"sample-code",children:"Sample code"}),"\n",(0,o.jsx)(t.p,{children:"Below is a sample of code generated. Note that most of these settings will vary depending on your particular project settings and selected test to run."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"name: my-test-flow\non: [push]\njobs:\n  run-boozang-tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v1\n      - run: npm install -g boozang\n      \n      - name: Run headless test with Boozang\n        uses: GabrielBB/xvfb-action@v1\n        with:\n          working-directory: ./ #optional\n          run: boozang --file=\"json/report\" \"http://staging-be.boozang.com/extension?parameter=&token=my-secret-token5e3f275e64f84941a326d4d8&group=&scope=&env=4&key=1&self=0#5e3f275e64f84941a326d4d8/jira61/m72/t10\"    \n      \n      - run: npm install multiple-cucumber-html-reporter --save-dev && node reporter.js\n        if: always()\n  \n      - name: Deploy report page\n        if: always()\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./public\n          user_name: 'github-actions[bot]'\n          user_email: 'github-actions[bot]@users.noreply.github.com'\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);