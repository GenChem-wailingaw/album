document.addEventListener('DOMContentLoaded', () => {
    const popupContainer = document.getElementById('popupContainer');
    const closePopup = document.getElementById('closePopup');

    // Check if elements exist before proceeding
    if (!popupContainer || !closePopup) {
        console.error('Popup elements not found!');
        return;
    }

    // Show the popup after 2 seconds
    setTimeout(() => {
        popupContainer.style.display = 'block';
    }, 2000);

    // Close the popup when the user clicks on the close button
    closePopup.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    // Close the popup when the user clicks anywhere outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});\
