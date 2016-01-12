// updated 07-08-15 

// Undertone needed all the divs in dfp-18 to be aligned right. 
// Wasn't sure what ads out there would break
// So this is the solution for now
if (dfm.$('#ut_ad').length) {
    dfm.$('#dfp-18_ad_container div').css('text-align', 'right');
}

if ( document.location.hash == '#dev' ) {
   // Rewrite the links on the page, adding the hash to article urls.dfmna
   dfm.$('a').attr('href', function() {
      return this + '#dev';
   });
}

// Co-branding, part one
// Do we have a hash with a value of a whitelisted domain?
// If so, the branding decision has been made.
if ( dfm_cobrand == true ) {
    // Rewrite the links on the page, adding the hash to article urls.
   dfm.$('a').attr('href', function() {
      if ( is_it_article(this) == true ) return this + '#' + dfm.env.domain;
   });
   if ( dfm.$('#hot-topics').length ) dfm.$('#hot-topics').remove();
}

// Appending the property's header, footer + nav js.
/*if ( typeof the_domain == 'undefined' ) var the_domain = 'denverpost';*/
/*dfm.$.ajax({
async:true, 
type: 'GET',
url:'http://local.' + dfm.env.domain + '.com/common/dfm/dfm-nav/dfm-nav-core.js',
dataType:'script'
}).done(function(){
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'http://extras.mnginteractive.com/live/js/sharedCode/vendorWidgets.js';
  dfm.$('head')[0].appendChild(script);
});*/
//.done(function() { mc_embed_gallery.initWidget(); })
//.fail(function() { window.console && console.log(" gallery software load error"); })

/*var dfmTester = self.setInterval(function(){     
     if(typeof dfmNav != 'undefined' ) {      
      if ( typeof self.SectionName  == 'undefined' || self.SectionName == 'Home' || document.location.pathname.substring(0, 3) == '/ci' ) self.SectionName = '&nbsp;';
      dfmNav.initParams('pageTitle|' + self.SectionName,'mode|' + self.the_mode);
      //dfmNav.initParams('pageTitle|' + self.SectionName,'mode|' + self.the_mode,'site|' + dfm.env.domain);
      //dfm.$('#dfmPageTitle').html(self.SectionName);
      window.clearInterval(dfmTester); //Kill the setInterval.

     }

    }, 100 ); *///Check to see if the JS Array is loaded every 100 milliseconds.


/* Things look pretty messy up until around this point on some pages, so the main containers start hidden */

dfm.$('#outerOuterRegion, #footer, #mngiFooter, #featuredLinks').css('display','block');

// Detect if iphone or ipad and add left padding
//var isiPad = navigator.userAgent.match(/iPad/i);
//var isiPhone = navigator.userAgent.match(/iPhone/i);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
dfm.$('#region2and3box').css("padding-left","15px");
dfm.$('#region8and9box').css("padding-left","15px");
dfm.$('#footer').css("padding-left","15px");
}

// Weather goes on every page.
dfm.$(document).ready(function(){
   var mastheadTester = self.setInterval(function() {     
      if( dfm.$('.masthead').length ) {
         //ci_ stories with no parent section
         if ( document.location.pathname.substring(0,3) == '/ci' ) {
            var tmp = '.com';
            if ( document.location.host.search('net') > -1 ) tmp = '.net';
            dfm.$('#pubLogo').attr('src', 'http://local.' + dfm.env.domain + tmp + '/assets/logo-extra-large.png');
            dfm.$('#pubLogo').css('max-height', '50px');
            dfm.$('.masthead').css('height', '110px'); //changed from 82px to 110px to support verticals links
            dfm.$('#dfmHeader .masthead h3').css('bottom','0'); //move the logo back down to the bottom
            dfm.$('#dfmPageTitle').css('display','none'); //hide the page title
         } 
         // Finesse the dogears
         if ( dfm.theMode === 'home' && dfm.$('#dfp-16_ad_container').length ) {
            dfm.$( '#dfmHeader .masthead' ).append( '<div id="dogear-left-dummy-ad" style="width: 120px; height: 90px; margin-top: 17px; float: left;"></div>' );
            btUtils.adPositioner( '#dogear-left-dummy-ad', '#dfp-16' );
            dfm.$( '#dfmHeader .masthead h3').css('margin-left', '125px');
            dfm.$( '#header table td:first-child' ).css('width','0');
            dfm.$( '#dfp-16' ).show();
            dfm.$( '#dfp-16' ).css('z-index', 100);
            window.setInterval(function() {
               btUtils.adPositioner( '#dogear-left-dummy-ad', '#dfp-16' );
            },1000);
         }
         if ( dfm.theMode === 'home' && dfm.$('#dfp-17_ad_container').length ) {
            dfm.$( '#dfmHeader .masthead' ).append( '<div id="dogear-right-dummy-ad" style="width: 120px; height: 90px; margin-top: 20px; bottom: 3px; position: absolute; right:0;"></div>' );
            btUtils.adPositioner( '#dogear-right-dummy-ad', '#dfp-17' );
            dfm.$( '.body .margin .masthead .search').css('right', '135px');
            dfm.$( '#weatherBoxReal').css('margin', '0 123px 0 0'); //was 15px top margin. change to 0 to support taller header
            dfm.$( '#header table td:nth-child(2)' ).css('width','0');
            dfm.$( '#dfp-17' ).show();
            dfm.$( '#dfp-17' ).css('z-index', 100);
            window.setInterval(function() {
              btUtils.adPositioner( '#dogear-right-dummy-ad', '#dfp-17' );
            },1000);            
         }

    // Newsletter login links
    if ( 'newsletter' in dfmNav.pData && dfm.env.domain !== 'twincities') {
        if (MNGiRegistrationLoginStatus == "in" && dfm.$('#dfmHeaderUpperLinks').length ) {
            dfm.$('#dfmHeaderUpperLinks').prepend("<a href=" + MNGiRegistrationLoginUrl + "?rEmail=" + MNGiRegistrationEmail + ">Your Account</a><span class=\"linkDivider\">|</span><a href='" + MNGiRegistrationUrl + "/portlet/registration/html/logout.jsp'>Logout</a>");
            }   
        else dfm.$('#dfmHeaderUpperLinks').prepend("<a href=" + MNGiRegistrationLoginUrl + ">Newsletter Login</a><span class=\"linkDivider\">|</span><a href='" + MNGiRegistrationUrl + "/registration?rPage=register'>Signup</a>");
}
                    //dfm.$('.weatherFiveDayLink').text('5-Day');
            window.clearInterval(mastheadTester); //Kill the setInterval.
        }
    }, 100 ); //Check to see if the JS Array is loaded every 100 milliseconds.
    
    // Twinciites specific request
    if (dfm.env.domain === 'twincities') {
        dfm.$('#dfmHeaderUpperLinks').append('<span class=\"linkDivider\">|</span><a href="http://extras.twincities.com/contests/carrier/?contest=carrier">Carriers Wanted</a>');
    }

    // ParkRecord specific request
    if (dfm.env.domain === 'parkrecord') {
        dfm.$('#dfmHeaderUpperLinks').append('<span class=\"linkDivider\">|</span><a href="http://parkrecord.ut.newsmemory.com/">E-edition</a>');
    }


    // Check if we need to hide anything on the section pages
    if ( dfm.$('#hide-the-first-two-articles').length )
    {

// The layout-X exception ( http://www.mercurynews.com/opinion ) 
if ( dfm.$('#region9 .complexListingBox tr td > div:nth-child(-n+3)').length )
{
dfm.$('#region9 .complexListingBox tr td > div:nth-child(-n+3)').hide();
dfm.$('#region9 .complexListingBox tr td:nth-child(-n+1) > div:first-child').show();
}
// Another layout exception (This one for http://www.insidebayarea.com/raiders )
else if ( dfm.$('#region9 .layout5FeatureItemBox').length )
{
// And a sub-exception to this exception, for http://www.times-standard.com/news
if ( dfm.$('#region9 .layout5FeatureItemBox h2.complexListingTitle').length )
{
dfm.$('#region9 .layout5FeatureItemBox > div').hide();
}
else
{
dfm.$('#region9 .layout5FeatureItemBox').hide();
}
dfm.$('#region9 .complexListingBox .otherItemBox > div:first-child').hide();
}
else
{
        dfm.$('#region9 .complexListingBox .layout5FeatureItemBox > div').hide();
        dfm.$('#region9 .complexListingBox .otherItemBox > div:nth-child(-n+1)').hide();
        // Remove the extra top-rule cluttering things up.
        dfm.$('#region9 .otherItemBox div:nth-child(-n+2) li a').css('border-top', '0px solid red');
}

    } // close if ( dfm.$('#hide-the-first-two-articles').length )
    if ( dfm.$('#hide-the-first-article-in-the-left-rail').length )
    {
        dfm.$('#region2 td div:first-child li').hide();
    }
    if ( dfm.$('#hide-first-two-articles-in-left-rail').length )
    {
        dfm.$('#region2 td div:nth-child(-n+3) li').hide();
    }

        //hide first 2 stories in region8
    if ( dfm.$('#hide-the-first-two-articles-region8').length ) 
    {
        dfm.$('#region8 .complexListingBox .layout5FeatureItemBox > div').hide();
        dfm.$('#region8 .complexListingBox .otherItemBox > div:nth-child(-n+1)').hide();
        // Remove the extra top-rule cluttering things up.
        dfm.$('#region8 .otherItemBox div:nth-child(-n+2) li a').css('border-top', '0px solid red');
    } 
});

