// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {});
// create a new Date object

function updateTime() {
  // create a new Date object
  var date = new Date();


  date.setUTCHours(date.getUTCHours() - 0);

  // format the date and time as strings
  var dateString = date.toLocaleDateString();
  var timeString = date.toLocaleTimeString();

  // concatenate the date and time strings
  var dateTimeString = dateString + " " + timeString;

  // insert the date and time into an HTML element with the id "datetime"
  document.getElementById("datetime").innerHTML = dateTimeString;
  
}

// call updateTime() initially to display the current date and time
updateTime();

// call updateTime() every second to update the date and time
setInterval(updateTime, 1000);


