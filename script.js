function getFormvalue() {
    //Write your code here
	event.preventDefault();

    // Get the form element
    const form = document.getElementById('form1');

    // Get the values of the input fields
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the full name using an alert
    alert(`${firstName} ${lastName}`);

}
