export default function EmployeeListItem(props) {

    console.log('props: ', props);

    return (
        <li className="employee-list-item">
            <div>
                {props.name}
            </div>
            <div>
                {props.title}
            </div>
        </li>
    )
}

