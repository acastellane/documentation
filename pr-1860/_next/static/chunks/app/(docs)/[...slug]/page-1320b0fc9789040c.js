(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{12079:function(e,t,n){Promise.resolve().then(n.t.bind(n,65469,23)),Promise.resolve().then(n.bind(n,37330)),Promise.resolve().then(n.bind(n,55856)),Promise.resolve().then(n.bind(n,6447)),Promise.resolve().then(n.bind(n,30263)),Promise.resolve().then(n.bind(n,76480))},14406:function(e,t,n){"use strict";var r,o,l=n(7653),a=n(75496);n(59597),n(84207),n(24523);var i=l&&"object"==typeof l&&"default"in l?l:{default:l};let s=i.default.forwardRef(function(e,t){let{children:n,size:l=16,...s}=e;return i.default.createElement(a,{width:l,height:l,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...s},r||(r=i.default.createElement("path",{d:"M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"})),o||(o=i.default.createElement("path",{d:"M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"})),n)});e.exports=s},93849:function(e){var t=Math.ceil,n=Math.max;e.exports=function(e,r,o,l){for(var a=-1,i=n(t((r-e)/(o||1)),0),s=Array(i);i--;)s[l?i:++a]=e,e+=o;return s}},90895:function(e,t,n){var r=n(93849),o=n(44908),l=n(65163);e.exports=function(e){return function(t,n,a){return a&&"number"!=typeof a&&o(t,n,a)&&(n=a=void 0),t=l(t),void 0===n?(n=t,t=0):n=l(n),a=void 0===a?t<n?1:-1:l(a),r(t,n,a,e)}}},44908:function(e,t,n){var r=n(21438),o=n(94604),l=n(48373),a=n(83919);e.exports=function(e,t,n){if(!a(n))return!1;var i=typeof t;return("number"==i?!!(o(n)&&l(t,n.length)):"string"==i&&t in n)&&r(n[t],e)}},17525:function(e,t,n){var r=n(90895)();e.exports=r},37330:function(e,t,n){"use strict";n.d(t,{DefinitionTooltip:function(){return b}});var r=n(27573),o=n(74057),l=n(45531),a=n.n(l),i=n(24523),s=n.n(i),u=n(7653),c=n(39281),d=n(47437),f=n(12641),p=n(24364),m=n(55555),h=n(45652);let x=e=>{let{align:t="bottom-left",className:n,children:r,definition:l,defaultOpen:i=!1,id:s,openOnHover:p,tooltipText:x,triggerClassName:b,...v}=e,[g,j]=(0,u.useState)(i),w=(0,f.A)(),N=(0,d.E)(s);return u.createElement(c.J,{align:t,className:n,dropShadow:!1,highContrast:!0,onMouseLeave:()=>{j(!1)},onMouseEnter:()=>{p&&j(!0)},open:g},u.createElement("button",(0,o.gY)({},v,{className:a()("".concat(w,"--definition-term"),b),"aria-controls":N,"aria-expanded":g,onBlur:()=>{j(!1)},onClick:()=>{j(!g)},onKeyDown:function(e){g&&(0,m.E)(e,h.L1)&&(e.stopPropagation(),j(!1))},type:"button"}),r),u.createElement(c.y,{className:"".concat(w,"--definition-tooltip"),id:N},null!=x?x:l))};function b(e){return(0,r.jsx)(x,{openOnHover:!0,...e})}x.propTypes={align:s().oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"]),children:s().node.isRequired,className:s().string,defaultOpen:s().bool,definition:s().node.isRequired,id:s().string,openOnHover:s().bool,tooltipText:(0,p.Z)(s().node,"The tooltipText prop has been deprecated. Please use the `definition` prop instead."),triggerClassName:s().string}},55856:function(e,t,n){"use strict";n.d(t,{Image:function(){return u},ImageLink:function(){return d},ImageModal:function(){return h},ImageModalProvider:function(){return m},InlineImage:function(){return c}});var r=n(27573),o=n(65880),l=n(53433),a=n(7653),i=n(80199),s=n(95687);function u(e){let{className:t,title:n,modal:o,...i}=e,{setModalImageProps:s}=(0,a.useContext)(p),u=!1!==o?()=>{s({title:n,...i})}:()=>null;return n?(0,r.jsxs)("figure",{className:"flex flex-col gap-4",children:[(0,r.jsx)(f,{className:(0,l.Z)(t,"border-none max-w-full h-auto cursor-pointer"),title:n,display:"block",...i,onClick:u}),(0,r.jsx)("figcaption",{className:"text-left text-label-01 text-text-helper",children:n})]}):(0,r.jsx)(f,{className:(0,l.Z)(t,"border-none max-w-full h-auto cursor-pointer"),display:"block",onClick:u,...i})}function c(e){let{className:t,...n}=e;return(0,r.jsx)(f,{display:"inline",className:(0,l.Z)(t,"border-none max-w-full h-auto"),...n})}function d(e){let{href:t,alt:n,...o}=e;return(0,r.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("span",{className:"sr-only",children:"(opens in a new tab)"}),(0,r.jsx)(u,{className:"w-full",modal:!1,alt:n,...o})]})}function f(e){let{alt:t="",src:n,srcDark:a,display:i,className:s,...u}=e;if(a){let e=(0,l.Z)({block:"block"===i,inline:"inline"===i},"dark:hidden",s),c=(0,l.Z)("hidden",{"dark:block":"block"===i,"dark:inline":"inline"===i},s);return n.startsWith("/")?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{alt:t,src:n,className:e,...u}),(0,r.jsx)(o.default,{alt:t,src:a,className:c,...u})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{alt:t,src:n,className:e,...u}),(0,r.jsx)("img",{alt:t,src:a,className:c,...u})]})}let c=(0,l.Z)({block:"block"===i,inline:"inline"===i},s);return n.startsWith("/")?(0,r.jsx)(o.default,{alt:t,src:n,className:c,...u}):(0,r.jsx)("img",{alt:t,src:n,className:c,...u})}let p=(0,a.createContext)({modalImageProps:null,setModalImageProps:()=>{}});function m(e){let{children:t}=e,[n,o]=(0,a.useState)(null),l=(0,a.useMemo)(()=>({modalImageProps:n,setModalImageProps:o}),[n]);return(0,r.jsx)(p.Provider,{value:l,children:t})}function h(){let{modalImageProps:e,setModalImageProps:t}=(0,a.useContext)(p),[n,o]=(0,a.useState)(e);e&&n!==e&&o(e);let l=null!=e?e:n;return(0,r.jsxs)(i.Z,{open:!!e,onClose:()=>t(null),containerClassName:"w-auto max-w-[98%]",children:[(0,r.jsx)(s.x,{className:"h-48"}),(0,r.jsx)(i.f,{className:"flex items-center justify-center",children:(null==l?void 0:l.src)&&(0,r.jsx)(f,{...l,className:"max-h-full"})})]})}},36309:function(e,t,n){"use strict";n.d(t,{OL:function(){return u},rU:function(){return s}});var r=n(27573),o=n(7653),l=n(87659),a=n(53433),i=n(71225);function s(e){let{innerRef:t,href:n,className:o,iconClassName:s,iconWidth:u=16,...d}=e,f=n?new i.RH(n):void 0,p=(0,a.Z)(c,"inline",o);return(null==f?void 0:f.type)==="absolute"?(0,r.jsx)(l.default,{...d,href:n,className:p,ref:t}):(null==f?void 0:f.type)==="external"||(null==f?void 0:f.type)==="external-quantum"?(0,r.jsxs)("a",{...d,href:n,className:p,ref:t,...f.linkProps,children:[e.children,f.maybeGetIcon({className:(0,a.Z)("inline ml-2",s),width:u})]}):(0,r.jsx)("a",{...d,href:n,className:p})}let u=(0,o.forwardRef)(function(e,t){let{className:n,iconClassName:o,...l}=e,i={innerRef:t,className:(0,a.Z)(n,"hover:no-underline"),iconClassName:(0,a.Z)(o,"mt-[1%]"),...l};return(0,r.jsx)(s,{...i})}),c="text-link-primary no-underline hover:underline"},6447:function(e,t,n){"use strict";n.d(t,{MdTabItem:function(){return f},MdTabs:function(){return c},MdTabsGroupContextProvider:function(){return m},OperatingSystemMdTabs:function(){return d}});var r=n(27573),o=n(40034),l=n.n(o),a=n(7653),i=n(6201);let s=i.td,u=i.nP;function c(e){var t;let{defaultValue:n,group:o}=e,c=(t=e.children,a.Children.toArray(t).filter(e=>null!=e&&"\n"!==e).map(e=>{if((0,a.isValidElement)(e)&&l()(e.props,"value"))return e;throw Error("Bad <Tabs> child")})),d=c.map(e=>e.props.value),[f,p]=h(o),m=(0,a.useRef)(null),[x,b]=(0,a.useState)(()=>void 0!==n&&d.includes(n)?n:d[0]),v=(0,a.useMemo)(()=>o&&f&&d.includes(f)?f:x,[o,f,x,d]),g=function(){let[e,t]=(0,a.useState)();return(0,a.useEffect)(()=>{let e=()=>{t(window.location.hash)};return e(),window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),e}();return(0,a.useEffect)(()=>{if(m.current&&g){let t=m.current.querySelector('[id="'.concat(g.slice(1),'"]'));if(t){var e;let n=null===(e=t.closest("[data-tab-value]"))||void 0===e?void 0:e.getAttribute("data-tab-value");n&&(b(n),p(n))}}},[g,p]),(0,a.useEffect)(()=>{o&&!f&&p(x)},[o,f,x,p]),(0,r.jsx)("div",{ref:m,children:(0,r.jsxs)(i.mQ,{selectedIndex:d.indexOf(v),onChange:e=>{let{selectedIndex:t}=e,n=d[t];b(n),p(n)},children:[(0,r.jsx)(s,{"aria-label":"List of tabs",children:c.map(e=>(0,r.jsx)(i.OK,{children:e.props.label},e.props.value))}),(0,r.jsx)(u,{children:c})]})})}function d(e){let t="operating-system",[n,o]=(0,a.useState)(),[l,i]=h(t);return(0,a.useEffect)(()=>{let e=function(){if(navigator.platform){if(navigator.platform.startsWith("Mac"))return"mac";if(navigator.platform.startsWith("Win"))return"win";if(navigator.platform.startsWith("Linux"))return"linux"}}();e&&(o(e),i(e))},[i]),(0,r.jsx)(c,{...e,group:t,defaultValue:n},n)}function f(e){let{children:t}=e;return(0,r.jsx)(i.x4,{"data-tab-value":e.value,children:t})}let p=(0,a.createContext)(void 0);function m(e){let[t,n]=(0,a.useState)({}),o=(0,a.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),l=(0,a.useMemo)(()=>({valuesByGroup:t,setValue:o}),[o,t]);return(0,r.jsx)(p.Provider,{value:l,children:e.children})}function h(e){let t=(0,a.useContext)(p);if(void 0===t)throw Error("Missing MdTabsGroupContextProvider");let n=t.setValue,r=(0,a.useCallback)(t=>{e&&n(e,t)},[e,n]);return void 0===e?[void 0,r]:[t.valuesByGroup[e],r]}},30263:function(e,t,n){"use strict";n.d(t,{PageToc:function(){return f}});var r=n(27573),o=n(53433),l=n(17525),a=n.n(l),i=n(7653),s=n(67754),u=n(36309);function c(e){let{compiled:t,components:n}=e,o=Object.assign({opts:{...r,useMDXComponents:{}}}),l=Object.keys(o),a=Object.values(o),i=Reflect.construct(Function,l.concat(t)),s=i.apply(i,a).default;return(0,r.jsx)(s,{components:n})}var d=n(9516);function f(e){let{headings:t,minHeadingLevel:n,maxHeadingLevel:l,className:u}=e,c=(0,i.useMemo)(()=>t.filter(e=>e.depth>=n&&e.depth<=l),[t,l,n]),{activeId:f}=function(e){let[t,n]=(0,i.useState)(),r=(0,s.usePathname)();return(0,i.useEffect)(()=>{let t=Array.from(document.querySelectorAll(e)).filter(e=>!e.classList.contains("sr-only")),r=new Map;t.forEach(e=>r.set(e.id,!1));let o=new IntersectionObserver(e=>{for(let[t,o]of(e.forEach(e=>{r.set(e.target.id,e.isIntersecting)}),r))if(!0===o){n(t);break}},{rootMargin:"-48px 0px -20% 0px"});return t.forEach(e=>o.observe(e)),()=>o.disconnect()},[e,r]),{activeId:t}}(a()(n,l+1).map(e=>"main h".concat(e)).join(", ")),{containerRef:m}=(0,d.F)({elementId:"PageTocItem--".concat(f,"__active")});return 0===c.length?null:(0,r.jsxs)("div",{ref:m,className:(0,o.Z)(["text-label-01 bg-background md:bg-inherit overflow-y-auto scrollbar scrollbar-variant",u]),children:[(0,r.jsx)("p",{className:"text-text-helper font-600",children:"On this page"}),(0,r.jsx)("ul",{className:"border-border-subtle border-l",children:c.map(e=>(0,r.jsx)(p,{minHeadingLevel:n,heading:e,activeId:f},e.id))})]})}function p(e){let{heading:t,minHeadingLevel:n,activeId:l}=e,a={paddingLeft:(t.depth-n)*16},i=l===t.id;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{id:i?"PageTocItem--".concat(t.id,"__active"):void 0,className:(0,o.Z)(["relative pl-16 my-[12px]",{"before:block before:absolute before:w-[1px] before:h-full before:-left-[1px] before:bg-layer-selected-inverse":i}]),children:(0,r.jsx)(u.rU,{style:a,className:(0,o.Z)(["!block transition-colors ease-in-out duration-200 hover:no-underline [&>:first-child]:break-words",{"text-text-helper hover:text-text-primary":!i},{"text-text-primary":i}]),href:"#".concat(t.id),"aria-label":"Navigate to the ".concat(t.value," section"),children:t.compiledValue?(0,r.jsx)(c,{compiled:t.compiledValue,components:m}):(0,r.jsx)("div",{children:t.value})})},t.id)})}let m={code:function(e){return(0,r.jsx)("code",{...e,className:(0,o.Z)(["text-code-02 inline whitespace-nowrap px-4 bg-background border border-transparent dark:border-border-subtle-00","group-[.pre-el]:text-code-02 group-[.pre-el]:inline-block group-[.pre-el]:whitespace-pre group-[.pre-el]:p-12 group-[.pre-el]:pr-[50px] group-[.pre-el]:bg-inherit dark:group-[.pre-el]:border-transparent","group-[.paragraph-el]:whitespace-normal"])})}}},76480:function(e,t,n){"use strict";n.d(t,{Pre:function(){return f}});var r=n(27573),o=n(7653),l=n(67322),a=n(53433),i=n(92721);let s=(0,o.forwardRef)((e,t)=>{let{kind:n="secondary",size:o="default",type:l="button",className:s,asChild:u,...c}=e,d=u?i.g7:"button";return(0,r.jsx)(d,{ref:t,className:(0,a.W)("Button",s),type:l,"data-kind":n,"data-size":o,...c})});s.displayName="Button",(0,o.forwardRef)((e,t)=>{let{className:n,children:o}=e;return(0,r.jsx)("span",{ref:t,className:(0,a.W)("ButtonIcon",n),children:o})}).displayName="ButtonIcon";let u=(0,n(91609).B)(s,"IconButton");var c=n(14406),d=n.n(c);function f(e){let{maxHeight:t,className:n,...i}=e,s=(0,o.useRef)(null),[c,f]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(c){let e=setTimeout(()=>{f(!1)},3e3);return()=>{clearTimeout(e)}}},[c]);let p=void 0!==t;return(0,r.jsxs)("div",{className:(0,a.Z)(["snippet relative bg-[var(--shiki-color-background)]",{"overflow-hidden":!p},n]),children:[(0,r.jsx)("div",{className:(0,a.Z)(["text-end absolute top-0",{"right-0":!p},{"right-12":p}]),children:(0,r.jsxs)(l.u,{open:c||void 0,children:[(0,r.jsx)(l.aJ,{asChild:!0,children:(0,r.jsx)(u,{size:"small",kind:"ghost",className:"data-[kind='ghost']:bg-[var(--shiki-color-background)]",onClick:function(){if(s.current){let e=s.current.textContent;e&&(navigator.clipboard.writeText(e),f(!0))}},"aria-label":"Copy code",children:(0,r.jsx)(d(),{})})}),(0,r.jsx)(l.NM,{children:(0,r.jsxs)(l._v,{children:[c?"Copied!":"Copy code",(0,r.jsx)(l.Ce,{})]})})]})}),(0,r.jsx)("pre",{ref:s,className:(0,a.Z)(["group pre-el text-code-02 max-w-full overflow-auto scrollbar scrollbar-variant"]),style:{maxHeight:t},...i})]})}},9516:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var r=n(7653);function o(e){let{elementId:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=document.getElementById(t);if(e&&n.current){let t=n.current.offsetTop,r=t+n.current.offsetHeight,o=e.offsetTop,l=o+e.offsetHeight;(o<t||l>r)&&(n.current.scrollTop=o-t)}},[t]),{containerRef:n}}},71225:function(e,t,n){"use strict";n.d(t,{RH:function(){return u},sb:function(){return d}});var r=n(27573),o=n(86629);n(16144);var l=n(75752),a=n.n(l),i=n(8315),s=n.n(i);class u{maybeGetIcon(e){var t,n,o,l,i;return"external"===this.type?(null!==(o=e[n="aria-label"])&&void 0!==o||(e[n]="(opens in a new tab)"),(0,r.jsx)(a(),{...e})):"pdf"===(null===(t=this.value.split(/[#?]/)[0].split(".").pop())||void 0===t?void 0:t.trim())?(null!==(i=e[l="aria-label"])&&void 0!==i||(e[l]="(PDF document)"),(0,r.jsx)(s(),{...e})):null}constructor(e){this.value=e,this.type=c(e),this.linkProps=function(e){if(!e)return{};let t=c(e);return"external"===t?{target:"_blank",rel:"noopener noreferrer nofollow"}:"external-quantum"===t?{target:"_blank"}:{}}(e)}}function c(e){return(0,o.Z)(e)?!function(e){let{hostname:t}=new URL(e);return"quantum-computing.ibm.com"===t||t.endsWith(".quantum-computing.ibm.com")||"quantum.ibm.com"===t||t.endsWith(".quantum.ibm.com")}(e)?"external":"external-quantum":e.startsWith("/")?"absolute":"relative"}function d(){return"/documentation/pr-1860"}}},function(e){e.O(0,[469,880,91,853,322,293,286,744],function(){return e(e.s=12079)}),_N_E=e.O()}]);