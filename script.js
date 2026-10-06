function submitForm(event) {

    // Stop the form from refreshing the page
    event.preventDefault();


    // Get values from the input boxes
    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;


    // Check whether all fields are filled
    if (name == "" || email == "" || message == "") {

        document.getElementById("form-message").innerText =
            "Please fill all the fields.";

        return;
    }


    // Display success message
    document.getElementById("form-message").innerText =
        "Thank you " + name + "! Your message has been submitted.";


    // Clear the form
    document.querySelector("form").reset();

}