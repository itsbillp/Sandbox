 
$(document).ready( function() {
    $("#submitButton").on("click", function () {
        event.preventDefault();
        var name = $("#name").val().trim()
        var role = $("#role").val().trim()
        var startDate = $("#startDate").val().trim()
        var monthlyRate = $("#monthlyRate").val().trim()
        createRow(name, role, startDate, monthlyRate);
    })
});

function createRow(name, role, startDate, monthlyRate) {
    var row = $("<tr>", {
        class: "user"
    })

    var employeeName = $("<td>", {
        class: "employee-detail",
        text: name
    })

    var employeeRole = $("<td>", {
        class: "employee-detail",
        text: role
    })

    var employeeStartDate = $("<td>", {
        class: "employee-detail",
        text: startDate
    })

    var employeeMonthlyRate = $("<td>", {
        class: "employee-detail",
        text: monthlyRate
    })

    row.append(employeeName, employeeRole, employeeStartDate, $("<td>"), employeeMonthlyRate, $("<td>"));
    $("#tableBody").append(row);
}







// firebase.initializeApp(config);

// Create a variable to reference the database.
// var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var startDate = 0;
var monthlyRate = "";

// Capture Button Click
$("#submitButton").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text-boxes
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    monthlyRate = $("#montly-rate").val().trim();

    // Code for "Setting values in the database"
    // database.ref().push({
    //     name: name,
    //     role: role,
    //     startDate: startDate,
    //     monthlyRate: monthlyRate
    // });
})






