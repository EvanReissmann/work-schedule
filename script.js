// Put the date at the top of the page
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
// added tasks
var tasks = {
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
}
// Created functions for the task
function saveTask9 () {
    var task = $("#9").val();
    tasks[9] = task;
    saveTaskLocalStorage();
}

function saveTaskLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function currentTime() {
    var currentTime = new Date().getHours();
    $(".form-control").each(function() {
        var taskTime=$(this).attr('id');
        if ( currentTime > taskTime) {
            $(this).addClass("blacked-out");
        }
      });
    
}

function getTaskLocalStorage() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    $(".form-control").each(function() {
        var taskTime=$(this).attr('id');
        $("#"+taskTime).val(tasks[taskTime]);

      });
}
// called the local storage
getTaskLocalStorage();
currentTime();