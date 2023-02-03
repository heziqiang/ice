"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[9068],{4852:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var r=t(9231);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),s=n,k=d["".concat(o,".").concat(s)]||d[s]||u[s]||p;return t?r.createElement(k,i(i({ref:a},m),{},{components:t})):r.createElement(k,i({ref:a},m))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=s;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8174:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=t(1504),n=(t(9231),t(4852));const p={title:"\u4ece Rax \u8fc1\u79fb"},i=void 0,l={unversionedId:"guide/advanced/integrate-from-rax",id:"guide/advanced/integrate-from-rax",title:"\u4ece Rax \u8fc1\u79fb",description:"\u672c\u6587\u6863\u9762\u5411\u7684\u662f\u4f7f\u7528 Rax App \u7684\u5f00\u53d1\u8005\uff0c\u63d0\u4f9b\u8fc1\u79fb\u5230 ice.js \u7684\u65b9\u5f0f\u3002React \u7684\u793e\u533a\u751f\u6001\u663e\u8457\u4f18\u4e8e Rax\uff0c\u5207\u6362\u5230 React \u4e4b\u540e\u53ef\u4ee5\u4eab\u53d7\u5230\u66f4\u591a\u7684 React \u751f\u6001\uff0c\u590d\u7528\u590d\u6742\u573a\u666f\uff08\u5bcc\u6587\u672c\u3001\u8111\u56fe\u7b49\uff09\u793e\u533a\u751f\u6001\u53ef\u4ee5\u5927\u5e45\u5ea6\u964d\u4f4e\u6210\u672c\u3002",source:"@site/docs/guide/advanced/integrate-from-rax.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/integrate-from-rax",permalink:"/docs/guide/advanced/integrate-from-rax",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/integrate-from-rax.md",tags:[],version:"current",frontMatter:{title:"\u4ece Rax \u8fc1\u79fb"},sidebar:"docs",previous:{title:"\u5fae\u524d\u7aef",permalink:"/docs/guide/advanced/icestark"},next:{title:"JSX+",permalink:"/docs/guide/advanced/jsx-plus"}},o={},c=[{value:"\u5982\u4f55\u8fc1\u79fb",id:"\u5982\u4f55\u8fc1\u79fb",level:2},{value:"\u5b89\u88c5\u4e0e\u4f7f\u7528",id:"\u5b89\u88c5\u4e0e\u4f7f\u7528",level:2},{value:"<code>rax-compat</code> \u517c\u5bb9\u6027",id:"rax-compat-\u517c\u5bb9\u6027",level:2},{value:"Rax \u6838\u5fc3 API",id:"rax-\u6838\u5fc3-api",level:3},{value:"Appear &amp; Disappear",id:"appear--disappear",level:3},{value:"\u6837\u5f0f\u7684\u5904\u7406",id:"\u6837\u5f0f\u7684\u5904\u7406",level:3},{value:"\u5176\u4ed6\u5dee\u5f02",id:"\u5176\u4ed6\u5dee\u5f02",level:3},{value:"rax-app \u5de5\u7a0b\u8fc1\u79fb",id:"rax-app-\u5de5\u7a0b\u8fc1\u79fb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3}],m={toc:c};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u6863\u9762\u5411\u7684\u662f\u4f7f\u7528 Rax App \u7684\u5f00\u53d1\u8005\uff0c\u63d0\u4f9b\u8fc1\u79fb\u5230 ice.js \u7684\u65b9\u5f0f\u3002React \u7684\u793e\u533a\u751f\u6001\u663e\u8457\u4f18\u4e8e Rax\uff0c\u5207\u6362\u5230 React \u4e4b\u540e\u53ef\u4ee5\u4eab\u53d7\u5230\u66f4\u591a\u7684 React \u751f\u6001\uff0c\u590d\u7528\u590d\u6742\u573a\u666f\uff08\u5bcc\u6587\u672c\u3001\u8111\u56fe\u7b49\uff09\u793e\u533a\u751f\u6001\u53ef\u4ee5\u5927\u5e45\u5ea6\u964d\u4f4e\u6210\u672c\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e Rax \u5c0f\u7a0b\u5e8f\u7684\u7528\u6237\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u4f7f\u7528\u5230\u4ee5\u4e0b\u4e0e\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ed3\u5408\u8f83\u4e3a\u7d27\u5bc6\u7684\u80fd\u529b\uff0c\u5219\u53ef\u4ee5\u6b63\u5e38\u53c2\u8003\u672c\u6587\u6863\u8fdb\u884c\u8fc1\u79fb\u3002"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5f15\u5165\u539f\u751f app.js\u3001\u539f\u751f\u9875\u9762\u3001\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3001\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u5f15\u5165 Rax \u7f16\u8bd1\u65f6\u7ec4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u9875\u9762\u751f\u547d\u5468\u671f\u53ca\u4e8b\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5305\u52a0\u8f7d")),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u5230\u4ee5\u4e0a\u80fd\u529b\uff0c\u5219\u9700\u8981\u53c2\u8003 ice.js \u6587\u6863\u8fdb\u884c\u76f8\u5e94\u80fd\u529b\u7684\u8fc1\u79fb\u3002")),(0,n.kt)("h2",{id:"\u5982\u4f55\u8fc1\u79fb"},"\u5982\u4f55\u8fc1\u79fb"),(0,n.kt)("p",null,"ice.js \u63d0\u4f9b\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/ice/tree/master/packages/rax-compat"},"rax-compat")," \u4ee5\u652f\u6301 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/rax"},"Rax")," \u5230 React \u8fd0\u884c\u65f6\u7684\u5207\u6362\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"rax-compat")," \u901a\u8fc7\u5bf9 React \u7684\u80fd\u529b\u7684\u5c01\u88c5\uff0c\u5728\u5185\u90e8\u62b9\u5e73\u4e86 Rax \u4e0e React \u4f7f\u7528\u4e0a\u7684\u4e00\u4e9b\u5dee\u5f02\uff0c\u540c\u65f6\u5bfc\u51fa\u4e86\u4e0e Rax \u4e00\u81f4\u7684 API \u7b49\u80fd\u529b\uff0c\u901a\u8fc7 alias \u6765\u5c06\u6e90\u7801\u4e2d\u7684 rax \u7528 rax-compat \u6765\u66ff\u6362\uff0c\u5373\u53ef\u6865\u63a5\u4e0a React \u7684\u8fd0\u884c\u65f6\u80fd\u529b\u3002"),(0,n.kt)("h2",{id:"\u5b89\u88c5\u4e0e\u4f7f\u7528"},"\u5b89\u88c5\u4e0e\u4f7f\u7528"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5f15\u5165\u63d2\u4ef6 ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ice/plugin-rax-compat"},"@ice/plugin-rax-compat")," \u6765\u5b8c\u6210\u5728 ice.js \u4e2d\u8fd0\u884c Rax \u5e94\u7528\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-rax-compat --save-dev\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import compatRax from '@ice/plugin-rax-compat';\n\nexport default defineConfig(() => ({\n  // ...\n  plugins: [\n    // ...\n    compatRax({ inlineStyle: true }),\n  ],\n}));\n")),(0,n.kt)("h2",{id:"rax-compat-\u517c\u5bb9\u6027"},(0,n.kt)("inlineCode",{parentName:"h2"},"rax-compat")," \u517c\u5bb9\u6027"),(0,n.kt)("h3",{id:"rax-\u6838\u5fc3-api"},"Rax \u6838\u5fc3 API"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"rax-compat")," \u4f1a\u62b9\u5e73 Rax \u6838\u5fc3 API \u4e0e React API \u7684\u5dee\u5f02\uff0c\u7528\u6237\u4f7f\u7528 Rax DSL \u53ef\u4ee5\u65e0\u7f1d\u8854\u63a5\u5230 React Runtime \u4e0a\uff0c\u5177\u4f53\u7684 Rax \u6838\u5fc3 API\uff0c\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://rax.js.org/docs/api/DOM"},"Rax \u5b98\u7f51"),"\u3002"),(0,n.kt)("h3",{id:"appear--disappear"},"Appear & Disappear"),(0,n.kt)("p",null,"Rax DSL \u8fc1\u79fb\u7528\u6237\u4f9d\u65e7\u53ef\u4ee5\u50cf\u4e4b\u524d\u4e00\u6837\u4f7f\u7528 onAppear \u4ee5\u53ca onDisapper \u4e8b\u4ef6\uff0c\u5982"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createElement } from 'rax';\n\nfunction App {\n  return (<div\n    onAppear={() => {\n      alert('appear')\n    }}\n    onDisappear={() => {\n      alert('disappear')\n    }}\n  >\n    APP\n  </div>)\n}\n")),(0,n.kt)("p",null,"\u539f Rax DSL \u8fc1\u79fb\u8fc7\u6765\u5e76\u4f7f\u7528\u517c\u5bb9\u6a21\u5f0f\u65e0\u9700\u505a\u4efb\u4f55\u6539\u9020\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/appear-polyfill"},"appear-polyfill")," \u4f1a\u5d4c\u5165\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"rax-compat")," \u4e2d\u81ea\u52a8\u505a\u8fd9\u90e8\u5206\u5904\u7406\uff0c\u7528\u6237\u65e0\u9700\u7279\u6b8a\u5904\u7406\u4ee5\u53ca\u5f15\u5165\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e React \u7528\u6237\uff0c\u63a8\u8350\u4f7f\u7528 React \u6807\u51c6\u7684\u65b9\u5f0f\u3002"),(0,n.kt)("h3",{id:"\u6837\u5f0f\u7684\u5904\u7406"},"\u6837\u5f0f\u7684\u5904\u7406"),(0,n.kt)("p",null,"\u5f53\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"p"},"@ice/plugin-rax-compat")," \u63d2\u4ef6\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"inlineStyle")," \u53c2\u6570\u65f6\uff0c\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},".module.css")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u4f1a\u9ed8\u8ba4\u8d70 CSS Module \u7684\u6a21\u5f0f\u3002\u6b64\u5916\uff0c\u5f53 ",(0,n.kt)("inlineCode",{parentName:"p"},"width")," \u7b49\u5c5e\u6027\u6ca1\u6709\u5355\u4f4d\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"width: 300"),"\uff0c\u8be5\u6a21\u5f0f\u4e0b\u4f1a\u81ea\u52a8\u8865\u9f50 ",(0,n.kt)("inlineCode",{parentName:"p"},"rpx")," \u5355\u4f4d\u5e76\u6700\u7ec8\u8f6c\u5316\u6210 ",(0,n.kt)("inlineCode",{parentName:"p"},"vw"),"\uff0c\u540c\u7406\uff0c\u5199\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"rpx")," \u5355\u4f4d\u7684\u503c\u4e5f\u4e00\u6837\u4f1a\u88ab\u8f6c\u5316\u6210 ",(0,n.kt)("inlineCode",{parentName:"p"},"vw"),"\u3002\u8fd9\u5757\u903b\u8f91\u4e0e\u4e4b\u524d Rax Driver \u4e2d\u5904\u7406\u7684\u903b\u8f91\u662f\u4e00\u81f4\u7684\uff0cRax DSL \u7528\u6237\u65e0\u9700\u505a\u4efb\u4f55\u4fee\u6539\u3002"),(0,n.kt)("h3",{id:"\u5176\u4ed6\u5dee\u5f02"},"\u5176\u4ed6\u5dee\u5f02"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attributes\uff1a")),(0,n.kt)("p",null,"\u5728 React \u4e2d\uff0c\u539f\u751f\u6807\u7b7e\u7684 props \u662f\u5b58\u5728\u767d\u540d\u5355\u7684\uff0c\u800c Rax \u4e2d\u6ca1\u6709\u8be5\u5224\u65ad\u3002\u8fd9\u5dee\u5f02\u5bfc\u81f4\u4f7f\u7528\u975e ",(0,n.kt)("inlineCode",{parentName:"p"},"data-*")," \u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u5728 React Runtime \u4e2d\u4f1a\u88ab\u5ffd\u7565\uff08\u4f1a\u6709 warning\uff09\uff0c\u5982\u679c\u7528\u6237\u901a\u8fc7\u975e\u6807\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u5b58\u50a8\u5728 attributes \u4e2d\uff0c\u5728 React Runtime \u4e2d\u4f1a\u65e0\u6cd5\u4ece\u771f\u5b9e\u8282\u70b9\u7684 ref \u4e2d\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"getAttribute")," \u83b7\u53d6\u3002\u5982\u679c\u7528\u4e86\u8fd9\u4e9b\u975e\u6807\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"data-*")," \u6765\u6807\u8bc6\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002"),(0,n.kt)("h2",{id:"rax-app-\u5de5\u7a0b\u8fc1\u79fb"},"rax-app \u5de5\u7a0b\u8fc1\u79fb"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e4b\u524d\u4f7f\u7528 rax-app \u7684\u7528\u6237\uff0cice.js \u63d0\u4f9b\u4e86\u4e00\u6b3e\u5de5\u7a0b\u81ea\u52a8\u5316\u8fc1\u79fb\u5de5\u5177\u2014\u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rax-migrate"},"rax-migrate"),"\uff0c\u5b83\u53ef\u4ee5\u8f85\u52a9\u5e73\u6ed1\u8fc1\u79fb\u5927\u90e8\u5206\u5de5\u7a0b\u914d\u7f6e\u3002\u63d2\u4ef6\u6216\u8005 ice.js \u4e0d\u518d\u652f\u6301\u7684\u80fd\u529b\u7531\u4e8e\u6784\u5efa\u5668\u4e0d\u540c\u4ee5\u53ca\u7248\u672c\u5dee\u5f02\u7b49\u9700\u8981\u624b\u52a8\u786e\u8ba4\u4ee5\u53ca\u8fc1\u79fb\u3002"),(0,n.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i rax-migrate -g\n")),(0,n.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("p",null,"\u547d\u4ee4\u884c\u8fdb\u5165 rax-app \u5de5\u7a0b\uff08\u5982\u5de5\u7a0b\u540d\u4e3a rax-project\uff09\u6240\u5728\u7684\u76ee\u5f55\uff0c\u901a\u8fc7\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"rax-migrate")," \u53ef\u751f\u6210\u5bf9\u5e94\u914d\u7f6e\u7684\u540c\u76ee\u5f55\u4e0b\u7684 ice.js \u5de5\u7a0b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rax-migrate transform ./rax-project \n")))}d.isMDXComponent=!0}}]);