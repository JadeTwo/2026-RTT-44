import EmployeeListItem from "./EmployeeListItem"

export default function EmployeeList() {
    // pass data from a parent component (EmployeeList) to a child component (EmployeeListItem).
    
    const employee1 = {
        name: 'James King',
        title: 'President and Ceo'
    }
    
    return (
        <ul id="employee-list">
            Employee List
            <EmployeeListItem 
                name={employee1.name} 
                title={employee1.title}
            />
            <EmployeeListItem 
                name="Julie Taylor"
                title="VP of Marketing"
            />
            <EmployeeListItem 
                name="Eugene Lee"
                title="CFO"
            />
            <EmployeeListItem 
                name="John Williams"
                title="VP of Engineering"
            />
            <EmployeeListItem 
                name="Ray Moore"
                title="VP of Sales"
            />
            <EmployeeListItem 
                name="Paul Jones"
                title="QA Manager"
            />
        </ul>
    )
}

