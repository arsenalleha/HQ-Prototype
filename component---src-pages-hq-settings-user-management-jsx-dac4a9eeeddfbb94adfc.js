(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(426),l=t(423),i=t(78),c=t(233),s=t(420),d=t(360),m=t(237),u=t(447),p=t(446),g=Object(c.a)((function(e){return{root:{overflowX:"auto",backgroundColor:d.b.palette.background.paper,minHeight:800}}}));a.default=Object(m.a)((function(e){e.location;var a=g();return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{theme:d.b},r.a.createElement(u.a,null),r.a.createElement(l.a,{container:!0,direction:"row"},r.a.createElement(l.a,{item:!0,md:2},r.a.createElement(p.a,null)),r.a.createElement(l.a,{item:!0,md:10},r.a.createElement(l.a,{container:!0,direction:"column"},r.a.createElement(o.a,{p:6},r.a.createElement(i.a,{variant:"h1",display:"block",align:"left"},"User Management"),r.a.createElement(i.a,{variant:"body1",color:"textSecondary"}," To be added later... ")))))))}))},445:function(e,a,t){"use strict";t(5);var n=t(57);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(358)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"})),"PersonRounded");a.default=o},446:function(e,a,t){"use strict";t(48);var n=t(0),r=t.n(n),o=t(63),l=(t(237),t(78)),i=t(424),c=t(425),s=t(464),d=t(428),m=t(24),u=t(3),p=t(361),g=t(419),f=t(360),b={root:{flexGrow:1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,paddingTop:60,backgroundColor:"#2F2F4F"},h1:u.c.h1,h2:u.c.h2,h3:u.c.h3,h4:u.c.h4,btnPrimary:p.a.primary,btnSecondary:p.a.secondary,btnLink:p.a.link,navLink:{backgroundColor:"inherit",color:"#fff",textDecoration:"none",textTransform:"capitalize",padding:14,fontWeight:500,"&:hover":{backgroundColor:"#4F4F6F",textDecoration:"none"}},navLinkActive:{backgroundColor:"#4F4F6F",fontFamily:"Roboto",color:"#fff",textDecoration:"none",textTransform:"capitalize",padding:14,"&:hover":{backgroundColor:"#4F4F6F"}},sidenav:{backgroundColor:"inherit","&:hover":{backgroundColor:"#4F4F6F"}},sidenavActive:{backgroundColor:"#4F4F6F","&:hover":{backgroundColor:"#4F4F6F"}},appHeader:{paddingLeft:30,paddingTop:30,paddingBottom:20,borderBottom:"solid 1px #4F4F6F","& > h3":{color:"#D2D2D2",textTransform:"uppercase"}}},h=[{label:"Data Import",link:"/hq/settings/DataImport"},{label:"Data Export",link:"/hq/settings/DataExport"},{label:"Security Settings",link:"/hq/settings/SecuritySettings"},{label:"User Access Control",link:"/hq/settings/UserAccessControl"},{label:"User Management",link:"/hq/settings/UserManagement"}],v={color:"#fff",backgroundColor:"#4F4F6F",textDecoration:"none"};a.a=Object(m.a)(b)((function(e){var a=e.classes;return r.a.createElement(g.a,{theme:f.b},r.a.createElement(d.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left"},r.a.createElement("div",{className:a.appHeader},r.a.createElement(l.a,{variant:"h3"},"IT Management")),r.a.createElement(i.a,null,h.map((function(e,t){return r.a.createElement(o.a,{to:e.link,style:{textDecoration:"none"},activeStyle:v,partiallyActive:!0,state:{title:""+e.label}},r.a.createElement(c.a,{key:t,className:a.sidenav},r.a.createElement(s.a,{to:e.link,className:a.navLink},e.label)))})))))}))},447:function(e,a,t){"use strict";t(48);var n=t(0),r=t.n(n),o=t(63),l=(t(237),t(351)),i=t(1),c=t(6),s=(t(11),t(12)),d=t(24),m=r.a.forwardRef((function(e,a){var t=e.alt,n=e.children,o=e.classes,l=e.className,d=e.component,m=void 0===d?"div":d,u=e.imgProps,p=e.sizes,g=e.src,f=e.srcSet,b=Object(c.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet"]),h=n,v=g||f;return v&&(h=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",Object(i.a)({alt:t,src:g,srcSet:f,sizes:p,className:o.img},u)),h)),r.a.createElement(m,Object(i.a)({className:Object(s.a)(o.root,o.system,l,!v&&o.colorDefault),ref:a},b),h)})),u=Object(d.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}}),{name:"MuiAvatar"})(m),p=t(426),g=t(423),f=t(464),b=t(353),h=t(78),v=t(445),k=t.n(v),y={color:"#fff",backgroundColor:"#4F4F6F",textDecoration:"none"},E=[{label:"Apps Configurations",link:"/hq/apps/ThemeSettings"},{label:"Customers",link:"/hq/defaultempty"},{label:"Store Operations",link:"/hq/defaultempty"},{label:"IT Management",link:"/hq/settings/"}];a.a=Object(d.a)({root:{flexGrow:1},avatar:{width:32,height:"32px !important",marginRight:10},grow:{},menuButton:{marginLeft:-12,marginRight:20},navBlock:{backgroundColor:"inherit","&:hover":{backgroundColor:"#4F4F6F"}},link:{color:"#fff",textDecoration:"none",marginLeft:"20px",marginRight:"20px",paddingTop:"0",paddingBottom:"0"},appbar:{backgroundColor:"#1F1F3F",height:"60px",zIndex:1500},toolbar:{height:"60px",paddingLeft:"20px","& div":{height:"100%"}}})((function(e,a){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(l.a,{position:"fixed",className:t.appbar},r.a.createElement(b.a,{variant:"dense",className:t.toolbar},r.a.createElement(g.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(g.a,{item:!0,md:3},r.a.createElement(p.a,{display:"flex",alignItems:"center"},r.a.createElement(h.a,{variant:"h2"},r.a.createElement(o.a,{to:"/styleguides/hq",className:t.link},"Tulip Headquarter")))),r.a.createElement(g.a,{item:!0,md:6},r.a.createElement(g.a,{container:!0,direction:"row",alignItems:"stretch"},E.map((function(e,a){return r.a.createElement(g.a,{item:!0,key:a},r.a.createElement(o.a,{to:e.link,style:{textDecoration:"none"},activeStyle:y,partiallyActive:!0,state:{title:""+e.label}},r.a.createElement(p.a,{display:"flex",alignItems:"center",className:t.navBlock},r.a.createElement(h.a,{variant:"h3",display:"inline",color:"inherit"},r.a.createElement(f.a,{to:"Test",className:t.link,underline:"none"},e.label)))))})))),r.a.createElement(g.a,{item:!0,md:3},r.a.createElement(p.a,{display:"flex",direction:"row",justifyContent:"flex-end",alignItems:"center"},r.a.createElement(u,{alt:"User Icon",display:"inline",className:t.avatar},r.a.createElement(k.a,null)),r.a.createElement(h.a,{variant:"body1",color:"inherit",display:"inline"},"Lezhong")))))))}))},464:function(e,a,t){"use strict";var n=t(1),r=t(6),o=t(0),l=t.n(o),i=(t(11),t(12)),c=t(47),s=t(24),d=t(173),m=t(35),u=t(78),p=l.a.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.color,p=void 0===s?"primary":s,g=e.component,f=void 0===g?"a":g,b=e.onBlur,h=e.onFocus,v=e.TypographyClasses,k=e.underline,y=void 0===k?"hover":k,E=e.variant,F=void 0===E?"inherit":E,x=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=Object(d.a)(),C=w.isFocusVisible,j=w.onBlurVisible,D=w.ref,N=l.a.useState(!1),S=N[0],O=N[1],T=Object(m.a)(a,D);return l.a.createElement(u.a,Object(n.a)({className:Object(i.a)(t.root,t["underline".concat(Object(c.a)(y))],o,S&&t.focusVisible,{button:t.button}[f]),classes:v,color:p,component:f,onBlur:function(e){S&&(j(),O(!1)),b&&b(e)},onFocus:function(e){C(e)&&O(!0),h&&h(e)},ref:T,variant:F},x))}));a.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)}}]);
//# sourceMappingURL=component---src-pages-hq-settings-user-management-jsx-dac4a9eeeddfbb94adfc.js.map