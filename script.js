// START document ready event - only performs javascript after page renders
$(document).ready(function() {

  // listen for save button clicks
  $(".saveBtn").on("click", function() {

    // get value of current .description textarea
    var value = $(this).siblings(".description").val();
    // get value of id attribute of parent row e.g. 9AM 
    var time = $(this).parent().attr("id");

    // save textarea and time in localStorage
    localStorage.setItem(time, value);

  });

  // hourUpdater function
  function hourUpdater() {
    
    // get current number of hours e.g. 9 for 9AM
    var currentHour = moment().hours();
    console.log(currentHour);
    // loop over time blocks rows
    $(".time-block").each(function() {

      // strip -AM or -PM from the value of the current row's id attribute and store in var e.g. 9-AM --> 9
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);
      // check if hour of row is less than current hour
      if (blockHour < currentHour) {
        // add the past class to current row, which styles it pastel red
        $(this).addClass("past");
      } 
      // check if hour of row is equal current hour
      else if (blockHour === currentHour) {
        //remove past class from current row
        $(this).removeClass("past");
        //add present class to current row, which styles it green
        $(this).addClass("present");
      } 
      // otherwise, row hour is greater than current hour
      else {
        //remove past class from current row
        $(this).removeClass("past");
        //remove present class from current row
        $(this).removeClass("present");
        //add future class to current row, which styles it blue
        $(this).addClass("future");
      }
    });
  }

  // call hourUpdater function on page load
  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load textarea user input from local storage for hour-9
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  // load textarea user input from local storage for hour-10
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  // load textarea user input from local storage for hour-11
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  // load textarea user input from local storage for hour-12
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  // load textarea user input from local storage for hour-13
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  // load textarea user input from local storage for hour-14
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  // load textarea user input from local storage for hour-15
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  // load textarea user input from local storage for hour-16
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  // load textarea user input from local storage for hour-17
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

});
// END document ready event
