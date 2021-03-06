/* SiteCatalyst code version: H.25.
Copyright 1996-2012 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

var s_account = getSiteCatalystAcct()
var s = s_gi(s_account)
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet = "ISO-8859-1"
/* Conversion Config */
s.currencyCode = "USD"
/* Link Tracking Config */
s.trackDownloadLinks = true
s.trackExternalLinks = false
s.trackInlineStats = true
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters = "javascript:,kidskrill.com,mercola.com,.mercola.com,josephmercola.com,mercolahealthyskin.com,cheap-tanning-bed.com,cocoacassava.com,doctormercola.com,drmercola.biz,drmercola.com,drmercola.info,drmercola.net,drmercolaproducts.com,mercola.org,mercolacatalog.com,naturalhealthnews.net,nograindiets.com,pureclearwaterfilters.com,vitamindspray.com,fluorideawarenessweek.com,vaccineawarenessweek.com,peakfitnesstechnique.com,gmoawarenessweek.com,health-liberty.org,righttoknowgmos.org,mercolashop.com"
s.linkLeaveQueryString = false
s.linkTrackVars = "None"
s.linkTrackEvents = "None"

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "mercola"
/* Setting tracking server for first party cookie */
s.trackingServer = 'metrics.mercola.com';
s.trackingServerSecure = 'smetrics.mercola.com';

//Setup Clickmap
function s_getObjectID(o) {
    var ID = o.href;
    return ID;
}
s.getObjectID = s_getObjectID


//create productnum product for search term merchandising eVar binding
function s_searchBinding(bindingType, cookieName) {
    if (!s.c_r(cookieName))
        s.productNum = 1;
    else
        s.productNum = parseInt(s.c_r(cookieName)) + 1;

    s.products = ';' + bindingType + '' + s.productNum;
    var e = new Date();
    e.setTime(e.getTime() + (30 * 86400000));
    s.c_w(cookieName, s.productNum, e);
}

//Remove duplicate events on same search term
function s_searchRemoveDup(eList) {
    var a = s.split(s.events, ',');
    var e = '';
    for (i = 0; i < a.length; i++) {
        var isAdd2List = true;
        for (x = 0; x < eList.length; x++) {
            if (a[i] == eList[x]) {
                isAdd2List = false;
                break;
            }
        }
        if (isAdd2List)
            e += a[i] ? a[i] + ',' : a[i];
    }
    s.events = e.substring(0, e.length - 1);
}

/*
handler function for search terms
- remove duplicate search events
- applies event product binding
*/
function s_termBinder(searchTerm, eList) {
    if (searchTerm == '') {
        s_searchRemoveDup(eList);
    } else if (!s.products) {
        s_searchBinding('productsearch', 'productnum');
    }

}

/*
function: s_getExecutionNum
Description: Helper function
If a search was not initiated from www.mercola.com or search.mercola.com, this function matches the "r" query parameter to determine origin of the search call.

Return: The number representation of the site of origin or null. Numeric return value is line up with the case statment in the calling function s_allocateTerm()
*/
function s_getExNum() {
    var keys = new Array('petKey');
    var patternMap = new Object();
    patternMap.petKey = /AR4BaHR0cDovL2hlYWx0aHlwZXRzLm1lcmNvbGEuY29tCHNpdGVuYW1lAQEiASI/gi;

    var num = null;
    var siteParmR = s.getQueryParam('r');
    if (siteParmR != '')
        for (i = 0; i < keys.length; i++) {
        if (siteParmR.match(patternMap[keys[i]])) {
            num = i + 1;
            break;
        }
    }
    return num;
}


/*
function: s_trackSecondary
Description:
Set the events, eVar, &props for secondary tracking.
Returns: event list for product binding
*/
function s_trackSecondary(exNum, eList) {
    switch (exNum) {
        case 1: //track search that originate from healthypets.mercola.com
            s.eVar18 = s.prop15 = s.prop4;
            s.events = s.apl(s.events, 'event24', ',', 2);
            s.prop16 = s.prop5;
            if (s.prop16 == '0')
                s.events = s.apl(s.events, 'event25', ',', 2);
            eList = eList.concat(new Array('event24', 'event25'));
            break;
        case 2: //for future search origin
            break;
        default: //do nothing
    }
    return eList;
}

/*
function s_allocateTerm
Description:
Allocates the internal search terms to the correct report(s) trigger any required event(s) and storing the search term in the correct prop(s) and eVar(s).
This code will on execute on the results.aspx page when a search term has be queried.
*/
function s_allocateTerm() {
    //track and set event for internal search
    var eList = new Array('event1', 'event2');
    s.eVar2 = s.prop4;
    s.events = s.apl(s.events, 'event1', ',', 2);

    s.prop5 = s.prop5.toString();
    if (s.prop5 == '0')
        s.events = s.apl(s.events, 'event2', ',', 2);

    var exNum = s_getExNum();

    //apply events and store term for secondary reports
    if (exNum)
        eList = s_trackSecondary(exNum, eList);
    s_termBinder(s.getValOnce(s.eVar2, 's_stv', 0), eList);
}

