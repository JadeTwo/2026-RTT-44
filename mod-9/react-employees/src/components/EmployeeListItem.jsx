export default function EmployeeListItem({ name, title, image }) {

    return (
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
    )
}

