if (self.CavalryLogger) { CavalryLogger.start_js(["j8hp5"]); }

__d("MentorshipProgramSetThreadIDMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"SetThreadIDMentorshipProgramData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input",type:"SetThreadIDMentorshipProgramData!"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",operationKind:"mutation",name:"MentorshipProgramSetThreadIDMutation",id:"1314223065350302",text:null,metadata:{},fragment:{kind:"Fragment",name:"MentorshipProgramSetThreadIDMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"set_thread_id_mentorship_program",storageKey:null,args:b,concreteType:"SetThreadIdMentorshipProgramResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"mentorship_program",storageKey:null,args:null,concreteType:"MentorshipProgram",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"mentorship_message_thread",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c]}]}]}]},operation:{kind:"Operation",name:"MentorshipProgramSetThreadIDMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"set_thread_id_mentorship_program",storageKey:null,args:b,concreteType:"SetThreadIdMentorshipProgramResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"mentorship_program",storageKey:null,args:null,concreteType:"MentorshipProgram",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"mentorship_message_thread",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},c]},c]}]}]}}}();e.exports=a}),null);
__d("MentorshipChatButtonSpinnerPosition",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LEFT:0,RIGHT:1})}),null);
__d("MentorshipClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MentorshipClientLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MentorshipClientLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MentorshipClientLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppID=function(a){this.$1.appid=a;return this};a.prototype.setAppversion=function(a){this.$1.appversion=a;return this};a.prototype.setClientUserID=function(a){this.$1.client_userid=a;return this};a.prototype.setContainermodule=function(a){this.$1.containermodule=a;return this};a.prototype.setCountry=function(a){this.$1.country=a;return this};a.prototype.setDeviceid=function(a){this.$1.deviceid=a;return this};a.prototype.setError=function(a){this.$1.error=a;return this};a.prototype.setExplicitProgramID=function(a){this.$1.explicit_program_id=a;return this};a.prototype.setExtraClientData=function(a){this.$1.extra_client_data=a;return this};a.prototype.setGroupID=function(a){this.$1.group_id=a;return this};a.prototype.setIsemployee=function(a){this.$1.isemployee=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setSessionid=function(a){this.$1.sessionid=a;return this};c={appid:!0,appversion:!0,client_userid:!0,containermodule:!0,country:!0,deviceid:!0,error:!0,explicit_program_id:!0,extra_client_data:!0,group_id:!0,isemployee:!0,name:!0,sessionid:!0};e.exports=a}),null);
__d("MentorshipProgramSetThreadIDMutation",["RelayModern","MentorshipProgramSetThreadIDMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g=b("RelayModern").commitMutation;b("RelayModern").graphql;var h=function(){return b("MentorshipProgramSetThreadIDMutation.graphql")};function a(a,b,c){return g(a,{mutation:h,variables:{input:{actor_id:b.actorID,mentorship_program_id:b.programID,thread_id:b.threadID}},onCompleted:c&&c.onCompleted,onError:c&&c.onError})}e.exports={commit:a}}),null);
__d("MentorshipChatButton.react",["ix","cx","fbt","ChatOpenTab","CurrentUser","FantaTabActions","FDSButton.react","Image.react","MentorshipChatButtonSpinnerPosition","MentorshipClientTypedLogger","MentorshipProgramSetThreadIDMutation","MercuryIDs","React","RelayFBEnvironment","SimpleXUIDialog","XFacebookMessengerInboxController","XUISpinner.react","asset","goURI"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.state={threadID:this.props.threadID,isCreatingChat:!1},this.$3=function(){this.state.threadID?this.$2(this.props.groupID,this.state.threadID,this.props.participantID):this.$1(this.props.groupID,this.props.participantID,this.props.programID)}.bind(this),b}a.prototype.$1=function(a,c,d){__p&&__p();new(b("MentorshipClientTypedLogger"))().setName("mentorship_create_messenger_thread").setGroupID(a).setClientUserID(b("CurrentUser").getAccountID()).log();this.setState({isCreatingChat:!0});var e=b("CurrentUser").getAccountID();b("MentorshipProgramSetThreadIDMutation").commit(b("RelayFBEnvironment"),{actorID:e,programID:d,threadID:c},{onCompleted:function(d){__p&&__p();d=(d=d)!=null?(d=d.mentorship_program)!=null?(d=d.mentorship_message_thread)!=null?d.id:d:d:d;new(b("MentorshipClientTypedLogger"))().setName("mentorship_create_messenger_thread_success").setGroupID(a).setExtraClientData(JSON.stringify({thread_id:d})).setClientUserID(b("CurrentUser").getAccountID()).log();new(b("MentorshipClientTypedLogger"))().setName("mentorship_navigate_to_messenger").setGroupID(a).setExtraClientData(JSON.stringify({thread_id:d})).setClientUserID(b("CurrentUser").getAccountID()).log();if(!b("ChatOpenTab").canOpenTab()||!d){this.setState({isCreatingChat:!1});var e=b("XFacebookMessengerInboxController").getURIBuilder().setString("thread_key",d).getURI();b("goURI")(e,!0);return}b("FantaTabActions").openTab(b("MercuryIDs").getThreadIDFromUserID(c));this.setState({isCreatingChat:!1,threadID:d})}.bind(this),onError:function(){new(b("MentorshipClientTypedLogger"))().setName("mentorship_create_messenger_thread_failure").setGroupID(a).setClientUserID(b("CurrentUser").getAccountID()).log(),this.setState({isCreatingChat:!1}),b("SimpleXUIDialog").show(i._("A system issue prevented your conversation from being created. Please reload your page and try again."),i._("Conversation not created."))}.bind(this)})};a.prototype.$2=function(a,c,d){new(b("MentorshipClientTypedLogger"))().setName("mentorship_navigate_to_messenger").setGroupID(a).setExtraClientData(JSON.stringify({thread_id:c})).setClientUserID(b("CurrentUser").getAccountID()).log();if(!b("ChatOpenTab").canOpenTab()){a=b("XFacebookMessengerInboxController").getURIBuilder().setString("thread_key",c).getURI();b("goURI")(a,!0);return}b("FantaTabActions").openTab(b("MercuryIDs").getThreadIDFromUserID(d))};a.prototype.render=function(){var a=this.state.isCreatingChat,c=b("React").createElement(b("XUISpinner.react"),{size:"small",className:"_3wek"+(a?"":" _3wel")});return b("React").createElement("div",null,this.props.spinnerPosition===b("MentorshipChatButtonSpinnerPosition").LEFT?c:null,b("React").createElement(b("FDSButton.react"),{use:this.props.spinnerPosition===b("MentorshipChatButtonSpinnerPosition").LEFT?"default":"primary",label:i._("Message"),icon:this.props.spinnerPosition===b("MentorshipChatButtonSpinnerPosition").RIGHT?b("React").createElement(b("Image.react"),{src:g("481156")}):b("React").createElement(b("Image.react"),{src:g("501145")}),onClick:this.$3,isDisabled:a}),this.props.spinnerPosition===b("MentorshipChatButtonSpinnerPosition").RIGHT?c:null)};e.exports=a}),null);
__d("MentorshipContactProgramButton.react",["ix","fbt","ChatOpenTab","FantaTabActions","FDSButton.react","GroupView","Image.react","MercuryIDs","React","XFacebookMessengerInboxController","XGroupsController","asset","goURI"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(){__p&&__p();if(this.props.isGroup){var a=b("XGroupsController").getURIBuilder().setString("idorvanity",this.props.adminID).setEnum("view",b("GroupView").ADMINS).getURI();b("goURI")(a,!0);return}a=b("MercuryIDs").getThreadIDFromUserID(this.props.adminID);if(!b("ChatOpenTab").canOpenTab()){var c=b("XFacebookMessengerInboxController").getURIBuilder().setString("thread_key",a).getURI();b("goURI")(c,!0);return}b("FantaTabActions").openTab(a)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("FDSButton.react"),{label:h._("Contact"),icon:b("React").createElement(b("Image.react"),{src:g("374491")}),onClick:this.$1})};e.exports=a}),null);