Task: Create a custom Hook named useWindowSize that tracks the current width and height of the browser window.

Requirements:

- The Hook should return an object like { width: number, height: number }.
- It should use useState to store the width and height.
- It should use useEffect to add an event listener for the resize event on the window object when the Hook is first used (component mounts).
- The event listener should update the width and height state.
- The useEffect should clean up the event listener when the component using the Hook unmounts.
- Provide an example component that uses useWindowSize to display the current window dimensions.