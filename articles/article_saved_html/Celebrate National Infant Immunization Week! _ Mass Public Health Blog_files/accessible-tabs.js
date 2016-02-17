(function ($) {
	$.fn.mAccessTab = function () {
		// accessibility considerations & aria compatability. winning
		
		//for each tabs DIV...
		$(".accordion").each( 
			function(t){
				var tabsDiv=$(this); 
				$(tabsDiv).attr({"role":"application", "aria-multiselectable": "true"})
				//for each individual tab LI, set class and aria role attributes, and hide it
				//$(tabsDiv).find("div.accordion-group").addClass("tabPanel").attr({"role": "tabpanel"});//.hide();
				//get the list of tab links
				var tabsList=$(this).find("div.accordion-heading"); 
				//for each item in the tabsList...
				$(tabsList).each(
					function(index){
						//create a unique id using the tab link's href
						var tabId="tab-"+$(this).find("a").attr("href").split("-")[1];
						var panelId = $(this).find("a").attr("href").split("#")[1];
						//assign tabId, aria and tabindex attributes to the tab control, but do not remove the href
						$(this).attr({"id": tabId, "role": "tab", "aria-selected": "false", "aria-controls": panelId}).parent().attr("role", "link");
						//assign aria attribute to the relevant tab panel
						$(tabsDiv).find(".accordion-body").eq(index).attr({"aria-labelledby": tabId, "role":"tabPanel","aria-hidden":"true"});
						//remove all tabPanel links from tab index (until a selection is made)
						$(tabsDiv).find("div.accordion-inner ul li a").attr("tabindex", "-1");
						//set the click event for each tab link
						$(this).click(
							function(e){
								//prevent default click event
								e.preventDefault();
								//change state of previously selected tabList item
								$(tabsList).find("a.active").parent(".accordion-heading").attr({"aria-selected": "false", "tabindex": "-1"});
								//hide previously selected tabPanel
								$(tabsDiv).find(".accordion-body.in").attr("aria-hidden", "true");//.hide();
								//hide links of previously selected tabPanel
								$(tabsDiv).find(".accordion-body.in a").attr("tabindex", "-1");
								//show newly selected tabPanel
								$(tabsDiv).find(".accordion-body").eq($(this).parent().index()).attr("aria-hidden", "false");//.show();
								//set state of newly selected tab list item
								$(this).attr({"aria-selected": "true"});								
								//add all links in active tabPanel to tabindex
								$(this).next().find('a').attr("tabindex", "0");
								
							}
						);
					}
				);
				
				//if keyboard user closes active link
				$(tabsList).delegate("a.active", "keydown",
					function (e) {
						switch (e.which) {
							case 13: 
								//alert("enter");
								e.preventDefault();								
								//hide links of previously selected tabPanel								
								$(tabsDiv).find(".accordion-body.in a").attr("tabindex", "-1");
								$(tabsDiv).find(".accordion-body.in").attr({"aria-hidden": "true"}).removeClass("in").hide();
								$(this).parent(".accordion-heading").attr({"aria-selected": "false", "tabindex": "-1"});
								$(this).removeClass("active");
								//$(this).trigger( 'click' );
							break;																			
						}
					}
				);
				//show the first tabPanel
				//$(tabsDiv).find(".tabPanel:first").attr("aria-hidden", "false").show();
				//set state for the first tabsList li
				//$(tabsList).find("li:first").addClass("current").find(">a").attr({"aria-selected": "true", "tabindex": "0"});
		
			}
		);
		
		//accessbility consideration for keyboard operation of category / archive dropdown menus
		$("li.dropdown").each( 
			function(b){
				//when keyboard user keys down on a submenu LI (like 2010 >)
				$(this).delegate("a.toSubmenu", "keydown",
					function (e) {
						switch (e.which) {
							// on -> or ENTER, make the submenu appear
							case 13 : case 39 :
								//alert("enter");
								e.preventDefault();																							
								$(this).next("ul.sub-menu").css({"visibility":"visible", "display": "block"});
								$(this).next("ul.sub-menu").find("li a").first().focus();
								//$(this).mouseover();
							break;
							// on tab
							case 9 :
								//on SHIFT + tab hide the submenu and focus on previous element								
								if (e.shiftKey) {
									e.preventDefault();
									$(this).next("ul.sub-menu").css({"visibility":"hidden", "display": "none"});	
									$(this).parent().prevAll("li:not(.divider)").first().children('a').focus();
								}
							break;
						}
					}
				);
			}
		);
		
		//accessibility consideration for keyboardo peration of category / archive dropdown menu	
		// when keyboard user tabs out of last dropdown menu li
		$(".dropdown-menu li:last-child").each( 
			function(c){
				$(this).delegate("> a", "keydown",
					function (e) {
						//alert("last li a keyboard");
						switch (e.which) {						
							// on tab		
							case 9 :
									// do default action of SHIFT + tab (go back to previous link)
									if (e.shiftKey) {
									}
									// on tab, hide the dropdown menu and go to next link (go to next is default action)
									else {								
										//e.preventDefault();
										$(this).parents("li.dropdown.open").removeClass("open");//.hide();
										
										//$(this).find().first("a").focus();
									}																									
							break;
						}
					}
				);
			}
		);

		$(".sub-menu li:last-child").each( 
			function(d){
				$(this).delegate("> a", "keydown",
					function (e) {
						//alert("last li a keyboard");
						switch (e.which) {						
							// on tab		
							case 9 :
								// do default action of SHIFT + tab (go back to previous link)
								if (e.shiftKey) {
								}
								// on tab, hide the dropdown menu and go to next link (go to next is default action)
								else {								
									//e.preventDefault();
									//$(this).parent("li").removeClass("open");//.hide();
									$(this).parents(".sub-menu").css({"visibility": "hidden", "display": "none"});
									//$(this).find().first("a").focus();
								}																									
							break;
						}
					}
				);
				//$(this).find("li.dropdown>a").trigger('click');				
			}
		);			
	};
})(jQuery);