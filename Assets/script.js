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


// get descriptions from local storage when page loads

$("#hour-09").children(".description").val(localStorage.getItem("hour-09"));
$("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
$("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
$("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
$("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
$("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
$("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
$("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
$("#hour-17").children(".description").val(localStorage.getItem("hour-17"));



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
