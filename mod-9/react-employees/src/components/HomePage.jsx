import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"

export default function HomePage() {
    return (
        <section id="homepage">
            HomePage
            <Header />
            <SearchBar />
            <EmployeeList />
        </section>
    )
}