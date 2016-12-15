document.addEventListener("DOMContentLoaded", function(event) {

    function galleryEffect() {

    }

    function firstImage() {

    }

    function drawImage(imgSrc) {

        var canvas = document.getElementById('myCanvas');

        if(canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var imgObject = new Image();
            imgObject.src = imgSrc;
            ctx.drawImage(imgObject, 0, 0);
        } else {
            alert("Can't get context!");
        }
    }
    
    document.getElementById('gallery--thumbs-container').addEventListener('click', function(event) {
        console.log(event);

        event = event || window.event;
        console.log(event.target);

        var targetElement = event.target || event.srcElement;

        if (targetElement.tagName == 'IMG') {
            var img = targetElement.getAttribute('src');
            console.log('test' + img);
            drawImage(img);
        }
    });
});