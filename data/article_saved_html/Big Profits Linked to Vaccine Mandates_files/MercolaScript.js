if ((navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15)
 || (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Version') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Version') + 8).split(' ')[0]) >= 5)) {//Chrome && Safari

    var myimages = new Array()
    function preloadimages() {
        for (i = 0; i < preloadimages.arguments.length; i++) {
            myimages[i] = new Image()
            myimages[i].src = preloadimages.arguments[i]
        }
    }

    //Enter path of images to be preloaded inside parenthesis. Extend list as desired.
    preloadimages("http://media.mercola.com/Assets/images/image.gif", "http://media.mercola.com/Assets/images/text.gif")


} else {	//Firefox and IE
    //Preload images
    new Image().src = '//media.mercola.com/Assets/images/image.gif';
    new Image().src = '//media.mercola.com/Assets/images/text.gif';
}

function SiteSeal(img, type) {
    if (window.location.protocol.toLowerCase() == "https:") { var mode = "https:"; } else { var mode = "http:"; }
    var host = location.host;
    var baseURL = mode + "//seals.networksolutions.com/siteseal_seek/siteseal?v_shortname=" + type + "&v_querytype=W&v_search=" + host + "&x=5&y=5";
    document.write('<a href="#" onClick=\'window.open("' + baseURL + '","' + type + '","width=450,height=500,toolbar=no,location=no,directories=no,\
status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no");return false;\'>\
<img src="' + img + '" style="border:none;" oncontextmenu="alert(\'This SiteSeal is protected\');return false;"></a>');
}



function Translate(lan) {
    window.open('http://www.windowslivetranslator.com/BV.aspx?ref=AddIn&lp=' + lan + '&a=' + encodeURIComponent(location.href));

}

function BookMark() {
    window.open('http://www.addthis.com/bookmark.php?wt=nw&pub=mercola&url=' + encodeURIComponent(location.href) + '&title=' + encodeURIComponent(document.title), 'addthis', 'scrollbars=yes,menubar=no,width=620,height=520,resizable=yes,toolbar=no,location=no,status=no,screenX=200,screenY=100,left=200,top=100');

}

var addthis_options = 'facebook, stumbleupon, twitter, google, favorites, yahoobkm, myspace, delicious, myaol, friendfeed, linkedin, live, digg, multiply, buzz, newsvine';
var addthis_offset_top = 10;
var addthis_offset_left = -8;
var addthis_hide_embed = false;

function NotAuthorized() {
    alert('You are not authorized to vote on this post.');
}

function AuthorOfPost(votingAuthor) {
    alert('You can not vote on your own post.');
}


//Function to Email a Friend
function EmailToFriend() {
    parent.location = 'mailto:?Subject=Healthy News Article from Mercola.com&body=A friend of yours highly recommends you read this health article: ' + self.location;
}

//to show login div for anonymous user

var lastDivId = "";
var lastDiv = "";
var commonDiv = 0;

function ShowTopLoginDiv() {

    document.getElementById('LoginDivTop').style.display = 'none';

    var logindiv = document.getElementById('LoginDivTop');

    if (logindiv != "") {
        logindiv.style.display = "block";
        commonDiv = 0;
    }


    return true;

}

function ShowDiv(currentDivId) {
    //document.getElementById('LoginDivTop').style.display = 'none';
    //document.getElementById('PostDiv0').style.display = 'none';
    if (lastDivId != "") {
        var LastDiv;
        LastDiv = document.getElementById('PostDiv' + lastDivId);
        if (LastDiv != null) {
            LastDiv.innerHTML = '';
            LastDiv.style.display = 'none';
        }
    }
    lastDivId = currentDivId;
    var CurrentDiv;
    CurrentDiv = document.getElementById('PostDiv' + currentDivId);
    CurrentDiv.style.display = 'block';
    CurrentDiv.innerHTML = document.getElementById('Login').innerHTML;

    if (commonDiv == 1) {
        var logindiv = document.getElementById('LoginDiv');
        logindiv.style.display = "none";
        commonDiv = 0;
    }
}


function ShowHideLoginDiv(IsBannedUser) {
    //document.getElementById('LoginDivTop').style.display = 'none';
    //document.getElementById('PostDiv0').style.display = 'none';
    var logindiv = document.getElementById('LoginDiv');

    if (IsBannedUser == 1) {
        alert("Sorry! your account is banned. You can not post comment now. Please contact the administrator.");
        Set_Cookie('FocusCookie', 'true', 365, '/', '', '');
        return false;
    }
    else {
        if (lastDivId != "") {
            var LastDiv;
            LastDiv = document.getElementById('PostDiv' + lastDivId);
            LastDiv.innerHTML = '';
            LastDiv.style.display = 'none';
        }
        logindiv.style.display = "block";
        commonDiv = 1;
        return true;

    }
    Set_Cookie('FocusCookie', 'true', 365, '/', '', '');
}


function CharacterLimitOLD(multilineTextBox) {
    var txtobj = document.getElementById(multilineTextBox);
    if (txtobj.value.length == 2000 * 1)
        return true;
    CharacterCount(multilineTextBox);
}

/*function CharacterCount(multilineTextBox) 
{    
var taObj=document.getElementById(multilineTextBox);
if (taObj.value.length > 2000*1)
{
taObj.value = taObj.value.substring(0,2000*1);
}      
var countingMessage1 = document.getElementById('countingMessage1');
var countingMessage2 = document.getElementById('countingMessage2');
countingMessage1.innerHTML = 2000-taObj.value.length; 
countingMessage2.innerHTML = 2000-taObj.value.length;  
}*/


var persistclose = 0 //set to 0 or 1. 1 means once the bar is manually closed, it will remain closed for browser session
var startX = 750 //set x offset of bar in pixels
var startY = 300 //set y offset of bar in pixels
var verticalpos = "fromtop" //enter "fromtop" or "frombottom"

function iecompattest() {
    return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
}

function get_cookie(Name) {
    var search = Name + "="
    var returnvalue = "";

    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            returnvalue = unescape(document.cookie.substring(offset, end))
        }
    }
    return returnvalue;
}






function ShowEditReplySuccessDiv() {
    var LastDiv = document.getElementById('PostDiv' + lastDivId);
    LastDiv.innerHTML = document.getElementById('divCommentEditReplySuccess').innerHTML;
}

function hideSelecteddiv() {
    var LastDiv = document.getElementById('PostDiv' + lastDivId);
    LastDiv.innerHTML = '';
}

//--------------------------------CreateUser.aspx starts-------------------------------------
function FieldsRequired() {
    var email = document.getElementById("txtEmail");
    var emailDiv = document.getElementById("emailDiv");
    if (email.value == '') {
        emailDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Email is required.</span>";
        emailDiv.style.display = "block";
        return false;
    }
    emailDiv.style.display = "none";

    if (checkEmailSyntax(email.value) == false) {
        emailDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Invalid Email address.</span>";
        emailDiv.style.display = "block";
        return false;
    }

    var password = document.getElementById("txtPassword");
    var passwordDiv = document.getElementById("passwordDiv");
    if (password.value == '') {
        passwordDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Password is required.</span>";
        passwordDiv.style.display = "block";
        return false;
    }
    passwordDiv.style.display = "none";

    if (password.value.length < 6) {
        passwordDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Password must have atleast 6 characters.</span>";
        passwordDiv.style.display = "block";
        return false;
    }
    passwordDiv.style.display = "none";

    var confirmPassword = document.getElementById("txtConfirmPassword");
    var confirmPasswordDiv = document.getElementById("confirmPasswordDiv");
    if (confirmPassword.value == '') {
        confirmPasswordDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Confirm Password is required.</span>";
        confirmPasswordDiv.style.display = "block";
        return false;
    }
    confirmPasswordDiv.style.display = "none";

    if (confirmPassword.value != password.value) {
        confirmPasswordDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Confirm Password does not match.</span>";
        confirmPasswordDiv.style.display = "block";
        return false;
    }
    confirmPasswordDiv.style.display = "none";

    var securityQue = document.getElementById("ddlSecurityQuestion");
    var securityAns = document.getElementById("txtSecurityAnswer");
    var securityQuestionDiv = document.getElementById("securityQuestionDiv");
    var securityAnswerDiv = document.getElementById("securityAnswerDiv");

    if (securityQue.value == 'Security Question') {
        securityQuestionDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Security Question is required</span>";
        securityQuestionDiv.style.display = 'block';
        return false;
    }
    securityQuestionDiv.style.display = 'none';

    if (securityAns.value == '') {
        securityAnswerDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Security Answer is required.</span>";
        securityAnswerDiv.style.display = 'block';
        return false;
    }
    securityAnswerDiv.style.display = 'none';

    var txtdisplayname = document.getElementById("txtdisplayname");
    var displayNameDiv = document.getElementById("displayNameDiv");
    if (txtdisplayname.value == '') {
        displayNameDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Display name is required.</span>";
        displayNameDiv.style.display = "block";
        return false;
    }
    displayNameDiv.style.display = "none";

    var txtFirstName = document.getElementById("txtFirstName");
    var firstNameDiv = document.getElementById("firstNameDiv");
    if (txtFirstName.value == '') {
        firstNameDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">First name is required.</span>";
        firstNameDiv.style.display = "block";
        return false;
    }
    firstNameDiv.style.display = "none";

    var txtLastName = document.getElementById("txtLastName");
    var lastNameDiv = document.getElementById("lastNameDiv");
    if (txtLastName.value == '') {
        lastNameDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Last name is required.</span>";
        lastNameDiv.style.display = "block";
        return false;
    }
    lastNameDiv.style.display = "none";

    var txtCity = document.getElementById("txtCity");
    var cityDiv = document.getElementById("cityDiv");
    if (txtCity.value == '') {
        cityDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">City name is required.</span>";
        cityDiv.style.display = "block";
        return false;
    }
    cityDiv.style.display = "none";

    var ctry = document.getElementById("ddlcountries");
    var pin = document.getElementById("txtPin");
    var pinDiv = document.getElementById("pinDiv");
    if (isNaN(pin.value)) {
        pinDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Zip code must be numeric.</span>";
        pinDiv.style.display = "block";
        return false;
    }

    if (ctry.value == "1" || ctry.value == "5") {
        if (pin.value == '') {
            pinDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Zip code is required.</span>";
            pinDiv.style.display = "block";
            return false;
        }
        pinDiv.style.display = "none";

        if (pin.value.length < 5 && ctry.value == "1") {
            pinDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Please enter 5 digits zip code for US.</span>";
            pinDiv.style.display = "block";
            return false;
        }
        pinDiv.style.display = "none";
        if (pin.value.indexOf(' ') != -1) {
            pinDiv.innerHTML = "<img src='/themes/default/images/error_x.jpg'  hspace='3' align='left'><span style=\"color:Red;\">Spaces are not allowed</span>";
            pinDiv.style.display = "block";
            return false;
        }
        pinDiv.style.display = "none";

    }
    pinDiv.style.display = "none";

    var date = document.getElementById("ddlDate");
    var month = document.getElementById("ddlMonth");
    var year = document.getElementById("ddlYear");
    var divDOB = document.getElementById("divDOB");

    if (date.value == 'Day' || month.value == 0 || year.value == 'Year') {
        divDOB.innerHTML = "<img src='/themes/default/images/error_x.jpg' hspace='3' align='left'><span style=\"color:Red;\">Date of Birth is required.</span>";
        divDOB.style.display = 'block';
        return false;
    }
    else {
        switch (month.value) {
            case "2":
                if ((year.value % 4) == 0) {
                    if (date.value > 29) {
                        divDOB.innerHTML = "<img src='/themes/default/images/error_x.jpg' hspace='3' align='left'><span style=\"color:Red;\">Enter valid date.</span>";
                        divDOB.style.display = 'block';
                        return false;
                    }

                }
                else {
                    if (date.value > 28) {
                        divDOB.innerHTML = "<img src='/themes/default/images/error_x.jpg' hspace='3' align='left'><span style=\"color:Red;\">Enter valid date.</span>";
                        divDOB.style.display = 'block';
                        return false;
                    }
                }
                break;

            case "4":
            case "6":
            case "9":
            case "11":
                if (date.value > 30) {
                    divDOB.innerHTML = "<img src='/themes/default/images/error_x.jpg' hspace='3' align='left'><span style=\"color:Red;\">Enter valid date.</span>";
                    divDOB.style.display = 'block';
                    return false;
                }
                break;
        }
        divDOB.style.display = "none";
    }

    var yearsOfPractise = document.getElementById("txtYearsInPractice");
    var divYearsOfPractise = document.getElementById("divYearsInPractice");
    if (isNaN(yearsOfPractise.value)) {
        divYearsOfPractise.style.display = "block";
        divYearsOfPractise.innerHTML = "<img src='/themes/default/images/error_x.jpg' hspace='3' align='left'><span style=\"color:Red;\">Years must be numeric value.</span>";
        return false;
    }
    divYearsOfPractise.style.display = "none";

    var chkAggreement = document.getElementById("chkAgreement");
    var divAggreement = document.getElementById("divCheckAggreement");
    if (chkAggreement.checked == "false") {
        divAggreement.style.display = "block";
        divAggreement.innerHTML = "<img src='/themes/default/images/error_x.jpg' hspace='3' align='left'><span style=\"color:Red;\">You must accept the site terms and service agreement.</span>";
        return false;
    }
    divAggreement.style.display = "none";


    return true;
}


