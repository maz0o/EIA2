namespace endabgabe {
    export class PlayerFish extends WholesomeOcean {
        scale: number = 1;
        hitbox: Path2D;
        dx: number;
        dy: number;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {
            super(_x, _y, _color);
            this.dx = _dx;
            this.dy = _dy;
        }

        public draw(): void {

            let playerFish: Path2D = new Path2D(); {



                playerFish.ellipse(this.x, this.y, 15 * this.scale, 35 * this.scale, Math.PI / 2, 0, 2 * Math.PI);
                playerFish.moveTo(this.x - 35 * this.scale, this.y + 2 * this.scale);
                playerFish.lineTo(this.x - 60 * this.scale, this.y + 22 * this.scale);
                playerFish.lineTo(this.x - 66 * this.scale, this.y - 10 * this.scale);
                playerFish.closePath();
                crc.fillStyle = "#f34949";
                crc.fill(playerFish);
                crc.stroke(playerFish);


                let fishEye: Path2D = new Path2D();
                fishEye.arc(this.x + 20 * this.scale, this.y - 2 * this.scale, 5 * this.scale, 0 * this.scale, 2 * this.scale * Math.PI);
                crc.fillStyle = "white";
                crc.fill(fishEye);
                crc.stroke(fishEye);

                let fishEyeDot: Path2D = new Path2D();
                fishEyeDot.arc(this.x + 20 * this.scale, this.y - 2 * this.scale, 2 * this.scale, 0 * this.scale, 2 * this.scale * Math.PI);
                crc.fillStyle = "black";
                crc.fill(fishEyeDot);
                crc.stroke(fishEyeDot);

                let hitBox: Path2D = new Path2D;
                hitBox.moveTo(this.x + 35 * this.scale, this.y - 15 * this.scale);
                hitBox.lineTo(this.x + 15 * this.scale, this.y - 15 * this.scale);
                hitBox.lineTo(this.x + 15 * this.scale, this.y + 15 * this.scale);
                hitBox.lineTo(this.x + 35 * this.scale, this.y + 15 * this.scale);
                hitBox.closePath();
                //crc.stroke(hitBox);
                this.hitbox = hitBox;
            }

        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            
            
            this.x += this.dx;
            this.y += this.dy;
            if (!(this.x >= 0 + (100 * this.scale / 2)) || !(this.x <= canvas.width - (100 * this.scale / 2))) {
                this.x -= this.dx;
            }
            if (!(this.y >= 0 + (30 * this.scale / 2)) || !(this.y <= canvas.height - (30 * this.scale / 2))) {
                this.y -= this.dy;
            }
        }

     /*eat(): void {
        if size = < 1
    }*/
    }
}
