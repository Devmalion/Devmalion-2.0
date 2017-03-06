$(document).ready(function() {

    setInterval(movePlane, 20);
    var keys = {}
    var xPosition = 5
    var yPosition = 5;
    var xMove = 5;
    var yMove = 0;

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
                $("#rocket").animate({left: "-=5"}, 0)
                ;                
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
                $("#rocket").animate({left: "+=5"}, 0);  
            }
            // 40 down key
            if (direction == 40) {
            
            }
        }
    }
});