// START REGION JUGGLING

var btUtils = {
  // An object to handle many of the DOM changes required to realize the Sandbox designs...
  // ...while being constrained by NGPS HTML
  // Object is very specifically written for the original NGPS Bartertown layouts (June 2013)
  // Changes to blueprints or NGPS HTML could require that this be revisited

  // Object uses jQuery
  $ : dfm.$ || $,
  init : function() {
    // Need jQuery on the page
    if ( !this.$ ) {
      return false;
    }
    this.domChanges();
  },
  domChanges : function() {
    // The following DOM changes shouldn't run on article pages
    // This changes allows us to position the non-nav and non-footer content columns in the middle of the page no matter the width of the page.

    // Top headlines skybox placement 
    if ( !this.$( 'h1#articleTitle' ).length ) {
      var centerColMarkup = '';
      this.$( '#region5 tr' ).each( function() {
        centerColMarkup += btUtils.$( this ).html();
      });

      // We need the Skybox on the home, which has a mc-widget, and, probably, on sections.
      if ( this.$( '#mc-widget-container-large' ).length ) {
        this.$( '#mc-widget-container-large' ).before( '<div id="secondary" class="secondary-stories">' + centerColMarkup + '</div>' );
      }
      else {
        this.$( '#region3' ).append( '<div id="secondary" class="secondary-stories">' + centerColMarkup + '</div>' );
      }
    }
    
    // check for #beyondBartertown div every second.
    var bbdivtimer = setInterval(function(){bbdivcheck();}, 1000);

    function bbdivcheck()
    {
    if ( $('#secondary').length && $('#beyondBartertown').length && $('#region3').length ) {
      // first flip hed above CP
      $('#region3 .layout5FeatureItemBox:first').prepend(dfm.$('#region3 .layout5FeatureItemBox .listingItemTitle:first'));
      // then flip OFFs above CP
      $('#secondary').prependTo('#region3');
      // clear the timer
      clearInterval(bbdivtimer);
      }

    // stop checking after 10 seconds
    for (var i=0; i<=10; i++) {
      if (i=10) {
        clearInterval(bbdivtimer);
        }
      }
    }
                
    // DOM changes if there is an apocalypse news event
    // APOX
    if ( this.$( '#apocalypse-trigger' ).length ) {
if ( typeof console !== "undefined" ) console.log("APOC");
      var apocalypseFeatureMarkup = '',
        apocalypseMarkup = '<div class="left-column span2"><div class="complexListingBox">' + this.$( '#region6 .complexListingBox' ).html() + '</div></div> <div class="middle-column span4">' + this.$( '#region7' ).html() + '</div>';

      this.$( '#region11 tr td' ).each( function() {
        apocalypseFeatureMarkup += btUtils.$( this ).html();
      });

      // Add apocalypse markup
      this.$( '#region1' ).append( apocalypseMarkup );

      // Add apocalypse skybox markup
      this.$( '#region1 #apocalypse-3up' ).html( apocalypseFeatureMarkup );

      // Remove regions that are no longer needed 
      this.$( '#apocalypse-3up script:first-child' ).detach();
      this.$( '#region6, #region7, #region11' ).detach();

      // If the skyboxes don't have content in them, remove 'em.
      if ( this.$('#apocalypse-3up').text() === '' || $('#apocalypse-3up .listing5ImageBox').length == 0 ) {
if ( typeof console !== "undefined" ) console.log("APOC: 3up remove");
        this.$('#apocalypse-3up').remove();
      }
      // COMMENTED OUT BC the substr WAS RETURNING FALSE POSITIVES AND HIDING THE MIDDLE COLUMN if ( this.$('#region1 .middle-column').text().trim() === '' || this.$('#region1 .middle-column').text().trim().substr(0, 8) == 'function' ) {
      if ( this.$('#region1 .middle-column').text().trim() === '' ) {
if ( typeof console !== "undefined" ) console.log("APOC: region1 middle remove");
        this.$('#region1 .middle-column').remove();
      }
//this.$('.left-column').hide();
//this.$('.middle-column').hide();

    }

    // Additional styling and changes

    // Make :first-child CSS work on these columns
    this.$( '#secondary script:first-child' ).remove();

    // Rewrite the polls head, other polls formatting.
    this.$( '#region2 .pollsHead' ).html( '<h4>Two Cents</h4>' );

    // Add those good-looking grey lines
    this.$( '#region2 .pollsBox' ).before( '<hr class="top-border fat">' );
    this.$( '#secondary' ).after( '<hr class="top-border fat">' );
    this.$(' #region2 ').css({'display' : 'block'});

    // Add Bottom Line content from Region 10
/* NO MORE BOTTOM LINE
    this.$( '#region10' ).find( 'td' ).each( function() {
      if ( !btUtils.$( this ).find( '#dfp-23' ).length ) {
        btUtils.$( '#bottom-line-columns' ).append( btUtils.$( this ).html() );
        btUtils.$( this ).remove();
      }
    });

    // Add dummy containers so we have a place to position the ads that still have to be juggled
    this.$( '#bottom-line-columns' ).append( '<div id="bottom-line-dummy-ad" style="width: 300px; height: 250px; float: left;"></div>' );
    //Removed 2014-05-22 (brollins)
    //this.$( '#bottom-line-columns' ).after( '<div id="contextual-dummy-ad" style="width: 728px; height: 90px; margin: auto auto 20px auto;"></div>' );
*/
    
    // Reposition ads 
    window.setInterval( function() {
      //btUtils.adPositioner( '#bottom-line-dummy-ad', '#region10' );
      btUtils.adPositioner( '#contextual-dummy-ad', '#sponsorLinks' );
    }, 1000 );

  },
  adPositioner : function( basisEl, repositionEl ) {
    // A way to juggle and position ads/elements with CSS
    // [basisEl] is an element positioned where [repositionEl] needs to be
      
    function newCss( coordinates ) {
      return {
        'position' : 'absolute',
        'display' : 'block',
        'top' : coordinates.top,
        'left' : coordinates.left
      };
    }
    // Initial positioning
    var coords = btUtils.$( basisEl ).offset();
    if (typeof coords !== 'undefined') {
        this.$( repositionEl ).css( new newCss(coords) );
    }
      
    // Listener for changes in size of window
    //this.$( window ).resize( function() {
      //var coords = btUtils.$( basisEl ).offset();
      //btUtils.$( repositionEl ).css( new newCss(coords) );
    //});
  }
};

