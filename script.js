 // JavaScript to toggle dropdown menu on click
 const dropdownButton = document.getElementById('dropdownButton');
 const dropdownMenu = document.getElementById('dropdownMenu');
 const displayName = document.getElementById('displayName');
 const displayEmail = document.getElementById('displayEmail');
 const profileInitials = document.getElementById('profileInitials');
 const closeButton = document.getElementById('closeButton');
 const countryCodeSelect = document.getElementById('country-code');
    const selectedFlag = document.getElementById('selected-flag');

    countryCodeSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const flagUrl = selectedOption.dataset.flag;

        // Update the displayed flag icon
        selectedFlag.src = flagUrl;
        selectedFlag.alt = `${selectedOption.value} Flag`;
    });
// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
 // Utility to get initials from a name
 function getInitials(name) {
     return name.split(' ')
                .map(part => part[0].toUpperCase())
                .join('');
 }

 dropdownButton.addEventListener('click', () => {
     // Toggle the visibility of the dropdown menu
     const isMenuVisible = dropdownMenu.style.display === 'block';
     dropdownMenu.style.display = isMenuVisible ? 'none' : 'block';
 });

 // Close dropdown menu when clicking outside
 document.addEventListener('click', (event) => {
     if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
         dropdownMenu.style.display = 'none';
     }
 });

 // Update the displayed name, email, and initials when selecting an item
 dropdownMenu.addEventListener('click', (event) => {
     const target = event.target.closest('a');
     if (target) {
         const name = target.getAttribute('data-name');
         const email = target.getAttribute('data-email');
         displayName.textContent = name;
         displayEmail.textContent = email;
         profileInitials.textContent = getInitials(name);
         dropdownMenu.style.display = 'none'; // Close the dropdown
     }
 });
 closeButton.addEventListener('click', () => {
    // Show a confirmation dialog
    const userConfirmed = confirm("Are you sure you want to close this window?");

    // If the user confirms, provide instructions or an alternative
    if (userConfirmed) {
        alert("Please close the window manually if it doesn't close automatically.");
        window.close(); // This will work if the window was programmatically opened
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const skipButton = document.querySelector(".skip-button");
    skipButton.addEventListener("click", function () {
        window.location.href = "skip.html";
    });
});