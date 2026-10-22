import EmployeeListItem from "./EmployeeListItem"

export default function EmployeeList() {
    // pass data from a parent component (EmployeeList) to a child component (EmployeeListItem).

    const employees = [
        {
            name: 'James King',
            title: 'President and Ceo'
        },
        {
            name: 'Julie Taylor',
            title: 'VP of Marketing'
        },
        {
            name: 'Eugene Lee',
            title: 'CFO'
        },
        {
            name: 'John Williams',
            title: 'VP of Engineering'
        },
        {
            name: 'Ray Moore',
            title: 'VP of Sales'
        },
        {
            name: 'Paul Jones',
            title: 'QA Manager'
        }
    ]

    // we loop through our array of employee objects
    // and turn each one into a EmployeeListItem component
    // and end up with an array of components
    const components = employees.map((employee) => 
        <EmployeeListItem 
            key={employee.name}
            name={employee.name} 
            title={employee.title} 
        />
    );

    console.log(employees);
    console.log(components);

    return (
        <ul id="employee-list">
            Employee List
            {components}
        </ul>
    )
}

