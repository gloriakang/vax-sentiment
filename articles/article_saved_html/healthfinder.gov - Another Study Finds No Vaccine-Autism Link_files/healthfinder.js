jQuery.expr[':'].parents = function (a, i, m) {
    return jQuery(a).parents(m[3]).length < 1;
};

function ReplaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    return text.replace(exp, "<a href='$1'>$1</a>");
}

(function ($) {
    $(document).ready(function () {

        $('#mobile-menu-trigger').click(function () {
            var menu = $('.main_menu ul.menu');

            if (menu.hasClass('menu-hide'))
                menu.switchClass('menu-hide', 'menu-visible', 800);
            else
                menu.switchClass('menu-visible', 'menu-hide');
        });

        $('#search-box-trigger').click(function () {
            $('#search-box').toggle();
            $(this).toggle('slow');
            $("#search-box #searchText").focus();
        });

        var width = $(window).width();
        if (width < 600) {
            $('.quickguide_tabbed_content').append($('.quickguide_sidebar'));
            $('.quickguide_tool_content').append($('.quickguide_tool_sidebar'));
        }

        $(window).resize(function () {
            var width = $(window).width();
            if (width < 600) {
                $('.quickguide_tabbed_content').append($('.quickguide_sidebar'));
            }

            if (width > 600) {
                $('.quickguide_tabbed_content').prepend($('.quickguide_sidebar'));
            }
        });

        //rotator
        var loopLimit = 1, loopCount = 0;
        $('div.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 7000,
            directionNav: false,
            pausePlay: true,
            playText: 'Resume',
            after: function (slider) {
                if (slider.currentSlide == 0)
                    loopCount++;

                if (slider.currentSlide == 0 && loopCount == loopLimit)
                    slider.pause();
            }
        });

        //external link
        var externalLinkHtml = ' <a href="/AboutUs/Disclaimer.aspx"><img border="0" alt="External Links Disclaimer Logo" src="/images/exit_disclaimer.png"></a>';
        $('div.main_content a[href^="http"]') // all that begins with http
            .filter(':not([href$=".mp3"])') // not mp3
            .filter(':not([href*=".gov"])') // not .gov sites
            .filter(':parents(#addThisCode)') //exlude add this code
            .each(function () {
                $(this).addClass("external_link")
                    .attr("target", "_blank")
                    .after(externalLinkHtml);
            });

        //news letter subscribe
        $('input.subscribe_button').click(function () {
            var email = $.trim($('input.subscribe_text').val());
            var subscribeURL = "https://service.govdelivery.com/service/multi_subscribe.html?code=USOPHSODPHPHF&origin=" + escape("http://www.healthfinder.gov/") + "&login=" + email;

            if (email.length) {
                window.open(subscribeURL, "_blank");
            }

            return false;
        });

        var redirectTimeout;
        $('#connect-bar .facebook, #connect-bar .twitter, #aboutus-socialmedia a.facebook, #aboutus-socialmedia a.twitter, #social-media-page-content a.facebook, #social-media-page-content a.twitter').colorbox({
            html: function (a) {
                var html = '<p><strong>This hyperlink will direct you to a non-governmental Website or application.</strong></p>';
                html += '<p>The appearance of external hyperlinks does not constitute endorsement by the United States Department of Health & Human Services (HHS) ';
                html += 'of the hyperlinked Website or application, or the information, products or services contained therein. ';
                html += 'Such hyperlinks are provided consistent with the intended purpose of this HHS Website. Visitors to the hyperlinked Website ';
                html += 'or application will be subject to the Website or application\'s privacy policies. These practices may be different than those of this HHS Website.</p><hr/><p>You will be redirected to: [link]</p>'

                var link = $(this).attr('href');
                link = link.split('?', 2);
                link = link[1].split('=', 2);
                link = decodeURIComponent(link[1].replace('&text', ''));

                return html.replace('[link]', '<a href="' + link + '">' + $(this).attr('title') + '</a>');
            },
            width: 600,
            height: 320,
            title: ' ',
            onComplete: function () {
                var link = $(this).attr('href');
                link = link.split('?', 2);
                link = link[1].split('=', 2);
                link = decodeURIComponent(link[1].replace('&text', ''));

                redirectTimeout = setTimeout(function () {
                    window.location = link;
                }, 5000);
            },
            onClosed: function () {
                clearTimeout(redirectTimeout);
            }
        });
    });
})(jQuery);