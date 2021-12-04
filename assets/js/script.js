// WHEN I open the planner THEN the current day is displayed at the top of the calendar
var currentDay = $("#currentDay");
var displayCurrentDay = moment().format("MMMM DD YYYY");
currentDay.text(displayCurrentDay);

function textAreaColor() {
    $('.time-block').each(function() {
                var currentHour = parseInt($(this).attr('id'));
                console.log(currentHour);

                if (currentHour < timeNow) {
                    $(this).addClass('past')
                } else if (currentHour === timeNow) {
                    $(this).addClass('present')
                } else {
                    $(this).addClass('future')
                }
                textAreaColor();


                // function updateTimeSlotItems() {
                //     // assign classes, WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
                //     // read relevant local storage data
                //     $('.time-block').each(function() {
                //         var hours = moment($(this).text().trim(), 'LT');
                //         var duration = Math.ceil(moment.duration(hours.diff(moment())).asHours());
                //         //  if duration is nega then is past 
                //         if (parseInt(duration) < 0) {
                //             $(this).next().addClass('.past');
                //         }
                //         // if duration is 0 then current
                //         if (parseInt(duration) === 0) {
                //             $(this).next().addClass('.present');
                //         }
                //         // otherwise is future
                //         else {
                //             $(this).next().addClass('.future');
                //         }
                //     });

                //     // get local storage value
                //     $('.description').each(function() {
                //                 var hour = $(thi)

                //                 //     var hour = $(e.target).closest('.time-block').attr('id');
                //                 //     var value = $(e.target).siblings('.description'.val().trim().localStorage.setItem(hour, value)
                //                 //     };

                //                 // })

                //                 // function handleSave(e) {



                //                 // function main() {
                //                 //     $(document).on('click', '.save-btn', handleSave)
                //                 //     $('#currentDay').text(moment().format('dddd, LL'));
                //                 //     updateTimeSlotItems();
                //                 // };

                //                 // // start
                //                 // $(document).ready(main)