(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{379:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),o=t.n(n),r=(t(13),t(415)),i=t(464),c=t(521),l=t(417),d=t(540),s=t(541),u=t(412),m=t(488),p=t(351),b=t(74),h=t(410),f=t(411),v=t(357),g=t(499),y=t.n(g),k=t(468),x=t.n(k),E=(t(62),t(230)),C=t(434),w=t(436),F=Object(f.a)((function(e){return{root:{overflowX:"auto",backgroundColor:v.b.palette.background.paper,minHeight:800},section:{backgroundColor:v.b.palette.background.paper},panel:{width:480,height:"100%"},panelContainer:{height:"inherit"},panelBody:{flexGrow:1},sideNav:{height:"100%",backgroundColor:"#2F2F4F"}}}));a.default=Object(E.a)((function(e){var a=F(),t=o.a.useState(null),n=(t[0],t[1],o.a.useState(null));n[0],n[1];var f,g,k,E=o.a.useState({checkboxTouchId:!1,checkboxTouchIdEdit:!1,edit:!1,editDeviceLock:!1}),O=E[0],j=E[1],N=function(e,a){return function(t){var n;O.checkboxTouchIdEdit=O.checkboxTouchId,j(Object.assign({},O,((n={})[e]=a,n)))}};return o.a.createElement("div",{className:a.root},o.a.createElement(h.a,{theme:v.b},o.a.createElement(C.a,null),o.a.createElement(u.a,{container:!0,direction:"row"},o.a.createElement(u.a,{item:!0,md:2},o.a.createElement(w.a,null)),o.a.createElement(u.a,{item:!0,md:10},o.a.createElement(u.a,{container:!0,direction:"column"},o.a.createElement(r.a,{p:6},o.a.createElement(b.a,{variant:"h1",display:"block",align:"left"},"Security Settings"),o.a.createElement(u.a,{container:!0,direction:"row",spacing:3,xs:12},o.a.createElement(u.a,{item:!0,md:6},o.a.createElement(r.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},o.a.createElement(b.a,{variant:"h3",display:"inline"}," Device Lock "),o.a.createElement(m.a,{"aria-label":"Edit Device Lock",onClick:N("editDeviceLock",!0),color:"primary"},o.a.createElement(x.a,{fontSize:"small"}))),o.a.createElement(p.a,{elevation:"0",className:"setting-card"},o.a.createElement(b.a,{variant:"caption"}," Unlock with Touch ID "),o.a.createElement(b.a,{variant:"body1"}," ",O.checkboxTouchId?"allowed":"not allowed")))))))),o.a.createElement(l.a,{variant:"temporary",anchor:"right",open:O.editDeviceLock,onClose:N("editDeviceLock",!1)},o.a.createElement(p.a,{className:a.panel},o.a.createElement(u.a,{container:!0,direction:"column",className:a.panelContainer},o.a.createElement(u.a,{item:!0},o.a.createElement(r.a,{pt:7,pb:1,p:2,borderBottom:1,borderColor:v.b.palette.divider,display:"flex",justifyContent:"space-between",alignItems:"center"},o.a.createElement(r.a,null,o.a.createElement(b.a,{variant:"h3",display:"block"}," Edit Device Lock ")),o.a.createElement(m.a,{"aria-label":"Close",onClick:N("editDeviceLock",!1)},o.a.createElement(y.a,{fontSize:"small"})))),o.a.createElement(u.a,{item:!0,className:a.panelBody},o.a.createElement(r.a,{p:2},o.a.createElement(d.a,{row:!0},o.a.createElement(s.a,{control:o.a.createElement(c.a,{checked:O.checkboxTouchIdEdit,onChange:(k="checkboxTouchIdEdit",function(e){var a;j(Object.assign({},O,((a={})[k]=e.target.checked,a)))}),value:"checkboxTouchIdEdit",color:"primary"}),label:"Allow app user to unlock app with Touch ID"})),o.a.createElement(r.a,{hidden:!O.checkboxTouchIdEdit,bgcolor:"secondary.light",color:"text.primary",p:2,mt:2,borderRadius:"4px"},o.a.createElement(b.a,{variant:"body2"},"By default, unlock with Touch ID is disabled in mobile apps. Unlock with Touch ID on shared device is not recommended. ")))),o.a.createElement(u.a,{item:!0},o.a.createElement(r.a,{p:2,borderTop:1,borderColor:v.b.palette.divider,display:"flex",justifyContent:"flex-end"},o.a.createElement(r.a,{mr:2},o.a.createElement(i.a,{variant:"outlined",color:"secondary",onClick:N("editDeviceLock",!1)},"Cancel")),o.a.createElement(i.a,{variant:"contained",color:"primary",onClick:(f="editDeviceLock",g=!1,function(e){var a;O.checkboxTouchId=O.checkboxTouchIdEdit,j(Object.assign({},O,((a={})[f]=g,a)))})},"Save"))))))))}))},419:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(3),o=t.n(n),r=t(0),i=t.n(r),c=t(91),l=t.n(c),d=t(425);function s(e){var a=i.a.forwardRef((function(a,t){return i.a.createElement(d.a.Consumer,null,(function(n){return i.a.createElement(e,o()({muiFormControl:n,ref:t},a))}))}));return l()(a,e),a}},423:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(3),o=t.n(n),r=t(0),i=t.n(r),c=t(214);function l(e,a){var t=i.a.memo(i.a.forwardRef((function(a,t){return i.a.createElement(c.a,o()({},a,{ref:t}),e)})));return t.muiName=c.a.muiName,t}},425:function(e,a,t){"use strict";var n=t(0),o=t.n(n).a.createContext();a.a=o},434:function(e,a,t){"use strict";t(51);var n=t(0),o=t.n(n),r=t(62),i=(t(230),t(350)),c=t(443),l=t(415),d=t(412),s=t(451),u=t(352),m=t(74),p=t(17),b=t(435),h=t.n(b),f={color:"#fff",backgroundColor:"#4F4F6F",textDecoration:"none"},v=[{label:"Apps Configurations",link:"/hq/apps/ThemeSettings"},{label:"Customers",link:"/hq/defaultempty"},{label:"Store Operations",link:"/hq/defaultempty"},{label:"IT Management",link:"/hq/settings/"}];a.a=Object(p.a)({root:{flexGrow:1},avatar:{width:32,height:"32px !important",marginRight:10},grow:{},menuButton:{marginLeft:-12,marginRight:20},navBlock:{backgroundColor:"inherit","&:hover":{backgroundColor:"#4F4F6F"}},link:{color:"#fff",textDecoration:"none",marginLeft:"20px",marginRight:"20px",paddingTop:"0",paddingBottom:"0"},appbar:{backgroundColor:"#1F1F3F",height:"60px",zIndex:1500},toolbar:{height:"60px",paddingLeft:"20px","& div":{height:"100%"}}})((function(e,a){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(i.a,{position:"fixed",className:t.appbar},o.a.createElement(u.a,{variant:"dense",className:t.toolbar},o.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},o.a.createElement(d.a,{item:!0,md:3},o.a.createElement(l.a,{display:"flex",alignItems:"center"},o.a.createElement(m.a,{variant:"h2"},o.a.createElement(r.a,{to:"/styleguides/hq",className:t.link},"Tulip Headquarter")))),o.a.createElement(d.a,{item:!0,md:6},o.a.createElement(d.a,{container:!0,direction:"row",alignItems:"stretch"},v.map((function(e,a){return o.a.createElement(d.a,{item:!0,key:a},o.a.createElement(r.a,{to:e.link,style:{textDecoration:"none"},activeStyle:f,partiallyActive:!0,state:{title:""+e.label}},o.a.createElement(l.a,{display:"flex",alignItems:"center",className:t.navBlock},o.a.createElement(m.a,{variant:"h3",display:"inline",color:"inherit"},o.a.createElement(s.a,{to:"Test",className:t.link,underline:"none"},e.label)))))})))),o.a.createElement(d.a,{item:!0,md:3},o.a.createElement(l.a,{display:"flex",direction:"row",justifyContent:"flex-end",alignItems:"center"},o.a.createElement(c.a,{alt:"User Icon",display:"inline",className:t.avatar},o.a.createElement(h.a,null)),o.a.createElement(m.a,{variant:"body1",color:"inherit",display:"inline"},"Lezhong")))))))}))},435:function(e,a,t){"use strict";t(5);var n=t(55);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(0)),r=(0,n(t(355)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"})),"PersonRounded");a.default=r},436:function(e,a,t){"use strict";t(51);var n=t(0),o=t.n(n),r=t(62),i=(t(230),t(74)),c=t(413),l=t(414),d=t(451),s=t(417),u=t(17),m=t(2),p=t(358),b=t(410),h=t(357),f={root:{flexGrow:1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,paddingTop:60,backgroundColor:"#2F2F4F"},h1:m.c.h1,h2:m.c.h2,h3:m.c.h3,h4:m.c.h4,btnPrimary:p.a.primary,btnSecondary:p.a.secondary,btnLink:p.a.link,navLink:{backgroundColor:"inherit",color:"#fff",textDecoration:"none",textTransform:"capitalize",padding:14,fontWeight:500,"&:hover":{backgroundColor:"#4F4F6F",textDecoration:"none"}},navLinkActive:{backgroundColor:"#4F4F6F",fontFamily:"Roboto",color:"#fff",textDecoration:"none",textTransform:"capitalize",padding:14,"&:hover":{backgroundColor:"#4F4F6F"}},sidenav:{backgroundColor:"inherit","&:hover":{backgroundColor:"#4F4F6F"}},sidenavActive:{backgroundColor:"#4F4F6F","&:hover":{backgroundColor:"#4F4F6F"}},appHeader:{paddingLeft:30,paddingTop:30,paddingBottom:20,borderBottom:"solid 1px #4F4F6F","& > h3":{color:"#D2D2D2",textTransform:"uppercase"}}},v=[{label:"Data Import",link:"/hq/settings/DataImport"},{label:"Data Export",link:"/hq/settings/DataExport"},{label:"Security Settings",link:"/hq/settings/SecuritySettings"},{label:"User Access Control",link:"/hq/settings/UserAccessControl"},{label:"User Management",link:"/hq/settings/UserManagement"}],g={color:"#fff",backgroundColor:"#4F4F6F",textDecoration:"none"};a.a=Object(u.a)(f)((function(e){var a=e.classes;return o.a.createElement(b.a,{theme:h.b},o.a.createElement(s.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left"},o.a.createElement("div",{className:a.appHeader},o.a.createElement(i.a,{variant:"h3"},"IT Management")),o.a.createElement(c.a,null,v.map((function(e,t){return o.a.createElement(r.a,{to:e.link,style:{textDecoration:"none"},activeStyle:g,state:{title:""+e.label}},o.a.createElement(l.a,{key:t,className:a.sidenav},o.a.createElement(d.a,{to:e.link,className:a.navLink},e.label)))})))))}))},443:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(6),i=t.n(r),c=t(0),l=t.n(c),d=(t(9),t(13)),s=t(17),u=l.a.forwardRef((function(e,a){var t=e.alt,n=e.children,r=e.childrenClassName,c=e.classes,s=e.className,u=e.component,m=void 0===u?"div":u,p=e.imgProps,b=e.sizes,h=e.src,f=e.srcSet,v=i()(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),g=null,y=h||f;return g=y?l.a.createElement("img",o()({alt:t,src:h,srcSet:f,sizes:b,className:c.img},p)):r&&l.a.isValidElement(n)?l.a.cloneElement(n,{className:Object(d.a)(r,n.props.className)}):n,l.a.createElement(m,o()({className:Object(d.a)(c.root,c.system,s,!y&&c.colorDefault),ref:a},v),g)}));a.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}}),{name:"MuiAvatar"})(u)},451:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(47),i=t.n(r),c=t(6),l=t.n(c),d=t(0),s=t.n(d),u=(t(9),t(13)),m=t(37),p=t(17),b=t(171),h=t(32),f=t(74),v=s.a.forwardRef((function(e,a){var t=e.classes,n=e.className,r=e.color,c=void 0===r?"primary":r,d=e.component,p=void 0===d?"a":d,v=e.onBlur,g=e.onFocus,y=e.TypographyClasses,k=e.underline,x=void 0===k?"hover":k,E=e.variant,C=void 0===E?"inherit":E,w=l()(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),F=Object(b.a)(),O=F.isFocusVisible,j=F.onBlurVisible,N=F.ref,S=s.a.useState(!1),I=i()(S,2),R=I[0],z=I[1],D=Object(h.c)(a,N);return s.a.createElement(f.a,o()({className:Object(u.a)(t.root,t["underline".concat(Object(m.a)(x))],n,"button"===p&&t.button,R&&t.focusVisible),classes:y,color:c,component:p,onBlur:function(e){R&&(j(),z(!1)),v&&v(e)},onFocus:function(e){O(e)&&z(!0),g&&g(e)},ref:D,variant:C},w))}));a.a=Object(p.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:"none",border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(v)},464:function(e,a,t){"use strict";var n=t(6),o=t.n(n),r=t(3),i=t.n(r),c=t(0),l=t.n(c),d=(t(9),t(13)),s=t(17),u=t(115),m=t(353),p=t(37),b=l.a.forwardRef((function(e,a){var t=e.children,n=e.classes,r=e.className,c=e.color,s=void 0===c?"default":c,u=e.component,b=void 0===u?"button":u,h=e.disabled,f=void 0!==h&&h,v=e.disableFocusRipple,g=void 0!==v&&v,y=e.focusVisibleClassName,k=e.fullWidth,x=void 0!==k&&k,E=e.size,C=void 0===E?"medium":E,w=e.type,F=void 0===w?"button":w,O=e.variant,j=void 0===O?"text":O,N=o()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),S="text"===j,I="outlined"===j,R="contained"===j,z="primary"===s,D="secondary"===s,T=Object(d.a)(n.root,r,S&&[n.text,z&&n.textPrimary,D&&n.textSecondary],I&&[n.outlined,z&&n.outlinedPrimary,D&&n.outlinedSecondary],R&&[n.contained,z&&n.containedPrimary,D&&n.containedSecondary],"medium"!==C&&n["size".concat(Object(p.a)(C))],f&&n.disabled,x&&n.fullWidth,"inherit"===s&&n.colorInherit);return l.a.createElement(m.a,i()({className:T,component:b,disabled:f,focusRipple:!g,focusVisibleClassName:Object(d.a)(n.focusVisible,y),ref:a,type:F},N),l.a.createElement("span",{className:n.label},t))}));a.a=Object(s.a)((function(e){return{root:i()({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(u.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(u.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(u.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}}),{name:"MuiButton"})(b)},468:function(e,a,t){"use strict";t(5);var n=t(55);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(0)),r=(0,n(t(355)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),"EditRounded");a.default=r},488:function(e,a,t){"use strict";t(168);var n=t(3),o=t.n(n),r=t(6),i=t.n(r),c=t(0),l=t.n(c),d=(t(9),t(13)),s=t(17),u=t(115),m=t(353),p=t(37),b=l.a.forwardRef((function(e,a){var t=e.edge,n=void 0!==t&&t,r=e.children,c=e.classes,s=e.className,u=e.color,b=void 0===u?"default":u,h=e.disabled,f=void 0!==h&&h,v=e.disableFocusRipple,g=void 0!==v&&v,y=e.size,k=void 0===y?"medium":y,x=i()(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return l.a.createElement(m.a,o()({className:Object(d.a)(c.root,s,"default"!==b&&c["color".concat(Object(p.a)(b))],f&&c.disabled,"small"===k&&c["size".concat(Object(p.a)(k))],"start"===n&&c.edgeStart,"end"===n&&c.edgeEnd),centerRipple:!0,focusRipple:!g,disabled:f,ref:a},x),l.a.createElement("span",{className:c.label},r))}));a.a=Object(s.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(u.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(b)},499:function(e,a,t){"use strict";t(5);var n=t(55);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(0)),r=(0,n(t(355)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),"CloseRounded");a.default=r},521:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(6),i=t.n(r),c=t(0),l=t.n(c),d=(t(9),t(13)),s=(t(38),t(47)),u=t.n(s),m=t(419),p=t(17),b=t(488),h=l.a.forwardRef((function(e,a){var t=e.autoFocus,n=e.checked,r=e.checkedIcon,c=e.classes,s=e.className,m=e.defaultChecked,p=e.disabled,h=e.icon,f=e.id,v=e.inputProps,g=e.inputRef,y=e.muiFormControl,k=e.name,x=e.onBlur,E=e.onChange,C=e.onFocus,w=e.readOnly,F=e.required,O=e.tabIndex,j=e.type,N=e.value,S=i()(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","muiFormControl","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=l.a.useRef(null!=n).current,R=l.a.useState(Boolean(m)),z=u()(R,2),D=z[0],T=z[1],L=p;y&&void 0===L&&(L=y.disabled);var B=I?n:D,P="checkbox"===j||"radio"===j;return l.a.createElement(b.a,o()({component:"span",className:Object(d.a)(c.root,s,B&&c.checked,L&&c.disabled),disabled:L,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),y&&y.onFocus&&y.onFocus(e)},onBlur:function(e){x&&x(e),y&&y.onBlur&&y.onBlur(e)},ref:a},S),B?r:h,l.a.createElement("input",o()({autoFocus:t,checked:n,defaultChecked:m,className:c.input,disabled:L,id:P&&f,name:k,onChange:function(e){var a=e.target.checked;I||T(a),E&&E(e,a)},readOnly:w,ref:g,required:F,tabIndex:O,type:j,value:N},v)))})),f=Object(p.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}},{name:"PrivateSwitchBase"})(Object(m.a)(h)),v=t(423),g=Object(v.a)(l.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),y=Object(v.a)(l.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),k=t(115),x=Object(v.a)(l.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),E=t(37),C=l.a.createElement(y,null),w=l.a.createElement(g,null),F=l.a.createElement(x,null),O=l.a.forwardRef((function(e,a){var t=e.checkedIcon,n=void 0===t?C:t,r=e.classes,c=e.color,s=void 0===c?"secondary":c,u=e.icon,m=void 0===u?w:u,p=e.indeterminate,b=void 0!==p&&p,h=e.indeterminateIcon,v=void 0===h?F:h,g=e.inputProps,y=i()(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return l.a.createElement(f,o()({type:"checkbox",checkedIcon:b?v:n,classes:{root:Object(d.a)(r.root,r["color".concat(Object(E.a)(s))],b&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:s,inputProps:o()({"data-indeterminate":b},g),icon:b?v:m,ref:a},y))}));a.a=Object(p.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(k.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(k.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O)},540:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(6),i=t.n(r),c=t(0),l=t.n(c),d=(t(9),t(13)),s=t(17),u=l.a.forwardRef((function(e,a){var t=e.classes,n=e.className,r=e.row,c=void 0!==r&&r,s=i()(e,["classes","className","row"]);return l.a.createElement("div",o()({className:Object(d.a)(t.root,n,c&&t.row),ref:a},s))}));a.a=Object(s.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(u)},541:function(e,a,t){"use strict";t(19),t(38);var n=t(3),o=t.n(n),r=t(6),i=t.n(r),c=t(0),l=t.n(c),d=(t(9),t(13)),s=t(419),u=t(17),m=t(74),p=t(37),b=l.a.forwardRef((function(e,a){e.checked;var t=e.classes,n=e.className,r=e.control,c=e.disabled,s=(e.inputRef,e.label),u=e.labelPlacement,b=void 0===u?"end":u,h=e.muiFormControl,f=(e.name,e.onChange,e.value,i()(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","muiFormControl","name","onChange","value"])),v=c;void 0===v&&void 0!==r.props.disabled&&(v=r.props.disabled),void 0===v&&h&&(v=h.disabled);var g={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===r.props[a]&&void 0!==e[a]&&(g[a]=e[a])})),l.a.createElement("label",o()({className:Object(d.a)(t.root,n,"end"!==b&&t["labelPlacement".concat(Object(p.a)(b))],v&&t.disabled),ref:a},f),l.a.cloneElement(r,g),l.a.createElement(m.a,{component:"span",className:Object(d.a)(t.label,v&&t.disabled)},s))}));a.a=Object(u.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(Object(s.a)(b))}}]);
//# sourceMappingURL=component---src-pages-hq-settings-security-settings-jsx-ba77dd5c15369e29c4b8.js.map