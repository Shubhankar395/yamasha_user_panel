// let { WebSocket } = require("smartapi-javascript");
// import axios from 'axios';
// import store from 'store';
// import pako from 'pako ';
import { web_socket } from './assets/modules/web_socket.js';

// // import Swal from 'sweetalert2';
// // import { DataTable } from "simple-datatables";
// // import moment from 'moment';
// import { api_base } from './assets/modules/config.js';
// import { byId, loginCheck, logOut, setUsernameInHeader, Toast, d_none, btn_loading } from './assets/modules/yamasha_utility.js';

// loginCheck();
// window.logOut = logOut;
// setUsernameInHeader();


let ws = new web_socket({
    client_code: "M101612",
    feed_token: "0991461659"
});

ws.connect()
    .then(() => {
        ws.runScript("nse_cm|2885&nse_cm|1594&nse_cm|11536", "mw"); // SCRIPT: nse_cm|2885, mcx_fo|222900  TASK: mw|sfi|dp

        // setTimeout(function () {
        //     ws.close();
        // }, 3000);
    });

// ws.on('tick', receiveTick);


// function receiveTick(data) {
//     console.log("receiveTick:::::", data);
// }

// {"task":"cn","channel":"","token":"0991461659","user": "M101612","acctid":"M101612"}
// {"task":"mw","channel":"nse_cm|2885&nse_cm|1594&nse_cm|11536","token":"0991461659","user": "M101612","acctid":"M101612"}

// Create WebSocket connection.
// const socket = new WebSocket('wss://omnefeeds.angelbroking.com/NestHtml5Mobile/socket/stream');

// Connection opened
// socket.addEventListener('open', function (event) {

//     console.log(event)
//     socket.send('{"task":"cn","channel":"","token":"0991461659","user": "M101612","acctid":"M101612"}');

//     socket.send('{"task":"mw","channel":"nse_cm|2885&nse_cm|1594&nse_cm|11536","token":"0991461659","user": "M101612","acctid":"M101612"}');
// });

// Listen for messages
// socket.addEventListener('message', function (event) {


//     let strData = atob(event.data);

//     // Convert binary string to character-number array
//     var charData = strData.split('').map(function (x) { return x.charCodeAt(0); });

//     // Turn number array into byte-array
//     var binData = new Uint8Array(charData);

//     // Pako magic
//     var result = _atos(pako.inflate(binData));

//     console.log(result)
//     // trigger("tick", [JSON.parse(result)]);


//     function _atos(array) {
//         var new_array = [];
//         try {
//             for (var i = 0; i < array.length; i++) {
//                 new_array.push(String.fromCharCode(array[i]));
//             }
//         } catch (e) { console.log(e)}

//         return new_array.join('');
//     }

//     // trigger event callbacks
//     // function trigger(e, args) {
//     //     let triggers;
//     //     if (!triggers[e]) return
//     //     for (var n = 0; n < triggers[e].length; n++) {
//     //         triggers[e][n].apply(triggers[e][n], args ? args : []);
//     //     }
//     // }
// });