
// Widget
var ownLocalWidget = {
	params : [],
	loadParams: function() {
		//var parts2 = "http://www.something.com?domain=mylocal.santacruzsentinel.com&city=Santa Cruz&state=ca";
		//var parts = parts2.split('?');
		var parts = $('#ownLocalJS').attr('src').split('?');
		parts = parts[1].split('&');
		for(var i=0; i < parts.length; i++) {
			var t = parts[i].split('=');
			//Fix booleans
			if (t[1] === "true") {
				t[1] = true;
			} 
			else if (t[1] === "false") {
				t[1] = false;
			} //Fix numbers	
			else if (t[1] == parseFloat(t[1])) {
				t[1] = parseFloat(t[1]);
			}
			this.params[t[0]] = t[1];
		}
	},
	createWidget: function() {
		var ownLocalNoSpaceCity = this.params['city'].replace(/\s/g, ""),
			ownLocalLowercaseCity = ownLocalNoSpaceCity.toLowerCase(),
			domainCityState = "http://" + this.params['domain'].toLowerCase() + "/" + ownLocalLowercaseCity + "-" + this.params['state'].toLowerCase(),
			theWidget = '<div id="dfm-ownlocal-widget"> \
				  <h3><a href="http://' + this.params["domain"] + '/" target="_blank">' + this.params["city"] + ' Local Guide</a></h3>\
				  <div id="ownlocal-business-list" class="widget-section">\
				    <h4>Featured Businesses</h4>\
					<ul>\
					  <li> Loading... </li>\
					</ul>\
				  </div>\
				  <ul id="ownlocal-business-list-template">\
					<li>\
					  <a target="_blank" class="ownlocal-business-link"></a>\
					  <div class="ownlocal-business-popup-info">\
						<h4><a target="_blank" href="#">Business Name</a></h4>\
						<p>address<br/>Location, ST | <a href="#">website.com</a></p>\
					  </div>\
					</li>\
				  </ul>\
				  <div class="widget-section" id="ownlocal-dropdown">\
				    <div class="dfm-ol-btn-group">\
						<button type="button" class="dfm-ol-btn dfm-ol-default">Find ' + this.params["city"] + ' Attractions&nbsp;&nbsp;</button>\
					  <button type="button" class="dfm-ol-btn dfm-ol-primary dfm-ol-dropdown-toggle" data-toggle="dropdown">\
					    <span class="caret"></span>\
					  </button>\
					  <ul class="dropdown-menu">\
					  <li><a target="_blank" href="' + domainCityState + '/nightlife/bars">'  + this.params["city"] + ' Bars</a></li>\
						<li><a target="_blank" href="' + domainCityState + '/restaurants/">'  + this.params["city"] +  ' Restaurants</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/beauty-and-wellness/beauty-shop">Beauty Salons</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/arts-and-entertainment">Entertainment in ' + this.params["city"] + '</a></li>\
					  <li><a target="_blank" href="' +domainCityState + '/medical/physicians">Doctors</a></li>\
					<li><a target="_blank" href="' + domainCityState + '/medical/medical-specialists">Medical Specialists</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/education/">Education in ' + this.params["city"] + '</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/lawn-and-garden/lawn-care">Lawn Services</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/legal/attorneys">Lawyers in ' + this.params["city"] + '</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/shopping">Shopping in ' + this.params["city"] + '</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/travel">Travel to ' + this.params["city"] + '</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/beauty-and-wellness/tanning">Tanning in ' + this.params["city"] + '</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/auto/used-auto-dealer">Used Cars in ' + this.params["city"] + '</a></li>\
					  <li><a target="_blank" href="' + domainCityState + '/wedding-and-party">Wedding Services</a></li>\
					  </ul>\
					</div>\
				  </div>\
				  <div class="widget-section" id="ownlocal-search-form">\
				    <h4>Search for a business</h4>\
					<div class="input-group">\
					  <form target="_blank" action="http://' + this.params["domain"] + '/search">\
					    <input type="text" name="query" id="ownlocal-custom-search-field" class="text" value="" title="Search by keyword or Zip"/>\
					  <span class="dfm-ol-input-group-btn">\
						  <button class="dfm-ol-btn dfm-ol-primary" type="submit"><span class="glyphicon glyphicon-search"></span></button>\
					  </span>\
					  </form>\
					</div>\
                  </div>\
				  <div class="widget-section" id="ownlocal-add-business-link">\
				    <p>\
					<a target="_blank" href="http://' + this.params["domain"] + '/#add_business">Add your business here +</a>\
					</p>\
				  </div>\
				</div>\
				<script src="http://' + this.params["domain"] + '/widget/json/featured_business_list?callback=ownlocal_insert_business_list&include_ads=1&limit=5&level=1"></script>\
			';
		$("<link/>", {
			   rel: "stylesheet",
			   type: "text/css",
			   href: "http://extras.mnginteractive.com/live/js/ownLocal/ownLocalStylesRDS.css"
			}).appendTo("head");
		return theWidget;
	},
	init: function() {
		this.loadParams();
 		return this.createWidget();
	}
};

// callback to load in the businesses
function ownlocal_insert_business_list (returned_businesses) {
  $(function(){
    list = $("#ownlocal-business-list ul");
	list.empty();
    $(returned_businesses).each(function(index, biz) {
	  var new_item = $("#ownlocal-business-list-template li").clone();
	  new_item.find('.ownlocal-business-link').attr('href', biz.link).text(biz.name);
	  list.append(new_item);
	  var info = new_item.find('.ownlocal-business-popup-info');
	  info.find('h4 a').attr('href', biz.link).text(biz.name);
	  var info_html = biz.city + ", " + biz.state;
	  if (biz.address) {info_html = biz.address + "<br/>" + info_html;}
	  if (biz.website) {
	     
	    var website = biz.website.replace('http://', '');
	    info_html += " | <a target='_blank' href='http://" + website +"'>"+ website +"</a>"
	  }
	  info.find('p').html(info_html);
	  if (biz.ad_image) {
	    info.append('<a target="_blank" href="'+ biz.ad_url +'"><img src="'+biz.ad_image+'"/></a>');
	  } else {
	    info.append('<a target="_blank" href="'+ biz.link +'"><img src="'+biz.image+'"/></a>');
	  }
    });
  });
}

// on document load
$(function() {
	if($('#ownLocalWidgy').length) {
		var $container = $('#ownLocalWidgy');
	} else {
		return false;
	}
	$container.html(ownLocalWidget.init());

	// searchfield text toggle -- or could use placeholder in html5
	$("input[type=text][title]").each(function() {
	  $(this).val($(this).attr("title"));
	  if($.trim($(this).val()) == "")
	    $(this).val($(this).attr("title"));
	  $(this)
	    .focus(function() {
	      if($(this).val() == $(this).attr("title")) $(this).val("");
	    })
	    .blur(function() {
	      if($.trim($(this).val()) == "") $(this).val($(this).attr("title"));
	    });
	});
	
	
});


/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);


/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')
    }

    $this.focus()

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) { 
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================


  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);