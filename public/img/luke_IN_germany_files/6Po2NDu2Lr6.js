if (self.CavalryLogger) { CavalryLogger.start_js(["0O7A6"]); }

__d("AppsDivebarDisplayController",["cx","AppsDivebarConfigData","Arbiter","AsyncRequest","CSS","UIPagelet","$"],(function(a,b,c,d,e,f,g){__p&&__p();var h=171;a={isVisible:function(){if(this._visible!==undefined)return this._visible;this._visible=!b("AppsDivebarConfigData").hidden;return this._visible},showApps:function(){this._visible=!0;var a={fb_source_category:"sidebar"};b("UIPagelet").loadFromEndpoint("GamesDivebarPagelet","pagelet_canvas_nav_content",a);b("CSS").show(b("$")("apps_gripper"));b("CSS").show(b("$")("pagelet_canvas_nav_content"));b("CSS").addClass(b("$")("pagelet_canvas_nav_content"),"_4woj");b("Arbiter").inform("AppsDivebar/show-apps");new(b("AsyncRequest"))("/ajax/feed/apps/resize").setData({height:""+h,menu:!0}).setMethod("POST").send()},hideApps:function(){this._visible=!1,b("CSS").hide(b("$")("pagelet_canvas_nav_content")),b("CSS").hide(b("$")("apps_gripper")),b("Arbiter").inform("AppsDivebar/hide-apps"),new(b("AsyncRequest"))("/ajax/feed/apps/resize").setData({height:"1",menu:!0}).setMethod("POST").send()}};e.exports=a}),null);
__d("ChatSidebarDropdownConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SOUND:"sound",ADVANCED_SETTINGS:"advanced_settings",BLOCK_SETTINGS:"block_settings",TURN_OFF_DIALOG:"turn_off_dialog",CLOSE_ALL_TABS:"close_all_tabs",LOWER_ALL_TABS:"lower_all_tabs",TOGGLE_DISCOVER_BOTS:"toggle_discover_bots",SIDEBAR:"sidebar",HIDE_GROUPS:"hide_groups",ONLINE:"online",VIDEOCALL_ON:"videoon",VIDEOCALL_OFF:"videooff",PAUSE:"pause",SHOW_APPS:"show_apps",HIDE_APPS:"hide_apps",SHOW_TICKER:"show_ticker",HIDE_TICKER:"hide_ticker",HIDE_ADMINED_PAGES:"hide_admined_pages",HIDE_BUSINESSES:"hide_businesses",EMOJI_SETTINGS:"emoji_settings"});e.exports=a}),null);
__d("XChatEmojiSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/emoji_settings/",{__asyncDialog:{type:"Int"}})}),null);
__d("ChatSidebarDropdown.react",["cx","fbt","AppsDivebarDisplayController","Arbiter","AsyncRequest","Bootloader","ChatConfig","ChatOptions","ChatSidebarBotsActions","ChatSidebarBotsStore","ChatSidebarDropdownConstants","ChatVisibility","ContextualDialogArrow","ContextualLayerAutoFlip","ConversationNubUtils","CurrentUser","FantaTabActions","FBRTCCallBlockingStore","LayerHideOnBlur","Link.react","LogHistory","MenuSeparator.react","PinnedConversationNubsConfig","PopoverMenu.react","PresencePrivacy","PresenceState","React","ReactXUIMenu","SidebarType","SubscriptionsHandler","TrackingNodes","URI","XChatEmojiSettingsController","emptyFunction","gkx","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("ChatSidebarBotsActions").module,k=b("ChatSidebarBotsStore").module,l=b("ReactXUIMenu").SelectableItem,m=b("ReactXUIMenu").SelectableMenu,n=b("ReactXUIMenu").Item,o=b("LogHistory").getInstance("blackbird");c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={appsVisible:b("AppsDivebarDisplayController").isVisible(),isConversationsEnabled:b("PinnedConversationNubsConfig").isEnabled,isDiscoverBotsHidden:k?k.getState().isHidden:!0,isOnline:b("ChatVisibility").isOnline(),isCallBlocked:b("FBRTCCallBlockingStore").getBlockingStatus(),pendingChange:!1},this.$7=function(a,b){a=b.item.getValue();b=b.item.isSelected&&b.item.isSelected();this.$4(a,!!b)}.bind(this),this.$23=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.startFunnel("WWW_PRESENCE_FUNNEL"),a.appendActionWithTag("WWW_PRESENCE_FUNNEL","click_gear",b("PresencePrivacy").getOnlinePolicyStr())},"ChatSidebarDropdown.react"),this.props.onShow&&this.props.onShow()}.bind(this),c}a.prototype.componentDidMount=function(){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps"],function(){this.setState({appsVisible:b("AppsDivebarDisplayController").isVisible()})}.bind(this)),b("PresencePrivacy").subscribe("privacy-user-presence-changed",function(){this.setState({isOnline:b("ChatVisibility").isOnline()})}.bind(this)),b("Arbiter").subscribe("buddylist/hide",function(){this.refs.menu.hidePopover()}.bind(this)),b("Arbiter").subscribe("sidebar/visibility",function(a,b){b||this.refs.menu.hidePopover()}.bind(this)),b("FBRTCCallBlockingStore").addListener(function(){this.setState({isCallBlocked:b("FBRTCCallBlockingStore").getBlockingStatus()})}.bind(this))),k&&this.$1.addSubscriptions(k.addListener(function(){this.setState({isDiscoverBotsHidden:k.getState().isHidden})}.bind(this))),b("PinnedConversationNubsConfig").userSettingsIsEnabled&&this.$1.addSubscriptions(b("Arbiter").subscribe(b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT,function(){this.setState({isConversationsEnabled:!1})}.bind(this)),b("Arbiter").subscribe(b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT,function(){this.setState({isConversationsEnabled:!0})}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$1&&this.$1.release()};a.prototype.$2=function(a,b){b=b?"sidebar_dropdown_visibility_error":"sidebar_dropdown_set_visibility";o.debug(b,JSON.stringify({action:a}))};a.prototype.$3=function(a,c){__p&&__p();if(this.state.pendingChange)return;this.setState({pendingChange:!0});var d={};d[a]=!c;b("ChatOptions").setSetting(a,!c,"mini_sidebar_menu");new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(function(a){return b("PresenceState").doSync(!0)}).setErrorHandler(function(){return b("ChatOptions").setSetting(a,c,"mini_sidebar_menu_error")}).setFinallyHandler(function(){return this.setState({pendingChange:!1})}.bind(this)).setData(d).setAllowCrossPageTransition(!0).send()};a.prototype.$4=function(a,c){__p&&__p();var d=!0;switch(a){case b("ChatSidebarDropdownConstants").SOUND:this.$3(a,c);break;case b("ChatSidebarDropdownConstants").ADVANCED_SETTINGS:case b("ChatSidebarDropdownConstants").TURN_OFF_DIALOG:this.$5();this.$2(a,!1);break;case b("ChatSidebarDropdownConstants").LOWER_ALL_TABS:b("FantaTabActions").minimizeAllTabs();break;case b("ChatSidebarDropdownConstants").CLOSE_ALL_TABS:b("FantaTabActions").closeAllTabs();this.$2(a,!1);break;case b("ChatSidebarDropdownConstants").HIDE_GROUPS:this.$3(a,c);break;case b("ChatSidebarDropdownConstants").TOGGLE_DISCOVER_BOTS:j&&j.saveSettings({isHidden:!this.state.isDiscoverBotsHidden});break;case b("ChatSidebarDropdownConstants").SIDEBAR:this.props.onToggleSidebar();d=!1;break;case b("ChatSidebarDropdownConstants").ONLINE:this.$6();this.state.isOnline?this.$2(a,!0):b("ChatVisibility").goOnline();break;case b("ChatSidebarDropdownConstants").VIDEOCALL_ON:b("FBRTCCallBlockingStore").turnOnVideoCalling();break;case b("ChatSidebarDropdownConstants").VIDEOCALL_OFF:break;case b("ChatSidebarDropdownConstants").PAUSE:break;case b("ChatSidebarDropdownConstants").SHOW_TICKER:b("Arbiter").inform("ChatSidebarDropdown/openTicker");break;case b("ChatSidebarDropdownConstants").HIDE_TICKER:b("Arbiter").inform("ChatSidebarDropdown/closeTicker");break;case b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT:b("ConversationNubUtils").turnConversationsOff();break;case b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT:b("ConversationNubUtils").turnConversationsOn();break;case b("ChatSidebarDropdownConstants").SHOW_APPS:b("AppsDivebarDisplayController").showApps();break;case b("ChatSidebarDropdownConstants").HIDE_APPS:b("AppsDivebarDisplayController").hideApps();break;case b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES:this.$3(a,c);break;case b("ChatSidebarDropdownConstants").HIDE_BUSINESSES:this.$3(a,c);break}d&&this.refs.menu&&this.refs.menu.hidePopover()};a.prototype.$8=function(){return b("React").createElement(l,{value:b("ChatSidebarDropdownConstants").SOUND,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").SOUND)},h._("Chat Sounds"))};a.prototype.$9=function(){var a=b("XChatEmojiSettingsController").getURIBuilder().getURI();return b("React").createElement(n,{href:a,rel:"dialog",value:b("ChatSidebarDropdownConstants").EMOJI_SETTINGS},h._("Emoji"))};a.prototype.$10=function(){return b("CurrentUser").isWorkUser()?null:b("React").createElement(n,{href:new(b("URI"))("/settings?tab=blocking"),value:b("ChatSidebarDropdownConstants").BLOCK_SETTINGS},h._("Block Settings"))};a.prototype.$11=function(){return b("React").createElement(n,{value:b("ChatSidebarDropdownConstants").LOWER_ALL_TABS},h._("Collapse All Chat Tabs"))};a.prototype.$12=function(){return b("React").createElement(n,{value:b("ChatSidebarDropdownConstants").CLOSE_ALL_TABS},h._("Close All Chat Tabs"))};a.prototype.$13=function(){return b("React").createElement(n,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").SIDEBAR},h._("Hide Sidebar"))};a.prototype.$14=function(){return this.props.sidebarType===b("SidebarType").BUDDYLIST_NUB||!b("ChatConfig").get("show_admined_pages")?null:b("React").createElement(l,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES)},h._("Hide Pages You Manage"))};a.prototype.$15=function(){return this.props.sidebarType===b("SidebarType").BUDDYLIST_NUB||!b("ChatConfig").get("show_businesses")?null:b("React").createElement(l,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").HIDE_BUSINESSES,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_BUSINESSES)},h._("Hide Pages to Contact"))};a.prototype.$16=function(){return this.props.sidebarType===b("SidebarType").BUDDYLIST_NUB?null:b("React").createElement(l,{value:b("ChatSidebarDropdownConstants").HIDE_GROUPS,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_GROUPS)},h._("Hide Groups"))};a.prototype.$17=function(){var a=b("ChatVisibility").isOnline(),c=a?new(b("URI"))("/ajax/chat/privacy/settings_dialog.php").addQueryData("dialog_type","turn_off_dialog"):"#",d="";b("gkx")("AT78v4PambQ_cdAE80SQ2u-PEF080LOtbyF0clYPG1BZ0oKWtBk3yYmPrq0iSUUgoNhwXsFBRIZTASSteonhNi4R")?d=a?h._("Turn Off Active Status"):h._("Turn on Active Status"):d=a?h._("Turn Off Chat"):h._("Turn On Chat");var e=a?b("ChatSidebarDropdownConstants").TURN_OFF_DIALOG:b("ChatSidebarDropdownConstants").ONLINE;return b("gkx")("AT4aq0gj3KFvuyn5ouzkcinNuxrDXZY6HPjnRXCVXzOigsSLEws96b2T0YYtUZg_IxPxKREPJvW4RS6GeFXjfiRr")&&this.props.sidebarType===b("SidebarType").BUDDYLIST&&!a?null:b("React").createElement(n,{href:c,rel:a?"dialog":"",value:e},d)};a.prototype.$18=function(){var a=this.state.isCallBlocked,c=a?"#":new(b("URI"))("/videocall/off/"),d=a?h._("Turn On Video\/Voice Calls"):h._("Turn Off Video\/Voice Calls"),e=a?b("ChatSidebarDropdownConstants").VIDEOCALL_ON:b("ChatSidebarDropdownConstants").VIDEOCALL_OFF;return b("React").createElement(n,{href:c,rel:a?"":"dialog",value:e},d)};a.prototype.$19=function(){var a=k?k.getState().bots:[];if(!j||a.length===0)return null;a=this.state.isDiscoverBotsHidden?h._("Show bot discovery"):h._("Hide bot discovery");return b("React").createElement(n,{value:b("ChatSidebarDropdownConstants").TOGGLE_DISCOVER_BOTS},a)};a.prototype.$20=function(){if(!b("PinnedConversationNubsConfig").userSettingsIsEnabled)return null;var a=this.state.isConversationsEnabled,c=a?h._("Turn Off Post Tabs"):h._("Turn On Post Tabs");a=a?b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT:b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT;return b("React").createElement(n,{value:a},c)};a.prototype.$21=function(){if(!b("ChatConfig").get("has_apps_option")||this.props.sidebarType!==b("SidebarType").SIDEBAR)return null;var a=this.state.appsVisible,c=a?h._("Hide Games"):h._("Show Games");a=a?b("ChatSidebarDropdownConstants").HIDE_APPS:b("ChatSidebarDropdownConstants").SHOW_APPS;return[b("React").createElement(b("MenuSeparator.react"),{key:"apps_separator"}),b("React").createElement(n,{value:a,key:"apps_menu"},c)]};a.prototype.$22=function(){return b("React").createElement(m,{className:"fbChatSidebarDropdown/PopoverMenu",multiple:!0,onItemClick:this.$7},this.$8(),this.$9(),this.$10(),b("React").createElement(b("MenuSeparator.react"),null),this.$11(),this.$12(),this.$19(),this.$13(),this.$14(),this.$15(),this.$16(),this.$17(),this.$18(),this.$20(),this.$21())};a.prototype.render=function(){var a=h._("Options"),c=b("joinClasses")(this.props.className,"_5qth _5vm9"+(b("ChatVisibility").isOnline()?"":" _5vma")),d=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.DROPDOWN_BUTTON);return b("React").createElement(b("PopoverMenu.react"),{alignh:"right",alignv:"top",className:c,layerBehaviors:[b("ContextualLayerAutoFlip"),b("ContextualDialogArrow"),b("LayerHideOnBlur")],menu:this.$22(),onHide:this.props.onHide,onShow:this.$23,ref:"menu"},b("React").createElement(b("Link.react"),{"aria-label":a,className:"_5vmb button","data-ft":d,"data-hover":"tooltip","data-tooltip-content":a,"data-tooltip-position":"below",href:"#"}))};a.prototype.$6=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.appendActionWithTag("WWW_PRESENCE_FUNNEL","sidebar_dropdown_turn_on_chat",b("PresencePrivacy").getOnlinePolicyStr()),a.endFunnel("WWW_PRESENCE_FUNNEL")},"ChatSidebarDropdown.react")};a.prototype.$5=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.appendActionWithTag("WWW_PRESENCE_FUNNEL","open_privacy_dialog",b("PresencePrivacy").getOnlinePolicyStr())},"ChatSidebarDropdown.react")};a.defaultProps={className:"",onHide:b("emptyFunction"),onShow:b("emptyFunction")};e.exports=a}),null);