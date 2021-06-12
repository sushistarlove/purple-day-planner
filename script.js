$(document).ready(function(){

var now = moment();
$("#currentDay").text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//When I click save, I capture the value of the input field
//When I click save, (See dom traversal)

// var userInput = $(".description")
 // localStorage.setItem("userTask", JSON.stringify(userTask));
  

  var saveBtn = $(".saveBtn")

  saveBtn.click( function() {
    var userInput = $(this).parent().siblings(".tasks").children(".description").val()
    var dayTime = $(this).parent().siblings(".col-sm-2").attr("id")
    console.log(userInput)
    console.log(dayTime)
 

    localStorage.setItem(dayTime, userInput)

    });
$("#08").siblings(".tasks").children(".description").val(localStorage.getItem("08"))
$("#09").siblings(".tasks").children(".description").val(localStorage.getItem("09"))
$("#10").siblings(".tasks").children(".description").val(localStorage.getItem("10"))
$("#11").siblings(".tasks").children(".description").val(localStorage.getItem("11"))
$("#12").siblings(".tasks").children(".description").val(localStorage.getItem("12"))
$("#1").siblings(".tasks").children(".description").val(localStorage.getItem("1"))
$("#2").siblings(".tasks").children(".description").val(localStorage.getItem("2"))
$("#3").siblings(".tasks").children(".description").val(localStorage.getItem("3"))
$("#4").siblings(".tasks").children(".description").val(localStorage.getItem("4"))
$("#5").siblings(".tasks").children(".description").val(localStorage.getItem("5"))
  })

  //Function that takes in time at moment and will compare it to listed time apply past present and future to the textbox area 

