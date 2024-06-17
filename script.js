// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = []; //creates an empty array for employee data to be stored in
  let addEmployee = true;

  while (addEmployee) { //while statement that prompts user for employee data when button is pressed as long as addEmployee = true
    const firstName = prompt("Enter first name")
    const lastName = prompt("Enter last name")
    let salary = prompt("Enter salary") 
    if (isNaN(salary)){
      alert('Not a Number!') //checks if salary entered is a number, if not it alerts you that it is not a number, otherwise it continues the function
      continue;
    }
  employees.push({
    firstName: firstName,
    lastName: lastName,
    salary: parseFloat(salary) //turns the string recieved from the prompt into a number before storing it in the employeeArray
  });
  const continueInput = prompt("Do you want to add another employee? Type Yes to continue or No to finish");
    if (continueInput.toLowerCase() !== 'yes') {
    addEmployee = false; //prompts you if you want to add another employee after you have entered all of an employees data, if you type no it ends the while loop, if you type yes it restarts the loop
  }
}
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  employeesArray.forEach(function(employee) { //creates a for each loop for every employee in the array that uses the function to find the average salary
    totalSalary += employee.salary;
  });
  const averageSalary = totalSalary / employeesArray.length; //finds the average salary by dividing the total of the salarys by the number of employees
  console.log(`Average Salary: $${averageSalary}`); //console.logs the average
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName} $${randomEmployee.salary}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
