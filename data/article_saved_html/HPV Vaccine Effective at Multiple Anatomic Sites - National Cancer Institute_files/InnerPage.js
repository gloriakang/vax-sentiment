define("Common/Enhancements/sharecomponent",["require","jquery"],function(n){var e=n("jquery");e(".shareComponent").click(function(){e(this).find(".shareWindow").toggleClass("hide"),e(this).find(".shareBtn").toggleClass("shareBtnOpen")})}),define("InnerPage",["require","Common/Enhancements/sharecomponent"],function(n){n("Common/Enhancements/sharecomponent")}),require(["InnerPage"]);