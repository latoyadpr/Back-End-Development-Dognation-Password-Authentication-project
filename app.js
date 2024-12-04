// Import packages
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");

// App config
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
// Import Passport config
require("./config/passport");

// Session Config

// Passport Config

// Routes
app.use(require("./routes/index.routes"));

app.get("/", (req, res) => {
  const user = null || "Guest";
  res.render("home", { user });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

app.use(
// Your session object here
);

passport.use(
  // Your local strategy here
);


passport.use(
  new LocalStrategy(function (username, password, done) {
    // Call to the helper function here
 })
);


passport.use(
  new LocalStrategy(function (username, password, done) {
    helper.findByUsername(username, function (err, user) {
      if (err) {
        return done(err);
      }
      // Other conditions will go here
    });
  })
);


passport.use(
  new LocalStrategy(function (username, password, done) {
    helper.findByUsername(username, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      // Other conditions will go here
    });
  })
);


passport.use(
  new LocalStrategy(function (username, password, done) {
    helper.findByUsername(username, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      // Successful authentication logic will go here
    });
  })
);


passport.use(
  new LocalStrategy(function (username, password, done) {
    helper.findByUsername(username, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user); // Successful authentication
    });
  })
);


passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  // Logic to find the user by id will go here
});


passport.deserializeUser(function(id, done) {
  helper.findById(id, function(err, user) {
    // Handle error and user retrieval here
  });
});


passport.deserializeUser(function(id, done) {
  helper.findById(id, function(err, user) {
    if (err) {
      return done(err);
    }
    // Handle successful user retrieval here
  });
});


passport.deserializeUser(function(id, done) {
  helper.findById(id, function(err, user) {
    if (err) {
      return done(err);
    }
    return done(null, user); // Successful user retrieval
  });
});

app.use(passport.initialize());


app.use(passport.session());


const bcrypt = require('bcrypt');

async function generateSalt() {
  const saltRounds = 10; // You can choose the number of rounds
  const salt = await bcrypt.genSalt(saltRounds);
  return salt;
}


const bcrypt = require('bcrypt');

async function registerUser(plaintextPassword) {
  const salt = await bcrypt.genSalt(10); // Generate a salt
  const hashedPassword = await bcrypt.hash(plaintextPassword, salt); // Hash the password

  const newUser = {
    // Other user properties
    password: hashedPassword // Use the hashed password
  };

  // Save newUser to the database
}


{ password: hashedPassword }


async function (param1, param2) { }


bcrypt.compare(plaintextPassword, user.password)


passport.use(
  new LocalStrategy(async function (username, password, done) {
    helper.findByUsername(username, async function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      const matchedPassword = await bcrypt.compare(password, user.password);
      if (!matchedPassword) {
        return done(null, false); // Passwords don't match
      }
      return done(null, user); // Successful authentication
    });
  })
);


app.post('/login', passport.authenticate('local', {
  failureRedirect: '/login', // Redirect if authentication fails
  successRedirect: '/' // Redirect if authentication succeeds
}));


app.post('/logout', (req, res) => {
  req.logout(); // Terminate the user session
  res.redirect('/'); // Redirect to the homepage or another page
});

req.user
