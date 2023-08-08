const form = document.getElementById("registration-form");
const table = document.getElementById("registration-table").getElementsByTagName('tbody')[0];

// Load existing entries from localStorage
const entries = JSON.parse(localStorage.getItem("entries")) || [];

// Function to render entries in the table
function renderTable() {
  table.innerHTML = "";
  entries.forEach((entry) => {
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const emailCell = row.insertCell(1);
    const passwordCell = row.insertCell(2);
    const dobCell = row.insertCell(3);
    const termsCell = row.insertCell(4);

    nameCell.innerHTML = entry.name;
    emailCell.innerHTML = entry.email;
    passwordCell.innerHTML = entry.password;
    dobCell.innerHTML = entry.dob;
    termsCell.innerHTML = entry.terms ? "Yes" : "No";
  });
}

// Event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page from reloading
  validateForm();
});

// Function to validate and add entry to table
function validateForm() {
  // Validation logic (same as before)

  // Create an entry object and add to entries array
  const entry = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    terms: terms,
  };
  entries.push(entry);

  // Store updated entries in localStorage
  localStorage.setItem("entries", JSON.stringify(entries));

  // Render the table with updated entries
  renderTable();

  // Clear the form
  form.reset();
}

// Initial rendering of table
renderTable();
