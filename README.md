# React-Filtered-Employees-List
## HackerRank Challenge
In this task, the goal is to build a very simple list of employees, showing their names only, that can be filtered using a text input.

 

User Interface Elements

 

The project is initially filled with boilerplate code with the following elements in the interface. Their properties and behavior must be defined as given. Each of these elements must have the given data-testid property, which will be used while testing the solution.

 

Filter Input
  - data-testid: filter-input
  - initial value: "", i.e. empty string

 

Each employee must be rendered as an element with data-testid = 'employee' and have its text content equal to the employee name.

 

Expected Behavior

 

The component EmployeesList receives a prop employees, which is an array of employees objects, each containing a single property name denoting the name of that employee.

 

When the Filter Input has an empty string as its value, then all employees must be rendered in the order they are given.

 

Otherwise, let query be the value of the Filter Input, transformed to lowercase. Then, only employees whose lowercased names contain query as their substring must be rendered, preserving the order in which they are given in the array of all employees. Notice that matching employees' names to a query is case insensitive here.
Software Instructions

We recommend installing Node 8 LTS or above.

    Download & Install Node.JS

Project Instructions

Use the following commands to work with this project

run

npm start

test

npm test

install

npm install
