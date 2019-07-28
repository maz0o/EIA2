namespace endabgabe {
    //let serverAddress: string = "https://<your>.herokuapp.com/";

    export function insert(): void { /* geht inputelemente durch und baut mit einem command die eingegebenen Daten an den query String */
        let query: string = "command=insert";
        query += "&name=" + playerName;
        query += "&score=" + score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
        console.log("Test");
    }

    function sendRequest(_query: string, _callback: EventListener): void { /* Sendet die Anfrage mit dem command refresh */
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function searchRequest(_event: Event): void {
    let query: string = "command=searchRequest";
    query += "&" + "matrikel=" + (<HTMLInputElement>document.getElementById("search")).value;
    sendRequest(query, handleFindResponse);
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
           /*  let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson); */
            let scoresPlayerArray: PlayerData[] = JSON.parse(xhr.response);

            for (let i: number = 0; i < scoresPlayerArray.length; i++  ) {
                scoresPlayerArray.sort(bestScores);
            }

            document.getElementById("scoreList").innerHTML = "";

            for (let i: number = 0; i < 5; i++) {
                let scoreNew: HTMLElement = document.createElement("div");
                document.getElementById("scoreList").appendChild(scoreNew);
                scoreNew.innerHTML = `${scoresPlayerArray[i].name} : ${scoresPlayerArray[i].score}`;
            }
        }
    }

    function bestScores(_1: PlayerData, _2:PlayerData): number {
        if (_1.score < _2.score) {
            return 1;
        }
        if (_1.score > _2.score) {
            return -1;
        }
        return 0;
    }

}