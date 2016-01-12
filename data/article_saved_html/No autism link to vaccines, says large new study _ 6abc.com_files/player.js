
	(function($) {
		function playM3u8(m3u8Url, videopl, isLive){
			var cssObj = {
			  'height' : '282px',
			  'width' : '100%'
			}
			var container = videopl.find('.video-player-dynamic');
			///container.css(cssObj);  //resetting the dimension seems to break the responsiveness
			if(container != null && m3u8Url != null){
				fixPlayerDim(videopl)
				//container.player('play', m3u8Url);
				var params = {
				    'wmode': 'direct'
				};
				if (uplynk.env.useFlash) {
					var comscore = new Comscore(isLive);
					comscore.init({
						container: container,
						stationID: getStation(),
						videoID: container.data('videoId')
					});
				}
				container.player({
				    params : params
				}, function() {
				    $(this).player('play', m3u8Url);
				    if (uplynk.env.useFlash) {
						$(window).off('.sticky');
						$('.nav-container-sticky').css('display', 'none');
					}
				});
			}
		}
		function fixPlayerDim(videopl){
			var ratio = 0;
			if(videopl == null){
				videopl = $(".video-poster");
			}
			ratio = videopl.attr('data-ratio');
			if(ratio > 0){
				var cssObj = {
					"height":videopl.width()/ratio
					}
				videopl.css(cssObj);
			}
		}
		function sharerable(e){
			//embed button display/hide
			$(".share-option-embed").click(function(){
				$(".share-option-embed").toggleClass("selected");
				$(".share.embed-code").toggle();
			});
		}
		$(document).ready(function(e){
			var poster = $('.video-poster');
			poster.css("cursor", "pointer");
			poster.one("click", function(e){ //at most once on click event
				e.preventDefault();
				e.stopImmediatePropagation();
				
				var $this = $(this);
				var m3u8Url = $this.attr('data-url');
				var isLive = $this.data('islive');
				
				//dimension ratio as attr
				$this.attr('data-ratio', $this.width()/$this.height());
				
				//hide the default image
				$(this).find(".defaultPlayer").css("visibility", "hidden"); //maintains the painted/calculated layouts
				
				//stream the m3u8 
				playM3u8(m3u8Url, $this, isLive);
			});
			
			//share script
			sharerable();
		});
		$( window ).resize(function() {
			fixPlayerDim()
		});

	})(jQuery);
