(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(e,a,t){"use strict";t.r(a);t(313),t(66),t(233);var n=t(0),i=t.n(n),r=t(6),l=t.n(r),o=(t(219),t(220),t(764)),c=t(761),s=t(767),m=t(771),g=t(770),d=t(768),u=t(769),h=t(759),f=t(2),p=t.n(f),b=t(14),x=t.n(b),y=t(65),E=t(218),v=t(257),N=i.a.forwardRef(function(e,a){var t=e.absolute,n=void 0!==t&&t,r=e.classes,l=e.className,o=e.component,c=void 0===o?"hr":o,s=e.light,m=void 0!==s&&s,g=e.role,d=void 0===g?"hr"!==c?"separator":void 0:g,u=e.variant,h=void 0===u?"fullWidth":u,f=x()(e,["absolute","classes","className","component","light","role","variant"]);return i.a.createElement(c,p()({className:Object(y.a)(r.root,l,"inset"===h&&r.inset,"middle"===h&&r.middle,n&&r.absolute,m&&r.light),role:d,ref:a},f))}),k=Object(E.a)(function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(v.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}}},{name:"MuiDivider"})(N),w=t(775),C=t(772),T=t(228),z=t(280),H=(t(327),t(222)),S=t(232),F=0;function L(e,a,t,n,i){return{id:F+=1,name:e,calories:a,fat:t,carbs:n,protein:i}}var D=[L("io.tulip.sat.products","Y",null,null,"Edit"),L("io.tulip.sat.customers","Y",null,null,"Edit"),L("io.tulip.associates","Y",null,null,"Edit"),L("io.tulip.stores","Y",null,null,"Edit"),L("io.tulip.sat.stores","N",null,null,"Edit")];function j(e){var a,t=e.classes,n=i.a.useState({top:!1,left:!1,bottom:!1,right:!1}),r=n[0],l=n[1],f=i.a.useState({enabled:!0,featureID:"io.tulip.sat.customers",name:"Customers",category:"",type:"",path:""}),p=f[0],b=f[1],x=function(e){return function(a){var t;b(Object.assign({},p,((t={})[e]=a.target.value,t)))}},y=function(e,a){return function(){var t;l(Object.assign({},r,((t={})[e]=a,t))),console.log("doc = "+r.left),console.log("edit = "+r.right)}},E=i.a.createElement("div",{className:t.docContainer},i.a.createElement(c.a,{className:t.h2}," How to configure "),i.a.createElement(o.a,{className:t.btnSecondary,onClick:y("left",!1)},"Close"),i.a.createElement(k,null),i.a.createElement("iframe",{src:"https://docsify.js.org/#/configuration",width:"480",height:"480"}),i.a.createElement(k,null)),v=i.a.createElement("div",{className:t.list},i.a.createElement(h.a,{className:t.panelHeader},i.a.createElement(c.a,{className:t.h2}," ",p.featureID," "),i.a.createElement(k,null)),i.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},i.a.createElement(h.a,{className:t.formContainer},i.a.createElement(c.a,{className:t.h3}," Basic Settings "),i.a.createElement(C.a,{id:"featureID",label:"Feature ID",className:t.textField,value:p.featureID,onChange:x("featureID"),margin:"normal",variant:"outlined",disabled:!0}),i.a.createElement(C.a,{id:"category",label:"Category",className:t.textField,value:p.category,onChange:x("category"),margin:"normal",variant:"outlined"}),i.a.createElement(C.a,{id:"name",label:"Name",className:t.textField,value:p.name,onChange:x("name"),margin:"normal",variant:"outlined"}),i.a.createElement(C.a,{id:"type",label:"Type",className:t.textField,value:p.type,onChange:x("type"),margin:"normal",variant:"outlined"}),i.a.createElement(C.a,{id:"path",label:"Path",className:t.textField,value:p.path,onChange:x("path"),margin:"normal",variant:"outlined"})),i.a.createElement(h.a,{className:t.formContainer},i.a.createElement(c.a,{className:t.h3}," Advanced Settings "),i.a.createElement(C.a,{id:"outlined-name",label:"Name",className:t.textField,value:p.name,onChange:x("name"),margin:"normal",variant:"outlined"}),i.a.createElement(C.a,{id:"outlined-name",label:"Name",className:t.textField,value:p.name,onChange:x("name"),margin:"normal",variant:"outlined"})),i.a.createElement(h.a,{hidden:!r.left},i.a.createElement("div",{tabIndex:0,role:"button"},E))),i.a.createElement(h.a,{className:t.panelBottom},i.a.createElement(k,null),i.a.createElement(o.a,{className:t.btnLink,onClick:(a="left",function(){var e;console.log("entered toggleDocDrawer"),l(Object.assign({},r,((e={})[a]=!r.left,e)))})},r.left?"Hide Docs":"View Docs"),i.a.createElement(o.a,{className:t.btnSecondary,onClick:function(){var e,a;console.log("entered closeAll"),l(Object.assign({},r,((e={}).left=!1,e))),l(Object.assign({},r,((a={}).right=!1,a))),console.log("doc = "+r.left),console.log("edit = "+r.right)}},"Cancel"),i.a.createElement(o.a,{className:t.btnPrimary,onClick:y("right",!1)},"Save")));return i.a.createElement("div",{className:t.root},i.a.createElement(T.a,null),i.a.createElement(z.a,null),i.a.createElement("main",{className:t.content},i.a.createElement(c.a,{className:t.h1},"Application Module"),i.a.createElement(s.a,{className:t.table},i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(g.a,null,"Feature ID"),i.a.createElement(g.a,{align:"right"},"Enabled"),i.a.createElement(g.a,{align:"right"},"URL Path"),i.a.createElement(g.a,{align:"right"},"Config"),i.a.createElement(g.a,{align:"right"},"Actions"))),i.a.createElement(m.a,null,D.map(function(e){return i.a.createElement(u.a,{key:e.id},i.a.createElement(g.a,{component:"th",scope:"row"},e.name),i.a.createElement(g.a,{align:"right"},e.calories),i.a.createElement(g.a,{align:"right"},e.fat),i.a.createElement(g.a,{align:"right"},e.carbs),i.a.createElement(g.a,{align:"right"},i.a.createElement(o.a,{className:t.btnLink,onClick:function(){var e,a;l(Object.assign({},r,((e={}).left=!1,e))),l(Object.assign({},r,((a={}).right=!0,a))),console.log("doc = "+r.left),console.log("edit = "+r.right)}},e.protein)))}))),i.a.createElement(w.a,{anchor:"right",open:r.right},i.a.createElement("div",{tabIndex:0,role:"button",className:r.left?t.docOpened:t.docClosed},v))))}j.propTypes={classes:l.a.object.isRequired};a.default=Object(E.a)(function(e){return{root:{width:"100%",overflowX:"auto"},h1:H.c.h1,h2:H.c.h2,h3:H.c.h3,h4:H.c.h4,btnPrimary:S.a.primary,btnSecondary:S.a.secondary,btnLink:S.a.link,table:{minWidth:700},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},content:{flexGrow:1,padding:3*e.spacing.unit,marginTop:"30px",marginLeft:"240px"},toolbar:e.mixins.toolbar,list:{paddingTop:"60px"},docContainer:{width:"480px"},docOpened:{width:"1080px"},docClosed:{width:"720px"},fullList:{width:"auto"},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200},formContainer:{width:300,shadow:"none"},panelHeader:{height:60},panelBottom:{height:60,bottom:0,position:"fixed",width:"100%"}}})(j)},219:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(6),l=t.n(r),o=t(64),c=t.n(o);t.d(a,"a",function(){return c.a});t(223),i.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},220:function(e,a,t){"use strict";var n=t(16),i=t.n(n),r=t(0),l=t.n(r),o=t(755),c=t(756),s=t(242),m=t.n(s),g=t(231);a.a=function(e){return function(a){function t(e){var t;return(t=a.call(this,e)||this).muiPageContext=Object(g.a)(),t}i()(t,a);var n=t.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return l.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},l.a.createElement(o.a,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},l.a.createElement(c.a,null),l.a.createElement(e,this.props)))},t}(l.a.Component)}},221:function(e,a,t){"use strict";t.d(a,"c",function(){return n}),t.d(a,"d",function(){return i}),t.d(a,"e",function(){return r}),t.d(a,"g",function(){return l}),t.d(a,"f",function(){return o}),t.d(a,"a",function(){return c}),t.d(a,"b",function(){return s});const n={fontFamily:"'Source Sans Pro', sans-serif;",fontFamilySeconday:"'Source Sans Pro', sans-serif;"},i={base:16,xs:{size:"12px",lineHeight:"16px"},s:{size:"13px",lineHeight:"18px"},m:{size:"16px",lineHeight:"22px"},l:{size:"22px",lineHeight:"30px"},xl:{size:"34px",lineHeight:"48px"}},r={light:"300",regular:"400",semiBold:"600",bold:"700"},l={lowercase:"lowercase",uppercase:"uppercase",titlecase:"capitalize",default:"none"},o={base:10,xs:"${spacingBaseUnit - 4}px",s:"${spacingBaseUnit}px",m:"${spacingBaseUnit * 2}px",l:"${spacingBaseUnit * 3}px",xl:"${spacingBaseUnit * 4}px",xxl:"${spacingBaseUnit * 6}px"},c={black:"#14141A",grey:{regular:"#6a6a6e",lighter:"#a8a8a8",lightest:"",whiteAlternative:"",g100:"#f8f8fa",g200:"#ebebee",g300:"#d1d1d6",g400:"#c7c7cc",g600:"#a8a8af",g700:"#6a6a6e",g900:"#14141a"},purple:{p100:"#a295ea",p400:"#452bd6",p700:"#3118bd"},red:"#dc1434",white:"#ffffff",blue:"",green:"",pink:{p500:"#f05f77",p600:"#f26a82",p700:"#c2185b",p800:"#ac1457",p850:"#78002e",p900:"#880e4f",p950:"#560027"},blueGrey:{bg50:"#eceff1",bg100:"#cfd8dc",bg200:"#b0bec5",bg300:"#90a4ae",bg400:"#78909c",bg500:"#607d8b",bg600:"#546e7a",bg700:"#455a64",bg800:"#37474f",bg900:"#263238"}},s={s:4,m:8,l:16}},222:function(e,a,t){"use strict";t.d(a,"c",function(){return r}),t.d(a,"b",function(){return l}),t.d(a,"a",function(){return o});var n=t(221),i=t(224);const r={h1:{fontFamily:n.c.fontFamily,fontWeight:n.e.semiBold,fontSize:n.d.xl.size,lineHeight:n.d.xl.lineHeight,color:i.b.primary,textTransform:n.g.titlecase},h2:{fontFamily:n.c.fontFamily,fontWeight:n.e.semiBold,fontSize:n.d.l.size,lineHeight:n.d.l.lineHeight,color:i.b.primary,textTransform:n.g.titlecase},h3:{fontFamily:n.c.fontFamily,fontWeight:n.e.semiBold,fontSize:n.d.m.size,lineHeight:n.d.m.lineHeight,color:i.b.primary,textTransform:n.g.titlecase},h4:{fontFamily:n.c.fontFamily,fontWeight:n.e.semiBold,fontSize:n.d.s.size,lineHeight:n.d.s.lineHeight,color:i.b.primary,textTransform:n.g.titlecase}},l={d1:{fontFamily:n.c.fontFamily,fontWeight:n.e.regular,fontSize:n.d.l.size,lineHeight:n.d.l.lineHeight,color:i.b.secondary,textTransform:n.g.default},d2:{fontFamily:n.c.fontFamily,fontWeight:n.e.regular,fontSize:n.d.l.size,lineHeight:n.d.l.lineHeight,color:i.b.secondary,textTransform:n.g.default},d3:{fontFamily:n.c.fontFamily,fontWeight:n.e.regular,fontSize:n.d.m.size,lineHeight:n.d.m.lineHeight,color:i.b.secondary,textTransform:n.g.default},d4:{fontFamily:n.c.fontFamily,fontWeight:n.e.regular,fontSize:n.d.s.size,lineHeight:n.d.s.lineHeight,color:i.b.primary,textTransform:n.g.default}},o=(n.c.fontFamily,n.e.regular,n.d.l.size,n.d.l.lineHeight,i.b.secondary,n.c.fontFamily,n.e.regular,n.d.l.size,n.d.l.lineHeight,i.b.primary,n.c.fontFamily,n.e.regular,n.d.m.size,n.d.m.lineHeight,i.b.primary,n.c.fontFamily,n.e.regular,n.d.l.size,n.d.l.lineHeight,i.b.secondary,n.c.fontFamily,n.e.regular,n.d.l.size,n.d.l.lineHeight,i.b.secondary,n.c.fontFamily,n.e.regular,n.d.l.size,n.d.l.lineHeight,i.b.primary,{fontFamily:n.c.fontFamily,fontWeight:n.e.semiBold,textTransform:n.g.titlecase,btnTextLight:{fontSize:n.d.m.size,lineHeight:n.d.m.lineHeight,color:i.b.white},btnTextLightSmall:{fontSize:n.d.s.size,lineHeight:n.d.s.lineHeight,color:i.b.white},btnTextDark:{fontSize:n.d.m.size,lineHeight:n.d.m.lineHeight,color:i.b.black},btnTextLink:{fontSize:n.d.m.size,lineHeight:n.d.m.lineHeight,color:i.a.primary}})},223:function(e,a,t){var n;e.exports=(n=t(230))&&n.default||n},224:function(e,a,t){"use strict";t.d(a,"b",function(){return i}),t.d(a,"a",function(){return r});var n=t(221);n.a.purple.p400,n.a.purple.p700,n.a.grey.lighter,n.a.white;const i={primary:n.a.black,secondary:n.a.grey.regular,placeholder:n.a.grey.lighter,white:n.a.white},r={primary:n.a.pink.p800,primaryDark:n.a.pink.p850,secondary:n.a.grey.lighter,white:n.a.white}},228:function(e,a,t){"use strict";t(233);var n=t(0),i=t.n(n),r=t(6),l=t.n(r),o=t(219),c=(t(220),t(758)),s=t(760),m=t(761),g=t(218);function d(e){var a=e.classes;return i.a.createElement("div",{className:a.root},i.a.createElement(c.a,{position:"fixed",className:a.appbar},i.a.createElement(s.a,{variant:"dense",className:a.toolbar},i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/about",className:a.link},"Admin Console")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/general",className:a.link},"General")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/configure",className:a.link},"Configure")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/applications",className:a.link},"Applications")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/data",className:a.link},"Data")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/notifications",className:a.link},"Notifications")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/auth",className:a.link},"Auth")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:a.grow},i.a.createElement(o.a,{to:"/extensibility",className:a.link},"Extensibility")))))}d.propTypes={classes:l.a.object.isRequired},a.a=Object(g.a)({root:{flexGrow:1},grow:{},menuButton:{marginLeft:-12,marginRight:20},link:{color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:"400",marginLeft:"20px",marginRight:"20px",paddingTop:"0",paddingBottom:"0","&:hover":{color:"#aaa"}},appbar:{backgroundColor:"#2D2D2D",height:"50px",zIndex:1500},toolbar:{height:"50px",paddingLeft:"20px"}})(d)},230:function(e,a,t){"use strict";t.r(a);t(66);var n=t(0),i=t.n(n),r=t(6),l=t.n(r),o=t(98),c=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=c},231:function(e,a,t){"use strict";(function(e,n){t.d(a,"a",function(){return s});t(138),t(97),t(68),t(139),t(244);var i=t(237),r=t(730),l=t(92),o=Object(r.a)({typography:{useNextVariants:!0}});function c(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new i.SheetsRegistry,generateClassName:Object(l.a)()}}function s(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=c()),n.__INIT_MATERIAL_UI__):c()}}).call(this,t(243),t(29))},232:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(222),i=t(224);const r={primary:{fontFamily:n.a.btnTextLight.fontFamily,fontWeight:n.a.btnTextLight.fontWeight,fontSize:n.a.btnTextLight.fontSize,lineHeight:n.a.btnTextLight.lineHeight,color:n.a.btnTextLight.color,backgroundColor:i.a.primary,textTransform:"capitalize","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)",backgroundColor:i.a.primaryDark},"&:disabled":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)",backgroundColor:i.a.secondary}},secondary:{fontFamily:n.a.btnTextDark.fontFamily,fontWeight:n.a.btnTextDark.fontWeight,fontSize:n.a.btnTextDark.fontSize,lineHeight:n.a.btnTextDark.lineHeight,color:n.a.btnTextDark.color,backgroundColor:i.a.secondary,textTransform:"capitalize","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)",backgroundColor:i.a.primaryDark}},link:{fontFamily:n.a.btnTextLight.fontFamily,fontWeight:n.a.btnTextLight.fontWeight,fontSize:n.a.btnTextLight.fontSize,lineHeight:n.a.btnTextLight.lineHeight,color:n.a.btnTextLink.color,backgroundColor:i.a.white},dangerous:{fontFamily:n.a.btnTextLight.fontFamily,fontWeight:n.a.btnTextLight.fontWeight,fontSize:n.a.btnTextLight.fontSize,lineHeight:n.a.btnTextLight.lineHeight,color:n.a.btnTextLight.color,backgroundColor:i.a.dangerous}}},280:function(e,a,t){"use strict";t(233);var n=t(0),i=t.n(n),r=t(6),l=t.n(r),o=t(219),c=(t(220),t(761)),s=t(762),m=t(763),g=t(775),d=t(218),u=t(222),h=t(232),f={root:{flexGrow:1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,paddingTop:60,backgroundColor:"#333"},h1:u.c.h1,h2:u.c.h2,h3:u.c.h3,h4:u.c.h4,btnPrimary:h.a.primary,btnSecondary:h.a.secondary,btnLink:h.a.link,navLink:{backgroundColor:"inherit",fontFamily:"Roboto",color:"#fff",textDecoration:"none","&:hover":{backgroundColor:"#777"}},sidenav:{backgroundColor:"inherit","&:hover":{backgroundColor:"#777"}},appHeader:{padding:20,fontSize:12,"& > h2":{fontSize:22,color:"#a8a8a8"}}},p=[{label:"Application Modules",link:"/clienteling/modules"},{label:"Main Menu Items",link:"/clienteling/mainMenuItems"},{label:"App Views",link:"/clienteling/appViews"},{label:"App Variables",link:"/clienteling/appVariables"},{label:"Management Center Configuratrions",link:"/clienteling/managementCenterConfigurations"}];function b(e){var a=e.classes;return i.a.createElement(g.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left"},i.a.createElement("div",{className:a.appHeader},i.a.createElement(c.a,{className:a.h1,variant:"h2"},"Clienteling")),i.a.createElement(s.a,null,p.map(function(e,t){return i.a.createElement(m.a,{key:t,className:a.sidenav},i.a.createElement(o.a,{to:e.link,className:a.navLink},e.label))})))}b.propTypes={classes:l.a.object.isRequired},a.a=Object(d.a)(f)(b)},327:function(e,a,t){e.exports=t.p+"static/configure-634d41861a30cb3b724db3ac32c8b6ed.jpg"}}]);
//# sourceMappingURL=component---src-pages-applications-js-a87146195d5a5f35a203.js.map