(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1282:function(e,n,t){Promise.resolve().then(t.t.bind(t,97020,23)),Promise.resolve().then(t.t.bind(t,18305,23)),Promise.resolve().then(t.t.bind(t,92227,23)),Promise.resolve().then(t.t.bind(t,16334,23)),Promise.resolve().then(t.bind(t,5388)),Promise.resolve().then(t.bind(t,76461)),Promise.resolve().then(t.bind(t,65375)),Promise.resolve().then(t.bind(t,5612)),Promise.resolve().then(t.t.bind(t,92945,23)),Promise.resolve().then(t.bind(t,99495))},5388:function(e,n,t){"use strict";t.d(n,{AppFooter:function(){return u}});var r=t(27573),i=t(99495),o=t(64910),s=t(23627);function u(){let{storedTheme:e,setStoredTheme:n}=(0,i.F)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.$_,{children:[(0,r.jsx)(o.HW,{children:(0,r.jsx)("span",{})}),(0,r.jsx)(o.p4,{children:(0,r.jsx)(s.J,{themeMode:null!=e?e:"system",onThemeModeChange:n})})]})})}},76461:function(e,n,t){"use strict";t.d(n,{Header:function(){return d}});var r=t(27573),i=t(269),o=t(85307),s=t(97412),u=t(53433),c=t(87659);function d(){return(0,r.jsxs)(i.h4,{"aria-label":"header",className:(0,u.Z)("theme-variant",s.zi),children:[(0,r.jsx)(o.zl5,{}),(0,r.jsx)(o.nho,{href:"/",as:c.default,prefix:"IBM Quantum",children:"Documentation Preview"})]})}},65375:function(e,n,t){"use strict";t.d(n,{TooltipProvider:function(){return r.pn}});var r=t(67322)},5612:function(e,n,t){"use strict";t.d(n,{default:function(){return u}});var r=t(27573),i=t(7653),o=t(7130),s=t(83056);function u(e){let{children:n}=e,[t]=(0,i.useState)(()=>new o.S({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}));return(0,r.jsx)(s.aH,{client:t,children:n})}},99495:function(e,n,t){"use strict";t.d(n,{ThemeProvider:function(){return l},F:function(){return h}});var r=t(27573),i=t(7653),o=t(69222),s=t.n(o),u=t(56125);s()(u.A,e=>"(min-width: ".concat(e,")"));var c=t(44094),d=t(67859);let a=(0,i.createContext)(void 0);function h(){let e=(0,i.useContext)(a);if(!e)throw Error("Missing ThemeProvider");return e}function l(e){let{children:n,cookieThemeDomain:t}=e,[o,s]=(0,i.useState)();(0,i.useEffect)(()=>{s((0,c.zD)())},[]);let u=function(e,n){let{subscribe:t,getSnapshot:r,getServerSnapshot:o}=function(e,n){let t=window.matchMedia;return{subscribe:n=>{if(!t)return()=>{};let r=window.matchMedia(e);return r.addEventListener("change",n),()=>r.removeEventListener("change",n)},getSnapshot:()=>{if(t)return window.matchMedia(e)?window.matchMedia(e).matches:n},getServerSnapshot:()=>null!=n&&n}}(e,void 0);return(0,i.useSyncExternalStore)(t,r,o)}("(prefers-color-scheme: dark)"),h=(0,i.useMemo)(()=>"light"===o||"dark"===o?o:void 0!==u&&u?"dark":"light",[o,u]);(0,i.useEffect)(()=>{if("system"!==o)return;let e=window.matchMedia("(prefers-color-scheme: dark)");function n(){(0,d.D)(o)}return e.addEventListener("change",n),()=>e.removeEventListener("change",n)},[o]),(0,i.useEffect)(()=>{function e(){let e=(0,c.zD)();o!==e&&(s(e),(0,d.D)(e))}return window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}},[o]);let l=(0,i.useMemo)(()=>({theme:h,storedTheme:o,setStoredTheme:function(e){(0,c.XS)(e,{domain:t}),s(e),(0,d.D)(e)}}),[h,o,t]);return(0,r.jsx)(a.Provider,{value:l,children:n})}},92945:function(){}},function(e){e.O(0,[693,455,469,91,322,378,367,293,286,744],function(){return e(e.s=1282)}),_N_E=e.O()}]);