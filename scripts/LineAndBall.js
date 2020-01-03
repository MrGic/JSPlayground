(function(){
    console.log("party started!");
    var timerCount = 0;
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;        
        
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;
    var lineBeginPosY = 400;
    var lineEndPosY = 400; 
    var lineBeginPosX = 50;
    var lineEndPosX = canvas.width - 50;

    var ctx  = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(50, lineEndPosY);    
    ctx.lineTo(canvas.width - 50, lineEndPosY);
    // Make the line visible
    ctx.stroke();
    ctx.closePath();


    var timer = setInterval(function(){

        if(timerCount < 260){
            console.log("running interval", timerCount += 1); 
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0,0, canvas.width,canvas.height);

            //Draw a line
            lineEndPosY += 5;
            lineEndPosX -= 0.5;
            ctx.beginPath();
            ctx.moveTo(lineBeginPosX, lineBeginPosY);    
            ctx.lineTo(lineEndPosX, lineEndPosY);
            // Make the line visible
            ctx.stroke();            
            ctx.closePath();

            //Schrink the ball
            if(radius >= 0){
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'green';
                ctx.fill();                   
            }
            radius -= 0.5;
        }
        else{
            clearInterval(timer);
        }
            
    }, 30);  
    
    draw  = function() {
        
        //moving clouds
        rightX = rightX-1.25;
        leftX = leftX+1.25;
        
        //moving sun
        sunX = sunX+0.47;
        sunY = 1/90*sunX*sunX-4*sunX+400;
        
        //vandpøl
        fill(0,255,255);
        ellipse(270, 380, vandpytx, vandpyty);
        
        //snowman
        fill(water,255,255);
        ellipse(snowX, snowY1, snowball1, snowball1);
        ellipse(snowX, snowY2, snowball1*3/4, snowball1*3/4);
        ellipse(snowX, snowY3, snowball1*2/4, snowball1*2/4);
      
        //moving snowman
        snowX = snowX+0.6;
        if(210<snowX && snowX<270) {
        ground = ground-1;
        snowball1 = snowball1-0.3;
        snowY1 = snowY1+0.5;
        snowY2 = snowY2+1.1;
        snowY3 = snowY3+1.45;
        }
        
        if(snowX>270){
        fill(0, 255, 255);
        vandpytx = vandpytx+0.35;
        vandpyty = vandpyty+0.175;
        fill(255,255,255);
        snowY2 = snowY1;
        snowY3 = snowY1;
        snowX = 270;
        snowball1 = snowball1;
        ground = ground-1;
        snowball1 = snowball1-0.25;
        
        }   
        if(100<vandpytx){
        vandpytx = 100;
        vandpyty = 50;
        }
    };
    

})();

