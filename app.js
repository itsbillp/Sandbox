var config = {
    apiKey: "AIzaSyAHj7oHqJiJZyeOmasCasxwP2SZC3LooCE",
    authDomain: "employees-d86c7.firebaseapp.com",
    databaseURL: "https://employees-d86c7.firebaseio.com",
    projectId: "employees-d86c7",
    storageBucket: "",
    messagingSenderId: "745509257410"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  


$(document).ready( function() {
    $("#submitButton").on("click", function () {
        event.preventDefault();
        var name = $("#employeeName").val().trim();
        var role = $("#role").val().trim();
        var startDate = $("#startDate").val().trim();
        var monthlyRate = $("#monthlyRate").val().trim();
        createRow(name, role, startDate, monthlyRate);
    })
});

function createRow(name, role, startDate, monthlyRate) {
    console.log(name + role + startDate + monthlyRate );
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
    
    // var numMonthsWorked = 
    // var totalBilledAmount = numMonthsWorked * monthlyRate;

    row.append(employeeName, employeeRole, employeeStartDate, $("<td>"), employeeMonthlyRate, $("<td>"));
    $("#tableBody").append(row);

    database.ref().push({
        name: name,
        role: role,
        start_date: startDate,
        monthly_rate: monthlyRate
    })

    firebase.database
}