function checkEmailSyntax(str) {
    var at = "@";
    var dot = ".";
    var lat = str.indexOf(at);
    var lstr = str.length;
    var ldot = str.indexOf(dot);
    if (str.indexOf(at) == -1) {
        return false
    }

    if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
        return false;
    }

    if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr) {
        return false;
    }

    if (str.indexOf(at, (lat + 1)) != -1) {
        return false;
    }

    if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
        return false;
    }

    if (str.indexOf(dot, (lat + 2)) == -1) {
        return false;
    }

    if (str.indexOf(" ") != -1) {
        return false;
    }
    return true;
}

function ShowPractitioner() {
    var rblHealth = document.getElementById("rblHealth");
    var divPractitioner = document.getElementById('divPractitioner');
    for (var i = 0; i < rblHealth.rows.length; i++) {
        for (var j = 0; j < rblHealth.rows[i].cells.length; j++) {
            var list1 = rblHealth.rows[i].cells[j].childNodes[0];
            if (list1.checked) {
                if (list1.value == 'Y') {
                    divPractitioner.style.display = 'block';
                }
                else {
                    divPractitioner.style.display = 'none';
                }
            }
        }
    }
}

/* // Following code might be required if "What is your speciality" need to asked
// //CBLTypeOfPracticing1.Attributes.Add("onclick", "ShowSpeciality('CBLTypeOfPracticing1',new Array(0,1,2,3))");
var specialCheck = false;
function ShowSpeciality(checkBoxListId, chkArray)
{  
if(specialCheck == false)
{
var dvspeciality=document.getElementById('dvspeciality');
for(i = 0; i<chkArray.length; i++)
{
objItem = document.getElementById(checkBoxListId + '_' + chkArray[i]);
if(objItem == null)
{
continue;
}
if(objItem.checked==true)
{
specialCheck=true;
dvspeciality.style.display = "block";
return;
}
}
dvspeciality.style.display = "none";
specialCheck = false;
}
}
*/

function CheckDisplayName() {
    var dname = document.getElementById("<%= txtdisplayname.ClientID %>").value;
    var message = document.getElementById("<%= firstNameDiv.ClientID %>");
    if (dname != '') {
        CreateUser.CheckDisplayname(dname, CheckDisplayName_CallBack);
    }
    else {
        message.style.display = 'block';
        message.innerHTML = 'Display Name is required.';
    }
}
//--------------------------------CreateUser.aspx ends-------------------------------------
x = screen.width;
y = screen.height;
function setVisible(obj) {

    obj = document.getElementById(obj);
    obj.style.display = "block";
}



function OpenAvatar() {

    var divContent = document.getElementById("layer1").innerHTML;

    if (divContent.length > 0) {
        if (divContent.indexOf("anonymous") < 0) {
            //Shadowbox.init();
            if ($("[aria-describedby='layer1']").length != 0) {
                $("[aria-describedby='layer1']").remove();
            }

            $("#layer1").dialog({
                modal: true,
                height: 650,
                width: 600,
                draggable: false,
                resizable: false,
                autoResize: false
            });


            obj = document.getElementById("layer1");
            obj.style.left = x + 'px';
            obj.style.top = y + 'px';
        }
    }
}

function placeIt(obj) {
    obj = document.getElementById(obj);
    obj.style.left = x + 'px';
    obj.style.top = y + 'px';
}
//added for submenu
function toggle(theDiv) {
    var elem = document.getElementById(theDiv);
    elem.style.display = (elem.style.display == "none") ? "" : "none";
}

function openwindow(value) {
    window.open(value, "mywindow", "menubar=1,resizable=1,toolbar=no,scrollbars=yes,width=650,height=580,left=250,top=200");
}

function OpenNewWindow(sURL) {

    var left = parseInt((screen.availWidth / 2) - (300 / 2));
    var top = parseInt((screen.availHeight / 2) - (200 / 2));

    var features = "toolbar=0,scrollbars=0,resizable=0,location=no,status=0,menubar=0,titlebar=0,width=360,height=280,left=" + left + ",top=" + top
    oMyWin = window.open(sURL, "Confirm", features)
    //return false;
}




function openWindow(postID, authorID, banUser) {

    var strUrl = 'SpamingMessages.aspx?PostID=' + postID + '&PostAuthorId=' + authorID
    var left = parseInt((screen.availWidth / 2) - 400);
    var top = parseInt((screen.availHeight / 2) - 350);

    if (banUser == 'false') {

        if (confirm('Are you sure you want to delete this comment?')) {
            strUrl = strUrl + '&From=1&Ban=0'
            win = window.open(strUrl, "Confirm", "toolbar=no,scrollbars=yes,resizable=yes,width=800,height=690,left=" + left + ",top=" + top);
        }
    }
    else {

        if (confirm('Are you sure you want to delete this comment and ban the author?')) {
            strUrl = strUrl + '&From=1&Ban=1'
            win = window.open(strUrl, "Confirm", "toolbar=no,scrollbars=yes,resizable=yes,width=800,height=690,left=" + left + ",top=" + top);

        }
    }
}


//Added for Edit profile page.
function EditProfileEnableSave() {
    var save = document.getElementById("ctl00_bcr_EditUserForm1_ctl02_UpdateButtonBottom");
    var saveChanges = document.getElementById("ctl00_bcr_EditUserForm1_ctl02_btnSave");

    save.className = "EditProfileSaveButtonNone";
    saveChanges.className = "EditProfileSaveButtonBlock";

    return true;
}
function EditProfileDisableSave() {
    var save = document.getElementById("ctl00_bcr_EditUserForm1_ctl02_UpdateButtonBottom");
    var saveChanges = document.getElementById("ctl00_bcr_EditUserForm1_ctl02_btnSave");

    save.className = "EditProfileSaveButtonBlock";
    saveChanges.className = "EditProfileSaveButtonNone";

    return true;
}


// Newsletter

var subid;
var msgBoard;
var wheelobj;
var textbox;



