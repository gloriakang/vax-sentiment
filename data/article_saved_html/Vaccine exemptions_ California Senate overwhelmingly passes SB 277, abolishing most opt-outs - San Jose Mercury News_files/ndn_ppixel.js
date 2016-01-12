//perfectpixel article logic by @epaulbaca
//this code dynamically adds perfect pixel div positions – one above the title and prepended to paragraphs 2-8 of the articleBody
//updated 20150610EPB to resolve ppixelA1 conflict with infinite scroll
   $(document).ready(function () {
     $( "#ppixelA1" ).insertBefore( "#articleTitle" );
     $( "#ppixelP2" ).prependTo( "#articleBody p:nth-of-type(2)" );
     $( "#ppixelP3" ).prependTo( "#articleBody p:nth-of-type(3)" );
     $( "#ppixelP4" ).prependTo( "#articleBody p:nth-of-type(4)" );
     $( "#ppixelP5" ).prependTo( "#articleBody p:nth-of-type(5)" );
     $( "#ppixelP6" ).prependTo( "#articleBody p:nth-of-type(6)" );
     $( "#ppixelP7" ).prependTo( "#articleBody p:nth-of-type(7)" );
     $( "#ppixelP8" ).prependTo( "#articleBody p:nth-of-type(8)" );
     $( "#ppixelP2r" ).prependTo( "#articleBody p:nth-of-type(2)" );
     $( "#ppixelP3r" ).prependTo( "#articleBody p:nth-of-type(3)" );
     $( "#ppixelP4r" ).prependTo( "#articleBody p:nth-of-type(4)" );
     $( "#ppixelP5r" ).prependTo( "#articleBody p:nth-of-type(5)" );
     $( "#ppixelP6r" ).prependTo( "#articleBody p:nth-of-type(6)" );
     $( "#ppixelP7r" ).prependTo( "#articleBody p:nth-of-type(7)" );
     $( "#ppixelP8r" ).prependTo( "#articleBody p:nth-of-type(8)" );

  // now check if an ndn ppixel video has been dynamically delivered to each article position.
  var ppixeldivtimer=setInterval(function(){ppixeldivcheck()},5000);

  function ppixeldivcheck()
  {
  if ( $('#ppixelA1 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelA1').css({'clear':'both','margin-bottom':'15px'});
    }
  if ( $('#ppixelP2 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelP2').css("margin-bottom","12px");
      if ( $('#ppixelP3 .ndn_embed').width() < 600 ) {
	    $('#ppixelP3').css("margin","0 15px 12px 0");
      }
    }
  if ( $('#ppixelP3 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelP3').css("margin-bottom","12px");
      if ( $('#ppixelP3 .ndn_embed').width() < 600 ) {
	    $('#ppixelP3').css("margin","0 15px 12px 0");
      }
    }
  if ( $('#ppixelP4 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelP4').css("margin-bottom","12px");
      if ( $('#ppixelP4 .ndn_embed').width() < 600 ) {
	    $('#ppixelP4').css("margin","0 15px 12px 0");
      }
    }
  if ( $('#ppixelP5 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelP5').css("margin-bottom","12px");
      if ( $('#ppixelP5 .ndn_embed').width() < 600 ) {
	    $('#ppixelP5').css("margin","0 15px 12px 0");
      }
    }
  if ( $('#ppixelP6 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelP6').css("margin-bottom","12px");
      if ( $('#ppixelP6 .ndn_embed').width() < 600 ) {
	    $('#ppixelP6').css("margin","0 15px 12px 0");
      }
    }
  if ( $('#ppixelP7 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelP7').css("margin-bottom","12px");
      if ( $('#ppixelP7 .ndn_embed').width() < 600 ) {
	    $('#ppixelP7').css("margin","0 15px 12px 0");
      }
    }
  if ( $('#ppixelP8 .ndn_embed .ndn_playerContainer').length) {
    $('#ppixelP8').css("margin-bottom","12px");
      if ( $('#ppixelP8 .ndn_embed').width() < 600 ) {
	    $('#ppixelP8').css("margin","0 15px 12px 0");
      }
    }
  if ( $('#ppixelP2r .ndn_embed .ndn_playerContainer').length) {
    $("#ppixelP2r").css("margin-bottom","12px");
      if ( $('#ppixelP2r .ndn_embed').width() < 600 ) {
	    $('#ppixelP2r').css("margin","0 0 12px 15px");
      }
    }
  if ( $('#ppixelP3r .ndn_embed .ndn_playerContainer').length) {
    $("#ppixelP3r").css("margin-bottom","12px");
      if ( $('#ppixelP3r .ndn_embed').width() < 600 ) {
	    $('#ppixelP3r').css("margin","0 0 12px 15px");
      }
    }
  if ( $('#ppixelP4r .ndn_embed .ndn_playerContainer').length) {
    $("#ppixelP4r").css("margin-bottom","12px");
      if ( $('#ppixelP4r .ndn_embed').width() < 600 ) {
	    $('#ppixelP4r').css("margin","0 0 12px 15px");
      }
    }
  if ( $('#ppixelP5r .ndn_embed .ndn_playerContainer').length) {
    $("#ppixelP5r").css("margin-bottom","12px");
      if ( $('#ppixelP5r .ndn_embed').width() < 600 ) {
	    $('#ppixelP5r').css("margin","0 0 12px 15px");
      }
    }
  if ( $('#ppixelP6r .ndn_embed .ndn_playerContainer').length) {
    $("#ppixelP6r").css("margin-bottom","12px");
      if ( $('#ppixelP6r .ndn_embed').width() < 600 ) {
	    $('#ppixelP6r').css("margin","0 0 12px 15px");
      }
    }
  if ( $('#ppixelP7r .ndn_embed .ndn_playerContainer').length) {
    $("#ppixelP7r").css("margin-bottom","12px");
      if ( $('#ppixelP7r .ndn_embed').width() < 600 ) {
	    $('#ppixelP7r').css("margin","0 0 12px 15px");
      }
    }
  if ( $('#ppixelP8r .ndn_embed .ndn_playerContainer').length) {
    $("#ppixelP8r").css("margin-bottom","12px");
      if ( $('#ppixelP8r .ndn_embed').width() < 600 ) {
	    $('#ppixelP8r').css("margin","0 0 12px 15px");
      }
    }


  // stop checking after 50 seconds
  for (var i=0; i<=10; i++)
  {
  if (i=10) {
    clearInterval(ppixeldivtimer);
    }
  }

  }
});
