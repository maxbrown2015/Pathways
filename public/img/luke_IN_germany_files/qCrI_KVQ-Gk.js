if (self.CavalryLogger) { CavalryLogger.start_js(["jKo56"]); }

__d("PagesManagerUserMessagePrompt",["ChatAppStore","ChatOpenTabEventLogger","ChatVisibility","FantaTabActions","MercuryIDs","MessengerDiscoveryEntryPoint","PagesLogger","PagesLoggerEventEnum","PagesLoggerEventTargetEnum","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=2e3,h={openTab:function(a,c,d){__p&&__p();c===void 0&&(c=b("MessengerDiscoveryEntryPoint").FB_PAGE_USER_MESSAGE_PROMPT);d===void 0&&(d=g);if(!b("ChatVisibility").isOnline())return;setTimeout(function(){if(b("ChatAppStore").getState().isInitialized)h._openTabAndLog(a,c);else var d=b("ChatAppStore").addListener(function(){b("ChatAppStore").getState().isInitialized&&(b("setImmediate")(function(){h._openTabAndLog(a,c)}),d.remove())})},d)},_openTabAndLog:function(a,c){var d=b("MercuryIDs").getThreadIDFromUserID(a);b("FantaTabActions").openTab(d,[c]);b("ChatOpenTabEventLogger").logUserAutoOpen(c,a);b("PagesLogger").log(a,b("PagesLoggerEventEnum").IMPRESSION,b("PagesLoggerEventTargetEnum").PAGE_MESSAGE_PROMPT,null,["pages_growth"],{})}};e.exports=h}),null);
__d("legacy:UIPagelet",["UIPagelet"],(function(a,b,c,d,e,f){a.UIPagelet=b("UIPagelet")}),3);