var allowsubscribeemailsubmit = true; //Variable that indicates if the form will be submitted or not
function showprogress(Loding, wheel, Subscribe, EmailAddress) {
    textbox = document.getElementById(EmailAddress);
    if (emailCheck(textbox.value)) {   //Added setTimeout so that loading image would be displayed before postback occurs    

        if (allowsubscribeemailsubmit == true) {
            allowsubscribeemailsubmit = false;
            setTimeout('changeImage("' + Subscribe + '","' + EmailAddress + '")', 100);
            //setTimeout(function(){
            return true;
            //},500);      
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


//Change image function
function changeImage(Subscribe, EmailAddress) {

    var classname = '';
    classname = $("#" + Subscribe).attr('class');
    var value = $("#" + Subscribe).val();
    var imgSrc = '';

    //Image for text type button and Image type button is different
    if (value.trim() != '')
    { imgSrc = '//media.mercola.com/Assets/images/text.gif'; }
    else
    { imgSrc = '//media.mercola.com/Assets/images/image.gif'; }

    //Hide button
    $("#" + Subscribe).hide();
    if (typeof (classname) == "undefined" || classname == '') {//If class name is not defined for button set this image tag
        $("<img class='subscribe-load'  style='background-image:none !important; vertical-align:middle;'  src='" + imgSrc + "' />").insertBefore($("#" + Subscribe));
    }
    else if (value.trim() != '') {//If button is text type set this image tag
        $("<img class='subscribe-load'  style='background-image:none !important; vertical-align:middle;'  src='" + imgSrc + "' />").insertBefore($("#" + Subscribe));
    }
    else {//If button is image type set this image tag
        $("<img class='" + classname + " subscribe-load' style='background-image:none !important;height:auto;width:auto;cursor:auto !important;'  src='" + imgSrc + "' />").insertBefore($("#" + Subscribe));
    }
}

function hideprogress() {
    //  msgBoard.style.display = "none";
    // wheelobj.style.display = "none";
    // subid.style.display = "block";
}

function ContinueSubscription(e, buttonid, EmailAddress) {
    textbox = document.getElementById(EmailAddress);
    var bt = document.getElementById(buttonid);
    if (typeof bt == 'object') {
        bt.disabled = false;
        if (navigator.appName.indexOf("Netscape") > (-1)) {
            if (e.keyCode == 13) {
                if (emailCheck(textbox.value)) {
                    bt.click();
                }
                return false;
            }
        }
        if (navigator.appName.indexOf("Microsoft Internet Explorer") > (-1)) {
            if (event.keyCode == 13) {
                if (emailCheck(textbox.value)) {
                    bt.click();
                }
                return false;
            }
        }
    }
}


function emailCheck(emailStr) {



    emailStr = emailStr.toLowerCase();

    /* The following variable tells the rest of the function whether or not
    to verify that the address ends in a two-letter country or well-known
    TLD.  1 means check it, 0 means don't. */

    var checkTLD = 1;

    /* The following is the list of known TLDs that an e-mail address must end with. */

    var knownDomsPat = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|ca|mobi)$/;

    /* The following pattern is used to check if the entered e-mail address
    fits the user@domain format.  It also is used to separate the username
    from the domain. */

    var emailPat = /^(.+)@(.+)$/;

    /* The following string represents the pattern for matching all special
    characters.  We don't want to allow special characters in the address. 
    These characters include ( ) < > @ , ; : \ " . [ ] */

    var specialChars = "\\(\\)><@,;:\\\\\\\"\\.\\[\\]\\*\\#\\+\\$\\%\\^\\&\\~\\!\\{\\}\\'\\?\\=\\`\\,\\;\\|\\/";


    /* The following string represents the range of characters allowed in a 
    username or domainname.  It really states which chars aren't allowed.*/

    var validChars = "\[^\\s" + specialChars + "\]";

    /* The following pattern applies if the "user" is a quoted string (in
    which case, there are no rules about which characters are allowed
    and which aren't; anything goes).  E.g. "jiminy cricket"@disney.com
    is a legal e-mail address. */

    var quotedUser = "(\"[^\"]*\")";

    /* The following pattern applies for domains that are IP addresses,
    rather than symbolic names.  E.g. joe@[123.124.233.4] is a legal
    e-mail address. NOTE: The square brackets are required. */

    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;

    /* The following string represents an atom (basically a series of non-special characters.) */

    var atom = validChars + '+';

    /* The following string represents one word in the typical username.
    For example, in john.doe@somewhere.com, john and doe are words.
    Basically, a word is either an atom or quoted string. */

    var word = "(" + atom + "|" + quotedUser + ")";

    // The following pattern describes the structure of the user

    var userPat = new RegExp("^" + word + "(\\." + word + ")*$");

    /* The following pattern describes the structure of a normal symbolic
    domain, as opposed to ipDomainPat, shown above. */

    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");

    /* Finally, let's start trying to figure out if the supplied address is valid. */

    /* Begin with the coarse pattern to simply break up user@domain into
    different pieces that are easy to analyze. */

    var matchArray = emailStr.match(emailPat);


    if (matchArray == null) {

        /* Too many/few @'s or something; basically, this address doesn't
        even fit the general mould of a valid e-mail address. */

        alert("Please enter a valid email address!");

        return false;
    }
    var user = matchArray[1];
    var domain = matchArray[2];


    if (user.charCodeAt(0) == 45 || user.charCodeAt(0) == 95) {
        alert("This username contains invalid characters. Please enter a valid email address!");
        return false;
    }

    // Start by checking that only basic ASCII characters are in the strings (0-127).

    for (i = 0; i < user.length; i++) {
        if (user.charCodeAt(i) > 127) {
            alert("This username contains invalid characters. Please enter a valid email address!");
            return false;
        }
    }
    for (i = 0; i < domain.length; i++) {
        if (domain.charCodeAt(i) > 127) {
            alert("This domain name contains invalid characters. Please enter a valid email address!");
            return false;
        }
    }

    // See if "user" is valid 

    if (user.match(userPat) == null) {

        // user is not valid

        alert("The username doesn't seem to be valid. Please enter a valid email address!");
        return false;
    }

    /* if the e-mail address is at an IP address (as opposed to a symbolic
    host name) make sure the IP address is valid. */

    var IPArray = domain.match(ipDomainPat);
    if (IPArray != null) {

        // this is an IP address

        for (var i = 1; i <= 4; i++) {
            if (IPArray[i] > 255) {
                alert("Destination IP address is invalid! Please enter a valid email address!");
                return false;
            }
        }
        return true;
    }

    // Domain is symbolic name.  Check if it's valid.

    var atomPat = new RegExp("^" + atom + "$");
    var domArr = domain.split(".");
    var len = domArr.length;
    for (i = 0; i < len; i++) {
        if (domArr[i].search(atomPat) == -1) {
            alert("The domain name does not seem to be valid. Try with all lower case letters. Please enter a valid email address! ");
            return false;
        }
    }

    /* domain name seems valid, but now make sure that it ends in a
    known top-level domain (like com, edu, gov) or a two-letter word,
    representing country (uk, nl), and that there's a hostname preceding 
    the domain or country. */


    if (checkTLD && domArr[domArr.length - 1].length != 2 &&
domArr[domArr.length - 1].search(knownDomsPat) == -1) {
        alert("The address must end in a well-known domain. Please enter a valid email address!");
        return false;
    }

    // Make sure there's a host name preceding the domain.

    if (len < 2) {
        alert("This address is missing a hostname! Please enter a valid email address!");
        return false;
    }

    // If we've gotten this far, everything's valid!
    return true;
}

//  End -->

function AllowReply() {
    var txt = document.getElementsByTagName('textarea');
    var errorMsg = document.getElementById('subCommentRequiredMessage');
    for (i = 0; i < txt.length; i++) {
        if (txt[i].id.indexOf('txtSubComment') > -1) {

            if (txt[i].value.trim().length == 0 || txt[i].value.trim().toLowerCase() == 'leave a comment...') {

                errorMsg.style.display = "block";
                return false;
                break;
            }
            else if (txt[i].value.trim().length > 2000) {
                alert('Please enter less than 2000 characters.');
                return false;
                break;
            }
            errorMsg.style.display = "none";
            break;
        }
    }
    errorMsg.style.display = "none";
    return true;

}

function TrapEnterKeyForSearch(evt, sourceTextBoxName) {
    var txtValue;
    if (evt && evt.target) {
        if (evt.keyCode == 13) {
            txtValue = document.getElementById(sourceTextBoxName).value;
            RedirectToSearchURL(txtValue, '0');
            return false;
        }
    }
    else if (window.event) {
        if (event.keyCode == 13) {
            txtValue = document.getElementById(sourceTextBoxName).value;
            RedirectToSearchURL(txtValue, '0');
            return false;
        }
    }
}
function RedirectToSearchURL(sourceName) {
    var searchURL;
    var txtboxValue;
    txtboxValue = document.getElementById(sourceName).value;
    txtboxValue = txtboxValue.replace(/^\s+/, "");
    if (txtboxValue != "") {
        //searchURL = "http://search.mercola.com/search/pages/Results.aspx?k=" + txtboxValue;
        //searchURL = "https://www.google.com/search?sitesearch=mercola.com&q=" + txtboxValue;
        searchURL = "http://search.mercola.com/results.aspx?q=" + txtboxValue;
        location.href = searchURL;
    }
    else {
        alert('Please enter search text');
    }
    return false;
}



function popup(url) {
    params = 'width=' + screen.width;
    params += ', height=' + screen.height;
    params += ', top=0, left=0'
    params += ', fullscreen=no';
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=yes';
    params += ', resizable=no';
    params += ', scrollbars=yes';
    params += ', status=yes';
    params += ', toolbar=yes';
    newwin = window.open(url, 'windowname5', params);
    if (window.focus) { newwin.focus() }
    return false;
}

function Validate() {
    var txtEmail = document.getElementById('textBoxEmailAddress');

    if (emailCheck(txtEmail.value)) {

        if (allowsubscribeemailsubmit == true) {
            allowsubscribeemailsubmit = false;
            $("#ButtonFullStory").hide();
            setTimeout('changeImagePopup()', 100);

            setTimeout(function() {
                return true;
            }, 500);
        }
        else {

            return false;

        }

    }
    else {
        return false;
    }
}

function changeImagePopup() {
    var imgSrc = '';
    imgSrc = '//media.mercola.com/Assets/images/text.gif';
    $("<img src='" + imgSrc + "' />").insertBefore($("#ButtonFullStory"));

}

function CheckValidation(msg) {
    if (msg == 2) {
        alert("Email Address is not valid ");
        return false;
    }
    else if (msg == 3) {
        alert('Sorry! We are not able to connect to validation server. Please try again.');
        return false;
    }
    else if (msg == 4) {
        alert('Please enter email address.');
        return false;
    }

}


function CommunitiesTrapEnterKeyForSearch(evt, sourceTextBoxName) {
    var txtValue;
    if (evt && evt.target) {
        if (evt.keyCode == 13) {
            txtValue = document.getElementById(sourceTextBoxName).value;
            CommunitiesRedirectToSearchURL(txtValue, '0');
            return false;
        }
    }
    else if (window.event) {
        if (event.keyCode == 13) {
            txtValue = document.getElementById(sourceTextBoxName).value;
            CommunitiesRedirectToSearchURL(txtValue, '0');
            return false;
        }
    }
}

function CommunitiesRedirectToSearchURL(sourceName, option) {

    var searchURL, txtboxValue;
    if (option == '1') {
        txtboxValue = document.getElementById(sourceName).value;
    }
    else {
        txtboxValue = sourceName;
    }
    txtboxValue = txtboxValue.replace(/^\s+/, "");
    if (txtboxValue != "") {
        //searchURL = "http://search.mercola.com/search/pages/Results.aspx?k=" + txtboxValue;
        //searchURL = "https://www.google.com/search?sitesearch=mercola.com&q=" + txtboxValue;
        searchURL = "http://search.mercola.com/results.aspx?q=" + txtboxValue;

        location.href = searchURL;
    }
    else {
        alert('Please enter search text');
    }
    return false;
}


window.onload = function() { }

var PopUpPageTimer;
function PopUpPage() {
    window.clearTimeout(PopUpPageTimer);
    PopUpPageTimer = window.setTimeout('ShowRRPage()', 60000);
}


function ShowRRPage() {

    if ($("[aria-describedby='rrpopupdialog']").length != 0) {
        $("[aria-describedby='rrpopupdialog']").remove();
    }

    var pageURL = 'http://' + location.hostname;
    var parentUrl = parent.location.href;

    var popUpUrl = pageURL + '/Themes/Blogs/mercolaArticle/RegistrationPopUp.aspx?ParentURL=' + parentUrl;
    $("#rrpopupdialog").html('<iframe onload="rrPopupResize()" id="modalIframeId" width="100%"  marginWidth="0" marginHeight="0" frameBorder="0" scrolling="no" />');
    //.dialog("option", "height", 530).dialog("option", "width", 600).dialog("open").siblings('.ui-dialog-titlebar').remove();

    var rrDial = $("#rrpopupdialog").dialog({
        modal: true,
        height: 'auto', //580 //changed to auto for responsive sizing
        width: 'auto', //750  //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing     
        fluid: true, //add for responsive
        autoOpen: false
    });

    $("#modalIframeId").attr("src", popUpUrl);
    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrDial.dialog("open");

    $("#rrpopupdialog").position({
        my: "center",
        at: "center",
        of: window
    });
}


function PopUpRRPageHP() {
    window.clearTimeout(PopUpPageTimer);
    PopUpPageTimer = window.setTimeout('ShowRRPageHP()', 60000);
}

function ShowRRPageHP() {

    if ($("[aria-describedby='rrpopupdialog']").length != 0) {
        $("[aria-describedby='rrpopupdialog']").remove();
    }

    var pageURL = 'http://' + location.hostname;
    var parentUrl = parent.location.href;

    var popUpUrl = pageURL + '/Themes/Blogs/HealthyPets/RegistrationPopUp_HP.aspx?ParentURL=' + parentUrl;
    $("#rrpopupdialog").html('<iframe onload="rrPopupResize()"  id="modalIframeId" width="100%" marginWidth="0" marginHeight="0" frameBorder="0" scrolling="no" />');
    //.dialog("option", "height", 530).dialog("option", "width", 600).dialog("open").siblings('.ui-dialog-titlebar').remove();


    var rrDial = $("#rrpopupdialog").dialog({
        modal: true,
        height: 'auto', //580 //changed to auto for responsive sizing
        width: 'auto', //750  //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
        , autoOpen: false
    });


    $("#modalIframeId").attr("src", popUpUrl);
    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrDial.dialog("open");

    $("#rrpopupdialog").position({
        my: "center",
        at: "center",
        of: window
    });
}

function PopUpPageGMO() {
    window.clearTimeout(PopUpPageTimer);
    PopUpPageTimer = window.setTimeout('ShowRRPageGMO()', 60000);
}

function ShowRRPageGMO() {

    if ($("[aria-describedby='rrpopupdialog']").length != 0) {
        $("[aria-describedby='rrpopupdialog']").remove();
    }

    var pageURL = 'http://' + location.hostname;
    var parentUrl = parent.location.href;

    var popUpUrl = pageURL + '/Themes/Blogs/mercolaArticle/RegistrationPopUp.aspx?ParentURL=' + parentUrl;
    $("#rrpopupdialog").html('<iframe onload="rrPopupResize()" id="modalIframeId" width="100%"  marginWidth="0" marginHeight="0" frameBorder="0" scrolling="no" />');
    //.dialog("option", "height", 530).dialog("option", "width", 600).dialog("open").siblings('.ui-dialog-titlebar').remove();

    var rrDial = $("#rrpopupdialog").dialog({
        modal: true,
        height: 'auto', //580 //changed to auto for responsive sizing
        width: 'auto', //750  //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
        , autoOpen: false
    });

    $("#modalIframeId").attr("src", "");
    $("#modalIframeId").attr("src", popUpUrl);
    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrDial.dialog("open");

    $("#rrpopupdialog").position({
        my: "center",
        at: "center",
        of: window
    });
}


//Script to force rrpopupresize on iframe load
function rrPopupResize() {
    //console.log('ShowRRpage - Resize');
    //Do not apply rrpopup resize when user is using IPAD
    var isiPad = navigator.userAgent.match(/iPad/i) != null;


    if (!isiPad) {
        var iFrameID = document.getElementById('modalIframeId');
        if (iFrameID) {
            //Set iphone rrpopupdialog to 100%
            var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
            if (isiPhone) {
                $('#modalIframeId').height('100%');
            }
            // here you can make the height, delete it first, then I make it again
            iFrameID.height = "";
            iFrameID.height = "";
            iFrameID.height = (iFrameID.contentWindow.document.body.scrollHeight) + "px";
            //console.log("Iframe content height - " + (iFrameID.contentWindow.document.body.scrollHeight) + "px");
            //if (getInternetExplorerVersion() === -1) {
            var addHeight = 50;
            if (getInternetExplorerVersion() == 8)
            { addHeight = 0; }
            iFrameID.height = (iFrameID.contentWindow.document.body.scrollHeight + addHeight) + "px";
            //}

            //Force position to center
            if ($("#modalIframeId").length > 0) {
                $("#rrpopupdialog").dialog("option", "position", "center");
            }
        }

    }

}


function CharacterLimitMainComment() {

    var txt = document.getElementsByTagName('textarea');

    for (i = 0; i < txt.length; i++) {
        if (txt[i].id.indexOf('tbComment') > -1) {

            if (txt[i].value.length > 2000) {
                alert('Please enter 2000 characters only');
                return false;
            }
        }
    }
    return true;
}

/*

function CharacterCount() 
{ 
var taObj=document.getElementById('ctl00_ctl00_ctl00_bcr_bcr_bcr_WeblogPostCommentForm1_ctl01_tbComment');
if (taObj.value.length > 2000*1)
{
taObj.value = taObj.value.substring(0,2000*1);
}       
}
*/

function GetTextArea(controlName) {
    var txt = document.getElementsByTagName('textarea');
    for (i = 0; i < txt.length; i++) {
        if (txt[i].id.indexOf(controlName) > -1) {
            return txt[i];
        }
    }
    return null;
}

function CharacterCount(controlName, messageLabelID) {

    var taObj = GetTextArea(controlName);

    if (taObj != null) {
        if (taObj.value.length > 2000) {
            taObj.value = taObj.value.substring(0, 2000);
        }

        var lbl = document.getElementById(messageLabelID);

        lbl.innerHTML = 'Characters remaining : ' + (2000 - (taObj.value.length));
    }
}

function CharacterLimit(sharebuttons) {

    var txt = document.getElementsByTagName('textarea');
    for (i = 0; i < txt.length; i++) {
        if (txt[i].id.indexOf('tbComment') > -1) {
            if (txt[i].value.trim().length > 2000) {
                alert('Please enter 2000 characters only');
                return false;
            }
            else if (txt[i].value.trim().length == 0 || txt[i].value.trim().toLowerCase() == 'leave a comment...') {
                alert('Please enter your comment');

                return false;
            }
        }
    }
    //waitPreloadPage();
    var LastDiv = document.getElementById(sharebuttons);
    LastDiv.style.display = 'block';
    return true;
}

function CloseSpamOptionDiv() {
    // var div = document.getElementById('layer1');
    // div.style.display = "none";

    $('#layer1').dialog('close');
    return false;
}





//function OpenLogin(showAllComments, focusFragment, isReply) {
//    Shadowbox.init();
//    var div = document.getElementById('LoginDivShadowBox')
//    var aTag = div.getElementsByTagName('a');
//    var divContent = div.innerHTML;
//    for (var i = 0; i < aTag.length; i++) {
//        var s = new String(aTag[i].id);
//        if (s.indexOf('_loginLinkbtn') != -1 || s.indexOf('_loginRegister') != -1) {
//            if (isReply == true) {
//                divContent = divContent.replace(aTag[i].href, aTag[i].href + encodeURIComponent('?SetFocus=' + focusFragment));
//            }
//            else if (showAllComments == true) {
//                divContent = divContent.replace(aTag[i].href, aTag[i].href + encodeURIComponent('?ShowAllComments=True&FocusOn=' + focusFragment));
//            }
//        }
//    }
//    Shadowbox.open({
//        player: 'html',
//        content: divContent,
//        height: 550,
//        width: 620,
//        flashBgColor: '',
//        title: ''
//    });
//}


function ShowBanningMsg(Action) {
    if (Action == 'Vote') {
        alert('Sorry! your account is banned. You can not vote on this post. Please contact the administrator.');
    }
    else if (Action == 'Spam') {
        alert('You can not spam on this post.');
    }
    else if (Action == 'Edit') {
        alert('Sorry! your account is banned. You can not edit this post. Please contact the administrator.');
    }
    else if (Action == 'AddFriend') {
        alert('Sorry! your account is banned. You can not add this user as friend. Please contact the administrator.');
    }
    else if (Action == 'SendEmail') {
        alert('Sorry! your account is banned. You can not send mail to the user. Please contact the administrator.');
    }
    else if (Action == 'Reply') {
        alert('Sorry! your account is banned. You can not reply yo this comment. Please contact the administrator.');
    }


}

function AuthorforSpam() {
    alert('You can not spam your own post.');
}

function AllowEdit() {

    var txt = document.getElementsByTagName('textarea');
    var errorMsg = document.getElementById('editCommentRequiredMessage');
    for (i = 0; i < txt.length; i++) {
        if (txt[i].id.indexOf('txtEditComment') > -1) {
            if (txt[i].value.trim().length == 0 || txt[i].value.trim().toLowerCase() == 'leave a comment...') {
                errorMsg.style.display = "block";
                //alert('Please enter the comment');
                return false;
                break;
            }
            else if (txt[i].value.trim().length > 2000) {
                alert('Please enter less than 2000 characters.');
                return false;
                break;
            }
            errorMsg.style.display = "none";
            break;
        }
    }
    errorMsg.style.display = "none";
    return true;

}

function OpenChangeEmail() {

    var divContent = document.getElementById("ChangeEmailAddress").innerHTML;

    var url = 'http://login.mercola.com/changeemail.aspx'

    if (divContent.indexOf("src=\"\"") == -1) {
        divContent = divContent.replace(/<iframe/i, "<iframe src=\"" + url + "\"");
    }
    else {
        divContent = divContent.replace(/src=\"\"/i, "src=\"" + url + "\"");
    }


    if ($("[aria-describedby='changeEmailDialog']").length != 0) {
        $("[aria-describedby='changeEmailDialog']").remove();
    }


    var rrEmail = $("#changeEmailDialog").dialog({
        modal: true,
        height: 'auto', //580 //changed to auto for responsive sizing
        width: 'auto', //750  //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
        , autoOpen: false
    });

    $("#iFraChangeEmail").attr("src", url);

    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrEmail.dialog("open");

    $("#changeEmailDialog").position({
        my: "center",
        at: "center",
        of: window
    });



}


//Not used anymore.. righttoknowgmo
function OpenSubmitPhoto() {

    var divContent = document.getElementById("emailToFriend").innerHTML;
    Shadowbox.init();
    Shadowbox.open({
        player: 'html',
        content: divContent,
        height: 660,
        width: 650,
        flashBgColor: '',
        title: ''
    });
}

function OpenContactImporter(addressBook) {
    var iframes = document.getElementsByTagName('iframe');
    //    for (var i = 0; i < iframes.length; i++) {
    //        if ($(iframes[i]).attr('id').indexOf('iFraContactInvite') >= 0) {
    //            if ($(iframes[i]).attr('id').indexOf('Web') >= 0) {
    //                //iframes[i].src = document.getElementById('invitefriends1src').value;
    //            }
    //            else if ($(iframes[i]).attr('id').indexOf('Local') >= 0) {
    //                //iframes[i].src = document.getElementById('invitefriends2src').value;
    //            }
    //        }
    //    }

    var url = "";
    if (addressBook == 'web') {
        var divContent = document.getElementById("ContactImporterWeb").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'local') {
        var divContent = document.getElementById("ContactImporterLocal").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'webHp') {
        var divContent = document.getElementById("ContactImporterWebHp").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'localHp') {
        var divContent = document.getElementById("ContactImporterLocalHp").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'webEmf') {
        var divContent = document.getElementById("ContactImporterWebEmf").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'localEmf') {
        var divContent = document.getElementById("ContactImporterLocalEmf").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'webFit') {
        var divContent = document.getElementById("ContactImporterWebFit").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'localFit') {
        var divContent = document.getElementById("ContactImporterLocalFit").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'ETAF') {
        //document.getElementById("emailtoafriend").src = document.getElementById("emailtoafriendsrc").value;
        var divContent = document.getElementById("emailToFriend").innerHTML;
        var divContentID = "emailToFriend";
        if (document.getElementById('emailtoafriendsrc') != null) {
            url = document.getElementById('emailtoafriendsrc').value;
        }
    }



    if ($("[aria-describedby='" + divContentID + "']").length != 0) {
        $("[aria-describedby='" + divContentID + "']").remove();
    }

    var etaf = '<div class="etaf-border"><div class="closeBtn"><a href="javascript:closeEmailToFriend();"><div class="etafclose"></div></a></div><strong>Email this article to a friend</strong><div class="hrpop"></div><iframe id="emailtoafriend" width="100%" scrolling="no" frameborder="0" height="350px"></iframe><div class="clear"></div></div>';
    $("#" + divContentID).html(etaf);
    var rrEtaf = $("#" + divContentID).dialog({
        modal: true,
        height: 480,
        width: 850,
        draggable: false,
        resizable: false,
        autoResize: true
        , autoOpen: false

    });


    if (url != "") {
        if (divContent.indexOf("src=\"\"") == -1) {
            divContent = divContent.replace(/<iframe/i, "<iframe src=\"" + url + "\"");
        }
        else {
            divContent = divContent.replace(/src=\"\"/i, "src=\"" + url + "\"");
        }
        $("#emailtoafriend").attr("src", url);
    }
    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrEtaf.dialog("open");
    $("#" + divContentID).position({
        my: "center",
        at: "center",
        of: window
    });

    //    Shadowbox.open({
    //        player: 'html',
    //        content: divContent,
    //        height: 480,
    //        width: 850,
    //        flashBgColor: '',
    //        title: ''
    //    });

}

function OpenContactImporterResponsive(addressBook) {
    var iframes = document.getElementsByTagName('iframe');

    var url = "";
    if (addressBook == 'web') {
        var divContent = document.getElementById("ContactImporterWeb").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'local') {
        var divContent = document.getElementById("ContactImporterLocal").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'webHp') {
        var divContent = document.getElementById("ContactImporterWebHp").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'localHp') {
        var divContent = document.getElementById("ContactImporterLocalHp").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'webEmf') {
        var divContent = document.getElementById("ContactImporterWebEmf").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'localEmf') {
        var divContent = document.getElementById("ContactImporterLocalEmf").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'webFit') {
        var divContent = document.getElementById("ContactImporterWebFit").innerHTML;
        if (document.getElementById('invitefriends1src') != null) {
            url = document.getElementById('invitefriends1src').value;
        }
    }
    else if (addressBook == 'localFit') {
        var divContent = document.getElementById("ContactImporterLocalFit").innerHTML;
        if (document.getElementById('invitefriends2src') != null) {
            url = document.getElementById('invitefriends2src').value;
        }
    }
    else if (addressBook == 'ETAF') {
        //document.getElementById("emailtoafriend").src = document.getElementById("emailtoafriendsrc").value;
        var divContent = document.getElementById("emailToFriend").innerHTML;
        var divContentID = "emailToFriend";
        if (document.getElementById('emailtoafriendsrc') != null) {
            url = document.getElementById('emailtoafriendsrc').value;
        }
    }



    if ($("[aria-describedby='" + divContentID + "']").length != 0) {
        $("[aria-describedby='" + divContentID + "']").remove();
    }

    var rrEtaf = $("#" + divContentID).dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing
        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
		, autoOpen: false
    });



    if (url != "") {
        if (divContent.indexOf("src=\"\"") == -1) {
            divContent = divContent.replace(/<iframe/i, "<iframe src=\"" + url + "\"");
        }
        else {
            divContent = divContent.replace(/src=\"\"/i, "src=\"" + url + "\"");
        }
        $("#emailtoafriend").attr("src", url);
    }


    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrEtaf.dialog("open");

    $("#" + divContentID).position({
        my: "center",
        at: "center",
        of: window
    });



}

