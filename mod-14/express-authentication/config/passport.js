import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import User from "../models/User.js";

// Setting up WHAT strategy that Passport is going ot use
passport.use(
  // in this case, we're gonna use Github
  new GitHubStrategy(
    {
      // We need 3 pieces of info
      // the Client ID
      clientID: process.env.GITHUB_CLIENT_ID, // Kinda like a Username for the application
      //   the Client Secret
      clientSecret: process.env.GITHUB_CLIENT_SECRET, // Kinda like the Password, for the application
      //   AND the Github Callback URL
      callbackURL: process.env.GITHUB_CALLBACK_URL, // e.g., 'http://localhost:3001/api/users/auth/github/callback'
    },
    // This is the "verify" callback
    async (accessToken, refreshToken, profile, done) => {
      try {
        // The "profile" object contains the user's GitHub information
        const existingUser = await User.findOne({ githubId: profile.id });

        if (existingUser) {
          // If user already exists, pass them to the next middleware
          return done(null, existingUser);
        }

        // If it's a new user, create a record in our database
        const newUser = new User({
            username: profile.username, // get the username from GitHub
          githubId: profile.id, // And the GitHub ID (which tells the User we don't need a password)
          email: profile._json.email, // Some providers return an array of emails
        });


        await newUser.save();
        done(null, newUser);
      } catch (err) {
        done(err);
      }
    },
  ),
);

// These functions are needed for session management
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});
