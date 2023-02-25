// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// set variables

var currentDateEl = document.getElementById("currentDay");
var now = dayjs();
var currentTime = now.format("HH");


// show current date in header

currentDateEl.innerText = now.format("dddd, MMMM Do");


// create function to determine colour of description spaces

$(".timeContainer").children().each(function () {

  // create variable to get hour from each id
  var timeContainer = $(this).attr("id").split("-")[1];

  if (currentTime === timeContainer) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present");
  } else if (currentTime < timeContainer) {
     $(this).removeClass("present");
      $(this).addClass("future"); 
  } else if (currentTime > timeContainer) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }

});


// add event listener to save buttons to save descriptions to local storage

$(".saveBtn").click(function(event) {
  event.preventDefault();
  var eventDescription = $(this).siblings(".description").val();
  var timeFrame = $(this).parent().attr("id");
  localStorage.setItem(timeFrame, eventDescription);

});


// get descriptions from local storage when page loads.

for (var i = 9; i <= 17; i++) {
  if (i == 9) {
   $("#hour-09").children(".description").val(localStorage.getItem("hour-09")); 
  } else {
  $("#hour-" + i).children(".description").val(localStorage.getItem("hour-" + i));
  }
}


// add event listener to clear local storage

$("#clearAll").click(function(event) {
  event.preventDefault();
  $(".description").val("");
  localStorage.clear();
})


