if (self.CavalryLogger) { CavalryLogger.start_js(["8C792"]); }

__d("CometProgressStepper.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.color,d=c===void 0?"primary":c;c=a.label;var e=a.roundCorners,f=e===void 0?!0:e,i=a.step,j=a.totalSteps;e=a.type;var k=e===void 0?"default":e;return h.jsx("div",{"aria-valuemax":j,"aria-valuemin":0,"aria-valuenow":i,"aria-valuetext":c,className:"k4urcfbm jgqvdyb2 owycx6da btwxx1t3 du4w35lb l9j0dhe7 jb3vyjys a8nywdso rz4wbd8a qt6c0cv9 hpfvmrgz tgvbjcpo kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab g5gj957u buofh1pr j83agx80 rq0escxv auili1gw ow4ym5g4 gs1a9yip",role:"progressbar",children:Array(j).fill().map(function(a,c){a=c<i;return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"box-sizing-1":"rq0escxv"},k==="spaced-out"?{"padding-end-1":"n8tt0mok","padding-start-1":"hyh9befq"}:null,k==="spaced-out"&&c===0?{"padding-start-1":"a8nywdso"}:null,k==="spaced-out"&&c===j-1?{"padding-end-1":"rz4wbd8a"}:null),style:{width:"calc(100% / "+j+")"},children:h.jsx("div",{className:g.dedupe({"background-color-1":"b3i9ofy5","height-1":"t6na6p9t"},c===0&&f?{"border-bottom-start-radius-1":"qttc61fc","border-top-start-radius-1":"jk6sbkaj"}:null,c===j-1&&f?{"border-bottom-end-radius-1":"ihh4hy1g","border-top-end-radius-1":"kdgqqoy6"}:null,k==="spaced-out"&&f?{"border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","border-top-end-radius-1":"kdgqqoy6","border-top-start-radius-1":"jk6sbkaj"}:null,a&&d==="primary"?{"background-color-1":"s1i5eluu"}:null,a&&d==="secondary"?{"background-color-1":"tdjehn4e"}:null)})},c)})})}}),null);
__d("StoriesCreateContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=!1;d=a.createContext(c);e.exports=d}),null);
__d("StoriesCreateConstants",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={DEFAULT:{BODY:g._("Are you sure you want to discard this? Your story will not be saved."),CANCEL:g._("Continue"),CONFIRM:g._("Discard"),TITLE:g._("Discard Story?")},PHOTO:{BODY:g._("Are you sure you want to discard this photo? Your photo will not be saved."),TITLE:g._("Discard Photo?")}};f.LEAVE_TEXT=a;b={SELECTION_TILE_HEIGHT:330,SELECTION_TILE_WIDTH:220,SPACE_BETWEEN_SELECTOR:20};f.NULL_STATE_DIMENSIONS=b;c={FOOTER_HEIGHT:52,HEADER_HEIGHT:16};f.PHOTO_PREVIEW_DIMENSIONS=c;d={COMET_PUSH_VIEW_HEIGHT:28,COMET_TOP_BAR_HEIGHT:60,CONTAINER_HORIZONTAL_PADDING:24*2,CONTAINER_MAX_WIDTH:940,CONTAINER_VERTICAL_PADDING:32*2,CONTENT_HEADER_HEIGHT:36,CONTENT_HORIZONTAL_PADDING:16*2,CONTENT_VERTICAL_PADDING:16*2,MAX_OVERLAY_WIDTH:472.5,SIDE_PANE_WIDTH:360};f.PREVIEW_DIMENSIONS=d;e=g._("Start typing");f.SATP_PLACEHOLDER=e;a={FOOTER_HEIGHT:12,HEADER_HEIGHT:12};f.SATP_PREVIEW_DIMENSIONS=a;b={EDITING:"editing",NONE:"none"};f.TEXT_OVERLAY_MODE=b;c=26;f.VIDEO_MAX_DURATION=c;d=4;f.VIDEO_MIN_DURATION_FOR_TRIM=d;g={FOOTER_HEIGHT:68};f.VIDEO_PREVIEW_DIMENSIONS=g}),null);
__d("useVideoPlayerPlayFromBeginning",["React","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=b("VideoPlayerHooks").useController(),d=g.useCallback(function(){c.seek(0),c.play(a)},[c,a]);return d}}),null);
__d("FeedbackReactionTypeNames",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({0:"NONE",1:"LIKE",2:"LOVE",3:"WOW",4:"HAHA",5:"YAY",6:"OUCH",7:"SORRY",8:"ANGER",9:"JACKO",10:"CONFUSED",11:"DOROTHY",12:"TOTO",13:"SELFIE",14:"FLAME",15:"PLANE",16:"SUPPORT"})}),null);
__d("ReactionIconClassNames",["cx"],(function(a,b,c,d,e,f,g){"use strict";e.exports={root:"_9zc",icon:"_2p78",menuIcon:"_8382",reactions:{like:"_3j7l",love:"_3j7m",anger:"_3j7q",wow:"_3j7n",haha:"_3j7o",sorry:"_3j7r",yay:"_3j7p",confused:"_3j7s",dorothy:"_3rya",toto:"_4aou",flame:"_3qr6",plane:"_4vps",support:"_906t"},sizes:{14:"_8383",16:"_9--",18:"_19kl",20:"_7tr3",48:"_9-_",96:"_9_0"}}}),null);
__d("UFIReactionIconImpl.react",["FeedbackReactionTypeNames","React","ReactionIconClassNames","joinClasses"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a){return a.className!==this.props.className||a.reaction!==this.props.reaction||a.size!==this.props.size||a.grayscale!==this.props.grayscale};d.renderImage=function(){var a=b("FeedbackReactionTypeNames")[this.props.reaction].toLowerCase();return g.jsx("i",{className:b("joinClasses")(b("ReactionIconClassNames").reactions[a],b("ReactionIconClassNames").icon,b("ReactionIconClassNames").sizes[this.props.size])})};d.render=function(){return g.jsx("span",{className:b("joinClasses")(b("ReactionIconClassNames").root,b("ReactionIconClassNames").sizes[this.props.size],this.props.className),children:this.renderImage()})};return c}(g.Component);a.defaultProps={className:null,grayscale:!1,size:"16"};e.exports=a}),null);
__d("AbstractFBEmoji.react",["cx","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){var b=a.children,c=a.size,d=a.src;a=a.title;c={height:c,width:c,fontSize:c,backgroundImage:"url('"+d+"')"};return h.jsx("span",{className:"_5mfr",title:a,children:h.jsx("span",{style:c,className:"_6qdm",children:b})})};e.exports=a}),null);
__d("FBEmoji.react",["cx","AbstractFBEmoji.react","FBEmojiResource","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){var c=a.codepoints;a=a.size;var d=c.join("");c=b("FBEmojiResource").fromCodepoints(c);c=c!=null?c.getImageURL(a):null;return c==null?h.jsx("span",{className:"_4ay8"+(a===16?" _3kkw":"")+(a===18?" _366d":"")+(a===20?" _366e":"")+(a===24?" _48cb":"")+(a===28?" _5-0n":"")+(a===30?" _5-0o":"")+(a===32?" _5-0p":"")+(a===36?" _2oah":"")+(a===56?" _4352":"")+(a===112?" _435o":""),children:d}):h.jsx(b("AbstractFBEmoji.react"),{size:a,src:c,children:d})};e.exports=a}),null);
__d("getReactionKeyFromType",["invariant","FeedbackReactionType","getJSEnumSafe"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=b("getJSEnumSafe")(b("FeedbackReactionType"),a);typeof c==="number"||g(0,2265,a);return c}e.exports=a}),null);