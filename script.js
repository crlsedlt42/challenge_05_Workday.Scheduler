var currentDay = dayjs().format('dddd, MMMM D, YYYY');
var currentTime = dayjs().format('h:mm A');
$("#currentDay").html(currentDay);
$("#currentTime").html(currentTime);

$(function () {

  $(".saveBtn").on("click", function () {
    var notes = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, notes);

    localStorage.getItem(time, notes);
  });

  function hourUpdater() {

    var currentHour = dayjs();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }

      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }

      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }

    });
  };

  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var notes = localStorage.getItem(id);

    if (notes !== null) {
      $(this).children(".description").val(notes);
    }

  });

  hourUpdater();

});


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.