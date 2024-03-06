export function confirm() {
  $(document).ready(function () {
    $("#booking-form").submit(function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Get form inputs
      var name = $("#name").val().trim();
      var age = $("#age").val().trim();
      var phone = $("#phone").val().trim();
      var email = $("#email").val().trim();
      var idProof = $("#id-proof").val();

      // Simple validation
      if (
        name === "" ||
        age === "" ||
        phone === "" ||
        email === "" ||
        idProof === "--SELECT--"
      ) {
        alert("Please fill in all fields");
        return;
      }

      // Additional validation logic can be added here

      // If all validation passes, proceed with form submission
      submitForm(name, age, phone, email, idProof);
    });
  });

  function submitForm(name, age, phone, email, idProof) {
    // Here you can send the form data to the server using AJAX or perform any other action
    // For demonstration purposes, we'll just log the data to the console
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("ID Proof:", idProof);

    // You can also redirect the user to another page after form submission
    // window.location.href = 'confirmation.html';
  }
}