btUtils.init();

// End Region Juggling


// Only run the wallpaper ad script if there's a wallpaper ad.
dfm.$(window).load(function () { 
    if ( dfm.$('#ut_sp1').length ) 
    {
        function scroll_paper()
        {
            // These next four lines represent the four possibilities of Where The Wallpaper Should Start:
            // Line 1. On the homepage, no hot topics
            // 2. On an article page, with hot topics
            // 3. On a homepage, with hot topics
            // 4. On an article page, no hot topics
            var DFM_backg_pos=299; /* Was 255 */
            if ( dfm.$('#hot-topics').length && typeof is_it_article == 'function' && is_it_article() == true ) DFM_backg_pos=271;
            else if ( dfm.$('#hot-topics').length && is_it_home() !== true ) DFM_backg_pos=271; // Was 299
            else if ( typeof is_it_article == 'function' && is_it_article() == true ) DFM_backg_pos=235;
 
            var t=DFM_backg_pos-jQuery(window).scrollTop();
            if ( dfm.$(window).scrollTop()<=DFM_backg_pos ) {
                dfm.$('body').css('backgroundPosition','50% '+t+'px');
                dfm.$('#ut_sp1,#ut_sp2').css('margin-top',t);
            }
            else dfm.$('body').css('backgroundPosition','50% 0px');
        }


        dfm.$(window).on('scroll', function(event) {
            scroll_paper();
        });
        // We run it on page load -- it's the only way to override the existing CSS.
        scroll_paper();
    }


    // Co-branding, part two (after the nav has loaded)
    if ( dfm_cobrand == true )
    {
        // Rewrite the domain-relative nav links on the page. Hardcoded for the one domain we're co-branding on now.
        dfm.$('.dfmPrimaryNav a').attr('href', function() 
        {
            if ( is_it_article(this) == false && this.href.indexOf('www.mercurynews') > -1 ) return this.href.replace('www.mercurynews', 'www.' + dfm.env.domain);
        });
    }

});

// #############
// Resize portrait images so we don't only see forehead shots
// nav images are resized in dfm-nav-core.js    
// #############    

/* resize CP images
if(dfm.$('#region3 table:first-child .listing5Image').length) {
    dfm.$('#region3 table:first-child .listing5Image').each(function(i){
        var imageLayoutH = dfm.$(this).height();
        var imageLayoutW = dfm.$(this).width();
        if(imageLayoutH > imageLayoutW) {
            var newThis = this;
            dfm.$(this).css({"width":"80%"});
        }
    }); 
} */    

// resize skybox images
if(dfm.$('#region3 #secondary .listing5Image').length) {
    dfm.$('#region3 #secondary .listing5Image').each(function(i){
        var imageLayoutH = dfm.$(this).height();
        var imageLayoutW = dfm.$(this).width();
        if(imageLayoutH > imageLayoutW) {
            var newThis = this;
            dfm.$(this).css({"width":"75%","margin-top":"-5px"});
            //dfm.$(newThis).parent().parent().css({"text-align":"center","margin-left":"auto","margin-right":"auto"});
        }
    }); 
}   
        