function OpenContactImporterOptimized() {
    var url = "";

    var divContent = document.getElementById("emailToFriend").innerHTML;
    var divContentID = "emailToFriend";
    if (document.getElementById('emailtoafriendsrc') != null) {
        url = document.getElementById('emailtoafriendsrc').value;
    }

    if ($("[aria-describedby='" + divContentID + "']").length != 0) {
        $("[aria-describedby='" + divContentID + "']").remove();
    }

    var etaf = '<div class="etaf-border"><div class="closeBtn"><a href="javascript:closeEmailToFriend();"><div class="etafclose"></div></a></div><strong>Email this article to a friend</strong><div class="hrpop"></div><iframe id="emailtoafriend" width="100%" scrolling="no" frameborder="0" height="350px"></iframe><div class="clear"></div></div>';
    $("#" + divContentID).html(etaf);
    var rrEtaf = $("#" + divContentID).dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing
        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
		, autoOpen: false
    });

    if (url != "") {
        if (divContent.indexOf("src=\"\"") == -1) {
            divContent = divContent.replace(/<iframe/i, "<iframe src=\"" + url + "\"");
        }
        else {
            divContent = divContent.replace(/src=\"\"/i, "src=\"" + url + "\"");
        }
        $("#emailtoafriend").attr("src", url);
    }

    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrEtaf.dialog("open");

    $("#" + divContentID).position({
        my: "center",
        at: "center",
        of: window
    });

}

