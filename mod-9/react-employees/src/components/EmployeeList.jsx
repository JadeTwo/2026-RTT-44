import EmployeeListItem from "./EmployeeListItem"

export default function EmployeeList({ employees }) {
    // pass data from a parent component (EmployeeList) to a child component (EmployeeListItem).
    
    // we loop through our array of employee objects
    // and turn each one into a EmployeeListItem component
    // and end up with an array of components
    const components = employees.map((employee) => 
        <EmployeeListItem 
            key={employee.id}
            name={employee.name} 
            title={employee.title} 
            image={employee.image}
        />
    );

    return (
        <ul id="employee-list">
            Employee List
            {components}
        </ul>
    )
}

