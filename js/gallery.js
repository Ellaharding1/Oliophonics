function switchGallery() {
    const selector = document.getElementById('gallerySelector');
    const photosGallery = document.getElementById('photos-gallery');
    const videosGallery = document.getElementById('videos-gallery');

    if (selector.value === 'photos') {
        // Hide videos and show photos instantly
        videosGallery.style.display = 'none';
        photosGallery.style.display = 'flex';
    } else if (selector.value === 'videos') {
        // Hide photos and show videos instantly
        photosGallery.style.display = 'none';
        videosGallery.style.display = 'flex';
    }
}
