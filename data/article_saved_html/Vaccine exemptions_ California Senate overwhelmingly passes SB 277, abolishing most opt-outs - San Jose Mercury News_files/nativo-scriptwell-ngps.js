/* -- DFM NATIVO SCRIPTWELL NGPS JS -- */
/* 06-18-2015 */
/* http://local.denverpost.com/common/dfm/assets/js/nativo/nativo-scriptwell-ngps.js */

window.dfm_nativo = window.dfm_nativo || {
    initial: true,
    ad_right: '',
    tw_feed: '',
    fb_feed: '',
    fb_plugin: '',
    yt_videos: ''
};

function onNativoRenderAd(params) {
    if (dfm_nativo.initial) {
        dfm_nativo.initial = false;
        dfm_nativo.ad_right = params.ad_right;
        dfm_nativo.tw_feed = params.twitter_feed;
        dfm_nativo.fb_feed = params.facebook_feed;
        dfm_nativo.fb_plugin = params.facebook_plugin;
        dfm_nativo.yt_videos = params.youtube_videos;
        //jQuery(window).load(function nativoPageLoad() {
        // CHANGED to document.ready instead of window.load
        $(document).ready(function nativoPageLoad() {
            render_ad();
            render_tw_module();
            render_fb_module();
            render_fb_plugin_module();
            render_yt_module();
        });
    }
} 

/* -- CSS -- */
$('#dfmPageTitle, h2#articleOverline, .articleByline.prx-location').css({
    "display": "none"
}); 

/* Ad_Right */
// display the Ad in the Right Rail
function render_ad() {
    if (typeof(dfm_nativo.ad_right) !== 'undefined' && '' !== dfm_nativo.ad_right) {
        $('#adsquare').html(dfm_nativo.ad_right);
    }
}

/* Twitter */
// display the Twitter feed box
function render_tw_module() {
    if (typeof(dfm_nativo.tw_feed) !== 'undefined' && '' !== dfm_nativo.tw_feed) {
        $('#tw-feedbox').html(eval(dfm_nativo.tw_feed));
    }
} 

/* Facebook (LEGACY) */
// render Facebook (LEGACY) feed
function render_fb_module() {
    if (typeof(dfm_nativo.fb_feed) !== 'undefined' && '' !== dfm_nativo.fb_feed) {
        $('#fb-likebox').html(dfm_nativo.fb_feed);
    }
} 

/* Facebook Plugin */
// display Facebook Plugin 
function render_fb_plugin_module() {
    if (typeof(dfm_nativo.fb_plugin) !== 'undefined' && '' !== dfm_nativo.fb_plugin) {        
        //$('#fb-pluginbox').html(eval(dfm_nativo.fb_plugin));
        $('#fb-pluginbox').html(dfm_nativo.fb_plugin);
        //var fb_plugin = encodeURIComponent(dfm_nativo.fb_plugin);
        //divElem = document.getElementById('fb-pluginbox');
        //divElem.innerHTML = fb_plugin;
        
    }
} 
/* YouTube */
// render YouTube Videos
function render_yt_module() {
    if (typeof(dfm_nativo.yt_videos) !== 'undefined' && '' !== dfm_nativo.yt_videos) {
        $('#youtube_videos').html(dfm_nativo.yt_videos);
    }
}





