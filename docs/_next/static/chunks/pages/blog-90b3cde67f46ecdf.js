(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4516:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return a(8518)}])},6840:function(e,t,a){"use strict";var o=a(1527);a(959);var n=a(1819),i=a(9460),r=a(8269),s=a.n(r);let l={banner:{key:"free-api-keys",text:(0,o.jsx)("a",{href:"/blog/0x03-free-api-key",children:"\uD83C\uDF81 Grab free API-Keys each worth 500K Tokens, join now →"})},logo:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s(),{src:"/logo.png",width:50,height:50,alt:"logo"}),(0,o.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Get ChatGPT"})]}),project:{link:"https://getgptapi.com/subscriptions.html"},docsRepositoryBase:"https://github.com/get-gpt/docs",head:()=>{let{asPath:e,defaultLocale:t,locale:a}=(0,n.useRouter)(),{frontMatter:r}=(0,i.ZR)(),s="https://docs.getgptapi.com"+(t===a?e:"/".concat(a).concat(e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("link",{rel:"icon",href:"/logo.png",type:"image/png"}),(0,o.jsx)("meta",{property:"og:url",content:s}),(0,o.jsx)("meta",{property:"og:title",content:r.title||"Get ChatGPT"}),(0,o.jsx)("meta",{property:"og:description",content:r.description||"Get ChatGPT | OpenAI | ChatGPT"})]})},chat:{link:"https://chat.getgptapi.com"},footer:{text:(0,o.jsx)("div",{className:"flex w-full flex-col items-center sm:items-start",children:(0,o.jsxs)("p",{className:"mt-6 text-xs",children:["\xa9 ",new Date().getFullYear()," Get ChatGPT."]})})},useNextSeoProps(){let{asPath:e}=(0,n.useRouter)();return{titleTemplate:"%s – Get ChatGPT"}}};t.Z=l},8518:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var o=a(1527),n=a(8459),i=a(9460),r=a(6840);a(6127);var s=a(6736);a(8269);var l=a(6008),d=a(7211),p=a(9519),x=a.n(p),c=a(1819);function u(e){let{more:t="Read more"}=e,{locale:a,defaultLocale:n}=(0,c.useRouter)();return(function e(t,a,o){let n=!a||a===o,i=[],r=Object.create(null);for(let s of t){if("Folder"===s.kind){i.push({...s,children:e(s.children,a,o)});continue}let t=!s.locale&&n||s.locale===a,l="Meta"===s.kind?d.Bi:s.name;t?(r[l]=null,i.push(s)):null===r[l]||s.locale&&s.locale!==o||(r[l]=s)}return[...i,...Object.values(r).filter(l.yb)]})(function(e){let{pageMap:t}=function(e){let t=globalThis[d.eZ];if(!t)throw Error(`Nextra context not found. Please make sure you are using "${e}" of "nextra/context" on a Nextra page.`);return{pageMap:t.pageMap,route:t.route}}("getPagesUnderRoute");return function e(t,a){let o=[],n=[],i=t.find(e=>"Meta"===e.kind),r=i?.data||{};for(let i of t){if("Meta"===i.kind)continue;let t=(0,l.k0)(r[i.name]),s={...i,...Object.keys(t||{}).length>0&&{meta:t}};if("Folder"===s.kind){let t=e(s.children,a);s.children=t.items,t.activeLevelPages.length?o=t.activeLevelPages:s.route!==a||o.length||(o=s.children)}n.push(s)}let s=Object.keys(r);return n.sort((e,t)=>{let a=s.indexOf(e.name),o=s.indexOf(t.name);return -1===a&&-1===o?e.name<t.name?-1:1:-1===a?1:-1===o?-1:a-o}),{items:n,activeLevelPages:o}}(t,e).activeLevelPages}("/blog"),a,n).map(e=>{var a,n,i,r;return(0,o.jsxs)("div",{className:"mb-10",children:[(0,o.jsx)("h3",{children:(0,o.jsx)(x(),{href:e.route,style:{color:"inherit",textDecoration:"none"},className:"block font-semibold mt-8 text-2xl ",children:(null===(a=e.meta)||void 0===a?void 0:a.title)||(null===(n=e.frontMatter)||void 0===n?void 0:n.title)||e.name})}),(0,o.jsxs)("p",{className:"opacity-80 mt-6 leading-7",children:[null===(i=e.frontMatter)||void 0===i?void 0:i.description," ",(0,o.jsx)("span",{className:"inline-block",children:(0,o.jsx)(x(),{href:e.route,className:"text-[color:hsl(var(--nextra-primary-hue),100%,50%)] underline underline-offset-2 decoration-from-font",children:t+" →"})})]}),(null===(r=e.frontMatter)||void 0===r?void 0:r.date)?(0,o.jsx)("p",{className:"opacity-50 text-sm mt-6 leading-7",children:e.frontMatter.date}):null]},e.route)})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)},pageOpts:{filePath:"pages/blog.mdx",route:"/blog",frontMatter:{title:"Blog",searchable:!0},headings:[],pageMap:[{kind:"Meta",data:{index:"Introduction",news:"Breaking News",why:"Why Get ChatGPT",howto:"How to Use Get ChatGPT",developer:"Developer Guide",blog:{title:"Blog",type:"page",theme:{sidebar:!1}},doc:{title:"How to Use",type:"page",href:"/howto"},faq:{title:"FAQ",type:"page"},contact:{title:"Contact ↗",type:"page",href:"/#contact-us"}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"MdxPage",name:"0x01-telegram-bot",route:"/blog/0x01-telegram-bot",frontMatter:{title:"Official ChatGPT Telegram Bot",description:"We've launched our official ChatGPT telegram bot, it's free now. Supports private chat, group chat & streaming mode, no extra setup needed! Customize your dedicated API-Key from GetChatGPT for a better experience.\n",date:"May 11, 2023"}},{kind:"MdxPage",name:"0x02-why-choose-get-chatgpt",route:"/blog/0x02-why-choose-get-chatgpt",frontMatter:{title:"Why Choose Get ChatGPT",description:"We've launched Get ChatGPT service since May 06, 2023. - \uD83D\uDE80 Built on OpenAI, support latest GPT-3.5 and GPT-4 - ❤️️ No issues of signup/payment/blocks etc - \uD83C\uDF10 No region restrictions, used anytime anywhere - ⌛ No frequency limit, adjustable usage volume - \uD83D\uDD10 Privacy first, no data is stored - ⚡ Superior network lines, fast response - ⚙️ Native OpenAI API, cross-platform clients - \uD83D\uDC65 Easy to use for users, friendly to developers - \uD83D\uDC69‍\uD83D\uDCBB More intimate features under development\n",date:"May 12, 2023"}},{kind:"MdxPage",name:"0x03-free-api-key",route:"/blog/0x03-free-api-key",frontMatter:{title:"Grab Free API-Keys each worth 500K Tokens",description:"\uD83D\uDE80 Free API-Keys up for grabs! Each worth 500K Tokens! Enjoy unlimited ChatGPT service with OpenAI API! Supports GPT-3.5/GPT-4! Join now to experience the joys of ChatGPT.\n",date:"May 12, 2023"}},{kind:"MdxPage",name:"0x04-support-wechat-pay",route:"/blog/0x04-support-wechat-pay",frontMatter:{title:"We Support WeChat Pay Now",description:"\uD83D\uDE80 Just launched! We support WeChat Pay right now! You can buy millions of ChatGPT tokens with only a little allowance.\n",date:"May 18, 2023"}},{kind:"Meta",data:{"0x04-support-wechat-pay":"We Support WeChat Pay Now","0x03-free-api-key":"Grab Free API-Keys each worth 500K Tokens","0x02-why-choose-get-chatgpt":"Why Choose Get ChatGPT","0x01-telegram-bot":"Official ChatGPT Telegram Bot"}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{title:"Blog",searchable:!0}},{kind:"MdxPage",name:"developer",route:"/developer"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"Folder",name:"howto",route:"/howto",children:[{kind:"MdxPage",name:"0x01-Web-GetChatGPT",route:"/howto/0x01-Web-GetChatGPT"},{kind:"MdxPage",name:"0x11-iOS-OpenCat",route:"/howto/0x11-iOS-OpenCat"},{kind:"MdxPage",name:"0x12-iOS-AMA",route:"/howto/0x12-iOS-AMA"},{kind:"MdxPage",name:"0x21-Android-AMA",route:"/howto/0x21-Android-AMA"},{kind:"MdxPage",name:"0x31-Chrome-OpenAI-Translator",route:"/howto/0x31-Chrome-OpenAI-Translator"},{kind:"MdxPage",name:"0x41-macOS-OpenCat",route:"/howto/0x41-macOS-OpenCat"},{kind:"MdxPage",name:"0x42-macOS-ChatBox",route:"/howto/0x42-macOS-ChatBox"},{kind:"MdxPage",name:"0x51-Windows-ChatBox",route:"/howto/0x51-Windows-ChatBox"},{kind:"Meta",data:{"0x01-Web-GetChatGPT":"0x01 Web Getchatgpt","0x11-iOS-OpenCat":"0x11 iOS Opencat","0x12-iOS-AMA":"0x12 iOS Ama","0x21-Android-AMA":"0x21 Android Ama","0x31-Chrome-OpenAI-Translator":"0x31 Chrome Openai Translator","0x41-macOS-OpenCat":"0x41 macOS Opencat","0x42-macOS-ChatBox":"0x42 macOS Chatbox","0x51-Windows-ChatBox":"0x51 Windows Chatbox"}}]},{kind:"MdxPage",name:"howto",route:"/howto"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"news",route:"/news"},{kind:"Folder",name:"why",route:"/why",children:[{kind:"MdxPage",name:"0x00-what-is-chatgpt",route:"/why/0x00-what-is-chatgpt"},{kind:"MdxPage",name:"0x01-openai-signup-iusses",route:"/why/0x01-openai-signup-iusses"},{kind:"MdxPage",name:"0x02-openai-payment-issues",route:"/why/0x02-openai-payment-issues"},{kind:"MdxPage",name:"0x03-openai-blocks-account",route:"/why/0x03-openai-blocks-account"},{kind:"MdxPage",name:"0x04-openai-geo-restrictions",route:"/why/0x04-openai-geo-restrictions"},{kind:"MdxPage",name:"0x05-openai-no-clients",route:"/why/0x05-openai-no-clients"},{kind:"MdxPage",name:"0x06-openai-rate-limits",route:"/why/0x06-openai-rate-limits"},{kind:"MdxPage",name:"0x07-openai-at-capacity",route:"/why/0x07-openai-at-capacity"},{kind:"MdxPage",name:"0x10-support-latest-models",route:"/why/0x10-support-latest-models"},{kind:"MdxPage",name:"0x11-pay-as-you-go",route:"/why/0x11-pay-as-you-go"},{kind:"MdxPage",name:"0x12-privacy-first",route:"/why/0x12-privacy-first"},{kind:"MdxPage",name:"0x13-support-many-apps",route:"/why/0x13-support-many-apps"},{kind:"MdxPage",name:"0x14-easy-to-use",route:"/why/0x14-easy-to-use"},{kind:"MdxPage",name:"0x15-faster-reliable-speed",route:"/why/0x15-faster-reliable-speed"},{kind:"MdxPage",name:"0x16-developer-friendly",route:"/why/0x16-developer-friendly"},{kind:"MdxPage",name:"0x99-active-development",route:"/why/0x99-active-development"},{kind:"Meta",data:{"0x00-what-is-chatgpt":"0x00 What Is Chatgpt","0x01-openai-signup-iusses":"0x01 Openai Signup Iusses","0x02-openai-payment-issues":"0x02 Openai Payment Issues","0x03-openai-blocks-account":"0x03 Openai Blocks Account","0x04-openai-geo-restrictions":"0x04 Openai Geo Restrictions","0x05-openai-no-clients":"0x05 Openai No Clients","0x06-openai-rate-limits":"0x06 Openai Rate Limits","0x07-openai-at-capacity":"0x07 Openai at Capacity","0x10-support-latest-models":"0x10 Support Latest Models","0x11-pay-as-you-go":"0x11 Pay as You Go","0x12-privacy-first":"0x12 Privacy First","0x13-support-many-apps":"0x13 Support Many Apps","0x14-easy-to-use":"0x14 Easy to Use","0x15-faster-reliable-speed":"0x15 Faster Reliable Speed","0x16-developer-friendly":"0x16 Developer Friendly","0x99-active-development":"0x99 Active Development"}}]},{kind:"MdxPage",name:"why",route:"/why"}],flexsearch:{codeblocks:!0},title:"Blog"},pageNextRoute:"/blog",nextraLayout:i.ZP,themeConfig:r.Z};function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-4xl tracking-tighter text-center font-extrabold md:text-5xl mt-8 pb-6",children:"ChatGPT Blog"}),"\n","\n",(0,o.jsx)(u,{})]})}var m=(0,n.j)(h)}},function(e){e.O(0,[448,774,888,179],function(){return e(e.s=4516)}),_N_E=e.O()}]);