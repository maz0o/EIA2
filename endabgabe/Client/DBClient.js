var endabgabe;
(function (endabgabe) {
    //let serverAddress: string = "https://<your>.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + endabgabe.playerName;
        query += "&score=" + endabgabe.score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    endabgabe.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
        console.log("Test");
    }
    endabgabe.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", endabgabe.serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function searchRequest(_event) {
        let query = "command=searchRequest";
        query += "&" + "matrikel=" + document.getElementById("search").value;
        sendRequest(query, handleFindResponse);
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            /*  let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
             output.value = xhr.response;
             let responseAsJson: JSON = JSON.parse(xhr.response);
             console.log(responseAsJson); */
            let scoresPlayerArray = JSON.parse(xhr.response);
            for (let i = 0; i < scoresPlayerArray.length; i++) {
                scoresPlayerArray.sort(bestScores);
            }
            document.getElementById("scoreList").innerHTML = "";
            for (let i = 0; i < 5; i++) {
                let scoreNew = document.createElement("div");
                document.getElementById("scoreList").appendChild(scoreNew);
                scoreNew.innerHTML = `${scoresPlayerArray[i].name} : ${scoresPlayerArray[i].score}`;
            }
        }
    }
    function bestScores(_1, _2) {
        if (_1.score < _2.score) {
            return 1;
        }
        if (_1.score > _2.score) {
            return -1;
        }
        return 0;
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=DBClient.js.map