// resize bottom line images
if(dfm.$('#footer .listing5Image').length) {
    dfm.$('#footer .listing5Image').each(function(i){
        var imageLayoutH = dfm.$(this).height();
        var imageLayoutW = dfm.$(this).width();
        if(imageLayoutH > imageLayoutW) {
            var newThis = this;
            dfm.$(this).css({"width":"75%","margin-top":"-12px"});
            //dfm.$(newThis).parent().parent().css({"text-align":"center","margin-left":"auto","margin-right":"auto"});
        }
    }); 
}       


dfm.$(window).load(function () { 

    // 
    // FOOTER EDITS
    //
    

    // Append the footer bits we haven't appended yet.
    if (  typeof dfmNav != 'undefined' )
    {
        // Since we now have two h2 tags on articles, one of which is the parent section when not null, we potentially have
        // an extra breadcrumb item
        var parent_section_name = dfm.$('h2#dfmPageTitle').text().trim();
        var section_name = dfm.$('h2#articleOverline').text().trim();
        var no_parent = (parent_section_name === section_name) ? true : false;

        function breadcrumb_item(name, url)
        {
            if ( name == 'Home' || name == 'home' || name == '&nbsp;' ) return '';
            // When we have a parent section and don't want it "active"
            if (!no_parent && name === parent_section_name) return '<!-- no_parent --><li><a href="' + url + '">' + name + '</a></li>';
            if ( url == '' ) return '<li class="active">' + name + '</li>';
            if ( typeof url == 'undefined' ) return '<!-- undefined --><li><a href="#">' + name + '</a></li>';
            return '<li><a href="' + url + '">' + name + '</li>';
        }

        function build_breadcrumbs(nav, section)
        {
            // Take the dfmNav.pData.nav array, the
            // and return the breadcrumb markup.
            // If we're on a section that's not in the nav, return 
            // a simpler breadcrumb.
            var path = document.location.pathname;
            var section_url = '';
            
            // Check if we're on an article. If we are, we need to parse out
            // the part of the path that's the actual section.
            var article_test = path.split("/ci_");
            if ( article_test.length > 1 ) 
            {
                path = article_test[0];
                section_url = path;
            }

            // Strip out slashes. This normalizes against inconsistent nav strings.
            var kill_slashes = /\//g;
            path = path.replace(kill_slashes, '');

            // We set these for use in figuring out if we've got a match in the nav.
            var the_index, the_child_index, child_index_placeholder = -1;
            var child_crumb = [];

            // .map() does not suit our needs here, this code should be refactored.
            /* For Now
            var parent_crumb = nav.map( function(item, index) {
                var section_url_tmp = item.navURL;
                // If our url matches a top-level nav item:
                if ( article_test.length > 1 ) section_url_tmp = article_test[0];
                if ( path == item.navUrl ) { the_index = index; return breadcrumb_item(item.navTitle, section_url_tmp); }
                if ( 'navChildren' in item )
                {
                    child_crumb = item.navChildren.map( function(child_item, child_index) {
                        // Some clean-up on paths will be necessary.
                        if ( path == child_item.navChildLink.replace(kill_slashes, '') )
                        {
                            var child_section_url_tmp = '';
                            if ( article_test.length > 1 ) child_section_url_tmp = child_item.navChildLink;
                            the_child_index = child_index;
                            child_index_placeholder = child_index;
                            return breadcrumb_item(item.navTitle, item.navURL) + breadcrumb_item(child_item.navChildTitle, child_section_url_tmp);
                        } 
                    });
                    if ( child_index_placeholder > -1 ) { the_index = index; child_index_placeholder = -1; return child_crumb; }
                }
                return undefined;
            });
            // note: commenting out until we can get it to function right on section indexes. if ( the_child_index > -1 ) return parent_crumb[the_index][the_child_index];
            // if ( the_index > -1 ) return parent_crumb[the_index];
            */
            // In case we have no matches in the nav taxonomy.
            if ( section === '' ) return '';
            return breadcrumb_item(section, section_url);
        }

        if ( is_it_home() == false && SectionName.indexOf('News, Sports') < 0 )
        {
            // Add the section breadcrumbs.
            // Believe it or not, that jquery if statement is the only way to see if there is content we should be addressing
            // in #region1, and even as it stands it may not be sufficient to distinguish between hidden content and 
            // visible content.
            var the_region = '#region3';
            if ( dfm.$('#region1 table tr td *').length > 1 ) the_region = '#region1';
            if ( no_parent ) {
                dfm.$(the_region).prepend('<header id="article-top"><ul style="margin-top:10px;" class="breadcrumb block small hide-for-phone"><li><a href="/">Home</a><span class="divider"> &rarr;</span></li>' + build_breadcrumbs(dfmNav.pData.nav, section_name) + '</ul></header>');
            }
            else {
                dfm.$(the_region).prepend('<header id="article-top"><ul style="margin-top:10px;" class="breadcrumb block small hide-for-phone"><li><a href="/">Home</a><span class="divider"> &rarr;</span></li>' + build_breadcrumbs(dfmNav.pData.nav, parent_section_name) + build_breadcrumbs(dfmNav.pData.nav, section_name) + '</ul></header>');
            }
            // Add a breadcrumb to articles
            if ( typeof is_it_article == 'function' && is_it_article() == true ) dfm.$('#article-top ul').append('<li class="active">Story</li>');

            // Link up the section header on article pages, also make that path-part a class on the body tag.
            var the_path = document.location.pathname.split('/ci');
            dfm.$('body').addClass('bt' + the_path[0].replace('/', '').replace('/', '').replace('-', '_'));
            if ( typeof is_it_article == 'function' && is_it_article() == true ) 
            {
                dfm.$('h2#dfmPageTitle, h1#dfmPageTitle').html('<a href="' + the_path[0] + '">' + $('h2#dfmPageTitle, h1#dfmPageTitle').text() + '</a>');
            }

        }

    }





    // TIMEAGO for the home and section templates
    if ( dfm.$('.listingItemDate').length && typeof dfm.$.timeago != 'undefined' )
    {
        dfm.$('.listingItemDate').each(function(i){
            // Let's strip the timezone declaration, otherwise it breaks in Chrome.
            var timestamp = dfm.$(this).html().replace(/ ([A-Z]+[DS]+T)/gi, '');
            var thetimeago = dfm.$.timeago(timestamp);
            if ( thetimeago.indexOf("year") == -1 )
            {
                //if ( thetimeago.indexOf("year") == -1 ) dfm.$(this).show();
                dfm.$(this).html(thetimeago);
                if ( thetimeago.indexOf("min") > 0 ) dfm.$(this).css('color', '#8D1427');
                dfm.$(this).addClass('timestamp');
                dfm.$(this).show();
            }
            else
            {
                dfm.$(this).hide();
            }
        });
        dfm.$('#region3 .otherItemBox  .listNoImage .listingItemDate').hide();  
    }

    if ( dfm.$('.listingItemDateWithBlurb').length && typeof dfm.$.timeago != 'undefined' )
    {
        dfm.$('.listingItemDateWithBlurb').each(function(i){
            // Let's strip the timezone declaration, otherwise it breaks in Chrome.
            var timestamp = dfm.$(this).html().replace(/ ([A-Z]+[DS]+T) ?-?/gi, '');
            timestamp = timestamp.replace('<br>', '');

            var thetimeago = dfm.$.timeago(timestamp.trim());

            dfm.$(this).addClass('timestamp meta source');
            if ( thetimeago.indexOf("year") == -1 )
            {
                dfm.$(this).show();
                dfm.$(this).html(thetimeago);
            }
            else dfm.$(this).html(thetimeago);
            dfm.$(this).parent().append(dfm.$(this));

        });
    }

    //Timeago for RSS Display portlet
    if ( dfm.$('.RSSDisplayItemPubDate').length && typeof dfm.$.timeago != 'undefined' )
    {
    dfm.$('.RSSDisplayItemPubDate').each(function(i){
        //change yy date to yyyy
        var yearFormat = dfm.$(this).html();
        yearFormat = yearFormat.split('/');
        newYearFormat = yearFormat[0] + '/' + yearFormat[1] + '/20' + yearFormat[2];
        
        var thetimeago2 = dfm.$.timeago(newYearFormat);
        dfm.$(this).addClass('timestamp meta source');
        if ( thetimeago2.indexOf("year") == -1 )
        {
            dfm.$(this).show();
            dfm.$(this).html(thetimeago2);
        }
        else dfm.$(this).html(thetimeago2);
        dfm.$(this).parent().append(dfm.$(this));
        dfm.$(this).prev().remove();
    });
    }

    // ARTICLE-SPECIFIC
    if ( typeof is_it_article == 'function' && is_it_article() == true ) {
        // Kill the section title if it looks like it's a homepage section.
        if ( SectionName.indexOf('News, Sports') > 0 ) dfm.$('h2#dfmPageTitle, h1#dfmPageTitle').html('&nbsp;');

        if ( typeof dfm.$.timeago != 'undefined' )
        {
        // This bit of jQuery aligns the datestamps on the same row as the byline.
        // We've got to remove() calls because that id is used in the hard-coded markup... twice.
        dfm.$('.articleSecondaryDate .updated').remove();
        var articleTimestamp = {
        posted: dfm.$('.articleDate').html(),
        updated: dfm.$('.articleSecondaryDate').html(),
        output: ''
        };
        if ( typeof articleTimestamp.posted != 'undefined' ) articleTimestamp.output = articleTimestamp.posted;

        if ( articleTimestamp.updated != null && typeof articleTimestamp.updated != 'undefined' ) 
        {
        articleTimestamp.updated_clean = articleTimestamp.updated.replace('Updated:', '').replace('&nbsp;', '').replace(/ ([A-Z]+[DS]+T)/gi, '').trim();
        articleTimestamp.timeago = dfm.$.timeago(articleTimestamp.updated_clean);
        articleTimestamp.output += " <span style='padding:0 10px;'>|</span> <span id='dateUpdated' title='" + articleTimestamp.updated_clean + "'>Updated: &nbsp; " + articleTimestamp.timeago + "</span>";
        }
        dfm.$('#articleDate').remove();
        dfm.$('#articleDate').remove();//WHY DO WE HAVE THIS HERE TWICE? Ed 07-10-14
        dfm.$('#articleByline').append('<div id="articleDate" class="articleSecondaryDate meta">' + articleTimestamp.output + '</div>');
        } // close typeof dfm.$.timeago != 'undefined'


        // Put together the Take Action links, append them to the article.
        //window.console && console.log('dfmNav: ' + dfmNav);
        if (dfmNav.pData.takeaction)
        {
            var actionLinks = '';
            for ( var item in dfmNav.pData.takeaction )
            {
                // The "Corrections," if a mailto:email address, needs to reference the article it's coming from.
                // If it is Corrections, the mailto: will have a string ARTICLEURL we can swap out.
                if ( item.indexOf('orrection') > -1 ) dfmNav.pData.takeaction[item] = dfmNav.pData.takeaction[item].replace('ARTICLEURL', document.location.href);
                if ( typeof item != "undefined" && item in dfmNav.pData.takeaction ) actionLinks += '<li><a href="' + dfmNav.pData.takeaction[item] + '">' + item + '</a></li>\n';
            }

            var actionRelated = '<div id="actionRelated"><div id="relatedCL" class="complexListingBox">' + dfm.$('#region3 .complexListingBox').html() + '</div><div id="takeAction" class="link-list span2"><h4>Take Action</h4><ul>' + actionLinks + '</ul></div><div style="clear:both;"></div></div>';

            dfm.$('#region3 .complexListingBox').remove();
//            dfm.$('.articleFooterLinks').after(actionRelated);
            
            if(dfm.api("data","actualDomain").indexOf("ydr.com") > -1 || dfm.api("data", "actualDomain").indexOf("berkshireeagle.com") > -1) {
              dfm.$(".region3").append(actionRelated);
            } else {
              if ($('#outbrain_widget_1').width()>0) {
                dfm.$('#outbrain_widget_1').after(actionRelated);
              } else {
                dfm.$('.articleFooterLinks').after(actionRelated);
              }
            }
        }
    } // Close if ( typeof is_it_article == 'function' && is_it_article() == true ) 
});


