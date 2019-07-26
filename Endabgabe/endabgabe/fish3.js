var endabgabe;
(function (endabgabe) {
    class Fish3 extends endabgabe.WholesomeOcean {
        constructor(_x, _y, _dx, _color, _size) {
            super(_x, _y, _color);
            this.dx = _dx;
            this.headPositionX = this.x - 60;
            this.size = _size;
        }
        draw() {
            let fish3 = new Path2D();
            fish3.ellipse(this.x, this.y, 30, 60, Math.PI / 2, 0, 10 * Math.PI);
            fish3.moveTo(this.x + 61, this.y + 2);
            fish3.lineTo(this.x + 120, this.y + 22);
            fish3.lineTo(this.x + 120, this.y - 10);
            fish3.closePath();
            endabgabe.crc.fillStyle = this.color;
            endabgabe.crc.fill(fish3);
            endabgabe.crc.stroke(fish3);
            let fishEye2 = new Path2D();
            fishEye2.arc(this.x - 20, this.y - 10, 10, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "white";
            endabgabe.crc.fill(fishEye2);
            endabgabe.crc.stroke(fishEye2);
            let fishEyeDot2 = new Path2D();
            fishEyeDot2.arc(this.x - 25, this.y - 8, 3, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.fill(fishEyeDot2);
            endabgabe.crc.stroke(fishEyeDot2);
            let fishMouth = new Path2D();
            fishMouth.arc(this.x - 45, this.y + 6, 3, 1, 0 * Math.PI);
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.fill(fishMouth);
            endabgabe.crc.stroke(fishMouth);
        }
        move() {
            this.x -= this.dx;
            this.headPositionX = this.x - 60;
            if (this.x < -150) {
                this.x = 1350;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    endabgabe.Fish3 = Fish3;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=fish3.js.map