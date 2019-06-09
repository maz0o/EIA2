namespace L10 {
    export class BubbleSmall {
        x: number;
        y: number;
        dy: number;

        constructor(_x: number, _y: number, _dy: number) {
            this.x = _x;
            this.y = _y;
            this.dy = _dy;
        }

        public draw(): void {

            let bubble2: Path2D = new Path2D();
            bubble2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc.fillStyle = "DeepSkyBlue";
            crc.fill(bubble2);
            crc.stroke(bubble2);
        }

        move(): void {
            this.y -= this.dy;
            if (this.y < 360) {
                this.y = 720;
            }
        }

        update(): void {
            this.move();
            this.draw();
        }

    }
}
