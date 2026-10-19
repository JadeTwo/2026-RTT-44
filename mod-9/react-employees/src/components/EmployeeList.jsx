import EmployeeListItem from "./EmployeeListItem"

export default function EmployeeList() {
    return (
        <ul id="employee-list">
            Employee List
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </ul>
    )
}