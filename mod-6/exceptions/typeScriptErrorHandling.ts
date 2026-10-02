// type alias ApiResponse is renaming the union type (which is one of two objects)
type ApiResponse = { success: true; data: string } | { success: false; error: string };

// Discriminating Union: both types share a property and the type of that property is a literal
// - we can use this property to determine which type of response it is

function fetchData(): ApiResponse {
    // Simulated API response 
    return { success: false, error: "Server not reachable" }; // this is the second object mentioned in the union (failed response)
}

// Customer Type Guard (using a function) and Type Predicate
// "the response is of this type if the function returns true"
function isError(response: ApiResponse): response is { success: false; error: string } {
    // if it's successful then there is no error
    return !response.success; 
}

const response = fetchData();

if (isError(response)) {
    console.error("API Error:", response.error);
} else {
    console.log("API Data:", response.data);
}