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
    
    $('#deleteEmpoyee').on('click', function () {

    })
    
})



function submitEmployeeInfo() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let iDNumber = $('#iDNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    
    $('.employeeListForm').append('<li>Full Name: ' + firstName + ' ' + lastName + '</li>');
    $('.employeeListForm').append('<li>ID Number: ' + iDNumber + '</li>');
    $('.employeeListForm').append('<li>Title: ' + jobTitle + '</li>');
    $('.employeeListForm').append('<li>Salary: ' + annualSalary + '</li>');
    $('.employeeListForm').append('<br>');
    

}


function calculateCosts() {
    
    let monthlySalary = $('#annualSalary').val() / 12;
    $('.monthlyCosts').html('<h2>Monthly Costs: $' + monthlySalary + '</h2>')

    if (monthlySalary > 20000) {
        $('.monthlyCosts').css('color', 'red');
        
    }

    
}
