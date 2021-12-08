// added tasks
var tasks = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
}
// Created functions for the task
function saveTask (taskId) {
    tasks[taskId] = $(`#${taskId}`).val();
    console.log(tasks);
   
    saveTaskLocalStorage();
}

function saveTaskLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// set up the black out times using the date and time
function currentTime() {
    var currentTime = new Date().getHours();
    $(".form-control").each(function() {
        var taskTime=$(this).attr('id');
        if ( currentTime > taskTime) {
            $(this).addClass("past");
        }
        else if ( currentTime < taskTime) {
            $(this).addclass("future");
        }
         else {
            $(this).addClass("current");
         }
      });
}

function getTaskLocalStorage() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    for (const task in tasks) {
      $(`#${task}`).val(tasks[task]);
    }
}
// setup the date
$(document).ready(function() {
  $("#currentDay").html(new Date());
  getTaskLocalStorage();
  currentTime();
});