/*
Aufgabe: <Aufgabe 5 - Server>
Name: <Marco Zaretzke>
Matrikel: <260535>
Datum: <30.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

import * as Http from "http";  //  Es wird ein HTTP Objekt erstellt, der interpreter sucht nach jeden möglichen import im http modul und hängt eins nach dem anderen dem http objekt zu.
import * as Url from "url";


namespace L07_Server {
	console.log("Starting server"); // Gibt in der Konsole "Starting server" aus.
	let port: number = Number(process.env.PORT); // Eine Variable vom Typ Number wird deklariert 
	if (!port)						// hier wird der "environment variable PORT" auf 8100 gesetzt, das heißt das dass "listening" immer auf dem port 8100 stattfindent.
		port = 8100;



	let server: Http.Server = Http.createServer(); // Eine Variable mit dem Namen Server vom Typ "Http.server" wird erstellt
	server.addListener("request", handleRequest);  // Wenn das Event "request" stattfindet wird die Funktion handleRequest ausgeführt
	server.addListener("listening", handleListen); // Wenn das Event "listening" stattfindet wird die Funktion handleListen ausgeführt
	server.listen(port);


	function handleListen(): void { // wenn das Event "Listening" abgerufen wird, wird die funktion ausgeführt
		console.log("Listening");  // Gibt in der Konsole "Listening" aus.
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Die Funktion erhält eine Request und eine Response
		console.log("I hear voices!"); // Gibt in der Konsole "I hear voices!" aus.
		console.log(_request.url);

		_response.setHeader("content-type", "text/html; charset=utf-8"); // Die Ausgabe wird als Text im HTML-Format mit ausgegegben 
		_response.setHeader("Access-Control-Allow-Origin", "*"); // Hier wird festgelegt ob die übermittelten Informationen Darf 

		/* //Variablen definieren und Wert zuordnen
		for (let i: number = 0; i < urlInfo.length; i++) {
			let valAndName: string[] = urlInfo.splice("=");
			let valueName = valAndName[0];
			let value: number = Number(valAndName[1]);
			drawHtml(valueName, value);
		} */

		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query) {
			_response.write(key + " : " + url.query[key] + "<br/>");
		}
		_response.end(); // Sendet alle derzeit gepufferten Ausgaben an den Client, beendet die Ausführung der Seite und löst das EndRequest-Ereignis aus.
	}
}

//  /?Matcha=2&Thunder=0&Melon=0&Fudge=0&Grannys+Apple+Pie=0&Cinnamon+Heaven=2&Cookie+Dough=0&Sprinkles=0&Peanut+Butter+Cups=0&select=cone
