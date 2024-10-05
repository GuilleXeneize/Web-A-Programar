document.addEventListener('DOMContentLoaded', function() {
    // Recupera el estado de los checkboxes al cargar la página
    document.querySelectorAll('input[type="checkbox"][data-video-id]').forEach(function(checkbox) {
        var videoId = checkbox.getAttribute('data-video-id');
        var isChecked = localStorage.getItem(videoId) === 'true';
        checkbox.checked = isChecked;
    });

    // Agrega event listeners a los checkboxes
    document.querySelectorAll('input[type="checkbox"][data-video-id]').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var videoId = this.getAttribute('data-video-id');
            localStorage.setItem(videoId, this.checked);
        });
    });
});