function OpenContactImporterOptMultSource(SourceID) {
    var url = "";
    var divContent = document.getElementById("emailToFriend").innerHTML;
    var divContentID = "emailToFriend";
    if (document.getElementById(SourceID) != null) {
        url = document.getElementById(SourceID).value;
    }

    if ($("[aria-describedby='" + divContentID + "']").length != 0) {
        $("[aria-describedby='" + divContentID + "']").remove();
    }

    var etaf = '<div class="etaf-border"><div class="closeBtn"><a href="javascript:closeEmailToFriend();"><div class="etafclose"></div></a></div><strong>Email this article to a friend</strong><div class="hrpop"></div><iframe id="emailtoafriend" width="100%" scrolling="no" frameborder="0" height="350px"></iframe><div class="clear"></div></div>';
    $("#" + divContentID).html(etaf);
    var rrEtaf = $("#" + divContentID).dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing
        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
		, autoOpen: false
    });

    if (url != "") {
        if (divContent.indexOf("src=\"\"") == -1) {
            divContent = divContent.replace(/<iframe/i, "<iframe src=\"" + url + "\"");
        }
        else {
            divContent = divContent.replace(/src=\"\"/i, "src=\"" + url + "\"");
        }
        $("#emailtoafriend").attr("src", url);
    }

    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrEtaf.dialog("open");

    $("#" + divContentID).position({
        my: "center",
        at: "center",
        of: window
    });

}

function OpenContactImporterByParameter(source, title, url) {

    url = "http://contactimporter.mercola.com/EmailArticle.aspx?source=" + source + "&title=" + encodeURIComponent(title) + "&url=" + encodeURI(url);

    var divContent = document.getElementById("emailToFriend").innerHTML;

    if (url != "") {
        if (divContent.indexOf("src=\"\"") == -1) {
            divContent = divContent.replace(/<iframe/i, "<iframe src=\"" + url + "\"");
        }
        else {
            divContent = divContent.replace(/src=\"\"/i, "src=\"" + url + "\"");
        }
    }

    Shadowbox.open({
        player: 'html',
        content: divContent,
        height: 480,
        width: 850,
        flashBgColor: '',
        title: ''
    });
}


function OpenRewardpoints(UserId, PostID, ConversationID) {
    //URL sample format
    ///themes/blogs/mercolaArticle/RewardPoints.aspx?UserId=" + userID + "&Postid=" + postid + "&ConversationID=00000000-0000-0000-0000-000000000000'

    var root = 'http://' + location.hostname;
    var url = root + '/themes/blogs/mercolaArticle/RewardPoints.aspx?UserId=' + UserId + '&Postid=' + PostID + '&ConversationID=' + ConversationID
    var modalLabel = "Reward Points";
    OpenCommentsModal(url, modalLabel);

}

function OpenRequestFriend(UserId) {
    //URL sample format
    ///user/RequestFriend.aspx?UserId=" + userID 

    var root = 'http://' + location.hostname;
    var url = root + '/user/RequestFriend.aspx?UserId=' + UserId;
    var modalLabel = "Send a friend request";
    OpenCommentsModal(url, modalLabel);

}

function OpenSendEmail(UserId, ConversationID) {
    //URL sample format
    ///user/RequestFriend.aspx?UserId=" + userID 

    var root = 'http://' + location.hostname;
    var url = root + '/user/Conversation.aspx?UserId=' + UserId + '&ConversationID=' + ConversationID;
    var modalLabel = "Send an E-mail";
    OpenCommentsModal(url, modalLabel);

}


function OpenDetailedProfile(UserId, ConversationID) {
    //URL sample format
    ///user/RequestFriend.aspx?UserId=" + userID 

    var root = 'http://' + location.hostname;
    var url = root + '/themes/mercolaArticle/user/UserProfileDetails.aspx?Name=' + UserId + '&ConversationID=' + ConversationID;
    var modalLabel = "Profile Details";
    OpenCommentsModal(url, modalLabel);

}
function OpenAddComment(UserId) {
    //URL sample format
    ///user/RequestFriend.aspx?UserId=" + userID 

    var root = 'http://' + location.hostname;
    var url = root + '/user/ProfileMessage.aspx?UserId=' + UserId;
    var modalLabel = "Leave a comment";
    OpenCommentsModal(url, modalLabel);

}

function OpenAddAnnouncement(UserId) {
    //URL sample format
    ///user/RequestFriend.aspx?UserId=" + userID 

    var root = 'http://' + location.hostname;
    var url = root + '/user/ProfileMessage.aspx?UserId=' + UserId;
    var modalLabel = "Make an announcement";
    OpenCommentsModal(url, modalLabel);

}
function OpenChangeAvatar() {
    //URL sample format
    ///user/RequestFriend.aspx?UserId=" + userID 

    var root = 'http://' + location.hostname;
    var url = root + '/user/EditAvatar.aspx';
    var modalLabel = "Change Avatar";
    OpenCommentsModal(url, modalLabel);

}
function OpenCommentsModal(Url, modalLabel) {


    $("#modalLabel").html(modalLabel);

    if ($("[aria-describedby='RewardPoints']").length != 0) {
        $("[aria-describedby='RewardPoints']").remove();
    }

    var rrRewards = $("#RewardPoints").dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing
        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
		, autoOpen: false
    });

    $("#iFrameRewardPoints").attr("src", Url);
    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrRewards.dialog("open");

    $("#RewardPoints").position({
        my: "center",
        at: "center",
        of: window
    });


}


