namespace endabgabe {
    export class BubbleBig extends BubbleSmall {
       

        constructor(_x: number, _y: number, _dy: number, _color: string) {
            super(_x, _y, _dy, _color);
            this.dy = _dy;
        }

        public draw(): void {


            let bubbleBig: Path2D = new Path2D();
            bubbleBig.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc.fillStyle = "DeepSkyBlue";
            crc.fill(bubbleBig);
            crc.stroke(bubbleBig);
        }

        move(): void {
            this.y -= this.dy;
            if (this.y < -40) {
                this.y = 360;
            }
        }
    update(): void {
            this.move();
            this.draw();
        }
    }
}
