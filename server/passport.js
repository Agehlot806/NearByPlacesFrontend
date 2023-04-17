const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID:'557036571637-kndro1cgvfgunkag2vqpdmp296inson9.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);
passport.use(
	new FacebookStrategy(
	  {
		clientID: '610783947337862',
		clientSecret: '6041bb6cad2e8f9aaa7c84fe1880f4ca',
		callbackURL: "/auth/facebook/callback",
		scope: ["public_profile", "user_gender"],
	  },
	  function (accessToken, refreshToken, profile, done) {
		done(null, profile);
	  }
	)
  );

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
