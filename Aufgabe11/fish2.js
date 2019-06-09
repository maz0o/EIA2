var L10;
(function (L10) {
    class Fish2 {
        constructor(_x, _y, _dx) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
        }
        draw() {
            let fish2 = new Path2D();
            fish2.ellipse(this.x, this.y, 50, 60, Math.PI / 2, 0, 10 * Math.PI);
            fish2.moveTo(this.x + 61, this.y + 2);
            fish2.lineTo(this.x + 120, this.y + 22);
            fish2.lineTo(this.x + 120, this.y - 10);
            fish2.closePath();
            L10.crc.fillStyle = "#FFDC00";
            L10.crc.fill(fish2);
            L10.crc.stroke(fish2);
            let fishEye2 = new Path2D();
            fishEye2.arc(this.x - 35, this.y - 10, 10, 0, 2 * Math.PI);
            L10.crc.fillStyle = "white";
            L10.crc.fill(fishEye2);
            L10.crc.stroke(fishEye2);
            let fishEyeDot2 = new Path2D();
            fishEyeDot2.arc(this.x - 35, this.y - 8, 3, 0, 2 * Math.PI);
            L10.crc.fillStyle = "black";
            L10.crc.fill(fishEyeDot2);
            L10.crc.stroke(fishEyeDot2);
            let fishMouth = new Path2D();
            fishMouth.arc(this.x - 50, this.y + 2, 3, 0, 1 * Math.PI);
            L10.crc.fillStyle = "black";
            L10.crc.fill(fishMouth);
            L10.crc.stroke(fishMouth);
        }
        move() {
            this.x -= this.dx;
            if (this.x < -150) {
                this.x = 1350;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    L10.Fish2 = Fish2;
})(L10 || (L10 = {}));
//# sourceMappingURL=fish2.js.map