'use strict'

let image = document.getElementById('img');
let file = document.getElementById('flImage');

image.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', function(e) {
    showThumbnail(this.files); 
});

function showThumbnail(files) {
    if (files && files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
       image.src = e.target.result;
    }
        reader.readAsDataURL(files[0]);
    }
}