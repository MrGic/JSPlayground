(function(){
    console.log("party started!");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray1;

    // create particle constructor function
    function Particle(x, y, directionX, directionY, size, color, grow){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.grow = grow;
    }

    // Draw method to Particle prototype
    Particle.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();    
    }

    // Update method
    Particle.prototype.update = function(){     
        
        //Grow particle
        if(this.size <= 20 && this.grow == true){
            this.size = this.size + 0.1 / 2;

            if(this.size >= 19.9 && this.size <= 20)
            {
                this.grow = false;
            }
        }

        //Reduce particle        
        if(this.grow == false ){
            this.size = this.size - 0.1 / 2;

            if(this.size >= 0 && this.size <= 0.1)
            {
                this.grow = true;
            }
        }

        if(this.x + this.size > canvas.width || this.x - this.size < 0){
            this.directionX = -this.directionX;
        }

        if(this.y + this.size > canvas.height || this.y - this.size < 0){
            this.directionY = -this.directionY;
        }        

        this.x += this.directionX;
        this.y += this.directionY;        

        this.draw();
    }

    // Fill ParticleArray with particles
    function init(){
        particleArray1 = [];
        for(let i=0; i < 100; i++) {
            let size = Math.random() * 20;
            let x = Math.random() * (innerWidth - size * 2);
            let y = Math.random() * (innerHeight - size * 2);
            let directionX = (Math.random() * .4) - .2;
            let directionY = (Math.random() * .4) - .2;
        
            let color = RandomizeHexColor();
            let grow = true;

            particleArray1.push(new Particle(x,y,directionX,directionY,size,color,grow));
        }
    }

    function RandomizeHexColor(){
        let colorString = '#'; // hexadecimal starting symbol
        let letters = ['FFFFFF','25364f','4d71a5','9bc4ff','000000', 'f28e1c']; //Set your colors here
        colorString += letters[Math.floor(Math.random() * letters.length)];
        return colorString;
    }

    //Animation loop
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth, innerHeight);

        for(let i = 0; i < particleArray1.length;i++){
            particleArray1[i].update();
        }
    }

    init();
    animate();

    window.addEventListener('resize', function(){
        canvas.width = this.innerWidth;
        canvas.height = this.innerHeight;
        init();
    })

})();
