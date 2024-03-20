document.getElementById("addTaskBtn").addEventListener("click", function() {
    var input = document.getElementById("taskInput").value;
    if (input.trim() !== '') {
        var li = document.createElement("li");
        li.textContent = input;
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = '';
    }


    // Update date and time
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

function updateDateTime() {
    const dateTimeDiv = document.getElementById("datetime");
    const currentDate = new Date();
    dateTimeDiv.textContent = "Current Date and Time: " + currentDate.toLocaleString();
}

function addTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let dateTime = new Date().toLocaleString(); // Get current date and time
    let newTask = {
        task: task,
        dateTime: dateTime
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks);
}