var L10;
(function (L10) {
    class BubbleBig {
        constructor(_x, _y, _dy) {
            this.x = _x;
            this.y = _y;
            this.dy = _dy;
        }
        draw() {
            let bubbleBig = new Path2D();
            bubbleBig.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            L10.crc.fillStyle = "DeepSkyBlue";
            L10.crc.fill(bubbleBig);
            L10.crc.stroke(bubbleBig);
        }
        move() {
            this.y -= this.dy;
            if (this.y < -40) {
                this.y = 360;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    L10.BubbleBig = BubbleBig;
})(L10 || (L10 = {}));
//# sourceMappingURL=bubbleBig.js.map