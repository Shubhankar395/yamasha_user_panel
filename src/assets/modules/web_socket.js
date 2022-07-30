import pako from 'pako ';

let triggers = {
    "connect": [],
    "tick": []
};

export let web_socket = function (params) {
    let self = this;

    let url = params.url || "wss://omnefeeds.angelbroking.com/NestHtml5Mobile/socket/stream";

    let ws = null;
    let client_code = params.client_code || null;
    let feed_token = params.feed_token || null;
    //     let  script = params.script || null;
    //  lettask = params.task || null;

    this.connect = function () {
        return new Promise((resolve, reject) => {
            if (client_code === null || feed_token === null) return "client_code or feed_token or task is missing";

            //    ws = new web_socket(url, null, { rejectUnauthorized: false });
            ws = new WebSocket(url);

            ws.onopen = function onOpen(event) {
                event;
                var _req = '{"task":"cn","channel":"","token":"' + feed_token + '","user": "' + client_code + '","acctid":"' + client_code + '"}';
                ws.send(_req);

                setInterval(function () {
                    var _hb_req = '{"task":"hb","channel":"","token":"' + feed_token + '","user": "' + client_code + '","acctid":"' + client_code + '"}';
                    ws.send(_hb_req);
                }, 60000);
                resolve();
            };
            ws.onmessage = function (event) {
                let strData = atob(event.data);

                // Convert binary string to character-number array
                var charData = strData.split('').map(function (x) { return x.charCodeAt(0); });

                // Turn number array into byte-array
                var binData = new Uint8Array(charData);

                // Pako magic
                var result = _atos(pako.inflate(binData));

                console.log(result)
                trigger("tick", [JSON.parse(result)]);
            };
            ws.onerror = function (event) {
                console.log("error::", event);
                self.connect();
                reject(event);
            };
            ws.onclose = function (event) {
                event;
                console.log("Socket closed");
            };
        });
    };

    this.runScript = function (script, task) {
        if (task === null) return "task is missing";
        if (task === "mw" || task === "sfi" || task === "dp") {
             script ;   //"nse_cm|2885&nse_cm|1594&nse_cm|11536";
            var _req = '{"task":"' + task + '","channel":"' + script + '","token":"' + feed_token + '","user": "' + client_code + '","acctid":"' + client_code + '"}';
            ws.send(_req);
        } else return "Invalid task provided";
    };

    this.on = function (e, callback) {
        // eslint-disable-next-line no-prototype-builtins
        if (triggers.hasOwnProperty(e)) {
            triggers[e].push(callback);
        }
    };


    this.close = function () {
        ws.close();
    };
};

function _atos(array) {
    var new_array = [];
    try {
        for (var i = 0; i < array.length; i++) {
            new_array.push(String.fromCharCode(array[i]));
        }
    } catch (e) {
        console.log(e);
    }

    return new_array.join('');
}

// trigger event callbacks
function trigger(e, args) {
    if (!triggers[e]) return;
    for (var n = 0; n < triggers[e].length; n++) {
        triggers[e][n].apply(triggers[e][n], args ? args : []);
    }
}

