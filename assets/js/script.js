//Display today's day and also date 
var todayDate = moment().format('dddd MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    //saveBtn click listener
    $(".saveBtn").on("click", function() {
        //Get values of the description for Jquery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        //Save Text to Local Storage
        localStorage.setItem(time, text);
    })

    function timeTracker(){
     //get current number of hours.
     var timeNow = moment().hour();   

     //Create a for loop for time blocks
     var blockTime = parseInt($(this).attr("id").split("hour")[1]);

     //Check the  time and add classes for background indicators
     if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    }


}

})