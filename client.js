$(document).ready(function () {
    $('#submitButton').on('click', submitEmployeeInfo);
    
    $('#submitButton').on('click', calculateCosts);
    

    $('.employeeListForm').on('click', '.delete', function() {
        console.log(this);
        
    });
    
    
})




//collects an employee's information from the input fields and appends it to the DOM
function submitEmployeeInfo() {
    //assigning input values to variables
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let iDNumber = $('#iDNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    //appends the input fields to the DOM using variables above
    $('.employeeListForm').append(`<div id="full-name">Full Name: ${firstName} ${lastName}</div><br>`);
    $('.employeeListForm').append(`<div id="id-number">ID Number: ${iDNumber}</div><br>`);
    $('.employeeListForm').append(`<div id="job-title">Job Title ${jobTitle}</div><br>`);
    $('.employeeListForm').append(`<div id="salary">Salary: ${annualSalary}</div><br>`);
    $('.employeeListForm').append(`<button class="delete">
                                       Delete
                                   </button><br>`);
    //clears the input fields after submit button clicked
    $('#firstName').val(``);
    $('#lastName').val(``);
    $('#iDNumber').val(``);
    $('#jobTitle').val(``);
    $('#annualSalary').val(``);
     

}



//calculates the monthly cost of employee slaries
function calculateCosts() {
    
    let monthlySalary = ($('#annualSalary').val() / 12).toFixed(2);
    $('.monthlyCosts').html('<h2>Monthly Costs: $' + monthlySalary + '</h2>')

    if (monthlySalary > 20000) {
        $('.monthlyCosts').css('color', 'red');
        
    } 
}