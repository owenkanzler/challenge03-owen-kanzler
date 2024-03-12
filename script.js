// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employees = [];

  while (true) {
    // prompt the users for their info
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");
    let salary = prompt("Enter salary:");

    // check to see if they cancel or leave and prompt empty
    if (firstName === null || lastName === null || isNaN(salary)) {
      break;
    }

    // create our employee
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    // add that employee to the array of employees
    employees.push(employee);

    // check to see if they want to keep adding employees
    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      break;
    }
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  // set the initial amount for total salaries
  let salaries = 0;
  // loop through the employees array
  for (let i = 0; i < employeesArray.length; i++) {
    // add all of the employees salaries to the accumulator
    salaries += parseFloat(employeesArray[i].salary);
  }
  // divide the salaries by however many employees are in the array
  average = salaries / employeesArray.length;

  return average;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // finds a random indice in the array
  let randomIndex = Math.floor(Math.random() * employeesArray.length);

  // get the random employee
  let randomEmployeeFirstName = employeesArray[randomIndex].firstName;
  let randomEmployeeLastName = employeesArray[randomIndex].lastName;

  let randomEmployee = randomEmployeeFirstName + " " + randomEmployeeLastName;

  return randomEmployee;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  const averageSalary = displayAverageSalary(employees);
  console.log(
    `The average employee salary out of our ${employees.length} employee(s) is $${averageSalary}`
  );

  console.log("==============================");

  const randomEmployee = getRandomEmployee(employees);
  console.log(
    `Congratulations to ${randomEmployee}, our random drawing winner!`
  );

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
