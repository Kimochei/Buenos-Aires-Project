document.addEventListener('DOMContentLoaded', function() {
    const venues = ['Venue A', 'Venue B', 'Venue C', 'Venue D']; // Example venues
    const select = document.getElementById('venue-select');
    const button = document.getElementById('choose-button');

    // Load venues into the select element
    venues.forEach(venue => {
        const option = document.createElement('option');
        option.value = venue;
        option.textContent = venue;
        select.appendChild(option);
    });

    // Handle button click
    button.addEventListener('click', function() {
        const chosenVenue = select.value;
        alert('You have chosen: ' + chosenVenue);
    });
});