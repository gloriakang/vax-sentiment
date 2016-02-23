(function($){dfmNav={loadTime:new Date(),version:"1.4.5",updated:"2015-07-20",pData:'',targetFrame:'',loadAttempts:0,debug:false,jsLoaded:false,runningLog:'',copyright:'2015 Digital First Media',header:$('div#dfmHeader'),footer:$('div#dfmFooter'),rightRail:$('div#dfm-right-rail'),commonLibs:"http://local.digitalfirstmedia.com/common/dfm",devLibs:"http://dev.local.digitalfirstmedia.com/common/dfm",overNav:false,maxHeadlines:4,maxTitle:28,adsPath:'',params:{thirdParty:false,pageTitle:'Welcome',site:'',leaderboard:false,dogEars:false,iframe:'',mode:'article',vendor:''},jsFiles:['/common/jquery/jquery-timeago.js','/common/dfm/dfm-nav/vendorSpecific/accuweather.js'],initParams:function(){dfmNav.log("Starting dfmNav version "+dfmNav.version);if(arguments.length>0){for(var i=0;i<arguments.length;i++){var t=arguments[i].split('|');dfmNav.log("Loading Param "+t[0]+" with "+t[1]);dfmNav.params[t[0]]=t[1];}}
if(dfmNav.params.vendor!==''){$.getScript(dfmNav.commonLibs+"/dfm-nav/vendorSpecific/"+dfmNav.params.vendor+".js",function(){dfmNav.load();});}else{dfmNav.load();}},load:function(){dfmNav.loadAttempts++;if(dfmNav.loadAttempts>10){dfmNav.log("Load already attempted too many times...shutting down.");return false;}
if(dfmNav.params.mode==='breakout'){dfmNav.targetFrame=window.parent.document;dfmNav.header=$("div#dfmHeader",window.parent.document);dfmNav.footer=$("div#dfmFooter",window.parent.document);dfmNav.rightRail=$("div#dfm-right-rail",window.parent.document);}
if(location.port!=='8080'){if(document.location.search.indexOf('devcss=1')<0){$('head',dfmNav.targetFrame).append('<link type="text/css" href="'+dfmNav.commonLibs+'/dfm-nav/dfm-nav.css" rel="stylesheet">');}
else{dfmNav.log("loading Extras DEV CSS");$('head',dfmNav.targetFrame).append('<link type="text/css" href="'+dfmNav.devLibs+'/dfm-nav/dfm-nav.css" rel="stylesheet">');}}else{dfmNav.log("loading Local DEV CSS");$('head',dfmNav.targetFrame).append('<link type="text/css" href="dfm-nav.css" rel="stylesheet">');}
$('head',dfmNav.targetFrame).append('<script src="https://www.google.com/jsapi"></script>');var domain="";if(dfmNav.params.site!==''&&dfmNav.params.site!=='undefined'){tmpDomain=dfmNav.params.site.split('.');if(tmpDomain.length>1){domain="http://local."+dfmNav.params.site;}else{domain="http://local."+dfmNav.params.site+".com";}}else{var urlParts=window.location.hostname.split(".");domain="http://local."+urlParts[urlParts.length-2]+'.'+urlParts[urlParts.length-1];dfmNav.params.site=urlParts[urlParts.length-2];}
dfmNav.log("dfmNav.params.site: "+dfmNav.params.site);var jsonToGet=domain+'/assets/header-footer.json';dfmNav.log('jsonToGet: '+jsonToGet);$.ajax({url:jsonToGet,dataType:'jsonp',contentType:'application/json',cache:true,async:false,jsonpCallback:'pubData',success:function(data){dfmNav.pData=data.pub;dfmNav.log('JSON loaded successfully.');dfmNav.loadScript(dfmNav.jsFiles,dfmNav.pData.localURL);$.getScript(dfmNav.pData.localURL+'/assets/dfm-nav-ext.js').done(function(script,textStatus){dfmNav.log("Publication specific code loaded ("+textStatus+")");}).fail(function(jqxhr,settings,exception){dfmNav.log("Publication specific code not loaded ("+exception+")","warn");});$('head',dfmNav.targetFrame).append('<link type="text/css" href="http://fonts.googleapis.com/css?family=Merriweather:700" rel="stylesheet"/>');if(dfmNav.params.thirdParty===''||dfmNav.params.thirdParty==='false'){$('head',dfmNav.targetFrame).append('<link type="text/css" href="'+dfmNav.pData.localURL+'/common/dfm/dfm-core-article.css" rel="stylesheet">');}
$('head',dfmNav.targetFrame).append('<link type="text/css" href="'+dfmNav.pData.localURL+'/common/dfm/eventful-dfm-override.css" rel="stylesheet">');$('head',dfmNav.targetFrame).append('<link type="text/css" href="'+dfmNav.pData.localURL+'/assets/local.css" rel="stylesheet">');$('head',dfmNav.targetFrame).append('<script type="text/javascript" src="https://www.google.com/uds/?file=feeds&v=1&async=2"></script>');$('head',dfmNav.targetFrame).append('<link type="text/css" href="https://www.google.com/uds/api/feeds/1.0/77f89919ef841f93359ce886504e4e3f/default+en.css" rel="stylesheet">');var jsTester=self.setInterval(function(){dfmNav.log("Checking to see if JS is loaded...");dfmNav.loadAttempts++;if(dfmNav.loadAttempts>40){dfmNav.log("Taking too long, self-destructing jsTester");window.clearInterval(jsTester);}
if(dfmNav.jsLoaded){dfmNav.log("dfmNav JS has all loaded.");window.clearInterval(jsTester);if(typeof dfmNav.pData.quantcastID!=='undefined'&&typeof dfmNav.pData.quantcastLabel!=='undefined'){dfmNav.buildTracking(dfmNav.pData.quantcastID,dfmNav.pData.quantcastLabel);}
if(dfmNav.params.iframe===''){dfmNav.buildFooter(dfmNav.pData);dfmNav.buildHeader(dfmNav.pData);dfmNav.buildRightRail(dfmNav.pData);}else if(dfmNav.params.iframe==='header'){dfmNav.buildIframeHeader(dfmNav.pData);}else if(dfmNav.params.iframe==='footer'){dfmNav.buildIframeFooter(dfmNav.pData);}}},500);},error:function(jqXHR,textStatus,errorThrown){var err=textStatus+', '+errorThrown;dfmNav.log("JSON Request Failed: "+err,"error");dfmNav.log("dfmNav failed to load.");}});dfmNav.log("dfmNav.load finished.");},loadScript:function(files,localURL,callback){if(files.length===0){dfmNav.log("End of loadScript loop.");dfmNav.jsLoaded=true;}
else{if(files[0].substring(0,4)!=='http'){files[0]=localURL+files[0];}
dfmNav.log("Loaded script: "+files[0]);$.getScript(files.shift(),function(){dfmNav.loadScript(files,localURL);});}},buildTracking:function(qid,qLabel){_qoptions={qacct:qid,labels:qLabel};$.getScript("http://edge.quantserve.com/quant.js").done(function(script,textStatus){dfmNav.log("Quantcast loaded successfully for "+qid+".");}).fail(function(jqxhr,settings,exception){dfmNav.log("Quantcast did not load: "+exception,"error");});},buildHeader:function(d){if(dfmNav.header[0]){dfmNav.header.html(dfmNav.headerHTML);dfmNav.log("Loading Weather");if(accuweatherNavWidget!="undefined"){dfmNav.log("Loading Weather from the Nav");try{accuweatherNavWidget.loadWeather('weatherBoxReal',self.dfmNav.pData.loc.zip);}
catch(err){var errorMessage="There was an error loading the weather Bar: "+err;window.console&&console.error(errorMessage);}}
var headerLogo=d.localURL+'/assets/logo-extra-large.png';if(dfmNav.params.mode!=="home"){headerLogo=d.localURL+'/assets/logo-small.png';}
$('img#pubLogo',dfmNav.targetFrame).attr({src:headerLogo,alt:d.title});if($('h2#articleSourceH2').length===1&&dfmNav.params.site!='eveningsun'&&dfmNav.params.site!='ydr'&&dfmNav.params.site!='publicopiniononline'&&dfmNav.params.site!='ldnews'){$('h2#dfmPageTitle',dfmNav.targetFrame).html($('h2#articleSourceH2').text());$('h2#articleSourceH2').remove();}
else{$('h2#dfmPageTitle',dfmNav.targetFrame).html(dfmNav.params.pageTitle);}
if($('.headerRegion h1').length===1&&dfmNav.params.mode!=="home"){var h2CSS=$('h2#dfmPageTitle').attr('style');$('h2#dfmPageTitle').replaceWith($('.headerRegion h1'));$('.headerRegion h1').attr('id','dfmPageTitle');$('.headerRegion h1').attr('style',h2CSS);}
$('a#logoLink',dfmNav.targetFrame).attr("href",d.baseURL);if(dfmNav.params.pageTitle==='Search'){$('head').append('<link rel="stylesheet" type="text/css" href="http://extras.mnginteractive.com/live/css/site67/bartertown-search.gsa.css" />');}
if(typeof dfmNav.pData.CMS==="undefined"||dfmNav.pData.CMS==="NGPS"){$('form#yahooSearchForm',dfmNav.targetFrame).attr("action",d.baseURL+'/circare/html/gsa_template.jsp');}else{$('form#yahooSearchForm',dfmNav.targetFrame).attr("action",d.baseURL+'/search');$('input#yahooSearchField').attr("name","text");}
for(var n=0;n<d.nav.length;n++){curr=d.nav[n];if(curr.hideIn.indexOf(dfmNav.params.tag)===-1){var currentID='headerPrimary'+curr.navTitle.replace(/\W/g,'');var tmpLink=curr.navURL;if(tmpLink.substring(0,1)==="/"){tmpLink=d.baseURL+tmpLink;}
var tmp='<li id="'+currentID+'" class="dropdown';if(curr.navScrollbar===false){tmp+=' bubble';}
if(curr.navChildren.length===0){tmp+=' dfm-dropdown-no-children';}
tmp+='"><a id="'+currentID+'Link" href="'+tmpLink+'">'+curr.navTitle+'</a>';var currentDropNav='dropNav'+currentID;if(curr.navChildren.length>0){tmp+='<div class="dfm_menu" id="'+currentDropNav+'">';tmp+='<div class="dfm_sections" id="'+currentID+'Sections"><ul>';for(var nc=0;nc<curr.navChildren.length;nc++){var cc=curr.navChildren[nc];var tmpChildLink=cc.navChildLink;if(tmpChildLink.substring(0,1)==="/"){tmpChildLink=d.baseURL+tmpChildLink;}
tmp+='<li class="dfmSecondaryNavItem" id="headerSecondary'+cc.navChildTitle.replace(" ","").replace("/","")+'"><a href="'+tmpChildLink+'"';if(typeof cc.noFollow!=='undefined'&&cc.noFollow===true){tmp+=' rel="nofollow"';}
if(typeof cc.newWindow!=='undefined'&&cc.newWindow===true){tmp+=' target="_blank"';}
tmp+='>'+cc.navChildTitle+'</a></li>';}
tmp+='</ul></div><!--Sections-->';tmp+='</div><!--menu--></li>';}
var hasRSS=(curr.navFeed!=='')?true:false;$('div#headerNav > ul',dfmNav.targetFrame).append(tmp);$('li.dropdown.bubble div div.dfm_sections').each(function(){$(this).css("height","auto");});var hasAd=dfmNav.loadBubbleAds("#"+currentID+'Advertisement',false);$('div#'+currentDropNav,dfmNav.targetFrame).addClass('dfm_menu-noAdOrRSS');}}
$("a[id$='Link']",dfmNav.targetFrame).each(function(){if($(this).attr('href')===''||$(this).attr('href')==='#'){$(this).attr({onclick:'return false;',style:'cursor:default;'});}});if(typeof d.contactCustom!=='undefined'&&d.contactCustom.length>0){function buildContactCustomLinks(title,url,style,divider){if(url.substring(0,1)=="/"){url=dfmNav.pData.baseURL+url;}
$('div#dfmHeaderUpperLinks',dfmNav.targetFrame).append(''+divider+'<a href="'+url+'" style="'+style+'">'+title+'</a>');}
for(var z=0;z<d.contactCustom.length;z++){var contactCustomStyle='';if(d.contactCustom[z].contactCustomStyleBold===true){var contactCustomStyle='font-weight:bold';}
if(z===0){var contactCustomDivider='';}else{var contactCustomDivider='<span class="linkDivider">|</span>';}
var contactCustomUrl=d.contactCustom[z].contactCustomUrl;var contactCustomTitle=d.contactCustom[z].contactCustomTitle;buildContactCustomLinks(contactCustomTitle,contactCustomUrl,contactCustomStyle,contactCustomDivider);}}else{if(typeof d.contact.newsletterSignup!=='undefined'&&d.contact.newsletterSignup!==''){if(d.contact.newsletterSignup.substring(0,1)=="/"){d.contact.newsletterSignup=dfmNav.pData.baseURL+d.contact.newsletterSignup;}
$('div#dfmHeaderUpperLinks',dfmNav.targetFrame).append('<a href="'+d.contact.newsletterSignup+'">Newsletter Signup</a>');}
if(typeof d.contact.newsletterAccess!=='undefined'&&d.contact.newsletterAccess!==''){if(d.contact.newsletterAccess.substring(0,1)=="/"){d.contact.newsletterAccess=dfmNav.pData.baseURL+d.contact.newsletterAccess;}
$('div#dfmHeaderUpperLinks',dfmNav.targetFrame).append('<a href="'+d.contact.newsletterAccess+'">Newsletters</a>');}
if(typeof d.contact.subscribe!=='undefined'&&d.contact.subscribe!==''){if(d.contact.subscribe.substring(0,1)=="/"){d.contact.subscribe=dfmNav.pData.baseURL+d.contact.subscribe;}
$('div#dfmHeaderUpperLinks',dfmNav.targetFrame).append('<span class="linkDivider">|</span><a href="'+d.contact.subscribe+'">Subscribe</a>');}
if(typeof d.contact.customerCare!=='undefined'&&d.contact.customerCare!==''){if(d.contact.customerCare.substring(0,1)=="/"){d.contact.customerCare=dfmNav.pData.baseURL+d.contact.customerCare;}
$('div#dfmHeaderUpperLinks',dfmNav.targetFrame).append('<span class="linkDivider">|</span><a href="'+d.contact.customerCare+'">Customer Care</a>');}
if(typeof d.contact.allAccess!=='undefined'&&d.contact.allAccess!==''){if(d.contact.allAccess.substring(0,1)=="/"){d.contact.allAccess=dfmNav.pData.baseURL+d.contact.allAccess;}
$('div#dfmHeaderUpperLinks',dfmNav.targetFrame).append('<span class="linkDivider">|</span><a href="'+d.contact.allAccess+'">All Access</a>');}}
if(typeof d.verticals.autos.link!=='undefined'&&d.verticals.autos.link!==''){if(d.verticals.autos.link.substring(0,1)=="/"){d.verticals.autos.link=dfmNav.pData.baseURL+d.verticals.autos.link;}
$('ul#verticalsLinks').append('<li><a href="'+d.verticals.autos.link+'">'+d.verticals.autos.title+'</a></li><li>|</li>');}
if(typeof d.verticals.realestate.link!=='undefined'&&d.verticals.realestate.link!==''){if(d.verticals.realestate.link.substring(0,1)=="/"){d.verticals.realestate.link=dfmNav.pData.baseURL+d.verticals.realestate.link;}
$('ul#verticalsLinks').append('<li><a href="'+d.verticals.realestate.link+'">'+d.verticals.realestate.title+'</a></li><li>|</li>');}
if(typeof d.verticals.jobs.link!=='undefined'&&d.verticals.jobs.link!==''){if(d.verticals.jobs.link.substring(0,1)=="/"){d.verticals.jobs.link=dfmNav.pData.baseURL+d.verticals.jobs.link;}
$('ul#verticalsLinks').append('<li><a href="'+d.verticals.jobs.link+'">'+d.verticals.jobs.title+'</a></li>');}
if(dfmNav.params.leaderboard==='true'){dfmNav.header.prepend("<div id='leaderBoardAd' class='dfm_preHeaderRegion'><iframe height='90' width='728' frameborder='0' scrolling='no' src='"+d.localURL+"/common/dfm/dfm-nav/ads/leaderboard.html?site="+dfmNav.params.site+"'></iframe></div>");}
dfmNav.headerSetup();}else{dfmNav.log("No header div. Header will not be loaded.","warn");}},buildIframeHeader:function(d){dfmNav.buildHeader(d);$('div.dfm_menu',dfmNav.targetFrame).remove();$('ul.dfmPrimaryNav > li',dfmNav.targetFrame).removeClass('dropdown').removeClass('bubble');$('a',dfmNav.targetFrame).attr('target','_parent');},loadBubbleAds:function(adID,displayAd){if(typeof displayAd==="undefined"){displayAd=true;}
var hasAd=false;var adCode="";switch(adID){case"#headerPrimaryNewsAdvertisement":case"#headerPrimaryHomeAdvertisement":adCode="newsAd.html";break;case"#headerPrimarySportsAdvertisement":case"#headerPrimaryPeopleAdvertisement":adCode="sportsAd.html";break;case"#headerPrimaryBusinessAdvertisement":case"#headerPrimaryCompaniesAdvertisement":adCode="businessAd.html";break;case"#headerPrimaryEntertainmentAdvertisement":case"#headerPrimaryColumnistsAdvertisement":case"#headerPrimaryEventsAdvertisement":case"#headerPrimaryArtsAdvertisement":case"#headerPrimaryMusicAdvertisement":case"#headerPrimaryFoodDrinkAdvertisement":case"#headerPrimaryStageScreenAdvertisement":adCode="entertainmentAd.html";break;case"#headerPrimaryLifestyleAdvertisement":case"#headerPrimaryLifestylesAdvertisement":case"#headerPrimarySiliconBeatAdvertisement":adCode="lifestyleAd.html";break;default:adCode="";}
if(adCode!==''){dfmNav.log("Loading Bubble Ad for "+adID+".");var domain=dfmNav.params.site;if(domain===''){domain=window.location.hostname.split('.');domain=domain[1];}
var adtmp="<iframe height='250' width='300' frameborder='0' scrolling='no' src='"+dfmNav.pData.localURL+"/common/dfm/dfm-nav/ads/"+adCode+"?site="+domain+"'></iframe>";hasAd=true;if(displayAd&&$("div"+adID,dfmNav.targetFrame).html()===""){$("div"+adID,dfmNav.targetFrame).html(adtmp);}}else{$("div"+adID,dfmNav.targetFrame).parent().addClass("dfm_menu-noAd");}
return hasAd;},loadAdTags:function(loc,NRR){var locArr=['DFM-adPos-ear1','DFM-adPos-ear2','DFM-adPos-pencil','DFM-adPos-leader','DFM-adPos-cube1','DFM-adPos-cube2','DFM-adPos-cube3','DFM-adPos-bottomline'];var sizeArr=['[[120,90]]','[[120,90]]','[[970,30],[970,250]]','[[970,90],[728,90]]','[[300,250],[300,600],[300,1050],[160,600]]','[[300,250]]','[[300,250]]','[[300,250]]'];var posArr=['Ear_Left','Ear_Right','SBB','top_leaderboard','Cube1_RRail_ATF','Cube2_RRail_mid','Cube3_RRail_lower','Cube4_BottomLine'];var i=$.inArray(loc,locArr);if(i!=-1){var ad='';if(NRR===undefined){ad+='<div id="'+locArr[i]+'">';}
else{locArr[i]=NRR;}
ad+='<scr'+'ipt type="text/javascript">'+'googletag.cmd.push(function(){'+'googletag.defineSlot("/8013/'+dfmNav.params.site+dfmNav.adsPath+'", '+sizeArr[i]+',"'+locArr[i]+'")'+'.setTargeting("pos",["'+posArr[i]+'"])'+'.setTargeting("kv",["'+dfmNav.kvValue+'"])'+'.addService(googletag.pubads());'+'googletag.pubads().collapseEmptyDivs();'+'googletag.enableServices();'+'googletag.pubads().enableSyncRendering();'+'googletag.pubads().enableSingleRequest();'+'googletag.display("'+locArr[i]+'");});'+'</scr'+'ipt>';if(NRR===undefined){ad+='</div>';}
dfmNav.rightRailHTML+=ad;}
else{dfmNav.log("adTag "+loc+" does not exist","warn");}},loadDogEars:function(){var domain=dfmNav.params.site;if(domain===''){domain=window.location.hostname.split('.');domain=domain[1];}
$('div#dfmSearch',dfmNav.targetFrame).css('padding-right','125px');$('div#dfmMasthead',dfmNav.targetFrame).prepend('<iframe id="dogearRight" class="dogear" frameborder="0" scrolling="no" src="'+dfmNav.pData.localURL+'/common/dfm/dfm-nav/ads/dogear_right.html?site='+domain+'"></iframe><iframe id="dogearLeft" class="dogear" frameborder="0" scrolling="no" src="'+dfmNav.pData.localURL+'/common/dfm/dfm-nav/ads/dogear_left.html?site='+domain+'"></iframe>');},loadWeather:function(w,l){var u="http://w1.weather.gov/xml/current_obs/"+w+".xml";$.ajax({url:document.location.protocol+'//jsonproxy.appspot.com/proxy?url='+encodeURIComponent(u),dataType:"jsonp",success:function(data){$("div#headerNav > ul",dfmNav.targetFrame).append("<li><a href='"+l+"'>Currently: "+data.current_observation.temp_f.$+"F / "+data.current_observation.temp_c.$+"C</a></li>");}});},buildFooter:function(d){if(dfmNav.footer[0]){dfmNav.footer.html(dfmNav.footerHTML);$("li#dfmCopyText",dfmNav.targetFrame).append((new Date()).getFullYear()+" Digital First Media");$("a#dfmFooterLogo",dfmNav.targetFrame).html('<img src="'+d.localURL+'/assets/logo-small.png" id="footerLogo"/>').attr("href",d.baseURL);for(var l=0;l<d.footer.length;l++){if(d.footer[l].fLink.substring(0,1)=="/"){d.footer[l].fLink=dfmNav.pData.baseURL+d.footer[l].fLink;}
$('div#dfmEndFooterLinks > ul',dfmNav.targetFrame).append('<li><a href="'+d.footer[l].fLink+'">'+d.footer[l].fTitle+'</a></li>');}
$.each(d.social,function(k,i){if(i!==''){if(i.substring(0,1)=='/'){i=dfmNav.pData.baseURL+i;}
$("ul.dfm-share-widget").append('<li><a rel="tooltip" data-placement="top" data-original-title="Follow us on '+k+'" class="dfm_fc-webicon" href="'+i+'" style="background: url(\''+d.localURL+'/common/dfm/assets/img/webicons/fc-webicon-'+k+'-m.png\');">'+k+'</a></li>');}});}else{dfmNav.log("No footer div. Footer will not be loaded.","warn");}},buildIframeFooter:function(d){dfmNav.buildFooter(d);$('a',dfmNav.targetFrame).attr('target','_parent');},headerSetup:function(){if($('h2#dfmPageTitle, h1#dfmPageTitle',dfmNav.targetFrame).html().length>=dfmNav.maxTitle){var fontAdjust=48-($('h2#dfmPageTitle, h1#dfmPageTitle',dfmNav.targetFrame).html().length/2.2);if(fontAdjust<12)fontAdjust=12;$('h2#dfmPageTitle, h1#dfmPageTitle',dfmNav.targetFrame).attr('style','font-size:'+fontAdjust+'px !important; padding-top: '+(48-fontAdjust)+'px !important;');}
if(dfmNav.params.mode==='breakout'||dfmNav.params.mode==='legacy'){$("div#dfmMasthead",dfmNav.targetFrame).addClass("legacyMasthead");}
if(dfmNav.params.dogEars==='true'){dfmNav.loadDogEars();}
$('div.dfm-navigation > ul > li',dfmNav.targetFrame).mouseover(function(){dfmNav.showHeaderNav($(this).attr("id"));dfmNav.overNav=true;dfmNav.loadBubbleAds("#"+$(this).attr("id")+"Advertisement",true);$(this).children('div.dfm_menu-noAdOrRSS').css("margin-left","");$(this).children('div.dfm_menu-noAdOrRSS').css("margin-left",$(this).position().left);});$('div.dfm-navigation > ul > li',dfmNav.targetFrame).mouseout(function(){dfmNav.overNav=false;});setInterval(function(){if(!dfmNav.overNav){$('div.dfm_menu',dfmNav.targetFrame).hide();}},100);},showHeaderNav:function(menuID){$("div.dfm_menu",dfmNav.targetFrame).hide();$("#"+menuID+" > .dfm_menu",dfmNav.targetFrame).css("display","inline");},hideHeaderNav:function(menuID){$("#"+menuID+" > div.dfm_menu",dfmNav.targetFrame).attr('style','visibility:visible');},buildRightRail:function(d){if(dfmNav.rightRail[0]){dfmNav.log("buildRightRail is not being overridden by vendor-specific code even though the div 'dfm-right-rail' exists.");}else{dfmNav.log("No dfm-right-rail div. No right rail built.");}},log:function(msg,level){if(typeof level==='undefined'){level='log';}
var stamp=new Date();stamp='('+stamp.getHours()+':'+stamp.getMinutes()+':'+stamp.getSeconds()+'.'+stamp.getMilliseconds()+') ';msg=stamp+msg;dfmNav.runningLog+=msg+'\r\n';if(dfmNav.debug&&level==='log'){console.info(msg);}else if(dfmNav.debug&&level==='warn'){console.warn(msg);}else if(dfmNav.debug&&level==='error'){console.error(msg);}},showLog:function(){alert(dfmNav.runningLog);},headerHTML:'<div class="page-head"><div class="body"><div class="margin"><div class="masthead" id="dfmMasthead" style="height:110px"><div id="weatherBoxReal"></div><h3><a href="#" id="logoLink"><img src="" id="pubLogo" alt="#"/></a></h3><h2 id="dfmPageTitle">&nbsp;</h2> <div class="search" id="dfmSearch"><div id="dfmHeaderUpperLinks" style="text-align:right;font-size:12px"></div><form method="get" action="" id="yahooSearchForm"><nobr><input type="hidden" value="mngi" name="sortBy" /><input type="hidden" value="" name="similarTo" /><input type="hidden" value="find" name="similarType" /><input type="hidden" value="any" name="type" /><input type="hidden" value="3" name="aff" /><input type="hidden" value="entiresitesppublished" name="view" /><input type="text" value="Search" name="query" id="yahooSearchField" onfocus="if(this.value ==\'Search\') this.value =\'\';" /><input type="submit" value="Go" name="searchbutton" /> </nobr></form><!-- Verticals Links --><div class="verticals-menu"><ul id="verticalsLinks"></ul></div><!-- /Verticals Links --></div><!--/search--> </div><!--/masthead-->  </div><!--margin--></div><!--/body--><div class="foot"><div class="margin"><div class="dfm-navigation" id="headerNav"><ul class="dfmPrimaryNav"></ul></div><!--navigation--></div><!--margin--></div><!-- foot --><div class="sub-navigation"><div class="margin"></div><!-- margin --></div><!-- sub-navigation --></div><!--page-head--><scr'+'ipt>setTimeout(function() {dfm.$(".device").addClass(dfm.env.device); }, 1000);</scr'+'ipt>',footerHTML:'<div role="contentinfo"><a href="#" style="display:block;" id="dfmFooterLogo"></a></div> <ul class="dfm-share-widget"></ul><!-- .dfm-share-widget --><div id="dfmEndFooterLinks"><ul><li id="dfmCopyText">Copyright &copy; </li></ul></div>',rightRailHTML:'<!-- Right rail is loaded in a vendor-specific JS file. -->'};}(jQuery));