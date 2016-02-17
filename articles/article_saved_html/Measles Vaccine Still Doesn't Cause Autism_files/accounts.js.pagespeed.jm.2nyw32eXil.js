window.vocativAccountsAuthenticateCallbackStack={};window.addEventListener('message',function(event){if(event.origin!=VocativAccounts.secureMessageOrigin){return;}var data=event.data;if(!data.vocativ_accounts_authenticate_account){return;}if(!data.vocativ_accounts_authenticate_result){return;}var account=data.vocativ_accounts_authenticate_account;if(!window.vocativAccountsAuthenticateCallbackStack[account]){return;}var result=data.vocativ_accounts_authenticate_result;if('success'==result){var callback=window.vocativAccountsAuthenticateCallbackStack[account].success;vocativUser.fetch({success:function(model){if(callback){callback(model);}}});}else if('failure'==result){var callback=window.vocativAccountsAuthenticateCallbackStack[account].failure;if(callback){callback();}}});(function(){var proxiedSync=Backbone.sync;Backbone.sync=function(method,model,options){options||(options={});if(!options.crossDomain){options.crossDomain=true;}if(!options.xhrFields){options.xhrFields={withCredentials:true};}return proxiedSync(method,model,options);};})();var VocativUser=Backbone.Model.extend({url:function(){return VocativAccounts.ajaxurl+'?action=vocativ-accounts-fetch-user';},isSignedIn:function(){return this.id;},is_authenticated:function(slug){return slug in this.get('authenticated');},hasBeenFetched:function(){return this.get('fetched')===true;},refetch:function(nonce,callback){var signedInBefore=this.isSignedIn();this.set({nonce:nonce})
this.fetch({success:function(model){if(callback){callback(model)}var signedInAfter=model.isSignedIn();if(signedInAfter&&!signedInBefore){model.trigger('signIn');}}});},authenticate:function(slug,callback,failure_callback){window.vocativAccountsAuthenticateCallbackStack[slug]={success:callback,failure:failure_callback};var authenticate_url=this.get('authentication_url')[slug]
var child_window=window.open(authenticate_url,'','width=500, height=500')},disconnect:function(slug,callback,failure_callback){var success=function(response){if(response.success){var nonce=response.data['nonce']
this.refetch(nonce,function(model){if(callback){callback(model)}})}else{VocativModals.error(response.data['error']);if(failure_callback){failure_callback();}}}
success=_.bind(success,this)
this.doAjax('vocativ-accounts-disconnect',{slug:slug},success)},doAjax:function(action,data,callback){data['action']=action
data['nonce']=this.get('nonce')
if(typeof vocativSecureAjax!='undefined'){vocativSecureAjax({url:VocativAccounts.ajaxurl,type:'POST',data:data},callback)}else{jQuery.ajax({url:ajaxurl,type:'POST',data:data,success:callback})}},nativeSignIn:function(data,callback){var success=function(response){if(response.success){var nonce=response.data['nonce']
this.refetch(nonce,function(model){if(callback)callback(model)})}else if(callback){callback(response)}}
success=_.bind(success,this)
this.doAjax('vocativ-accounts-native-sign-in',data,success)},nativeForgotPassword:function(data,callback){this.doAjax('vocativ-accounts-native-forgot-password',data,callback)},nativeChangePassword:function(data,callback){this.doAjax('vocativ-accounts-native-change-password',data,callback)},nativeChangeEmail:function(data,callback){var success=function(response){if(response.success){this.refetch(this.get('nonce'),function(model){if(callback)callback(model)})}else if(callback){callback(response)}}
success=_.bind(success,this)
this.doAjax('vocativ-accounts-native-change-email',data,success)},nativeSignUp:function(data,callback){var success=function(response){if(response.success){var nonce=response.data['nonce']
this.refetch(nonce,function(model){if(callback)callback(model)})}else if(callback){callback(response)}}
success=_.bind(success,this)
this.doAjax('vocativ-accounts-native-sign-up',data,success)},newsletterSubscribe:function(newsletterId,callback){var success=function(response){if(callback){callback(response)}}
success=_.bind(success,this)
this.doAjax('vocativ-accounts-newsletter-subscribe',{newsletter_id:newsletterId},success)},newsletterUnsubscribe:function(newsletterId,callback){var success=function(response){if(callback){callback(response)}}
success=_.bind(success,this)
this.doAjax('vocativ-accounts-newsletter-subscribe',{newsletter_id:newsletterId,unsubscribe:true},success)},signOut:function(){window.location=this.get('signout_url')}});var vocativUser=new VocativUser();if(VocativAccounts.userModelData){vocativUser.set(VocativAccounts.userModelData);}var VocativSigninModalView=Backbone.View.extend({events:{'click .vocativ-signin-modal a.tab-switch':'switchTab','click .vocativ-signin-modal-social a:not(.facebook)':'socialSignin','click .vocativ-signin-modal-social a.facebook':'facebookSignin','submit .vocativ-signin-modal-login-form':'nativeLogin','submit .vocativ-signin-modal-signup-form':'nativeSignup','submit .vocativ-signin-modal-forgot-form':'nativeForgotPassword','click .forgot-link':'switchTab'},initialize:function(options){this.options=options||{};this.tabData={};this.currentTab='signup';this.readOnlyMode=VocativAccounts.readOnlyMode;this.loading=false;if(!this.options.vent)this.options.vent=_.extend({},Backbone.Events);this.vent=this.options.vent;},render:function(){this.$el.html(Vocativ.Templates['user-signin']({currentTab:this.currentTab,readOnlyMode:this.readOnlyMode,loading:this.loading,errors:this.getTabData('errors')||[],formData:this.getTabData('formData')||{},successMessage:this.getTabData('successMessage')||null,l10n:VocativAccounts.l10n}));},saveTabData:function(k,v){var data=this.tabData[this.currentTab]||{}
data[k]=v
this.tabData[this.currentTab]=data},getTabData:function(k){return(this.tabData[this.currentTab]||{})[k]},saveFormData:function(){this.saveTabData('formData',this.getFormData(this.$('form')))},switchTab:function(e){e.preventDefault()
if(this.loading)return
var newTab=jQuery(e.target).data('tab')
if(newTab!=this.currentTab){this.saveFormData()
this.currentTab=newTab
this.render()
this.vent.trigger('tabOpen',this.currentTab);}},getWrappedCallback:function(callback,errorCallback){return _.bind(function(data){if(vocativUser.isSignedIn()){this.close();if(callback)callback();return;}if(_.isObject(data)){if(data.success){this.close();if(callback)callback();return;}if('data'in data&&'errors'in data.data){this.saveTabData('errors',data.data.errors);if(errorCallback)errorCallback();}}this.loading=false;this.render();},this);},socialSignin:function(e){e.preventDefault();var successEvent=null;var errorEvent=null;var submitEvent=null;if('login'==this.currentTab){successEvent='socialLoginSuccess';errorEvent='socialLoginError';submitEvent='socialLoginSubmit';}else{successEvent='socialSignupSuccess';errorEvent='socialSignupError';submitEvent='socialSignupSubmit';}var network=jQuery(e.target).data('network');if(typeof network=='undefined')network=jQuery(e.target).parent().data('network');var callback=_.bind(function(){this.vent.trigger(successEvent,network);this.vent.trigger('success');},this);var errorCallback=_.bind(function(){this.vent.trigger(errorEvent,network);},this);vocativUser.authenticate(network,this.getWrappedCallback(callback));this.vent.trigger(submitEvent,network);},facebookSignin:function(e){var self=this;if(typeof FB=='undefined'){jQuery.getScript('//connect.facebook.net/en_US/sdk.js',function(){FB.init({appId:VocativTheme.facebook_app_id,cookie:true,version:'v2.3'});FB.getLoginStatus(function(response){self.statusChangeCallback(response,e);});});}else{FB.getLoginStatus(function(response){self.statusChangeCallback(response,e);});}},statusChangeCallback:function(response,e,fromFBLogin){var self=this;if(response.status==='connected'){this.socialSignin(e);}else if(response.status==='not_authorized'){this.socialSignin(e);}else if(!fromFBLogin){FB.login(function(response){self.statusChangeCallback(response,e,true);},{scope:'public_profile,email'});}},getFormData:function(form){var data={}
_.each(jQuery(form).serializeArray(),function(item){data[item.name]=item.value})
return data},nativeLogin:function(e){e.preventDefault();if(this.loading)return;this.saveTabData('errors',null);this.saveFormData();this.loading=true;var data=this.getFormData(e.target);var callback=_.bind(function(){this.vent.trigger('nativeLoginSuccess');this.vent.trigger('success');},this);var errorCallback=_.bind(function(){this.vent.trigger('nativeLoginError');},this);vocativUser.nativeSignIn(data,this.getWrappedCallback(callback,errorCallback));this.vent.trigger('nativeLoginSubmit');this.render()},nativeSignup:function(e){e.preventDefault()
if(this.loading)return
this.saveTabData('errors',null)
this.saveFormData()
this.loading=true
var data=this.getFormData(e.target)
var callback=_.bind(function(){this.vent.trigger('nativeSignupSuccess');this.vent.trigger('success');},this);var errorCallback=_.bind(function(){this.vent.trigger('nativeSignupError');},this);vocativUser.nativeSignUp(data,this.getWrappedCallback(callback,errorCallback))
this.vent.trigger('nativeSignupSubmit');this.render();},nativeForgotPassword:function(e){e.preventDefault()
if(this.loading)return
this.saveTabData('errors',null)
this.saveTabData('successMessage',null)
this.saveFormData()
this.loading=true
var data=this.getFormData(e.target)
vocativUser.nativeForgotPassword(data,_.bind(function(response){if(_.isObject(response)){if(response.success){if('data'in response&&'message'in response.data){this.saveTabData('successMessage',response.data.message)
this.saveTabData('formData',{})}}if('data'in response&&'errors'in response.data){this.saveTabData('errors',response.data.errors)}}this.loading=false
this.render()},this))
this.render()},open:function(){this.$el.find('input[type!=hidden], textarea').val('');this.currentTab='signup';this.tabData={};this.render();VocativModals.goto('#'+this.el.id,{padding:0,wrapCSS:'vocativ-signin-modal-fancybox'});this.vent.trigger('open');this.vent.trigger('tabOpen',this.currentTab);},close:function(){VocativModals.close()
this.vent.trigger('close');}})
var vocativSigninModal=null
var vocativShowSigninModal=function(vent){if(!vocativSigninModal){var $el=jQuery('<div id="vocativ-signin-modal"></div>').hide()
jQuery('body').append($el)
vocativSigninModal=new VocativSigninModalView({el:$el.get(0)})
vocativSigninModal.render()}vocativSigninModal.vent=vent||_.extend({},Backbone.Events);vocativSigninModal.open()}
//# sourceMappingURL=http://www2.vocativ.com/content/themes/vocativ/js/accounts.js.pagespeed.sm.0UgVF2s_O2.map
