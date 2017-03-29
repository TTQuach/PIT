//Exit Popup
/*window.onbeforeunload = function (evt) {
    var message = 'Are you sure you want to leave?';
    if (typeof evt == 'undefined') {
        evt = window.event;
    }
    if (evt) {
        evt.returnValue = message;
    }

    return message;
}*/

//Conversational DIVs
function showIt() {
    document.getElementById("intro1").style.visibility = "visible";
}
setTimeout("showIt()", 1000); // after 1 sec

function showIt2() {
    document.getElementById("intro2").style.visibility = "visible";
}
setTimeout("showIt2()", 2000); // after 5 secs

function showIt3() {
    document.getElementById("intro3").style.visibility = "visible";
}
setTimeout("showIt3()", 3000); // after 5 secs 

function showDiv(classificationIndus) {
    document.getElementById(classificationIndus).style.display = "block";
}

$(function () {
    $('#showCatText').click(function () {
        $('#questionCat').show();
        $('#classificationCat').show();
    })
});

function showForm(formQuest) {
    document.getElementById(formQuest).style.display = "block";
}
 
