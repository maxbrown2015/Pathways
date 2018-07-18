if (self.CavalryLogger) { CavalryLogger.start_js(["gPPsf"]); }

__d("P2PChatThreadBanner.react",["cx","ix","Image.react","Layout.react","P2PAPI","P2PLogger","P2PPaymentLoggerEvent","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("Layout.react").FillColumn,k=b("Layout.react").Column,l=new Set();c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=!1,this.log=function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:this.props.loggerEventFlow},c))}.bind(this),this.handleClick=function(a){a.stopPropagation(),this.props.onClick&&this.props.onClick(),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CHAT_THREAD_BANNER_CLICKED,{}),b("P2PAPI").incrementBannerDismissals(this.props.bannerType)}.bind(this),this.handleClose=function(a){a.stopPropagation(),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CHAT_THREAD_BANNER_DISMISSED,{}),b("P2PAPI").incrementBannerDismissals(this.props.bannerType)}.bind(this),this.hasRenderedSameBanner=function(){return!this.$1&&l.has(this.props.bannerType)}.bind(this),c}a.prototype.componentDidMount=function(){var a=this.props.bannerType;l.has(a)||(l.add(a),this.$1=!0,this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CHAT_THREAD_BANNER_VIEWED,{}),b("P2PAPI").incrementBannerViews(this.props.bannerType))};a.prototype.render=function(){var a,c;if(this.hasRenderedSameBanner())return null;this.props.bodyText&&(a=b("React").createElement("div",{className:"_1w2e"},this.props.bodyText));this.props.buttonText&&(c=b("React").createElement("a",{className:"_2hrk"},this.props.buttonText));return b("React").createElement("div",{className:"_1w2f",onClick:this.handleClick,role:"presentation"},b("React").createElement("div",{className:"_3jht",onClick:this.handleClose,role:"presentation"},b("React").createElement(b("Image.react"),{className:"_47dg",height:9,src:h("94353"),width:9})),b("React").createElement(b("Layout.react"),null,b("React").createElement(k,{className:"_1w2g"},b("React").createElement(b("Image.react"),{className:"_1w2h",height:15,src:h("94443"),width:15})),b("React").createElement(j,{className:"_1w2i"},b("React").createElement("div",{className:"_1w2j"+(a?" _1w2k":"")},this.props.titleText),a,c)))};a.propTypes={bannerType:c.string.isRequired,bodyText:c.string,buttonText:c.string,loggerEventFlow:c.string.isRequired,onClick:c.func,titleText:c.string.isRequired};e.exports=a}),null);
__d("P2PMessageSellerConfirmationDialog.react",["cx","fbt","ix","Image.react","P2PButton.react","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PListRow.react","P2PText.react","React","XUICloseButton.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement(b("P2PDialog.react"),{width:480},b("React").createElement(b("P2PDialogBody.react"),{className:"_4-ft"},b("React").createElement(b("XUICloseButton.react"),{className:"_4-fu",onClick:this.props.onCancel}),b("React").createElement(b("P2PListRow.react"),{offsetRight:16,offsetBottom:0},b("React").createElement(b("Image.react"),{height:100,src:i("94406"),width:105}),b("React").createElement("div",null,b("React").createElement(b("P2PText.react"),{className:"_3-94",size:"large",type:"primary",weight:"bold"},h._("Connect with the seller before you pay")),b("React").createElement(b("P2PText.react"),{size:"medium",type:"primary"},h._("Make sure that you discuss price and logistics with the seller before you send payment for this item."))))),b("React").createElement(b("P2PDialogFooter.react"),null,b("React").createElement(b("P2PButton.react"),{label:h._("Start Conversation"),onClick:this.props.onCancel}),b("React").createElement(b("P2PButton.react"),{label:h._("Continue to Pay"),onClick:this.props.onPay,use:"confirm"})))};function a(){j.apply(this,arguments)}a.propTypes={onCancel:c.func.isRequired,onPay:c.func.isRequired};e.exports=a}),null);
__d("P2PPlatformContextBannerShape",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=a.shape({shouldShowToBuyer:a.bool,shouldShowToSeller:a.bool,shouldShowPayNux:a.bool});e.exports=c}),null);
__d("P2PPlatformContextShippingOptionShape",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=a.shape({formattedShippingPrice:a.string,formattedSubtotal:a.string,formattedTax:a.string,formattedTotal:a.string,id:a.string,rawTotal:a.string,title:a.string});e.exports=c}),null);
__d("P2PPlatformContextShape",["P2PPlatformContextBannerShape","P2PPlatformContextProductItemShape","P2PPlatformContextShippingOptionShape","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=a.shape({id:a.string,banner:b("P2PPlatformContextBannerShape"),buyerID:a.string,product:b("P2PPlatformContextProductItemShape"),sellerID:a.string,shippingOptions:a.arrayOf(b("P2PPlatformContextShippingOptionShape"))});e.exports=c}),null);
__d("P2PUserEligibilityStore",["EventEmitter","MercuryIDs","P2PActionConstants","P2PAPI","P2PDispatcher","P2PGKValues"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){g.constructor.call(this),h={},b("P2PDispatcher").register(this.onEventDispatched.bind(this))}a.prototype.onEventDispatched=function(a){var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").USER_ELIGIBILITY_UDPATED:this.handleEligibilityUpdated(c);this.emit("change");break}};a.prototype.getEligibilityByUserIDs=function(a){var c=[],d,e,f={};for(var g=0;g<a.length;g++)e=a[g],d=h[e],d===undefined&&(h[e]=null,c.push(e)),f[e]=h[e];b("P2PGKValues").P2PEnabled&&c.length&&b("P2PAPI").getUserEligibility({userIDs:c});return f};a.prototype.getEligibilityByUserID=function(a){var b=this.getEligibilityByUserIDs([a]);return b[a]};a.prototype.getEligibilityByThreadID=function(a){return this.getEligibilityByUserID(b("MercuryIDs").getUserIDFromThreadID(a))};a.prototype.handleEligibilityUpdated=function(a){for(var b=0;b<a.length;b++)h[a[b].user_id]=a[b].p2p_eligible};e.exports=new a()}),null);
__d("XC2CPayNUXBannerImpressionsUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/c2c/pay_nux_banner_impressions/_update/",{})}),null);
__d("XGroupsReportToAdminController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/groups/mall/report_to_admin/",{post_id:{type:"FBID"},comment_id:{type:"FBID"}})}),null);
__d("P2PProductItemChatThreadBanner.react",["cx","fbt","ix","AsyncRequest","BackgroundImage.react","ContextualLayerAutoFlip","Image.react","Layout.react","LineClamp.react","Link.react","MercuryIDs","MercuryMessages","P2PActions","P2PAPI","P2PGKValues","P2PLogger","P2PLinkConstants","P2PMessageSellerConfirmationDialog.react","P2PPaymentLoggerEvent","P2PPaymentLoggerEventFlow","P2PPlatformContextShape","P2PPlatformContextStore","P2PUserEligibilityStore","PopoverMenu.react","ReactComponentWithPureRenderMixin","React","ReactLayeredComponentMixin_DEPRECATED","ReactXUIMenu","StoreAndPropBasedStateMixin","Tooltip.react","XC2CPayNUXBannerImpressionsUpdateController","XGroupsReportToAdminController","XUIAmbientNUX.react","XUIButton.react","XUIGrayText.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("Layout.react").Column,k=b("Layout.react").FillColumn,l=b("ReactXUIMenu").Item,m=!1,n=new Set();a=b("React").createClass({displayName:"P2PProductItemChatThreadBanner",mixins:[b("ReactLayeredComponentMixin_DEPRECATED"),b("ReactComponentWithPureRenderMixin"),b("StoreAndPropBasedStateMixin")(b("P2PUserEligibilityStore"))],propTypes:{platformContext:b("P2PPlatformContextShape").isRequired},getInitialState:function(){return{requestEnabled:b("P2PGKValues").P2PGroupCommerceRequestEnabled,showConfirmationDialog:!1,showNUX:!1}},statics:{calculateState:function(a){return{canSendToRecipient:b("P2PUserEligibilityStore").getEligibilityByThreadID(b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a.platformContext))}}},componentDidMount:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);this.handleShouldShowPayNUX();n.has(c)||(n.add(c),b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)?this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_SELLER_VIEWED):this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_BUYER_VIEWED))},componentDidUpdate:function(a,b){!b.canSendToRecipient&&this.state.canSendToRecipient&&this.handleShouldShowPayNUX()},log:function(a,c){var d={platform_logging_data:this.props.platformContext.product.loggingData};b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:b("P2PPaymentLoggerEventFlow").UI_FLOW_PLATFORM_BANNER},d,c))},handleShouldShowPayNUX:function(){var a=this.props.platformContext;a=!m&&this.shouldRenderPayButton()&&a.banner.shouldShowPayNux;a&&(this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_PAY_NUX_SHOWN),m=!0,this.setState({showNUX:!0}),new(b("AsyncRequest"))().setURI(b("XC2CPayNUXBannerImpressionsUpdateController").getURIBuilder().getURI()).setMethod("POST").send())},handleDismissClick:function(a){a.preventDefault();a=this.props.platformContext;b("P2PAPI").dismissPlatformContextBanner(a.id);b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)?this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_SELLER_HIDE_CLICKED):this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_BUYER_HIDE_CLICKED)},handleSoldClick:function(a){a.preventDefault(),b("P2PAPI").markSoldPlatformContextProductItem(this.props.platformContext.id),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_SOLD_CLICKED)},handleRequestClick:function(a){a.preventDefault(),this.openSendMoneyFlyoutRequestTab(),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_REQUEST_CLICKED)},hasNoMessagesFromSeller:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);c=b("MercuryMessages").get().getCurrentlyLoadedMessages(c);if(!c)return!0;var d=b("MercuryIDs").getParticipantIDFromUserID(a.sellerID);a=c.some(function(a){return a.author===d});return!a},handlePayClick:function(a){a.preventDefault(),this.hasNoMessagesFromSeller()?(this.setState({showConfirmationDialog:!0}),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_SHOWN)):this.openSendMoneyFlyout()},openSendMoneyFlyoutRequestTab:function(){var a=this.props.platformContext,c=a.product,d=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);b("P2PActions").chatSendViewOpened({amount:c.formattedAmount,memoText:c.name,openRequestTab:!0,platformData:{platformContextID:a.id,loggingData:c.loggingData},threadID:d})},openSendMoneyFlyout:function(){var a=this.props.platformContext,c=a.product,d=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);b("P2PActions").chatSendViewOpened({threadID:d,amount:c.formattedAmount,platformData:{platformContextID:a.id,loggingData:c.loggingData}});this.setState({showNUX:!1});this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_PAY_CLICKED)},handleImageClicked:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_IMAGE_CLICKED)},handleTitleClicked:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_TITLE_CLICKED)},renderMarkSold:function(){var a=this.props.platformContext,c;if(!a.product.isAvailable)return null;b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)&&(c=b("React").createElement(b("Link.react"),{href:"#",onClick:this.handleSoldClick},h._("Mark as Sold")));return c},renderPayButton:function(){if(!this.shouldRenderPayButton())return null;var a=b("React").createElement(b("XUIButton.react"),{label:h._("Pay"),onClick:this.handlePayClick,ref:"pay_button",use:"confirm"});this.state.showNUX||(a=b("React").createElement(b("Tooltip.react"),{alignH:"right",display:"block",tooltip:h._("You can confirm the amount next.")},a));return b("React").createElement("div",{className:this.isCompactMode()?"":"_3-8x"},a)},renderRequestButton:function(){return!this.shouldRenderRequestButton()?null:b("React").createElement(b("Link.react"),{className:"_f-n",href:"#",onClick:this.handleRequestClick},h._("Request Payment"))},shouldRenderPayButton:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").isViewerBuyerForPlatformContext(this.props.platformContext);return!!(this.state.canSendToRecipient&&a.product.isAvailable&&c&&a.product.rawAmount.amount>0)},shouldRenderSellerActionsRow:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a);return c&&a.product.isAvailable},shouldRenderRequestButton:function(){return!!(this.state.requestEnabled&&this.state.canSendToRecipient&&this.props.platformContext.product.rawAmount.amount>0)},getAmountText:function(){var a=this.props.platformContext;a=a.product;return a.rawAmount.amount>0?a.formattedAmount:h._("FREE")},renderAskingPriceRow:function(){var a=this.props.platformContext;a=a.product;if(a.isAvailable)return b("React").createElement(b("LineClamp.react"),{lines:1,lineHeight:16},b("React").createElement(b("XUIGrayText.react"),{shade:"light"},h._("Price: {price of the item}",[h._param("price of the item",this.getAmountText())])))},renderNameLine:function(){var a=this.props.platformContext;a=a.product;var c="dark",d;a.isAvailable||(c="light",d=h._("SOLD"));return b("React").createElement(b("Link.react"),{href:a.refURL||"#",onClick:this.handleTitleClicked},b("React").createElement(b("XUIGrayText.react"),{shade:c},d?"("+d+") ":null,a.name))},renderSellerActionsRow:function(){return!this.shouldRenderSellerActionsRow()?null:b("React").createElement("div",{className:"_f-o"},this.renderMarkSold(),this.renderRequestButton())},renderImageColumn:function(){var a=this.props.platformContext;a=a.product;return this.isCompactMode()?null:b("React").createElement(j,{className:"_3-90"},b("React").createElement("div",{className:"_5qnr"},b("React").createElement("div",{className:"_5qn-"},b("React").createElement(b("Link.react"),{href:a.refURL||"#",onClick:this.handleImageClicked},b("React").createElement(b("BackgroundImage.react"),{backgroundPosition:"50% 50%",backgroundSize:"cover",height:45,src:a.image,width:45})))))},renderPopoverMenu:function(){var a=this.props.platformContext;a=a.product;a=b("XGroupsReportToAdminController").getURIBuilder().setFBID("post_id",a.loggingData.post_id).getURI();a=b("React").createElement(b("ReactXUIMenu"),{className:"_1z1u"},b("React").createElement(l,{className:"_1z1_"},b("React").createElement("div",{onClick:this.handleDismissClick,role:"presentation"},h._("Hide from conversation"))),b("React").createElement(l,{ajaxify:a,rel:"async-post"},h._("Report to admin")),b("React").createElement(l,{href:b("P2PLinkConstants").helpCenterURI,target:"_blank"},h._("Learn more")));return b("React").createElement(b("PopoverMenu.react"),{alignh:"right",layerBehaviors:[b("ContextualLayerAutoFlip")],menu:a,className:"_3fqa"},b("React").createElement("div",{className:"_1z20"},b("React").createElement(b("Link.react"),{className:"_1z21",href:"#"})))},isCompactMode:function(){var a=this.props.platformContext;a=a.product;return!a.image||!a.isAvailable},onNUXCloseButtonClick:function(){this.setState({showNUX:!1})},renderLayers:function(){var a={};this.state.showNUX?a.ambientNUX=b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"left",contextRef:function(){return this.refs.pay_button}.bind(this),customwidth:234,onCloseButtonClick:this.onNUXCloseButtonClick,position:"above",shown:!0,width:"custom"},b("React").createElement("div",{className:"_3-95"},h._("You can pay for this item directly from your messages.")),b("React").createElement("div",null,b("React").createElement(b("Image.react"),{className:"_3fqb",height:14,src:i("94455"),width:10}),b("React").createElement("span",{className:"_3fqc"},h._("It's free and secure.")))):this.state.showConfirmationDialog&&(a.confirmationDialog=b("React").createElement(b("P2PMessageSellerConfirmationDialog.react"),{onCancel:function(){this.setState({showConfirmationDialog:!1}),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_CANCEL_CLICK)}.bind(this),onPay:function(){this.setState({showConfirmationDialog:!1}),this.openSendMoneyFlyout(),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_PAY_CLICK)}.bind(this)}));return a},render:function(){return b("React").createElement("div",{className:"_319c"+(this.isCompactMode()?" _5qn_":"")},b("React").createElement(b("Layout.react"),null,this.renderImageColumn(),b("React").createElement(k,null,b("React").createElement("div",{className:"_5qo0"},b("React").createElement("div",{className:"_5qo1"},b("React").createElement(b("LineClamp.react"),{lines:1,lineHeight:16},this.renderNameLine()),this.renderAskingPriceRow(),this.renderSellerActionsRow()))),b("React").createElement(j,null,b("React").createElement("div",{className:"_1_68"},this.renderPopoverMenu(),this.renderPayButton()))))}});e.exports=a}),null);
__d("P2PSendMoneyNUXChatThreadBanner.react",["MercuryIDs","P2PActions","P2PChatThreadBanner.react","P2PUserEligibilityStore","React","StoreAndPropBasedStateMixin"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=b("React").createClass({displayName:"P2PSendMoneyNUXChatThreadBanner",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PUserEligibilityStore"))],propTypes:{bannerType:a.string.isRequired,bodyText:a.string,buttonText:a.string,loggerEventFlow:a.string.isRequired,openRequestTab:a.bool,threadID:a.string.isRequired,titleText:a.string.isRequired},getDefaultProps:function(){return{openRequestTab:!1}},statics:{calculateState:function(a){a=b("MercuryIDs").isGroupChat(a.threadID)||b("P2PUserEligibilityStore").getEligibilityByThreadID(a.threadID);return{isThreadEligible:a}}},handleClick:function(){b("P2PActions").chatSendViewOpened({openRequestTab:this.props.openRequestTab,threadID:this.props.threadID})},render:function(){return!this.state.isThreadEligible?null:b("React").createElement(b("P2PChatThreadBanner.react"),babelHelpers["extends"]({},this.props,{onClick:this.handleClick}))}});e.exports=c}),null);
__d("P2PRequestSenderNUXChatThreadBanner.react",["fbt","P2PBannerType","P2PPaymentLoggerEventFlow","P2PSendMoneyNUXChatThreadBanner.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement(b("P2PSendMoneyNUXChatThreadBanner.react"),{bannerType:b("P2PBannerType").REQUEST_SENDER_NUX,bodyText:g._("Get paid back for dinner, rent or anything else."),buttonText:g._("Get Started"),openRequestTab:!0,loggerEventFlow:b("P2PPaymentLoggerEventFlow").UI_FLOW_REQUEST_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:g._("You can now request money!")})};function a(){h.apply(this,arguments)}a.propTypes={threadID:c.string.isRequired};e.exports=a}),null);
__d("P2PSenderNUXChatThreadBanner.react",["fbt","P2PBannerType","P2PPaymentLoggerEventFlow","P2PSendMoneyNUXChatThreadBanner.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement(b("P2PSendMoneyNUXChatThreadBanner.react"),{bannerType:b("P2PBannerType").SENDER_NUX,bodyText:g._("It's free and secure."),buttonText:g._("Get Started"),loggerEventFlow:b("P2PPaymentLoggerEventFlow").UI_FLOW_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:g._("Now you can send money!")})};function a(){h.apply(this,arguments)}a.propTypes={threadID:c.string.isRequired};e.exports=a}),null);
__d("P2PChatThreadBannerContainer.react",["P2PBannerStore","P2PBannerType","P2PPlatformContextStore","P2PProductItemChatThreadBanner.react","P2PRequestSenderNUXChatThreadBanner.react","P2PSenderNUXChatThreadBanner.react","React","StoreAndPropBasedStateMixin"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"P2PChatThreadBannerContainer",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PBannerStore"),b("P2PPlatformContextStore"))],propTypes:{isVisible:a.bool,otherUserID:a.string,threadID:a.string},statics:{calculateState:function(a){return{productItemBannerShown:b("P2PPlatformContextStore").shouldShowBanner(a.otherUserID),requestSenderNUXBannerShown:b("P2PBannerStore").shouldShowBanner(b("P2PBannerType").REQUEST_SENDER_NUX),senderNUXBannerShown:b("P2PBannerStore").shouldShowBanner(b("P2PBannerType").SENDER_NUX)}}},renderRequestSenderNUXBanner:function(){return!this.props.threadID||!this.props.isVisible?null:b("React").createElement(b("P2PRequestSenderNUXChatThreadBanner.react"),{threadID:this.props.threadID})},renderSenderNUXBanner:function(){return!this.props.threadID||!this.props.isVisible?null:b("React").createElement(b("P2PSenderNUXChatThreadBanner.react"),{threadID:this.props.threadID})},renderProductItemBanner:function(){var a=this.props.otherUserID,c;a&&(c=b("P2PPlatformContextStore").getPlatformContextByOtherUserID(a));return!c?null:b("React").createElement(b("P2PProductItemChatThreadBanner.react"),{platformContext:c})},render:function(){var a;this.state.senderNUXBannerShown?a=this.renderSenderNUXBanner():this.state.requestSenderNUXBannerShown?a=this.renderRequestSenderNUXBanner():this.state.productItemBannerShown&&(a=this.renderProductItemBanner());return b("React").createElement("div",null,a)}});e.exports=c}),null);