$(document).ready(function() {
  // Function to diplay the current date in the header section
  function displayCurrentDate() {
    // Variable to reference current day DOM element
    var currentDay = $("#currentDay");
    // Variable to get current date through the moment API
    var diplayCurrentDay = moment().format("MMMM Do YYYY");
    currentDay.text(diplayCurrentDay);
  }

  // Function to change the color of the textarea based on the current time
  function changeColor() {
    // Variable to get the current hour through the moment API
    var currentHour = moment().get("hour");
    // Loop to put time-block elements into an array so that the index can be referenced
    $(".time-block").each(function(i) {
      // Make sure that the textarea doesn't have a past, present or future class
      $(this)
        .children(".description")
        .removeClass("past present future");
      // Statement to add past class to textarea when the current hour is greater than the index (added 9 to current index to make it equal to the current time)
      if (i + 9 < currentHour) {
        $(this)
          .children(".description")
          .addClass("past");
        // Statement to add present class to textarea when the current hour is the same as the index (added 9 to current index to make it equal to the current time)
      } else if (i + 9 === currentHour) {
        $(this)
          .children(".description")
          .addClass("present");
        // Statement to add future class to textarea when the previous conditions aren't met
      } else {
        $(this)
          .children(".description")
          .addClass("future");
      }
    });
  }

  $(".saveBtn").on("click", function(e) {
    e.preventDefault();
    var index = $(".saveBtn").index(this);
    var todo = $(".description");
    console.log(index);
    todo[index] = $(this)
      .prev(".description")
      .val();
    localStorage.setItem("todos", JSON.stringify(todo));
    console.log(todo);
  });

  // Call the changeColor function when page is loaded/refreshed
  changeColor();
  // Call the displayCurrentDate function when page is loaded/refreshed
  displayCurrentDate();
});
