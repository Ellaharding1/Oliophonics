

function switchGallery() {
    const selector = document.getElementById('gallerySelector');
    const photosGallery = document.getElementById('photos-gallery');
    const videosGallery = document.getElementById('videos-gallery');

    if (selector.value === 'photos') {
        // Fade out videos
        videosGallery.classList.remove('fade-in');
        videosGallery.classList.add('fade-out');

        // After fade-out, hide videos and fade in photos
        setTimeout(() => {
            videosGallery.style.display = 'none';  // Hide videos
            photosGallery.style.display = 'flex';  // Show photos
            photosGallery.classList.remove('fade-out');
            photosGallery.classList.add('fade-in');  // Fade in photos
        }, 500); // Wait for the fade-out to complete
    } else if (selector.value === 'videos') {
        // Fade out photos
        photosGallery.classList.remove('fade-in');
        photosGallery.classList.add('fade-out');

        // After fade-out, hide photos and fade in videos
        setTimeout(() => {
            photosGallery.style.display = 'none';  // Hide photos
            videosGallery.style.display = 'flex';  // Show videos
            videosGallery.classList.remove('fade-out');
            videosGallery.classList.add('fade-in');  // Fade in videos
        }, 500); // Wait for the fade-out to complete
    }
}

