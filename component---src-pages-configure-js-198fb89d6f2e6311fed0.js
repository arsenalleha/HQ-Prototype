(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=(a(161),a(165),a(160)),c=a(180),s=a(249),g=a.n(s);a(167),a(185);function u(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(c.a,null),i.a.createElement("img",{src:g.a,alt:"Configure Screenshot"}))}u.propTypes={classes:o.a.object.isRequired},t.default=Object(l.withStyles)(function(e){return{root:{}}})(u)},161:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return m});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(150),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(164),g=a.n(s);a.d(t,"PageRenderer",function(){return g.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var h=i.a.createContext({}),m=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},162:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return r}),a.d(t,"d",function(){return o}),a.d(t,"a",function(){return l});var n=a(163);Object(n.a)();const i={fontFamily:"'Source Sans Pro', sans-serif;",fontFamilySeconday:"'Source Sans Pro', sans-serif;"},r={xs:{size:"12px",lineHeight:"16px"},s:{size:"13px",lineHeight:"18px"},m:{size:"16px",lineHeight:"22px"},l:{size:"22px",lineHeight:"30px"},xl:{size:"34px",lineHeight:"48px"}},o={light:"300",regular:"400",semiBold:"600",bold:"700"},l={black:"#14141A",grey:{regular:"#6a6a6e",lighter:"#a8a8a8",lightest:"",whiteAlternative:""},purple:{p400:"#452bd6",p700:"#3118BD"},red:"#dc1434",white:"#ffffff",blue:"",green:"",pink:{p700:"#c2185b",p800:"#ac1457",p850:"#78002e",p900:"#880e4f",p950:"##560027"},blueGrey:{bg50:"#eceff1",bg100:"#cfd8dc",bg200:"#b0bec5",bg300:"#90a4ae",bg400:"#78909c",bg500:"#607d8b",bg600:"#546e7a",bg700:"#455a64",bg800:"#37474f",bg900:"#263238"}}},164:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},165:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(160),c=a(202),s=a.n(c),g=a(195),u=a.n(g),h=a(179);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(h.a)(),a}i()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(u.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(l.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(s.a,null),o.a.createElement(e,this.props)))},a}(o.a.Component)}},166:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return r});var n=a(162);n.a.purple.p400,n.a.purple.p700,n.a.grey.lighter,n.a.white;const i={primary:n.a.black,secondary:n.a.grey.regular,placeholder:n.a.grey.lighter,white:n.a.white},r={primary:n.a.pink.p800,primaryDark:n.a.pink.p850,secondary:n.a.grey.lighter,white:n.a.white}},167:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o});var n=a(162),i=a(166);const r={h1:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.xl.size,lineHeight:n.c.xl.lineHeight,color:i.b.primary},h2:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.l.size,lineHeight:n.c.l.lineHeight,color:i.b.primary},h3:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.m.size,lineHeight:n.c.m.lineHeight,color:i.b.primary},h4:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.s.size,lineHeight:n.c.s.lineHeight,color:i.b.primary}},o=(n.b.fontFamily,n.d.regular,n.c.l.size,n.c.l.lineHeight,i.b.secondary,n.b.fontFamily,n.d.regular,n.c.l.size,n.c.l.lineHeight,i.b.primary,n.b.fontFamily,n.d.regular,n.c.m.size,n.c.m.lineHeight,i.b.primary,n.b.fontFamily,n.d.regular,n.c.s.size,n.c.s.lineHeight,i.b.primary,n.b.fontFamily,n.d.regular,n.c.l.size,n.c.l.lineHeight,i.b.secondary,n.b.fontFamily,n.d.regular,n.c.l.size,n.c.l.lineHeight,i.b.primary,n.b.fontFamily,n.d.regular,n.c.m.size,n.c.m.lineHeight,i.b.primary,n.b.fontFamily,n.d.regular,n.c.l.size,n.c.l.lineHeight,i.b.secondary,n.b.fontFamily,n.d.regular,n.c.l.size,n.c.l.lineHeight,i.b.secondary,n.b.fontFamily,n.d.regular,n.c.l.size,n.c.l.lineHeight,i.b.primary,{btnTextLight:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.m.size,lineHeight:n.c.m.lineHeight,color:i.b.white},btnTextLightSmall:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.s.size,lineHeight:n.c.s.lineHeight,color:i.b.white},btnTextDark:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.m.size,lineHeight:n.c.m.lineHeight,color:i.b.black},btnTextLink:{fontFamily:n.b.fontFamily,fontWeight:n.d.semiBold,fontSize:n.c.m.size,lineHeight:n.c.m.lineHeight,color:i.a.primary}})},178:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},179:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return h});a(73),a(53),a(74),a(198);var i=a(170),r=a(160),o=a(200),l=a.n(o),c=a(201),s=a.n(c),g=Object(r.createMuiTheme)({palette:{primary:{light:l.a[300],main:l.a[500],dark:l.a[700]},secondary:{light:s.a[300],main:s.a[500],dark:s.a[700]}},typography:{useNextVariants:!0}});function u(){return{theme:g,sheetsManager:new Map,sheetsRegistry:new i.SheetsRegistry,generateClassName:Object(r.createGenerateClassName)()}}function h(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=u()),n.__INIT_MATERIAL_UI__):u()}}).call(this,a(197),a(72))},180:function(e,t,a){"use strict";a(188);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(161),c=(a(165),a(203)),s=a.n(c),g=a(204),u=a.n(g),h=a(174),m=a.n(h),f=a(160);function d(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(s.a,{position:"static",className:t.appbar},i.a.createElement(u.a,{variant:"dense",className:t.toolbar},i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/about",className:t.link},"Admin Console")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/general",className:t.link},"General")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/configure",className:t.link},"Configure")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/applications",className:t.link},"Applications")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/data",className:t.link},"Data")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/notifications",className:t.link},"Notifications")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/auth",className:t.link},"Auth")),i.a.createElement(m.a,{variant:"h6",color:"inherit",className:t.grow},i.a.createElement(l.Link,{to:"/extensibility",className:t.link},"Extensibility")))))}d.propTypes={classes:o.a.object.isRequired},t.a=Object(f.withStyles)({root:{flexGrow:1},grow:{},menuButton:{marginLeft:-12,marginRight:20},link:{color:"#fff",textDecoration:"none",fontSize:"13px",fontWeight:"400",marginLeft:"20px",marginRight:"20px",paddingTop:"0",paddingBottom:"0","&:hover":{color:"#aaa"}},appbar:{backgroundColor:"#2D2D2D",height:"50px"},toolbar:{height:"50px",paddingLeft:"20px"}})(d)},185:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(167),i=a(166);const r={primary:{fontFamily:n.a.btnTextLight.fontFamily,fontWeight:n.a.btnTextLight.fontWeight,fontSize:n.a.btnTextLight.fontSize,lineHeight:n.a.btnTextLight.lineHeight,color:n.a.btnTextLight.color,backgroundColor:i.a.primary,textTransform:"capitalize","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)",backgroundColor:i.a.primaryDark},"&:disabled":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)",backgroundColor:i.a.secondary}},secondary:{fontFamily:n.a.btnTextDark.fontFamily,fontWeight:n.a.btnTextDark.fontWeight,fontSize:n.a.btnTextDark.fontSize,lineHeight:n.a.btnTextDark.lineHeight,color:n.a.btnTextDark.color,backgroundColor:i.a.secondary,textTransform:"capitalize","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)",backgroundColor:i.a.primaryDark}},link:{fontFamily:n.a.btnTextLight.fontFamily,fontWeight:n.a.btnTextLight.fontWeight,fontSize:n.a.btnTextLight.fontSize,lineHeight:n.a.btnTextLight.lineHeight,color:i.b.white,backgroundColor:i.a.white},dangerous:{fontFamily:n.a.btnTextLight.fontFamily,fontWeight:n.a.btnTextLight.fontWeight,fontSize:n.a.btnTextLight.fontSize,lineHeight:n.a.btnTextLight.lineHeight,color:n.a.btnTextLight.color,backgroundColor:i.a.dangerous}}},249:function(e,t,a){e.exports=a.p+"static/configure-634d41861a30cb3b724db3ac32c8b6ed.jpg"}}]);
//# sourceMappingURL=component---src-pages-configure-js-198fb89d6f2e6311fed0.js.map