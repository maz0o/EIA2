namespace endabgabe {
    export class Fish3 extends WholesomeOcean {
        dx: number;
        size: number;
        headPositionX: number;

        constructor(_x: number, _y: number, _dx: number, _color: string, _size: number) {
            super(_x, _y, _color);
            this.dx = _dx;
            this.headPositionX = this.x - 60;
            this.size = _size;
        }

        public draw(): void {

            let fish3: Path2D = new Path2D();

            fish3.ellipse(this.x, this.y, 30, 60, Math.PI / 2, 0, 10 * Math.PI);
            fish3.moveTo(this.x + 61, this.y + 2);
            fish3.lineTo(this.x + 120, this.y + 22);
            fish3.lineTo(this.x + 120, this.y - 10);
            fish3.closePath();
            crc.fillStyle = this.color;
            crc.fill(fish3);
            crc.stroke(fish3);

            let fishEye2: Path2D = new Path2D();
            fishEye2.arc(this.x - 20, this.y - 10, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye2);
            crc.stroke(fishEye2);

            let fishEyeDot2: Path2D = new Path2D();
            fishEyeDot2.arc(this.x - 25, this.y - 8, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeDot2);
            crc.stroke(fishEyeDot2);

            let fishMouth: Path2D = new Path2D();
            fishMouth.arc(this.x - 45, this.y + 6, 3, 1, 0 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishMouth);
            crc.stroke(fishMouth);
        }

        move(): void {
            this.x -= this.dx;
            this.headPositionX = this.x - 60;
            if (this.x < -150) {
                this.x = 1350;
            }
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}