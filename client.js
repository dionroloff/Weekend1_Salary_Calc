$(document).ready(function () {
    $('#submitButton').on('click', submitEmployeeInfo);
    
    // $('#submitButton').on('click', calculateCosts);
    

    $('#employee-list').on('click', '.delete', function() {
        console.log(this);
        let deletedEmployeeSalary = $(this).parent().prev().prev().text();   
        $(this).parent().parent().remove(); //removes the tr
    });
    
    
})




//collects an employee's information from the input fields and appends it to the DOM
function submitEmployeeInfo() {

    let monthlySalary = ($('#annualSalary').val() / 12).toFixed(2);
    $('.monthlyCosts').html(`<h2>Monthly Costs: ${monthlySalary}</h2>`);

    if (monthlySalary > 20000) {
        $('.monthlyCosts').css('color', 'red');
        
    } 

    //assigning input values to variables
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let iDNumber = $('#iDNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    //appends the input fields to the DOM using variables above
    let append = $(`<tr>
                <td id="first-name">${firstName}</td>
                <td id="last-name">${lastName}<td>
                <td id="id-number">${iDNumber}</td>
                <td id="salary">${annualSalary}</td>
                <td id="job-title">${jobTitle}</td>
                
                <td><button class="delete">Delete</button></td>
                </tr>`)
    $('#employee-list').append(append);
    
    //clears the input fields after submit button clicked
    $('#firstName').val(``);
    $('#lastName').val(``);
    $('#iDNumber').val(``);
    $('#jobTitle').val(``);
    $('#annualSalary').val(``);
     

}



//calculates the monthly cost of employee slaries
// function calculateCosts() {
    
//     let monthlySalary = ($('#annualSalary').val() / 12).toFixed(2);
//     $('.monthlyCosts').html('<h2>Monthly Costs: $' + monthlySalary + '</h2>')

//     if (monthlySalary > 20000) {
//         $('.monthlyCosts').css('color', 'red');
        
//     } 
// }