//Script to force rrpopupresize on iframe load
function RewardsResize(iFrameID, dialogID) {
    //Do not apply rrpopup resize when user is using IPAD
    //var isiPad = navigator.userAgent.match(/iPad/i) != null;

    //if ( !isiPad )
    //{
    var iFrameObj = document.getElementById(iFrameID);
    if (iFrameObj) {
        //Set iphone rrpopupdialog to 100%
        var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
        if (isiPhone) {
            $('#' + iFrameID).height('100%');
        }

        // here you can make the height, delete it first, then I make it again
        iFrameObj.height = "";
        iFrameObj.height = (iFrameObj.contentWindow.document.body.scrollHeight) + "px";


        //Force position to center
        if ($('#' + dialogID).hasClass('ui-dialog-content')) {
            $('#' + dialogID).dialog("option", "position", "center");
        }
    }

    //}

}

function RewardsResize1(iFrameID, dialogID) {
    //Do not apply rrpopup resize when user is using IPAD
    var isiPad = navigator.userAgent.match(/iPad/i) != null;

    if (!isiPad) {
        var iFrameObj = window.parent.document.getElementById(iFrameID);
        if (iFrameObj) {
            //Set iphone rrpopupdialog to 100%
            var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
            if (isiPhone) {
                $('#' + iFrameID).height('100%');
            }
            // here you can make the height, delete it first, then I make it again
            iFrameObj.height = "";
            iFrameObj.height = (iFrameObj.contentWindow.document.body.scrollHeight) + "px";

            //Force position to center
            if ($('#' + dialogID).hasClass('ui-dialog-content')) {
                $('#' + dialogID).dialog("option", "position", "center");
            }
        }

    }

}
function OpenProfileCompleteness() {
    if ($("[aria-describedby='ProfileCompleteness']").length != 0) {
        $("[aria-describedby='ProfileCompleteness']").remove();
    }

    $("#ProfileCompleteness").dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing

        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive

    });
    $("#ProfileCompleteness").position({
        my: "center",
        at: "center",
        of: window
    });
    /*
    $("#ProfileCompleteness").dialog({
    modal: true,
    height: 500,
    width: 600,
    draggable: false,
    resizable: false,
    autoResize: false
    });
    */
}

function OpenEmailPreference() {

    /*
    $("#emailPreference").dialog({
    modal: true,
    height: 1024,
    width: 1000,
    draggable: false,
    resizable: false,
    autoResize: false
    });
    */
    if ($("[aria-describedby='emailPreference']").length != 0) {
        $("[aria-describedby='emailPreference']").remove();
    }


    var rrEmail = $("#emailPreference").dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing
        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive
		, autoOpen: false
    });


    $("#iEmailPreference").attr("src", $("#hdnEmailPreference").val());
    //Manual open of dialog after setting Iframe src
    //Fix for multiple call of url in IE
    rrEmail.dialog("open");

    $("#emailPreference").position({
        my: "center",
        at: "center",
        of: window
    });

    //Fix top position of modal popup for chrome and safari only
    //Issue - Modal is not centered due to height   
    $("#emailPreference").css('top', '0px');

}


function AddFriendRequest(userid) {
    //Shadowbox.init();
    var divcontent = '<div id="addfriendpopup" style="width:550px;height:300px;"><div class="CommonModalTitle" style="width:540px !important;"><div onclick="$(\'\#addfriendpopup\'\).dialog(\'\close\'\);" class="CommonModalClose" style="right:55px !important;"></div><span>Send a friend request</span><div style="clear: both;"></div></div><div style="width:550px;height: 360px;"><iframe src="/Themes/mercolaArticle/user/RequestFriend.aspx?UserId=' + userid + '&ConversationID=00000000-0000-0000-0000-000000000000" width="550" height="300" frameborder="0"></iframe></div></div>';
    //    Shadowbox.open({
    //        player: 'html',
    //        content: '<div style="width:550px;height:300px;"><div style="border:1 px solid red;float:right;"><a href="javascript:Shadowbox.close();"><img src="/Themes/mercolaArticle/images/FR_modalSubscriptionCloseBtn.png" alt="" border="0" /></a></div><div style="width:550px;height: 360px;"><iframe src="/Themes/mercolaArticle/user/RequestFriend.aspx?UserId=' + userid + '&ConversationID=00000000-0000-0000-0000-000000000000" width="550" height="300" frameborder="0"></iframe></div></div>',
    //        height: 466,
    //        width: 664,
    //        title: ''
    //    });
    $("#SendmsgDiv").dialog("close");
    Telligent_Modal.Open("/user/RequestFriend.aspx?UserId=" + userid, 550, 360, null);
    //    $(divcontent).dialog({
    //        modal: true,
    //        height: 158,
    //        width: 600,
    //        draggable: false,
    //        resizable: false,
    //        autoResize: false,
    //        close: function(event, ui) {
    //            $("#addfriendpopup").remove();
    //        }
    //    });
}


function CheckUserFriendList(username, userid, check) {
    var txt = document.getElementById('divFriendMsg');
    if (check == 1) {
        document.getElementById('divFriendMsg').innerHTML = "<b>" + username + " has chosen to receive messages from approved friends only.<br/> You are not yet " + username + "'s friend or your friend request has not been approved. Please <a onclick='javascript:OpenRequestFriend(" + userid + ");'>Click here</a> to add " + username + " as friend.";

    }
    else {
        document.getElementById('divFriendMsg').innerHTML = "<b>" + username + " has chosen not to receive private messages from other members";
    }
    var divContentMsg = document.getElementById("SendmsgDiv").innerHTML;

    //    Shadowbox.open({
    //        player: 'html',
    //        content: divContentMsg,
    //        height: 158,
    //        width: 600,
    //        flashBgColor: '',
    //        title: ''
    //    });
    /*
    $("#SendmsgDiv").dialog({
    modal: true,
    height: 158,
    width: 600,
    draggable: false,
    resizable: false,
    autoResize: false
    });
    */
    if ($("[aria-describedby='SendmsgDiv']").length != 0) {
        $("[aria-describedby='SendmsgDiv']").remove();
    }

    $("#SendmsgDiv").dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing
        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive

    });
    $("#SendmsgDiv").position({
        my: "center",
        at: "center",
        of: window
    });
}



function RedirectToSearchURL(sourceName, option) {
    var searchURL, txtboxValue;

    if (option == '1')//button click
    {
        txtboxValue = document.getElementById(sourceName).value;
    }
    else if (option == '0')//enter key
    {
        txtboxValue = sourceName;
    }
    else {
        if (sourceName == 'qmaster') {
            txtboxValue = document.getElementById(sourceName).value;
        }
        else {
            txtboxValue = sourceName;
        }
    }

    txtboxValue = txtboxValue.replace(/^\s+/, "");
    if (txtboxValue != "") {
        //searchURL = "http://search.mercola.com/search/pages/Results.aspx?k=" + txtboxValue;
        //searchURL = "https://www.google.com/search?sitesearch=mercola.com&q=" + txtboxValue;
        searchURL = "http://search.mercola.com/results.aspx?q=" + txtboxValue;
        location.href = searchURL;
    }
    else {
        alert('Please enter search text');
    }
    return false;

}


function CalculateYearsOfPractice(ctrlYearsPracticeDDL, ctrlYearsPractice, ctrlTxtDOB) {
    var YearsPractice = document.getElementById(ctrlYearsPractice);
    var YearsPracticeDDL = document.getElementById(ctrlYearsPracticeDDL);
    var DOB = document.getElementById(ctrlTxtDOB);

    if (YearsPracticeDDL == null) {
        return;
    }

    if (YearsPracticeDDL.value != '0') {
        var today = new Date();

        if (DOB.value != '') {
            var DOBYear = DOB.value.substring(DOB.value.lastIndexOf('/') + 1);
            if (DOBYear + 1 > YearsPracticeDDL.value) {
                alert('Health care practice year should be greater than your birth year. Please check.');
                YearsPracticeDDL.focus();
                return;
            }
        }

        YearsPractice.value = "Total year(s): " + (today.getFullYear() - YearsPracticeDDL.value);
    }
    else {
        alert('Please select Start Practice year.');
        YearsPractice.value = '';
        YearsPracticeDDL.focus();
        return;
    }
}

function ValidateProfile(ctrlYearsPracticeDDL, ctrlTxtDOB, fName, lName, txtState, ddlState, txtCity, txtPhoneNo) {
    if (document.getElementById(fName).value == '') {
        alert('Please enter first name');
        document.getElementById(fName).focus();
        return false;
    }

    if (document.getElementById(lName).value == '') {
        alert('Please enter last name');
        document.getElementById(lName).focus();
        return false;
    }

    if (document.getElementById(txtState) != null) {
        if (document.getElementById(txtState).value == '') {
            alert('Please enter state');
            document.getElementById(txtState).focus();
            return false;
        }
    }

    if (document.getElementById(ddlState) != null) {
        if (document.getElementById(ddlState).value == "0") {
            alert('Please select state');
            document.getElementById(ddlState).focus();
            return false;
        }
    }
    if (document.getElementById(txtCity).value == '') {
        alert('Please enter city');
        document.getElementById(txtCity).focus();
        return false;
    }

    var DOB = document.getElementById(ctrlTxtDOB);
    if (DOB.value == '') {
        alert('Please enter Date of Birth');
        document.getElementById(ctrlTxtDOB).focus();
        return false;
    }

    var YearsPracticeDDL = document.getElementById(ctrlYearsPracticeDDL);

    if (YearsPracticeDDL == null) {
        return;
    }
    if (YearsPracticeDDL.value == 0) {
        alert('Please select Start Practice year.');
        return false;
    }

    if (document.getElementById(txtPhoneNo).value != '') {
        if (parseInt(document.getElementById(txtPhoneNo).value) != document.getElementById(txtPhoneNo).value - 0) {
            alert('Phone number must be a numeric value.');
            document.getElementById(txtPhoneNo).focus();
            return false;
        }
    }
    return true;
}


function IsFutureDate(input) {
    if (input != '') {
        var theirDate = new Date(input);
        var today = new Date();
        if (theirDate > today) {
            alert('Please enter valid birth date');
            return false;
        }
        return true;
    }
}

function checkdate(input) {
    var validformat = /^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
    var returnval = false;
    if (!validformat.test(input.value)) {
        alert("Invalid Date Format. Please correct and submit again.")
    }
    else { //Detailed check for valid date ranges
        var monthfield = input.value.split("/")[0]
        var dayfield = input.value.split("/")[1]
        var yearfield = input.value.split("/")[2]
        var dayobj = new Date(yearfield, monthfield - 1, dayfield)
        if ((dayobj.getMonth() + 1 != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield)) {
            alert("Invalid Day, Month, or Year range detected. Please correct and submit again.")
        }
        else {
            returnval = true
        }
    }
    return returnval;
}




function ShowOther(ctrlDvother, ctrlTxtOther) {
    var dvother = document.getElementById(ctrlDvother);
    var txtOther = document.getElementById(ctrlTxtOther);

    if (dvother.style.display == "none") {
        dvother.style.display = "block";
        txtOther.focus();
    }
    else {
        dvother.style.display = "none";
    }
}


function OpenFreeReports() {


    Shadowbox.init();

    var divContent = document.getElementById('dvReports').innerHTML;
    Shadowbox.open({
        player: 'html',
        content: divContent,
        height: 480,
        width: 850,
        flashBgColor: '',
        title: ''
    });
}