/*Ensures that campaigns are not duplicate on a back button navigation or page refresh*/
function checkCampaign(eVarType, eVarCookie, cEventType) {
    var cid = s.getValOnce(eVarType, eVarCookie, 0);
    if (cid) {
        s.events = s.apl(s.events, 'event28', ',', 2);
        s.events = s.apl(s.events, cEventType, ',', 2);
    }
    return cid
}
/************************** PLUGIN CONFIG  **************************/
s.usePlugins = true

function s_doPlugins(s) {

    //Determine bounce rate for all visits
    s.visitstart = s.getVisitStart('s_vs');
    if (s.visitstart && s.visitstart == 1) {
        s.firstPage = 'firstpage';
    }
    s.clickPast(s.firstPage, 'event4', 'event5');

    /*	Automated Campaign tracking
    External Campaigns - x_cid
    Internal Campaigns - i_cid
    Email Campaigns - e_cid
    Offline Campaigns - ol_cid	*/
    s.eVar1 = s.getQueryParam('x_cid');
    if (!s.eVar1) { s.eVar1 = s.getQueryParam('fb_ref') };
    s.eVar3 = s.getQueryParam('i_cid');
    s.eVar14 = s.getQueryParam('e_cid');
    s.eVar15 = s.getQueryParam('ol_cid');

    if (s.eVar1) {
        s.eVar1 = checkCampaign(s.eVar1, 's_var_1', 'event29');
        s.campaign = s.eVar23 = s.eVar1;
    } else if (s.eVar3) {
        s.eVar3 = checkCampaign(s.eVar3, 's_var_3', 'event30');
        s.campaign = s.eVar24 = s.eVar3;
    } else if (s.eVar14) {
        s.eVar14 = checkCampaign(s.eVar14, 's_var_14', 'event31');
        s.campaign = s.eVar25 = s.eVar14;
    } else if (s.eVar15) {
        s.eVar15 = checkCampaign(s.eVar15, 's_var_15', 'event32');
        s.campaign = s.eVar26 = s.eVar15;
    }

    /*Automate the site section section coversion*/
    if (s.chann) {
        s.eVar16 = s.channel;
        s.eVar16 = s.getValOnce(s.eVar16, 's_var_16', 0);
    }


    /********** Start Automate Search Keyword Variables and Events for Shop **********/
    //not combined with other search because shop has its own engine
    var shopKeyWordStr = s.getQueryParam('search');
    shopKeyWordStr = unescape(shopKeyWordStr);
    s.prop13 = shopKeyWordStr.toLowerCase();

    if (s.prop13) {
        s.eVar17 = s.prop13;
        s.events = s.apl(s.events, 'event14', ',', 2);
        if (s.prop14 == '0')
            s.events = s.apl(s.events, 'event15', ',', 2);
    }
    /* Do not refire shop search event if the same search term passed in twice */
    s_termBinder(s.getValOnce(s.eVar17, 's_stv', 0), new Array('event14', 'event15'));
    /********** End Automate Search Keyword Variables and Events for Shop **********/

    /*	Automate Keyword Search Variables and Events
    - Search term and result set on page of results.aspx*/
    if (s.prop4) { s_allocateTerm(); }

    if (s.c_r('productnum') && s.events.indexOf('purchase') > -1)
        s.c_w('productnum', '0', 0);
    if (s.c_r('campaignNum') && s.events.indexOf('purchase') > -1)
        s.c_w('campaignNum', '0', 0);

    /*  Automate OrderID eVar */
    if (s.purchaseID)
        s.eVar10 = s.purchaseID;

    /*  Automate get Previous Page Location */
    s.prop6 = s.getPreviousValue(s.pageName, 'gpv', '');

    /*  Get page location of opt in */
    if (s.prop2) {
        s.prop17 = s.prop6;
        s.events = s.apl(s.events, 'event27', ',', 2);
    }

    /*event count of unsubscribes*/
    if (s.prop3) {
        s.events = s.apl(s.events, 'event3', ',', 2);
    }


    /* Determine Percentage of Page Viewed*/
    if (s.prop6)
        s.prop7 = s.getPercentPageViewed();

    /* Determine whether visitor is New or a Repeat visitor within the last 365 days */
    s.eVar7 = s.getNewRepeat(365);

    /* Time to Complete Purchase */
    if (s.firstPage == 'firstpage')
        s.eVar11 = 'start';
    if (s.events.indexOf('purchase') > -1)
        s.eVar11 = 'stop';
    s.eVar11 = s.getTimeToComplete(s.eVar11, 'ttcp', 1);

    /* Time to Complete Checkout */
    if (s.events.indexOf('scCheckout') > -1)
        s.eVar12 = 'start';
    if (s.events.indexOf('purchase') > -1)
        s.eVar12 = 'stop';
    s.eVar12 = s.getTimeToComplete(s.eVar12, 'ttcc', 1);

    //time parting
    s.prop8 = s.getTimeParting('d', '-6');
    s.prop9 = s.getTimeParting('h', '-6');

    //Blank out products if events isn't set so that we don't inflate prodViews
    if (s.products && !s.events)
        s.products = '';

    //Setup internal campaigns and Clickmap Object IDs
    s.setupDynamicObjectIDs();

    //Collect Spanish conversions (Unique)
    var mySCAcct = s_account.substring(0, s_account.indexOf(','));
    if (mySCAcct == 'mcspanish' || mySCAcct == 'mcspanishdev') {
        s.eVar5 = mySCAcct;
        s.eVar5 = s.getValOnce(s.eVar5, 's_var_5');
    }

    //capture the pagename
    s.eVar32 = 'D=pageName';

    //Lowercase all variables
    s.manageVars('lowercaseVars', 'events', 2)

    /*Neolane Campaign or Message ID*/
    if (!s.eVar52)
        s.eVar52 = s.getQueryParam('et_cid');
    s.eVar52 = s.getValOnce(s.eVar52, 's_var_52', 0);


    /* Neolane Broadlog ID */
    if (!s.eVar53)
        s.eVar53 = s.getQueryParam('et_rid');
    s.eVar53 = s.getValOnce(s.eVar53, 's_var_53', 0);

    //capture the pagename
    s.eVar32 = 'D=pageName';

    //Lowercase all variables
    s.manageVars('lowercaseVars', 'events', 2)
}
s.doPlugins = s_doPlugins

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/*
* Utility Function: p_c
*/
s.p_c = new Function("v", "c", ""
+ "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+ "ngth:x).toLowerCase()?v:0");

