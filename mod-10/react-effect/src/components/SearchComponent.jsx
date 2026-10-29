import { useEffect, useState } from "react"

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Dragonfruit" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
  { id: 8, name: "Kiwi" },
  { id: 9, name: "Mango" },
  { id: 10, name: "Orange" },
  { id: 11, name: "Papaya" },
  { id: 12, name: "Raspberry" },
  { id: 13, name: "Strawberry" },
  { id: 14, name: "Tangerine" },
  { id: 15, name: "Watermelon" }
];


export default function SearchComponent() {

    const [input, setInput] = useState('')
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        // set a new timeout and store its id
        const id = setTimeout(() => {
            // only set the query after the delay (the query filters the list)
            setQuery(input);
            // after the query is set we clear loading
            setIsLoading(false)
        }, 1500);

        // clear the old timeout if the input changes (with a cleanup function)
        return () => {
            clearTimeout(id);
            // it's only loading if the user has typed
            setIsLoading(true)
        }

    }, [input])

    // only show us the list if a query was made and it's not loading
    const filteredFruits = query && !isLoading ? fruits.filter((fruit) => fruit.name.includes(query)) : []

    return (
        <div>
            <p>Search with Debounce</p>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {isLoading && <p>Loading...</p>}
            <ul>
            {filteredFruits.map(fruit => 
                <li key={fruit.id}>{fruit.name}</li>
            )}
            </ul>
        </div>
    )
}