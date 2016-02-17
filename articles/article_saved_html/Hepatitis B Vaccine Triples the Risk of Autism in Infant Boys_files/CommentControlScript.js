/* Start Comment Control Script */

function VerifySpamOptions(rdReasonID, isWarn) {
    var flag = false;
    var rdReason = document.getElementById(rdReasonID);
    var rdButtons = rdReason.getElementsByTagName("input");
    for (var i = 0; i < rdButtons.length; i++) {
        if (rdButtons[i].checked) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        if (isWarn) {
            alert('Please select one warning reason');
        }
        else {
            alert('Please select one banning reason');
        }
    }
    return flag;
}

function setVisibleforSpamManagement(obj, obj1, obj2, obj3, obj4, obj5) {

    if ($("[aria-describedby='layer1']").length != 0)
   {       
        $("[aria-describedby='layer1']").remove();         
   }

    $("#layer1").dialog({
        modal: true,
        width: 'auto', //changed to auto for responsive sizing
        height: 'auto', //changed to auto for responsive sizing
        draggable: false,
        resizable: false,
        autoResize: true, //changed to auto for responsive sizing
        fluid: true //add for responsive

    })
	.dialogExtend()
	.parent().appendTo($("form:first"));

    $("#layer1").position({
        my: "center",
        at: "center",
        of: window
    });
    $("#layer1").show();
    /*
     obj = document.getElementById(obj);
    obj.style.display = "block";*/
    document.getElementById(obj1).style.display = "block";
    document.getElementById(obj2).style.display = "none";
    document.getElementById(obj3).style.display = "none";
    document.getElementById(obj4).style.display = "none";
    document.getElementById(obj5).style.display = "none";
}

function OpenLogin(showAllComments, focusFragment, isReply) {
   
    var div = document.getElementById('LoginDivShadowBox')
    var aTag = div.getElementsByTagName('a');
    var divContent = div.innerHTML;
    for (var i = 0; i < aTag.length; i++) {
        var s = new String(aTag[i].id);
        if (s.indexOf('_loginLinkbtn') != -1 || s.indexOf('_loginRegister') != -1) {
            if (isReply == true) {
                document.getElementById(aTag[i].getAttribute('id')).href = aTag[i].href.split(encodeURIComponent('#commentfocus'))[0].split(encodeURIComponent('?ShowAllComments=True&FocusOn='))[0].split(encodeURIComponent('?SetFocus='))[0] + encodeURIComponent('?SetFocus=' + focusFragment);
            }
            else if (showAllComments == true) {
                document.getElementById(aTag[i].getAttribute('id')).href = aTag[i].href.split(encodeURIComponent('#commentfocus'))[0].split(encodeURIComponent('?ShowAllComments=True&FocusOn='))[0].split(encodeURIComponent('?SetFocus='))[0] + encodeURIComponent('?ShowAllComments=True&FocusOn=' + focusFragment);
            }
        }
    }
    
    if ($("[aria-describedby='LoginDivShadowBox']").length != 0)
   {       
        $("[aria-describedby='LoginDivShadowBox']").remove();         
   }
    
    $("#LoginDivShadowBox").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        autoResize: false
    });
}


function OpenLoginSignIn() 
{
    var div = document.getElementById('LoginDivShadowBox')
    var aTag = div.getElementsByTagName('a');
    var divContent = div.innerHTML;
    for (var i = 0; i < aTag.length; i++) {
        var s = new String(aTag[i].id);
        if (s.indexOf('_loginLinkbtn') != -1 || s.indexOf('_loginRegister') != -1) {
            document.getElementById(s).href = aTag[i].href.split(encodeURIComponent('#commentfocus'))[0].split(encodeURIComponent('?ShowAllComments=True&FocusOn='))[0].split(encodeURIComponent('?SetFocus='))[0] + encodeURIComponent('#commentfocus');

        }
    }
    
    if ($("[aria-describedby='LoginDivShadowBox']").length != 0)
   {       
        $("[aria-describedby='LoginDivShadowBox']").remove();         
   }
    
    $("#LoginDivShadowBox").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        autoResize: false
    });
}

function Show_SubCommentDiv(currentDivId, hiddenSelectedPostId) {
    //document.getElementById('LoginDivTop').style.display = 'none';
    if (lastDivId != "") {
        var LastDiv;
        LastDiv = document.getElementById('PostDiv' + lastDivId);
        if (LastDiv != null) {
            LastDiv.innerHTML = "";
            LastDiv.style.display = 'none';
        }
    }
    lastDivId = currentDivId;
    var CurrentDiv;
    CurrentDiv = document.getElementById('PostDiv' + currentDivId);
    CurrentDiv.style.display = 'block';
    CurrentDiv.innerHTML = document.getElementById('divPostSubcomment').innerHTML;

    if (commonDiv == 1) {
        //var logindiv = document.getElementById('LoginDiv');
        //logindiv.style.display = "none";
        commonDiv = 0;
    }

    var selectedPostId = document.getElementById(hiddenSelectedPostId);
    selectedPostId.value = currentDivId;

    var countingMessage1 = document.getElementById('countingMessagePostSubComment');
    countingMessage1.innerHTML = countingMessage1.innerHTML + 2000;
    IpadFixHeader();
}

