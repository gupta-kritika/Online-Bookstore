const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
// Mock user database
// const users = [
//     { username: 'username', password: 'password' }
// ];

// Middleware
const bodyParser = require('body-parser'); // Middleware

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Route to Login Page
app.route('/home_login')
 	.get(function (req, res) {
		res.render(__dirname + '/home_login.html');
	});

      app.use(express.static('public'));

      // Middleware to set MIME type for CSS files
      app.use((req, res, next) => {
          if (req.url.endsWith('.css')) {
              res.type('text/css');
          }
          next();
      });
// Route for handling login form submission
// app.post('/login', (req, res) => {
//     // const { username, password } = req.body;
//     // const user = users.find(u => u.user === username && u.pass === password);
//     // if (user) {
//         res.redirect('/home_login');
//     // } else {
//     //     res.send('Incorrect username or password');
//     // }
// });

// // Route for dashboard
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname + '/home_login.html'));
//     res.send('Welcome to the dashboard!');
// });

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});