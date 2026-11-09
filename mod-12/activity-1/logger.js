// In logger.js, create a function called logMessage that takes a message string as an argument and 
// prints it to the console with a timestamp (e.g., [2023-10-27T10:00:00.000Z] Your message here). 
// Export this function.
export function logMessage(message) {
    let timestamp = new Date().toISOString()
    console.log(`${timestamp} ${message}`);
}