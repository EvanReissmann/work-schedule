// Put the date at the top of the page
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
// added tasks
var tasks = {
    "9am": [],
    "10am": [],
    "11am": [],
    "12pm": [],
    "13pm": [],
    "14pm": [],
    "15pm": [],
    "16pm": [],
    "17pm": [],
}
// Created functions for the task
function saveTask9am () {
    var task = $("#9am").val();
    tasks['9am'] = task;
    saveTaskLocalStorage();
}

function saveTaskLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function currentTime() {

function getTaskLocalStorage() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
}
// called the local storage
getTaskLocalStorage();