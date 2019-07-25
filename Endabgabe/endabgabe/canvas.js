var endabgabe;
(function (endabgabe) {
    document.addEventListener("DOMContentLoaded", init);
    window.addEventListener("keydown", moveSomething, false);
    let wholesomeOcean = [];
    endabgabe.serverAddress = "https://maz0o-eia2.herokuapp.com/";
    let fps = 30;
    let imageData;
    let imageData2;
    let playerFish;
    endabgabe.score = 0;
    let playTime;
    function init() {
        endabgabe.canvas = document.getElementById("canvas");
        endabgabe.crc = endabgabe.canvas.getContext("2d");
        drawBackground();
        imageData = endabgabe.crc.getImageData(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        imageData2 = imageData;
        let x = endabgabe.canvas.width / 2;
        let y = endabgabe.canvas.height / 2;
        let dx = 0;
        playerFish = new endabgabe.PlayerFish(x, y, "#FFDC00");
        playerFish.draw();
        for (let i = 0; i < 5; i++) {
            let size = 2;
            let x = Math.random() * endabgabe.canvas.width;
            let y = Math.random() * endabgabe.canvas.height;
            let dx = Math.random() * 3 + 6;
            let fish2 = new endabgabe.Fish2(x, y, dx, "#FFDC00", size);
            wholesomeOcean.push(fish2);
            fish2.draw();
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * endabgabe.canvas.width;
            let y = ((Math.random() * 360) + 0);
            let dy = Math.random() * 5 + 2;
            let bubbleBig = new endabgabe.BubbleBig(x, y, dy, "DeepSkyBlue");
            wholesomeOcean.push(bubbleBig);
            bubbleBig.draw();
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * endabgabe.canvas.width;
            let y = ((Math.random() * 360) + 360);
            let dy = Math.random() * 3 + 2;
            let bubbleSmall = new endabgabe.BubbleSmall(x, y, dy, "DeepSkyBlue");
            wholesomeOcean.push(bubbleSmall);
            bubbleSmall.draw();
        }
        console.log(wholesomeOcean);
        for (let i = 0; i < 15; i++) {
            let size = 0.4;
            let x = Math.random() * endabgabe.canvas.width;
            let y = Math.random() * endabgabe.canvas.height;
            let dx = -(Math.random() * 5 + 5);
            let fish = new endabgabe.Fish(x, y, dx, "#FF4136", size);
            wholesomeOcean.push(fish);
            fish.draw();
        }
        update();
    }
    let counter = 0;
    function update() {
        endabgabe.crc.clearRect(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        endabgabe.crc.putImageData(imageData, counter, 0);
        endabgabe.crc.putImageData(imageData2, counter + endabgabe.canvas.width, 0);
        counter -= 10;
        if (counter < -endabgabe.canvas.width) {
            let temp;
            temp = imageData;
            imageData = imageData2;
            imageData2 = temp;
            counter = 0;
        }
        function myalert() {
            endabgabe.playerName = prompt("Game Over score:" + endabgabe.score, "Who are you?");
            window.clearTimeout(playTime);
            endabgabe.insert();
            endabgabe.refresh();
        }
        for (let i = 0; i < wholesomeOcean.length; i++) {
            let currentObject = wholesomeOcean[i];
            currentObject.update();
        }
        for (let i = 0; i < wholesomeOcean.length; i++) {
            let currentObject = wholesomeOcean[i];
            if (currentObject instanceof endabgabe.Fish || currentObject instanceof endabgabe.Fish2) {
                if (endabgabe.crc.isPointInPath(playerFish.hitbox, currentObject.headPositionX, currentObject.y)) {
                    console.log("hello");
                    if (playerFish.scale > currentObject.size) {
                        wholesomeOcean.splice(i, 1);
                        playerFish.scale += 0.1;
                        endabgabe.score += 5;
                        document.getElementById("highscore").innerHTML = "Highscore: " + endabgabe.score;
                        //erstelle neuen Fisch
                        if (currentObject instanceof endabgabe.Fish) {
                            let size = 0.4;
                            let x = endabgabe.canvas.width + 100;
                            let y = Math.random() * endabgabe.canvas.height;
                            let dx = -(Math.random() * 5 + 5);
                            let fish = new endabgabe.Fish(x, y, dx, "#FF4136", size);
                            wholesomeOcean.push(fish);
                        }
                        if (currentObject instanceof endabgabe.Fish2) {
                            let size = 2;
                            let x = endabgabe.canvas.width + 100;
                            let y = Math.random() * endabgabe.canvas.height;
                            let dx = Math.random() * 3 + 6;
                            let fish2 = new endabgabe.Fish2(x, y, dx, "#FFDC00", size);
                            wholesomeOcean.push(fish2);
                        }
                    }
                    else {
                        console.log("My size: " + playerFish.scale + ", His size: " + currentObject.size);
                        myalert();
                    }
                }
            }
        }
        playerFish.draw();
        playTime = window.setTimeout(update, 1000 / fps);
    }
    /* if this.x < canvas.width {
        this.x = -20._x
    } */
    function drawBackground() {
        let sand = new Path2D();
        sand.moveTo(0, 560);
        sand.lineTo(endabgabe.canvas.width, 560);
        sand.lineTo(endabgabe.canvas.width, endabgabe.canvas.height);
        sand.lineTo(0, endabgabe.canvas.height);
        sand.closePath();
        endabgabe.crc.fillStyle = "#AAAAAA";
        endabgabe.crc.fill(sand);
        let water = new Path2D();
        water.moveTo(0, 0);
        water.lineTo(endabgabe.canvas.width, 0);
        water.lineTo(endabgabe.canvas.width, 560);
        water.lineTo(0, 560);
        water.closePath();
        endabgabe.crc.fillStyle = "#0074D9";
        endabgabe.crc.fill(water);
        let hill = new Path2D();
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
        endabgabe.crc.fillStyle = "rgba(108, 122, 137, 0.5)";
        endabgabe.crc.fill(hill);
        let hill2 = new Path2D();
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
        endabgabe.crc.fillStyle = "rgba(250, 195, 199, 0.4)";
        endabgabe.crc.fill(hill2);
        let plant = new Path2D();
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
        endabgabe.crc.fillStyle = "#3D9970";
        endabgabe.crc.fill(plant);
        let plant2 = new Path2D();
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
        endabgabe.crc.fillStyle = "rgba(57, 204, 204, 0.4)";
        endabgabe.crc.fill(plant2);
        let plant3 = new Path2D();
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
        endabgabe.crc.fillStyle = "#3D9970";
        endabgabe.crc.fill(plant3);
        let plant4 = new Path2D();
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
        endabgabe.crc.fillStyle = "rgba(57, 204, 204, 0.4)";
        endabgabe.crc.fill(plant4);
        let plant5 = new Path2D();
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
        endabgabe.crc.fillStyle = "#3D9970";
        endabgabe.crc.fill(plant5);
        let plant6 = new Path2D();
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
        endabgabe.crc.fillStyle = "rgba(57, 204, 204, 0.4)";
        endabgabe.crc.fill(plant6);
    }
    function sand(_x, _y) {
        let sand = new Path2D();
        sand.rect(_x, _y, 7, 7);
        endabgabe.crc.fillStyle = "#DDDDDD";
        endabgabe.crc.fill(sand);
        endabgabe.crc.stroke(sand);
    }
    function moveSomething(e) {
        switch (e.keyCode) {
            case 37: // left key pressed break; 
                if (playerFish.x >= 100 * playerFish.scale) {
                    playerFish.x -= 10;
                }
                break;
            case 38: // up key pressed break;
                if (playerFish.y >= 30 * playerFish.scale) {
                    playerFish.y -= 10;
                }
                break;
            case 39: // right key pressed break;
                if (playerFish.x <= 720 * playerFish.scale) {
                    playerFish.x += 10;
                }
                break;
            case 40: // down key pressed break;
                if (playerFish.y <= 700 * playerFish.scale) {
                    playerFish.y += 10;
                }
                break;
        }
    }
})(endabgabe || (endabgabe = {}));
/*for (let i: number = 0; i < 100; i++) {
         let x: number = Math.random() * canvas.width;
         let y: number = ((Math.random() * 160) + 560);
         sand(x, y);
     } */
//# sourceMappingURL=canvas.js.map