// #############
// Load the property ownlocal widget
// #############
setTimeout('olBandAid()',2000);
function olBandAid(){    
 hostUrl = document.location.hostname;
 var strHostUrl = hostUrl.toString();
 //var strHostUrl = strHostUrl.replace(/-/g,"");  //removed 6/17/15 by RK
 parts = strHostUrl.split('.');
 u = parts[parts.length-2]+"."+parts[parts.length-1];
 if ( typeof dfmNav !== 'undefined' && dfmNav.pData && dfmNav.pData.loc && dfmNav.pData.loc.city ) {
    if ( typeof dfmNav.pData.loc != 'undefined' ){
        switch(dfmNav.pData.loc.city){
            case "San Rafael":
                dfmNav.pData.loc.city = "Marin";
                break;
                
            case "Scotts Valley":   
                dfmNav.pData.loc.city = "Santa Cruz";
                break;
                
            default:
                dfmNav.pData.loc.city = dfmNav.pData.loc.city;
                break;
        }
    }
      var scriptOL = document.createElement( 'script' );
      scriptOL.type = 'text/javascript';
      scriptOL.id = 'ownLocalJS';
      scriptOL.src = 'http://extras.mnginteractive.com/live/js/ownLocal/ownLocalRDSv4.js?domain=mylocal.' + u + '&city=' + dfmNav.pData.loc.city + '&state=' + dfmNav.pData.loc.state;
      dfm.$('head')[0].appendChild(scriptOL);
  }
    dfm.$('.weatherIcon').css('height', '10px');
    dfm.$('.weatherIcon').show();
}

