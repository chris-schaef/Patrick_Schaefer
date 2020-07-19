if (self.CavalryLogger) { CavalryLogger.start_js(["Ys12n"]); }

__d("CometDefaultGroupInlineComposerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2023931754398713",metadata:{relayPreloadable:!0},name:"CometDefaultGroupInlineComposerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupSaleInlineComposerWrapperQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3146868175364557",metadata:{relayPreloadable:!0},name:"CometGroupSaleInlineComposerWrapperQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3135533206522733",metadata:{relayPreloadable:!0},name:"CometGroupRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupDiscussionRootSuccessQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2971646179619921",metadata:{relayPreloadable:!0},name:"CometGroupDiscussionRootSuccessQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupPermalinkRootFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3498285900215750",metadata:{relayPreloadable:!0},name:"CometGroupPermalinkRootFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometDefaultGroupInlineComposer.entrypoint",["CometDefaultGroupInlineComposerQuery$Parameters","JSResource","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.routeProps.groupID;return{queries:{queryReference:{parameters:b("CometDefaultGroupInlineComposerQuery$Parameters"),variables:{groupID:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("CometDefaultGroupInlineComposer.react").__setRef("CometDefaultGroupInlineComposer.entrypoint")};e.exports=a}),null);
__d("CometGroupSaleInlineComposer.entrypoint",["CometGroupSaleInlineComposerWrapperQuery$Parameters","JSResource","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("CometGroupSaleInlineComposerWrapperQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("CometGroupSaleInlineComposer.react").__setRef("CometGroupSaleInlineComposer.entrypoint")};e.exports=a}),null);
__d("buildGroupCometRoot.entrypoint",["JSResource","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","CometGroupRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("CometGroupRoot.react").__setRef("buildGroupCometRoot.entrypoint"),function(a){return{rootQueryReference:{parameters:b("CometGroupRootQuery$Parameters"),variables:{actorID:a.routeProps.actorID,groupID:a.routeProps.groupID,scale:b("WebPixelRatio").get()}}}});e.exports=a}),null);
__d("createCometGroupDiscussionRoot.entrypoint",["CometGroupDiscussionRootSuccessQuery$Parameters","JSResource","WebPixelRatio","buildGroupCometRoot.entrypoint","gkx"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="DISCUSSION",h=new Map([[0,"DISCUSSION"],[1,"BUY_AND_SELL_DISCUSSION"],[2,"BUY_AND_SELL"]]);function a(a){return b("buildGroupCometRoot.entrypoint")(b("JSResource")("CometGroupDiscussionRoot.react").__setRef("createCometGroupDiscussionRoot.entrypoint"),function(c){var d=c.routeProps,e=d.creative_provider_id,f=d.feedType,i=d.focusCommentID,j=d.groupID;d=d.hoistStories;var k=c.routeParams.sorting_setting;return{entryPoints:a(c),queries:{queryReference:{parameters:b("CometGroupDiscussionRootSuccessQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometGroupDiscussionRootSuccessQuery",creative_provider_id:e,feedLocation:"GROUP",feedType:(c=h.get(f))!=null?c:g,feedbackSource:0,focusCommentID:i,groupID:j,hoistStories:d,isComet:!0,privacySelectorRenderLocation:"COMET_STREAM",regular_stories_count:b("gkx")("1484535")?2:3,regular_stories_stream_initial_count:b("gkx")("1484535")?1:2,renderLocation:"group",scale:b("WebPixelRatio").get(),sortingSetting:k,useDefaultActor:!1}}}}})}}),null);
__d("CometGroupDiscussionRoot.entrypoint",["CometDefaultGroupInlineComposer.entrypoint","createCometGroupDiscussionRoot.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("createCometGroupDiscussionRoot.entrypoint")(function(a){return{defaultComposerReference:{entryPoint:b("CometDefaultGroupInlineComposer.entrypoint"),entryPointParams:a},jobComposerReference:null,saleComposerReference:null}});e.exports=a}),null);
__d("CometGroupDiscussionSaleRoot.entrypoint",["CometGroupSaleInlineComposer.entrypoint","createCometGroupDiscussionRoot.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("createCometGroupDiscussionRoot.entrypoint")(function(a){return{defaultComposerReference:null,jobComposerReference:null,saleComposerReference:{entryPoint:b("CometGroupSaleInlineComposer.entrypoint"),entryPointParams:a}}});e.exports=a}),null);
__d("CometGroupPermalinkRoot.entrypoint",["JSResource","WebPixelRatio","buildGroupCometRoot.entrypoint","CometGroupPermalinkRootFeedQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g="CometGroupPermalinkRootFeedQuery";a=b("buildGroupCometRoot.entrypoint")(b("JSResource")("CometGroupPermalinkRoot.react").__setRef("CometGroupPermalinkRoot.entrypoint"),function(a){a=a.routeProps;var c=a.focusCommentID,d=a.groupID;a=a.storyID;c={UFI2CommentsProvider_commentsKey:g,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"GROUP_PERMALINK",feedbackSource:2,focusCommentID:c,groupID:d,isComet:!0,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"group_permalink",scale:b("WebPixelRatio").get(),storyID:a,useDefaultActor:!1};return{queries:{queryReference:{parameters:b("CometGroupPermalinkRootFeedQuery$Parameters"),variables:c}}}});e.exports=a}),null);