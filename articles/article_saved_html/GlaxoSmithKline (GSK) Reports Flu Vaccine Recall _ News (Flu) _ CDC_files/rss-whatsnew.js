                        <!--//
                       $.getJSON("http://www2c.cdc.gov/podcasts/feed.asp?feedid=20&format=json&callback=?",
                           function (data) {
                               var count_items = 0
                               var list = $('<ul />');
                               $('#rss-whatsnew').append(list);
                               $.each(data.entries, function (i, entry) {

                                   if (count_items < 5) {
                                       var newItem = $('<li />');
                                       var a = $('<a class="item-title" />').html(entry.title);
                                       a.attr("href", entry.link);
                                       newItem.append(a);
                                       var d = new Date();
                                       if (isNaN(Date.parse(entry.pubdate))) {
                                           d.setTime(Date.parse(entry.pubdate.substr(5, 2) + '/' + entry.pubdate.substr(8, 2) + '/' + entry.pubdate.substr(0, 4) + ' ' +
                                               entry.pubdate.substr(11, 5)));
                                       } else {
                                           d.setTime(Date.parse(entry.pubdate));
                                       }
                                       newItem.append($('<span class="item-pubdate" />').html(d.toLocaleString()));
                                       //newItem.append($('<span class="item-description" />').html(entry.description));
                                       list.append(newItem);
                                       count_items = count_items + 1
                                   } //end if greater than 4
                               });
                           });
                        //--> 