import { Link } from 'react-router-dom'

export default function EmployeeListItem({ name, title, image, id }) {

    return (
        <Link to={"/employee/" + Number(id)}>
            <li className="employee-list-item">
                <img src={image} alt={name} />
                <div>
                    <div>
                        {name}
                    </div>
                    <div>
                        {title}
                    </div>
                </div>
            </li>
        </Link>
    )
}

