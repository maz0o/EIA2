var endabgabe;
(function (endabgabe) {
    class BubbleBig extends endabgabe.BubbleSmall {
        constructor(_x, _y, _dy, _color) {
            super(_x, _y, _dy, _color);
            this.dy = _dy;
        }
        draw() {
            let bubbleBig = new Path2D();
            bubbleBig.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "DeepSkyBlue";
            endabgabe.crc.fill(bubbleBig);
            endabgabe.crc.stroke(bubbleBig);
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
    endabgabe.BubbleBig = BubbleBig;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bubbleBig.js.map