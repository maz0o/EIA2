"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vm_1 = require("vm");
document.addEventListener("DOMContentLoaded", init);
window.addEventListener("keydown", moveSomething, false);
let context = canvas.getContext("2d");
function init() {
    canvas = document.getElementById("canvas");
    crc = canvas.getContext("2d");
    /*let wholesomeOcean: WholesomeOcean[] = [];*/
    let fps = 30;
    let imageData;
    cube();
    moveSomething(moveSomething ?  : );
    /*drawBackground();*/
    function cube() {
        vm_1.isContext.clearRect(0, 0, canvas.width, canvas.height);
        crc.beginPath();
        crc.lineWidth = 4;
        crc.strokeStyle = "green";
        crc.rect(30, 30, 50, 50);
        crc.stroke();
    }
    function moveSomething(e) {
        let deltaX = 0;
        let deltaY = 0;
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
//# sourceMappingURL=canvas.js.map