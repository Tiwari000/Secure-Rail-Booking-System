document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userType = document.getElementById("user-type").value;
    
    // Log form values to console (you can replace this with your actual login logic)
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("User Type:", userType);
    
    // You can add your login logic here, like sending data to server for authentication
    // Example:
    // fetch('login.php', {
    //   method: 'POST',
    //   body: JSON.stringify({ username: username, password: password, userType: userType }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle response from server
    // })
    // .catch(error => console.error('Error:', error));
  });

// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
