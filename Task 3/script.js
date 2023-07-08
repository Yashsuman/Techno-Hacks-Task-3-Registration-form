document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorElement = document.getElementById("error");
  
    if (password !== confirmPassword) {
      errorElement.innerText = "Passwords do not match";
      return;
    }
  
    // TODO: Perform registration logic here
    // You can send the form data to a server using AJAX or fetch API
  
    // Reset form
    document.getElementById("registrationForm").reset();
    errorElement.innerText = "";
  });
  