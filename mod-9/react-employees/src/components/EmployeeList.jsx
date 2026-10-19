import EmployeeListItem from "./EmployeeListItem"

export default function EmployeeList() {
    // pass data from a parent component (EmployeeList) to a child component (EmployeeListItem).
    return (
        <ul id="employee-list">
            Employee List
            <EmployeeListItem name="James King" title="President and Ceo" />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </ul>
    )
}

