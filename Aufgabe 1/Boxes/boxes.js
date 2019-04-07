var Boxes;
(function (Boxes) {
    let n = 5;
    let c;
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50;
        x = (x + 170) % 400;
        switch (i) {
            case 0:
                c = "#ff0000";
                break;
            case 1:
            case 4:
                c = "#00ff00";
                break;
            case 3:
                continue;
            default:
                c = "#0000ff";
        }
        for (let a = 50; a > 0; a -= 20) {
            placeDiv(c, x, y, a, a);
            if (i == 4)
                break;
        }
    }
    function placeDiv(_color, _x, _y, _width, _height) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        //Diese Art der CSS Zuweisung ist nicht schön und sollte vermieden werden.
        //Eine css Datei anzulegen ist deutlich besser aber in diesem Fall nicht optimal,
        //da jedes Objekt einige individuelle Attribute hat.
        //Was sich gruppieren lässt, sollte stattdessen als css Klasse angelegt werden.
        let s = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
})(Boxes || (Boxes = {}));
//# sourceMappingURL=boxes.js.map