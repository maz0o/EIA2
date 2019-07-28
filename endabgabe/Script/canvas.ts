namespace endabgabe {
    document.addEventListener("DOMContentLoaded", init);
    window.addEventListener("keydown", moveSomething, false);
    window.addEventListener("keyup", moveNothing, false);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let serverAddress: string = "https://maz0o-eia2.herokuapp.com/";
    export let playerName: string;
    export let score: number = 0;
    let wholesomeOcean: WholesomeOcean[] = [];
    let menu: boolean = true;
    let fps: number = 30;
    let speed: number = 1;
    let firstGame: boolean = true;
    let imageData: ImageData;
    let imageData2: ImageData;
    let playerFish: PlayerFish;
    let counter: number = 0;
    let playTime: number;
    let scoreUploadOpen: boolean = true;

    function myalert(): void {

        playerName = prompt("Game Over score:" + score, "Who are you?");
        //window.clearTimeout(playTime);
        insert();
        refresh();
        score = 0;
        speed = 1;
        console.log(speed);

        wholesomeOcean.splice(0, wholesomeOcean.length);
        scoreUploadOpen = false;
        firstGame = false;
        menu = true;
        init();
    }


    function handleClick(_event: MouseEvent): void {
        // canvas.getBoundingClientRect().left
        let x: number = _event.clientX - canvas.getBoundingClientRect().left;
        let y: number = _event.clientY - canvas.getBoundingClientRect().top;
        console.log("x:" + x + "y:" + y);

        if (x >= 30 && x <= 140 && y >= 70 && y <= 110) {
            //window.location.assign("file:///C:/Users/marco/Documents/Studium/Semester_2/EIA2/config/EIA2/Endabgabe/endabgabe/index.html");
            menu = false;
            init();
        }
        if (x >= 30 && x <= 325 && y >= 165 && y <= 215) {
            crc.font = "20px Comic Sans MS";
            crc.fillText("control the fish by using the arrow keys on your keyboard", 460, 100);
            crc.fillText("you grow when you eat fishys, but watch out! You can only eat fishys your size", 460, 130);
            crc.fillText("or smaller!", 460, 160);
            crc.fillText("Beware of the green toxic fishys! If you eat them, you will shrink and loose", 460, 190);
            crc.fillText("precious hard earned points! If you get too small, you will lose!", 460, 220);
            crc.fillText("Happy hunting", 460, 270);
            crc.fillText("Music Credit: Michael Hildreth, Track Name: The Way", 460, 330);
            crc.fillText("License for commercial use: Creative Commons Attribution 3.0 Unported ", 460, 360);
            crc.fillText("Share Alike (CC BY-SA 3.0) License.", 460, 390);
        }


    }

    function init(): void {
        if (!firstGame) crc.clearRect(0, 0, canvas.width, canvas.height);
        console.log("mir mache n init: " + menu);
        canvas = <HTMLCanvasElement>document.getElementById("canvas");
        crc = canvas.getContext("2d");
        canvas.removeEventListener("click", handleClick);
        refresh();
        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        imageData2 = imageData;
        if (menu) {
            canvas.addEventListener("click", handleClick);
            crc.font = "40px Comic Sans MS";
            crc.fillText("PLAY", 30, 100);

            crc.font = "40px Comic Sans MS";
            crc.fillText("HOW TO PLAY", 30, 200);

           
        } 
        
        else {

            let x: number = canvas.width / 4;
            let y: number = canvas.height / 2;
            let dx: number = 0;
            playerFish = new PlayerFish(x, y, 0, 0, "#FFDC00");
            playerFish.draw();

            document.getElementById("highscore").innerHTML = "Highscore: " + score;

            refresh();

            for (let i: number = 0; i < 15; i++) {
                let size: number = 0.4;
                let x: number = (canvas.width / 3) * 2 + Math.random() * canvas.width;
                let y: number = Math.random() * canvas.height;
                let dx: number = -(Math.random() * 5 + 5);
                let fish: Fish = new Fish(x, y, dx, "#FF4136", size);

                wholesomeOcean.push(fish);
                fish.draw();
            }

            for (let i: number = 0; i < 5; i++) {
                let size: number = 2;
                let x: number = (canvas.width / 3) * 2 + Math.random() * canvas.width;
                let y: number = Math.random() * canvas.height;
                let dx: number = Math.random() * 3 + 6;
                let fish2: Fish2 = new Fish2(x, y, dx, "#FFDC00", size);

                wholesomeOcean.push(fish2);
                fish2.draw();
            }

            for (let i: number = 0; i < 10; i++) {
                let size: number = 5000;
                let x: number = canvas.width + Math.random() * canvas.width;
                let y: number = Math.random() * canvas.height;
                let dx: number = Math.random() * 3 + 6;
                let fish3: Fish3 = new Fish3(x, y, dx, "#65ff00", size);

                wholesomeOcean.push(fish3);
                fish3.draw();
            }

            for (let i: number = 0; i < 20; i++) {
                let x: number = Math.random() * canvas.width;
                let y: number = ((Math.random() * 360) + 0);
                let dy: number = Math.random() * 5 + 2;
                let bubbleBig: BubbleBig = new BubbleBig(x, y, dy, "DeepSkyBlue");

                wholesomeOcean.push(bubbleBig);
                bubbleBig.draw();
            }

            for (let i: number = 0; i < 20; i++) {
                let x: number = Math.random() * canvas.width;
                let y: number = ((Math.random() * 360) + 360);
                let dy: number = Math.random() * 3 + 2;
                let bubbleSmall: BubbleSmall = new BubbleSmall(x, y, dy, "DeepSkyBlue");

                wholesomeOcean.push(bubbleSmall);
                bubbleSmall.draw();
            }
            console.log(wholesomeOcean);
            if (firstGame) update();
        }
    }

    function update(): void {
        if (!menu) {
            crc.clearRect(0, 0, canvas.width, canvas.height);
            crc.putImageData(imageData, counter, 0);
            crc.putImageData(imageData2, counter + canvas.width, 0);
            counter -= 10;
        }

        if (counter < -canvas.width) {
            let temp: ImageData;
            temp = imageData;
            imageData = imageData2;
            imageData2 = temp;
            counter = 0;
        }

        function myalert(): void {

            playerName = prompt("Game Over score:" + score, "Who are you?");
            //window.clearTimeout(playTime);
            insert();
            refresh();
            score = 0;
            speed = 1;
            console.log(speed);

            wholesomeOcean.splice(0, wholesomeOcean.length);
            scoreUploadOpen = false;
            firstGame = false;
            menu = true;
            init();
        }


        for (let i: number = 0; i < wholesomeOcean.length; i++) {
            let currentObject: WholesomeOcean = wholesomeOcean[i];
            currentObject.update();
        }

        for (let i: number = 0; i < wholesomeOcean.length; i++) {
            let currentObject: WholesomeOcean = wholesomeOcean[i];
            if (currentObject instanceof Fish || currentObject instanceof Fish2 || currentObject instanceof Fish3) {
                if (crc.isPointInPath(playerFish.hitbox, currentObject.headPositionX, currentObject.y)) {
                    console.log("hello");
                    if (playerFish.scale > currentObject.size) {
                        wholesomeOcean.splice(i, 1);
                        playerFish.scale += 0.1;
                        score += 5;
                        document.getElementById("highscore").innerHTML = "Highscore: " + score;
                        if (score >= 100 && speed == 0) {
                            speed++;
                        } else if (score >= 200 && speed == 1) {
                            speed++;

                        }
                        if (score < 1000) {
                            //erstelle neuen Fisch
                            if (currentObject instanceof Fish) {
                                let size: number = 0.4;
                                let x: number = canvas.width + 100;
                                let y: number = Math.random() * canvas.height;
                                let dx: number = -(Math.random() * 5 + 5);
                                console.log("ja gib der Mudda: " + speed + ", " + dx);
                                let fish: Fish = new Fish(x, y, speed * dx, "#FF4136", size);

                                wholesomeOcean.push(fish);
                            }
                            if (currentObject instanceof Fish2) {
                                let size: number = 2;
                                let x: number = canvas.width + 100;
                                let y: number = Math.random() * canvas.height;
                                let dx: number = Math.random() * 3 + 6;
                                let fish2: Fish2 = new Fish2(x, y, speed * dx, "#FFDC00", size);

                                wholesomeOcean.push(fish2);
                            }
                        }
                    } else {
                        if (currentObject instanceof Fish3) {
                            wholesomeOcean.splice(i, 1);

                            playerFish.scale -= playerFish.scale / 2;
                            if (playerFish.scale <= 0.9) {
                                myalert();
                            } else {
                                let size: number = 5000;
                                let x: number = canvas.width + 100;
                                let y: number = Math.random() * canvas.height;
                                let dx: number = Math.random() * 3 + 6;
                                let fish3: Fish3 = new Fish3(x, y, speed * dx, "#65ff00", size);

                                wholesomeOcean.push(fish3);
                                score -= 50;
                                document.getElementById("highscore").innerHTML = "Highscore: " + score;
                            }



                        } else if (currentObject instanceof Fish2) {
                            myalert();
                        } else if (scoreUploadOpen == true) {
                            console.log("My size: " + playerFish.scale + ", His size: " + currentObject.size);
                            myalert();
                        }
                    }

                }

            }

        }
        if (!menu) playerFish.update();
        playTime = window.setTimeout(update, 1000 / fps);
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

    function moveSomething(e: KeyboardEvent): void {

        switch (e.keyCode) {
            case 37: // left key pressed break; 
                if (playerFish.x >= 0 + (100 * playerFish.scale / 2)) {
                    playerFish.dx = -15;
                }
                break;
            case 38: // up key pressed break;
                if (playerFish.y >= 0 + (30 * playerFish.scale / 2)) {
                    playerFish.dy = -15;
                }
                break;
            case 39: // right key pressed break;
                if (playerFish.x <= canvas.width - (100 * playerFish.scale / 2)) {
                    playerFish.dx = 15;
                }
                break;
            case 40: // down key pressed break;
                if (playerFish.y <= canvas.height - (30 * playerFish.scale / 2)) {
                    playerFish.dy = 15;
                }
                break;
        }
    }

    function moveNothing(e: KeyboardEvent): void {

        switch (e.keyCode) {
            case 37: // left key pressed break; 
                if (playerFish.x >= 0 + (100 * playerFish.scale / 2)) {
                    playerFish.dx = 0;
                }
                break;
            case 38: // up key pressed break;
                if (playerFish.y >= 0 + (30 * playerFish.scale / 2)) {
                    playerFish.dy = 0;
                }
                break;
            case 39: // right key pressed break;
                if (playerFish.x <= canvas.width - (100 * playerFish.scale / 2)) {
                    playerFish.dx = 0;
                }
                break;
            case 40: // down key pressed break;
                if (playerFish.y <= canvas.height - (30 * playerFish.scale / 2)) {
                    playerFish.dy = 0;
                }
                break;
        }
    }
}
