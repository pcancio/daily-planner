function updateTimeSlotItems() {
    // assign classes, WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
    // read relevant local storage data
}

function handleSave(e) {
    var hour = $(e.target).closest('.time-block').attr('id')
    var value = $(e.target).siblings('.description'.val().trim() localStorage.setItem(hour, value)
    }

    function main() {
        updateTimeSlotItems();

        $(document).on('click', '.save-btn', handleSave)
    }