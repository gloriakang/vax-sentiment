jQuery(document).ready(function () {

    jQuery('#userlogin-button').click(function () {
        jQuery('#header-main-menu').hide();
        jQuery('#user_status').toggle();
    });
    jQuery('button.navbar-toggle').click(function () {
        jQuery('#user_status').hide();
        jQuery('#header-main-menu').toggle();
    });

    jQuery('#main-menu-mob, #top-menu-mob').bind('change', function () {
        var url = jQuery(this).val();
        if (url) {
            window.location = url;
        }
        return false;
    });

    //Scroll To top
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#topcontrol').css({bottom: "15px"});
        } else {
            jQuery('#topcontrol').css({bottom: "-100px"});
        }
    });
    jQuery('#topcontrol').click(function () {
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

//    // jQuery Mobile Menu
//    var mainMenu = jQuery('#menu_center ul#header-main-menu');
//    if (mainMenu.length) {
//        mainMenu.mobileMenu({defaultText: 'Go to ...', className: 'main-menu-mob'});
//    }
});

jQuery(window).load(function () {
    if (jQuery('.fixed-enabled').length > 0) {
        var headerHeight = jQuery('.fixed-enabled').offset().top;
        var mainNav = jQuery('.fixed-enabled');
        jQuery(window).scroll(function () {
            var scrollY = jQuery(window).scrollTop();
            if (scrollY > headerHeight) {
                mainNav.addClass('fixed-nav');
            } else if (scrollY < headerHeight) {
                mainNav.removeClass('fixed-nav');
            }
        });
    }
});

// jQuery Mobile Menu 
(function ($) {
    $.fn.mobileMenu = function (options) {
        var defaults = {defaultText: 'Navigate to...', className: 'select-menu', subMenuClass: 'sub-menu', subMenuDash: '&nbsp; &nbsp; &ndash;'}, settings = $.extend(defaults, options), el = $(this);
        this.each(function () {
            el.find('ul').addClass(settings.subMenuClass);
            $('<select />', {'id': settings.className}).insertAfter(el);
            $('<option />', {"value": '#', "text": settings.defaultText}).appendTo('#' + settings.className);
            el.find('a:not(.mega-menu-link)').each(function () {
                var $this = $(this), optText = '&nbsp;' + $this.text(), optSub = $this.parents('.' + settings.subMenuClass), len = optSub.length, dash;
                if ($this.parents('ul').hasClass(settings.subMenuClass)) {
                    dash = Array(len + 1).join(settings.subMenuDash);
                    optText = dash + optText;
                }
                $('<option />', {"value": this.href, "html": optText, "selected": (this.href == window.location.href)}).appendTo('#' + settings.className);
            });
            $('#' + settings.className).change(function () {
                var locations = $(this).val();
                if (locations !== '#') {
                    window.location.href = $(this).val();
                }
                ;
            });
        });
        return this;
    };
})(jQuery);
