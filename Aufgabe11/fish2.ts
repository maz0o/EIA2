namespace L10 {
    export class Fish2 {
        x: number;
        y: number;
        dx: number;

        constructor(_x: number, _y: number, _dx: number) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
        }

        public draw(): void {

            let fish2: Path2D = new Path2D();

            fish2.ellipse(this.x, this.y, 50, 60, Math.PI / 2, 0, 10 * Math.PI);
            fish2.moveTo(this.x + 61, this.y + 2);
            fish2.lineTo(this.x + 120, this.y + 22);
            fish2.lineTo(this.x + 120, this.y - 10);
            fish2.closePath();
            crc.fillStyle = "#FFDC00";
            crc.fill(fish2);
            crc.stroke(fish2);

            let fishEye2: Path2D = new Path2D();
            fishEye2.arc(this.x - 35, this.y - 10, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye2);
            crc.stroke(fishEye2);

            let fishEyeDot2: Path2D = new Path2D();
            fishEyeDot2.arc(this.x - 35, this.y - 8, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeDot2);
            crc.stroke(fishEyeDot2);

            let fishMouth: Path2D = new Path2D();
            fishMouth.arc(this.x - 50, this.y + 2, 3, 0, 1 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishMouth);
            crc.stroke(fishMouth);
        }

        move(): void {
            this.x -= this.dx;
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