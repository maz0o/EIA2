import { isContext } from "vm";

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("keydown", moveSomething, false);

let context = canvas.getContext("2d");

function init(): void {
    canvas = <HTMLCanvasElement>document.getElementById("canvas");
    crc = canvas.getContext("2d");

    /*let wholesomeOcean: WholesomeOcean[] = [];*/



    let fps: number = 30;
    let imageData: ImageData;





    cube();
    moveSomething(moveSomething ?   );

    /*drawBackground();*/

    function cube(): void {
        isContext.clearRect(0, 0, canvas.width, canvas.height);

        crc.beginPath();
        crc.lineWidth = 4;
        crc.strokeStyle = "green";
        crc.rect(30, 30, 50, 50);
        crc.stroke();
    }

    function moveSomething(e: KeyboardEvent): void {


        let deltaX: number = 0;
        let deltaY: number = 0;

        switch (e.keyCode) {
            case 37:
                deltaX -= 2;
                break;
            case 38:
                deltaY -= 2;
                break;
            case 39:
                deltaX += 2;
                break;
            case 40:
                deltaY += 2;
                break;
        }

    }
}

    /*function update(): void {

        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < wholesomeOcean.length; i++) {
            wholesomeOcean[i].update();
        }
        window.setTimeout(update, 1000 / fps);
    }

    imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
    */


    //klasse: Bewegungsmethoden//
}
