namespace L09 {
    document.addEventListener("DOMContentLoaded", init);
    let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        let x: number = 0;
        let y: number = 0;

        drawBackground();

        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            fish2(x, y);
        }

        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = ((Math.random() * 360) + 0);
            bubble(x, y);
        }

        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = ((Math.random() * 360) + 360);
            bubble2(x, y);
        }

        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            fish(x, y);
        }

        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = ((Math.random() * 160) + 560);
            sand(x, y);
        }

        function drawBackground(): void {
            let sand: Path2D = new Path2D();
            sand.moveTo(0, 560);
            sand.lineTo(canvas.width, 560);
            sand.lineTo(canvas.width, canvas.height);
            sand.lineTo(0, canvas.height);
            sand.closePath();
            crc.fillStyle = "#AAAAAA";
            crc.fill(sand);
            let water: Path2D = new Path2D();
            water.moveTo(0, 0);
            water.lineTo(canvas.width, 0);
            water.lineTo(canvas.width, 560);
            water.lineTo(0, 560);
            water.closePath();
            crc.fillStyle = "#0074D9";
            crc.fill(water);

            let hill: Path2D = new Path2D();
            hill.moveTo(0, 560);
            hill.lineTo(40, 500);
            hill.lineTo(150, 450);
            hill.lineTo(250, 500);
            hill.lineTo(300, 540);
            hill.lineTo(350, 470);
            hill.lineTo(400, 470);
            hill.lineTo(500, 500);
            hill.lineTo(700, 450);
            hill.lineTo(800, 480);
            hill.lineTo(900, 470);
            hill.lineTo(1100, 370);
            hill.lineTo(1200, 500);
            hill.lineTo(1280, 560);
            hill.closePath();
            crc.fillStyle = "rgba(108, 122, 137, 0.5)";
            crc.fill(hill);

            let hill2: Path2D = new Path2D();
            hill2.moveTo(0, 560);
            hill2.lineTo(40, 450);
            hill2.lineTo(170, 440);
            hill2.lineTo(290, 500);
            hill2.lineTo(370, 440);
            hill2.lineTo(370, 370);
            hill2.lineTo(470, 470);
            hill2.lineTo(570, 400);
            hill2.lineTo(770, 260);
            hill2.lineTo(870, 400);
            hill2.lineTo(970, 300);
            hill2.lineTo(1170, 320);
            hill2.lineTo(1270, 560);
            hill2.lineTo(1280, 560);
            hill2.closePath();
            crc.fillStyle = "rgba(250, 195, 199, 0.4)";
            crc.fill(hill2);

            let plant: Path2D = new Path2D();

            plant.moveTo(60, 560);
            plant.lineTo(60, 560);
            plant.lineTo(170, 560);
            plant.lineTo(90, 350);

            plant.moveTo(200, 560);
            plant.lineTo(230, 500);
            plant.lineTo(230, 500);
            plant.lineTo(90, 560);

            plant.moveTo(70, 560);
            plant.lineTo(5, 500);
            plant.lineTo(5, 500);
            plant.lineTo(10, 560);

            plant.closePath();
            crc.fillStyle = "#3D9970";
            crc.fill(plant);

            let plant2: Path2D = new Path2D();

            plant2.moveTo(60, 560);
            plant2.lineTo(60, 560);
            plant2.lineTo(170, 560);
            plant2.lineTo(90, 370);

            plant2.moveTo(200, 560);
            plant2.lineTo(230, 530);
            plant2.lineTo(230, 530);
            plant2.lineTo(90, 560);

            plant2.moveTo(70, 560);
            plant2.lineTo(5, 530);
            plant2.lineTo(5, 530);
            plant2.lineTo(10, 560);

            plant2.closePath();
            crc.fillStyle = "rgba(57, 204, 204, 0.4)";
            crc.fill(plant2);

            let plant3: Path2D = new Path2D();

            plant3.moveTo(250, 560);
            plant3.lineTo(300, 560);
            plant3.lineTo(300, 560);
            plant3.lineTo(250, 450);

            plant3.moveTo(200, 560);
            plant3.lineTo(230, 500);
            plant3.lineTo(230, 500);
            plant3.lineTo(90, 560);

            plant3.moveTo(70, 560);
            plant3.lineTo(5, 500);
            plant3.lineTo(5, 500);
            plant3.lineTo(10, 560);

            plant3.closePath();
            crc.fillStyle = "#3D9970";
            crc.fill(plant3);

            let plant4: Path2D = new Path2D();

            plant4.moveTo(250, 560);
            plant4.lineTo(300, 560);
            plant4.lineTo(300, 560);
            plant4.lineTo(250, 500);

            plant4.moveTo(200, 560);
            plant4.lineTo(230, 530);
            plant4.lineTo(230, 530);
            plant4.lineTo(90, 560);

            plant4.moveTo(70, 560);
            plant4.lineTo(5, 530);
            plant4.lineTo(5, 530);
            plant4.lineTo(10, 560);

            plant4.closePath();
            crc.fillStyle = "rgba(57, 204, 204, 0.4)";
            crc.fill(plant4);

            let plant5: Path2D = new Path2D();

            plant5.moveTo(850, 560);
            plant5.lineTo(900, 560);
            plant5.lineTo(900, 560);
            plant5.lineTo(870, 450);

            plant5.moveTo(200, 560);
            plant5.lineTo(230, 500);
            plant5.lineTo(230, 500);
            plant5.lineTo(90, 560);

            plant5.moveTo(70, 560);
            plant5.lineTo(5, 500);
            plant5.lineTo(5, 500);
            plant5.lineTo(10, 560);

            plant5.closePath();
            crc.fillStyle = "#3D9970";
            crc.fill(plant5);

            let plant6: Path2D = new Path2D();

            plant6.moveTo(850, 560);
            plant6.lineTo(900, 560);
            plant6.lineTo(900, 560);
            plant6.lineTo(870, 500);

            plant6.moveTo(200, 560);
            plant6.lineTo(230, 500);
            plant6.lineTo(230, 500);
            plant6.lineTo(90, 560);

            plant6.moveTo(70, 560);
            plant6.lineTo(5, 530);
            plant6.lineTo(5, 530);
            plant6.lineTo(10, 560);

            plant6.closePath();
            crc.fillStyle = "rgba(57, 204, 204, 0.4)";
            crc.fill(plant6);
        }

        function sand(_x: number, _y: number): void {
            let sand: Path2D = new Path2D();
            sand.rect(_x, _y, 7, 7);
            crc.fillStyle = "#DDDDDD";
            crc.fill(sand);
            crc.stroke(sand);
        }

        function bubble(_x: number, _y: number): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(_x, _y, 10, 0, 2 * Math.PI);
            crc.fillStyle = "DeepSkyBlue";
            crc.fill(bubble);
            crc.stroke(bubble);
        }

        function bubble2(_x: number, _y: number): void {
            let bubble2: Path2D = new Path2D();
            bubble2.arc(_x, _y, 5, 0, 2 * Math.PI);
            crc.fillStyle = "DeepSkyBlue";
            crc.fill(bubble2);
            crc.stroke(bubble2);
        }

        function fish(_x: number, _y: number): void {

            let fish: Path2D = new Path2D();

            fish.ellipse(_x, _y, 15, 35, Math.PI / 2, 0, 2 * Math.PI);
            fish.moveTo(_x - 35, _y + 2);
            fish.lineTo(_x - 60, _y + 22);
            fish.lineTo(_x - 66, _y - 10);
            fish.closePath();
            crc.fillStyle = "#FF4136";
            crc.fill(fish);
            crc.stroke(fish);


            let fishEye: Path2D = new Path2D();
            fishEye.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye);
            crc.stroke(fishEye);

            let fishEyeDot: Path2D = new Path2D();
            fishEyeDot.arc(_x + 20, _y - 2, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeDot);
            crc.stroke(fishEyeDot);
        }

        function fish2(_x: number, _y: number): void {
            let fish2: Path2D = new Path2D();

            fish2.ellipse(_x, _y, 50, 60, Math.PI / 2, 0, 10 * Math.PI);
            fish2.moveTo(_x + 61, _y + 2);
            fish2.lineTo(_x + 120, _y + 22);
            fish2.lineTo(_x + 120, _y - 10);
            fish2.closePath();
            crc.fillStyle = "#FFDC00";
            crc.fill(fish2);
            crc.stroke(fish2);

            let fishEye2: Path2D = new Path2D();
            fishEye2.arc(_x - 35, _y - 10, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye2);
            crc.stroke(fishEye2);

            let fishEyeDot2: Path2D = new Path2D();
            fishEyeDot2.arc(_x - 35, _y - 8, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeDot2);
            crc.stroke(fishEyeDot2);

            let fishMouth: Path2D = new Path2D();
            fishMouth.arc(_x - 50, _y + 2, 3, 0, 1 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishMouth);
            crc.stroke(fishMouth);
        }
    }


}
