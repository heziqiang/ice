"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[5528],{4852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(1504),r=(n(9231),n(4852));const l={title:"CSS \u8d44\u6e90\u672c\u5730\u5316"},i=void 0,o={unversionedId:"guide/advanced/css-assets-local",id:"guide/advanced/css-assets-local",title:"CSS \u8d44\u6e90\u672c\u5730\u5316",description:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002",source:"@site/docs/guide/advanced/css-assets-local.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/css-assets-local",permalink:"/docs/guide/advanced/css-assets-local",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/css-assets-local.md",tags:[],version:"current",frontMatter:{title:"CSS \u8d44\u6e90\u672c\u5730\u5316"},sidebar:"docs",previous:{title:"\u4ee3\u7801\u5206\u5272",permalink:"/docs/guide/advanced/codeSplitting"},next:{title:"\u90e8\u7f72",permalink:"/docs/guide/advanced/deploy"}},c={},s=[{value:"\u5f00\u542f\u63d2\u4ef6",id:"\u5f00\u542f\u63d2\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"<code>outputPath</code>",id:"outputpath",level:3},{value:"<code>relativeCssPath</code>",id:"relativecsspath",level:3},{value:"<code>enableInDev</code>",id:"enableindev",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002")),(0,r.kt)("p",null,"\u7ec4\u4ef6\u4ee3\u7801\u91cc\u6709\u53ef\u80fd\u4f1a\u4f9d\u8d56\u4e00\u4e9b\u8fdc\u7a0b CDN \u7684\u5b57\u4f53\u6587\u4ef6\u7b49\uff0c\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7f51\u7ad9\u8fd0\u884c\u65f6\u53ef\u80fd\u8bbf\u95ee\u4e0d\u4e86\u3002\u8be5\u63d2\u4ef6\u63d0\u4f9b\u5728\u6784\u5efa\u90e8\u7f72\u65f6\u5c06 CSS \u4e2d\u7684\u7f51\u7edc\u8d44\u6e90\u672c\u5730\u5316\u80fd\u529b\uff0c\u4f8b\u5982\u5b57\u4f53\u6587\u4ef6\u7b49\u3002"),(0,r.kt)("h2",{id:"\u5f00\u542f\u63d2\u4ef6"},"\u5f00\u542f\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -D @ice/plugin-css-assets-local\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport cssAssetsLocal from '@ice/plugin-css-assets-local';\n\nexport default defineConfig(() => ({\n  plugins: [\n    cssAssetsLocal(),\n  ],\n}));\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("h3",{id:"outputpath"},(0,r.kt)("inlineCode",{parentName:"h3"},"outputPath")),(0,r.kt)("p",null,"\u63d0\u53d6\u540e\u7684\u9759\u6001\u6587\u4ef6\u76ee\u5f55\u524d\u7f00"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"assets"))),(0,r.kt)("h3",{id:"relativecsspath"},(0,r.kt)("inlineCode",{parentName:"h3"},"relativeCssPath")),(0,r.kt)("p",null,"\u63d0\u53d6\u7684\u6587\u4ef6\u540e\u76f8\u5bf9\u4e8e CSS \u7684\u8def\u5f84"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"../"))),(0,r.kt)("h3",{id:"enableindev"},(0,r.kt)("inlineCode",{parentName:"h3"},"enableInDev")),(0,r.kt)("p",null,"\u672c\u5730\u8c03\u8bd5\u65f6\u662f\u5426\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))))}u.isMDXComponent=!0}}]);