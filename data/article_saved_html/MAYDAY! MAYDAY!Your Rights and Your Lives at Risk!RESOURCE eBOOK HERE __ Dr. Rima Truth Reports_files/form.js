function formSubmit(id) {
  var dataString = "";
  var showMsj = false;
  var emailInvalid = false;

  $("#formContent" + id + " tr").each(function (idx, el) {
    if ($(this).attr("recordtype") != null) {
      var required = $(this).attr("required") == undefined ? 0 : 1;
      var recordname = String($(this).attr("recordname"));
      var recordtype = Number($(this).attr("recordtype"));
      var label = "";
      var borderReq = "2px solid #FF6262"; var borderNormal = "2px solid #E7B500";

      if (recordtype == 1 || recordtype == 2) { //text & hidden
        var control = $(this).find("input[type='text']");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        label = "txt_" + escape(String($(this).find("input[type='text']").attr("placeholder"))) + getRandom();
        dataString += "&" + label.replace(/ /g, "|") + "=" + $(this).find("input[type='text']").val();
      } else if (recordtype == 3) { //checkbox
        label = "chk_" + escape(String($(this).find("label").html())) + getRandom();
        if ($(this).find("input[type='checkbox']").attr("campaign") != undefined) {
          dataString += "&" + label.replace(/ /g, "|") + "=" + $(this).find("input[type='checkbox']").is(':checked') + "^" + String($(this).find("input[type='checkbox']").attr("campaign"));
        } else {
          dataString += "&" + label.replace(/ /g, "|") + "=" + $(this).find("input[type='checkbox']").is(':checked');
        }
      } else if (recordtype == 4) { //combo
        label = "ddl_" + escape(String($(this).find("label").html())) + getRandom();
        var obj = $(this).find("select option:selected");

        if (required == 1 && $(this).find("select").val() == "") { $(this).find("select").css("border", borderReq); showMsj = true; } else { $(this).find("select").css("border", borderNormal) }
        if (obj.attr("campaign") != undefined) {
          dataString += "&" + label.replace(/ /g, "|") + "=" + obj.val() + "^" + obj.attr("campaign");
        } else {
          dataString += "&" + label.replace(/ /g, "|") + "=" + obj.val();
        }

        if (obj.attr("mylist") != undefined) {
          dataString += "^" + obj.attr("mylist");
        }


      } else if (recordtype == 5) { //radio
        var control = $(this).find("input[type='radio']:checked");
        if (required == 1 && control.attr("id") == undefined) { $(this).find("input[type='radio']").css("border", borderReq); showMsj = true; } else { $(this).find("input[type='radio']").css("border", borderNormal) }
        label = "rbn_" + escape(String($(this).find("label").html())) + getRandom();
        if ($(this).find("input[type='radio']:checked").attr("id") != undefined) {
          if ($(this).find("input[type='radio']:checked").attr("campaign") != undefined) {
            dataString += "&" + label.replace(/ /g, "|") + "=" + $(this).find("input[type='radio']:checked").parent().find("label").html() + "^" + $(this).find("input[type='radio']:checked").attr("campaign");
          } else {
            dataString += "&" + label.replace(/ /g, "|") + "=" + $(this).find("input[type='radio']:checked").parent().find("label").html();
          }

          if (control.attr("mylist") != undefined) {
            dataString += "^" + obj.attr("mylist");
          }

        } else {
          dataString += "&" + label.replace(/ /g, "|") + "=";
        }
      } else if (recordtype == 6) { //textarea
        var control = $(this).find("textarea");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        label = "txt_" + escape(String($(this).find("textarea").attr("placeholder"))) + getRandom();
        dataString += "&" + label.replace(/ /g, "|") + "=" + $(this).find("textarea").val();
      } else if (recordtype == 7) { //phone number
        if (required == 1 && $(this).find("select").val() == "") { $(this).find("select").css("border", borderReq); showMsj = true; } else { $(this).find("select").css("border", borderNormal) }
        if (required == 1 && $(this).find(".sfx-phone").val() == "") { $(this).find(".sfx-phone").css("border", borderReq); showMsj = true; } else { $(this).find(".sfx-phone").css("border", borderNormal) }
        dataString += "&phonenumber=" + $(this).find("select").val() + "^" + $(this).find(".sfx-area").val() + "^" + $(this).find(".sfx-phone").val();
      } else if (recordtype == 8) { //address
        if (required == 1 && $(this).find("select").val() == "") { $(this).find("select").css("border", borderReq); showMsj = true; } else { $(this).find("select").css("border", borderNormal) }
        if (required == 1 && $(this).find("input[type='text']").val() == "") { $(this).find("input[type='text']").css("border", borderReq); showMsj = true; } else { $(this).find("input[type='text']").css("border", borderNormal) }
        dataString += "&address=" + $(this).find("select").val() + "^" + $(this).find("input[type='text']").val();
      } else if (recordtype == 9) { //city
        if (required == 1 && $(this).find("input[type='text']").val() == "") { $(this).find("input[type='text']").css("border", borderReq); showMsj = true; } else { $(this).find("input[type='text']").css("border", borderNormal) }
        dataString += "&city=" + $(this).find("input[type='text']").val();
      } else if (recordtype == 10) { //state/province/country
        if ($(this).find("input[type='radio']:checked").val() == 1) {
          if (required == 1 && $(this).find(".sfx-state").val() == "0") { $(this).find(".sfx-state").css("border", borderReq); showMsj = true; } else { $(this).find(".sfx-state").css("border", borderNormal) }
          dataString += "&state=" + $(this).find(".sfx-state").val();
        } else {
          if (required == 1 && $(this).find(".sfx-country").val() == "0") { $(this).find(".sfx-country").css("border", borderReq); showMsj = true; } else { $(this).find(".sfx-country").css("border", borderNormal) }
          if (required == 1 && $(this).find("input[type='text']").val() == "") { $(this).find("input[type='text']").css("border", borderReq); showMsj = true; } else { $(this).find("input[type='text']").css("border", borderNormal) }
          dataString += "&country=" + $(this).find(".sfx-country").val() + "&state=" + $(this).find("input[type='text']").val();
        }
      } else if (recordtype == 11) { //zip code
        if (required == 1 && $(this).find("input[type='text']").val() == "") { $(this).find("input[type='text']").css("border", borderReq); showMsj = true; } else { $(this).find("input[type='text']").css("border", borderNormal) }
        dataString += "&zipcode=" + $(this).find("input[type='text']").val();
      } else if (recordtype == 12) { //names
        if (required == 1 && $(this).find(".sfx-firstname").val() == "") { $(this).find(".sfx-firstname").css("border", borderReq); showMsj = true; } else { $(this).find(".sfx-firstname").css("border", borderNormal) }
        if (required == 1 && $(this).find(".sfx-lastname").val() == "") { $(this).find(".sfx-lastname").css("border", borderReq); showMsj = true; } else { $(this).find(".sfx-lastname").css("border", borderNormal) }
        dataString += "&firstname=" + $(this).find(".sfx-firstname").val() + "&lastname=" + $(this).find(".sfx-lastname").val();
      } else if (recordtype == 13) { //timezone
        var control = $(this).find("select");
        if (required == 1 && control.val() == "0") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&timezone=" + $(this).find("select").val();
      } else if (recordtype == 14) { //businessphone
        var control = $(this).find("input[type='text']");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&businessphone=" + $(this).find("input[type='text']").val();
      } else if (recordtype == 25) { //phone mobile
        var control = $(this).find(".sfx-phone");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&phonemobile=" + $(this).find(".sfx-area").val() + "^" + $(this).find(".sfx-phone").val();
      } else if (recordtype == 26) { //mobile provider
        var control = $(this).find("select");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&mobileprovider=" + $(this).find("select").val();
      } else if (recordtype == 27) { //company
        var control = $(this).find("input[type='text']");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&company=" + $(this).find("input[type='text']").val();
      } else if (recordtype == 28) { //phone bussines
        var control = $(this).find(".sfx-phone");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&phonebusiness=" + $(this).find(".sfx-area").val() + "^" + $(this).find(".sfx-phone").val();
      } else if (recordtype == 29) { //phone fax
        var control = $(this).find(".sfx-phone");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&phonefax=" + $(this).find(".sfx-area").val() + "^" + $(this).find(".sfx-phone").val();
      } else if (recordtype == 30) { //phone home
        var control = $(this).find(".sfx-phone");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&phonehome=" + $(this).find(".sfx-area").val() + "^" + $(this).find(".sfx-phone").val();
      } else if (recordtype == 31) { //phone other
        var control = $(this).find(".sfx-phone");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&phoneother=" + $(this).find(".sfx-area").val() + "^" + $(this).find(".sfx-phone").val();
      } else if (recordtype == 32) { //job title
        var control = $(this).find("input[type='text']");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        dataString += "&jobtitle=" + $(this).find("input[type='text']").val();
      } else if (recordtype == 0) { //email
        var control = $(this).find("input[type='text']");
        if (required == 1 && control.val() == "") { control.css("border", borderReq); showMsj = true; } else { control.css("border", borderNormal) }
        var email = $(this).find("input[type='text']").val();
        if (isValidEmail(email)) {
          dataString += "&email=" + email;
        } else {
          control.css("border", borderReq);
          emailInvalid = true;
        }
      } else if (recordtype == 34) { //name only
        if (required == 1 && $(this).find(".sfx-firstname").val() == "") { $(this).find(".sfx-firstname").css("border", borderReq); showMsj = true; } else { $(this).find(".sfx-firstname").css("border", borderNormal) }
        dataString += "&firstname=" + $(this).find(".sfx-firstname").val() + "&lastname=Unknown";
      }
    }
  });

  dataString = dataString.substring(1, dataString.length);

  $("#form" + id + " #__data").val(dataString);

  if (showMsj) {
    $("#form" + id).find(".sfx-required").show();
    $("#form" + id).find(".sfx-required").find("TD").text("Please Fill Required Fields");
    $("#form" + id).find(".sfx-privacy").parent().hide();
  } else if (emailInvalid) {
    $("#form" + id).find(".sfx-required").show();
    $("#form" + id).find(".sfx-required").find("TD").text("Email is invalid");
    $("#form" + id).find(".sfx-privacy").parent().hide();
  } else {
//    alert(dataString);
//    return;

    $("#form" + id).submit();
  }
}

