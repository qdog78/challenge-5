// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {});


function updateTime() {
 
  var date = new Date();


  date.setUTCHours(date.getUTCHours() - 0);


  var dateString = date.toLocaleDateString();
  var timeString = date.toLocaleTimeString();

  var dateTimeString = dateString + " " + timeString;

  document.getElementById("datetime").innerHTML = dateTimeString;
  
}

updateTime();

setInterval(updateTime, 1000);




  var entryBox = document.getElementsByClassName("row");
  var saveButton = document.getElementById("savebtn");
  
  // trying to add button function
  saveButton.addEventListener("click", function() {
    //  trying to select text from input field
    var entryText = entryBox.value;
  
    // trying to save the  text in local storage
    localStorage.setItem("entry", entryText);
  });
  
  // trying to save the element
  var savedEntry = localStorage.getItem("entry");
  if (savedEntry) {
    entryBox.value = savedEntry;
  }

  getElem