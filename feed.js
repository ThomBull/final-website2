<!-- JavaScript to handle popup -->
    function checkEnter(event) {
        if (event.key === 'Enter') {
            // Show the thank you popup when Enter is pressed
            document.getElementById('popup').style.display = 'flex';
        }
    }

    function closePopup() {
        // Hide the popup when the close button is clicked
        document.getElementById('popup').style.display = 'none';
    }