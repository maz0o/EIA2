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