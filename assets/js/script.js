// WHEN I open the planner THEN the current day is displayed at the top of the calendar
var currentDay = $("#currentDay");
var displayCurrentDay = moment().format("MMMM DD, YYYY");
currentDay.text(displayCurrentDay);

// THEN each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockEl() {
    // take the time from moment
    var timeNow = moment().hours()
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr('id'));
        $(this).find('textarea').val(localStorage.getItem(timeBlock))
        if (timeBlock < timeNow) {
            $(this).addClass('past')
        } else if (timeBlock === timeNow) {
            $(this).addClass('present')
        } else {
            $(this).addClass('future')
        }
    })
}
timeBlockEl()

//WHEN I click into a time block THEN I can enter an event WHEN I click the save button for that time block THEN the text for that event is saved in local storage

$('button').on('click', function() {
    var buttonText = $(this).siblings('.description').val();
    var toDoItem = $(this).parent().attr('id');
    // set to local
    localStorage.setItem(toDoItem, buttonText);
})