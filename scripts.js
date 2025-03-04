document.getElementById('add-photo-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const files = event.target.files;
    const albumContainer = document.querySelector('.album-container');

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            albumContainer.appendChild(img);
        };
        reader.readAsDataURL(files[i]);
    }

    // Clear the input value to allow selecting the same images again
    event.target.value = '';
});
