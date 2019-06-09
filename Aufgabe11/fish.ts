namespace L10 {
    export class Fish {
        x: number;
        y: number;
        dx: number;

        constructor(_x: number, _y: number, _dx: number) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
        }

        public draw(): void {

            let fish: Path2D = new Path2D();

            fish.ellipse(this.x, this.y, 15, 35, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(this.x - 35, this.y + 2);
            fish.lineTo(this.x - 60, this.y + 22);
            fish.lineTo(this.x - 66, this.y - 10);
            fish.closePath();
            crc.fillStyle = "#FF4136";
            crc.fill(fish);
            crc.stroke(fish);


            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye);
            crc.stroke(fishEye);

            let fishEyeDot: Path2D = new Path2D();
            fishEyeDot.arc(this.x + 20, this.y - 2, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeDot);
            crc.stroke(fishEyeDot);
        }

        move(): void {
            this.x += this.dx;
            if (this.x > canvas.width) {
                this.x = -20;
            }
        }
        update(): void {
            this.move();
            this.draw();
        }

    }
}

