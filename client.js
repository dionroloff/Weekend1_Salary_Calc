$(document).ready(function () {
    $('#submitButton').on('click', submitEmployeeInfo);
    $('#submitButton').on('click', calculateCosts);
    $('#submitButton').on('click', function() {
        $('#firstName').val(``);
        $('#lastName').val(``);
        $('#iDNumber').val(``);
        $('#jobTitle').val(``);
        $('#annualSalary').val(``);
    });

    $('.employeeListForm').on('click', '.delete', function() {
        console.log(this);
        $(this).siblings().remove();
    });
    
    
})




//collects an employee's information from the input fields and appends it to the DOM
function submitEmployeeInfo() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let iDNumber = $('#iDNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    
    $('.employeeListForm').append('<li id="full-name">Full Name: ' + firstName + ' ' + lastName + '</li>');
    $('.employeeListForm').append('<li id="id-number">ID Number: ' + iDNumber + '</li>');
    $('.employeeListForm').append('<li id="job-title">Title: ' + jobTitle + '</li>');
    $('.employeeListForm').append('<li id="annual-salary">Salary: ' + annualSalary + '</li>');
    $('.employeeListForm').append(`<button class="delete">
                                       Delete
                                   </button>`);
    $('.employeeListForm').append('<br>');



    

}

//calculates the monthly cost of employee slaries
function calculateCosts() {
    
    let monthlySalary = ($('#annualSalary').val() / 12).toFixed(2);
    
    $('.monthlyCosts').html('<h2>Monthly Costs: $' + monthlySalary + '</h2>')

    if (monthlySalary > 20000) {
        $('.monthlyCosts').css('color', 'red');
        
    }

    
}