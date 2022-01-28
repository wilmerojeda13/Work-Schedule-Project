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
    }

    

})