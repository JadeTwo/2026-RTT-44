import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"
import { useEffect, useState } from "react"

export default function HomePage() {

    const [employees, setEmployees] = useState([]);

    async function getEmployeeData() {
        try {
            // request employee data
            const response = await fetch('https://dummyjson.com/users?limit=10')
            // extract data and format it to json
            const { users } = await response.json();
            // transform our user objects into simple employee objects
            const employeeData = users.map(user => ({
                id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                title: user.company.title,
                image: null
            }))
            // save that data in our state 
            setEmployees(employeeData);

        } catch (err) {
            console.log(err);
        }
    }

    console.log(employees);

    useEffect(() => {
        // call our getEmployeeData function when component mounts
        getEmployeeData()
    }, []);

    return (
        <section id="homepage">
            <Header />
            <SearchBar />
            {/* send that employee data from our state to our child
             component EmployeeList as a prop so that it can render the list */}
            <EmployeeList employees={employees} />
        </section>
    )
}