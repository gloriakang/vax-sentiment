var mod_pagespeed_lZ__K3Oweo = "jQuery(document).ready(function(){var Vocativ_Outbrain_Sidebar_View=Backbone.View.extend({initialize:function(){if(typeof OBR=='undefined'){this.showFallbackItems();}else{this.render();}},render:function(){var that=this;setTimeout(function(){if(!that.isOutbrainLoaded()){that.showFallbackItems();}},30*1000);jQuery('.vocativ-outbrain-container').each(function(n,e){var widget_id=jQuery(e).data('outbrain-widget-id');var ob_request={permalink:VocativOutbrainSidebar.outbrainUrl,widgetId:widget_id};OBR.extern.callRecs(ob_request,function(json){if(json.doc.length>0){var iterations=Math.min(4,json.doc.length);var items=[];for(var i=0;i<iterations;i++){items.push({'title':json.doc[i].content,'image':that.stripProtocol(json.doc[i].thumbnail.url),'url':that.stripProtocol(json.doc[i].orig_url),'source':json.doc[i].source_name});}template=Vocativ.Templates['sidebar-outbrain-items']({items:items});}jQuery(e).find('.outbrain-items').html(template);});});},stripProtocol:function(url){return'//'+url.replace(/.*?:\\/\\//g,\"\");},isOutbrainLoaded:function(){return jQuery('.rcol .vocativ-outbrain-container .outbrain-items .article').length>0;},showFallbackItems:function(){jQuery('.outbrain-items').hide();jQuery('.fallback-items').show();}});new Vocativ_Outbrain_Sidebar_View({el:jQuery('.outbrain-items').get(0)});});";
var mod_pagespeed_0OperMJzCE = "this[\"Vocativ\"]=this[\"Vocativ\"]||{};this[\"Vocativ\"][\"Templates\"]=this[\"Vocativ\"][\"Templates\"]||{};this[\"Vocativ\"][\"Templates\"][\"comment-social-auth-incomplete\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div>\\n\\t<span class=\"h3\">'+__e(l10n.connect_to_share)+'</span>\\n\\t<div class=\"social-auth-incomplete\"><form>\\n\\t\\t';_.each(networkInfo,function(info){;__p+='\\n\\t\\t';if(info['authenticated']){;__p+='\\n\\t\\t\\t<div class=\"network-connect active\">\\n\\t\\t\\t\\t<span class=\"icon\"><i class=\"'+((__t=(info['iconClass']))==null?'':__t)+'\"></i></span>\\n\\t\\t\\t\\t<span class=\"label\"><i class=\"fa fa-check\"></i></span>\\n\\t\\t\\t</div>\\n\\t\\t\\t';if(info['extendedInterfaceRequired']){;__p+='\\n\\t\\t\\t\\t<div class=\"extended-interface\" data-network=\"'+((__t=(info['network']))==null?'':__t)+'\">\\n\\t\\t\\t\\t';if(info['extendedInterface']){;__p+='\\n\\t\\t\\t\\t\\t';if(typeof info['extendedInterface']=='object'){;__p+='\\n\\t\\t\\t\\t\\t\\t\u003c!-- insert object here \u002d->\\n\\t\\t\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t\\t\\t\\t'+((__t=(info['extendedInterface']))==null?'':__t)+'\\n\\t\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t\\t\\t'+__e(l10n.loading)+'\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t';};__p+='\\n\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t<div class=\"network-connect inactive\" data-network=\"'+((__t=(info['network']))==null?'':__t)+'\">\\n\\t\\t\\t\\t<a href=\"#\">\\n\\t\\t\\t\\t\\t<span class=\"icon\"><i class=\"'+((__t=(info['iconClass']))==null?'':__t)+'\"></i></span>\\n\\t\\t\\t\\t\\t<span class=\"label\">'+__e(l10n.connect_now)+'</span>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t\\t';};__p+='\\n\\t\\t';});__p+='\\n\\t\\t<div> \\n\\t\\t\\t<button class=\"continue\">'+__e(l10n.continue)+'</button>\\n\\t\\t\\t<span class=\"error-message submit-error\">'+__e(l10n.please_fix_errors)+'</span>\\n\\t\\t</div>\\n\\t</form></div>\\n</div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"gallery-expanded\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"vocativ-gallery-lightbox';if(singleton){;__p+=' singleton';};__p+='\">\\n\\t<div class=\"gallery-frame\">\\n\\t\\t<div class=\"control-panel-top\">\\n\\t\\t\\t<div class=\"wrap cf\">\\n\\t\\t\\t\\t<div class=\"control-panel-top-sharing share-article-social\">\\n\\t\\t\\t\\t\\t<ul class=\"share-icon-list cf\">\\n\\t\\t\\t\\t\\t\\t<li data-share-type=\"facebook\" title=\"Share on Facebook\" class=\"facebook\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\"share-icon\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<i class=\"fa fa-facebook\"></i>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t<li data-share-type=\"twitter\" title=\"Share on Twitter\" class=\"twitter\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\"share-icon\"><i class=\"fa fa-twitter\"></i></div>\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\"gallery-top-controls\">\\t\\t\\t\\n\\t\\t\\t\\t\\t<a class=\"close close-gallery\" href=\"#\">\\n\\t\\t\\t\\t\\t\\t<i class=\"fa fa-times\"></i>\\n\\t\\t\\t\\t\\t\\t<span>Close</span>\\n\\t\\t\\t\\t\\t</a>\\t\\t\\t\\n\\t\\t\\t\\t\\t<a class=\"enlarge\" title=\"Enlarge Photo\">\\n\\t\\t\\t\\t\\t\\t<i class=\"fa fa-search-plus\"></i>\\n\\t\\t\\t\\t\\t\\t<span>Enlarge Photo</span>\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\"slide-view\"></div>\\n\\t\\t';if(!singleton){;__p+='\\n\\t\\t<div class=\"thumb-view\"></div>\\n\\t\\t';};__p+='\\n\\t</div>\\n</div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"gallery-post-watch\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<h3>'+((__t=(l10n.more_photos))==null?'':__t)+'</h3>\\n<a class=\"replay\" href=\"#\">\\n\\t<i class=\"fa fa-refresh\"></i>\\n\\t<span>'+((__t=(l10n.replay))==null?'':__t)+'</span>\\n</a> \\n<ul class=\"post-watch-galleries\">\\n';for(i=0;i<galleries.length;i++){;__p+='\\n\\t<li>\\n\\t\\t<a class=\"post-watch-gallery\" href=\"'+__e(galleries[i].get('url'))+'\" data-id=\"'+__e(galleries[i].id)+'\">\\n\\t\\t\\t<span class=\"image-wrapper\">\\n\\t\\t\\t\\t'+((__t=(galleries[i].get('recirc_image')))==null?'':__t)+'\\n\\t\\t\\t</span>\\n\\t\\t\\t<span class=\"title\">'+__e(galleries[i].get('recirc_title'))+'</span>\\n\\t\\t</a>\\n\\t</li>\\n';};__p+='\\n</ul>';}return __p};this[\"Vocativ\"][\"Templates\"][\"gallery-slide\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"slide-gallery\">\\n\\t<div class=\"image-container loading\">\\n\\t\\t<div class=\"loading-indicator\"><i class=\"fa fa-spin fa-spinner\"/></div>\\n\\t\\t<div class=\"image-wrapper\">\\n\\t\\t\\t<img src=\"'+__e(url)+'\"></img>\\n\\t\\t\\t';if(!singleton){;__p+='\\n\\t\\t\\t';if(pointer>0){;__p+='\\n\\t\\t\\t<a class=\"prev-link\"><div class=\"controls show-prev\"><i class=\"fa fa-angle-left\"></i></div></a>\\n\\t\\t\\t';};__p+='\\n\\t\\t\\t';if(hasPostWatch||(pointer+1)<numImages){;__p+='\\n\\t\\t\\t<a class=\"next-link\"><div class=\"controls show-next\"><i class=\"fa fa-angle-right\"></i></div></a>\\n\\t\\t\\t';};__p+='\\n\\t\\t\\t';};__p+='\\n\\t\\t</div>\\n\\t\\t<div class=\"image-info\">\\n\\t\\t\\t';if(!singleton){;__p+='\\n\\t\\t\\t\\t<div class=\"position\">'+__e(showPostWatch?numImages:pointer+1)+'/'+__e(numImages)+'</div>\\n\\t\\t\\t';};__p+='\\n\\t\\t\\t';if(caption){;__p+='\\n\\t\\t\\t\\t<h3 class=\"caption\">'+((__t=(caption))==null?'':__t)+'</h3>\\n\\t\\t\\t';};__p+='\\n\\t\\t\\t';if(credit){;__p+='\\n\\t\\t\\t\\t<div class=\"credit\">'+__e(credit)+'</div>\\n\\t\\t\\t';};__p+='\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\"post-watch\">\\n\\t\\t<div class=\"post-watch-inner\"></div>\\n\\t</div>\\n</div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"gallery-thumb\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"thumb-gallery\">\\n\\t<div class=\"images-wrapper\">\\n\\t\\t<div class=\"images-wrapper-inner\">\\n\\t\\t\\t<ul class=\"images\">\\n\\t\\t\\t';for(i=0;i<images.length;i++){;__p+='\\n\\t\\t\\t\\t<li class=\"image';if(i==pointer){;__p+=' active';};__p+='\" data-idx=\"'+__e(i)+'\"><img src=\"'+__e(images[i].small)+'\"/></li>\\n\\t\\t\\t';};__p+='\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t\\t<a class=\"prev-link\"><div class=\"show-prev\"><i class=\"fa fa-angle-left\"></i><span>'+((__t=(l10n.prev))==null?'':__t)+'</span></div></a>\\n\\t\\t<a class=\"next-link\"><div class=\"show-next\"><i class=\"fa fa-angle-right\"></i><span>'+((__t=(l10n.next))==null?'':__t)+'</span></div></a>\\n\\t</div>\\n</div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"gallery-zoom\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"zoom-gallery\">\\n\\t<div class=\"control-panel-top\">\\n\\t\\t<div class=\"wrap cf\">\\n\\t\\t\\t<div class=\"control-panel-top-sharing share-article-social\">\\n\\t\\t\\t\\t<ul class=\"share-icon-list cf\">\\n\\t\\t\\t\\t\\t\\t<li data-share-type=\"facebook\" title=\"Share on Facebook\" class=\"facebook\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\"share-icon\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<i class=\"fa fa-facebook\"></i>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t<li data-share-type=\"twitter\" title=\"Share on Twitter\" class=\"twitter\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\"share-icon\"><i class=\"fa fa-twitter\"></i></div>\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t</div>\\t\\t\\n\\t\\t\\t<div class=\"gallery-top-controls\">\\t\\t\\t\\n\\t\\t\\t\\t<a class=\"close close-gallery\" href=\"#\">\\n\\t\\t\\t\\t\\t<i class=\"fa fa-times\"></i>\\n\\t\\t\\t\\t\\t<span>Close</span>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t<a class=\"shrink\" title=\"Shrink Photo\">\\n\\t\\t\\t\\t\\t<i class=\"fa fa-search-minus\"></i>\\n\\t\\t\\t\\t\\t<span>Shrink Photo</span>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\"image-container loading\">\\n\\t\\t<div class=\"image-wrapper\">\\n\\t\\t\\t<img src=\"'+__e(url)+'\"></img>\\n\\t\\t\\t';if(caption||credit){;__p+='\\n\\t\\t\\t<div class=\"image-info\">\\n\\t\\t\\t\\t';if(!singleton){;__p+='\\n\\t\\t\\t\\t<div class=\"position\">'+__e(pointer+1)+'/'+__e(numImages)+'</div>\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t';if(caption){;__p+='<div class=\"caption\">'+((__t=(caption))==null?'':__t)+'</div>';};__p+='\\n\\t\\t\\t\\t';if(credit){;__p+='<div class=\"credit\">'+__e(credit)+'</div>';};__p+='\\n\\t\\t\\t</div>\\n\\t\\t\\t';};__p+='\\n\\t\\t</div>\\n\\t</div>\\n</div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"modal-error\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"modal error-modal\">\\n\\t';if(showHeader){;__p+='<h3>'+__e(l10n.error)+'</h3>';};__p+='\\n\\t<div>\\n\\t\\t<p class=\"error-message\">\\n\\t\\t\\t';_.each(messages,function(message){;__p+='\\n\\t\\t\\t<span>'+((__t=(message))==null?'':__t)+'</span>\\n\\t\\t\\t';});__p+='\\n\\t\\t</p>\\n\\t</div>\\n</div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"modal-please-wait\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape;with(obj){__p+='<div class=\"modal\"><span>'+__e(l10n.pleaseWait)+'</span>&nbsp;&nbsp;<i class=\"fa fa-spin fa-spinner\"></i></div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"modal-success\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"modal success-modal\">\\n\\t<h3>'+__e(l10n.success)+'</h3>\\n\\t<div>\\n\\t\\t<p class=\"success-message\">\\n\\t\\t\\t';_.each(messages,function(message){;__p+='\\n\\t\\t\\t<span>'+((__t=(message))==null?'':__t)+'</span>\\n\\t\\t\\t';});__p+='\\n\\t\\t</p>\\n\\t</div>\\n</div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"sidebar-outbrain-items\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){_.each(items,function(item){;__p+='\\n<div class=\"article\">\\n\\t<a href=\"'+((__t=(item.url))==null?'':__t)+'\">\\n\\t\\t<div class=\"image\">\\n\\t\\t\\t<img src=\"'+((__t=(item.image))==null?'':__t)+'\" />\\n\\t\\t</div>\\n\\t\\t<div class=\"title\">\\n\\t\\t\\t'+((__t=(item.title))==null?'':__t)+'\\n\\t\\t</div>\\n\\t</a>\\n</div>\\n';});__p+='\\n<div class=\"credit\">'+__e(VocativAccounts.l10n.recommendedBy)+' <span class=\"outbrain-logo\"></span></div>';}return __p};this[\"Vocativ\"][\"Templates\"][\"user-email-signup\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape;with(obj){__p+='<div class=\"home-post-item-template home-email-post-item\">\\n    <div class=\"home-email-post-item-container\">\\n        <p class=\"home-email-post-item-title\">'+__e(l10n.makeVocativComeToYou)+'</p>\\n\\n        <p class=\"welcome-message\">'+__e(l10n.shortNewsLetterSignUp)+'</p>\\n\\n        <form class=\"home-email-post-item-form\">\\n            <div class=\"form-row single-and-submit\">\\n                <input class=\"email-input\" type=\"text\" name=\"email\" placeholder=\"'+__e(l10n.email)+'\" />\\n                <p class=\"message\" style=\"display: none;\"></p>\\n                <input class=\"subscribe-input home-email-post-item-submit\" type=\"submit\" value=\"'+__e(l10n.subscribe)+'\" />\\n            </div>\\n\\n        </form>\\n    </div>\\n</div>\\n';}return __p};this[\"Vocativ\"][\"Templates\"][\"user-follow\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape;with(obj){__p+='<div class=\"home-post-item-template home-follow-post-item\">\\n    <div class=\"follow-title\"><span class=\"red-border-bottom\">'+__e(l10n.followVocativ)+'</span></div>\\n    <div class=\"vocativ-follow-container\">\\n        <a class=\"vocativ-follow-link vocativ-follow-link-facebook\" href=\"'+__e(facebook_url)+'\" target=\"_blank\" data-share-type=\"facebook\">\\n            <div class=\"vocativ-follow-div follow-facebook\">\\n                <div class=\"vocativ-follow-inner-div\">\\n                    <i class=\"fa fa-facebook fa-lg\"> </i> <span class=\"vocativ-follow-text\">'+__e(l10n.facebook)+'</span>\\n                </div>\\n            </div>\\n        </a>\\n        <a class=\"vocativ-follow-link vocativ-follow-link-twitter\" href=\"'+__e(twitter_url)+'\" target=\"_blank\" data-share-type=\"twitter\">\\n            <div class=\"vocativ-follow-div follow-twitter\">\\n                <div class=\"vocativ-follow-inner-div\">\\n                    <i class=\"fa fa-twitter fa-lg\"> </i> <span class=\"vocativ-follow-text\">'+__e(l10n.twitter)+'</span>\\n                </div>\\n            </div>\\n        </a>\\n        <a class=\"vocativ-follow-link vocativ-follow-link-youtube\" href=\"'+__e(youtube_url)+'\" target=\"_blank\" data-share-type=\"youtube\">\\n            <div class=\"vocativ-follow-div follow-youtube\">\\n                <div class=\"vocativ-follow-inner-div\">\\n                    <i class=\"fa fa-youtube-play fa-lg\"></i> <span class=\"vocativ-follow-text\">'+__e(l10n.youtube)+'</span>\\n                </div>\\n            </div>\\n        </a>\\n    </div>\\n</div>\\n';}return __p};this[\"Vocativ\"][\"Templates\"][\"user-profile\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"user-profile-column user-profile-column-primary\">\\n\\t<div class=\"user-profile-section user-profile-section-personal-info\">\\n\\t\\t<span class=\"user-profile-avatar';if(!user.get('avatar')){;__p+=((__t=(' empty'))==null?'':__t);};__p+='\">\\n\\t\\t<span class=\"user-profile-avatar-overlay\" id=\"user-profile-avatar-overlay\">'+__e(l10n.clickToChangeImage)+'</span>\\n\\t\\t\\t';if(user.get('avatar')){;__p+='<img src=\"'+__e(user.get('avatar'))+'\" />';};__p+='\\n\\t\\t</span>\\n\\t\\t<span class=\"user-profile-username\">'+((__t=(user.get('display_name')))==null?'':__t)+'</span>\\n\\t\\t<a href=\"#\" class=\"user-profile-change-password-link\">'+__e(l10n.changePassword)+'</a>\\n\\t\\t<a href=\"'+__e(l10n.logoutUrl)+'\" class=\"user-profile-signout\">'+__e(l10n.signout)+'</a>\\n\\t\\t<form class=\"user-profile-change-password-form\">\\n\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t<label for=\"user-profile-current-password\">'+__e(l10n.currentPassword)+'</label>\\n\\t\\t\\t\\t<input type=\"password\" name=\"current_password\" id=\"user-profile-current-password\" required />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t<label for=\"user-profile-new-password\">'+__e(l10n.newPassword)+'</label>\\n\\t\\t\\t\\t<input type=\"password\" name=\"new_password\" id=\"user-profile-new-password\" required />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t<label for=\"user-profile-confirm-password\">'+__e(l10n.confirmPassword)+'</label>\\n\\t\\t\\t\\t<input type=\"password\" name=\"confirm_password\" id=\"user-profile-confirm-password\" required />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\"submit\">\\n\\t\\t\\t\\t<button>'+__e(l10n.saveChanges)+'</button>\\n\\t\\t\\t</div>\\n\\t\\t</form>\\n\\t</div>\\n\\t<div class=\"user-profile-section user-profile-section-social\">\\n\\t\\t<div class=\"user-profile-section-primary\">\\n\\t\\t\\t<h2>'+__e(l10n.socialAccounts)+'</h2>\\n\\t\\t</div>\\n\\t\\t<div class=\"user-profile-section-secondary\">\\n\\t\\t\\t<div class=\"user-profile-social-primary\">\\n\\t\\t\\t\\t<span class=\"user-profile-social\">\\n\\t\\t\\t\\t\\t<i class=\"fa fa-twitter\"></i>\\n\\t\\t\\t\\t\\t';if(user.is_authenticated('twitter')){;__p+='\\n\\t\\t\\t\\t\\t'+((__t=('@'+user.get('screenname')['twitter']))==null?'':__t)+'\\n\\t\\t\\t\\t\\t<a data-slug=\"twitter\" class=\"social-disconnect\" title=\"'+__e(l10n.disconnectFromTwitter)+'\">&#10006;</a>\\n\\t\\t\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t\\t\\t<a data-slug=\"twitter\" class=\"social-connect\" title=\"'+__e(l10n.connectToTwitter)+'\">'+__e(l10n.connect)+'</a>\\n\\t\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<span class=\"user-profile-social\">\\n\\t\\t\\t\\t\\t<i class=\"fa fa-facebook\"></i>\\n\\t\\t\\t\\t\\t';if(user.is_authenticated('facebook')){;__p+='\\n\\t\\t\\t\\t\\t'+((__t=(user.get('screenname')['facebook']))==null?'':__t)+'\\n\\t\\t\\t\\t\\t<a data-slug=\"facebook\" class=\"social-disconnect\" title=\"'+__e(l10n.disconnectFromFacebook)+'\">&#10006;</a>\\n\\t\\t\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t\\t\\t<a data-slug=\"facebook\" class=\"social-connect\" title=\"'+__e(l10n.connectToFacebook)+'\">'+__e(l10n.connect)+'</a>\\n\\t\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<span class=\"user-profile-social-show-more\">\\n\\t\\t\\t\\t\\t<i class=\"fa fa-plus\"></i>\\n\\t\\t\\t\\t\\t'+__e(l10n.more)+'\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\"user-profile-social-expanded\">\\n\\t\\t\\t\\t<span class=\"user-profile-social\">\\n\\t\\t\\t\\t\\t<i class=\"fa fa-google-plus\"></i>\\n\\t\\t\\t\\t\\t';if(user.is_authenticated('gplus')){;__p+='\\n\\t\\t\\t\\t\\t'+((__t=(user.get('screenname')['gplus']))==null?'':__t)+'\\n\\t\\t\\t\\t\\t<a data-slug=\"gplus\" class=\"social-disconnect\" title=\"'+__e(l10n.disconnectFromGoogle)+'\">&#10006;</a>\\n\\t\\t\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t\\t\\t<a data-slug=\"gplus\" class=\"social-connect\" title=\"'+__e(l10n.connectToGoogle)+'\">'+__e(l10n.connect)+'</a>\\n\\t\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<span class=\"user-profile-social\">\\n\\t\\t\\t\\t\\t<i class=\"icon icon-reddit\"></i>\\n\\t\\t\\t\\t\\t';if(user.is_authenticated('reddit')){;__p+='\\n\\t\\t\\t\\t\\t'+((__t=(user.get('screenname')['reddit']))==null?'':__t)+'\\n\\t\\t\\t\\t\\t<a data-slug=\"reddit\" class=\"social-disconnect\" title=\"'+__e(l10n.disconnectFromReddit)+'\">&#10006;</a>\\n\\t\\t\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t\\t\\t<a data-slug=\"reddit\" class=\"social-connect\" title=\"'+__e(l10n.connectToReddit)+'\">'+__e(l10n.connect)+'</a>\\n\\t\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<span class=\"user-profile-social\">\\n\\t\\t\\t\\t\\t<i class=\"icon icon-tumblr\"></i>\\n\\t\\t\\t\\t\\t';if(user.is_authenticated('tumblr')){;__p+='\\n\\t\\t\\t\\t\\t'+((__t=(user.get('screenname')['tumblr']))==null?'':__t)+'\\n\\t\\t\\t\\t\\t<a data-slug=\"tumblr\" class=\"social-disconnect\" title=\"'+__e(l10n.disconnectFromTumblr)+'\">&#10006;</a>\\n\\t\\t\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t\\t\\t<a data-slug=\"tumblr\" class=\"social-connect\" title=\"'+__e(l10n.connectToTumblr)+'\">'+__e(l10n.connect)+'</a>\\n\\t\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<span class=\"user-profile-social-show-less\">\\n\\t\\t\\t\\t\\t<i class=\"fa fa-minus\"></i>\\n\\t\\t\\t\\t\\t'+__e(l10n.less)+'\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n<div class=\"user-profile-column user-profile-column-secondary\">\\n\\t<div class=\"user-profile-section user-profile-section-newsletter\">\\n\\t\\t<div class=\"user-profile-section-primary\">\\n\\t\\t\\t<h2>'+__e(l10n.newsletter)+'</h2>\\n\\t\\t</div>\\n\\t\\t<div class=\"user-profile-section-secondary\">\\n\\t\\t\\t';if(user.get('user_email')){;__p+='\\n\\t\\t\\t<p>'+__e(l10n.youAreSubscribedTo)+':</p>\\n\\t\\t\\t<form class=\"user-profile-newsletter-form\">\\n\\t\\t\\t\\t<ul class=\"user-profile-newsletters\">\\n\\t\\t\\t\\t\\t';_.each(newsletters,function(newsletter){;__p+='\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<label>\\n\\t\\t\\t\\t\\t\\t<input type=\"checkbox\" name=\"newsletter[]\" value=\"'+__e(newsletter.id)+'\" ';if(_.contains(user.get('newsletters'),newsletter.id)){;__p+=' checked=\"checked\" ';};__p+=' />\\n\\t\\t\\t\\t\\t\\t\\t<span>'+__e(newsletter.name)+'</span>\\n\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</form>\\n\\t\\t\\t';}else{;__p+='\\n\\t\\t\\t<p>'+__e(l10n.enterYourEmail)+'</p>\\n\\t\\t\\t<form class=\"user-profile-email-form\">\\n\\t\\t\\t\\t<ul class=\"user-profile-newsletters\">\\n\\t\\t\\t\\t';_.each(newsletters,function(newsletter){;__p+='\\n\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t<label>\\n\\t\\t\\t\\t\\t\\t<input type=\"checkbox\" name=\"newsletter[]\" value=\"'+__e(newsletter.id)+'\" />\\n\\t\\t\\t\\t\\t\\t<span>'+__e(newsletter.name)+'</span>\\n\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t\\t<input type=\"email\" name=\"user_email\" required/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\"submit\">\\n\\t\\t\\t\\t\\t<button>'+__e(l10n.saveChanges)+'</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</form>\\n\\t\\t\\t';};__p+='\\n\\t\\t</div>\\n\\t</div>\\n\\t';if(user.get('user_email')){;__p+='\\n\\t<div class=\"user-profile-section user-profile-section-email\">\\n\\t\\t<p class=\"user-profile-email\">'+((__t=(user.get('user_email')))==null?'':__t)+'</p>\\n\\t\\t<a href=\"#\" class=\"user-profile-change-email-link\">'+__e(l10n.editEmail)+'</a>\\n\\t\\t<form class=\"user-profile-email-form\">\\n\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t<input type=\"email\" name=\"user_email\" required/>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\"submit\">\\n\\t\\t\\t\\t<button>'+__e(l10n.saveChanges)+'</button>\\n\\t\\t\\t</div>\\n\\t\\t</form>\\n\\t</div>\\n\\t';};__p+='\\n</div>\\n<\/script>';}return __p};this[\"Vocativ\"][\"Templates\"][\"user-signin\"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<div class=\"vocativ-signin-modal\">\\n\\t';if(readOnlyMode){;__p+='\\n\\t\\t<div class=\"vocativ-signin-unavailable\">\\n\\t\\t\\t<h4>'+__e(l10n.signInUnavailable)+'</h4>\\n\\t\\t</div>\\n\\t';}else{;__p+='\\n\\t';if(currentTab=='login'){;__p+='\\n\\t<h3>'+__e(l10n.signIntoVocativ)+'</h3>\\n\\t<div class=\"vocativ-signin-modal-tab-login\">\\n\\t\\t<div class=\"vocativ-signin-modal-social\">\\n\\t\\t\\t<div class=\"vocativ-signin-modal-social-icons\">\\n\\t\\t\\t\\t<a data-network=\"facebook\" href=\"#\" title=\"'+__e(l10n.loginWithFacebook)+'\" class=\"facebook\"><i class=\"fa fa-facebook\"></i>'+__e(l10n.loginWithFacebook)+'</a>\\n\\t\\t\\t\\t<a data-network=\"twitter\" href=\"#\" title=\"'+__e(l10n.loginWithTwitter)+'\" class=\"twitter\"><i class=\"fa fa-twitter\"></i>'+__e(l10n.loginWithTwitter)+'</a>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\"vocativ-signin-modal-form-wrapper\">\\n\\t\\t\\t<span>'+__e(l10n.signInViaMail)+'</span>\\n\\t\\t\\t<form class=\"vocativ-signin-modal-login-form\">\\n\\t\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t\\t<input type=\"text\" name=\"email\" value=\"';if('email'in formData){;__p+=__e(formData.email);};__p+='\" placeholder=\"'+__e(l10n.emailoruser)+'\" required/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t\\t<input type=\"password\" name=\"password\" value=\"';if('password'in formData){;__p+=__e(formData.password);};__p+='\" placeholder=\"'+__e(l10n.password)+'\" required/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';if(!_.isEmpty(errors)){;__p+='\\n\\t\\t\\t\\t<div class=\"vocativ-signin-modal-errors\">\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t';_.each(errors,function(error){;__p+='\\n\\t\\t\\t\\t\\t\\t<li>'+__e(error)+'</li>\\n\\t\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';};__p+='\\t\\t\\t\\t\\n\\t\\t\\t\\t<div class=\"submit\">\\n\\t\\t\\t\\t\\t<button>';if(loading){;__p+='<i class=\"fa fa-spinner fa-spin\"></i>';}else{;__p+=__e(l10n.login);};__p+='</button>\\n\\t\\t\\t\\t\\t<a href=\"#\" class=\"forgot-link\" data-tab=\"forgot\">'+__e(l10n.forgotPassword)+'</a>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\"vocativ-signin-modal-footer\">\\n\\t\\t\\t<p>'+__e(l10n.needAccount)+' <a href=\"#\" data-tab=\"signup\" class=\"tab-switch\">'+__e(l10n.signup)+'</a></p>\\n\\t\\t</div>\\n\\t</div>\\n\\t';}else if(currentTab=='signup'){;__p+='\\n\\t<h3>'+__e(l10n.signup)+'</h3>\\n\\t<div class=\"vocativ-signin-modal-tab-signup\">\\n\\t\\t<h4>'+__e(l10n.getMoreFromVocativ)+'</h4>\\n\\t\\t<div class=\"vocativ-signin-modal-social\">\\n\\t\\t\\t<div class=\"vocativ-signin-modal-social-icons\">\\n\\t\\t\\t\\t<a data-network=\"facebook\" href=\"#\" title=\"'+__e(l10n.loginWithFacebook)+'\" class=\"facebook\"><i class=\"fa fa-facebook\"></i>'+__e(l10n.signupWithFacebook)+'</a>\\n\\t\\t\\t\\t<a data-network=\"twitter\" href=\"#\" title=\"'+__e(l10n.loginWithTwitter)+'\" class=\"twitter\"><i class=\"fa fa-twitter\"></i>'+__e(l10n.signupWithTwitter)+'</a>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\"vocativ-signin-modal-form-wrapper\">\\n\\t\\t\\t<span>'+__e(l10n.signUpViaMail)+'</span>\\n\\t\\t\\t<form class=\"vocativ-signin-modal-signup-form\">\\n\\t\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t\\t<input type=\"email\" name=\"email\" value=\"';if('email'in formData){;__p+=__e(formData.email);};__p+='\" placeholder=\"'+__e(l10n.email)+'\" required/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';if(!_.isEmpty(errors.email)){;__p+='\\n\\t\\t\\t\\t\\t<div class=\"vocativ-signin-modal-errors\">\\n\\t\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t\\t';_.each(errors.email,function(error){;__p+='\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>'+((__t=(error))==null?'':__t)+'</li>\\n\\t\\t\\t\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t\\t<input type=\"text\" name=\"username\" value=\"';if('username'in formData){;__p+=__e(formData.username);};__p+='\" placeholder=\"'+__e(l10n.displayName)+'\" required/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';if(!_.isEmpty(errors.display_name)){;__p+='\\n\\t\\t\\t\\t\\t<div class=\"vocativ-signin-modal-errors\">\\n\\t\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t\\t';_.each(errors.display_name,function(error){;__p+='\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>'+__e(error)+'</li>\\n\\t\\t\\t\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t\\t<input type=\"password\" name=\"password\" value=\"';if('password'in formData){;__p+=__e(formData.password);};__p+='\" placeholder=\"'+__e(l10n.password)+'\" required/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';if(!_.isEmpty(errors.password)){;__p+='\\n\\t\\t\\t\\t\\t<div class=\"vocativ-signin-modal-errors\">\\n\\t\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t\\t';_.each(errors.password,function(error){;__p+='\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>'+__e(error)+'</li>\\n\\t\\t\\t\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t';if(!_.isEmpty(errors.misc)){;__p+='\\n\\t\\t\\t\\t\\t<div class=\"vocativ-signin-modal-errors\">\\n\\t\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t\\t';_.each(errors.misc,function(error){;__p+='\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>'+__e(error)+'</li>\\n\\t\\t\\t\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t<div class=\"submit signup\">\\n\\t\\t\\t\\t\\t<button>';if(loading){;__p+='<i class=\"fa fa-spinner fa-spin\"></i>';}else{;__p+=__e(l10n.signup);};__p+='</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t\\t<div class=\"vocativ-signin-modal-footer\">\\n\\t\\t\\t<p>'+__e(l10n.alreadyHaveAccount)+' <a href=\"#\" data-tab=\"login\" class=\"tab-switch\">'+__e(l10n.signIntoVocativ)+'</a></p>\\n\\t\\t</div>\\n\\t</div>\\n\\t';}else if(currentTab=='forgot'){;__p+='\\n\\t<h3>'+__e(l10n.forgotPassword)+'</h3>\\n\\t<div class=\"vocativ-signin-modal-tab-forgot\">\\n\\t\\t<div class=\"vocativ-signin-modal-form-wrapper\">\\n\\t\\t\\t<form class=\"vocativ-signin-modal-forgot-form\">\\n\\t\\t\\t\\t<div class=\"controls\">\\n\\t\\t\\t\\t\\t<input type=\"email\" name=\"email\" value=\"';if('email'in formData){;__p+=__e(formData.email);};__p+='\" placeholder=\"'+__e(l10n.email)+'\" required/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';if(!_.isEmpty(errors)){;__p+='\\n\\t\\t\\t\\t<div class=\"vocativ-signin-modal-errors\">\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t';_.each(errors,function(error){;__p+='\\n\\t\\t\\t\\t\\t\\t\\t<li>'+__e(error)+'</li>\\n\\t\\t\\t\\t\\t\\t';});__p+='\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t';if(successMessage){;__p+='\\n\\t\\t\\t\\t\\t<div class=\"vocativ-signin-modal-success-message\">'+__e(successMessage)+'</div>\\n\\t\\t\\t\\t';};__p+='\\n\\t\\t\\t\\t<div class=\"submit\">\\n\\t\\t\\t\\t\\t<button>';if(loading){;__p+='<i class=\"fa fa-spinner fa-spin\"></i>';}else{;__p+=__e(l10n.getNewPassword);};__p+='</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</form>\\n\\t\\t\\t<div class=\"vocativ-signin-modal-footer\">\\n\\t\\t\\t\\t<p>'+__e(l10n.rememberPassword)+' <a href=\"#\" data-tab=\"login\" class=\"tab-switch\">'+__e(l10n.login)+'</a></p>\\n\\t\\t\\t</div>\\n\\n\\t\\t</div>\\n\\t</div>\\n\\t';}};__p+='\\n</div>';}return __p};";
