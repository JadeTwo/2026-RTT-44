import { useNavigate } from "react-router-dom";

export default function ContactPage() {

    // "navigate" is a function that will allow us to change the path
    // kind of like the "to" prop in the Link component
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        alert('Thank you for your feedback!')
        // save the feedback in someway
        navigate('/');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="feedback"></label>
                <textarea id="feedback"></textarea>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}