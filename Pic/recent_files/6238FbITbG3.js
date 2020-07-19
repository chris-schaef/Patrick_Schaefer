if (self.CavalryLogger) { CavalryLogger.start_js(["qBW0C"]); }

__d("GroupsCometRelatedGroupsChainingUnitQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"groupID"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"id",variableName:"groupID"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},i={kind:"InlineFragment",selections:[c],type:"Node",abstractKey:"__isNode"},j={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},l=[h],m=[k];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"GroupsCometRelatedGroupsChainingUnitQuery",selections:[{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsConnection",kind:"LinkedField",name:"related_groups",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"node",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"GroupsCometGYSJFeedItemRelay_group"}],storageKey:null},{alias:null,args:null,concreteType:"GYSJSocialContext",kind:"LinkedField",name:"recommendation_context",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometGYSJFeedItemRelay_socialContext"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"GroupsCometRelatedGroupsChainingUnitQuery",selections:[{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsConnection",kind:"LinkedField",name:"related_groups",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRelatedGroupsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"join_action",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{documentName:"GroupsCometJoinGroupButtonRelay_group",fragmentName:"GroupsCometJoinGroupAction_action",fragmentPropName:"action",kind:"ModuleImport"}],type:"GroupJoinGroupAction",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"GroupsCometJoinGroupButtonRelay_group",fragmentName:"GroupsCometJoinForumButton_action",fragmentPropName:"action",kind:"ModuleImport"}],type:"GroupJoinForumAction",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"visibility",storageKey:null},e,{alias:null,args:null,concreteType:"GroupPrivacyInfo",kind:"LinkedField",name:"privacy_info",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[f,g,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},i],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[f,g,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[f,g,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[d,{kind:"InlineFragment",selections:[c,e],type:"User",abstractKey:null},i],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[d,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[c,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[j,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[j,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},i],storageKey:null},f,g],storageKey:null},{alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[f,g,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},k],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:350}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:l,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"location",value:"GYSJ"}],concreteType:"GroupSnippetsConnection",kind:"LinkedField",name:"group_snippets",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupSnippetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GroupSnippet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:m,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'group_snippets(first:1,location:"GYSJ")'}],storageKey:null},{alias:null,args:null,concreteType:"GYSJSocialContext",kind:"LinkedField",name:"recommendation_context",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_source",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"description",plural:!1,selections:m,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_sources",plural:!0,selections:l,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},c],storageKey:null}]},params:{id:"2879893038805126",metadata:{},name:"GroupsCometRelatedGroupsChainingUnitQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("GroupsCometCoverPhotoFooter_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometCoverPhotoFooter_group",selections:[{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_theme_color",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hexcolor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GroupAttributionContext",kind:"LinkedField",name:"attribution_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"background_color",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GroupLinkedPagesConnection",kind:"LinkedField",name:"linked_pages",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometCoverPhotoLinkedPagesDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2865368050178626",metadata:{relayPreloadable:!0},name:"GroupsCometCoverPhotoLinkedPagesDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CrisisCometLogging",["React","requireDeferred","useSinglePartialViewImpression"],(function(a,b,c,d,e,f){"use strict";f.useCrisisLogging=m;f.withCrisisLoggingProvider=a;var g=b("React"),h=(c=b("requireDeferred"))("CrisisClickUnitFalcoEvent"),i=c("CrisisToolViewPageFalcoEvent"),j=c("CrisisViewModuleFalcoEvent"),k=c("CrisisViewUnitFalcoEvent"),l=g.createContext();function m(){var a=g.useContext(l),c=function(b){h.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},d=g.useCallback(function(b){i.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},[a]),e=function(c){c===void 0&&(c={});var d=m(),a=d.logViewedUnit;d=g.useCallback(function(){return a(c)},[a,c]);return b("useSinglePartialViewImpression")({onImpressionStart:d})},f=function(c){c===void 0&&(c={});var d=m(),a=d.logViewedModule;d=g.useCallback(function(){return a(c)},[a,c]);return b("useSinglePartialViewImpression")({onImpressionStart:d})},n=g.useCallback(function(b){k.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},[a]),o=g.useCallback(function(b){j.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},[a]);return{logClick:c,logViewedModule:o,logViewedPage:d,logViewedUnit:n,loggingContextData:a,useCrisisViewedModuleLogging:f,useCrisisViewedUnitLogging:e}}function a(a,b){return function(c){var d=g.useContext(l),e=b&&b(c),f=g.useMemo(function(){return babelHelpers["extends"]({},d,e)},[d,e]);return g.jsx(l.Provider,{value:f,children:g.jsx(a,babelHelpers["extends"]({},c))})}}}),null);
__d("CoronavirusCometBaseCard.react",["CometCard.react","CometColumnItem.react","CrisisCometLogging","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.loggingUnit,e=a.loggingUnitData;a=a.testid;a=b("CrisisCometLogging").useCrisisLogging();a=a.useCrisisViewedModuleLogging;a=a(babelHelpers["extends"]({},e,{unit_type:d}));return g.jsx(b("CometColumnItem.react"),{ref:a,testid:void 0,children:g.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:c})})}}),null);
__d("CoronavirusCometBaseTextWithEntriesRenderers",["CometBoldedEntityRenderer","CometMetaLinkedEntityRenderer","CometShortenedExternalUrlEntityRenderer"],(function(a,b,c,d,e,f){"use strict";a={"*":[b("CometBoldedEntityRenderer")],ExternalUrl:[b("CometShortenedExternalUrlEntityRenderer"),b("CometBoldedEntityRenderer"),b("CometMetaLinkedEntityRenderer")]};e.exports=a}),null);
__d("GroupsCometRelatedGroupsChainingUnit.react",["fbt","CometErrorProjectContext","CometHScrollChild.react","CometRelay","GroupsCometGYSJFeedItemRelay.react","GroupsCometGYSJHScroll.react","React","WebPixelRatio","XCometGroupsTabDiscoverControllerRouteBuilder","stylex","GroupsCometRelatedGroupsChainingUnitQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=b("XCometGroupsTabDiscoverControllerRouteBuilder").buildURL({});function a(a){a=a.groupID;a=b("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("GroupsCometRelatedGroupsChainingUnitQuery.graphql"),{groupID:a,scale:b("WebPixelRatio").get()});a=a==null?void 0:(a=a.group)==null?void 0:(a=a.related_groups)==null?void 0:a.edges;if(a==null||a.length===0)return null;var c=g._("Related Groups"),d=g._("Discover More Groups");a=a.map(function(a,c){var d=a==null?void 0:a.node;if(!d)return;return i.jsx(b("CometHScrollChild.react"),{width:300,children:i.jsx(b("GroupsCometGYSJFeedItemRelay.react"),{group$key:d,index:c,isDismissable:!0,localCacheID:"TODO",socialContext$key:a.recommendation_context})},(a=d.id)!=null?a:c)}).filter(Boolean);return i.jsx(b("CometErrorProjectContext").Provider,{value:"groups_comet",children:i.jsx("div",{className:"sjgh65i0",children:i.jsx(b("GroupsCometGYSJHScroll.react"),{seeAllLabel:d,seeAllUri:j,shouldHideActionMenu:!0,title:c,children:a})})})}}),null);
__d("GroupsCometCoverPhotoLinkedPagesDialog.entrypoint",["GroupsCometCoverPhotoLinkedPagesDialogQuery$Parameters","JSResource","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.actorID;a=a.groupID;return{queries:{GroupsCometCoverPhotoLinkedPagesDialogQueryReference:{environmentProviderOptions:{actorID:c},parameters:b("GroupsCometCoverPhotoLinkedPagesDialogQuery$Parameters"),variables:{groupID:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("GroupsCometCoverPhotoLinkedPagesDialog.react").__setRef("GroupsCometCoverPhotoLinkedPagesDialog.entrypoint")};e.exports=a}),null);
__d("GroupsCometCoverPhotoFooter.react",["fbt","Actor","ColorUtils","CometLink.react","CometRelay","CometTooltip.react","GroupsCometCoverPhotoLinkedPagesDialog.entrypoint","React","TetraishEntityHeaderCoverMediaFooter.react","TetraText.react","recoverableViolation","stylex","useCometEntryPointDialog","GroupsCometCoverPhotoFooter_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j="white";function a(a){var c,d,e,f,k=a.group;a=a.groupID;k=b("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometCoverPhotoFooter_group.graphql"),k);var l=b("Actor").useActor();l=l[0];l=b("useCometEntryPointDialog")(b("GroupsCometCoverPhotoLinkedPagesDialog.entrypoint"),{actorID:l,groupID:a});var m=l[0];a=l[1];l=(l=k.group_theme_color)==null?void 0:l.hexcolor;c=(c=k.group_theme_color)==null?void 0:c.label;var n="#90949C";l=l==null||c==="FACEBOOK"||l==="FFFFFFFF"?(c=b("ColorUtils").hexARGBToCSSRGBA((c=k.attribution_context)==null?void 0:c.background_color))!=null?c:n:(c=b("ColorUtils").hexARGBToCSSRGBA(l))!=null?c:n;k=((n=(c=k.linked_pages)==null?void 0:c.nodes)!=null?n:[]).filter(Boolean);c=k.length;n=null;switch(c){case 0:return null;case 1:c=(c=k[0])==null?void 0:c.full_name;d=(d=k[0])==null?void 0:d.url;c!=null&&d!=null?n=i.jsx(b("TetraText.react"),{color:j,type:"headline4",children:g._("Group by {=[PageFullName]}",[g._param("=[PageFullName]",i.jsx(b("CometLink.react"),{href:d,children:g._("{=[PageFullName]}",[g._param("=[PageFullName]",i.jsx(b("TetraText.react"),{color:j,type:"headlineEmphasized4",children:g._("{PageFullName}",[g._param("PageFullName",c)])}))])}))])}):b("recoverableViolation")("pageFullName and pageURL should not be null when rendering a cover photo footer with one page","groups_comet");break;case 2:c=(d=k[0])==null?void 0:d.full_name;d=(d=k[0])==null?void 0:d.url;e=(e=k[1])==null?void 0:e.full_name;f=(f=k[1])==null?void 0:f.url;c!=null&&d!=null&&e!=null&&f!=null?n=i.jsx(b("TetraText.react"),{color:j,type:"headline4",children:g._("Group by {=[PageOneFullName]} and {=[PageTwoFullName]}",[g._param("=[PageOneFullName]",i.jsx(b("CometLink.react"),{href:d,children:g._("{=[PageOneFullName]}",[g._param("=[PageOneFullName]",i.jsx(b("TetraText.react"),{color:j,type:"headlineEmphasized4",children:g._("{PageOneFullName}",[g._param("PageOneFullName",c)])}))])})),g._param("=[PageTwoFullName]",i.jsx(b("CometLink.react"),{href:f,children:g._("{=[PageTwoFullName]}",[g._param("=[PageTwoFullName]",i.jsx(b("TetraText.react"),{color:j,type:"headlineEmphasized4",children:g._("{PageTwoFullName}",[g._param("PageTwoFullName",e)])}))])}))])}):b("recoverableViolation")("pageOneFullName  pageOneURL, pageTwoFullName, and pageTwoURL should not be null when rendering a cover photo footer with two pages","groups_comet");break;default:c=(d=k[0])==null?void 0:d.full_name;e=(f=k[0])==null?void 0:f.url;d=k.slice(1);f=d.length;c!=null&&e!=null?n=i.jsx(b("TetraText.react"),{color:j,type:"headline4",children:g._("Group by {=[PageFullName]} and {=[RestOfPagesCount] other pages}",[g._param("=[PageFullName]",i.jsx(b("CometLink.react"),{href:e,children:g._("{=[PageFullName]}",[g._param("=[PageFullName]",i.jsx(b("TetraText.react"),{color:j,type:"headlineEmphasized4",children:g._("{PageFullName}",[g._param("PageFullName",c)])}))])})),g._param("=[RestOfPagesCount] other pages",i.jsx(b("CometTooltip.react"),{forceInlineDisplay:!0,tooltip:i.jsx("div",{className:"cbu4d94t j83agx80",children:d.map(function(a,c){var d=a.full_name;return d==null?b("recoverableViolation")("pageFullName should not be null when rendering a tooltip for cover photo footer with three plus pages","groups_comet"):i.jsx(b("TetraText.react"),{type:"headline4",children:d},(d=a.url)!=null?d:c)})}),children:g._("{=[RestOfPagesCount] other pages}",[g._param("=[RestOfPagesCount] other pages",i.jsx(b("CometLink.react"),{onClick:function(){m({})},ref:a,children:g._("{=[RestOfPagesCount] other pages}",[g._param("=[RestOfPagesCount] other pages",i.jsx(b("TetraText.react"),{color:j,type:"headlineEmphasized4",children:g._("{RestOfPagesCount} other pages",[g._param("RestOfPagesCount",f)])}))])}))])}))])}):b("recoverableViolation")("firstPageFullName and firstPageURL should not be null when rendering a cover photo footer with three plus pages","groups_comet");break}return n!=null?i.jsx(b("TetraishEntityHeaderCoverMediaFooter.react"),{footer:i.jsx("div",{className:"dati1w0a",children:n}),footerAlign:"start",footerStyle:{backgroundColor:l}}):null}}),null);
__d("useIdorvanity",["CometRouteParams"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a=b("CometRouteParams").useRouteParams();a=a.idorvanity;return typeof a==="string"?a:null}}),null);
__d("filterMap",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Map();for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];b(f,g)&&c.set(g,f)}return c}e.exports=a}),null);
__d("CrisisClickUnitFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","crisis_click_unit");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("CrisisToolViewPageFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","crisis_tool_view_page");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("CrisisViewModuleFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","crisis_view_module");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("CrisisViewUnitFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","crisis_view_unit");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);