import { useParams } from "react-router-dom"

export default function ProfilePage() {

    // access the user id to get specific data for that user
    const { id } = useParams();
    
    console.log(id);

    return (
        <div>
            <h1>ProfilePage</h1>
            <div>Details for User #{id}:</div>
        </div>
    )
}