function LimitTextBoxCharacters() {
    var textbox = document.getElementById('ctl00_contentArea_txtReasonToUnsubscribe');
    if (textbox.value.length > 2000) {
        textbox.value = textbox.value.substring(0, 2000);
        alert('Character limit of 2000 exceeded.');
    }
}

function doClick(buttonName, e)  //the purpose of this function is to allow the enter key to point to the correct button to click.
{
    var key;
    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox
    if (key == 13) {
        var btn = document.getElementById(buttonName);  //Get the button the user wants to have clicked
        if (btn != null)    //If we find the button click it
        {
            btn.click();
        }
    }
}

function toggleDisplay() {
    if (document.getElementById("flagdiv").style.display == "none") {
        document.getElementById("searchdiv").style.display = "none";
        document.getElementById("searchlink").style.display = "";
        document.getElementById("flagdiv").style.display = "";
        document.getElementById("translatelink").style.display = "none";
    }
    else {
        document.getElementById("searchdiv").style.display = "";
        document.getElementById("flagdiv").style.display = "none";
        document.getElementById("searchlink").style.display = "none";
        document.getElementById("translatelink").style.display = "";
    }
}

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt('' + fullVersion, 10);
if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
}

if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);

}

function waitPreloadPage() {
    if (document.getElementById) {
        document.getElementById('prepageFilter').style.display = 'block';
        document.getElementById('prepage').style.display = 'block';
    }
}

//SCRIPT FOR UNSUBSCRIBE PAGE
function setFocus() {
    document.getElementById('ctl00_contentArea_btnUnsubscribe').focus();
}




