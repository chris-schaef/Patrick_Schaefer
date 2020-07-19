if (self.CavalryLogger) { CavalryLogger.start_js(["GYyQn"]); }

__d("ProfileCometComposerRootQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:"COMET_COMPOSER",kind:"LocalArgument",name:"privacySelectorRenderLocation"},{defaultValue:null,kind:"LocalArgument",name:"privacyWriteID"},{defaultValue:null,kind:"LocalArgument",name:"profile_id"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"id",variableName:"profile_id"}],c=[{kind:"Variable",name:"profile_id",variableName:"profile_id"}],d={kind:"Variable",name:"render_location",variableName:"privacySelectorRenderLocation"},e=[{kind:"Variable",name:"privacy_write_id",variableName:"privacyWriteID"},d],f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={kind:"Variable",name:"scale",variableName:"scale"},h={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},j=[d],k={alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"allow",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"base_state",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"deny",storageKey:null},p={alias:null,args:null,concreteType:"PrivacyRowInputTargetingFields",kind:"LinkedField",name:"privacy_targeting",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_fields",storageKey:null}],storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"tag_expansion_state",storageKey:null},r={alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[m,n,o,p,q],storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},t={alias:null,args:[g],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},u={alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null},f],storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null},w={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null};d={alias:null,args:[d,{kind:"Literal",name:"supported",value:["PrivacyScopeCometButtonEntryPointRenderer","PrivacyScopeCometComposerButtonEntryPointRenderer","PrivacyScopeCometIconEntryPointRenderer","PrivacyScopeCometToggleEntryPointRenderer"]}],concreteType:null,kind:"LinkedField",name:"entry_point_renderer",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[i,{alias:"scope",args:j,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[s,t,u,v,k,w],storageKey:null},f],storageKey:null}],type:"PrivacyScopeCometButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[i,{alias:"scope",args:j,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[k,w,s,t,u,v],storageKey:null},f],storageKey:null}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[i,{alias:"scope",args:j,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[s,t,k,w],storageKey:null},f],storageKey:null}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[i,{alias:"scope",args:j,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[k,w,s,{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"options",plural:!0,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"is_selected",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[n,m,o,p,q],storageKey:null}],storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"should_save_on_select",storageKey:null}],storageKey:null},f],storageKey:null}],type:"PrivacyScopeCometToggleEntryPointRenderer",abstractKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"ProfileCometComposerRootQuery",selections:[{alias:null,args:b,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometComposer_user"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometComposerViewer_profile"}],storageKey:null},{alias:null,args:c,concreteType:"FeedCometComposer",kind:"LinkedField",name:"feed_comet_composer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometComposer_composer"}],storageKey:null}],storageKey:null},{alias:null,args:e,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_selector",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometComposer_scope"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"ProfileCometComposerRootQuery",selections:[{alias:null,args:b,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_memorialized",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"is_visibly_memorialized",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},g,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[h],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"User",abstractKey:null}],type:"Profile",abstractKey:"__isProfile"}],storageKey:null},{alias:null,args:c,concreteType:"FeedCometComposer",kind:"LinkedField",name:"feed_comet_composer",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometComposerUploadMediaSprout","CometComposerAnimatedImageSprout","CometComposerWithTaggingSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","FeedCometComposerLiveProducerSprout","CometComposerFundraiserForStorySprout","FeedCometComposerLivingRoomSprout","FeedCometComposerBrandedContentSprout","FeedCometComposerWoodhengeSupportSprout","CometComposerVideoMeetupSprout","CometComposerAMASprout"]}],concreteType:null,kind:"LinkedField",name:"sprouts",plural:!0,selections:[i,{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"CometComposerUploadMediaSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerUploadMediaSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"CometComposerAnimatedImageSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerAnimatedImageSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"CometComposerWithTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerWithTaggingSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"ComposerLocationTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerLocationTaggingSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"ComposerTabbedMinutiaeSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerMinutiaeSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"FeedLiveProducerCometComposerLiveSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"FeedCometComposerLiveProducerSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"FundraiserForStorySprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerFundraiserForStorySprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"FeedCometComposerLivingRoomSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"FeedCometComposerLivingRoomSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"FeedCometComposerBrandedContentSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"FeedCometComposerBrandedContentSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"FeedCometComposerWoodhengeSupportSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"FeedCometComposerWoodhengeSupportSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"CometComposerRoomsSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerVideoMeetupSprout",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"FeedComposerCometToolbar_composer",fragmentName:"FeedCometComposerAMASprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerAMASprout",abstractKey:null}],storageKey:'sprouts(supported:["CometComposerUploadMediaSprout","CometComposerAnimatedImageSprout","CometComposerWithTaggingSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","FeedCometComposerLiveProducerSprout","CometComposerFundraiserForStorySprout","FeedCometComposerLivingRoomSprout","FeedCometComposerBrandedContentSprout","FeedCometComposerWoodhengeSupportSprout","CometComposerVideoMeetupSprout","CometComposerAMASprout"])'}],storageKey:null}],storageKey:null},{alias:null,args:e,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_selector",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["PrivacyScopeEditableRenderer","PrivacyScopeUneditableRenderer"]}],concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[i,{kind:"TypeDiscriminator",abstractKey:"__isPrivacySelectorRenderer"},f,{kind:"InlineFragment",selections:[{alias:"scope",args:j,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[k,l],storageKey:null},{kind:"InlineFragment",selections:[r,{alias:"scope",args:j,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[r,f],storageKey:null}],storageKey:null},d],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}],type:"PrivacyScopeEditableRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[r,d],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}],type:"PrivacyScopeUneditableRenderer",abstractKey:null}],storageKey:'privacy_scope_renderer(supported:["PrivacyScopeEditableRenderer","PrivacyScopeUneditableRenderer"])'}],storageKey:null}]},params:{id:"3113897298689964",metadata:{relayPreloadable:!0},name:"ProfileCometComposerRootQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ProfileCometComposerStatusArea_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometComposerStatusArea_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_visibly_memorialized",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometComposerViewer_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometComposerViewer_profile",selections:[{args:[{kind:"Variable",name:"scale",variableName:"scale"}],kind:"FragmentSpread",name:"CometComposerMinutiaeBar_profile"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("ProfileCometComposer_composer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometComposer_composer",selections:[{args:null,kind:"FragmentSpread",name:"FeedComposerCometToolbar_composer"}],type:"FeedCometComposer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometComposer_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometComposer_scope",selections:[{args:null,kind:"FragmentSpread",name:"CometComposerPrivacyScope_scope"}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("ProfileCometComposer_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometComposer_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_memorialized",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometComposerStatusArea_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometComposerStatusArea.react",["fbt","CometRelay","FeedComposerCometFormattedTextStatusArea.react","FeedComposerCometStatusAreaClickHandler.react","React","withComposerViewStatePart","ProfileCometComposerStatusArea_user.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j=h!==void 0?h:h=b("ProfileCometComposerStatusArea_user.graphql");function a(a){var c=i.useRef(null),d=b("CometRelay").useFragment(j,a.user),e=a.viewerID,f=d==null?void 0:d.short_name,h=!1;e===(d==null?void 0:d.id)&&(f=null,h=!0);var k;(d==null?void 0:d.is_visibly_memorialized)===!0&&(k=f!=null?g._("Share a memory or thought about {short name}...",[g._param("short name",f)]):g._("Share a memory or thought..."));return i.jsxs(b("FeedComposerCometStatusAreaClickHandler.react"),{showSwatchPicker:a.activeAttachmentType==null||a.activeAttachmentType==="FORMATTED_TEXT",statusAreaRef:c,children:[i.jsx(b("FeedComposerCometFormattedTextStatusArea.react"),{alwaysShrinkText:a.alwaysShrinkText,autoFocus:a.autoFocus,draftEditorRendering:a.draftEditorRendering,formattedTextPreset:a.formattedTextPreset,isViewerFeed:h,onClose:a.onClose,placeholderText:k,ref:c,stripPastedStyles:a.stripPastedStyles,testid:void 0,userShortName:f}),a.plugins]})}c=b("withComposerViewStatePart")(a,function(a){var b;return{activeAttachmentType:(b=a.attachmentArea)==null?void 0:b.activeAttachmentType,formattedTextPreset:(b=a.formattedText)==null?void 0:b.currentFormattedTextPreset}});e.exports=c}),null);
__d("timelineStoryLiveInsertUpdater",["CometRelay"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c=function(c){var d=c.getRootField("story_create"),e=d&&d.getLinkedRecord("timeline_feed_units_edge"),f=c.get(a);if(!f)return;d=["ProfileCometTimelineFeed_user_timeline_list_feed_units","ProfileCometTimelineFeed_user_timeline_grid_feed_units","CometManagePostsFeed_user_timeline_manage_feed_units"];function g(a,d){a=b("CometRelay").ConnectionHandler.getConnection(f,a,d);if(!a)return;d=b("CometRelay").ConnectionHandler.buildConnectionEdge(c,a,e);d&&b("CometRelay").ConnectionHandler.insertEdgeBefore(a,d)}d.forEach(function(a){return g(a)});g("ProfileCometTimelineFeed_user_timeline_list_feed_units",{memorialized_split_time_filter:"AFTER"})};return c}}),null);
__d("ProfileCometComposer.react",["fbt","CometComposer.react","CometComposerAttachmentArea.react","CometComposerDialogLayout.react","CometComposerMediaDropTarget.react","CometComposerMinutiaeBar.react","CometComposerMinutiaeBarLoading.react","CometComposerPreAttachmentArea.react","CometComposerPrivacyScope.react","CometComposerPushPageContext","CometComposerSavingIndicatorMask.react","CometComposerSubmitButton.react","CometMultiStepContainer.react","CometPlaceholder.react","CometRelay","FeedComposerCometFormattedTextArea.react","FeedComposerCometToolbar.react","JSResource","ProfileCometComposerStatusArea.react","React","cometComposerAttachmentsEligibilityChecker","cometComposerFormattedTextEligibilityChecker","cometComposerTaggerEligibilityChecker","cometComposerValidatePhoto3dAttachment","cometPushToast","createComposerDeferredPlugin","decorateMultiStepContainerPushPage","filterNulls","getDeferredComposerTransformer","gkx","lazyLoadComponent","requireCond","requireDeferred","stylex","timelineStoryLiveInsertUpdater","useComposerSubmit","uuid","cr:1575125","cr:1575126","cr:1252280","cr:1575921","cr:1536687","cr:1575798","ProfileCometComposer_scope.graphql","ProfileCometComposer_user.graphql","ProfileCometComposerViewer_profile.graphql","ProfileCometComposer_composer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l,m,n=b("React");d=(c=b("requireDeferred"))("composerActivityMinutiaeTransform");f=c("composerAttachmentAreaFeedTransform");var o=c("composerAudienceFeedTransform"),p=c("composerBrandedContentTransform"),q=c("composerFormattedTextTransform"),r=c("composerLocationMinutiaeTransform"),s=c("composerMessageFeedTransform"),t=c("composerPreAttachmentAreaFeedTransform"),u=c("composerTargetedPrivacyTransform"),v=c("composerWithTagTransform"),w=c("composerWoodhengeSupportTransform"),x=c("fundraiserForStoryTransform"),y=(l=b("lazyLoadComponent"))((m=b("JSResource"))("CometComposerMediaAttachmentArea.react").__setRef("ProfileCometComposer.react")),z=l(m("FeedComposerCometAnimatedImageAttachmentArea.react").__setRef("ProfileCometComposer.react")),A=l(m("FundraiserForStoryAttachmentArea.react").__setRef("ProfileCometComposer.react")),B=l(m("ComposerLocationAttachmentArea.react").__setRef("ProfileCometComposer.react")),C=l(m("ComposerLinkAttachmentArea.react").__setRef("ProfileCometComposer.react")),D=l(m("ComposerPhoto3dAttachmentArea.react").__setRef("ProfileCometComposer.react")),E=l(m("CometComposerLivingRoomAttachmentAreaContainer.react").__setRef("ProfileCometComposer.react")),F=l(m("CometComposerAMAAttachmentArea.react").__setRef("ProfileCometComposer.react")),G=l(m("CometComposerWoodhengeSupportAttachmentArea.react").__setRef("ProfileCometComposer.react")),H=l(m("ProfileCometComposerFunFactsAttachmentArea.react").__setRef("ProfileCometComposer.react")),I=b("createComposerDeferredPlugin")(c("FeedComposerCometMentionsPlugin.react")),J=b("createComposerDeferredPlugin")(c("CometComposerLinksPlugin.react")),K=b("createComposerDeferredPlugin")(c("CometComposerMisinformationLinkDetectorPlugin.react")),L=4e3,M=b("filterNulls")([(l=b("getDeferredComposerTransformer"))(f),l(o),l(p),l(s),l(v),l(d),l(r),l(q),l(t),l(w),l(x),l(u),b("cr:1575921")]);function a(a,c){var d=a.beginningViewState,e=a.composer$key,f=a.feelingTaggerVisibleOnLoad,l=f===void 0?!1:f,m=a.headerComponent;f=a.locationTaggerVisibleOnLoad;var o=f===void 0?!1:f,p=a.onClose,q=a.onSave,r=a.onSubmit;f=a.profile$key;var s=a.profileID,t=a.scope$key,u=a.user$key,v=a.viewerID;a=a.withTaggerVisibleOnLoad;var w=a===void 0?!1:a,x=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometComposer_scope.graphql"),t),N=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometComposer_user.graphql"),u),O=b("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometComposerViewer_profile.graphql"),f),P=b("CometRelay").useFragment(k!==void 0?k:k=b("ProfileCometComposer_composer.graphql"),e),Q=n.useRef(null);a=n.useState(!1);var R=a[0],S=a[1];u=(t=N==null?void 0:N.is_memorialized)!=null?t:!1;var T=s===v,U=(d==null?void 0:d.storyID)!=null,V=(d==null?void 0:(f=d.audience)==null?void 0:f.to_id)!=null||!T&&U;e=T||U||V?d:babelHelpers["extends"]({},d,{audience:babelHelpers["extends"]({},d==null?void 0:d.audience,{to_id:s})});a={mediaAttachment:b("cr:1252280"),photo3dAttachment:b("cometComposerValidatePhoto3dAttachment")};t=n.useCallback(function(){S(!1)},[]);f=n.useCallback(function(){S(!1)},[]);var W=n.useCallback(function(a){S(!1),a.story_create&&a.story_create.story==null&&a.story_create.story_id!=null&&X(),p&&p(),q&&q()},[p,q]);function X(){var a=g._("Your post is being processed. We\u2019ll let you know when it\u2019s ready to view.");Q.current=b("cometPushToast").cometPushToast({message:a,testid:"ProfileCometComposerPostProcessingToast"},L)}var Y=function(){S(!1)},Z=b("timelineStoryLiveInsertUpdater")(s);d=(d=d==null?void 0:d.creationSessionID)!=null?d:b("uuid")();var $=b("useComposerSubmit")({composerEntryPoint:"inline_composer",composerSourceSurface:"timeline",creationSessionID:d,onCompleted:W,onError:Y,transformers:M,updater:Z,variables:{UFI2CommentsProvider_commentsKey:u?"ProfileCometTributes":"ProfileCometTimelineRoute",creationSessionID:d,feedLocation:"TIMELINE",feedbackSource:0,gridMediaWidth:230,renderLocation:"timeline"}});W=function(a){S(!0),r&&r(),$(a)};Y={attachments:b("cometComposerAttachmentsEligibilityChecker"),formattedText:b("cometComposerFormattedTextEligibilityChecker"),tagger:b("cometComposerTaggerEligibilityChecker")};var aa=(Z=b("cr:1575126"))!=null?Z:n.Fragment;return n.jsx(b("CometComposer.react"),{beginningViewState:babelHelpers["extends"]({},e,{creationSessionID:d}),eligibilityCheckers:Y,onSubmitCommit:W,onSubmitHalt:t,onValidationErrors:f,ref:c,validators:a,children:function(a){return n.jsx(b("CometMultiStepContainer.react"),{fitContentWidth:!0,children:function(c){return n.jsx(b("CometComposerPushPageContext").Provider,{value:b("decorateMultiStepContainerPushPage")(c),children:n.jsx(b("CometComposerMediaDropTarget.react"),{children:n.jsxs(aa,{children:[m,n.jsx(b("CometComposerDialogLayout.react"),{header:n.jsxs(n.Fragment,{children:[n.jsx(b("CometPlaceholder.react"),{fallback:n.jsx(b("CometComposerMinutiaeBarLoading.react"),{}),children:n.jsx(b("CometComposerMinutiaeBar.react"),{privacySelector:T&&!V?n.jsx(b("CometComposerPrivacyScope.react"),{scope:x}):null,profile$key:O})}),n.jsx(b("CometComposerPreAttachmentArea.react"),{children:function(a){switch(a){case"FUN_FACT":return n.jsx(H,{})}return null}})]}),body:n.jsxs(b("FeedComposerCometFormattedTextArea.react"),{children:[n.jsx(b("ProfileCometComposerStatusArea.react"),{alwaysShrinkText:b("gkx")("1217157"),autoFocus:!0,draftEditorRendering:(c=b("cr:1575125"))!=null?c:void 0,onClose:p,plugins:[b("cr:1575798")!=null?n.jsx(b("cr:1575798"),{},"richTextPlugin"):null],stripPastedStyles:!b("gkx")("1217157"),testid:void 0,user:N,viewerID:v}),n.jsx(I,{}),n.jsx(b("cr:1536687"),{}),n.jsx(J,{}),n.jsx(K,{composerType:"feed"}),n.jsx("div",{className:"scb9dxdr dflh9lhu",children:n.jsx(b("CometComposerAttachmentArea.react"),{children:function(a){switch(a){case"AMA":return n.jsx(F,{});case"ANIMATED_IMAGE":return n.jsx(z,{});case"LOCATION":return n.jsx(B,{});case"LINK":return n.jsx(C,{});case"LIVING_ROOM":return n.jsx(E,{});case"MEDIA":return n.jsx(y,{mediaUploadLoggingMetadata:{composerEntrypoint:"timeline",source:"composer"}});case"NONPROFIT":return n.jsx(A,{});case"PHOTO3D":return n.jsx(D,{});case"WOODHENGE_SUPPORT":return n.jsx(G,{profileID:s})}return null}})})]}),footer:n.jsxs(n.Fragment,{children:[n.jsx(b("FeedComposerCometToolbar.react"),{composer:P,composerType:U?"edit":"profile",feelingTaggerVisibleOnLoad:l,isSelfProfile:T,locationTaggerVisibleOnLoad:o,onClose:p,withTaggerVisibleOnLoad:w}),n.jsx("div",{className:"k4urcfbm discj3wi dati1w0a hv4rvrfc i1fnvgqd j83agx80 rq0escxv bp9cbjyn",children:n.jsx(b("CometComposerSubmitButton.react"),{disabled:R,expanded:!0,onClick:a,testid:void 0,children:g._("Post")})})]})}),R?n.jsx(b("CometComposerSavingIndicatorMask.react"),{}):null]})})})}})}},d)}m=n.forwardRef(a);e.exports=m}),null);
__d("ProfileCometComposerRoot.react",["CometRelay","ProfileCometComposer.react","ProfileCometContext","React","ProfileCometComposerRootQuery.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a,c){var d=h.useContext(b("ProfileCometContext"));d=d.viewerID;var e=a.profileID,f=b("CometRelay").usePreloadedQuery(g!==void 0?g:g=b("ProfileCometComposerRootQuery.graphql"),a.queries.composerQueryReference),i=f.privacy_selector,j=f.user;f=f.viewer;f=f||{};var k=f.account_user;f=f.feed_comet_composer;return e==null||i==null||j==null||k==null||f==null?null:h.jsx(b("ProfileCometComposer.react"),{beginningViewState:a.beginningViewState,composer$key:f,feelingTaggerVisibleOnLoad:a.feelingTaggerVisibleOnLoad,headerComponent:a.headerComponent,isViewerFeed:!0,locationTaggerVisibleOnLoad:a.locationTaggerVisibleOnLoad,onClose:a.onClose,onSave:a.onSave,onSubmit:a.onSubmit,profile$key:k,profileID:e,ref:c,scope$key:i,user$key:j,viewerID:d,withTaggerVisibleOnLoad:a.withTaggerVisibleOnLoad})}c=h.forwardRef(a);e.exports=c}),null);
__d("ProfileCometComposerDialog.react",["fbt","CometCardedDialog.react","CometComposerHeader.react","ProfileCometComposerRoot.react","React","composerCometCardedDialogProps"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(a){var c=a.props;a=a.queries;var d=c.beginningViewState,e=c.feelingTaggerVisibleOnLoad,f=c.locationTaggerVisibleOnLoad,i=c.onBeforeClose,j=c.onClose,k=c.onSave,l=c.onSubmit,m=c.profileID,n=c.withCloseButton;c=c.withTaggerVisibleOnLoad;var o=h.useRef(null),p=h.useCallback(function(){i&&i(o.current!=null?o.current.getViewState():void 0),j()},[i,j]);n=h.jsx(b("CometComposerHeader.react"),{closeButtonTestID:"ProfileCometComposer-CloseButton",onClose:p,testid:void 0,title:g._("Create Post"),withCloseButton:n});return h.jsx(b("CometCardedDialog.react"),babelHelpers["extends"]({},b("composerCometCardedDialogProps"),{onClose:p,testid:void 0,children:h.jsx(b("ProfileCometComposerRoot.react"),{beginningViewState:d,feelingTaggerVisibleOnLoad:e,headerComponent:n,locationTaggerVisibleOnLoad:f,onClose:p,onSave:k,onSubmit:l,profileID:m,queries:a,ref:o,withTaggerVisibleOnLoad:c})}))}}),null);