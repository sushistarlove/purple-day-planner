var now = moment();
$("#currentDay").text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//When I click save, I capture the value of the input field
//When I click save, (See dom traversal)

var userInput = document.getElementById("text");

function saveTask() {
    var userTask = {
      userInput
    };
    localStorage.setItem("userTask", JSON.stringify(userTask));
  }

  saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    });