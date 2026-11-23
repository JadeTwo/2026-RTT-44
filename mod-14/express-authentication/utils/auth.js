import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export function authMiddleware(req, res, next) {

    let token = req.headers.authorization;

    if (token) {
        // Split the token string on the space between Bearer and the actual token
        token = token.split(" ");
        // return JSUT the last value in that split array (the token)
        token = token.pop();
        // and remove any additional whitespace from the token
        token = token.trim();

        // This can also be done in one line:
        // token = token.split(" ").pop().trim()
    }
    
    if (!token) {
        // ending the request-response cycle 
        return res.status(401).json({ message: "No token found!" });
    }

    try {
        // The decoded object will contain the original payload ({ data: { _id, ... } })
        // jwt.verify is what we use to CHECK the Signed token
        const { data } = jwt.verify(token, secret, { maxAge: "2h" });

        req.user = data; // Attach user data to the request object
        
        // move on to the next middleware or route
        next()
    } catch {
        // end the request-response cycle
        return res.status(401).json({ message: "Invalid token!" });
    }
}