"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59],{3638:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var i=r(6540),o=r(781),s=r(3540);const a=s.Ay.div`
  height: 100%;
  width: 32%;
  padding: 0.3em 1em 1em;
  margin-bottom: 15px;
  box-shadow: 0 0 2px var(--ifm-color-primary-dark);
  border-radius: 10px;
  word-wrap: break-word;
  max-height: 130px;
  overflow: auto;

  @media (max-width: 800px) {
    display: block;
    width: 48%;
    font-size: 13px;
    height: 150px;
    padding: 0 10px 10px 10px;
  }
`,n=s.Ay.a`
  color: inherit;
  text-decoration: inherit;

  &:focus {
    color: inherit;
  }

  &:hover {
    color: var(--ifm-color-primary-lightest);
  }
`,c=s.Ay.p`
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    font-size: 0%.8;
  }

  font-size: 0.8em;
`,l=s.Ay.h4`
  font-weight: bold;
  margin-top: 5px;
  font-size: 14px;
  text-decoration: underline;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`,d=s.Ay.div`
  display: flex;
  justify-content: space-between;
  color: var(--ifm-color-primary);
`;var h=r(9638);const p=s.Ay.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`,m=s.Ay.h1`
  font-family: inherit;
  font-weight: 700;
  line-height: 1.2;
  font-size: 2rem;
  color: var(--theme-ui-colors-heading);
  margin-top: 1em;
  margin-bottom: 1em;
`,x=s.Ay.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`,u=s.Ay.div`
  width: 100%;
  min-width: 100px;
  height: 0.7rem;
  margin-top: 10px;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  animation: placeholderShimmer 4s linear infinite forwards;
  background: linear-gradient(
    to right,
    var(--theme-ui-colors-gray-1) 0%,
    var(--theme-ui-colors-gray-2) 50%,
    var(--theme-ui-colors-gray-3) 70%,
    var(--theme-ui-colors-gray-4) 100%
  );

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;var g=r(4848);const y=()=>(0,g.jsxs)(a,{"data-type":"repository",children:[(0,g.jsx)(d,{backgroundColor:"#e6e6e6",children:(0,g.jsx)(u,{})}),(0,g.jsx)(u,{}),(0,g.jsx)(u,{}),(0,g.jsx)(u,{})]}),f=e=>{let{description:t,name:r,stargazers_count:i,html_url:o,language:s,topics:p,backgroundColor:m}=e;return(0,g.jsx)(a,{"data-type":"repository",children:(0,g.jsxs)(n,{href:o,target:"_blank",children:[(0,g.jsxs)(d,{backgroundColor:m,children:[(0,g.jsx)(l,{children:r}),(0,g.jsxs)("strong",{children:[(0,g.jsx)(h.Lqq,{})," ",i]})]}),(0,g.jsx)(c,{children:t}),(0,g.jsxs)("p",{style:{fontSize:"0.8em"},children:[s?`#${s} `:"",p&&p.map((e=>`#${e} `))]})]})})},j="toolbar_gg2Q",b="button_mGTh",w="previousButton_yzjK",v="nextButton_MuF1",k=()=>"#3e31b0",_=()=>{const[e,t]=(0,i.useState)([]),[r,s]=(0,i.useState)(1),[a,n]=(0,i.useState)(!0),c=async function(e){void 0===e&&(e=1),n(!0);const r=await fetch(`https://api.github.com/users/vinicinbgs/repos?page=${e}&per_page=30`),i=(await r.json()).sort(((e,t)=>t.stargazers_count-e.stargazers_count));setTimeout((()=>{t(i),n(!1)}),200)};return(0,i.useEffect)((()=>{(async()=>{await c()})()}),[]),(0,g.jsx)(o.A,{children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)(p,{children:[(0,g.jsxs)(m,{id:"repositories",children:[(0,g.jsx)(h.Tv0,{})," Repositories"]}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsxs)("button",{className:`${b} ${w}`,onClick:async()=>{let e=r<=1?1:r-1;s(e),await c(e)},children:[(0,g.jsx)(h.Ol8,{}),"\xa0 Previous"]}),(0,g.jsxs)("button",{className:`${b} ${v}`,onClick:async()=>{if(e.length<=0)return;let t=r+1;s(t),await c(t)},children:["Next \xa0",(0,g.jsx)(h.J5t,{})]})]}),(0,g.jsxs)(x,{children:[0==e.length&&!a&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("p",{className:"not-found-repositories",children:"\ud83d\ude13 Sorry... Not found repositories here, return to previous pages"})}),a?[...Array(9)].map(((e,t)=>(0,g.jsx)(y,{},t))):e.map((e=>(0,g.jsx)(f,{...e,backgroundColor:k()},e.id)))]})]})})})}}}]);