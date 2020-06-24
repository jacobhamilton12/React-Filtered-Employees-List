import React from "react";

class EmployeesList extends React.Component {
  state = {
    filteredEmployees: this.props.employees.map((e) => e.name),
    employees: this.props.employees.map((e) => e.name),
  };
  handleInput(inString) {
    this.setState({
      filteredEmployees: this.state.employees.filter((e) =>
        e.toLowerCase().includes(inString)
      ),
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          {console.log(this.state.employees)}
          <input
            type="text"
            className="filter-input"
            data-testid="filter-input"
            onChange={(e) => this.handleInput(e.target.value.toLowerCase())}
          />
        </div>
        <ul className="employees-list">
          {this.state.filteredEmployees.map((employee) => (
            <li key={employee} data-testid="employee">
              {employee}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