/*
* Plugin: getPageName v2.1 - parse URL and return
*/
s.getPageName = new Function("u", ""
+ "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+ "x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+ "queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+ "string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+ "ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+ "efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+ "z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+ "substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+ ";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+ "ubstring(x+1)}return n");

/*
* Utility manageVars v0.25 - clear variable values (requires split 1.5)
*/
s.manageVars = new Function("c", "l", "f", ""
+ "var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+ "geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+ ",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar"
+ "'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+ "it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+ "a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+ "}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+ ");return true;}else{return false;}");
s.clearVars = new Function("t", "var s=this;s[t]='';");
s.lowercaseVars = new Function("t", ""
+ "var s=this;if(s[t]){s[t]=s[t].toString();if(!s[t].indexOf('D=')==0)"
+ "{s[t]=s[t].toLowerCase();}}");

/*
* Plugin: getAndPersistValue 0.3 - get a value on every page
*/
s.getAndPersistValue = new Function("v", "c", "e", ""
+ "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+ "v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
* Plugin: getQueryParam 2.3
*/
s.getQueryParam = new Function("p", "d", "u", ""
+ "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+ "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+ ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+ "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+ "=p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", ""
+ "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+ "=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", ""
+ "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+ "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+ "epa(v)}return ''");

/*
* Plugin: getValOnce_v1.0
*/
s.getValOnce = new Function("v", "c", "e", ""
+ "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+ ");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+ " v==k?'':v");