// #############
// Begin Blog Rotator widget
// #############
//document.location.hash == '#dev'
//&& 'blogrotator' in dfmNav.pData 
//if ( is_it_home() === true && document.location.hash == '#dev') //$.getScript('http://extras.denverpost.com/media/js/jquery/jcarousellite_1.0.1.min.js');
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://extras.denverpost.com/media/js/jquery/jcarousellite_1.0.1.min.js';
dfm.$('head')[0].appendChild(script);
if ( is_it_home() === true && document.location.hash == '#dev' || dfm.$('#turn-on-the-blog-rotator').length ) 
{
$(document).ready(function() {

rotatorInt = setInterval(function(){
 if ( 'jCarouselLite' in $("#blog-widget-large-carousel") && $('#blog-widget-items li').length > 1 )
 {
    $("#blog-widget-large-carousel").jCarouselLite({
        vertical: false,
                btnNext: "#blog-widget-large-forward",
                btnPrev: "#blog-widget-large-backward",
                speed: 550,
                scroll:1,
                circular:true});
    window.clearInterval(rotatorInt);
 }
},500);

});

}

if ( is_it_home() === true && document.location.hash == '#dev' || dfm.$('#turn-on-the-blog-rotator').length ) 
{
var tmp_domain = dfm.env.domain;
if ( tmp_domain == 'vivacolorado' ) tmp_domain = 'blog';

dfm.$.getScript('http://extras.denverpost.com/cache/' + tmp_domain + '-all-rotator.js');

dfm.$('#mc-widget-container-large').after(dfm.$('#blogrotator'));
dfm.$('#blogrotator').show();
$(document).ready(function() {
rotatortextInt = setInterval(function(){
    if ( typeof rotatortext1 !== 'undefined' )
    {
        dfm.$('#blog-widget-items').html(rotatortext1 + rotatortext2 + rotatortext3 + rotatortext4);
        
        window.clearInterval(rotatortextInt);
    }
},500);
});

}

// #############
// End Blog Rotator widget
// #############
// #############
  // Begin Most Popular widget
  // #############
