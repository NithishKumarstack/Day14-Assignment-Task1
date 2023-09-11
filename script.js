// Get references to the form, table, and food checkboxes
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const foodCheckboxes = document.querySelectorAll('.food-checkbox');

    // Add an event listener to the form for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Count how many food options are selected
        const checkedFoodCheckboxes = [...foodCheckboxes].filter(checkbox => checkbox.checked);

        if (checkedFoodCheckboxes.length < 2) {
            alert('Please choose at least two food options.');
        } else if (checkedFoodCheckboxes.length > 2) {
            alert('You can choose a maximum of two food options.');
        } else {
            // Get other form values
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const address = document.getElementById('add').value;
            const pincode = document.getElementsByName('pin')[0].value;
            const gender = document.getElementById('gender').value;
            const state = document.getElementById('state').value;
            const country = document.getElementById('country').value;

            // Create a new row for the table
            const newRow = dataTable.insertRow(dataTable.rows.length);

            // Create cells and append form values to the new row
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);
            const cell7 = newRow.insertCell(6);
            const cell8 = newRow.insertCell(7);

            cell1.innerHTML = firstName;
            cell2.innerHTML = lastName;
            cell3.innerHTML = address;
            cell4.innerHTML = pincode;
            cell5.innerHTML = gender;
            cell6.innerHTML = checkedFoodCheckboxes.map(checkbox => checkbox.value).join(', ');
            cell7.innerHTML = state;
            cell8.innerHTML = country;

            // Clear form fields
            form.reset();
        }
    });
});
