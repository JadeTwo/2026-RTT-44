export default function EmployeeListItem({ name, title }) {

    console.log('props: ', name, title);

    return (
        <li className="employee-list-item">
            <div>
                {name}
            </div>
            <div>
                {title}
            </div>
        </li>
    )
}

