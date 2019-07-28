var endabgabe;
(function (endabgabe) {
    class Fish extends endabgabe.WholesomeOcean {
        constructor(_x, _y, _dx, _color, _size) {
            super(_x, _y, _color);
            this.dx = _dx;
            this.headPositionX = this.x - 35;
            this.size = _size;
        }
        draw() {
            let fish = new Path2D();
            fish.ellipse(this.x, this.y, 15, 35, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(this.x + 35, this.y + 2);
            fish.lineTo(this.x + 60, this.y + 22);
            fish.lineTo(this.x + 66, this.y - 10);
            fish.closePath();
            endabgabe.crc.fillStyle = "#ff5d9e";
            endabgabe.crc.fill(fish);
            endabgabe.crc.stroke(fish);
            let fishEye = new Path2D();
            fishEye.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "white";
            endabgabe.crc.fill(fishEye);
            endabgabe.crc.stroke(fishEye);
            let fishEyeDot = new Path2D();
            fishEyeDot.arc(this.x - 20, this.y - 2, 2, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.fill(fishEyeDot);
            endabgabe.crc.stroke(fishEyeDot);
        }
        move() {
            this.x += this.dx;
            this.headPositionX = this.x - 35;
            if (this.x < -60) {
                this.x = endabgabe.canvas.width + 40;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    endabgabe.Fish = Fish;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=fish.js.map