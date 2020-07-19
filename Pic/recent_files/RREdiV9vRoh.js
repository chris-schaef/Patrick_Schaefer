if (self.CavalryLogger) { CavalryLogger.start_js(["NN2w8"]); }

__d("useJoinableVideoChatsDidViewEducationalQPMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"JoinableVideoChatsDidViewEducationalQpResponsePayload",kind:"LinkedField",name:"joinable_video_chats_did_view_educational_qp",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useJoinableVideoChatsDidViewEducationalQPMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useJoinableVideoChatsDidViewEducationalQPMutation",selections:b},params:{id:"2786793821356319",metadata:{},name:"useJoinableVideoChatsDidViewEducationalQPMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("VideoChatHomeContainerCometQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:!1,kind:"LocalArgument",name:"show_with_active_room"}],b={alias:null,args:null,kind:"ScalarField",name:"should_show_educational_qp",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"should_collapse_tray",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e=[{kind:"Literal",name:"supported",value:["MessengerRoomsStatusTrayRenderingStrategy"]}],f={kind:"InlineFragment",selections:[{documentName:"VideoChatHomeContainerCometQuery",fragmentName:"RoomsTrayRoot_messengeTrayRenderingStrategy",fragmentPropName:"messengeTrayRenderingStrategy",kind:"ModuleImport"}],type:"MessengerRoomsStatusTrayRenderingStrategy",abstractKey:null},g=[{kind:"Literal",name:"supported",value:["MessengerRoomsStatusOptInPromotionRenderingStrategy"]}],h={kind:"InlineFragment",selections:[{documentName:"VideoChatHomeContainerCometQuery_2",fragmentName:"RoomsQuickPromotionComet_messengerRoomsStatusOptInPromotionRenderingStrategy",fragmentPropName:"messengerRoomsStatusOptInPromotionRenderingStrategy",kind:"ModuleImport"}],type:"MessengerRoomsStatusOptInPromotionRenderingStrategy",abstractKey:null},i=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],j={alias:"promotion_title",args:[{kind:"Literal",name:"type",value:"FEED_UPSELL_TITLE"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:i,storageKey:'joinable_video_chats_string(type:"FEED_UPSELL_TITLE")'},k={alias:"promotion_content",args:[{kind:"Literal",name:"type",value:"FEED_UPSELL_CONTENT"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:i,storageKey:'joinable_video_chats_string(type:"FEED_UPSELL_CONTENT")'},l={alias:"promotion_primary_button_text",args:[{kind:"Literal",name:"type",value:"FEED_UPSELL_BUTTON_STRING"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:i,storageKey:'joinable_video_chats_string(type:"FEED_UPSELL_BUTTON_STRING")'},m={alias:"promotion_secondary_button_text",args:[{kind:"Literal",name:"type",value:"FEED_UPSELL_SECONDARY_BUTTON_STRING"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:i,storageKey:'joinable_video_chats_string(type:"FEED_UPSELL_SECONDARY_BUTTON_STRING")'},n={alias:"rooms_currently_not_available_title",args:[{kind:"Literal",name:"type",value:"ROOMS_CURRENTLY_NOT_AVAILABLE_TITLE"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:i,storageKey:'joinable_video_chats_string(type:"ROOMS_CURRENTLY_NOT_AVAILABLE_TITLE")'};i={alias:"rooms_currently_not_available_description",args:[{kind:"Literal",name:"type",value:"ROOMS_CURRENTLY_NOT_AVAILABLE_DESCRIPTION"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:i,storageKey:'joinable_video_chats_string(type:"ROOMS_CURRENTLY_NOT_AVAILABLE_DESCRIPTION")'};var o={condition:"show_with_active_room",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_active_rooms",storageKey:null}]},p={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"VideoChatHomeContainerCometQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFields",kind:"LinkedField",name:"joinable_video_chats",plural:!1,selections:[b,c,{alias:null,args:null,concreteType:"MessengerRoomsSection",kind:"LinkedField",name:"messenger_rooms_section",plural:!1,selections:[d,{alias:"tray_section",args:e,concreteType:null,kind:"LinkedField",name:"status_renderer_strategies",plural:!1,selections:[f],storageKey:'status_renderer_strategies(supported:["MessengerRoomsStatusTrayRenderingStrategy"])'},{alias:"qp_section",args:g,concreteType:null,kind:"LinkedField",name:"status_renderer_strategies",plural:!1,selections:[h],storageKey:'status_renderer_strategies(supported:["MessengerRoomsStatusOptInPromotionRenderingStrategy"])'}],storageKey:null},j,k,l,m,n,i,o],storageKey:null},{args:null,kind:"FragmentSpread",name:"RoomsTrayRoot_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"VideoChatHomeContainerCometQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"surface_nux_id",value:8001}],concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"ViewerEligibleQuickPromotionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy"]}],concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[p,{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"VideoChatTrayWideEduTile_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTrayWideCardRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"VideoChatTrayEduTile_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTrayCardRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"RoomsTrayQuickPromotionEidRoomTileCard_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"RoomsTrayQuickPromotionEidRoomWideTileCard_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"RoomsTrayQuickPromotionHappyHourTileCard_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"RoomsTrayQuickPromotionHappyHourWideTileCard_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"RoomsTrayQuickPromotionSocialNormsWideTemplateTileCard_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRoomsTrayQuickPromotion_viewer",fragmentName:"RoomsTrayQuickPromotionSocialNormsTemplateTileCard_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",abstractKey:null}],storageKey:'renderer_strategy(supported:["CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy"])'},{alias:"rendererStrategyTypeName",args:[{kind:"Literal",name:"supported",value:["CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy"]}],concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[p],storageKey:'renderer_strategy(supported:["CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy"])'}],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:"eligible_promotions(surface_nux_id:8001)"},{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFields",kind:"LinkedField",name:"joinable_video_chats",plural:!1,selections:[b,c,{alias:null,args:null,concreteType:"MessengerRoomsSection",kind:"LinkedField",name:"messenger_rooms_section",plural:!1,selections:[d,{alias:"tray_section",args:e,concreteType:null,kind:"LinkedField",name:"status_renderer_strategies",plural:!1,selections:[p,f],storageKey:'status_renderer_strategies(supported:["MessengerRoomsStatusTrayRenderingStrategy"])'},{alias:"qp_section",args:g,concreteType:null,kind:"LinkedField",name:"status_renderer_strategies",plural:!1,selections:[p,h],storageKey:'status_renderer_strategies(supported:["MessengerRoomsStatusOptInPromotionRenderingStrategy"])'}],storageKey:null},j,k,l,m,n,i,o],storageKey:null}],storageKey:null}]},params:{id:"3415960905115359",metadata:{relayPreloadable:!0},name:"VideoChatHomeContainerCometQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("useJoinableVideoChatsDidViewEducationalQPMutation",["CometRelay","createUseMutation","useJoinableVideoChatsDidViewEducationalQPMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g;a=g!==void 0?g:g=b("useJoinableVideoChatsDidViewEducationalQPMutation.graphql");c=b("createUseMutation")(a);e.exports=c}),null);
__d("RoomsQuickPromotionPlaceholder.react",["ix","fbt","CometAspectRatioContainer.react","CometCard.react","CometIconLogoFlat.react","React","TetraButtonGroup.react","TetraCircleButton.react","TetraText.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function j(a,b){a=a;b=b;return a/b}function a(a){var c=a.content,d=a.primaryButtonTitle,e=a.secondaryButtonTitle;a=a.title;var f=500,k=218;return i.jsx("div",{className:"k4urcfbm sjgh65i0",children:i.jsxs(b("CometCard.react"),{background:"white",dropShadow:1,children:[i.jsxs("div",{className:"l9j0dhe7 eg9m0zos d76ob5m9 g6srhlxm",children:[i.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:j(f,k)}),i.jsxs("div",{className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",children:[i.jsx("div",{className:"j9ispegn pmk7jnqg dati1w0a f10w8fjw rz4wbd8a pybr56ya",children:i.jsx(b("CometIconLogoFlat.react"),{size:32})}),i.jsx("span",{className:"pmk7jnqg hv4rvrfc a8nywdso f10w8fjw pybr56ya n7fi1qx3",children:i.jsx(b("TetraCircleButton.react"),{color:"white",icon:b("fbicon")._(g("478233"),20),label:h._("Close"),size:32,type:"dark-overlay"})})]})]}),i.jsx("div",{className:"dhix69tm oygrvhab wkznzc2l tr9rh885 cbu4d94t j83agx80",children:i.jsxs("div",{children:[i.jsx("div",{className:"f10w8fjw",children:i.jsx(b("TetraText.react"),{type:"headlineEmphasized2",children:a})}),i.jsx(b("TetraText.react"),{type:"body3",children:c})]})}),i.jsx("div",{className:"f10w8fjw",children:i.jsx(b("TetraButtonGroup.react"),{direction:"backward",primary:{label:d,reduceEmphasis:!0},secondary:{label:e}})})]})})}}),null);
__d("RoomCollapsedTrayPlaceholder.react",["BaseLoadingStateElement.react","CometCard.react","React","RoomCollapsedTilePlaceholder.react","RoomsCollapsedTrayHeader.react","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={container:{display:"j83agx80",flexDirection:"btwxx1t3",paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr",width:"g2wf7z4h"},hideOverflow:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"},marginBottom10:{marginBottom:"oud54xpy"},root:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"jifvfom9",marginBottom:"sjgh65i0",width:"k4urcfbm"}};function a(a,c){a=b("gkx")("708253");var d=8;return h.jsx("div",{role:"article",children:h.jsx(b("BaseLoadingStateElement.react"),{ref:c,xstyle:[i.root,a===!1&&i.marginBottom10],children:h.jsxs(b("CometCard.react"),{background:"white",dropShadow:1,children:[h.jsx(b("RoomsCollapsedTrayHeader.react"),{}),h.jsx("div",{className:(g||(g=b("stylex")))(i.hideOverflow),children:h.jsx("div",{className:g(i.container),children:Array(d).fill().map(function(a,c){return h.jsx(b("RoomCollapsedTilePlaceholder.react"),{},c)})})})]})})})}c=h.forwardRef(a);e.exports=c}),null);
__d("VideoChatTrayPlaceholder.react",["BaseLoadingStateElement.react","CometCard.react","React","VideoChatTrayTilePlaceholder.react","gkx","stylex","useRoomsTofuTrayMaxWidth"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={cardContainer:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",display:"j83agx80",flexGrow:"buofh1pr",flexShrink:"pfnyh3mw",marginEnd:"cgat1ltu",marginStart:"kkf49tns"},container:{display:"j83agx80",flexDirection:"btwxx1t3",justifyContent:"i1fnvgqd",paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"tw6a2znq",width:"g2wf7z4h"},marginBottom10:{marginBottom:"oud54xpy"},root:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"jifvfom9",marginBottom:"sjgh65i0",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"k4urcfbm"}},j=(c={},c[0]={width:"sb3ic3sl","@media (max-width: 299px)":{width:"tfksjxg8"}},c[404]={width:"gppcmqpj","@media (min-width: 404px) and (max-width: 561px)":{width:"g5egk45q"}},c[562]={width:"exqoj0th","@media (min-width: 562px) and (max-width: 719px)":{width:"m8vaowjb"}},c[720]={width:"tsqz73po","@media (min-width: 720px) and (max-width: 877px)":{width:"jcu8m7xq"}},c);function a(a,c){var d=b("useRoomsTofuTrayMaxWidth")();a=b("gkx")("708253");var e=Object.keys(j).filter(function(a){return a<=d}).map(function(a){return j[a]}),f=5;return h.jsx("div",{role:"article",children:h.jsx(b("BaseLoadingStateElement.react"),{ref:c,xstyle:[i.root,a===!1&&i.marginBottom10],children:h.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:h.jsx("div",{className:(g||(g=b("stylex")))(i.container),children:Array(f).fill().map(function(a,c){return h.jsx("div",{className:(g||(g=b("stylex")))([i.cardContainer].concat(e)),children:h.jsx(b("VideoChatTrayTilePlaceholder.react"),{},c)},c)})})})})})}d=h.forwardRef(a);e.exports=d}),null);
__d("VideoChatHomeContainerComet.react",["CometErrorBoundary.react","CometPagelet.react","CometRelay","CometThrottle","JSResource","React","RoomCollapsedTrayPlaceholder.react","RoomsQuickPromotionPlaceholder.react","VideoChatTrayPlaceholder.react","promiseDone","unrecoverableViolation","useCometLazyDialog","useJoinableVideoChatsDidViewEducationalQPMutation","VideoChatHomeContainerCometQuery.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=(c=b("CometRelay")).MatchContainer;c.graphql;var i=c.usePreloadedQuery,j=c.useQueryLoader,k=c.useSubscribeToInvalidationState,l=b("React");d=b("React");var m=d.useEffect,n=d.useState,o=b("JSResource")("RoomsNotAvailableErrorStateDialog.react").__setRef("VideoChatHomeContainerComet.react"),p=g!==void 0?g:g=b("VideoChatHomeContainerCometQuery.graphql"),q=!1;function a(a){var c,d,e,f,g,r,s,t=a.joinableVideoChatsQueryReference,u=a.showCollapsedTray,v=a.showPromotionalUnit;a=a.showWithActiveRoom;var w=j(p),x=w[0],y=w[1],z=(w=x)!=null?w:t;x=i(p,z);var A=x==null?void 0:(w=x.viewer)==null?void 0:(t=w.joinable_video_chats)==null?void 0:t.should_show_educational_qp;w=x==null?void 0:(w=x.viewer)==null?void 0:(t=w.joinable_video_chats)==null?void 0:t.should_collapse_tray;t=x==null?void 0:(t=x.viewer)==null?void 0:(t=t.joinable_video_chats)==null?void 0:(t=t.messenger_rooms_section)==null?void 0:t.id;c=x==null?void 0:(c=x.viewer)==null?void 0:(c=c.joinable_video_chats)==null?void 0:c.has_active_rooms;if(t==null)throw b("unrecoverableViolation")("Expected ID of the room settings object to be non-null","rooms");var B=function(){return y(z.variables,{fetchPolicy:"network-only"})},C=b("useJoinableVideoChatsDidViewEducationalQPMutation")();m(function(){if(q||A===!1)return;var a=b("CometThrottle")(function(){var a=C({});if(a==null)return;b("promiseDone")(a,function(){q=!0})},1e3,{leading:!0});a()},[C,A]);k([t],function(){B()});var D=b("useCometLazyDialog")(o),E=D[0];D=D[1];d=x==null?void 0:(d=x.viewer)==null?void 0:d.joinable_video_chats;e=(e=d==null?void 0:(e=d.promotion_title)==null?void 0:e.text)!=null?e:"Video Chat in Messenger Rooms";f=(f=d==null?void 0:(f=d.promotion_content)==null?void 0:f.text)!=null?f:"Create a room to hang out with people on video.";g=(g=d==null?void 0:(g=d.promotion_primary_button_text)==null?void 0:g.text)!=null?g:"Create Room";r=(r=d==null?void 0:(r=d.promotion_secondary_button_text)==null?void 0:r.text)!=null?r:"Learn More";var F=(s=d==null?void 0:(s=d.rooms_currently_not_available_title)==null?void 0:s.text)!=null?s:"Rooms Isn't Available Right Now",G=(d=d==null?void 0:(s=d.rooms_currently_not_available_description)==null?void 0:s.text)!=null?d:"This may be because of a technical error we're working to fix.";v=(d=(s=v)!=null?s:A)!=null?d:!1;u=(d=(s=u)!=null?s:w)!=null?d:!1;s=n(!1);w=s[0];var H=s[1];return a===!0&&c===!1?null:l.jsx("div",{ref:D,children:l.jsx(b("CometErrorBoundary.react"),{context:{project:"rooms"},fallback:function(a){E({body:G,title:F},void 0);return null},children:l.jsx(b("CometPagelet.react").Placeholder,{fallback:v?l.jsx(b("RoomsQuickPromotionPlaceholder.react"),{content:f,primaryButtonTitle:g,secondaryButtonTitle:r,title:e}):u===!0?l.jsx(b("RoomCollapsedTrayPlaceholder.react"),{}):l.jsx(b("VideoChatTrayPlaceholder.react"),{}),name:"VideoChatHomeUnit",children:l.jsx(h,{match:v&&!w?x==null?void 0:(d=x.viewer)==null?void 0:(s=d.joinable_video_chats)==null?void 0:(a=s.messenger_rooms_section)==null?void 0:a.qp_section:x==null?void 0:(c=x.viewer)==null?void 0:(D=c.joinable_video_chats)==null?void 0:(f=D.messenger_rooms_section)==null?void 0:f.tray_section,props:{onDismiss:function(){H(!0)},shouldShowCollapsedTray:u,viewerRef:x==null?void 0:x.viewer}})})},t)})}e.exports=a}),null);