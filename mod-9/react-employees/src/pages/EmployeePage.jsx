import { useEffect } from "react";
import Header from "../components/Header";

import { useParams } from 'react-router-dom';
import { useState } from "react";

export default function EmployeePage() {

    const [employee, setEmployee] = useState({});

    // identify which employee details we need
    const { id } = useParams();

    async function getUserData() {
        try {
            const response = await fetch('https://dummyjson.com/users/' + id);
            const user = await response.json();

            // turn this data from a user into an employee
            // checking how many digits the user id has
            while (String(user.id).length < 3) {
                // changing the user id from a number into a string (ex: 1 -> "001")
                user.id = "0" + user.id
            }

            const employeeData = {
                id: user.id,
                phone: user.phone,
                email: user.email,
                name: `${user.firstName} ${user.lastName}`,
                title: user.company.title,
                image: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${user.id}.png`
            }

            // update our state so we can access our employee data in our component 
            setEmployee(employeeData)

        } catch (err) {
            console.log(err);
        }
    }

    console.log(employee)

    // request data for user with a matching id
    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            <Header title="Employee" link={'/'} />
            <div className="profile">
                <img src={employee.image} alt={employee.name} />
                <div>
                    <div>
                        {employee.name}
                    </div>
                    <div>
                        {employee.title}
                    </div>
                </div>
            </div>

            {/* phone number */}
            <div className="detail">
                <div>Phone Number</div>
                <div>{employee.phone}</div>
            </div>

            {/* email  */}
            <div className="detail">
                <div>Email</div>
                <div>{employee.email}</div>
            </div>
        </div>
    )
}