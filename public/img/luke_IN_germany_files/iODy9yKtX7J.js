if (self.CavalryLogger) { CavalryLogger.start_js(["St+Uh"]); }

__d("BrowseFacebarHighlighter",["csx","CSS","NodeHighlighter"],(function(a,b,c,d,e,f,g){"use strict";a={};Object.assign(a,b("NodeHighlighter"),{getHighlightCandidates:function(){return["._53ad"]},isDiscardNode:function(a){return b("CSS").hasClass(a,"DefaultText")},createSegmentedRegex:function(a){a=this.escapeAndAddBidirectionalCharsToTokens(a);return"(^|\\s|\\b)("+a.join("|")+")"}});e.exports=a}),null);
__d("BrowseTopFiltersNone",["cx","CSS"],(function(a,b,c,d,e,f,g){a={init:function(){b("CSS").removeClass(document.body,"_4dik")}};e.exports=a}),null);
__d("ReshareSharesheetBootloader.react",["BootloadedComponent.react","JSResource","React","UFIShareLink.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="ufi_share_link_placeholder",i="ufi_share_link_loaded";c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={openOnInit:!1,focusOnInit:!1,interacted:!1},this.$1=null,this.$2=function(){this.$1=setTimeout(function(){return this.setState({openOnInit:!1,focusOnInit:!1,interacted:!0})}.bind(this),500)}.bind(this),this.$3=function(){clearTimeout(this.$1)}.bind(this),b}a.prototype.render=function(){__p&&__p();var a=this.state,c=a.openOnInit,d=a.focusOnInit;a=a.interacted;var e=this.props,f=e.endpoint,g=e.endpointData,j=e.onShow;e.onHide;e=e.openOnInitOverride;var k=b("React").createElement(b("UFIShareLink.react"),{href:"#","data-testid":h,onClick:function(){this.$3(),this.setState({interacted:!0,openOnInit:!0})}.bind(this),onFocus:function(){this.$3(),this.setState({interacted:!0,focusOnInit:!0})}.bind(this),onMouseOver:this.$2,onMouseOut:this.$3});return a||e?b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ReshareControllerContainer.react").__setRef("ReshareSharesheetBootloader.react"),bootloadPlaceholder:k,endpoint:f,endpointData:g,onShow:j,onHide:function(){this.setState({interacted:!1}),this.props.onHide&&this.props.onHide()}.bind(this),openOnInit:c||e,focusOnInit:d,testID:i}):k};e.exports=a}),null);
__d("PlatformDialog",["cx","CSS","DOMEvent","DOMEventListener"],(function(a,b,c,d,e,f,g){__p&&__p();var h;a.getInstance=function(){"use strict";return h};function a(a,c,d){"use strict";h=this,this.$1=a,this.$2=c,this.$3=!1,b("DOMEventListener").add(this.$1,"submit",function(c){if(this.$3){new(b("DOMEvent"))(c).kill();return}this.$3=!0;d&&b("CSS").addClass(a,"_32qa")}.bind(this))}a.prototype.getForm=function(){"use strict";return this.$1};a.prototype.getDisplay=function(){"use strict";return this.$2};a.prototype.hasBeenSubmitted=function(){"use strict";return this.$3};a.RESPONSE="platform/dialog/response";e.exports=a}),null);
__d("TypeaheadFacepile",["DOM"],(function(a,b,c,d,e,f){function a(){}a.render=function(a){var c=[b("DOM").create("span",{className:"splitpic leftpic"},[b("DOM").create("img",{alt:"",src:a[0]})]),b("DOM").create("span",{className:"splitpic"+(a[2]?" toppic":"")},[b("DOM").create("img",{alt:"",src:a[1]})])];a[2]&&c.push(b("DOM").create("span",{className:"splitpic bottompic"},[b("DOM").create("img",{alt:"",src:a[2]})]));return b("DOM").create("span",{className:"splitpics clearfix"},c)};e.exports=a}),null);
__d("Popup",[],(function(a,b,c,d,e,f){a={open:function(a,b,c,d){var e=document.body,f="screenX"in window?window.screenX:window.screenLeft,g="screenY"in window?window.screenY:window.screenTop,h="outerWidth"in window?window.outerWidth:e.clientWidth;e="outerHeight"in window?window.outerHeight:e.clientHeight-22;f=Math.floor(f+(h-b)/2);h=Math.floor(g+(e-c)/2.5);g=["width="+b,"height="+c,"left="+f,"top="+h,"scrollbars"];return window.open(a,d||"_blank",g.join(","))}};e.exports=a}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function(a,b,c,d,e,f){__p&&__p();var g={_opts:{allowShrink:!0,strategy:"vector",timeout:100,widthElement:null},init:function(a){Object.assign(g._opts,a),setInterval(g._resizeCheck,g._opts.timeout)},_resizeCheck:function(){__p&&__p();var a=b("getViewportDimensions")(),c=g._getDocumentSize(),d=b("Layer").getTopmostLayer();if(d){d=d.getRoot().firstChild;var e=b("DOMDimensions").getElementDimensions(d);e.height+=b("DOMDimensions").measureElementBox(d,"height",!0,!0,!0);e.width+=b("DOMDimensions").measureElementBox(d,"width",!0,!0,!0);c.height=Math.max(c.height,e.height);c.width=Math.max(c.width,e.width)}d=c.height-a.height;e=c.width-a.width;e<0&&!g._opts.widthElement&&(e=0);e=e>1?e:0;!g._opts.allowShrink&&d<0&&(d=0);if(d||e)try{window.console&&window.console.firebug&&!1,window.resizeBy(e,d),e&&window.moveBy(e/-2,0)}catch(a){}},_getDocumentSize:function(){var c=b("DOMDimensions").getDocumentDimensions();g._opts.strategy==="offsetHeight"&&(c.height=document.body.offsetHeight);if(g._opts.widthElement){var d=b("DOMQuery").scry(document.body,g._opts.widthElement)[0];d&&(c.width=b("DOMDimensions").getElementDimensions(d).width)}d=a.Dialog;d&&d.max_bottom&&d.max_bottom>c.height&&(c.height=d.max_bottom);return c},open:function(a,c,d,e){return b("Popup").open(a,d,c,e)}};e.exports=g}),null);
__d("Typeahead",["ArbiterMixin","BehaviorsMixin","DataStore","DOM","Event","Parent","Run","Style","emptyFunction","ge","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(h,b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));g=c&&c.prototype;function h(a,c,d,e){"use strict";g.constructor.call(this),this.args={data:a,view:c,core:d},b("DataStore").set(e,"Typeahead",this),this.element=e}h.prototype.init=function(a){"use strict";this.init=b("emptyFunction"),this.getCore(),this.getView().setAccessibilityControlElement(this.getCore().getElement()),this.proxyEvents(),this.initBehaviors(a||[]),this.inform("init",this),this.data.bootstrap(),this.core.focus()};h.prototype.getData=function(){"use strict";if(!this.data){var a=this.args.data;this.data=a;this.data.init()}return this.data};h.prototype.getView=function(){"use strict";if(!this.view){var a=this.args.view,c=a.node||b("ge")(a.node_id);c||(c=b("DOM").create("div",{className:"uiTypeaheadView"}),b("DOM").appendContent(this.element,c));typeof a.ctor==="string"?this.view=new window[a.ctor](c,a.options||{}):this.view=new a.ctor(c,a.options||{});this.view.init();this.view.setTypeahead(this.element)}return this.view};h.prototype.getCore=function(){"use strict";if(!this.core){var a=this.args.core;typeof a.ctor==="string"?this.core=new window[a.ctor](a.options||{}):this.core=new a.ctor(a.options||{});this.core.init(this.getData(),this.getView(),this.getElement())}return this.core};h.prototype.getElement=function(){"use strict";return this.element};h.prototype.setHeight=function(a){"use strict";a!=="auto"&&(a+="px"),b("Style").set(this.element,"height",a)};h.prototype.swapData=function(a){"use strict";return this.$Typeahead1(a,!0)};h.prototype.swapDataNoCoreReset=function(a){"use strict";return this.$Typeahead1(a,!1)};h.prototype.$Typeahead1=function(a,b){"use strict";var c=this.core;this.data=this.args.data=a;a.init();c&&(c.data=a,c.initData(),b&&c.reset(),this.proxyEvents());a.bootstrap();return a};h.prototype.proxyEvents=function(){"use strict";[this.data,this.view,this.core].forEach(function(a){a.subscribe(a.events,this.inform.bind(this))},this)};h.prototype.initBehaviors=function(c){"use strict";c.forEach(function(c){typeof c==="string"?a.TypeaheadBehaviors&&a.TypeaheadBehaviors[c]?a.TypeaheadBehaviors[c](this):b("Run").onLoad(function(){a.TypeaheadBehaviors&&(a.TypeaheadBehaviors[c]||b("emptyFunction"))(this)}.bind(this)):this.enableBehavior(c)},this)};h.getInstance=function(a){"use strict";a=b("Parent").byClass(a,"uiTypeahead");return a?b("DataStore").get(a,"Typeahead"):null};h.initNow=function(a,b,c){"use strict";c&&c.init(a),a.init(b)};h.init=function(a,c,d,e){"use strict";b("DOM").isNodeOfType(a,["input","textarea"])||(a=b("DOM").scry(a,"input")[0]||b("DOM").scry(a,"textarea")[0]);var f=!1;try{f=document.activeElement===a}catch(a){}if(f)h.initNow(c,d,e);else var g=b("Event").listen(a,"focus",function(){h.initNow(c,d,e),g.remove()})};e.exports=h}),null);
__d("BasicTypeaheadRenderer",["BadgeHelper","DOM"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c=[];a.icon&&c.push(b("DOM").create("img",{alt:"",src:a.icon}));var d=a.debug_info;d&&c.push(b("DOM").create("span",{className:"debugInfo"},d));if(a.text){d=[a.text];a.is_verified&&d.push(b("BadgeHelper").renderBadge("xsmall","verified"));c.push(b("DOM").create("span",{className:"text"},d))}if(a.subtext){d=[a.subtext];c.push(b("DOM").create("span",{className:"subtext"},d))}d=b("DOM").create("li",{className:a.type||""},c);a.text&&(d.setAttribute("title",a.text),d.setAttribute("aria-label",a.text));return d}a.className="basic";e.exports=a}),null);
__d("createIxElement",["invariant","DOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c){__p&&__p();var d="img";a.sprited||a.uri||g(0);if(a.sprited){d=b("joinClasses")(d,a.spriteMapCssClass,a.spriteCssClass);var e=b("DOM").create("i",{className:d});c!=null&&b("DOM").setContent(e,b("DOM").create("u",null,c));return e}e=b("DOM").create("img",{className:d,src:a.uri});c!=null&&e.setAttribute("alt",c);a.width&&e.setAttribute("width",a.width);a.height&&e.setAttribute("height",a.height);return e}e.exports=a}),null);
__d("TypeaheadView",["ix","ArbiterMixin","BasicTypeaheadRenderer","CSS","DOM","Event","Parent","$","createIxElement","emptyFunction","getElementText","getOrCreateDOMID","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h;d=babelHelpers.inherits(c,b("mixin")(b("ArbiterMixin")));h=d&&d.prototype;function c(a,c){"use strict";h.constructor.call(this),this.element=this.content=b("$").fromIDOrElement(a),Object.assign(this,c)}c.prototype.init=function(){"use strict";this.init=b("emptyFunction"),this.initializeEvents(),this.reset()};c.prototype.initializeEvents=function(){"use strict";b("Event").listen(this.element,{mouseup:this.mouseup.bind(this),mouseover:this.mouseover.bind(this)})};c.prototype.setTypeahead=function(a){"use strict";this.typeahead=a};c.prototype.setAccessibilityControlElement=function(a){"use strict";this.accessibilityElement=a};c.prototype.getElement=function(){"use strict";return this.element};c.prototype.mouseup=function(event){"use strict";event.button!=2&&(this.select(!0),event.prevent())};c.prototype.mouseover=function(event){"use strict";if(this.ignoreMouseover){this.ignoreMouseover=!1;return}this.visible&&this.highlight(this.getIndex(event))};c.prototype.reset=function(a){"use strict";a||(this.disableAutoSelect=!1);this.index=-1;this.items=[];this.results=[];this.value="";this.content.innerHTML="";this.inform("reset");return this};c.prototype.getIndex=function(event){"use strict";return this.items.indexOf(b("Parent").byTag(event.getTarget(),"li"))};c.prototype.getSelection=function(){"use strict";var a=this.results[this.index]||null;return this.visible?a:null};c.prototype.isEmpty=function(){"use strict";return!this.results.length};c.prototype.isVisible=function(){"use strict";return!!this.visible};c.prototype.show=function(){"use strict";b("CSS").show(this.element);this.results&&this.results.length&&(this.autoSelect&&this.accessibilityElement&&this.selected&&this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(this.selected)));this.accessibilityElement&&this.accessibilityElement.setAttribute("aria-expanded","true");this.visible=!0;return this};c.prototype.hide=function(){"use strict";b("CSS").hide(this.element);this.accessibilityElement&&(this.accessibilityElement.setAttribute("aria-expanded","false"),this.accessibilityElement.removeAttribute("aria-activedescendant"));this.visible=!1;return this};c.prototype.render=function(a,c,d){"use strict";__p&&__p();this.value=a;if(!c.length){this.accessibilityElement&&this.accessibilityElement.removeAttribute("aria-activedescendant");this.reset(!0);return}a={results:c,value:a};this.inform("beforeRender",a);c=a.results;a=(!this.value||d)&&this.index!==-1?this.index:this.getDefaultIndex(c);this.results=c;b("DOM").setContent(this.content,this.buildResults(c));this.items=this.getItems();this.highlight(a,!1);this.inform("render",this.results)};c.prototype.getItems=function(){"use strict";return b("DOM").scry(this.content,"li")};c.prototype.buildResults=function(c){"use strict";__p&&__p();var d,e=null;typeof this.renderer==="function"?(d=this.renderer,e=this.renderer.className||""):(d=a.TypeaheadRenderers[this.renderer],e=this.renderer);d=d.bind(this);c=c.map(function(a,b){a=a.node||d(a,b);a.setAttribute("role","option");return a});e=b("DOM").create("ul",{className:e,id:"typeahead_list_"+(this.typeahead?b("getOrCreateDOMID")(this.typeahead):b("getOrCreateDOMID")(this.element))},c);e.setAttribute("role","listbox");return e};c.prototype.showLoadingIndicator=function(){"use strict";var a=b("createIxElement")(g("85428"));a=b("DOM").create("li",{className:"typeaheadViewInternalLoading"},a);a=b("DOM").create("ul",{role:"listbox"},a);b("DOM").setContent(this.content,a)};c.prototype.getDefaultIndex=function(){"use strict";var a=this.autoSelect&&!this.disableAutoSelect;return this.index<0&&!a?-1:0};c.prototype.next=function(){"use strict";this.highlight(this.index+1),this.inform("next",this.selected)};c.prototype.prev=function(){"use strict";this.highlight(this.index-1),this.inform("prev",this.selected)};c.prototype.getItemText=function(a){"use strict";var c="";a&&(c=a.getAttribute("aria-label"),c||(c=b("getElementText")(a),a.setAttribute("aria-label",c)));return c};c.prototype.setIsViewingSelectedItems=function(a){"use strict";this.viewingSelected=a;return this};c.prototype.getIsViewingSelectedItems=function(){"use strict";return!!this.viewingSelected};c.prototype.highlight=function(a,c){"use strict";this.selected&&(b("CSS").removeClass(this.selected,"selected"),this.selected.setAttribute("aria-selected","false")),a>this.items.length-1?a=-1:a<-1&&(a=this.items.length-1),a>=0&&a<this.items.length?(this.selected=this.items[a],b("CSS").addClass(this.selected,"selected"),this.selected.setAttribute("aria-selected","true"),this.accessibilityElement&&setTimeout(function(){this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(this.selected))}.bind(this),0)):this.accessibilityElement&&this.accessibilityElement.removeAttribute("aria-activedescendant"),this.index=a,this.disableAutoSelect=a==-1,c!==!1&&this.inform("highlight",{index:a,selected:this.results[a],element:this.selected})};c.prototype.select=function(a){"use strict";if(this.headerIndex&&a)return;var b=this.index,c=this.results[b],d=this.element.getAttribute("id");if(c){var e=function(c){this.inform("select",{index:b,clicked:!!a,selected:c,id:d,query:this.value}),this.inform("afterSelect")}.bind(this);this.shouldValidateTypeaheadSelection(c)?this.validateTypeaheadSelection(c,e):e(c)}};c.prototype.shouldValidateTypeaheadSelection=function(a){"use strict";return!1};c.prototype.validateTypeaheadSelection=function(a,b){"use strict"};Object.assign(c.prototype,{events:["highlight","render","reset","select","beforeRender","next","prev"],renderer:b("BasicTypeaheadRenderer"),autoSelect:!1,ignoreMouseover:!1});e.exports=c}),null);
__d("FavIcon",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i;function j(){var a=b("DOM").scry(document.head,"link");a&&a.forEach(function(a){(a.rel.indexOf("icon")!=-1||a.rel.indexOf("shortcut icon")!=-1)&&b("DOM").remove(a)})}a={isToggledResource:function(){return i&&g.href===i?!0:!1},set:function(a){g&&b("DOM").remove(g),j(),g=b("DOM").create("link",{type:"image/x-icon",rel:"icon",href:a}),b("DOM").appendContent(b("DOM").find(document,"head"),g)},setToggleResources:function(a,b){g=document.querySelector('link[rel*=icon][href*=".ico"]');if(!g)return;h=b||g.href;i=a},toggle:function(){if(!g||!i)return;if(g.href===h){this.set(i);return}this.set(h)},toggleSet:function(a){if(!g||!i||!h)return;a=a?i:h;g.href!==a&&this.set(a)}};e.exports=a}),null);
__d("SimpleStructuredInput",["csx","Arbiter","ArbiterMixin","DataStore","DOM","Event","FacebarStructuredText","FlipDirection","Input","Parent","getActiveElement","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h;a=babelHelpers.inherits(i,b("mixin")(b("ArbiterMixin")));h=a&&a.prototype;function i(a){"use strict";h.constructor.call(this),this.$SimpleStructuredInput1=a,this.$SimpleStructuredInput2=b("DOM").find(a,"._1frb"),this.$SimpleStructuredInput3=b("DOM").find(a,"._5eay"),b("DataStore").set(a,"SimpleStructuredInput",this),this.init()}i.prototype.init=function(){"use strict";var a=function(event){return this.inform(event.type)}.bind(this);b("Event").listen(this.$SimpleStructuredInput2,"blur",a);b("Event").listen(this.$SimpleStructuredInput2,"focus",a);b("Event").listen(this.$SimpleStructuredInput2,"input",function(){b("FlipDirection").setDirection(this.$SimpleStructuredInput2,1),this.inform("change")}.bind(this));this.inform("init",null,b("Arbiter").BEHAVIOR_PERSISTENT)};i.prototype.setHint=function(a){"use strict";a=a.map(function(a){return a.text}).join("");var c=b("Input").getValue(this.$SimpleStructuredInput2);this.hasFocus()&&c.length>0&&a.toLowerCase().indexOf(c.toLowerCase())===0?b("Input").setValue(this.$SimpleStructuredInput3,c+a.slice(c.length)):b("Input").setValue(this.$SimpleStructuredInput3,"")};i.prototype.focus=function(){"use strict";this.$SimpleStructuredInput2.focus()};i.prototype.blur=function(){"use strict";this.$SimpleStructuredInput2.blur(),this.setHint([])};i.prototype.hasFocus=function(){"use strict";return b("DOM").contains(this.$SimpleStructuredInput1,b("getActiveElement")())};i.prototype.setStructure=function(a,c){c===void 0&&(c=!1);a=a.map(function(a){return a.text});b("Input").setValue(this.$SimpleStructuredInput2,a.join(""));c!==!0&&this.inform("change")};i.prototype.getStructure=function(){"use strict";return b("FacebarStructuredText").fromString(b("Input").getValue(this.$SimpleStructuredInput2)).toStruct()};i.prototype.getSelection=function(){"use strict";return{offset:this.$SimpleStructuredInput2.selectionStart,length:this.$SimpleStructuredInput2.selectionEnd-this.$SimpleStructuredInput2.selectionStart}};i.prototype.setSelection=function(a){"use strict";this.hasFocus()&&(this.$SimpleStructuredInput2.setSelectionRange(a.offset,a.offset+a.length),this.inform("select"))};i.prototype.isSelectionAtEnd=function(){"use strict";var a=this.getSelection().offset,c=b("Input").getValue(this.$SimpleStructuredInput2).length;return a>=c};i.prototype.selectAll=function(){"use strict";this.setSelection({offset:0,length:b("Input").getValue(this.$SimpleStructuredInput2).length})};i.getInstance=function(a){"use strict";a=b("Parent").bySelector(a,"._5eaz");if(!(a instanceof HTMLElement))throw new Error("No DOMElement structured input found using");return b("DataStore").get(a,"SimpleStructuredInput")||new i(a)};e.exports=i}),null);
__d("SilentDiscoComposerActionType",["keyMirror"],(function(a,b,c,d,e,f){e.exports=b("keyMirror")({SET_SILENT_DISCO_AUDIENCE:null,SET_SILENT_DISCO_FRIENDS:null})}),null);
__d("SilentDiscoAudienceType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CREATE_GROUP:"create_group",EXISTING_GROUP:"existing_group",STICKY_PRIVACY:"sticky_privacy"})}),null);
__d("SilentDiscoDialogComposerStore",["ReactComposerStoreBase","SilentDiscoAudienceType","SilentDiscoComposerActionType"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("ReactComposerStoreBase"));g=c&&c.prototype;function a(){"use strict";__p&&__p();var a;g.constructor.call(this,function(){return{silent_disco_friends:null,silent_disco_audience_id:null,silent_disco_audience_type:null}},function(c){switch(c.type){case b("SilentDiscoComposerActionType").SET_SILENT_DISCO_AUDIENCE:a&&a.$SilentDiscoDialogComposerStore2(c);break;case b("SilentDiscoComposerActionType").SET_SILENT_DISCO_FRIENDS:a&&a.$SilentDiscoDialogComposerStore3(c);break}});a=this;this.$SilentDiscoDialogComposerStore1={}}a.prototype.setShareNowURI=function(a,b){"use strict";this.$SilentDiscoDialogComposerStore1[a]=b};a.prototype.getShareNowURI=function(a){var b;return(b=this.$SilentDiscoDialogComposerStore1)!=null?b[a]:b};a.prototype.getSilentDiscoAudienceID=function(a){"use strict";return this.getComposerData(a).silentDiscoAudienceID};a.prototype.getSilentDiscoFriends=function(a){"use strict";return this.getComposerData(a).silentDiscoFriends};a.prototype.getSilentDiscoFriendNodes=function(a){"use strict";return this.getComposerData(a).silentDiscoFriendNodes};a.prototype.getSilentDiscoAudienceType=function(a){"use strict";return this.getComposerData(a).silentDiscoAudienceType};a.prototype.getSilentDiscoGeneratedName=function(a){"use strict";return this.getComposerData(a).generatedName};a.prototype.$SilentDiscoDialogComposerStore2=function(a){"use strict";var b=this.getComposerData(a.composerID);b.silentDiscoAudienceID=a.silentDiscoAudienceID;b.silentDiscoAudienceType=a.silentDiscoAudienceType;b.silentDiscoFriendNodes=a.silentDiscoFriendNodes;this.emitChange(a.composerID)};a.prototype.$SilentDiscoDialogComposerStore3=function(a){"use strict";var c=this.getComposerData(a.composerID);c.silentDiscoFriends=a.silentDiscoFriends;c.silentDiscoFriendNodes=a.silentDiscoFriendNodes;c.silentDiscoAudienceType=b("SilentDiscoAudienceType").CREATE_GROUP;c.generatedName=a.generatedName;this.emitChange(a.composerID)};e.exports=new a()}),null);
__d("CompactTypeaheadRenderer",["BadgeHelper","DOM","TypeaheadFacepile","emojiAndEmote","isSocialPlugin"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c=[];if(a.xhp)return b("DOM").create("li",{className:"raw"},a.xhp);var d=a.photos||a.photo;d&&(d instanceof Array?d=b("TypeaheadFacepile").render(d):d=b("DOM").create("img",{alt:"",src:d}),c.push(d));d=a.iconClass;if(d){d=b("DOM").create("span",{className:d});c.push(d)}d=a.debug_info;d&&c.push(b("DOM").create("span",{className:"debugInfo"},d));if(a.text){d=[a.text];b("isSocialPlugin")()||(d=b("emojiAndEmote")(a.text));a.is_verified?d.push(b("BadgeHelper").renderBadge("xsmall","verified")):a.is_trending_hashtag&&d.push(b("BadgeHelper").renderBadge("xsmall","trending"));c.push(b("DOM").create("span",{className:"text"},d))}d=a.subtext;var e=a.category;if(d||e){var f=[];d&&f.push(d);d&&e&&f.push(" \xb7 ");e&&f.push(e);c.push(b("DOM").create("span",{className:"subtext"},f))}d=b("DOM").create("li",{className:a.type||""},c);a.text&&(d.setAttribute("title",a.text),d.setAttribute("aria-label",a.text));return d}a.className="compact";e.exports=a}),null);
__d("ResharePrivacyStore",[],(function(a,b,c,d,e,f){"use strict";a={_audienceID:null,_audienceDisplayString:null,_iconSrc:null,initPrivacyOption:function(a,b,c){this._audienceID=a,this._iconSrc=b,this._audienceDisplayString=c},getAudienceDisplayString:function(){return this._audienceDisplayString},getAudienceID:function(){return this._audienceID},getIconSrc:function(){return this._iconSrc}};e.exports=a}),null);
__d("PlatformBaseVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions));c=location.pathname;d=c.substring(1,c.indexOf("/",1));var i=h.contains(d)?d:b("PlatformVersions").versions.UNVERSIONED;function j(a,c){if(c==b("PlatformVersions").versions.UNVERSIONED)return a;h.contains(c)||g(0);a.indexOf("/")!==0&&(a="/"+a);return"/"+c+a}function a(a){return h.contains(a.substring(1,a.indexOf("/",1)))?a.substring(a.indexOf("/",1)):a}f={addVersionToPath:j,getLatestVersion:function(){return b("PlatformVersions").LATEST},versionAwareURI:function(a){return a.setPath(j(a.getPath(),i))},versionAwarePath:function(a){return j(a,i)},getUnversionedPath:a};e.exports=f}),null);
__d("StaticContainer.react",["React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.shouldComponentUpdate=function(a){"use strict";return!!a.shouldUpdate};a.prototype.render=function(){"use strict";var a=this.props.children;return a===null||a===!1?null:b("React").Children.only(a)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);