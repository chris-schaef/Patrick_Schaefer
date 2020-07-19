if (self.CavalryLogger) { CavalryLogger.start_js(["YIYl\/"]); }

__d("TetraishEntityHeaderStickyBottomRow_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"TetraishEntityHeaderStickyBottomRow_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"profile_picture_for_sticky_bar",args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("CometLayout.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=a.children;a=a.testid;return g.jsx("div",{className:"dp1hu0rb cbu4d94t j83agx80","data-testid":void 0,children:g.jsx("div",{className:"hpfvmrgz dp1hu0rb buofh1pr cbu4d94t j83agx80",children:b})})}}),null);
__d("CometHeaderContentArea.react",["CometRouteRenderType","CometRouterFocusRegion.react","CometSection.react","React","TetraishEntityHeaderScrollToContext","requireCond","stylex","cr:683059"],(function(a,b,c,d,e,f){"use strict";e.exports=c;var g=b("React");function c(c){var d=c.children,e=c.contentTestID;e=c.header;var f=c.rootTestID,h=c.scrollKey,i=b("CometRouteRenderType").useIsPushView(),j=g.useRef(null),k=g.useRef(null),l=g.useCallback(function(c,d){var e=k.current;k.current=h;if(h!=null&&h===e)return;if(j.current==null)return;if(j.current.offsetWidth<940)return;if(c.current!=null&&j.current.contains(c.current)){e=i?-60:0;c=c.current;while(c!=null&&j.current.contains(c))e+=c.offsetTop,c=c.offsetParent;e+=(c=d)!=null?c:0;a.scrollTo(a.pageXOffset,e);b("cr:683059")&&b("cr:683059").setInitialScrollY(e)}},[i,h]);f=g.useMemo(function(){return{scrollToTop:l}},[l]);return g.jsxs(b("CometSection.react"),{className:"l9j0dhe7 dp1hu0rb cbu4d94t j83agx80",ref:j,role:"main",testid:void 0,children:[g.jsx(b("TetraishEntityHeaderScrollToContext").Provider,{value:f,children:e}),g.jsx("div",{className:"d2edcug0 cbu4d94t j83agx80 bp9cbjyn","data-testid":void 0,children:g.jsx(b("CometRouterFocusRegion.react"),{children:d})})]})}}),null);
__d("CometStickyHeader.react",["BaseScrollableAreaContext","CometBase.react","CometViewportMarginsContext","HiddenSubtreePassiveContext","React","intersectionObserverEntryIsIntersecting","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={root:{overflowAnchor:"rek2kq2y",position:"lpgh02oy"},sticky:{zIndex:"tkr6xdv7"}};function a(a,c){var d=a.children,e=a.onStickyActive,f=a.onStickyChange,i=a.onStickyInactive;a.style;var j=a.topOffset;j=j===void 0?0:j;var k=a.xstyle,l=babelHelpers.objectWithoutPropertiesLoose(a,["children","onStickyActive","onStickyChange","onStickyInactive","style","topOffset","xstyle"]),m=g.useState(!1),n=m[0],o=m[1];m=g.useContext(b("BaseScrollableAreaContext"));var p=g.useContext(b("CometViewportMarginsContext")),q=m[m.length-1],r=g.useContext(b("HiddenSubtreePassiveContext")),s=j+(q!=null?0:p.top);m=b("useIntersectionObserver")(g.useCallback(function(a){var c=r.getCurrentState();c=c.hiddenOrBackgrounded;if(c)return;c=!b("intersectionObserverEntryIsIntersecting")(a);c!==n&&(f&&f(c),n?e&&e():i&&i(),o(c))},[r,e,f,i,n]),g.useMemo(function(){return{root:function(){return q!=null?q.getDOMNode():null},rootMargin:{bottom:0,left:0,right:0,top:-s},threshold:0}},[q,s]));return g.jsxs(g.Fragment,{children:[g.jsx(b("CometBase.react"),{ref:m}),g.jsx(b("CometBase.react"),babelHelpers["extends"]({},l,{ref:c,style:babelHelpers["extends"]({},a.style,{top:s}),xstyle:[h.root,n&&h.sticky,k],children:d}))]})}c=g.forwardRef(a);e.exports=c}),null);
__d("CometStickyHeaderContentArea.react",["CometAppNavigationTabBarContainer.react","CometHeaderContentArea.react","CometRouteRenderType","CometStickyHeader.react","CometViewportMarginsAddonContextProvider.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={tabBar:{zIndex:"kavbgo14"}};function a(a){var c=a.headerHeight;c=c===void 0?60:c;var d=a.showTabContainerOnPushView;d=d===void 0?!1:d;a=babelHelpers.objectWithoutPropertiesLoose(a,["headerHeight","showTabContainerOnPushView"]);var e=b("CometRouteRenderType").useIsPushView();c=g.jsx(b("CometHeaderContentArea.react"),babelHelpers["extends"]({},a,{children:g.jsx(b("CometViewportMarginsAddonContextProvider.react"),{addon:c,children:a.children})}));return d&&e?g.jsxs(g.Fragment,{children:[g.jsx(b("CometStickyHeader.react"),{xstyle:h.tabBar,children:g.jsx(b("CometAppNavigationTabBarContainer.react"),{})}),g.jsx(b("CometViewportMarginsAddonContextProvider.react"),{addon:60,children:c})]}):c}}),null);
__d("CometScrollTo.react",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=c;var g=b("React");function c(b){var c=b.children,d=b.enabled,e=b.offset,f=e===void 0?0:e,h=b.scrollKey,i=g.useRef(null),j=g.useRef(null);g.useEffect(function(){var b=j.current;j.current=h;if(h!=null&&h===b)return;if(d&&i.current!=null){var c=i.current.offsetTop,e=a.requestAnimationFrame(function(){return a.scrollTo(a.pageXOffset,c+f)});return function(){a.cancelAnimationFrame(e)}}},[d,h,f]);return g.jsx("div",{ref:i,children:c})}}),null);
__d("CometEntityHeaderStickyBar.react",["BaseRow.react","BaseRowItem.react","CometBase.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={container:{transform:"jav28p83",transitionDuration:"ijkhr0an",transitionProperty:"flx89l3n",transitionTimingFunction:"nna1d5md"},containerSticky:{transform:"i9k17dj3"},fadeInTransition:{transitionDuration:"c0paw9va",transitionProperty:"l23jz15m",transitionTimingFunction:"d4752i1f"},fadeOutTransition:{transitionDuration:"dvqrsczn",transitionProperty:"l23jz15m",transitionTimingFunction:"d4752i1f"},primaryRow:{minHeight:"pxsmfnpt",opacity:"pedkr2u6",visibility:"n1dktuyu"},primaryRowSticky:{opacity:"b5wmifdl",visibility:"kr9hpln1"},root:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7"},stickyRow:{display:"j83agx80",height:"datstx6m",opacity:"b5wmifdl",position:"pmk7jnqg",top:"i42f9fw1",visibility:"kr9hpln1",width:"k4urcfbm"},stickyRowSticky:{opacity:"pedkr2u6",visibility:"n1dktuyu"}};function a(a,c){var d=a.initialSticky;d=d===void 0?!1:d;var e=a.primaryContent,f=a.stickyContent,j=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["initialSticky","primaryContent","stickyContent","xstyle"]);var k=h.useRef(d),l=h.useRef(),m=h.useRef(),n=h.useRef(),o=h.useRef(),p=function(){l.current!=null&&(window.cancelAnimationFrame(l.current),l.current=null)};h.useImperativeHandle(c,function(){return{setSticky:function(a){k.current=a,p(),l.current=window.requestAnimationFrame(function(){l.current=null;var c=m.current;c!=null&&(c.className=(g||(g=b("stylex")))([i.container,a&&i.containerSticky]));c=n.current;c!=null&&(c.className=(g||(g=b("stylex")))([i.primaryRow,a&&i.primaryRowSticky,a?i.fadeInTransition:i.fadeOutTransition]));c=o.current;c!=null&&(c.className=(g||(g=b("stylex")))([i.stickyRow,a&&i.stickyRowSticky,a?i.fadeOutTransition:i.fadeInTransition]))})}}});h.useEffect(function(){return p},[]);return h.jsx(b("CometBase.react"),babelHelpers["extends"]({},a,{xstyle:[i.root,j],children:h.jsxs(b("CometBase.react"),{ref:m,xstyle:[i.container,k.current&&i.containerSticky],children:[h.jsx(b("BaseRow.react"),{ref:n,xstyle:[i.primaryRow,k.current&&i.primaryRowSticky,k.current?i.fadeInTransition:i.fadeOutTransition],children:h.jsx(b("BaseRowItem.react"),{expanding:!0,children:e})}),h.jsx(b("BaseRow.react"),{ref:o,xstyle:[i.stickyRow,k.current&&i.stickyRowSticky,k.current?i.fadeOutTransition:i.fadeInTransition],children:h.jsx(b("BaseRowItem.react"),{verticalAlign:"center",children:f})})]})}))}c=h.forwardRef(a);e.exports=c}),null);
__d("CometTab.react",["CometPressable.react","CometTextWithBadge.react","JSScheduler","React","TetraIcon.react","TetraText.react","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={icon:{lineHeight:"soycq5t1"},iconLeft:{marginEnd:"cgat1ltu"},iconRight:{marginStart:"kkf49tns"},pressable:{appearance:"dwo3fsh8",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",marginBottom:"oygrvhab",marginEnd:"cxmmr5t8",marginStart:"hcukyx3x",marginTop:"kvgmc6g5",paddingBottom:"qt6c0cv9",paddingEnd:"rz4wbd8a",paddingStart:"a8nywdso",paddingTop:"jb3vyjys",textAlign:"i1ao9s8h",backgroundColor:"g5ia77u1",backgroundImage:"mf7ej076",boxSizing:"rq0escxv",color:"gmql0nx0",cursor:"nhd2j8a9",position:"l9j0dhe7",textDecoration:"esuyzwwr",display:"j83agx80",whiteSpace:"g0qnabr5",zIndex:"tkr6xdv7"},selected:{borderTopEndRadius:"akjuzmll",borderTopStartRadius:"bub6lnnc",bottom:"i09qtzwb",end:"n7fi1qx3",height:"pmqtw6m8",position:"pmk7jnqg",start:"j9ispegn"},tab:{alignItems:"bp9cbjyn",display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"frgo5egb",position:"l9j0dhe7"}};function a(a,c){var d=a.FocusItem,e=a.badge,f=a.containerRef,j=a.icon,k=a.iconColor;k=k===void 0?"secondary":k;var l=a.iconLocation;l=l===void 0?"right":l;var m=a.label,n=a.labelIsHidden;n=n===void 0?!1:n;var o=a.onHidden,p=a.reduceEmphasis;p=p===void 0?!1:p;var q=a.selected;q=q===void 0?!1:q;var r=a.underlineColor,s=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["FocusItem","badge","containerRef","icon","iconColor","iconLocation","label","labelIsHidden","onHidden","reduceEmphasis","selected","underlineColor","xstyle"]);var t=h.useState(!0),u=t[0],v=t[1],w=h.useRef(o);w.current=o;t=h.useCallback(function(a){var c=a.intersectionRatio;b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking,function(){var a=c<.5;v(a);w.current&&w.current(a)})},[]);o=b("useIntersectionObserver")(t,{root:f?function(){return f.current}:null,threshold:.5});t=!n&&e!=null?h.jsx(b("CometTextWithBadge.react"),{badgeAfter:typeof e==="number"?h.jsx(b("TetraText.react"),{color:q?"highlight":"secondary",type:"body4",children:e}):e,children:m}):n?null:m;p?t=h.jsx(b("TetraText.react"),{color:q?"highlight":"secondary",type:"body3",children:t}):t=h.jsx(b("TetraText.react"),{color:q?"highlight":"secondary",type:"bodyLink3",children:t});e=j!=null&&l==="left"?h.jsx("div",{className:(g||(g=b("stylex")))(i.icon,i.iconLeft),children:h.jsx(b("TetraIcon.react"),{color:q?"highlight":k,icon:j})}):null;p=j!=null&&l==="right"?h.jsx("div",{className:(g||(g=b("stylex")))(i.icon,i.iconRight),children:h.jsx(b("TetraIcon.react"),{color:q?"highlight":k,icon:j})}):null;l=h.jsxs("div",{className:(g||(g=b("stylex")))(i.tab,s),ref:c,children:[e,t,p,h.jsx("div",{className:g(q?i.selected:null),style:{backgroundColor:q?r:void 0}})]});if(a.onPress!=null||a.linkProps!=null){k=h.jsx(b("CometPressable.react"),babelHelpers["extends"]({ref:o},a,{"aria-hidden":u,"aria-selected":q,disabled:u,display:"inline",focusable:!u,label:n?m:void 0,overlayDisabled:q,role:"tab",xstyle:i.pressable,children:l}));return d&&!u?h.jsx(d,{children:k}):k}return l}c=h.forwardRef(a);e.exports=c}),null);
__d("CometTabs.react",["ix","fbt","BaseContainerQueryElement.react","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometKeys","CometTab.react","FocusGroup.react","HiddenSubtreePassiveContext","React","TabbableScopeQuery.react","fbicon","mergeRefs","requireDeferred","stylex","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=b("requireDeferred")("CometTabMenu.react");c=b("FocusGroup.react").createFocusGroup(b("TabbableScopeQuery.react"));var l=c[0],m=c[1],n={horizontalList:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3"},moreTab:{height:"datstx6m"},moreWrapper:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",whiteSpace:"g0qnabr5"},root:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm",zIndex:"du4w35lb"},tabsContainer:{width:"k4urcfbm"}};function a(a){var c=a.tabs,d=a.maxTabs,e=d===void 0?c.length:d,f=a.moreTabStyles,q=a.moreTabXStyle;d=a.tabsContainerStyle;var r=j.useContext(b("HiddenSubtreePassiveContext")),s=j.useRef(null),t=j.useRef([]),u=j.useRef(null);a=j.useState(null);var v=a[0],w=a[1];a=j.useState(0);var x=a[0],y=a[1];a=j.useState(function(){return Array.from({length:c.length}).map(function(b,a){return a}).filter(function(a){return a>=e})});var z=a[0],A=a[1],B=j.useCallback(function(){return[t.current.map(function(a){return a!=null?a.getBoundingClientRect().width:0}),u.current?u.current.getBoundingClientRect().width:0]},[]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=function(){var a=B(),b=a[0];a=a[1];w(b);y(a)};if(r.getCurrentState().hidden){var b=r.subscribeToChanges(function(c){c.hidden||(a(),b.remove())});return function(){b.remove()}}a()},[B,r]);var C=e<c.length?c.slice(0,e):c,D=[];if(v!=null){a=0;var E=0;for(var F=0;F<v.length;F++){var G;G=(G=v[F])!=null?G:0;a+=G;var H=void 0;F===c.length-1?(H=Math.max(E,a),D.push(j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:H,maxWidth:"100%",minWidth:0},F))):(H=Math.max(E,a+x),D.push(j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:H,maxWidth:G,minWidth:0},F)));E=H}}var I=[],J=0;G=function(a){var d,e=C[a];J+=(d=v&&v[a])!=null?d:0;I.push(j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:J+(a===c.length-1?0:x),inverseToContainer:!0,maxWidth:"100%",minWidth:0},a+"pusher"));I.push(j.createElement(b("CometTab.react"),babelHelpers["extends"]({},e,{FocusItem:m,containerRef:s,key:a+"tab",onHidden:function(b){A(function(c){return b?o(c,a):p(c,a)})},ref:function(b){return t.current[a]=b},role:"tab",selected:e.selected})))};for(var H=0;H<C.length;H++)G(H);F=[{command:{key:b("CometKeys").LEFT},description:h._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").RIGHT},description:h._("Next item"),handler:function(){}}];var K=j.useMemo(function(){return z.some(function(a){return(a=c[a])==null?void 0:a.selected})},[z,c]);E=j.useCallback(function(a,c){a=b("mergeRefs")(a,u);var d=[{command:{key:b("CometKeys").DOWN},description:h._("Open Menu"),handler:c}];return j.jsxs(b("CometComponentWithKeyCommands.react"),{commandConfigs:d,xstyle:[n.horizontalList,n.moreWrapper],children:[D,j.jsx(b("CometTab.react"),babelHelpers["extends"]({},f,{FocusItem:m,"aria-haspopup":"menu",icon:b("fbicon")._(g("481882"),16),label:h._("More"),onPress:c,ref:a,role:"tab",selected:K,testid:void 0,xstyle:[n.moreTab,q]}))]})},[K,f,q,D]);return j.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:F,children:j.jsx(l,{orientation:"horizontal",preventScrollOnFocus:!0,tabScopeQuery:b("TabbableScopeQuery.react"),wrap:!0,children:j.jsxs("div",{className:(i||(i=b("stylex")))(n.root),ref:s,role:"tablist",children:[j.jsx("div",{className:i(n.horizontalList,n.tabsContainer,d),children:I}),j.jsx(b("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:z.map(function(a){return c[a]}).filter(Boolean)},popoverResource:k,children:E})]})})})}function o(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function p(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}}),null);
__d("TetraishEntityHeaderTabs.react",["CometTabs.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={entityHeaderTab:{height:"cb02d2ww",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}};function a(a){var c=a.maxTabs;a=a.tabs;return g.jsx(b("CometTabs.react"),{maxTabs:c,moreTabStyles:{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)"},moreTabXStyle:h.entityHeaderTab,tabs:a.map(function(a){return babelHelpers["extends"]({},a,{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)",xstyle:h.entityHeaderTab})})})}}),null);
__d("CometEntityHeaderTabBar.react",["React","TetraishEntityHeaderTabs.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.maxTabs;a=a.tabs;var d=a.findIndex(function(a){return a.isActive()});a=a.map(function(a,b){a.isActive;var c=a.linkProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["isActive","linkProps"]);return c?babelHelpers["extends"]({},a,{linkProps:babelHelpers["extends"]({},c,{routeTarget:"self"}),selected:b===d}):babelHelpers["extends"]({},a,{selected:b===d})});return g.jsx(b("TetraishEntityHeaderTabs.react"),{maxTabs:c,tabs:a})}}),null);
__d("TetraishEntityHeaderCoverPhotoRow.react",["BaseRow.react","BaseRowItem.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={background:{backgroundColor:"cddn0xzi"},coverPhoto:{display:"j83agx80",flexDirection:"cbu4d94t"}};function a(a){var c=a.coverPhoto,d=a.minHeight;a=a.showBackground;a=a===void 0?!0:a;return g.jsx(b("BaseRow.react"),{align:"center",xstyle:a&&h.background,children:g.jsx(b("BaseRowItem.react"),{expanding:!0,style:d!=null?{minHeight:d}:void 0,xstyle:h.coverPhoto,children:c})})}}),null);
__d("TetraishEntityHeaderDivider.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){return g.jsx("div",{className:"l6v480f0"})}}),null);
__d("TetraishEntityHeaderResponsiveRow.react",["BaseRow.react","BaseRowItem.react","CometFeedWidthStyles","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={container:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}},i=b("CometFeedWidthStyles").getEntityHeaderWidthStyles();function a(a,c){var d=a.children;a=a.xstyle;return g.jsx(b("BaseRow.react"),{align:"center",ref:c,xstyle:a,children:g.jsx(b("BaseRowItem.react"),{expanding:!0,xstyle:[h.container,i.container],children:d})})}c=g.forwardRef(a);e.exports=c}),null);
__d("TetraishEntityStickyHeader.react",["BaseRow.react","BaseRowItem.react","CometEntityHeaderStickyBar.react","CometStickyHeader.react","React","TetraishEntityHeaderResponsiveRow.react","TetraListCell.react","stylex","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={pointerEvents:"none",visibility:"hidden",zIndex:"-1"},i={headerHiddenByDefault:{display:"j83agx80",flexDirection:"cbu4d94t",height:"do00u71z",justifyContent:"bkfpd7mw"},row:{backgroundColor:"cddn0xzi",boxShadow:"dsne8k7f"}};function a(a){var c=a.headline,d=a.headlineLinkProps,e=a.headlineOnPress,f=a.hiddenByDefault,k=f===void 0?!1:f;f=a.primaryContent;var l=a.profilePhoto,m=a.profilePhotoShape,n=a.secondaryContent,o=a.url;a=babelHelpers.objectWithoutPropertiesLoose(a,["headline","headlineLinkProps","headlineOnPress","hiddenByDefault","primaryContent","profilePhoto","profilePhotoShape","secondaryContent","url"]);var p=g.useState(!1),q=p[0],r=p[1],s=g.useRef(),t=g.useRef();p=g.useState(0);var u=p[0],v=p[1];p=b("useResizeObserver")(function(a){u!==a.height&&v(a.height)});var w=function(a){r(a);t.current!=null&&t.current.setSticky(a);var b=s.current;b!=null&&(k&&Object.keys(h).forEach(function(c){b.style.setProperty(c,a?"":h[c])}))},x=g.useMemo(function(){return babelHelpers["extends"]({preventLocalNavigation:!0,url:o},d)},[d,o]);e=(e=e)!=null?e:j;return g.jsx(b("CometStickyHeader.react"),babelHelpers["extends"]({},a,{onStickyChange:w,ref:s,style:k&&!q?h:void 0,topOffset:k?u:0,xstyle:k&&i.headerHiddenByDefault,children:g.jsx(b("TetraishEntityHeaderResponsiveRow.react"),{ref:p,xstyle:i.row,children:g.jsxs(b("BaseRow.react"),{verticalAlign:"center",children:[g.jsx(b("BaseRowItem.react"),{expanding:!0,children:g.jsx(b("CometEntityHeaderStickyBar.react"),{primaryContent:f,ref:t,stickyContent:g.jsx(b("BaseRow.react"),{align:"start",children:g.jsx(b("BaseRowItem.react"),{children:g.jsx(b("TetraListCell.react"),{addOnPrimary:l!=null?{shape:m,size:40,source:{uri:l},type:"profile-photo"}:void 0,headline:c,headlineLineLimit:1,level:3,linkProps:x,onPress:e})})})})}),n!=null&&g.jsx(b("BaseRowItem.react"),{verticalAlign:"center",children:typeof n==="function"?n({sticky:q}):n})]})})}))}function j(a){a.preventDefault(),scrollTo({behavior:"smooth",left:0,top:0})}}),null);
__d("TetraishEntityHeaderStickyBottomRow.react",["CometRelay","CometStickyHeader.react","React","TetraishEntityStickyHeader.react","TetraListCell.react","recoverableViolation","TetraishEntityHeaderStickyBottomRow_entity.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c,d=a.entity,e=a.headline;a=babelHelpers.objectWithoutPropertiesLoose(a,["entity","headline"]);d=b("CometRelay").useFragment(g!==void 0?g:g=b("TetraishEntityHeaderStickyBottomRow_entity.graphql"),d);c=(c=d.profile_picture_for_sticky_bar)==null?void 0:c.uri;var f=i(d),j=d.url;e=(e=e)!=null?e:d.name;return e==null?b("recoverableViolation")("Name of the entity cannot be null","comet_ui"):h.jsx(b("TetraishEntityStickyHeader.react"),babelHelpers["extends"]({},a,{headline:e,profilePhoto:c,profilePhotoShape:f,url:j}))}function i(a){switch(a.__typename){case"Page":case"User":case"Hashtag":return"circle";default:return"roundedRect"}}}),null);
__d("useCometPassiveScrollPosition",["BaseScrollableAreaContext","HiddenSubtreePassiveContext","React","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useContext(b("HiddenSubtreePassiveContext")),c=g.useContext(b("BaseScrollableAreaContext")),d=g.useRef(null),e=c[c.length-1];b("useLayoutEffect_SAFE_FOR_SSR")(function(){var b,c=(b=e==null?void 0:e.getDOMNode())!=null?b:window;if(c==null)return;var f=function(){if(a.getCurrentState().hiddenOrBackgrounded)return;d.current=c instanceof HTMLElement?{left:c.scrollLeft,top:c.scrollTop}:{left:c.scrollX,top:c.scrollY}},g=a.subscribeToChanges(function(a){a.hiddenOrBackgrounded||f()});c.addEventListener("scroll",f,{passive:!0});f();return function(){c.removeEventListener("scroll",f,{passive:!0}),g.remove()}},[e,a]);return d}}),null);
__d("CometResponsiveColumns.react",["BaseRow.react","BaseRowItem.react","CometFeedWidthStyles","React","stylex"],(function(a,b,c,d,e,f){"use strict";f.Container=a;f.Column=c;var g,h=b("React"),i={container:{boxSizing:"rq0escxv",maxWidth:"d2edcug0",width:"k4urcfbm"},containerPadding:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},content:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"lhclo0ds",justifyContent:"taijpn5t"},negativeMargin:{marginTop:"sv5sfqaa",marginEnd:"o22cckgh",marginBottom:"obtkqiv7",marginStart:"fop5sh7t"},reverse:{flexWrap:"kbz25j0m"}},j=b("CometFeedWidthStyles").getResponsiveColumnWidthStyles();function a(a){var c=a.children,d=a.containerWidth,e=a.reverseColumns;e=e===void 0?!1:e;var f=a.testid;f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","containerWidth","reverseColumns","testid","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(i.container,d==="DEFAULT"&&j.container,d==="DEFAULT"&&i.containerPadding,f),"data-testid":void 0,children:h.jsx(b("BaseRow.react"),{xstyle:[i.content,e&&i.reverse,i.negativeMargin],children:c})}))}var k={base:{marginTop:"aov4n071",marginEnd:"oi9244e8",marginBottom:"bi6gxh9e",marginStart:"h676nmdw",":empty":{display:"aghb5jc5"}}};function c(a){var c=a.children,d=a.columnType,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","columnType","xstyle"]);return h.jsx(b("BaseRowItem.react"),babelHelpers["extends"]({},a,{expanding:!0,useDeprecatedStyles:!0,xstyle:[k.base,d==="FEED"&&j.FEED,d==="FULL"&&j.FULL,d==="SECONDARY"&&j.SECONDARY,e],children:c}))}}),null);
__d("CometDirectionalDockingView.react",["CometViewportMarginsContext","React","stylex","useCometPassiveScrollPosition","useMergeRefs","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={outerContainer:{position:"l9j0dhe7"},"static":{position:"hwddc3l5"}},j=(g||(g=b("stylex"))).compose;function a(a){var c=a.top,d=a.bottom,e=d===void 0?c:d;d=a.children;var f=a.mode,k=f===void 0?"directional":f;f=a.tagName;f=f===void 0?"div":f;a=a.xstyle;var l=h.useContext(b("CometViewportMarginsContext")),m=b("useCometPassiveScrollPosition")(),n=h.useRef({innerHeight:null,innerWidth:null,outerHeight:null,outerOffsetLeft:null,outerOffsetTop:null,outerWidth:null,parentHeight:null,parentOffsetTop:null,windowHeight:null}),o=h.useRef(null),p=h.useRef(null),q=h.useCallback(function(a){var b=a.height;a=a.width;n.current.innerHeight=b;n.current.innerWidth=a},[]);q=b("useResizeObserver")(q);var r=h.useCallback(function(a,b){var c=a.height;a=a.width;b=b.getBoundingClientRect();n.current.outerHeight=c;n.current.outerWidth=a;n.current.outerOffsetLeft=b.left;n.current.outerOffsetTop=b.top+((a=(c=m.current)==null?void 0:c.top)!=null?a:window.scrollY)},[m]),s=b("useResizeObserver")(r);r=h.useCallback(function(a,b){a=a.height;n.current.parentHeight=a;n.current.parentOffsetTop=b.getBoundingClientRect().top+((b=(a=m.current)==null?void 0:a.top)!=null?b:window.scrollY)},[m]);var t=b("useResizeObserver")(r);r=h.useCallback(function(a){o.current=a;s(a);t((a=a==null?void 0:a.parentElement)!=null?a:null)},[s,t]);q=b("useMergeRefs")(q,p);h.useEffect(function(){var a=o.current,b=a==null?void 0:a.parentElement;if(a==null||b==null)return;var c=function(){var c,d=a.getBoundingClientRect(),e=b.getBoundingClientRect();n.current.outerOffsetTop=d.top+((c=(c=m.current)==null?void 0:c.top)!=null?c:window.scrollY);n.current.parentOffsetTop=e.top+((e=(c=m.current)==null?void 0:c.top)!=null?e:window.scrollY);n.current.outerOffsetLeft=d.left;n.current.windowHeight=window.innerHeight};window.addEventListener("resize",c);return function(){window.removeEventListener("resize",c)}},[m]);h.useEffect(function(){var a=o.current,b=p.current,d=a==null?void 0:a.parentElement,f=c+l.top,g=e+l.bottom;if(a==null||b==null||d==null)return;var h=b.getBoundingClientRect();a.style.height=h.height+"px";b.style.width=h.width+"px";b.style.position="absolute";b.style.top="0";b.style.left="0";var i=a.getBoundingClientRect();d=d.getBoundingClientRect();var j={innerHeight:h.height,innerWidth:h.width,outerHeight:i.height,outerOffsetLeft:i.left,outerOffsetTop:i.top+((h=(h=m.current)==null?void 0:h.top)!=null?h:window.scrollY),outerWidth:i.width,parentHeight:d.height,parentOffsetTop:d.top+((i=(h=m.current)==null?void 0:h.top)!=null?i:window.scrollY),windowHeight:window.innerHeight};n.current=j;var q=function(a){var b;return(b=n.current[a])!=null?b:j[a]},r,s={left:0,position:"absolute",top:0},t=function(a){(a.position!==s.position||a.left!==s.left||a.top!==s.top)&&(s=a,b.style.left=s.left+"px",b.style.position=s.position,b.style.top=s.top+"px")},u=(h=(d=m.current)==null?void 0:d.top)!=null?h:window.scrollY,v=0;i=function c(){var d,h={innerHeight:q("innerHeight"),innerWidth:q("innerWidth"),outerHeight:q("outerHeight"),outerOffsetLeft:q("outerOffsetLeft"),outerOffsetTop:q("outerOffsetTop"),outerWidth:q("outerWidth"),parentHeight:q("parentHeight"),parentOffsetTop:q("parentOffsetTop"),windowHeight:q("windowHeight")},i={maxAbsoluteTop:q("parentHeight")-q("innerHeight"),maxFixedTop:f,minAbsoluteTop:q("outerOffsetTop")-q("parentOffsetTop"),minFixedTop:h.windowHeight-q("innerHeight")-g};h.outerWidth!==h.innerWidth&&(b.style.width=h.outerWidth+"px",h.innerWidth=h.outerWidth);h.outerHeight!==h.innerHeight&&(a.style.height=h.innerHeight+"px",h.outerHeight=h.innerHeight);d=(d=m.current)==null?void 0:d.top;if(d!=null&&d!==u&&h.innerHeight){var j=h.outerOffsetTop;if(k==="sticky"||h.innerHeight<h.windowHeight)d>j-f?d>j-f+i.maxAbsoluteTop?t({left:0,position:"absolute",top:i.maxAbsoluteTop}):t({left:h.outerOffsetLeft,position:"fixed",top:f}):t({left:0,position:"absolute",top:0});else{j=s.position==="absolute"?h.outerOffsetTop+s.top-d:s.top;var l=j+h.innerHeight;d<h.parentOffsetTop+f&&(v=i.minAbsoluteTop);d>u?l<=h.windowHeight-g&&d>h.outerOffsetTop+h.innerHeight-h.windowHeight-g&&d<h.parentOffsetTop+h.parentHeight-h.windowHeight-e?(t({left:h.outerOffsetLeft,position:"fixed",top:i.minFixedTop}),v=d-h.outerOffsetTop+j):t({left:0,position:"absolute",top:Math.max(v,0)}):j>=f&&d>=h.outerOffsetTop-f?(t({left:h.outerOffsetLeft,position:"fixed",top:i.maxFixedTop}),v=d-h.outerOffsetTop+j):t({left:0,position:"absolute",top:Math.max(v,0)})}u=d}else s.position==="fixed"&&s.left!==h.outerOffsetLeft&&(s.left=h.outerOffsetLeft,b.style.left=h.outerOffsetLeft+"px");r=window.requestAnimationFrame(c)};r=window.requestAnimationFrame(i);return function(){window.cancelAnimationFrame(r)}},[e,k,m,c,l.bottom,l.top]);var u=j(a).position;u=u===i["static"].position||u===void 0;return h.jsx(f,{className:(g||(g=b("stylex")))(a,u&&i.outerContainer),ref:r,children:h.jsx("div",{ref:q,children:d})})}}),null);
__d("TetraishEntityHeader.react",["React","TetraishEntityHeaderDivider.react","TetraishEntityHeaderResponsiveRow.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={background:{backgroundColor:"cddn0xzi"},rootWithDropShadow:{boxShadow:"dsne8k7f"},topRow:{paddingBottom:"ihqw7lf3"}};function a(a){var c=a.bottomRow,d=a.coverPhotoRow,e=a.notice;e=e===void 0?h.jsx(b("TetraishEntityHeaderDivider.react"),{}):e;var f=a.showBackground;f=f===void 0?!1:f;var j=a.showDropShadow;j=j===void 0?!1:j;var k=a.testid;k=a.topRow;return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:(g||(g=b("stylex")))(j&&i.rootWithDropShadow),"data-testid":void 0,children:[d,h.jsx(b("TetraishEntityHeaderResponsiveRow.react"),{xstyle:[i.topRow,f&&i.background],children:k}),e!=null&&h.jsx(b("TetraishEntityHeaderResponsiveRow.react"),{xstyle:f&&i.background,children:e})]}),c]})}}),null);
__d("TetraishEntityPageHeader.react",["React","TetraishEntityHeader.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsx(b("TetraishEntityHeader.react"),babelHelpers["extends"]({},a,{showBackground:!0}))}}),null);
__d("CometFeedSection.react",["React","TetraUnitHeader.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.meta,d=a.sectionContents;a=a.title;return g.jsxs("div",{"data-testid":void 0,role:"feed",children:[g.jsx("div",{className:"f10w8fjw ocgrx2df tmqn73lw",children:g.jsx(b("TetraUnitHeader.react"),{headline:a,headlineColor:"secondary",level:4,meta:c})}),d]})}}),null);
__d("CometUserVerificationBadge.react",["CometLazyPopoverTrigger.react","CometPageVerificationIcon.react","JSResource","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("JSResource")("CometVerificationBadgeInfoPopover.react").__setRef("CometUserVerificationBadge.react");function a(a){a=a.size;var c=a===void 0?"large":a;return g.jsx(b("CometLazyPopoverTrigger.react"),{popoverProps:{verificationBadge:"USER_VERIFIED"},popoverResource:h,position:"above",children:function(a,d){return g.jsx("span",{onMouseEnter:d,ref:a,children:g.jsx(b("CometPageVerificationIcon.react"),{size:c,verificationBadge:"BLUE_VERIFIED"})})}})}}),null);
__d("ProfileCometUtils",[],(function(a,b,c,d,e,f){"use strict";f.isViewingSelfProfile=a;function a(a,b){return a!=null&&b!=null&&a===b}}),null);