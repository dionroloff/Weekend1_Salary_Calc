$(document).ready(readyNow);

function readyNow() {
    $('#submit').on('click', addEmployee);
    $('#employee-list').on('click', '.delete', deleteEmployee);
    $('#monthly-total').on('click', resolveConflict);
}


let totalMonthlySalary = 0;
const MAX_MONTHLY_SALARY = 20000;
const RED = 'rgb(255, 0, 0)';

class Employee {
    constructor(first, last, employeeId, title, salary) {
        this.first = first;
        this.last = last;
        this.employeeId = employeeId;
        this.title = title;
        this.salary = salary;
    }
 
    toHTML() {
        return `<tr>
                    <td>${this.first}</td>
                    <td>${this.last}</td>
                    <td>${this.employeeId}</td>
                    <td>${this.salary}</td>
                    <td>${this.title}</td>
                    <td>
                        <button class="delete">
                            Delete
                        </button>
                    </td>
                </tr>`
    } 
} 


function deleteEmployee() {
    
    let deletedEmployeeSalary = $(this).parent().prev().prev().text();   

    totalMonthlySalary -= (parseInt(deletedEmployeeSalary) / 12).toFixed(2);
    $(this).parent().parent().remove(); //removes the tr
    $('#monthly-total').html(totalMonthlySalary);

    if (totalMonthlySalary > MAX_MONTHLY_SALARY) {
        $('#monthly-total').css('color', 'red');
    } else {
        $('#monthly-total').css('color', 'black');
    }

} 

function addEmployee() {

    
    let salary = $('#salary').val(); 
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeId = $('#employee-id').val();
    let title = $('#title').val();
    const employeeToAdd = new Employee(firstName, lastName, employeeId, title, salary);
    $('#employee-list').append(employeeToAdd.toHTML());

    
    let monthlySalary = parseInt(salary) / 12;
    totalMonthlySalary += monthlySalary;
   
    $('#monthly-total').html(totalMonthlySalary);

    if (totalMonthlySalary > MAX_MONTHLY_SALARY) {
        $('#monthly-total').css('color', 'red');
    } else {
        $('#monthly-total').css('color', 'black');
    }

} 


function calculateCosts() {
    
    let monthlySalary = ($('#annualSalary').val() / 12).toFixed(2);
    
    $('.monthlyCosts').html('<h2>Monthly Costs: $' + monthlySalary + '</h2>')

    if (monthlySalary > 20000) {
        $('.monthlyCosts').css('color', 'red');
        
    }

    
}

