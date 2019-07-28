var endabgabe;
(function (endabgabe) {
    class PlayerFish extends endabgabe.WholesomeOcean {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y, _color);
            this.scale = 1;
            this.dx = _dx;
            this.dy = _dy;
        }
        draw() {
            let playerFish = new Path2D();
            {
                playerFish.ellipse(this.x, this.y, 15 * this.scale, 35 * this.scale, Math.PI / 2, 0, 2 * Math.PI);
                playerFish.moveTo(this.x - 35 * this.scale, this.y + 2 * this.scale);
                playerFish.lineTo(this.x - 60 * this.scale, this.y + 22 * this.scale);
                playerFish.lineTo(this.x - 66 * this.scale, this.y - 10 * this.scale);
                playerFish.closePath();
                endabgabe.crc.fillStyle = "#f34949";
                endabgabe.crc.fill(playerFish);
                endabgabe.crc.stroke(playerFish);
                let fishEye = new Path2D();
                fishEye.arc(this.x + 20 * this.scale, this.y - 2 * this.scale, 5 * this.scale, 0 * this.scale, 2 * this.scale * Math.PI);
                endabgabe.crc.fillStyle = "white";
                endabgabe.crc.fill(fishEye);
                endabgabe.crc.stroke(fishEye);
                let fishEyeDot = new Path2D();
                fishEyeDot.arc(this.x + 20 * this.scale, this.y - 2 * this.scale, 2 * this.scale, 0 * this.scale, 2 * this.scale * Math.PI);
                endabgabe.crc.fillStyle = "black";
                endabgabe.crc.fill(fishEyeDot);
                endabgabe.crc.stroke(fishEyeDot);
                let hitBox = new Path2D;
                hitBox.moveTo(this.x + 35 * this.scale, this.y - 15 * this.scale);
                hitBox.lineTo(this.x + 15 * this.scale, this.y - 15 * this.scale);
                hitBox.lineTo(this.x + 15 * this.scale, this.y + 15 * this.scale);
                hitBox.lineTo(this.x + 35 * this.scale, this.y + 15 * this.scale);
                hitBox.closePath();
                //crc.stroke(hitBox);
                this.hitbox = hitBox;
            }
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (!(this.x >= 0 + (100 * this.scale / 2)) || !(this.x <= endabgabe.canvas.width - (100 * this.scale / 2))) {
                this.x -= this.dx;
            }
            if (!(this.y >= 0 + (30 * this.scale / 2)) || !(this.y <= endabgabe.canvas.height - (30 * this.scale / 2))) {
                this.y -= this.dy;
            }
        }
    }
    endabgabe.PlayerFish = PlayerFish;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=playerFish.js.map