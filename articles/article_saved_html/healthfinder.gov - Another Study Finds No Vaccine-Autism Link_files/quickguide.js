(function ($) {
    var UpdateHashCount = 0;
    var pageType = 'tabbed';

    $(document).ready(function () {
        if ($('div.health-topic-topic, div.health-topic-tool').length) {
            $('#pageDisplayToggle').click(function () {
                if (pageType == 'full') {
                    BuildTopicAreaPages();
                    BuildTopicAreas();
                    $('div.quickguide_areas').removeClass(pageType).addClass('tabbed');

                    $(this).text('Expand to Full Page');
                    $(this).removeClass(pageType).addClass('tabbed');
                    pageType = 'tabbed';

                    GoToHash();
                    window.scrollTo(0, 0);
                } else {
                    DestroyTopicAreas();
                    DestroyTopicAreaPages();
                    $('div.quickguide_areas').removeClass(pageType).addClass('full');

                    $(this).text('Back to Tabbed Page');
                    $(this).removeClass(pageType).addClass('full');

                    pageType = 'full';

                    ScrollToHash();
                }
                return false;
            }).addClass(pageType);

            $('a.toTakeAction').click(function () {
                GoToHash('#take-action_1');

                return false;
            });

            BuildTopicAreaPages();
            BuildTopicAreas();

            GoToHash();
        }
    });

    function BuildTopicAreas() {
        if ($('div.quickguide_tabs').length && $('div.quickguide_content').length) {
            $('.topic_area a.toTakeAction').show();
            $('div.quickguide_tabs ul li a').on('click', function () {
                return OpenTab($(this).parent('li').attr('data-tab'));
            });
        }
    }

    function DestroyTopicAreas() {
        $('div.quickguide_tabs ul li a').off('click');
        $('.topic_area a.toTakeAction').hide();
    }

    function BuildTopicAreaPages() {
        if ($('div.quickguide_tabs').length && $('div.quickguide_content').length) {
            $('div.topic_area').each(function () {
                var topicArea = $(this);
                var pages = $(this).find('div.pages');
                var pageNav = pages.next('div.page_navigation');

                if (pages.find('div.page').length > 1) {
                    pages.find('div.page:gt(0)').hide();

                    $(this).find('div.page_navigation a').on('click', function () {
                        var currentPage = parseInt(topicArea.attr('data-page'));
                        var $that = $(this);

                        currentPage = isNaN(currentPage) ? 0 : currentPage;

                        if ($that.hasClass('previous')) {
                            OpenPage(currentPage - 1);
                        } else if ($that.hasClass('next')) {
                            OpenPage(currentPage + 1);
                        } else {
                            OpenPage(parseInt($that.text()) - 1);
                        }

                        return false;
                    });
                    pageNav.show();
                } 
            });
        }
    }

    function DestroyTopicAreaPages() {
        $('div.topic_area').each(function () {
            $(this).find('div.page_navigation a').off('click');
            $(this).find('.page_navigation').hide();

            $(this).show();
            $(this).find('div.page').show();
        });
    }

    function OpenTab(tab) {
        //close other tabs
        $('div.quickguide_tabs ul li').removeClass('active');
        $('div.quickguide_areas div.topic_area').hide();

        //show selected tab
        $('div.quickguide_tabs ul li[data-tab="' + tab + '"]').addClass('active');
        $('#' + tab).show();

        //hide full page toggle if there is only one page
        if ($('#' + tab).find('div.pages div.page').length > 1)
            $('#pageDisplayToggle').show();
        else
            $('#pageDisplayToggle').hide();

        //if there is no current page set, open the first page
        if (!$('#' + tab).attr('data-page'))
            OpenPage(0);

        //update hash
        UpdateHash();

        return false;
    }

    function OpenPage(page) {
        var topicArea = $('div.quickguide_areas div.topic_area:visible');
        var pageTotal = topicArea.find('div.pages div.page').length;
        
        page = page < 0 ? 0 : page;
        page = page > pageTotal - 1 ? pageTotal - 1 : page;

        topicArea.find('div.page_navigation .numbers a').removeClass('active');
        topicArea.find('div.pages div.page').hide();

        topicArea.find('div.page_navigation .numbers a:eq(' + page + ')').addClass('active');
        topicArea.find('div.pages div.page:eq(' + page + ')').show();

        topicArea.find('div.page_navigation a.previous').show();
        topicArea.find('div.page_navigation a.next').show();

        if (page == 0) {
            topicArea.find('div.page_navigation a.previous').hide();
            topicArea.find('div.page_navigation a.next').show();
        }

        if (page == pageTotal - 1) {
            topicArea.find('div.page_navigation a.previous').show();
            topicArea.find('div.page_navigation a.next').hide();
        }

        UpdateHash();

        topicArea.attr('data-page', page);
    }

    function ScrollToHash(hash) {
        if (!hash)
            hash = window.location.hash || '';

        if (hash) {
            var hashes = hash.replace('#', '').split('_', 2);

            if (hashes.length == 2) {
                var index = parseInt(hashes[1]) - 1;

                if (index >= 0) {
                    var page = $('div.quickguide_areas div#'+hashes[0]+' div.page:eq(' + index + ')');

                    $('html, body').animate({
                        scrollTop: page.offset().top
                    }, 700);
                }
            }
        }
    }

    function GoToHash(hash) {

        if (!hash)
            hash = window.location.hash || '';

        if (hash) {
            window.scrollTo(0, 0);

            var hashes = hash.replace('#', '').split('_', 2);

            if (hashes.length == 1) {
                OpenTab(hashes[0]);
            } else if (hashes.length == 2) {
                var index = parseInt(hashes[1]) - 1;

                if (index >= 0) {
                    OpenTab(hashes[0]);
                    OpenPage(index);
                }
            }
        } else {
            OpenTab($('div.quickguide_tabs ul li:first').attr('data-tab'));
            OpenPage(0);
        }
    }

    function UpdateHash() {
        if (UpdateHashCount < 3) {
            UpdateHashCount++;
            return;
        }

        var hash = '';
        var activeArea = $('div.quickguide_areas div.topic_area:visible');

        if (activeArea.length) {
            hash += activeArea.attr('id');
            hash += '_' + (activeArea.find('div.pages div.page:visible').index() + 1);

            window.location.hash = hash;
        }
    }

})(jQuery);