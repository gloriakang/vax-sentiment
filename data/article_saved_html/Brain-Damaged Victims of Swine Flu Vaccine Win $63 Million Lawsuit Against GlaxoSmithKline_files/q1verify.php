(function () {
	try {
		try {
			window.top.location.protocol;
			var wind = window.top;
		} catch (e) {
			var wind = window;
		}

		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (obj, fromIndex) {
			if (fromIndex == null) {
				fromIndex = 0;
			} else if (fromIndex < 0) {
				fromIndex = Math.max(0, this.length + fromIndex);
			}
			for (var i = fromIndex, j = this.length; i < j; i++) {
				if (this[i] === obj)
					return i;
			}
			return -1;
			};
		}

		if (typeof wind.q1vars == 'undefined' || typeof wind.q1vars.included == 'undefined' || typeof wind.q1vars.name == 'undefined') {
			var q1vars = {
				name: 'q1media',
				uid: Date.now(),
				included: [],
				count: 1
			};
		} else {
			q1vars = wind.q1vars;
			q1vars.count++;
		}

		q1vars.protocol = wind.location.protocol;
		q1vars.hostname = wind.location.hostname;
		q1vars.targetDocument = wind.document;
		q1vars.pub_id = 649140;
		q1vars.site_id = 1529658;
		q1vars.placement_id = 5596287;
		q1vars.exchange = 'AN1';
		q1vars.exchange_full = '';
		q1vars.domain = encodeURIComponent(q1vars.hostname);
		q1vars.referrer = encodeURIComponent(wind.location.href.substr(wind.location.protocol.length+2,wind.location.href.length));

		function appendScript(id, src) {
			var scriptElem;
			scriptElem = q1vars.targetDocument.createElement('script');
			scriptElem.setAttribute("id", id);
			scriptElem.setAttribute("async", "async");
			scriptElem.src = src;
			q1vars.targetDocument.head.appendChild(scriptElem);
		}

		appendScript("fraudlgx", q1vars.protocol + '//pixel.yabidos.com/fltiu.js?qid=337383f5837383f5638353&cid=586&kqt=45&p='+ q1vars.pub_id +'&s='+ q1vars.domain +'&x='+ q1vars.exchange +'&adtg='+ q1vars.placement_id +'&cstm1='+ q1vars.site_id +'&xc=');

		// call q1verify logging
		if (q1vars.exchange_full == 'liverail') {
			q1vars.placement_id = q1vars.pub_id;
			q1vars.pub_id = '';
		} else {
			q1vars.exchange_full = 'appnexus';
		}
		q1vars.product = '';
		if (typeof q1UnitList !== 'undefined') {
			for (i=0;i<q1UnitList.length;i++) {
				if (q1vars.placement_id == q1UnitList[i].exchange_id) {
					q1vars.product = q1UnitList[i].type;
					break;
				}
			}
		}
		if (q1vars.product == '') {
			if (q1vars.exchange_full == 'appnexus') {
				q1vars.product = 'display';
			} else {
				q1vars.product = 'preroll';
			}
		}

		// var px = q1vars.targetDocument.createElement('img');
		// px.id = "q1v_tracking_" + q1vars.count;
		// px.src = "http://tracking.q1verify.com/?uid="+ q1vars.uid +"&domain="+ q1vars.domain +"&exchange="+ q1vars.exchange_full +"&product="+ q1vars.product +"&site_id="+ q1vars.site_id +"&publisher_id="+ q1vars.pub_id +"&placement_id=" + q1vars.placement_id + "&referrer=" + q1vars.referrer;
		// q1vars.targetDocument.body.appendChild(px);
		// setTimeout(function(){
		// 	var child = q1vars.targetDocument.getElementById('q1v_tracking_' + q1vars.count);
		// 	child.parentNode.removeChild(child);
		// },500);

		wind.q1vars = q1vars;


		//<!-- Quantcast Tag -->

		window._qevents = window._qevents || [];

		appendScript("quantcast", (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js");

		window._qevents.push({
			qacct:"p-AMeWEWwqJxMW1",
			labels:"publisher_id."+q1vars.pub_id+",domain."+q1vars.domain+",exchange."+q1vars.exchange+",placement."+q1vars.placement_id+",site_id."+q1vars.site_id
		});

		//<!-- End Quantcast tag -->

	} catch (e) {
		console.error('q1verify - ' + e);
	}
})();