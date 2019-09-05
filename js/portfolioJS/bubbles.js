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
//let colorArr = ['#31081f', '#eb6534', '#6b0f1a', '#b43ef8', '#b91372', '#00a8e8', '#372772'];
let colorArr = ['#2f4550', '#586f7c', '#b8dbd9', '#f4f4f9', '#2f6690', '#08bdbd'];

window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArr[Math.floor(Math.random() * (colorArr.length - 1))]

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx *= -1;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {

            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        }
        else if (this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}

let circleArray = [];

function init() {
    circleArray.length = 0;
    for (let c = 0; c < 700; c++) {
        let radius = Math.floor((Math.random() * 7));
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 4;
        let dy = (Math.random() - 0.5) * 4;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let c = 0; c < circleArray.length; c++) {
        circleArray[c].update();
    }
}

init();
animate();