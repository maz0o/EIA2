var endabgabe;
(function (endabgabe) {
    class BubbleSmall extends endabgabe.WholesomeOcean {
        constructor(_x, _y, _dy, _color) {
            super(_x, _y, _color);
            this.dy = _dy;
        }
        draw() {
            let bubble2 = new Path2D();
            bubble2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "DeepSkyBlue";
            endabgabe.crc.fill(bubble2);
            endabgabe.crc.stroke(bubble2);
        }
        move() {
            this.y -= this.dy;
            if (this.y < 360) {
                this.y = 720;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    endabgabe.BubbleSmall = BubbleSmall;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bubbleSmall.js.map