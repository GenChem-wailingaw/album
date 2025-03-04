document.addEventListener('DOMContentLoaded', function() {
    var popupContainer = document.getElementById('popupContainer');
    var closePopup = document.getElementById('closePopup');

    // Show the popup after 2 seconds
    setTimeout(function() {
        popupContainer.style.display = 'block';
    }, 2000);

    // Close the popup when the user clicks on the close button
    closePopup.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });

    // Close the popup when the user clicks anywhere outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target == popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});
