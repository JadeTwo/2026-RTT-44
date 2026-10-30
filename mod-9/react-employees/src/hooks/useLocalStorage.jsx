import { useEffect, useState } from "react"

export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(null);

    // create our own setter function
    function setStoredValue(newValue) {
        // update the state 
        setValue(newValue);
        // turning the object/array into a string
        const stringifiedItem = JSON.stringify(newValue);
        // save the item in local storage
        localStorage.setItem(key, stringifiedItem);
    }

    useEffect(() => {
        // retrieve a value from local storage (using key)
        const item = localStorage.getItem(key);

        // check if the value exists
        if (item) {
            // turn the item from a string into an object/array
            const parsedItem = JSON.parse(item);
            setValue(parsedItem);
        } else { // otherwise the item is null (doesn't exist)
            setValue(initialValue)
        }
    }, []);

    // share the value from our state with any component that uses this hook
    return [value, setStoredValue]
}