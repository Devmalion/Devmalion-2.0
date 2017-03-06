$(document).ready(function() {

    setInterval(movePlane, 20);
    var keys = {}
    var xPosition = $("#rocket").position().left;
    var yPosition = $("#rocket").position().top;;
    var xMove = 5;
    var yMove = 0;
    var rotationDegrees = 0;

    $(document).keydown(function(e) {
        keys[e.keyCode] = true;
    });

    $(document).keyup(function(e) {
        delete keys[e.keyCode];
    });

    function movePlane() {
        for (var direction in keys) {
            if (!keys.hasOwnProperty(direction)) continue;

            // 37 left key
            if (direction == 37) {
                rotationDegrees -= 3;
                $("#rocket").rotate(rotationDegrees);
                var rotationRadians = rotationDegrees * (Math.PI/180);
                xMove = 5 * Math.cos(rotationRadians);
                yMove = 5 * Math.sin(rotationRadians);
                    
            }
            // 38 up key
            if (direction == 38) {
                $("#rocket").animate({top: yPosition + yMove}, 0);  
                $("#rocket").animate({left: xPosition + xMove}, 0);
                yPosition += yMove;
                xPosition += xMove;
            }
            // 39 right key
            if (direction == 39) {
                rotationDegrees += 3;
                $("#rocket").rotate(rotationDegrees);
                var rotationRadians = rotationDegrees * (Math.PI/180);
                xMove = 5 * Math.cos(rotationRadians);
                yMove = 5 * Math.sin(rotationRadians);
                console.log(rotationRadians,xMove,yMove);

                 
            }
            // 40 down key
            if (direction == 40) {
            
            }
        }
    }
});