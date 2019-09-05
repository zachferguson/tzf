/**
 * Created by Ferguson on 11/3/2017.
 */

let canvas = document.getElementById('cv');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 40;
let minRadius = 7;
let colorArr = [[155, 176, 255], [170, 191, 255], [202, 215, 255], [248, 247, 255], [255, 244, 234], [255, 210, 161], [255, 204, 111]];
let fArr = ["down", "up"];


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

function Circle(x, y, r, g, b, speed, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.min = 0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.starAlpha = 1;
    this.fader = 0;
    this.color;

    if (speed != 0) {
        this.fader = fArr[Math.floor(Math.random() * 2)];
        let temp = Math.floor(Math.random() * 100);
        //console.log("fader: " + this.fader);
        if (temp <= 20) {
            this.starAlpha = (temp / 100) + ((Math.random() * 50) / 100);
            //console.log("temp number < 20, initial starAlpha = " + this.starAlpha);
        }
        if (temp > 20) {
            this.starAlpha = temp / 100;
            //console.log("temp number > 20, initial starAlpha = " + this.starAlpha);
        }
        let c = 0;
        while (c == 0) {
            let tempVar = Math.floor(Math.random() * 100)
            //console.log("now in the while loop, starAlpha: " + this.starAlpha);
            if (this.starAlpha - tempVar > 0) {
                this.min = this.starAlpha - tempVar;
                //console.log("min: " + this.min);
                c = 1;
                break;
            }
        }
    }

    this.twinkle = function() {

        if (this.speed != 0) {
            if (this.fader == "down" && (this.starAlpha -= this.speed) > this.min) {
                this.starAlpha -= this.speed;
                //console.log("new starAlpha: " + this.starAlpha);
                this.color = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.starAlpha + ")";
                return;
            }
            if (this.fader == "down" && (this.starAlpha -= this.speed) <= this.min) {
                this.fader = "up";
                //console.log("new starAlpha: " + this.starAlpha);
                this.color = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.starAlpha + ")";
                return;
            }
            if (this.fader == "up" && (this.starAlpha += this.speed) <= 1) {
                this.starAlpha += this.speed;
                //console.log("new starAlpha: " + this.starAlpha);
                this.color = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.starAlpha + ")";
                return;
            }
            if (this.fader == "up" && (this.starAlpha += this.speed) > 1) {
                this.fader = "down";
                //console.log("new starAlpha: " + this.starAlpha);
                this.color = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.starAlpha + ")";
                return;
                //
            }
        }
    }

    this.draw = function() {
        this.twinkle();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}





let circleArray = [];

function init() {
    circleArray.length = 0;
    // x, y, r, g, b, speed, radius
    for (let c = 0; c < 1000; c++) {
		let radius = 0;
		let tempRad = Math.random();
		if (tempRad >= 0.95) {
			radius = tempRad + Math.random();
		}
		if (tempRad <= 0.94) {
			radius = tempRad;
		}
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let tempColor = colorArr[Math.floor(Math.random() * (colorArr.length))];
        let r = tempColor[0];
        let g = tempColor[1];
        let b = tempColor[2];
        let speed = 0;
        let tempSpeed = Math.floor((Math.random() * 9) + 1);
		// below variable controls how many stars twinkle
        if (tempSpeed < 4) {
            speed = (tempSpeed / 100);
        }
        circleArray.push(new Circle(x, y, r, g, b, speed, radius));
        //console.log("new circle:");
        //console.log(circleArray[c]);
    }
}
/*var fps = 15;
 function draw() {
 setTimeout(function() {
 requestAnimationFrame(draw);
 // Drawing code goes here
 }, 1000 / fps);
 }
 */
let fps = 10;
function animate() {
    setTimeout(function() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (let c = 0; c < circleArray.length; c++) {
            circleArray[c].draw();
        }
    }, 1000 / fps);

}

init();
animate();