/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split = new Function("l", "d", ""
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
* Plugin Utility: apl v1.1
*/
s.apl = new Function("l", "v", "d", "u", ""
+ "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+ "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+ "e()));}}if(!m)l=l?l+d+v:v;return l");

/*
* Function - read combined cookies v 0.4
*/
if (!s.__ccucr) {
    s.c_rr = s.c_r;
    s.__ccucr = true;
    function c_r(k) {
        var s = this, d = new Date, v = s.c_rr(k), c = s.c_rr('s_pers'), i, m, e;
        if (v) return v; k = s.ape(k); i = c.indexOf(' ' + k + '='); c = i < 0 ? s.c_rr('s_sess') : c;
        i = c.indexOf(' ' + k + '='); m = i < 0 ? i : c.indexOf('|', i); e = i < 0 ? i : c.indexOf(';', i);
        m = m > 0 ? m : e; v = i < 0 ? '' : s.epa(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
        if (m > 0 && m != e) if (parseInt(c.substring(m + 1, e < 0 ? c.length : e)) < d.getTime())
        { d.setTime(d.getTime() - 60000); s.c_w(s.epa(k), '', d); v = ''; } return v;
    }
    s.c_r = c_r;
}
/*
* Function - write combined cookies v 0.4
*/
if (!s.__ccucw) {
    s.c_wr = s.c_w;
    s.__ccucw = true;
    function c_w(k, v, e) {
        var s = this, d = new Date, ht = 0, pn = 's_pers', sn = 's_sess', pc = 0, sc = 0, pv, sv, c, i, t;
        d.setTime(d.getTime() - 60000); if (s.c_rr(k)) s.c_wr(k, '', d); k = s.ape(k);
        pv = s.c_rr(pn); i = pv.indexOf(' ' + k + '='); if (i > -1)
        { pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1); pc = 1; } sv = s.c_rr(sn);
        i = sv.indexOf(' ' + k + '='); if (i > -1) {
            sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
            sc = 1;
        } d = new Date; if (e) {
            if (e.getTime() > d.getTime()) {
                pv += ' ' + k + '=' + s.ape(v) + '|' + e.getTime() + ';';
                pc = 1;
            } 
        } else {
            if (String(v).indexOf('%00') > -1) { v = s.repl(v, '%00', ''); } sv += ' ' + k + '=' + s.ape(v) + ';';
            sc = 1;
        } if (sc) s.c_wr(sn, sv, 0); if (pc) {
            t = pv; while (t && t.indexOf(';') != -1) {
                var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
                t = t.substring(t.indexOf(';') + 1); ht = ht < t1 ? t1 : ht;
            } d.setTime(ht); s.c_wr(pn, pv, d);
        }
        return v == s.c_r(s.epa(k));
    }
    s.c_w = c_w;
}

/*
* s.join: 1.0 - s.join(v,p)
*  v - Array (may also be array of array)
*  p - formatting parameters (front, back, delim, wrap)
*/
s.join = new Function("v", "p", ""
+ "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+ ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+ ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+ "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
* Plugin: getTimeToComplete 0.4 - return the time from start to stop
*/
s.getTimeToComplete = new Function("v", "cn", "e", ""
+ "var s=this,d=new Date,x=d,k;if(!s['ttc'+cn]){e=e?e:0;if(v=='start'||v=='"
+ "stop')s['ttc'+cn]=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+ "_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+ ".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+ "3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+ "'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+ "onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");

/*
* DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
*/
s.setupDynamicObjectIDs = new Function(""
+ "var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+ ">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+ " if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+ "lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+ "re=1}");
s.setOIDs = new Function("e", ""
+ "var s=s_c_il[" + s._in + "],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
+ ",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
+ "{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
+ "=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
+ "objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
+ "pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
+ "if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
+ ")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
+ "s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
+ "]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

/*
* Plugin Utility: Replace v1.0
*/
s.repl = new Function("x", "o", "n", ""
+ "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+ "substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
*/
s.getNewRepeat = new Function("d", "cn", ""
+ "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+ "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+ "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+ "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+ "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
* Plugin: getPreviousValue_v1.0 - return previous value of designated
*   variable (requires split utility)
*/
s.getPreviousValue = new Function("v", "c", "el", ""
+ "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+ "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+ "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+ ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+ "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

s.p_fo = new Function("n", ""
+ "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+ "new Object;return 1;}else {return 0;}");

/* Top 130 - Grouped */
s.seList = "altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc"
+ ".de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum"
+ ".net,search.daum.net|q|Daum>google.,googlesyndication.com|q,as_q|Go"
+ "ogle>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor|"
+ "MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query"
+ ",search|Netscape Search>reference.com|q|Reference.com>seznam|w|Sezn"
+ "am.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query"
+ "|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,yahoo.co.jp|p,va|Yahoo!>"
+ "yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.ea"
+ "rthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>"
+ "search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";

/*
* Plugin: getTimeParting 2.0
*/
s.getTimeParting = new Function("t", "z", "y", "l", ""
+ "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+ "tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
+ ".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
+ "|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
+ "=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+ "g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
+ "=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+ "a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+ " Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+ "etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+ "nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+ "Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+ "00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
+ "||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
+ "le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
+ "eturn A}}else{return Z+', '+W}}}");

/*
* Plugin: getPercentPageViewed v1.3
*/
s.getPercentPageViewed = new Function("ext", ""
+ "var s=this,ext=(arguments.length>0)?ext:0;if(typeof(s.linkType)=='u"
+ "ndefined'||s.linkType=='e'){var v=s.c_r('s_ppv');s.c_w('s_ppv','');"
+ "var a=(v.indexOf(',')>-1)?v.split(',',3):[];if(ext){return a;}else{"
+ "return(a.length>0)?a[0]:'';}}");
s.getPPVCalc = new Function(""
+ "var s=s_c_il[" + s._in + "],dh=Math.max(Math.max(s.d.body.scrollHeight,"
+ "s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s."
+ "d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d."
+ "documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documentE"
+ "lement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||(s"
+ ".wd.document.documentElement.scrollTop||s.wd.document.body.scrollTo"
+ "p),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s.c_r('s_ppv'"
+ "),a=(c.indexOf(',')>-1)?c.split(',',3):[],cv=(a.length>0)?parseInt("
+ "a[0]):0,p0=(a.length>1)?parseInt(a[1]):pv,cy=(a.length>2)?parseInt("
+ "a[2]):0;if(pv>0){s.c_w('s_ppv',((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?"
+ "vh:cy));}else{s.c_w('s_ppv','');}");
s.getPPVSetup = new Function(""
+ "var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s"
+ ".getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,fals"
+ "e);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd"
+ ".attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEv"
+ "ent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCa"
+ "lc);}");
s.getPPVSetup();

/*
* Plugin: getVisitStart v2.0 - returns 1 on first page of visit
* otherwise 0
*/
s.getVisitStart = new Function("c", ""
+ "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+ ")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");

/*
* Plugin: clickPast - version 1.0
*/
s.clickPast = new Function("scp", "ct_ev", "cp_ev", "cpc", ""
+ "var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)"
+ "{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev"
+ ";s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc"
+ ",0,0);}}}");

/*
* facebookSocialPlugin v1.1 â€" Like Button Measurement
*/
s.facebookSocialPlugins = new Function("a", "b", "c", "d", "e", "f", "g", "h", ""
+ "var s=this;s.fbICount++;if(s.fbICount>=5){clearInterval(socialInter"
+ "val);}if(typeof(FB)!='undefined'){clearInterval(socialInterval);fun"
+ "ction re(a,b){a=s.split(a,'>'),FB.Event.subscribe(b,function(){trac"
+ "k(a[0],a[1]);});}if(b){re(b,'edge.create');}if(c){re(c,'edge.remove"
+ "');}if(d){re(d,'comment.create');}if(e){re(e,'comment.remove');}if("
+ "f){re(f,'auth.login');}if(g){re(g,'auth.logout');}if(h){re(h,'messa"
+ "ge.send');}}function track(m,n){s.ltVT=s.linkTrackVars;s.ltET=s.lin"
+ "kTrackEvents;s.etE=s.events;s.linkTrackVars=a?(a+',events'):'events"
+ "';s.linkTrackEvents=n;s.events=n;if(a){s[a]=m;}s.tl(this,'o',m);con"
+ "sole.log(m);s.linkTrackVars=s.ltVT;s.linkTrackEvents=s.ltET;s.event"
+ "s=s.etE;}");
s.fbICount = 0;
var socialInterval = setInterval(function() { s.facebookSocialPlugins('eVar31', 'fb:like>event33', '', '', '', '', '', ''); }, 1000);


/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '', s_objectID; function s_gi(un, pg, ss) {
    var c = "s.version='H.25';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\"
+ "\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return "
+ "y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;retur"
+ "n 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AU"
+ "TO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B"

+ "';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substri"
+ "ng(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x)"
+ ":unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t="
+ "z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&"
+ "t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s"
+ "=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){"
+ "s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].ap"
+ "ply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.leng"
+ "th;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s."
+ "pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.coo"
+ "kieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_"
+ "d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_"
+ "w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+("
+ "t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=functio"
+ "n(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b"
+ ":f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try"
+ "{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=functi"
+ "on(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return "
+ "window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.t"
+ "fs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r"
+ ".t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,u"
+ "n=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1'"
+ ")dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')"
+ "+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.r"
+ "l[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debu"
+ "gTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onlo"
+ "ad=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src="
+ "rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr()}',s.forcedLinkTracking"
+ "Timeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+"
+ "rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=t"
+ "his,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y"
+ ".substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring("
+ "i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t"
+ "=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'"
+ "')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&"
+ "(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm="
+ "1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.leng"
+ "th]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substrin"
+ "g(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+"
+ "ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfil"
+ "eID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.subst"
+ "ring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;"
+ "i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp'"
+ ")q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visi"
+ "torMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationS"
+ "erver)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';els"
+ "e if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';e"
+ "lse if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';els"
+ "e if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='ev"
+ "ents2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncr"
+ "ementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2"
+ "q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring"
+ "(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='"
+ ".'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.lin"
+ "kExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring("
+ "0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t()"
+ ";s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.loc"
+ "ation=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else"
+ " if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e"
+ ".target;s.t();s.eo=0;if(s.nrs>0&&s.useForcedLinkTracking&&e.target){t=e.target.target;if(e.target.dispatchEvent&&(!t||t==\\'_self\\'||t==\\'_top\\'||(s.wd.name&&t==s.wd.name))){e.stopPropagation();"
+ "e.stopImmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKe"
+ "y,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n;}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?"
+ "');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.ho"
+ "st?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t="
+ "t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){va"
+ "r s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s"
+ ".rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o"
+ ".src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&"
+ "&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if"
+ "(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);"
+ "return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,','"
+ ",'sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototyp"
+ "e[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);fo"
+ "r(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');"
+ "s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebK"
+ "it')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var "
+ "s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n="
+ "x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x="
+ "t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x"
+ "&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=functio"
+ "n(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring"
+ "(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in+"
+ "+;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r."
+ "_m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._i"
+ "n+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n"
+ ",1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var "
+ "s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);e"
+ "lse u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g"
+ "=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.inde"
+ "xOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','ht"
+ "tps:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e"
+ "+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;"
+ "try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTime"
+ "out(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else "
+ "if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k"
+ "])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in"
+ "+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if"
+ "(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length"
+ "]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm."
+ "getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset("
+ "),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k="
+ "s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5'"
+ ";a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+scree"
+ "n.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n."
+ "javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBeha"
+ "vior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}"
+ "catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.j"
+ "avaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.d"
+ "oPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
+ "eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
+ "(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
+ "eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
+ "rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
+ "bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
+ "if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
+ "oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
+ "var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
+ "x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
+ "t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s."
+ "pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bc"
+ "t=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,"
+ "t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'"
+ "_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if"
+ "(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq"
+ "[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)"
+ "s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Op"
+ "era';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=pa"
+ "rseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCh"
+ "arCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationK"
+ "ey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreFo"
+ "rSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,"
+ "contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkNa"
+ "me,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2='"
+ ",tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g="
+ "s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,"
+ "dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames"
+ ",lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.w"
+ "d.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w = window, l = w.s_c_il, n = navigator, u = n.userAgent, v = n.appVersion, e = v.indexOf('MSIE '), m = u.indexOf('Netscape6/'), a, i, j, x, s; if (un) { un = un.toLowerCase(); if (l) for (j = 0; j < 2; j++) for (i = 0; i < l.length; i++) { s = l[i]; x = s._c; if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) { if (s.sa) s.sa(un); if (x == 's_c') return s } else s = 0 } } w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+ "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+ "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+ "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+ "a");
    w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+ "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+ "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    c = s_d(c); if (e > 0) { a = parseInt(i = v.substring(e + 5)); if (a > 3) a = parseFloat(i) } else if (m > 0) a = parseFloat(u.substring(m + 10)); else a = parseFloat(v); if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c); if (!s) { s = new Object; if (!w.s_c_in) { w.s_c_il = new Array; w.s_c_in = 0 } s._il = w.s_c_il; s._in = w.s_c_in; s._il[s._in] = s; w.s_c_in++; } s._c = 's_c'; (new Function("s", "un", "pg", "ss", c))(s, un, pg, ss); return s
}
function s_giqf() { var w = window, q = w.s_giq, i, t, s; if (q) for (i = 0; i < q.length; i++) { t = q[i]; s = s_gi(t.oun); s.sa(t.un); s.setTagContainer(t.tagContainerName) } w.s_giq = 0 } s_giqf()

/************************The following are custom functions*******************************/
//helper function utilized to retrieve the query string parameter that occurs before the creation of the s code object
function s_gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

function getSiteCatalystAcct() {
    var globalReportDev = ",mcmercoladevglobalreport"
    var globalReport = ",mcmercolaGlobalReport"

    //suiteIds - json object containing the account suite id
    var suiteIds = { "0": "mcmercolacom" + globalReport,
        "1": "mercolacomdev" + globalReportDev,
        "2": "mcseoblog" + globalReport,
        "15": "mcseoblogdev" + globalReportDev,
        "3": "mcmercolaorg" + globalReport,
        "4": "mccommunity" + globalReport,
        "5": "mccommunitydev" + globalReportDev,
        "6": "mcother" + globalReport,
        "7": "mcotherdev" + globalReportDev,
        "8": "mcproduct" + globalReport,
        "9": "mcmcproductdev" + globalReportDev,
        "10": "mcshop" + globalReport,
        "11": "mcshopdev" + globalReportDev,
        "12": "mcspanish" + globalReport,
        "13": "mcspanishdev" + globalReportDev,
        "14": "mcnewshopdev"
    }


    //suiteKey - json object, key value pair domain/key
    var suiteKeys = { "www.mercola.com": 0,
        "mercola.com": 0,
        "wdev.mercola.com": 1,
        "communities.mercola.com": 2,
        "www.josephmercola.com": 2,
        "kidskrill.com": 2,
        "www.mercolahealthyskin.com": 8,
        "www.cheap-tanning-bed.com": 2,
        "www.cocoacassava.com": 2,
        "www.doctormercola.com": 2,
        "www.drmercola.biz": 2,
        "www.drmercola.com": 2,
        "www.drmercola.info": 2,
        "www.drmercola.net": 2,
        "www.drmercolaproducts.com": 2,
        "www.mercola.org": 3,
        "www.mercolacatalog.com": 2,
        "www.mercolaquack.com": 2,
        "www.mercuryfreedentistryawarenessweek.com": 2,
        "www.naturalhealthnews.net": 2,
        "www.pureclearwaterfilters.com": 2,
        "www.vitamindspray.com": 2,
        "www.fluorideawarenessweek.com": 2,
        "www.vaccineawarenessweek.com": 2,
        "www.peakfitnesstechnique.com": 2,
        "www.gmoawarenessweek.com": 2,
        "gmoawarenessweek.com": 2,
        "gmoawarenessweekdev.mercola.com": 15,
        "www.nograindiet.com": 2,
        "www.nograindiets.com": 2,
        "nograindiets.com": 2,
        "nograindietdev.mercola.com": 15,
        "www.greatbirdfluhoax.com": 2,
        "www.mercuryfreedentistryawarenessweek.com": 2,
        "asthma.mercola.com": 4,
        "aspartame.mercola.com": 4,
        "aspartame-test.mercola.com": 5,
        "aspartamedev.mercola.com": 5,
        "aging.mercola.com": 4,
        "allergies.mercola.com": 4,
        "alzheimers.mercola.com": 4,
        "arthritis.mercola.com": 4,
        "artificialsweeteners.mercola.com": 4,
        "asthma.mercola.com": 4,
        "autism.mercola.com": 4,
        "articles.mercola.com": 4,
        "articles-test.mercola.com": 5,
        "articulos.mercola.com": 4,
        "articulosdev.mercola.com": 5,
        "backpain.mercola.com": 4,
        "bookreviews.mercola.com": 4,
        "brainhealth.mercola.com": 4,
        "blogs.mercola.com": 4,
        "blogs-test.mercola.com": 5,
        "cancer.mercola.com": 4,
        "contactimporter.mercola.com": 4,
        "contactimporterdev.mercola.com": 5,
        "childrenshealth.mercola.com": 4,
        "cholesterol.mercola.com": 4,
        "chronicfatigue.mercola.com": 4,
        "coldflu.mercola.com": 4,
        "conflictofinterest.mercola.com": 4,
        "corporategreed.mercola.com": 4,
        "death.mercola.com": 4,
        "depression.mercola.com": 4,
        "diabetes.mercola.com": 4,
        "digestion.mercola.com": 4,
        "digestivediseases.mercola.com": 4,
        "drugcompanies.mercola.com": 4,
        "drugindustry.mercola.com": 4,
        "drugs.mercola.com": 4,
        "ejercicios.mercola.com": 4,
        "ejerciciosdev.mercola.com": 5,
        "emotionalhealth.mercola.com": 4,
        "energysupport.mercola.com": 4,
        "entertainment.mercola.com": 4,
        "environment.mercola.com": 4,
        "emf.mercola.com": 4,
        "emf-test.mercola.com": 5,
        "emfdev.mercola.com": 5,
        "eft.mercola.com": 4,
        "eftdev.mercola.com": 5,
        "fat.mercola.com": 4,
        "fatigue.mercola.com": 4,
        "fibromyalgia.mercola.com": 4,
        "finances.mercola.com": 4,
        "food.mercola.com": 4,
        "foodfacts.mercola.com": 4,
        "fructose.mercola.com": 4,
        "fitness.mercola.com": 4,
        "fitnessdev.mercola.com": 5,
        "www.fatswitchbook.com": 4,
        "fatswitchbookdev.mercola.com": 5,
        "fatswitchbookstage.mercola.com": 5,
        "fluoride.mercola.com": 4,
        "gardening.mercola.com": 4,
        "gmo.mercola.com": 4,
        "gmodev.mercola.com": 5,
        "governmentabuse.mercola.com": 4,
        "www.health-liberty.org": 4,
        "health-libertydev.mercola.com": 5,
        "health-libertydev.org": 5,
        "healthypets.mercola.com": 4,
        "healthypets-test.mercola.com": 5,
        "hearthealth.mercola.com": 4,
        "heartdisease.mercola.com": 4,
        "healthyrecipes.mercola.com": 4,
        "highbloodpressure.mercola.com": 4,
        "hormones.mercola.com": 4,
        "immunity.mercola.com": 4,
        "infectiousdisease.mercola.com": 4,
        "interviews.mercola.com": 4,
        "juicing.mercola.com": 4,
        "juicingdev.mercola.com": 5,
        "jointhealth.mercola.com": 4,
        "mascotas.mercola.com": 4,
        "mascotas-test.mercola.com": 5,
        "medicine.mercola.com": 4,
        "menshealth.mercola.com": 4,
        "mercury.mercola.com": 4,
        "nutritionaltype.mercola.com": 4,
        "obesity.mercola.com": 4,
        "osteoporosis.mercola.com": 4,
        "painmanagement.mercola.com": 4,
        "personaldevelopment.mercola.com": 4,
        "parenting.mercola.com": 4,
        "parentingdev.mercola.com": 5,
        "politics.mercola.com": 4,
        "rawfood.mercola.com": 4,
        "rawmilk.mercola.com": 4,
        "sexualhealth.mercola.com": 4,
        "sleep.mercola.com": 4,
        "soy.mercola.com": 4,
        "spiritualhealth.mercola.com": 4,
        "statins.mercola.com": 4,
        "subscribeme.mercola.com": 4,
        "subscribemedev.mercola.com": 5,
        "subscribemestage.mercola.com": 5,
        "substanceabuse.mercola.com": 4,
        "sugar.mercola.com": 4,
        "sunlight.mercola.com": 4,
        "supplements.mercola.com": 4,
        "swineflu.mercola.com": 4,
        "swinefludev.mercola.com": 5,
        "technology.mercola.com": 4,
        "thyroid.mercola.com": 4,
        "toxicity.mercola.com": 4,
        "tv.mercola.com": 4,
        "tvstage.mercola.com": 5,
        "tvdev.mercola.com": 5,
        "transgenicos.mercola.com": 4,
        "transgenicosdev.mercola.com": 5,
        "vaccines.mercola.com": 4,
        "vaccinesdev.mercola.com": 5,
        "visionhealth.mercola.com": 4,
        "vitamind.mercola.com": 4,
        "vitaminddev.mercola.com": 5,
        "water.mercola.com": 4,
        "weightmanagement.mercola.com": 4,
        "womenshealth.mercola.com": 4,
        "games.mercola.com": 6,
        "gamesstage.mercola.com": 7,
        "gamesdev.mercola.com": 7,
        "search.mercola.com": 6,
        "searchdev.mercola.com": 7,
        "nutritionaltyping.mercola.com": 6,
        "nutritionaltypingdev.mercola.com": 7,
        "www.natural-health-center.com": 6,
        "naturalhealthcenter.mercola.com": 6,
        "naturalhealthcenterdev.mercola.com": 7,
        "new-naturalhealthcenterdev.mercola.com": 7,
        "newsletters.mercola.com": 6,
        "newsletterdev.mercola.com": 7,
        "login.mercola.com": 6,
        "logindev.mercola.com": 7,
        "healthnav.mercola.com": 6,
        "airpurifier.mercola.com": 8,
        "airpurifierstage.mercola.com": 9,
        "airpurifierdev.mercola.com": 9,
        "bathcare.mercola.com": 8,
        "bathcarestage.mercola.com": 9,
        "bathcaredev.mercola.com": 9,
        "cookware.mercola.com": 8,
        "cookwarestage.mercola.com": 9,
        "cookwaredev.mercola.com": 9,
        "new-cookwaredev.mercola.com": 9,
        "dentalcare.mercola.com": 8,
        "dentalcarestage.mercola.com": 9,
        "dentalcaredev.mercola.com": 9,
        "deals.mercola.com": 8,
        "dealsstage.mercola.com": 9,
        "dealsdev.mercola.com": 9,
        "femininecare.mercola.com": 8,
        "femininecarestage.mercola.com": 9,
        "femininecaredev.mercola.com": 9,
        "krilloil.mercola.com": 8,
        "krilloildev.mercola.com": 9,
        "new-krilloildev.mercola.com": 9,
        "organicindia.mercola.com": 8,
        "organicindiastage.mercola.com": 9,
        "organicindiadev.mercola.com": 9,
        "new-organicindiadev.mercola.com": 9,
        "powerplate.mercola.com": 8,
        "powerplatestage.mercola.com": 9,
        "powerplatedev.mercola.com": 9,
        "new-powerplatedev.mercola.com": 9,
        "probiotics.mercola.com": 8,
        "probioticsstage.mercola.com": 9,
        "probioticsdev.mercola.com": 9,
        "new-probioticsdev.mercola.com": 9,
        "products.mercola.com": 8,
        "productsstage.mercola.com": 9,
        "productsdev.mercola.com": 9,
        "proteinpowder.mercola.com": 8,
        "proteinpowderdev.mercola.com": 9,
        "new-proteinpowderdev.mercola.com": 9,
        "tanningbeds.mercola.com": 8,
        "tanningbedsstage.mercola.com": 9,
        "tanningbedsdev.mercola.com": 9,
        "new-tanningbedsdev.mercola.com": 9,
        "visionfitness.mercola.com": 8,
        "visionfitnessstage.mercola.com": 9,
        "visionfitnessdev.mercola.com": 9,
        "waterfilters.mercola.com": 8,
        "waterfiltersstage.mercola.com": 9,
        "waterfiltersdev.mercola.com": 9,
        "new-waterfiltersdev.mercola.com": 9,
        "www.mercolabiothin.com": 8,
        "wdev.mercolabiothin.com": 9,
        "www.mercolashop.com": 8,
        "cookware.mercolashop.com": 8,
        "krilloil.mercolashop.com": 8,
        "probiotics.mercolashop.com": 8,
        "tanningbeds.mercolashop.com": 8,
        "visionfitness.mercolashop.com": 8,
        "powerplate.mercolashop.com": 8,
        "waterfilters.mercolashop.com": 8,
        "proteinpowder.mercolashop.com": 8,
        "shop.mercola.com": 10,
        "shop222.mercola.com": 11,
        "shop223.mercola.com": 11,
        "shopdev.mercola.com": 11,
        "newshopdev.mercola.com": 11,
        "newshopprod.mercola.com": 14,
        "stageshop.mercola.com": 14,
        "productionshop.mercola.com": 14,
        "espanol.mercola.com": 12,
        "espanolstage.mercola.com": 13,
        "espanoldev.mercola.com": 13,
        "productos.mercola.com": 12,
        "productosdev.mercola.com": 13,
        "productosstage.mercola.com": 13
    }

    var siteCatalystSuiteId = suiteIds[suiteKeys[document.domain]]

    if (siteCatalystSuiteId == null || siteCatalystSuiteId == "") {
        siteCatalystSuiteId = "mcmisc"
    }

    return siteCatalystSuiteId
}
