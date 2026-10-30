import { useEffect, useState } from "react"

export default function useWindowSize() {

    // you can use other hooks inside of it (including built-in hooks)
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    function handleResize(e) {
        // store the window dimensions in our state
        setSize({ 
            width: e.target.innerWidth, 
            height: e.target.innerHeight 
        })
    }

    useEffect(() => {
        // when the window resizes run the handleResize function
        window.addEventListener('resize', handleResize)

        // clean up function 
        return () => {
            // remove the event listener if the component is no longer in use
            window.removeEventListener('resize', handleResize);
        }   
    }, []);

    // share this state variable with any component that uses this hook
    return size;
}