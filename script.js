$(document).ready(function(){

const momentDateTime = moment().format('LLLL');
$("#currentDay").text(momentDateTime)

console.log(momentDateTime.toString())

const currentTime = moment().hours();

function updateColors(){
$(".timeBlocks").each(function(){
        var currentTimeBlock = parseInt($(this).children(".timeBlockTextArea").attr("id"))
        if (currentTimeBlock === currentTime){
            $(this).children(".timeBlockTextArea").addClass("present")
        }

        console.log(currentTimeBlock)

        if (currentTimeBlock > currentTime){
            $(this).children(".timeBlockTextArea").addClass("past")
        }

        if (currentTimeBlock < currentTime){
            $(this).children(".timeBlockTextArea").addClass("future")
        }

        // current < currentTime
})

}
updateColors()
})