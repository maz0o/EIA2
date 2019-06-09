var L10;
(function (L10) {
    class Fish {
        constructor(_x, _y, _dx) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
        }
        draw() {
            let fish = new Path2D();
            fish.ellipse(this.x, this.y, 15, 35, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(this.x - 35, this.y + 2);
            fish.lineTo(this.x - 60, this.y + 22);
            fish.lineTo(this.x - 66, this.y - 10);
            fish.closePath();
            L10.crc.fillStyle = "#FF4136";
            L10.crc.fill(fish);
            L10.crc.stroke(fish);
            let fishEye = new Path2D();
            fishEye.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            L10.crc.fillStyle = "white";
            L10.crc.fill(fishEye);
            L10.crc.stroke(fishEye);
            let fishEyeDot = new Path2D();
            fishEyeDot.arc(this.x + 20, this.y - 2, 2, 0, 2 * Math.PI);
            L10.crc.fillStyle = "black";
            L10.crc.fill(fishEyeDot);
            L10.crc.stroke(fishEyeDot);
        }
        move() {
            this.x += this.dx;
            if (this.x > L10.canvas.width) {
                this.x = -20;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    L10.Fish = Fish;
})(L10 || (L10 = {}));
//# sourceMappingURL=fish.js.map