function Show_EditCommentDiv(currentDivId, lblComment, txtEditComment, hiddenSelectedPostId) {
    //document.getElementById('LoginDivTop').style.display = 'none';            

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
    CurrentDiv.innerHTML = document.getElementById('divEditcomment').innerHTML;

    if (commonDiv == 1) {
        //var logindiv = document.getElementById('LoginDiv');
        //logindiv.style.display = "none";
        commonDiv = 0;
    }

    var selectedPostId = document.getElementById(hiddenSelectedPostId);
    selectedPostId.value = currentDivId;

    var labelComment = document.getElementById(lblComment);
    var textComment = document.getElementById(txtEditComment);
    var result;
    if (navigator.appName == "Netscape") {
        result = labelComment.textContent;
    }
    else {
        result = labelComment.innerText;
    }
    //var text = $("#" + lblComment).text();
    var href = [];
    var title = [];
    $("#" + lblComment + " a").each(function() {
        href.push($(this).attr('href'));
        title.push($(this).text());
    });
    $.each(href, function(i, value) {
        result = result.replace(title[i], value);
    });
    $("#" + txtEditComment).val(result);



    var countingMessage2 = document.getElementById('countingMessageEditComment');
    countingMessage2.innerHTML = 'Characters Remaining : ' + (2000 - textComment.value.length);
}

function ShowSpammingDiv(currentDivId, userID, hiddenControlUserID, hiddenSelectPostID,hdnScrollValue) {
    //document.getElementById('PostDiv0').style.display = 'none';
    if (lastDivId != "") {
        var LastDiv;
        LastDiv = document.getElementById('PostDiv' + lastDivId);
        if (LastDiv != null) {
            LastDiv.innerHTML = "";
            LastDiv.style.display = 'none';
        }
    }
    lastDivId = currentDivId;
    var CurrentDiv;
    var postid;
    CurrentDiv = document.getElementById('PostDiv' + currentDivId);
    CurrentDiv.style.display = 'block';
    CurrentDiv.innerHTML = document.getElementById('divSpam').innerHTML;
    var hdnControl = document.getElementById(hiddenControlUserID);
    if (hdnControl != null) {
        hdnControl.value = userID;
    }
    var hdnPostID = document.getElementById(hiddenSelectPostID);
    if (hdnPostID != null) {
        hdnPostID.value = currentDivId;
    }
    
    var elementClicked = "#" + hiddenSelectPostID;
    var destination = $(elementClicked).position().top;
    var scrollVal = document.getElementById(hdnScrollValue);
    if (scrollVal != null) 
    {
        scrollVal.value = destination;
    }
}

function ConfirmPromote() {
    return confirm('Are you sure you want to promote this subcomment to comment?');
}

function ShowSendMessageForDoctor(username) {
    var txt = document.getElementById('divFriendMsg');

    document.getElementById('divFriendMsg').innerHTML = "<b>" + username + " is currently accepting messages from friends in his social network. If you are his friend, please login with the account that is in his social network first, then retry your message. <br />Thank you.";

    var divContentMsg = document.getElementById("SendmsgDiv").innerHTML;

//    Shadowbox.open({
//        player: 'html',
//        content: divContentMsg,
//        height: 158,
//        width: 600,
//        flashBgColor: '',
//        title: ''
//    });

if ($("[aria-describedby='SendmsgDiv']").length != 0)
   {       
        $("[aria-describedby='SendmsgDiv']").remove();         
   }

    $("#SendmsgDiv").dialog({
        modal: true,
        height: 158,
        width: 600,
        draggable: false,
        resizable: false,
        autoResize: false
    });
}

function openSpamWindow() {

    if (confirm('Are you sure you want to Mark this post as spam?')) {

        return true;
    }
    else {

        var LastDiv = document.getElementById('divSpam');
        LastDiv.style.display = 'none';
        return false;
    }

}

function openDeleteWindow() {

    if (confirm('Are you sure you want to Delete this post ?')) {

        return true;
    }
    else {

        var LastDiv = document.getElementById('divSpam');
        LastDiv.style.display = 'none';
        return false;
    }

}
function openDeleteThreadWindow() {

    if (confirm('Are you sure you want to Delete Thread of this post ?')) {

        return true;
    }
    else {

        var LastDiv = document.getElementById('divSpam');
        LastDiv.style.display = 'none';
        return false;
    }

}

/* Start Comment Control End */