function isInteger(s) {
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag) {
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary(year) {
    // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}
function DaysArray(n) {
    for (var i = 1; i <= n; i++) {
        this[i] = 31
        if (i == 4 || i == 6 || i == 9 || i == 11) { this[i] = 30 }
        if (i == 2) { this[i] = 29 }
    }
    return this
}


function ValidateDate() {
    var radioResume = document.getElementById('ctl00_contentArea_rbtResume');

    if (radioResume.checked) {
        if (IsValidDate() == false) {
            document.getElementById('ctl00_contentArea_dvMsg1').style.display = "none";
            return false;
        }
    }
}

function showReasonText() {
    var radioUnSubscribe = document.getElementById('ctl00_contentArea_rbtnOptionUnsubscribe');
    var radioChangeEmail = document.getElementById('ctl00_contentArea_rbtOptionChange');
    var radioResume = document.getElementById('ctl00_contentArea_rbtResume');
    var tblReasonTextTable = document.getElementById('ReasonTextTable');
    var hdnIsMember = document.getElementById('ctl00_contentArea_hdnIsMember');
    var divResume = document.getElementById('ctl00_contentArea_divResume');
    var txtDate = document.getElementById('ctl00_contentArea_txtResumeDate');
    var lblResumeError = document.getElementById('lblResumeErrormsg');

    if (radioUnSubscribe.checked) {
        tblReasonTextTable.style.display = "block";
        divResume.style.display = "none";

        for (var j = 0; j < 5; j++) {
            document.getElementById('ctl00_contentArea_rbtReason_' + j).checked = false;
        }
    }
    else if (radioResume.checked) {
        divResume.style.display = "block";
        lblResumeError.style.display = "none";
        txtDate.value = "";
        tblReasonTextTable.style.display = "none";
    }
    else if (radioChangeEmail.checked) {
        divResume.style.display = "none";
        tblReasonTextTable.style.display = "none";
    }
    else {
        tblReasonTextTable.style.display = "none";
        divResume.style.display = "none";
    }
    document.getElementById('ctl00_contentArea_btnUnsubscribe').focus();
}

function showReasonTextHL() {
    var radioUnSubscribe = document.getElementById('ctl00_bcr_rbtnOptionUnsubscribe');
    var radioChangeEmail = document.getElementById('ctl00_bcr_rbtOptionChange');
    var radioResume = document.getElementById('ctl00_bcr_rbtResume');
    var tblReasonTextTable = document.getElementById('ReasonTextTable');
    var hdnIsMember = document.getElementById('ctl00_bcr_hdnIsMember');
    var divResume = document.getElementById('ctl00_bcr_divResume');
    var txtDate = document.getElementById('ctl00_bcr_txtResumeDate');
    var lblResumeError = document.getElementById('lblResumeErrormsg');

    if (radioUnSubscribe.checked) {
        tblReasonTextTable.style.display = "block";
        divResume.style.display = "none";

        for (var j = 0; j < 5; j++) {
            document.getElementById('ctl00_bcr_rbtReason_' + j).checked = false;
        }
    }
    else if (radioResume.checked) {
        divResume.style.display = "block";
        lblResumeError.style.display = "none";
        txtDate.value = "";
        tblReasonTextTable.style.display = "none";
    }
    else if (radioChangeEmail.checked) {
        divResume.style.display = "none";
        tblReasonTextTable.style.display = "none";
    }
    else {
        tblReasonTextTable.style.display = "none";
        divResume.style.display = "none";
    }
    document.getElementById('ctl00_bcr_btnUnsubscribe').focus();
}

function ValidateDateHL() {
    var radioResume = document.getElementById('ctl00_bcr_rbtResume');

    if (radioResume.checked) {
        if (IsValidDateHL() == false) {
            document.getElementById('ctl00_bcr_dvMsg').style.display = "none";
            return false;
        }
    }
}
function showReasonTextHL() {
    var radioUnSubscribe = document.getElementById('ctl00_bcr_rbtnOptionUnsubscribe');
    var radioChangeEmail = document.getElementById('ctl00_bcr_rbtOptionChange');
    var radioResume = document.getElementById('ctl00_bcr_rbtResume');
    var tblReasonTextTable = document.getElementById('ReasonTextTable');
    var hdnIsMember = document.getElementById('ctl00_bcr_hdnIsMember');
    var divResume = document.getElementById('ctl00_bcr_divResume');
    var txtDate = document.getElementById('ctl00_bcr_txtResumeDate');
    var lblResumeError = document.getElementById('lblResumeErrormsg');

    if (radioUnSubscribe.checked) {
        tblReasonTextTable.style.display = "block";
        divResume.style.display = "none";

        for (var j = 0; j < 5; j++) {
            document.getElementById('ctl00_bcr_rbtReason_' + j).checked = false;
        }
    }
    else if (radioResume.checked) {
        divResume.style.display = "block";
        lblResumeError.style.display = "none";
        txtDate.value = "";
        tblReasonTextTable.style.display = "none";
    }
    else if (radioChangeEmail.checked) {
        divResume.style.display = "none";
        tblReasonTextTable.style.display = "none";
    }
    else {
        tblReasonTextTable.style.display = "none";
        divResume.style.display = "none";
    }
    document.getElementById('ctl00_bcr_btnUnsubscribe').focus();
}

function enableSubscription(buttonid, e) {
    var bt = document.getElementById(buttonid);
    if (typeof bt == 'object') {
        bt.disabled = false;
        if (navigator.appName.indexOf("Netscape") > (-1)) {
            if (e.keyCode == 13) {
                bt.click();
                return false;
            }
        }
        if (navigator.appName.indexOf("Microsoft Internet Explorer") > (-1)) {
            if (event.keyCode == 13) {
                bt.click();
                return false;
            }
        }
    }
}

function checkDatecal(sender, args) {
    if (sender._selectedDate != "") {
        document.getElementById('ctl00_contentArea_dvMsg1').style.display = "none";
    }
    document.getElementById('ctl00_contentArea_btnUnsubscribe').focus();
}

function IsValidDate() {
    var dtCh = "/";
    var txtDate = document.getElementById('ctl00_contentArea_txtResumeDate');
    var lblResumeError = document.getElementById('lblResumeErrormsg');
    var resumeDate = new Date(txtDate.value);
    var daysInMonth = DaysArray(12);
    var pos1 = txtDate.value.indexOf(dtCh);
    var pos2 = txtDate.value.indexOf(dtCh, pos1 + 1);
    var strMonth = txtDate.value.substring(0, pos1);
    var strDay = txtDate.value.substring(pos1 + 1, pos2);
    var strYear = txtDate.value.substring(pos2 + 1);
    strYr = strYear;
    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1);
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1);
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1);
    }
    month = parseInt(strMonth);
    day = parseInt(strDay);
    year = parseInt(strYr);

    if (txtDate.value == "") {
        lblResumeError.innerHTML = "Please enter postpone delivery date.";
        lblResumeError.style.display = "block";
        return false;
    }
    if (pos1 == -1 || pos2 == -1) {
        lblResumeError.innerHTML = "The date format should be : mm/dd/yyyy";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (strMonth.length < 1 || month < 1 || month > 12) {
        lblResumeError.innerHTML = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (strYear.length != 4 || year == 0) {
        lblResumeError.innerHTML = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
        lblResumeError.innerHTMLt = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (txtDate.value.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(txtDate.value, dtCh)) == false) {
        lblResumeError.innerHTML = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    var dt = new Date();
    if (resumeDate <= dt) {
        lblResumeError.style.display = "block";
        lblResumeError.innerHTML = "The date should be greater than today's date.";
        return false;
    }
}

function IsValidDateHL() {
    var dtCh = "/";
    var txtDate = document.getElementById('ctl00_bcr_txtResumeDate'); alert(txtDate);
    var lblResumeError = document.getElementById('lblResumeErrormsg');
    var resumeDate = new Date(txtDate.value);
    var daysInMonth = DaysArray(12);
    var pos1 = txtDate.value.indexOf(dtCh);
    var pos2 = txtDate.value.indexOf(dtCh, pos1 + 1);
    var strMonth = txtDate.value.substring(0, pos1);
    var strDay = txtDate.value.substring(pos1 + 1, pos2);
    var strYear = txtDate.value.substring(pos2 + 1);
    strYr = strYear;
    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1);
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1);
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1);
    }
    month = parseInt(strMonth);
    day = parseInt(strDay);
    year = parseInt(strYr);

    if (txtDate.value == "") {
        lblResumeError.innerHTML = "Please enter postpone delivery date.";
        lblResumeError.style.display = "block";
        return false;
    }
    if (pos1 == -1 || pos2 == -1) {
        lblResumeError.innerHTML = "The date format should be : mm/dd/yyyy";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (strMonth.length < 1 || month < 1 || month > 12) {
        lblResumeError.innerHTML = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (strYear.length != 4 || year == 0) {
        lblResumeError.innerHTML = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
        lblResumeError.innerHTMLt = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    else if (txtDate.value.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(txtDate.value, dtCh)) == false) {
        lblResumeError.innerHTML = "Please enter a valid date.";
        lblResumeError.style.display = "block";
        return false;
    }
    var dt = new Date();
    if (resumeDate <= dt) {
        lblResumeError.style.display = "block";
        lblResumeError.innerHTML = "The date should be greater than today's date.";
        return false;
    }
}

//Get the information of the roles
//Used on: post.aspx pages by the JQuery script which displays the BadgeInfo Pop-up
//Added By: Prabodh
//Added on 2nd November 2010
function GetRoleInfo(roleName) {
    switch (roleName) {
        case "novice":
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-novice-user.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 1 Novice</p>"
                    + "<p>Users with a Novice badge have reached Level 1. These users are quickly getting the hang of things and have been recognized for making valuable contributions to help others in the area of health.</p>"
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
            break;
        case "apprentice":
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-apprentice.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 2 Apprentice</p>"
                    + "<p>Users with an Apprentice badge have reached Level 2. These users have consistent forum participation and are providing useful comments that are getting recognized by the community.</p>"
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
            break;
        case "super user":
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-superuser.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 3 SuperUser</p>"
                    + "<p>Users with a SuperUser badge have reached Level 3. These users are in the top thousand posters on the site and are constantly expanding and improving the knowledge of the community in a positive direction.</p>"
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
            break;
        case "savvy":
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-savvy.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 4 Savvy</p>"
                    + "<p>Users with a Savvy badge have reached Level 4. They're lean idea machines! Their extraordinary nose for news leads them to discover, discuss, and share hot-off-the-press Mercola reports. These users are in the top few hundred posters on the site and are valuable and well respected members of the community."
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
            break;
        case "super savvy":
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-super-savvy.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 5 Super Savvy</p>"
                    + "<p>Users with a Super Savvy badge have reached Level 5.  They are the cream of the crop!  Their top notch expertise has enabled them to be both a leader and influencing figure to the community on a consistent basis.  Only a select few have risen to the rank of Super Savvy."
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
            break;
        case "moderator":
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-moderator.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 6 Moderator</p>"
                    + "<p>Users with a moderator badge are members of the Mercola team, and are not attainable by points.  It is their job to assist in answering questions from the community and to ensure the flow of conversation on the board remains on topic."
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
        case "expert":
        case "founder":
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-expert-user.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 7 Expert</p>"
                    + "<p>Users with an Expert badge are world class experts in their field.  Expert badges are not attainable by points, rather they are awarded to the most knowledgeable and highly respected experts in the industry."
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
            break;
        default:
            return " <p style=\"margin:0; padding:0;\"><img src=\"http://media.mercola.com/Themes/mercolaArticle/images/badge-getting-started.png\" /></p> "
                    + "<p class=\"red-bold\">{{User-Name}} is a Level 0 Getting Started</p>"
                    + "<p>Users with a Getting Started badge have reached Level 0. This user is either new to the site or new to participation in Vital Votes but have started the process of contributing to the community!"
                    + "<p><a href=\"http://articles.mercola.com/sites/mercola/badge.aspx\" rel=\"nofollow\" target=\"_blank\">Learn more about Badges</a><br />"
                    + "</p>";
            break;
    }
}

function getEmailAFriendCount() {
    var location = document.location.href;
    if (location.indexOf('?') >= 0) {
        location = location.substring(0, location.indexOf('?'));
    }

    $.ajax({
        url: '//contactimporter.mercola.com/EmailArticleCount.aspx?url=' + location,
        dataType: "jsonp",
        jsonpCallback: "setEmailAFriendCount"
    });
}

function setEmailAFriendCount(json) {
    var emailCount = Number(json.count);
    if (emailCount >= 1000) {
        emailCount = (emailCount / 1000).toPrecision(emailCount.toString().length - 2) + 'k';
    }
    $('.articleCount').text(" : " + emailCount);
    $('.articleCountwithoutcolon').text(emailCount);
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

//For Articles category tab control

function HomePageNewsOn() {
    if (document.getElementById("news").className = "NewsTabOn") {
        document.getElementById("story").className = "NewsTabOff";
        document.getElementById("news").className = "NewsTabOn";
        document.getElementById("StoryCnt").className = "TopVideoDivOff";
        document.getElementById("NewsCnt").className = "TopDivTwoOn";
    }
}


function HomePageTopStoriesOn() {
    if (document.getElementById("story").className = "NewsTabOn") {
        document.getElementById("story").className = "NewsTabOn";
        document.getElementById("news").className = "NewsTabOff";
        document.getElementById("StoryCnt").className = "TopVideoDivOn";
        document.getElementById("NewsCnt").className = "TopDivTwoOff";
    }
}

//Old Code 07.28.2011 - JPP
//function SiteCatalyst(source) {
//    var s = s_gi(getSiteCatalystAcct());
//    s.linkTrackVars = "prop2";
//    s.linkTrackEvents = "None";
//    s.prop2 = source;
//    s.tl(this, 'o', 'subscription signup');
//    alert(s.prop2);
//}

//New Code 07.28.2011 - JPP
function SiteCatalyst(source) {
    var optX = s_gi(getSiteCatalystAcct());
    optX.linkTrackVars = "prop2,prop17,events";
    optX.linkTrackEvents = "event27";
    optX.events = "event27";
    optX.prop2 = source;
    optX.prop17 = s.getPageName();
    optX.tl(this, 'o', 'subscription signup');
}


function SiteCatalystUnSub(Source, UnSubReason) {
    var s = s_gi(getSiteCatalystAcct());
    s.linkTrackVars = "prop3,prop10";
    s.linkTrackEvents = "None";
    s.prop3 = Source;
    s.prop10 = UnSubReason;
    s.tl(this, 'o', Source);
}

function scTrackComment(postID) {

    var s = s_gi(getSiteCatalystAcct());
    s.linkTrackVars = 'prop11,events';
    s.linkTrackEvents = 'event26';
    s.events = 'event26';
    s.prop11 = postID;
    s.tl(this, 'o', 'Comment Tracking');

}

//Search with blank field validation - Start
function TrapEnterKeyForValidSearch(evt, sourceTextBoxName, domainName) {
    var txtValue;
    if (evt && evt.target) {
        if (evt.keyCode == 13) {

            txtValue = document.getElementById(sourceTextBoxName).value;
            txtValue = txtValue.replace(/^\s+/, "");
            if (txtValue != "") {
                RedirectToValidSearch(txtValue, '0', domainName);
            }
            else {
                alert('Please enter search text');
            }
            return false;
        }
    }
    else if (window.event) {
        if (event.keyCode == 13) {
            txtValue = document.getElementById(sourceTextBoxName).value;

            txtValue = txtValue.replace(/^\s+/, "");
            if (txtValue != "") {
                RedirectToValidSearch(txtValue, '0', domainName);
            }
            else {
                alert('Please enter search text');
            }
            return false;
        }
    }
}

function RedirectToValidSearch(sourceName, option, domainName) {
    var searchURL, txtboxValue;

    if (option == '1')//button click
    {
        txtboxValue = document.getElementById(sourceName).value;
    }
    else if (option == '0')//enter key
    {
        txtboxValue = sourceName;
    }
    else {
        if (sourceName == 'qmaster') {
            txtboxValue = document.getElementById(sourceName).value;
        }
        else {
            txtboxValue = sourceName;
        }
    }

    txtboxValue = txtboxValue.replace(/^\s+/, "");
    //alert(txtboxValue);
    if (txtboxValue != "" && txtboxValue != "Search Mercola.com") {
        /*
        if (domainName == 'fitness') {
        searchURL = "http://search.mercola.com/search/pages/Results.aspx?k=" + txtboxValue + "&r=sitename=\"ARoBaHR0cDovL2ZpdG5lc3MubWVyY29sYS5jb20Ic2l0ZW5hbWUBASIBIg==\"";
        }
        else if (domainName == 'HP') {
        searchURL = "http://search.mercola.com/search/pages/Results.aspx?k=" + txtboxValue + "&r=sitename=\"AR4BaHR0cDovL2hlYWx0aHlwZXRzLm1lcmNvbGEuY29tCHNpdGVuYW1lAQEiASI=\"";
        }
        else {
        searchURL = "http://search.mercola.com/search/pages/Results.aspx?k=" + txtboxValue;
        }
        location.href = searchURL;
        */
        //location.href = "https://www.google.com/#q=site:mercola.com+" + txtboxValue;
        //location.href = "https://www.google.com/search?sitesearch=mercola.com&q=" + txtboxValue;
        location.href = "http://search.mercola.com/results.aspx?q=" + txtboxValue;
    }
    else {
        alert('Please enter search text');

    }
    return false;
}

function updatemeta(title, description, keywords, url, ogImage, RssPostUrl, canonicalUrl) {

    document.getElementById('hdninitiaload').value = false;

    var browserTitle = replaceAll('&#39;', "'", title);
    browserTitle = replaceAll("&quot;", '"', browserTitle);
    document.title = browserTitle;

    $('meta[name=description]').remove();
    $('head').append('<meta name="description" content="' + description + '">');
    $('meta[name=keywords]').remove();
    $('head').append('<meta name="keywords" content="' + keywords + '">');
    $('meta[name=rank-words]').remove();
    $('head').append('<meta name="rank-words" content="' + keywords + '">');

    $('meta[property=og\\:title]').remove();
    $('head').append('<meta property="og:title" content="' + title + '">');
    $('meta[property=og\\:url]').remove();
    $('head').append('<meta property="og:url" content="' + url + '">');
    $('meta[property=og\\:description]').remove();
    $('head').append('<meta property="og:description" content="' + description + '">');
    $('meta[property=og\\:image]').remove();
    $('head').append('<meta property="og:image" content="' + ogImage + '">');

    if (url.toString().indexOf("/fitness/") || url.toString().indexOf("/healthypets/") || url.toString().indexOf("/articles/")) {
        $('meta[name=twitter\\:title]').remove();
        $('head').append('<meta name="twitter:title" content="' + title + '">');
        $('meta[name=twitter\\:url]').remove();
        $('head').append('<meta name="twitter:url" content="' + url + '">');
        $('meta[name=twitter\\:description]').remove();
        $('head').append('<meta name="twitter:description" content="' + description + '">');
        $('meta[name=twitter\\:image\\:src]').remove();
        $('head').append('<meta name="twitter:image:src" content="' + ogImage + '">');
    }

    $('link[rel=canonical]').remove();
    $('head').append('<link rel="canonical" href="' + canonicalUrl + '">');
    $("link[title*='Comments for this post (RSS 2.0)']").remove();

    $('head').append('<link type="application/rss+xml" rel="alternate" title="' + title + ' - Comments for this post (RSS 2.0)" href="' + RssPostUrl
+ '">');

}

function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function updateHrefLang(EnglishPostUrl, SpanishPostUrl, hasValue) {
    try {
        $('link[hreflang="x-default"]').remove();
        $('link[hreflang=en]').remove();
        $('link[hreflang=es]').remove();
        if (hasValue == 'true') {
            $('head').append('<link rel="alternate" hreflang="x-default" href="' + EnglishPostUrl + '">');
            $('head').append('<br />');
            $('head').append('<link rel="alternate" hreflang="en" href="' + EnglishPostUrl + '">');
            $('head').append('<br />');
            $('head').append('<link rel="alternate" hreflang="es" href="' + SpanishPostUrl + '">');
        }
    }
    catch (e)
            { console.log(e.message); }
}

       
