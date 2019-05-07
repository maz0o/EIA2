"use strict";
/*
Aufgabe: <Aufgabe 5 - Server>
Name: <Marco Zaretzke>
Matrikel: <260535>
Datum: <30.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //  Es wird ein HTTP Objekt erstellt, der interpreter sucht nach jeden möglichen import im http modul und hängt eins nach dem anderen dem http objekt zu.
var L07_Server;
(function (L07_Server) {
    console.log("Starting server"); // Gibt in der Konsole "Starting server" aus.
    let port = Number(process.env.PORT); // Eine Variable vom Typ Number wird deklariert 
    if (!port) // hier wird der "environment variable PORT" auf 8100 gesetzt, das heißt das dass "listening" immer auf dem port 8100 stattfindent.
        port = 8100;
    let server = Http.createServer(); // Eine Variable mit dem Namen Server vom Typ "Http.server" wird erstellt
    server.addListener("request", handleRequest); // Wenn das Event "request" stattfindet wird die Funktion handleRequest ausgeführt
    server.addListener("listening", handleListen); // Wenn das Event "listening" stattfindet wird die Funktion handleListen ausgeführt
    server.listen(port);
    function handleListen() {
        console.log("Listening"); // Gibt in der Konsole "Listening" aus.
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Gibt in der Konsole "I hear voices!" aus.
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Die Ausgabe wird als Text im HTML-Format mit ausgegegben 
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Hier wird festgelegt ob die übermittelten Informationen Darf 
        let urlInfo = _request.url.split("&");
        for (let i = 0; i < urlInfo.length; i++) {
            _response.write(urlInfo[i]);
        }
        //_response.write(_request.url); // Die request URL wird in die response geschrieben
        _response.end(); // Sendet alle derzeit gepufferten Ausgaben an den Client, beendet die Ausführung der Seite und löst das EndRequest-Ereignis aus.
    }
})(L07_Server || (L07_Server = {}));
//# sourceMappingURL=Server.js.map