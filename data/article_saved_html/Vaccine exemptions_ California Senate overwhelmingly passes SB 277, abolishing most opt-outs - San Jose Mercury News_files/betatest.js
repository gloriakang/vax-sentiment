//dynamix betatest

var pathn = window.location.pathname;
var seksn = pathn.split('/')[1];

if (seksn==='' || seksn==='warriors') {
  $(function() {
    console.log('EPB3 - seksn:true!!');
    //swap the centerpiece img w/ live video stream
    //$('#region3 .complexListingBox .layout5FeatureItemBox img.listing5Image:first').replaceWith('<iframe width="480" height="270" src="https://www.youtube.com/embed/3X63lKlpIAE" frameborder="0" allowfullscreen></iframe>');
  });
}


// <!-- DYNAMIX js in footer freeform -->
// <script type="text/javascript">
// ord=Math.random();
// ord=ord*10000000000000000000;
// document.write('<scr' + 'ipt type="text/javascript" src="http://apps.mercurynews.com/dynamix/betatest.js?'+ord+'"><\/scr' + 'ipt>');
// </script>