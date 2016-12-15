document.addEventListener("DOMContentLoaded", function(event) {

    function galEffect() {

    }

    function galDrawImage(imgSrc) {

        var canvas = document.getElementById('gal--myCanvas');

        if(canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var imgObject = new Image();         
            imgObject.src = imgSrc;

            if (imgObject.width != canvas.width)
                canvas.width = imgObject.width;
            if (imgObject.height != canvas.height)
                canvas.height = imgObject.height;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgObject, 0, 0);
        } else {
            alert("Can't get context!");
        }
    }

    function galFirstImage() {
        var images = document.getElementsByClassName('gal--img');
        var img = images[0].getAttribute('src');
        galDrawImage(img);
    }
    galFirstImage();
    
    function galChangeImage() {
        document.getElementById('gal--thumbs-container').addEventListener('click', function(event) {

            var targetElement = event.target || event.srcElement;

            if (targetElement.tagName == 'IMG') {
                var img = targetElement.getAttribute('src');
                console.log('test' + img);
                galDrawImage(img);
            }
        });
    }
    galChangeImage();
});