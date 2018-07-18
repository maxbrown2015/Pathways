if (self.CavalryLogger) { CavalryLogger.start_js(["ozaoL"]); }

__d("Keys.bs",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=8;b=9;c=13;d=18;e=27;var g=32,h=33,i=34,j=35,k=36,l=37,m=38,n=39,o=40,p=46,q=188,r=190,s=65,t=90,u=48,v=96,w=105;f.backspace=a;f.tab=b;f.$$return=c;f.alt=d;f.esc=e;f.space=g;f.page_up=h;f.page_down=i;f.end_=j;f.home=k;f.left=l;f.up=m;f.right=n;f.down=o;f.$$delete=p;f.comma=q;f.period=r;f.a=s;f.z=t;f.zero=u;f.numpad_0=v;f.numpad_9=w}),null);
__d("FBRTCScreenSharingLogger",["Log","MarauderLogger","formatDate","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="webrtc_screen_sharing",h=b("keyMirror")({screen_sharing_action:null,screen_sharing_error:null}),i=b("keyMirror")({PEER_ID:null,SESSION_ID:null,CONTEXT_TYPE:null,CONTENT:null});a=b("keyMirror")({SCREEN_SHARING_TOGGLED:null,SCREEN_SHARING_CANCELLED:null,SCREEN_SHARING_ENABLED:null,SCREEN_SHARING_DISABLED:null,SCREEN_SHARING_EXT_DIALOG:null,SCREEN_SHARING_EXT_LINK:null,SCREEN_SHARING_DIALOG_SUCCESS:null,SCREEN_SHARING_DIALOG_CANCEL:null});var j=null;k.getInstance=function(){j||(j=new k());return j};k.prototype.logAction=function(a,b,c,d){var e={};e[h.screen_sharing_action]=c;e[i.PEER_ID]=a;e[i.SESSION_ID]=b;e[i.CONTEXT_TYPE]=this.$1();e[i.CONTENT]=d;this.$2(h.screen_sharing_action,e);this.logToConsole(a,b,c)};k.prototype.logError=function(a,b,c){var d={};d[i.PEER_ID]=a;d[i.SESSION_ID]=b;d[i.CONTEXT_TYPE]=this.$1();d[i.CONTENT]=c;this.$2(h.screen_sharing_error,d);this.logToConsole(a,b,c)};k.prototype.logToConsole=function(a,b,c){};k.prototype.$1=function(){return"p2p_video_call"};k.prototype.$2=function(a,c){b("MarauderLogger").log(a,g,c)};function k(){}k.Action=a;e.exports=k}),null);
__d("FBRTCVersionDetection",["UserAgent","UserAgentData"],(function(a,b,c,d,e,f){__p&&__p();a={isChrome:function(){return b("UserAgent").isBrowser("Chrome")},isFirefox:function(){return b("UserAgent").isBrowser("Firefox")},isChromium:function(){return!!navigator.webkitGetUserMedia},webrtcVersion:function(){if(this.isFirefox()||this.isChrome())return b("UserAgentData").browserVersion||0;if(this.isChromium()){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a!=null?parseInt(a[2],10):999}return 0}};e.exports=a}),null);
__d("FBRTCScreenSharingUtils",["Promise","FBRTCExperiment","FBRTCScreenSharingLogger","FBRTCStruct","FBRTCSupport","FBRTCVersionDetection","RTCConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("FBRTCStruct"))(["UNKNOWN","INSTALLED"]),h=g.UNKNOWN,i={RECIPIENT:"SC_CONTENT_SCRIPT",isScreenSharingSupportedV1:function(){return b("RTCConfig").ScreenSharingGK},isScreenSharingSupported:function(){if(b("RTCConfig").ScreenSharingGK)return!0;var a=b("FBRTCExperiment").gen("webrtc_enable_screen_sharing");return a.getBool("can_screen_sharing",!1)},isGroupCallScreenSharingSupported:function(){return b("RTCConfig").ScreenSharingToGroupGK},isSupportedBrowser:function(){return b("FBRTCVersionDetection").isChrome()&&b("FBRTCVersionDetection").webrtcVersion()>=34},canUserReceiveScreenSharing:function(){return b("FBRTCSupport").isOSSupported()&&b("FBRTCVersionDetection").isChromium()&&b("FBRTCVersionDetection").webrtcVersion()>=34},canPeerReceiveScreenSharing:function(a){if(a.remoteSupport("screen_sharing"))return!0;if(!a.remoteSupport("www")&&!a.remoteSupport("mweb")){if(b("RTCConfig").ScreenSharingToMobileGK)return!0;a=b("FBRTCExperiment").gen("webrtc_enable_screen_sharing");return a.getBool("can_share_to_mobile",!1)}return!1},isExtensionInstalled:function(){return h===g.INSTALLED},getExtensionStatus:function(){return h},checkExtensionInstalled:function(){__p&&__p();if(this.isExtensionInstalled())return b("Promise").resolve();var a,c=new(b("Promise"))(function(b){a=function(c){var d=c.origin;c=c.data;if(d!=window.location.origin||!c.type)return;c.type==="SC_EXT_INSTALLED"&&(window.removeEventListener("message",a),h=g.INSTALLED,b())},window.addEventListener("message",a)});return b("Promise").race([c,this._pokeExtension()])["catch"](function(c){window.removeEventListener("message",a);return b("Promise").reject(c)})},_pokeExtension:function(a){a===void 0&&(a=13);return new(b("Promise"))(function(b,c){var d=setInterval(function(){setTimeout(function(){h===g.UNKNOWN&&window.postMessage({recipient:i.RECIPIENT,type:"SC_IS_EXT_INSTALLED",text:"is extension installed"},"*")}),a>0?a--:(clearInterval(d),c("extension unavailable"))},200)})},logFailedAttempt:function(a,c){b("FBRTCScreenSharingLogger").getInstance().logAction(a,c,b("FBRTCScreenSharingLogger").Action.SCREEN_SHARING_TOGGLED,"feature not available")}};e.exports=i}),null);
__d("RTWebClientFeatureGating",["FBRTCExperiment","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={initVideoInAudioCall:function(){return b("FBRTCExperiment").gen("rtc_www_p2p_v2_audio_call_with_video").getBool("send_video_track",!1)},isGuestLoginEnabled:function(){return b("gkx")("AT496GYAPlE-4fhETMl3B28RZtJ02Csly7iePkCeK79r0stQmH2SeWF-WEi7yyOvRidPEYOzpqzuWIPPkA4dhnYW")},photoCaptureEnabled:function(){var a=b("FBRTCExperiment").gen("rtc_www_snapshots");a=a.getBool("photo_capture_enabled",!1);return a},waitForMediaPermission:function(){return b("gkx")("AT5kLtAjmUMA8UZ54UpErAt4iKZ9zMLOEhT4KcOKR6ezTKn8MpOo_48fSOhhzsM85_ol8HtCxpFQz3dlnEFsjqCguHWT5Gbxt0EqhKIb8Fa8_A")},shouldUseRealMultiwayAppID:function(){return b("gkx")("AT6iNStHonlQ3Fxd6uDFsCdh9nK1aEQGITRpY8VW6YV7oDxq_dR3HvFer90h-mdnCx3qFFu4PhZAPIrHV8gyw531")}};e.exports=a}),null);
__d("RTCSignalingExperiments",["FBRTCScreenSharingUtils","FBRTCSupport","FBRTCVersionDetection","RTWebClientFeatureGating","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){this.$2=new Set(),this.$1=new Set(g.getLocal()),a&&(this.$2=new Set(a))}g.prototype.getLocal=function(){return Array.from(this.$1)};g.prototype.setRemote=function(a){return!a?this:new g(a)};g.prototype.getRemote=function(){return Array.from(this.$2)};g.prototype.support=function(a){return this.localSupport(a)&&this.remoteSupport(a)};g.prototype.localSupport=function(a){return this.$1.has(a)};g.prototype.remoteSupport=function(a){return this.$2.has(a)};g.getLocal=function(){var a=[];(b("UserAgent").isBrowser("Chrome")||b("UserAgent").isBrowser("Opera")||b("UserAgent").isBrowser("Firefox >= 38"))&&a.push("sdp_update");h()&&a.push("multiple_streams_plan_b");b("FBRTCScreenSharingUtils").canUserReceiveScreenSharing()&&a.push("screen_sharing");b("FBRTCSupport").isOSSupported()?a.push("www"):a.push("mweb");b("RTWebClientFeatureGating").initVideoInAudioCall()&&a.push("video_escalation_by_unmute");return a};function h(){return(b("UserAgent").isBrowser("Chrome")||b("UserAgent").isBrowser("Opera"))&&b("FBRTCVersionDetection").webrtcVersion()>=34}e.exports=g}),null);
__d("FBRTCConfig",["CurrentUser","RTCSignalingExperiments"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=null,i=0,j={};a={setConfig:function(a){var b=a.isVCEndpointCall,c=a.meetingID,d=a.peerID;a=a.serverConfig;g=b;h=c;i=d;j=a},isVCEndpointCall:function(){return g},getMeetingID:function(){return h},getPeerID:function(){return i},statsInterpreterConfig:function(){return{bad_score_count:3,frr_weight:800,plr_weight:500,rtt_weight:2,score_threshold:1e3}},shouldAutoDisableVideo:function(){return!1},unsupportedBrowserUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.unsupported_browser)return j.troubleshooting_urls.unsupported_browser;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/919532078125908";else return"https://www.facebook.com/help/211644178877843"},userMediaErrorUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.user_media_error)return j.troubleshooting_urls.user_media_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},userMediaPermissionErrorUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.user_media_permission_error)return j.troubleshooting_urls.user_media_permission_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},supportedSignalingExperiments:function(){return b("RTCSignalingExperiments").getLocal()},isMessengerDotCom:function(){return j.is_messenger_dot_com},useMessengerCallUI:function(){return j.messenger_call_ui},useHDVideoQuality:function(){return j.use_hd_video_quality},shouldCreateDataChannel:function(){return j.data_channel},disableURLManager:function(){return j.disable_url_manager}};e.exports=a}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(event){var a=b("ReactDOM").findDOMNode(this),c=b("Vector").getEventPosition(event.nativeEvent),d=b("Vector").getElementPosition(a);a=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(a).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(c)?clearTimeout(this.timer):this._onMouseEnter());c=c.x-d.x;d=c/a;b("Locale").isRTL()?c=d>1-this.PAGE_TO_PREV_PERCENTAGE:c=d<this.PAGE_TO_PREV_PERCENTAGE;c?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(event){var a=this.state.currentActiveSection==this.sections.FORWARD,c=event.target;b("Parent").bySelector(c,"._51an")||this.props.onClick&&this.props.onClick(a,event)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","StickersActions","StickersConfig","StickersDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
__d("InstantGameContextType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",SOLO:"SOLO",LINK:"LINK"})}),null);
__d("PhotoProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective",TRANSVERSE_CYLINDRICAL:"transverse-cylindrical"})}),null);
__d("PhotoRendererProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);
__d("QuicksilverSources",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALOHA_GAMEHOST:"aloha_gamehost",EMBEDDED_PLAYER:"embedded_player",FB_CANVAS:"fb_canvas",FB_CANVAS_MIGRATION:"fb_canvas_migration",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_GROUP_CHALLENGE_EDGE_STORY:"fb_feed_group_challenge_edge_story",FB_FEED_PLAY_FROM_POST_EDGE_STORY:"fb_feed_play_from_post_edge_story",FB_FEED_RATING:"fb_feed_rating",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_IGYFAP_QP:"fb_qp_igyfap",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAY_WITH_FRIENDS:"fb_feed_play_with_friends",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_LEADERBOARD_HIGH_SCORE:"fb_feed_leaderboard_high_score",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_FEED_QUICK_PROMOTION:"fb_feed_quick_promotion",FB_AD:"fb_ad",FB_GROUP_CHALLENGE:"fb_group_challenge",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",FB_GROUP_POST_ACTION_LINK:"fb_group_post_action_link",FB_GROUP_POST_CONTEXT_UPDATE:"fb_group_post_context_update",FB_MESSENGER_AD:"fb_messenger_ad",FB_PAGE_PLAY_GAME_BUTTON:"fb_page_play_game_button",FB_STORY_ATTRIBUTION_LINK:"fb_story_attribution_link",FB_NON_MESSENGER_WAP_INVITE_NOTIF:"fb_non_messenger_wap_invite_notif",FB_TURN_REMINDER_NOTIF:"fb_turn_reminder_notif",GAMEROOM_FEED_POST:"gameroom_feed_post",GAMEROOM_HOME:"gameroom_home",GAME_SWITCH:"game_switch",HOME_SCREEN_SHORTCUT:"home_screen_shortcut",INTERNAL:"internal",LIVE_VIDEO_CTA:"live_video_cta",STREAMER_DASHBOARD:"streamer_dashboard",CUSTOM_SHARE:"in_game_custom_share",M_ME_LINK:"m_me_link",MESSENGER_AD:"messenger_ad",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BBALL_EMOJI:"bball_emoji",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_COMPOSER:"composer",MESSENGER_COMPOSER_SMS:"composer_sms",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_BOT_NULL_STATE:"game_bot_null_state_cta",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_PUSH_NOTIFICATION:"game_push_notification",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MESSENGER_M_SUGGESTION:"game_m_suggestion",MESSENGER_MORE_DRAWER_CHAT_EXTENSION:"more_drawer_chat_extension",MESSENGER_NEW_FRIEND_BUMP:"new_friend_bump",MESSENGER_ONE_LINE_COMPOSER:"one_line_composer",MESSENGER_RTC:"rtc",MESSENGER_SEARCH:"messenger_search",MESSENGER_SOCCER_EMOJI:"soccer_emoji",MESSENGER_STALE_THREAD_QUICK_REPLY:"stale_thread_quick_reply",MESSENGER_STICKER:"sticker",PRESENCE_ON_MESSENGER:"presence_on_messenger",THREAD_ACTIVITY_BANNER:"thread_activity_banner",MARKETPLACE:"marketplace",MOBILE_BOOKMARK:"mobile_bookmark",MSITE_BOOKMARK:"msite_bookmark",MOBILE_APP_BOOKMARK:"mobile_app_bookmark",MOBILE_BOOKMARK_PRESENCE:"mobile_bookmark_presence",MSITE:"msite",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_GAMES_HUB:"www_games_hub",WWW_GAMES_HUB_SEARCH:"www_games_hub_search",WWW_GAMES_HUB_BOOKMARKS:"www_games_hub_bookmarks",WWW_GAMES_DIVEBAR_PAGELET:"www_games_divebar_pagelet",WWW_GAMES_RHC_PAGELET:"www_games_rhc_pagelet",WWW_GAMES_UNIFIED_RHC:"www_games_unified_rhc",WWW_LINK_SHARE:"www_link_share",WWW_MESSENGER_UPSELL:"www_messenger_upsell",WWW_PLAY_URL:"www_play_url",WWW_REQUEST_HOVERCARD:"www_request_hovercard",WWW_SPOTLIGHT_RHC:"www_spotlight_rhc",WWW_CHAT_SIDEBAR_PRESENCE:"www_chat_sidebar_presence",WWW_GAME_THREAD_ROW_CTA:"www_game_thread_row_cta",WWW_APP_BOOKMARK:"www_app_bookmark",WWW_PROFILE_HOVERCARD:"www_profile_hovercard",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_GAME_MODAL:"canvas_game_modal",FB_HOMESCREEN_SHORTCUT:"fb_homescreen_shortcut",GAME_CTA:"game_cta",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",THREAD_SETTINGS:"thread_settings",UNKNOWN:"unknown"})}),null);
__d("react",["react-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-0.0.0")()}),null);
__d("create-react-class",["create-react-class/factory","react"],(function(a,b,c,d,e,f){"use strict";if(typeof b("react")==="undefined")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");a=new(b("react").Component)().updater;e.exports=b("create-react-class/factory")(b("react").Component,b("react").isValidElement,a)}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function(a,b,c,d,e,f){"use strict";e.exports=b("create-react-class")}),null);
__d("XGamesQuicksilverSpotlightPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/quicksilver/spotlight/",{app_id:{type:"String"},context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},analytics_info:{type:"TypeAssert"},source:{type:"String"},entry_point_data:{type:"String"},previous_app_id:{type:"String"}})}),null);