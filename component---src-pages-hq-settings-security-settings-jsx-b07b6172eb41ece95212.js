(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{375:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),o=(a(10),a(457)),i=a(465),c=a(551),l=a(412),d=a(569),s=a(570),p=a(410),u=a(492),m=a(350),b=a(72),f=a(406),h=a(407),g=a(357),v=a(532),y=a.n(v),k=a(493),x=a.n(k),E=(a(60),a(230)),C=a(431),w=a(433),O=Object(h.a)((function(e){return{root:{overflowX:"auto",backgroundColor:g.b.palette.background.paper,minHeight:800},section:{backgroundColor:g.b.palette.background.paper},panel:{width:480,height:"100%"},panelContainer:{height:"inherit"},panelBody:{flexGrow:1},sideNav:{height:"100%",backgroundColor:"#2F2F4F"}}}));t.default=Object(E.a)((function(e){var t=O(),a=n.a.useState(null),r=(a[0],a[1],n.a.useState(null));r[0],r[1];var h,v,k,E=n.a.useState({checkboxTouchId:!1,checkboxTouchIdEdit:!1,edit:!1,editDeviceLock:!1}),j=E[0],F=E[1],S=function(e,t){return function(a){var r;j.checkboxTouchIdEdit=j.checkboxTouchId,F(Object.assign({},j,((r={})[e]=t,r)))}};return n.a.createElement("div",{className:t.root},n.a.createElement(f.a,{theme:g.b},n.a.createElement(C.a,null),n.a.createElement(p.a,{container:!0,direction:"row"},n.a.createElement(p.a,{item:!0,md:2},n.a.createElement(w.a,null)),n.a.createElement(p.a,{item:!0,md:10},n.a.createElement(p.a,{container:!0,direction:"column"},n.a.createElement(o.a,{p:6},n.a.createElement(b.a,{variant:"h1",display:"block",align:"left"},"Security Settings"),n.a.createElement(p.a,{container:!0,direction:"row",spacing:3,xs:12},n.a.createElement(p.a,{item:!0,md:6},n.a.createElement(o.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},n.a.createElement(b.a,{variant:"h3",display:"inline"}," Device Lock "),n.a.createElement(u.a,{"aria-label":"Edit Device Lock",onClick:S("editDeviceLock",!0),color:"primary"},n.a.createElement(x.a,{fontSize:"small"}))),n.a.createElement(m.a,{elevation:"0",className:"setting-card"},n.a.createElement(b.a,{variant:"caption"}," Unlock with Touch ID "),n.a.createElement(b.a,{variant:"body1"}," ",j.checkboxTouchId?"allowed":"not allowed"))),n.a.createElement(p.a,{item:!0,md:6},n.a.createElement(o.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},n.a.createElement(b.a,{variant:"h3",display:"inline"}," Sample Settings "),n.a.createElement(u.a,{"aria-label":"Edit",onClick:S("edit",!0),color:"primary"},n.a.createElement(x.a,{fontSize:"small"}))),n.a.createElement(m.a,{elevation:"0",className:"setting-card"},n.a.createElement(o.a,{borderBottom:"solid 1px #ebebee",pb:2,mb:2},n.a.createElement(b.a,{variant:"caption"}," Label "),n.a.createElement(b.a,{variant:"body1"}," Value ")),n.a.createElement(o.a,null,n.a.createElement(b.a,{variant:"caption"}," Label "),n.a.createElement(b.a,{variant:"body1"}," Value "))))))))),n.a.createElement(l.a,{variant:"persistent",anchor:"right",open:j.editDeviceLock,onClose:S("editDeviceLock",!1)},n.a.createElement(m.a,{className:t.panel},n.a.createElement(p.a,{container:!0,direction:"column",className:t.panelContainer},n.a.createElement(p.a,{item:!0},n.a.createElement(o.a,{pt:7,pb:1,p:2,borderBottom:1,borderColor:g.b.palette.divider,display:"flex",justifyContent:"space-between",alignItems:"center"},n.a.createElement(o.a,null,n.a.createElement(b.a,{variant:"h3",display:"block"}," Edit Device Lock ")),n.a.createElement(u.a,{"aria-label":"Close",onClick:S("editDeviceLock",!1)},n.a.createElement(y.a,{fontSize:"small"})))),n.a.createElement(p.a,{item:!0,className:t.panelBody},n.a.createElement(o.a,{p:2},n.a.createElement(d.a,{row:!0},n.a.createElement(s.a,{control:n.a.createElement(c.a,{checked:j.checkboxTouchIdEdit,onChange:(k="checkboxTouchIdEdit",function(e){var t;F(Object.assign({},j,((t={})[k]=e.target.checked,t)))}),value:"checkboxTouchIdEdit",color:"primary"}),label:"Allow app user to unlock app with Touch ID"})),n.a.createElement(o.a,{hidden:!j.checkboxTouchIdEdit,bgcolor:"secondary.light",color:"text.primary",p:2,mt:2,borderRadius:"4px"},n.a.createElement(b.a,{variant:"body2"},"By default, unlock with Touch ID is disabled in mobile apps. Unlock with Touch ID on shared device is not recommended. ")))),n.a.createElement(p.a,{item:!0},n.a.createElement(o.a,{p:2,borderTop:1,borderColor:g.b.palette.divider,display:"flex",justifyContent:"flex-end"},n.a.createElement(o.a,{mr:2},n.a.createElement(i.a,{variant:"outlined",color:"secondary",onClick:S("editDeviceLock",!1)},"Cancel")),n.a.createElement(i.a,{variant:"contained",color:"primary",onClick:(h="editDeviceLock",v=!1,function(e){var t;j.checkboxTouchId=j.checkboxTouchIdEdit,F(Object.assign({},j,((t={})[h]=v,t)))})},"Save"))))))))}))},414:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a.n(r),o=a(0),i=a.n(o),c=a(90),l=a.n(c),d=a(419);function s(e){var t=i.a.forwardRef((function(t,a){return i.a.createElement(d.a.Consumer,null,(function(r){return i.a.createElement(e,n()({muiFormControl:r,ref:a},t))}))}));return l()(t,e),t}},418:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a.n(r),o=a(0),i=a.n(o),c=a(214);function l(e,t){var a=i.a.memo(i.a.forwardRef((function(t,a){return i.a.createElement(c.a,n()({},t,{ref:a}),e)})));return a.muiName=c.a.muiName,a}},419:function(e,t,a){"use strict";var r=a(0),n=a.n(r).a.createContext();t.a=n},431:function(e,t,a){"use strict";a(49);var r=a(0),n=a.n(r),o=a(60),i=(a(230),a(349)),c=a(454),l=a(457),d=a(410),s=a(471),p=a(351),u=a(72),m=a(17),b=a(432),f=a.n(b),h={color:"#fff",backgroundColor:"#4F4F6F",textDecoration:"none"},g=[{label:"Apps Configurations",link:"/hq/defaultempty"},{label:"Customers",link:"/hq/defaultempty"},{label:"Store Operations",link:"/hq/defaultempty"},{label:"IT Management",link:"/hq/settings"}];t.a=Object(m.a)({root:{flexGrow:1},avatar:{width:32,height:"32px !important",marginRight:10},grow:{},menuButton:{marginLeft:-12,marginRight:20},navBlock:{backgroundColor:"inherit","&:hover":{backgroundColor:"#4F4F6F"}},link:{color:"#fff",textDecoration:"none",marginLeft:"20px",marginRight:"20px",paddingTop:"0",paddingBottom:"0"},appbar:{backgroundColor:"#1F1F3F",height:"60px",zIndex:1500},toolbar:{height:"60px",paddingLeft:"20px","& div":{height:"100%"}}})((function(e,t){var a=e.classes;return n.a.createElement("div",{className:a.root},n.a.createElement(i.a,{position:"fixed",className:a.appbar},n.a.createElement(p.a,{variant:"dense",className:a.toolbar},n.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},n.a.createElement(d.a,{item:!0,md:3},n.a.createElement(l.a,{display:"flex",alignItems:"center"},n.a.createElement(u.a,{variant:"h2"},n.a.createElement(o.a,{to:"/styleguides/hq",className:a.link},"Tulip Headquarter")))),n.a.createElement(d.a,{item:!0,md:6},n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"stretch"},g.map((function(e,t){return n.a.createElement(d.a,{item:!0,key:t},n.a.createElement(o.a,{to:e.link,style:{textDecoration:"none"},activeStyle:h,partiallyActive:!0,state:{title:""+e.label}},n.a.createElement(l.a,{display:"flex",alignItems:"center",className:a.navBlock},n.a.createElement(u.a,{variant:"h3",display:"inline",color:"inherit"},n.a.createElement(s.a,{to:"Test",className:a.link,underline:"none"},e.label)))))})))),n.a.createElement(d.a,{item:!0,md:3},n.a.createElement(l.a,{display:"flex",direction:"row",justifyContent:"flex-end",alignItems:"center"},n.a.createElement(c.a,{alt:"User Icon",display:"inline",className:a.avatar},n.a.createElement(f.a,null)),n.a.createElement(u.a,{variant:"body1",color:"inherit",display:"inline"},"Lezhong")))))))}))},432:function(e,t,a){"use strict";a(5);var r=a(54);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(355)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"})),"PersonRounded");t.default=o},433:function(e,t,a){"use strict";a(49);var r=a(0),n=a.n(r),o=a(60),i=(a(230),a(72)),c=a(408),l=a(409),d=a(471),s=a(412),p=a(17),u=a(2),m=a(356),b=a(406),f=a(357),h={root:{flexGrow:1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,paddingTop:60,backgroundColor:"#2F2F4F"},h1:u.c.h1,h2:u.c.h2,h3:u.c.h3,h4:u.c.h4,btnPrimary:m.a.primary,btnSecondary:m.a.secondary,btnLink:m.a.link,navLink:{backgroundColor:"inherit",color:"#fff",textDecoration:"none",textTransform:"capitalize",padding:14,fontWeight:500,"&:hover":{backgroundColor:"#4F4F6F",textDecoration:"none"}},navLinkActive:{backgroundColor:"#4F4F6F",fontFamily:"Roboto",color:"#fff",textDecoration:"none",textTransform:"capitalize",padding:14,"&:hover":{backgroundColor:"#4F4F6F"}},sidenav:{backgroundColor:"inherit","&:hover":{backgroundColor:"#4F4F6F"}},sidenavActive:{backgroundColor:"#4F4F6F","&:hover":{backgroundColor:"#4F4F6F"}},appHeader:{paddingLeft:30,paddingTop:30,paddingBottom:20,borderBottom:"solid 1px #4F4F6F","& > h3":{color:"#D2D2D2",textTransform:"uppercase"}}},g=[{label:"Data Import",link:"/hq/settings/DataImport"},{label:"Data Export",link:"/hq/settings/DataExport"},{label:"Theme Settings",link:"/hq/settings/ThemeSettings"},{label:"Security Settings",link:"/hq/settings/SecuritySettings"},{label:"User Management",link:"/hq/settings/UserManagement"}],v={color:"#fff",backgroundColor:"#4F4F6F",textDecoration:"none"};t.a=Object(p.a)(h)((function(e){var t=e.classes;return n.a.createElement(b.a,{theme:f.b},n.a.createElement(s.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},n.a.createElement("div",{className:t.appHeader},n.a.createElement(i.a,{variant:"h3"},"IT Management")),n.a.createElement(c.a,null,g.map((function(e,a){return n.a.createElement(o.a,{to:e.link,style:{textDecoration:"none"},activeStyle:v,state:{title:""+e.label}},n.a.createElement(l.a,{key:a,className:t.sidenav},n.a.createElement(d.a,{to:e.link,className:t.navLink},e.label)))})))))}))},454:function(e,t,a){"use strict";var r=a(3),n=a.n(r),o=a(6),i=a.n(o),c=a(0),l=a.n(c),d=(a(9),a(10)),s=a(17),p=l.a.forwardRef((function(e,t){var a=e.alt,r=e.children,o=e.childrenClassName,c=e.classes,s=e.className,p=e.component,u=void 0===p?"div":p,m=e.imgProps,b=e.sizes,f=e.src,h=e.srcSet,g=i()(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),v=null,y=f||h;return v=y?l.a.createElement("img",n()({alt:a,src:f,srcSet:h,sizes:b,className:c.img},m)):o&&l.a.isValidElement(r)?l.a.cloneElement(r,{className:Object(d.a)(o,r.props.className)}):r,l.a.createElement(u,n()({className:Object(d.a)(c.root,c.system,s,!y&&c.colorDefault),ref:t},g),v)}));t.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}}),{name:"MuiAvatar"})(p)},457:function(e,t,a){"use strict";a(11),a(13),a(12),a(7),a(31),a(20);var r=a(115),n=a.n(r),o=a(3),i=a.n(o),c=(a(9),a(66)),l=a.n(c);var d=function(e,t){return t?l()(e,t,{clone:!1}):e};var s=function(e){var t=function(t){var a=e(t);return t.css?i()({},d(a,e(i()({theme:t.theme},t.css))),function(e,t){var a={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(a[r]=e[r])})),a}(t.css,[e.filterProps])):a};return t.propTypes={},t.filterProps=["css"].concat(n()(e.filterProps)),t};a(53);var p=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=function(e){return t.reduce((function(t,a){var r=a(e);return r?d(t,r):t}),{})};return r.propTypes={},r.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),r},u=(a(16),a(46),a(57)),m=a.n(u),b=a(167),f=a.n(b),h=(a(33),{xs:0,sm:600,md:960,lg:1280,xl:1920}),g={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(h[e],"px)")}};function v(e,t,a){if(Array.isArray(t)){var r=e.theme.breakpoints||g;return t.reduce((function(e,n,o){return e[r.up(r.keys[o])]=a(t[o]),e}),{})}if("object"===f()(t)){var n=e.theme.breakpoints||g;return Object.keys(t).reduce((function(e,r){return e[n.up(r)]=a(t[r]),e}),{})}return a(t)}function y(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var k=function(e){var t=e.prop,a=e.cssProperty,r=void 0===a?e.prop:a,n=e.themeKey,o=e.transform,i=function(e){if(null==e[t])return null;var a=e[t],i=y(e.theme,n)||{};return v(e,a,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]:(t=y(i,e)||e,o&&(t=o(t))),!1===r?t:m()({},r,t)}))};return i.propTypes={},i.filterProps=[t],i};function x(e){return"number"!=typeof e?e:"".concat(e,"px solid").concat(0===e?" !important":"")}var E=p(k({prop:"border",themeKey:"borders",transform:x}),k({prop:"borderTop",themeKey:"borders",transform:x}),k({prop:"borderRight",themeKey:"borders",transform:x}),k({prop:"borderBottom",themeKey:"borders",transform:x}),k({prop:"borderLeft",themeKey:"borders",transform:x}),k({prop:"borderColor",themeKey:"palette",transform:function(e){return"".concat(e," !important")}}),k({prop:"borderRadius",themeKey:"shape"})),C=p(k({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),k({prop:"display"}),k({prop:"overflow"}),k({prop:"textOverflow"}),k({prop:"visibility"}),k({prop:"whiteSpace"})),w=p(k({prop:"flexBasis"}),k({prop:"flexDirection"}),k({prop:"flexWrap"}),k({prop:"justifyContent"}),k({prop:"alignItems"}),k({prop:"alignContent"}),k({prop:"order"}),k({prop:"flex"}),k({prop:"flexGrow"}),k({prop:"flexShrink"}),k({prop:"alignSelf"}),k({prop:"justifyItems"}),k({prop:"justifySelf"})),O=p(k({prop:"position"}),k({prop:"zIndex",themeKey:"zIndex"}),k({prop:"top"}),k({prop:"right"}),k({prop:"bottom"}),k({prop:"left"})),j=p(k({prop:"color",themeKey:"palette"}),k({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),F=k({prop:"boxShadow",themeKey:"shadows"});function S(e){return e<=1?"".concat(100*e,"%"):e}var N=k({prop:"width",transform:S}),I=k({prop:"maxWidth",transform:S}),R=k({prop:"minWidth",transform:S}),T=k({prop:"height",transform:S}),z=k({prop:"maxHeight",transform:S}),L=k({prop:"minHeight",transform:S}),D=(k({prop:"size",cssProperty:"width",transform:S}),k({prop:"size",cssProperty:"height",transform:S}),p(N,I,R,T,z,L)),P=(a(18),a(52)),B=a.n(P);var M,A,V={m:"margin",p:"padding"},H={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},$={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},K=(M=function(e){if(e.length>2){if(!$[e])return[e];e=$[e]}var t=e.split(""),a=B()(t,2),r=a[0],n=a[1],o=V[r],i=H[n]||"";return Array.isArray(i)?i.map((function(e){return o+e})):[o+i]},A={},function(e){return void 0===A[e]&&(A[e]=M(e)),A[e]}),q=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function W(e,t){return function(a){return e.reduce((function(e,r){return e[r]=function(e,t){if("string"==typeof t)return t;var a=e(Math.abs(t));return t>=0?a:"number"==typeof a?-a:"-".concat(a)}(t,a),e}),{})}}function _(e){var t=function(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}(e.theme);return Object.keys(e).map((function(a){if(-1===q.indexOf(a))return null;var r=W(K(a),t),n=e[a];return v(e,n,r)})).reduce(d,{})}_.propTypes={},_.filterProps=q;var G=_,U=p(k({prop:"fontFamily",themeKey:"typography"}),k({prop:"fontSize",themeKey:"typography"}),k({prop:"fontStyle",themeKey:"typography"}),k({prop:"fontWeight",themeKey:"typography"}),k({prop:"letterSpacing"}),k({prop:"lineHeight"}),k({prop:"textAlign"})),X=a(405),Y=a(89),J=function(e){var t=Object(X.a)(e);return function(e,a){return t(e,i()({defaultTheme:Y.a},a))}},Q=s(p(E,C,w,O,j,F,D,G,U)),Z=J("div")(Q,{name:"MuiBox"});t.a=Z},465:function(e,t,a){"use strict";var r=a(6),n=a.n(r),o=a(3),i=a.n(o),c=a(0),l=a.n(c),d=(a(9),a(10)),s=a(17),p=a(114),u=a(352),m=a(37),b=l.a.forwardRef((function(e,t){var a=e.children,r=e.classes,o=e.className,c=e.color,s=void 0===c?"default":c,p=e.component,b=void 0===p?"button":p,f=e.disabled,h=void 0!==f&&f,g=e.disableFocusRipple,v=void 0!==g&&g,y=e.focusVisibleClassName,k=e.fullWidth,x=void 0!==k&&k,E=e.size,C=void 0===E?"medium":E,w=e.type,O=void 0===w?"button":w,j=e.variant,F=void 0===j?"text":j,S=n()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),N="text"===F,I="outlined"===F,R="contained"===F,T="primary"===s,z="secondary"===s,L=Object(d.a)(r.root,o,N&&[r.text,T&&r.textPrimary,z&&r.textSecondary],I&&[r.outlined,T&&r.outlinedPrimary,z&&r.outlinedSecondary],R&&[r.contained,T&&r.containedPrimary,z&&r.containedSecondary],"medium"!==C&&r["size".concat(Object(m.a)(C))],h&&r.disabled,x&&r.fullWidth,"inherit"===s&&r.colorInherit);return l.a.createElement(u.a,i()({className:L,component:b,disabled:h,focusRipple:!v,focusVisibleClassName:Object(d.a)(r.focusVisible,y),ref:t,type:O},S),l.a.createElement("span",{className:r.label},a))}));t.a=Object(s.a)((function(e){return{root:i()({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(p.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}}),{name:"MuiButton"})(b)},471:function(e,t,a){"use strict";var r=a(3),n=a.n(r),o=a(52),i=a.n(o),c=a(6),l=a.n(c),d=a(0),s=a.n(d),p=(a(9),a(10)),u=a(37),m=a(17),b=a(171),f=a(30),h=a(72),g=s.a.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.color,c=void 0===o?"primary":o,d=e.component,m=void 0===d?"a":d,g=e.onBlur,v=e.onFocus,y=e.TypographyClasses,k=e.underline,x=void 0===k?"hover":k,E=e.variant,C=void 0===E?"inherit":E,w=l()(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=Object(b.a)(),j=O.isFocusVisible,F=O.onBlurVisible,S=O.ref,N=s.a.useState(!1),I=i()(N,2),R=I[0],T=I[1],z=Object(f.c)(t,S);return s.a.createElement(h.a,n()({className:Object(p.a)(a.root,a["underline".concat(Object(u.a)(x))],r,"button"===m&&a.button,R&&a.focusVisible),classes:y,color:c,component:m,onBlur:function(e){R&&(F(),T(!1)),g&&g(e)},onFocus:function(e){j(e)&&T(!0),v&&v(e)},ref:z,variant:C},w))}));t.a=Object(m.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:"none",border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(g)},492:function(e,t,a){"use strict";a(168);var r=a(3),n=a.n(r),o=a(6),i=a.n(o),c=a(0),l=a.n(c),d=(a(9),a(10)),s=a(17),p=a(114),u=a(352),m=a(37),b=l.a.forwardRef((function(e,t){var a=e.edge,r=void 0!==a&&a,o=e.children,c=e.classes,s=e.className,p=e.color,b=void 0===p?"default":p,f=e.disabled,h=void 0!==f&&f,g=e.disableFocusRipple,v=void 0!==g&&g,y=e.size,k=void 0===y?"medium":y,x=i()(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return l.a.createElement(u.a,n()({className:Object(d.a)(c.root,s,"default"!==b&&c["color".concat(Object(m.a)(b))],h&&c.disabled,"small"===k&&c["size".concat(Object(m.a)(k))],"start"===r&&c.edgeStart,"end"===r&&c.edgeEnd),centerRipple:!0,focusRipple:!v,disabled:h,ref:t},x),l.a.createElement("span",{className:c.label},o))}));t.a=Object(s.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(p.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(b)},493:function(e,t,a){"use strict";a(5);var r=a(54);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(355)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),"EditRounded");t.default=o},532:function(e,t,a){"use strict";a(5);var r=a(54);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(355)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),"CloseRounded");t.default=o},551:function(e,t,a){"use strict";var r=a(3),n=a.n(r),o=a(6),i=a.n(o),c=a(0),l=a.n(c),d=(a(9),a(10)),s=(a(38),a(52)),p=a.n(s),u=a(414),m=a(17),b=a(492),f=l.a.forwardRef((function(e,t){var a=e.autoFocus,r=e.checked,o=e.checkedIcon,c=e.classes,s=e.className,u=e.defaultChecked,m=e.disabled,f=e.icon,h=e.id,g=e.inputProps,v=e.inputRef,y=e.muiFormControl,k=e.name,x=e.onBlur,E=e.onChange,C=e.onFocus,w=e.readOnly,O=e.required,j=e.tabIndex,F=e.type,S=e.value,N=i()(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","muiFormControl","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=l.a.useRef(null!=r).current,R=l.a.useState(Boolean(u)),T=p()(R,2),z=T[0],L=T[1],D=m;y&&void 0===D&&(D=y.disabled);var P=I?r:z,B="checkbox"===F||"radio"===F;return l.a.createElement(b.a,n()({component:"span",className:Object(d.a)(c.root,s,P&&c.checked,D&&c.disabled),disabled:D,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),y&&y.onFocus&&y.onFocus(e)},onBlur:function(e){x&&x(e),y&&y.onBlur&&y.onBlur(e)},ref:t},N),P?o:f,l.a.createElement("input",n()({autoFocus:a,checked:r,defaultChecked:u,className:c.input,disabled:D,id:B&&h,name:k,onChange:function(e){var t=e.target.checked;I||L(t),E&&E(e,t)},readOnly:w,ref:v,required:O,tabIndex:j,type:F,value:S},g)))})),h=Object(m.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}},{name:"PrivateSwitchBase"})(Object(u.a)(f)),g=a(418),v=Object(g.a)(l.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),y=Object(g.a)(l.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),k=a(114),x=Object(g.a)(l.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),E=a(37),C=l.a.createElement(y,null),w=l.a.createElement(v,null),O=l.a.createElement(x,null),j=l.a.forwardRef((function(e,t){var a=e.checkedIcon,r=void 0===a?C:a,o=e.classes,c=e.color,s=void 0===c?"secondary":c,p=e.icon,u=void 0===p?w:p,m=e.indeterminate,b=void 0!==m&&m,f=e.indeterminateIcon,g=void 0===f?O:f,v=e.inputProps,y=i()(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return l.a.createElement(h,n()({type:"checkbox",checkedIcon:b?g:r,classes:{root:Object(d.a)(o.root,o["color".concat(Object(E.a)(s))],b&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:s,inputProps:n()({"data-indeterminate":b},v),icon:b?g:u,ref:t},y))}));t.a=Object(m.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(k.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(k.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(j)},569:function(e,t,a){"use strict";var r=a(3),n=a.n(r),o=a(6),i=a.n(o),c=a(0),l=a.n(c),d=(a(9),a(10)),s=a(17),p=l.a.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.row,c=void 0!==o&&o,s=i()(e,["classes","className","row"]);return l.a.createElement("div",n()({className:Object(d.a)(a.root,r,c&&a.row),ref:t},s))}));t.a=Object(s.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(p)},570:function(e,t,a){"use strict";a(20),a(38);var r=a(3),n=a.n(r),o=a(6),i=a.n(o),c=a(0),l=a.n(c),d=(a(9),a(10)),s=a(414),p=a(17),u=a(72),m=a(37),b=l.a.forwardRef((function(e,t){e.checked;var a=e.classes,r=e.className,o=e.control,c=e.disabled,s=(e.inputRef,e.label),p=e.labelPlacement,b=void 0===p?"end":p,f=e.muiFormControl,h=(e.name,e.onChange,e.value,i()(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","muiFormControl","name","onChange","value"])),g=c;void 0===g&&void 0!==o.props.disabled&&(g=o.props.disabled),void 0===g&&f&&(g=f.disabled);var v={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===o.props[t]&&void 0!==e[t]&&(v[t]=e[t])})),l.a.createElement("label",n()({className:Object(d.a)(a.root,r,"end"!==b&&a["labelPlacement".concat(Object(m.a)(b))],g&&a.disabled),ref:t},h),l.a.cloneElement(o,v),l.a.createElement(u.a,{component:"span",className:Object(d.a)(a.label,g&&a.disabled)},s))}));t.a=Object(p.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(Object(s.a)(b))}}]);
//# sourceMappingURL=component---src-pages-hq-settings-security-settings-jsx-b07b6172eb41ece95212.js.map