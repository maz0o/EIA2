var L10;
(function (L10) {
    class BubbleSmall {
        constructor(_x, _y, _dy) {
            this.x = _x;
            this.y = _y;
            this.dy = _dy;
        }
        draw() {
            let bubble2 = new Path2D();
            bubble2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L10.crc.fillStyle = "DeepSkyBlue";
            L10.crc.fill(bubble2);
            L10.crc.stroke(bubble2);
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
    L10.BubbleSmall = BubbleSmall;
})(L10 || (L10 = {}));
//# sourceMappingURL=bubbleSmall.js.map