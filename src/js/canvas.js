$(document).ready(function(e) {
    
    function zeichne() {
        
        var canvas = document.getElementById('myCanvas');
        
        if(canvas.getContext) {
            
            var ctx = canvas.getContext('2d');
            var imgObject = new Image();
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
         
            imgObject.onload = function() {
                ctx.translate(centerX, centerY);
                ctx.rotate(180 * Math.PI / 180);
                ctx.drawImage(imgObject, -centerX, -centerY);
            };
            
            imgObject.src = 'src/img/photoTest.jpg';

        } else {
            alert('Kann nicht Canvas urgh!');
        }
    }
    
    zeichne();
});