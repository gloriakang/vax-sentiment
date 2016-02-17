// Email to a Friend Counter for Articles

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
var spanID1;
function setEmailAFriendCountPerUrl(json) {

    var emailCount = Number(json.count);
    if (emailCount >= 1000) {
        emailCount = (emailCount / 1000).toPrecision(emailCount.toString().length - 2) + 'k';
    }
    //console.log(spanID1);

    $("#"+ spanID1).text(emailCount)
}

function getEmailAFriendCountPerURL(URL,spanID) {    
    var location = URL;
    if (location.indexOf('?') >= 0) {
	    location = location.substring(0, location.indexOf('?'));
	}
	//console.log(spanID);
	spanID1 = spanID;
    $.ajax({
        url: '//contactimporter.mercola.com/EmailArticleCount.aspx?url=' + location,
        type: 'GET',
        dataType: "jsonp",
        cache:false,
        jsonp: 'callback',
        success: function(data) {
               
            var emailCount = Number(data.count);
            if (emailCount >= 1000) {
                emailCount = (emailCount / 1000).toPrecision(emailCount.toString().length - 2) + 'k';
            }
           // console.log(spanID1);
            $("#"+ spanID).text(emailCount)
        }
    });
}