if (self.CavalryLogger) { CavalryLogger.start_js(["RE9Xq"]); }

__d("XCometLiveProducerControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/live/producer/{?videoID}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("XVideoComposerFetchDialogControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/video/composer/fetch_dialog/",Object.freeze({}),void 0);e.exports=a}),null);
__d("GroupsCometInlineComposerTaggingSprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"GroupsCometInlineComposerTaggingSprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("GroupsCometInlineComposerTaggingSprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometInlineComposerTaggingSprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"GroupCometComposerWithTaggingSprout",abstractKey:null};e.exports=a}),null);
__d("FeedInlineComposerFeelingSprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"FeedInlineComposerFeelingSprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("FeedInlineComposerFeelingSprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FeedInlineComposerFeelingSprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometComposerMinutiaeSprout",abstractKey:null};e.exports=a}),null);
__d("FeedInlineComposerMediaSprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"FeedInlineComposerMediaSprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("FeedInlineComposerMediaSprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FeedInlineComposerMediaSprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometComposerUploadMediaSprout",abstractKey:null};e.exports=a}),null);
__d("useCometEntityKey",["getCometEntityKey","getCurrentRoute","useCometRouterState"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a=b("useCometRouterState")();if(a==null)return null;a=b("getCurrentRoute")(a);return b("getCometEntityKey")(a)}}),null);
__d("CometFileSelector.react",["React","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function h(a){return a.map(function(a){if(a.indexOf("/")!==-1||a[0]===".")return a;b("recoverableViolation")('Accept parameter "'+a+'" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)',"profile_comet");return"."+a}).join(",")}function a(a){var b=a.accept,c=a.children,d=a.multiple;d=d===void 0?!1:d;var e=a.onFilesSelected,f=g.useRef(null);g.useEffect(function(){var a=f.current;if(a!=null){var b=function(a){a.stopPropagation()};a.addEventListener("click",b);return function(){a.removeEventListener("click",b)}}});a=g.useCallback(function(){f.current!=null&&f.current.click()},[]);var i=g.useCallback(function(a){e(a.currentTarget.files),a.currentTarget.value=""},[e]);return g.jsxs(g.Fragment,{children:[g.jsx("input",{accept:b!=null?h(b):void 0,className:"mkhogb32",multiple:d,onChange:i,ref:f,type:"file"}),c(a)]})}}),null);
__d("fileInputAcceptValues",[],(function(a,b,c,d,e,f){"use strict";a=["image/*","image/heif","image/heic"];f.PHOTO=a;b=["video/*","video/mp4","video/x-m4v","video/x-matroska"];f.VIDEO=b;c=a.concat(b);f.PHOTO_AND_VIDEO=c}),null);
__d("CometFeedInlineComposerSprout.react",["CometImage.react","CometPressable.react","CometRefineRef","React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={root:{alignItems:"bp9cbjyn",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",display:"j83agx80",flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",flexShrink:"g5gj957u",justifyContent:"taijpn5t",minWidth:"idt9hxom",paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"},sprout:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",lineHeight:"dfwzkoeu",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},sproutIcon:{display:"pq6dq46d",flexGrow:"kb5gq1qc",flexShrink:"pfnyh3mw",marginEnd:"oi9244e8"}};function a(a){var c=a.imageSrc,d=a.label,e=a.onHoverIn,f=a.onHoverOut,j=a.onPress,k=a.onPressIn,l=a.testid;l=a.triggerRef;return h.jsx(b("CometPressable.react"),{display:"block",onHoverIn:e,onHoverOut:f,onPress:j,onPressIn:k,ref:b("CometRefineRef")(l),testid:void 0,xstyle:i.root,children:h.jsxs("div",{className:(g||(g=b("stylex")))(i.sprout),children:[h.jsx("span",{className:g(i.sproutIcon),children:h.jsx(b("CometImage.react"),{src:c})}),h.jsx(b("TetraText.react"),{color:"secondary",numberOfLines:1,type:"bodyLink3",children:d})]})})}}),null);
__d("FeedInlineComposerTaggingSprout.react",["ix","fbt","CometFeedInlineComposerSprout.react","React","asset"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function a(a){var c=a.label,d=a.onHoverIn,e=a.onHoverOut,f=a.onPressIn,j=a.showComposerDialog;a=a.triggerRef;return i.jsx(b("CometFeedInlineComposerSprout.react"),{imageSrc:g("1260655"),label:(c=c)!=null?c:h._("Tag Friends"),onHoverIn:d,onHoverOut:e,onPress:function(){return j({pushedPageOnLoad:"with_tagger",withTaggerVisibleOnLoad:!0})},onPressIn:f,triggerRef:a})}}),null);
__d("GroupsCometInlineComposerTaggingSprout.react",["fbt","CometRelay","FeedInlineComposerTaggingSprout.react","React","GroupsCometInlineComposerTaggingSprout_sprout.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");h!==void 0?h:h=b("GroupsCometInlineComposerTaggingSprout_sprout.graphql");function a(a){return i.jsx(b("FeedInlineComposerTaggingSprout.react"),babelHelpers["extends"]({label:g._("Tag People")},a))}}),null);
__d("FeedInlineComposerFeelingSprout.react",["ix","fbt","CometFeedInlineComposerSprout.react","CometRelay","React","asset","FeedInlineComposerFeelingSprout_sprout.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React");i!==void 0?i:i=b("FeedInlineComposerFeelingSprout_sprout.graphql");function a(a){var c=a.onHoverIn,d=a.onHoverOut,e=a.onPressIn,f=a.showComposerDialog;a=a.triggerRef;return j.jsx(b("CometFeedInlineComposerSprout.react"),{imageSrc:g("1260648"),label:h._("Feeling\/Activity"),onHoverIn:c,onHoverOut:d,onPress:function(){return f({feelingTaggerVisibleOnLoad:!0,pushedPageOnLoad:"feeling"})},onPressIn:e,triggerRef:a})}}),null);
__d("FeedInlineComposerMediaSprout.react",["ix","fbt","CometFeedInlineComposerSprout.react","CometFileSelector.react","CometRelay","JSResource","React","asset","cometUniqueID","fileInputAcceptValues","gkx","isMimeTypeForMedia","FeedInlineComposerMediaSprout_sprout.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React");i!==void 0?i:i=b("FeedInlineComposerMediaSprout_sprout.graphql");function a(a){var c=a.isViewingSelf,d=a.launchBlueVideoComposer,e=a.onHoverIn,f=a.onHoverOut,i=a.onPressIn,k=a.showComposerDialog,l=a.triggerRef;a=j.useCallback(function(a){if(a==null)return;var e=Array.from(a);if(e.length===1&&b("isMimeTypeForMedia").isMimeTypeForVideo(e[0].type)&&d!=null&&c===!0){d(e[0]);return}e=a==null?void 0:Array.from(a).map(function(a){var c=b("cometUniqueID")();a.uploadID=c;if(b("isMimeTypeForMedia").isMimeTypeForPhoto(a.type))return{data:{id:c},file:a,fileObjectURL:URL.createObjectURL(a),fileType:"PHOTO",state:"NEW"};if(b("isMimeTypeForMedia").isMimeTypeForVideo(a.type))return{data:{id:c},file:a,fileObjectURL:URL.createObjectURL(a),fileType:"VIDEO",state:"NEW"}}).filter(Boolean);k({additionalMediaAttachmentItems:e})},[c,d,k]);var m=function(a){var c=b("JSResource")("CometComposerMediaAttachmentArea.react").__setRef("FeedInlineComposerMediaSprout.react");c.load();a()};return j.jsx(b("CometFileSelector.react"),{accept:b("fileInputAcceptValues").PHOTO_AND_VIDEO,multiple:!0,onFilesSelected:a,children:function(a){return j.jsx(b("CometFeedInlineComposerSprout.react"),{imageSrc:g("1260669"),label:h._("Photo\/Video"),onHoverIn:e,onHoverOut:f,onPress:function(){m(a)},onPressIn:i,triggerRef:l})}})}}),null);
__d("VideoComposerDialogUITypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:VideoComposerDialogUILoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoComposerDialogUILoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoComposerDialogUILoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActorID=function(a){this.$1.actor_id=a;return this};c.setCaptionsNumSelectedFiles=function(a){this.$1.captions_num_selected_files=a;return this};c.setComposerDialogVersion=function(a){this.$1.composer_dialog_version=a;return this};c.setComposerEntryPoint=function(a){this.$1.composer_entry_point=a;return this};c.setCurrentTab=function(a){this.$1.current_tab=a;return this};c.setDialogMode=function(a){this.$1.dialog_mode=a;return this};c.setEditSource=function(a){this.$1.edit_source=a;return this};c.setErrorMessage=function(a){this.$1.error_message=a;return this};c.setErrorTab=function(a){this.$1.error_tab=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setHasBeenReset=function(a){this.$1.has_been_reset=a;return this};c.setHasUploadFinished=function(a){this.$1.has_upload_finished=a;return this};c.setInvalidationReasons=function(a){this.$1.invalidation_reasons=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setIsComposerPostScheduleRedesign=function(a){this.$1.is_composer_post_schedule_redesign=a;return this};c.setIsPremiere=function(a){this.$1.is_premiere=a;return this};c.setIsPremiereUnderScheduleInTwoStep=function(a){this.$1.is_premiere_under_schedule_in_two_step=a;return this};c.setIsShowPage=function(a){this.$1.is_show_page=a;return this};c.setIsTwoStepPublish=function(a){this.$1.is_two_step_publish=a;return this};c.setLoggerConfigContext=function(a){this.$1.logger_config_context=a;return this};c.setNextTab=function(a){this.$1.next_tab=a;return this};c.setOriginalShowVideoType=function(a){this.$1.original_show_video_type=a;return this};c.setPostAttemptCount=function(a){this.$1.post_attempt_count=a;return this};c.setPremiereContentStrategyCondition=function(a){this.$1.premiere_content_strategy_condition=a;return this};c.setPremiereNowCondition=function(a){this.$1.premiere_now_condition=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setShowVideoType=function(a){this.$1.show_video_type=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUploadAttemptCount=function(a){this.$1.upload_attempt_count=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoAssetID=function(a){this.$1.video_asset_id=a;return this};c.setVideoAssetWaterfallSource=function(a){this.$1.video_asset_waterfall_source=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setWaterfallID=function(a){this.$1.waterfall_id=a;return this};c.setWebFramework=function(a){this.$1.web_framework=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={actor_id:!0,captions_num_selected_files:!0,composer_dialog_version:!0,composer_entry_point:!0,current_tab:!0,dialog_mode:!0,edit_source:!0,error_message:!0,error_tab:!0,event:!0,has_been_reset:!0,has_upload_finished:!0,invalidation_reasons:!0,is_composer_post_schedule_redesign:!0,is_premiere:!0,is_premiere_under_schedule_in_two_step:!0,is_show_page:!0,is_two_step_publish:!0,logger_config_context:!0,next_tab:!0,original_show_video_type:!0,post_attempt_count:!0,premiere_content_strategy_condition:!0,premiere_now_condition:!0,session_id:!0,show_video_type:!0,time:!0,upload_attempt_count:!0,vc:!0,video_asset_id:!0,video_asset_waterfall_source:!0,video_id:!0,waterfall_id:!0,web_framework:!0,weight:!0};e.exports=a}),null);
__d("useVideoComposerDialog",["JSResource","React","VideoComposerDialogUITypedLogger","useCometLazyDialog","XVideoComposerFetchDialogControllerRouteBuilder"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("JSResource")("CometCompatModal.react").__setRef("useVideoComposerDialog"),i=function(a){var c=a.composerEntryPointRef;a=a.targetID;new(b("VideoComposerDialogUITypedLogger"))().setEvent("dialog_requested").setActorID(a).setComposerDialogVersion("V2").setComposerEntryPoint(c).setDialogMode("video_upload").setWebFramework("BLUE_ON_COMET").log()};function a(a){var c=a.composerEntryPointRef,d=a.targetID;a=b("useCometLazyDialog")(h);var e=a[0];return g.useCallback(function(a){i({composerEntryPointRef:c,targetID:d});var f=b("XVideoComposerFetchDialogControllerRouteBuilder").buildURL({entry_point_ref:c,target_id:d});f={disableClosingWithMask:!0,rel:"dialog-post",uri:f};var g=function(b){b.addListener("video-composer-bootloader-ready",function(c){b.sendChildFrameMessage({compatAction:"video-composer-file",file:a})});return function(){return b.removeAllListeners("video-composer-bootloader-ready")}};e({customCompatEventHandler:g,params:f})},[c,d,e])}}),null);