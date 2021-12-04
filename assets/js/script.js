function updateTimeSlotItems() {
    // assign classes, WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
    // read relevant local storage data
    $('.hour').each(function() {
        var hours = moment($(this).text().trim(), 'LT');
        var duration = Math.ceil(moment.duration(hours.diff(moment())).asHours());
        //  if duration is nega then is past 
        if (parseInt(duration) < 0) {
            $(this).next().addClass('past');
        }
        // if duration is 0 then current
        if (parseInt(duration) === 0) {
            $(this).next().addClass('present');
        }
        // otherwise is future
        else {
            $(this).next().addClass('future');
        }
    });

    function update

    function handleSave(e) {
        var hour = $(e.target).closest('.time-block').attr('id')
        var value = $(e.target).siblings('.description'.val().trim() localStorage.setItem(hour, value)
        }

        function main() {
            updateTimeSlotItems();

            $(document).on('click', '.save-btn', handleSave)

        }

        // start
        $(main);