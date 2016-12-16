document.addEventListener("DOMContentLoaded", function(event) {
    
    var canvas = document.getElementById('gal--myCanvas');
    var ctx = canvas.getContext('2d');
    var imgObject = new Image();
    var cw = canvas.width;
    var ch = canvas.height;
    var iw = imgObject.width;
    var ih = imgObject.height;
    var animPctComplete;
    var fps = 60;

    function galDrawImage(imgSrc) {
        
        imgObject.onload = function() {
            animPctComplete = 0;
            galAnimate();
        };

        imgObject.src = imgSrc;
    }

    function galAnimate() {
        setTimeout(function() {
            
            ctx.save();
            ctx.globalAlpha = animPctComplete;
            ctx.drawImage(imgObject, 0, 0);
            ctx.restore();
            animPctComplete += 0.01;
            

            if(Math.floor(animPctComplete) !== 1) {
                requestAnimationFrame(galAnimate);
            }

        }, 1000 / fps);
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
                galDrawImage(img);
            }
        });
    }
    galChangeImage();

    //CSS gallery

    var cImages = document.getElementsByClassName('cgal--fullpicture');
    var cThumbs = document.getElementsByClassName('cgal--img');
    var cThumbsContainer = document.getElementById('cgal--thumbs-container');
    var cVisible = document.getElementsByClassName('visible');

    function toggleSiblings(siblings) {
        console.log('siblings: '+siblings);
    }

    function toggleSelf(targetMe) {
        console.log('I am: '+targetMe);
    }

    function getChildren(n, skipMe){
        var r = [];
        for ( ; n; n = n.nextSibling ) 
        if ( n.nodeType == 1 && n != skipMe)
            r.push( n );
        toggleSiblings(r);
    }

    function getSiblings(n) {
        return getChildren(n.parentNode.firstChild, n);
    }

    cThumbsContainer.addEventListener('click', function(event) {
        var targetElement = event.target || event.srcElement;
        getSiblings(targetElement);
        toggleSelf(targetElement);
    });
});
