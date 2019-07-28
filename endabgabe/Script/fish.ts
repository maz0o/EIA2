namespace endabgabe {
    export class Fish extends WholesomeOcean {
        dx: number;
        size: number;
        headPositionX: number;


        constructor(_x: number, _y: number, _dx: number, _color: string, _size: number) {
            super(_x, _y, _color);
            this.dx = _dx;
            this.headPositionX = this.x - 35;
            this.size = _size;
        }

        public draw(): void {

            let fish: Path2D = new Path2D();

            fish.ellipse(this.x, this.y, 15, 35, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(this.x + 35, this.y + 2);
            fish.lineTo(this.x + 60, this.y + 22);
            fish.lineTo(this.x + 66, this.y - 10);
            fish.closePath();
            crc.fillStyle = "#ff5d9e";
            crc.fill(fish);
            crc.stroke(fish);


            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye);
            crc.stroke(fishEye);

            let fishEyeDot: Path2D = new Path2D();
            fishEyeDot.arc(this.x - 20, this.y - 2, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeDot);
            crc.stroke(fishEyeDot);

            
        }

        move(): void {
            this.x += this.dx;
            this.headPositionX = this.x - 35;
            if (this.x < -60) {
                this.x = canvas.width + 40;
            }
        }
        update(): void {
            this.move();
            this.draw();
        }

    }
}