function is_in()
{ 
  var sites = [138,139,14,18,140,183,502,515,556,525,53,557,558,559,561,562,563,567];
  var banderazo=0;
  for(var indice=0;indice<sites.length;indice++)
  {
    if(eval(dfm.api("data","siteId"))==sites[indice])
      banderazo=1;
  }
  if (banderazo ==0) {return true;}
  else {return false;}
}
if(is_in())
{
  var side=0;
  var clicado=0;
  
  if ( typeof dfmNav !== 'undefined' )
  {
  if ( document.location.hash === '#dev' ) window.console && console.log("typeof dfmNav !== 'undefined'");

  /*
  var popTester = self.setInterval(function(){     
       if(typeof dfmNav != 'undefined' ) {      
        window.clearInterval(popTester); //Kill the setInterval.
       }
      }, 100 );
  */

  if ( typeof dfmNav.pData !== 'undefined' && typeof dfmNav.pData.pop_config !== 'undefined' ) 
  {

    if ( document.location.hash === '#dev' ) window.console && console.log("typeof dfmNav.pData !== 'undefined' && typeof dfmNav.pData.pop_config !== 'undefined'");

    if ( document.location.pathname.indexOf('sports') > -1 ) dfmNav.pData.pop_config.loadthistab = 'sports';
    else if ( document.location.pathname.indexOf('news') > -1 ) dfmNav.pData.pop_config.loadthistab= 'news';
    else if ( document.location.pathname.indexOf('entertainment') > -1 ) dfmNav.pData.pop_config.loadthistab= 'entertainment';
    var pop_config = dfmNav.pData.pop_config;

    if ( is_it_home() == true || is_it_article() == true || typeof pop_section !== 'undefined' ) 
    {
        if ( is_it_home() == true || typeof pop_section !== 'undefined' ) 
        {
            dfmNav.pData.pop_config.id = '#region8';
            if ( typeof pop_section !== 'undefined' && pop_section !== '' ) dfmNav.pData.pop_config.id = '#' + pop_section;
        }

        //if ( is_it_article() == true )
        if ( is_it_article() == true && typeof pop_section === 'undefined' )
        {
            article_pop = setInterval(function(){
                if ( dfm.$('#relatedCL').length ) 
                {
                    dfmNav.pData.pop_config.id = '#relatedCL';
                    dfmNav.pData.pop_config.location = 'replace';
                    dfmNav.pData.pop_config.quantity = 4;
                    // If the js has already been loaded we load the widget ourselves
                    if ( dfm.$('pop_js').length ) load_pop_widget(dfmNav.pData.pop_config);
                    else side=1;
                    window.clearInterval(article_pop);
                }
            },500);
        }
        // WHY ARE WE USING eval?? bad, bad, bad. there's never a good reason for using eval. Ed 07-10-14
        eval ("var write_"+dfm.env.domain.replace('-', '')+"_widget_photos_hour8 = write_"+dfm.env.domain.replace('-', '')+"_widget_hour8 = write_"+dfm.env.domain.replace('-', '')+"_widget_hourly8 = false;");
        side=1;
        dfm.$('.popnote').css('display', 'none');
    }
  }
  else
  {
     if ( is_it_home() == true || is_it_article() == true || typeof pop_section !== 'undefined' ) 
        side=1;
  }
  }
  // #############
  // End Most Popular widget
  // #############

  // #############
  // Begin Most Popular in-article rankings
  // #############
  // The Most-Popular addon puts a little blurb of text 
  // at the bottom of an article that lets readers know
  // where this article is in the most-pop rankings,
  // and directs them to other most-pop content.

  function to_ordinal(num)
  {
      var n = num % 100;
      var suff = ["th", "st", "nd", "rd", "th"]; // suff for suffix
      var ord= n<21?(n<4 ? suff[n]:suff[0]): (n%10>4 ? suff[0] : suff[n%10]);
      if ( num == 1 ) return '<strong>#1</strong>';
      return num + ord;
  }

  /*
  var pop_lookups = {
      section: typeof(pop_section), section_article: 'undefined',
      full: typeof(pop_full), full_article: 'undefined',
      hour: typeof(pop_hour), hour_article: 'undefined',
      sansstate: typeof(pop_sansstate), sansstate_article: 'undefined',
      sansstate_hour: typeof(pop_sansstate_hour), sansstate_hour_article: 'undefined',
      state: typeof(pop_state), state_article: 'undefined',
      state_hour: typeof(pop_state_hour), state_hour_article: 'undefined',
      city: typeof(pop_city), city_article: 'undefined'
  }

  if ( pop_lookups.section != 'undefined' ) pop_lookups.section_article = typeof(pop_section[article_id]);
  if ( pop_lookups.full != 'undefined' ) pop_lookups.full_article = typeof(pop_full[article_id]);
  if ( pop_lookups.hour != 'undefined' ) pop_lookups.hour_article = typeof(pop_hour[article_id]);
  if ( pop_lookups.sansstate != 'undefined' ) pop_lookups.sansstate_article = typeof(pop_sansstate[article_id]);
  if ( pop_lookups.sansstate_hour != 'undefined' ) pop_lookups.sansstate_hour_article = typeof(pop_sansstate_hour[article_id]);
  if ( pop_lookups.state != 'undefined' ) pop_lookups.state_article = typeof(pop_state[article_id]);
  if ( pop_lookups.state_hour != 'undefined' ) pop_lookups.state_hour_article = typeof(pop_state_hour[article_id]);
  if ( pop_lookups.city != 'undefined' ) pop_lookups.city_article = typeof(pop_city[article_id]);
  */
  dfm.$(document).ready(function(){
      if ( is_it_article() == true && typeof pop_config !== 'undefined' ) 
      {
          popInt = setInterval(function(){
              var pop_flag = false;
              // If we have a number on the section-based lookup or the full lookup or the hour lookup,
              // we know we've got something to publish.
              //
              // The challenge here is creating a legible sentence with the six possible combinations.
              if ( typeof pop_lookups !== 'undefined' )
              {                                
                  clicado=1;               
                  pop_flag = true;                
                  window.clearInterval(popInt); //Kill the setInterval.
              }
          },500);
      }
  });
  // #############
  // End Most Popular in-article rankings
  // #############
  dfm.$.getScript('http://extras.mnginteractive.com/live/test/sidebar-widget.js');
}
else
{
    if ( typeof dfmNav !== 'undefined' )
    {
    if ( document.location.hash === '#dev' ) window.console && console.log("typeof dfmNav !== 'undefined'");

    /*
    var popTester = self.setInterval(function(){     
         if(typeof dfmNav != 'undefined' ) {      
          window.clearInterval(popTester); //Kill the setInterval.
         }
        }, 100 );
    */

    if ( typeof dfmNav.pData !== 'undefined' && typeof dfmNav.pData.pop_config !== 'undefined' ) 
    {

    if ( document.location.hash === '#dev' ) window.console && console.log("typeof dfmNav.pData !== 'undefined' && typeof dfmNav.pData.pop_config !== 'undefined'");

    if ( document.location.pathname.indexOf('sports') > -1 ) dfmNav.pData.pop_config.loadthistab = 'sports';
    else if ( document.location.pathname.indexOf('news') > -1 ) dfmNav.pData.pop_config.loadthistab= 'news';
    else if ( document.location.pathname.indexOf('entertainment') > -1 ) dfmNav.pData.pop_config.loadthistab= 'entertainment';
    var pop_config = dfmNav.pData.pop_config;

    if ( is_it_home() == true || is_it_article() == true || typeof pop_section !== 'undefined' ) 
    {
        if ( is_it_home() == true || typeof pop_section !== 'undefined' ) 
        {
            dfmNav.pData.pop_config.id = '#region8';
            if ( typeof pop_section !== 'undefined' && pop_section !== '' ) dfmNav.pData.pop_config.id = '#' + pop_section;
        }

        //if ( is_it_article() == true )
        if ( is_it_article() == true && typeof pop_section === 'undefined' )
        {
            article_pop = setInterval(function(){
                if ( dfm.$('#relatedCL').length ) 
                {
                    dfmNav.pData.pop_config.id = '#relatedCL';
                    dfmNav.pData.pop_config.location = 'replace';
                    dfmNav.pData.pop_config.quantity = 4;
                    // If the js has already been loaded we load the widget ourselves
                    if ( dfm.$('pop_js').length ) load_pop_widget(dfmNav.pData.pop_config);
                    else dfm.$.getScript('http://extras.denverpost.com/cache/popular/' + dfm.env.domain + '-widget.js');
                    window.clearInterval(article_pop);
                }
            },500);
        }
        // WHY ARE WE USING eval?? bad, bad, bad. there's never a good reason for using eval. Ed 07-10-14
       eval ("var write_"+dfm.env.domain.replace('-', '')+"_widget_photos_hour8 = write_"+dfm.env.domain.replace('-', '')+"_widget_hour8 = write_"+dfm.env.domain.replace('-', '')+"_widget_hourly8 = false;");
        dfm.$.getScript('http://extras.denverpost.com/cache/popular/' + dfm.env.domain + '-widget.js');
        dfm.$('.popnote').css('display', 'none');
    }
    }
    }
    // #############
    // End Most Popular widget
    // #############

    // #############
    // Begin Most Popular in-article rankings
    // #############
    // The Most-Popular addon puts a little blurb of text 
    // at the bottom of an article that lets readers know
    // where this article is in the most-pop rankings,
    // and directs them to other most-pop content.

    function to_ordinal(num)
    {
        var n = num % 100;
        var suff = ["th", "st", "nd", "rd", "th"]; // suff for suffix
        var ord= n<21?(n<4 ? suff[n]:suff[0]): (n%10>4 ? suff[0] : suff[n%10]);
        if ( num == 1 ) return '<strong>#1</strong>';
        return num + ord;
    }

    /*
    var pop_lookups = {
        section: typeof(pop_section), section_article: 'undefined',
        full: typeof(pop_full), full_article: 'undefined',
        hour: typeof(pop_hour), hour_article: 'undefined',
        sansstate: typeof(pop_sansstate), sansstate_article: 'undefined',
        sansstate_hour: typeof(pop_sansstate_hour), sansstate_hour_article: 'undefined',
        state: typeof(pop_state), state_article: 'undefined',
        state_hour: typeof(pop_state_hour), state_hour_article: 'undefined',
        city: typeof(pop_city), city_article: 'undefined'
    }

    if ( pop_lookups.section != 'undefined' ) pop_lookups.section_article = typeof(pop_section[article_id]);
    if ( pop_lookups.full != 'undefined' ) pop_lookups.full_article = typeof(pop_full[article_id]);
    if ( pop_lookups.hour != 'undefined' ) pop_lookups.hour_article = typeof(pop_hour[article_id]);
    if ( pop_lookups.sansstate != 'undefined' ) pop_lookups.sansstate_article = typeof(pop_sansstate[article_id]);
    if ( pop_lookups.sansstate_hour != 'undefined' ) pop_lookups.sansstate_hour_article = typeof(pop_sansstate_hour[article_id]);
    if ( pop_lookups.state != 'undefined' ) pop_lookups.state_article = typeof(pop_state[article_id]);
    if ( pop_lookups.state_hour != 'undefined' ) pop_lookups.state_hour_article = typeof(pop_state_hour[article_id]);
    if ( pop_lookups.city != 'undefined' ) pop_lookups.city_article = typeof(pop_city[article_id]);
    */
    dfm.$(document).ready(function(){
        if ( is_it_article() == true && typeof pop_config !== 'undefined' ) 
        {
            popInt = setInterval(function(){
                var pop_flag = false;
                // If we have a number on the section-based lookup or the full lookup or the hour lookup,
                // we know we've got something to publish.
                //
                // The challenge here is creating a legible sentence with the six possible combinations.
                if ( typeof pop_lookups !== 'undefined' )
                {
                    if ( pop_lookups.section_article != 'undefined' || pop_lookups.full_article != 'undefined' || pop_lookups.hour_article != 'undefined' ) 
                    {
                        if ($('#outbrain_widget_1').width()>0) {
                          dfm.$('#outbrain_widget_1').after('<div id="the-most-popular"><h3 class="articleSubHead">This article is the:</h3><div id="the-most-list"><ul></ul></div></div>');
                        } else {
                          dfm.$('.articleBox').append('<div id="the-most-popular"><h3 class="articleSubHead">This article is the:</h3><div id="the-most-list"><ul></ul></div></div>');
                        }
                        if ( pop_lookups.hour_article != 'undefined' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular#popularhour"><strong>' + to_ordinal(pop_hour[articleId]) + '</strong> most-clicked of the hour</a></li>');
                        if ( pop_lookups.full_article != 'undefined' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular"><strong>' + to_ordinal(pop_full[articleId]) + '</strong> most-clicked of the day</a></li>');
                        if ( pop_lookups.state_article != 'undefined' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular#popularstate"><strong>' + to_ordinal(pop_state[articleId]) + '</strong> most-clicked among Colorado readers of the day</a></li>');
                        if ( pop_lookups.state_hour_article != 'undefined' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular#popularstate"><strong>' + to_ordinal(pop_state_hour[articleId]) + '</strong> most-clicked among Colorado readers of the hour</a></li>');
                        if ( pop_lookups.sansstate_article != 'undefined' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular"><strong>' + to_ordinal(pop_sansstate[articleId]) + '</strong> most-clicked among readers outside Colorado of the day</a></li>');
                        if ( pop_lookups.sansstate_hour_article != 'undefined' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular"><strong>' + to_ordinal(pop_sansstate_hour[articleId]) + '</strong> most-clicked among readers outside Colorado of the hour</a></li>');
                        if ( pop_lookups.city_article != 'undefined' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular#popularstate"><strong>' + to_ordinal(pop_city[articleId]) + '</strong> most-clicked among Denver readers</a></li>');
                        if ( pop_lookups.section_article != 'undefined' ) 
                        {
                            if ( pop_section_name[articleId] == 'emailed' ) dfm.$("#the-most-popular ul").append('<li><a href="/popular#pop-' + pop_section_name[articleId] + '"><strong>' + to_ordinal(pop_section[articleId]) + '</strong> most-emailed today</a></li>');
                            else dfm.$("#the-most-popular ul").append('<li><a href="/popular#pop-' + pop_section_name[articleId] + '"><strong>' + to_ordinal(pop_section[articleId]) + '</strong> most-clicked among ' + pop_section_name[articleId] + ' articles today</a></li>');
                        }
                        dfm.$("#the-most-popular ul").append('<li><a href="#top">&#8679;&nbsp;<em>Return to top</em></a></li>');
                        dfm.$("#the-most-popular").append('<div style="clear:both;"></div>');
                        pop_flag = true;
                    }
                    window.clearInterval(popInt); //Kill the setInterval.
                }
            },500);
        }
    });

}
// #############
// End Most Popular in-article rankings
// #############


// On sections, if we're linking to that same section in a header title, kill that link.
if ( dfm.env.domain == 'vivacolorado' && is_it_article() == false )
{
    dfm.$('h2.complexListingTitle').attr('class', function() 
    {
        if ( this.href == document.location.href ) { return 'noclick complexListingTitle'; }
    });
    dfm.$('h2.complexListingTitle').attr('href', function() 
    {
        if ( this.href == document.location.href ) { dfm.$(this).attr('class', ''); return 'javascript:void();'; }
    });
}
