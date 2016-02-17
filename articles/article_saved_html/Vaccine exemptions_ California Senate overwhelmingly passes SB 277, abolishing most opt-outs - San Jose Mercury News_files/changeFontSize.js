
function changeFontSize(newSize) {
  var elementsToChange = new Array(6);
  elementsToChange[0] = document.getElementById("articleTitle");
  elementsToChange[1] = document.getElementById("articleBody");
  elementsToChange[2] = document.getElementById("articleByline");
  elementsToChange[3] = document.getElementById("articleDate");
  elementsToChange[4] = document.getElementById("articleOverline");
  elementsToChange[5] = document.getElementById("articleSubTitle");
  if (newSize == "large") {
    elementsToChange[0].style.fontSize = "26px";
    elementsToChange[1].style.fontSize = "15px";
    elementsToChange[2].style.fontSize = "14px";
    elementsToChange[3].style.fontSize = "13px";
    if (elementsToChange[4]) {
      elementsToChange[4].style.fontSize = "14px";
    }
    if (elementsToChange[5]) {
      elementsToChange[5].style.fontSize = "15px";
    }
  } else if (newSize == "largest") {
    elementsToChange[0].style.fontSize = "30px";
    elementsToChange[1].style.fontSize = "19px";
    elementsToChange[2].style.fontSize = "18px";
    elementsToChange[3].style.fontSize = "17px";
    if (elementsToChange[4]) {
      elementsToChange[4].style.fontSize = "18px";
    }
    if (elementsToChange[5]) {
      elementsToChange[5].style.fontSize = "19px";
    }
  } else if (newSize == "normal") {
    for (x=0; x<elementsToChange.length; x++) {
      if (elementsToChange[x]) {
        elementsToChange[x].style.fontSize = "";
      }
    }
  }
}