function changeTypeState(id, opt) {
  var obj = $("#divCustomField" + id)
  if (opt == 1) {
    obj.find(".sfx-country").css("display", "none");
    obj.find("input[type='text']").css("display", "none");
  } else {
    obj.find(".sfx-country").css("display", "block");
    obj.find("input[type='text']").css("display", "block");
  }
}

function isValidEmail(email) {
  var emailReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!emailReg.test(email.toLowerCase())) {
    return false;
  } else {
    return true;
  }
}
function getRandom() {
  return Math.floor((Math.random() * 9999) + 1);
}
$(function () {
  var delay = new Number($("#__delay").val())

  if ($("#__formtype").val() == "3") {
    window.setTimeout(function () {
      $(".fancybox-link").fancybox(
      {
        openEffect: "none",
        minHeight: 300,
        helpers: {
          overlay: null
        }
      }).trigger("click");


    }, delay * 1000)
  } else if ($("#__formtype").val() == "6") {
    var effect = $("#__formtypehover").val()

    if (effect == "1") {
      window.setTimeout(function () {
        $(".fancybox-link").fancybox({ openEffect: "none", minHeight: 300 }).trigger("click");
      }, delay * 1000)
    } else if (effect == "2") {
      window.setTimeout(function () {
        $(".fancybox-link").fancybox({ openEffect: "fade", minHeight: 300 }).trigger("click");
      }, delay * 1000)
    } else if (effect == "3") {
      window.setTimeout(function () {
        $(".fancybox-link").fancybox({ openMethod: "dropIn", openEffect: "up", openSpeed: 1000, minHeight: 300 }).trigger("click");
      }, delay * 1000)
    } else if (effect == "4") {
      window.setTimeout(function () {
        $(".fancybox-link").fancybox({ openMethod: "dropIn", openEffect: "down", openSpeed: 1000, minHeight: 300 }).trigger("click");
      }, delay * 1000)
    } else if (effect == "5") {
      window.setTimeout(function () {
        $(".fancybox-link").fancybox({ openMethod: "dropIn", openEffect: "left", openSpeed: 1000, minHeight: 300 }).trigger("click");
      }, delay * 1000)
    } else if (effect == "6") {
      window.setTimeout(function () {
        $(".fancybox-link").fancybox({ openMethod: "dropIn", openEffect: "right", openSpeed: 1000, minHeight: 300 }).trigger("click");
      }, delay * 1000)
    }

  }
});