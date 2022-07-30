
import axios from 'axios';
import store from 'store';
import { web_socket } from './assets/modules/web_socket.js';
// import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, loginCheck, logOut, setUsernameInHeader, Toast, d_none, btn_loading } from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();




setTimeout(() => {
    location.reload();
}, 1000 * 60 * 5);
loginCheck();
setUsernameInHeader();


console.log(store.get('yamasha_feed_token'));


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function feed_token_fun(action) {
    var bodyFormData = new URLSearchParams();

    bodyFormData.append('action', action);


    axios.post(api_base + 'feed_token.php', bodyFormData)
        .then(function (response) {
            let res = response.data;

            console.log(res);


            if (res.status == 0) {
                Toast.fire({
                    icon: 'error',
                    title: res.msg
                });
            }
            if (res.status == 1) {
                store.set('yamasha_feed_token', res.feed_token);

                if (action == 'update') {
                    // location.reload()
                    index_websocket_fun();
                }
            }


        })
        .catch(function (error) {
            console.log(error);
        });
}
if (!store.get('yamasha_feed_token')) {
    feed_token_fun('get');
}

if (!store.get('yamasha_watch_list_data1')) {
    store.set('yamasha_watch_list_data1', []);
}
// {
//         name: 'HDFCBANK',
//         token: '500180',
//         exch: 'BSE',
//         full_name: 'BSE',


//     }, {
//         name: 'RELIANCE',
//         token: '2885',
//         exch: 'NSE',
//         full_name: 'NSE',

//     }, {
//         name: 'ACC',
//         token: '22',
//         exch: 'NSE',
//         full_name: 'NSE',

//     }
function websocket_fun(mw_command) {


    // let ws = new web_socket('M101612', store.get('yamasha_feed_token'));

    let ws = new web_socket({
        client_code: "M101612",
        feed_token: store.get('yamasha_feed_token')
    });
 
    
    ws.connect()
        .then(() => {
            ws.runScript(mw_command, "mw"); // SCRIPT: nse_cm|2885, mcx_fo|222900  TASK: mw|sfi|dp
    
            // setTimeout(function () {
            //     ws.close();
            // }, 3000);
        });

   



    //add callback method where you can manipulate socket data
    ws.on('tick', receiveTick);

    //user defined function
    function receiveTick(data) {

        // console.log(data);
        if (data == 'Socket Closed') {
            console.log('Socket Closed');
            // location.reload()
            // ws.connection();
            websocket_fun();
        }
        // let result = JSON.parse(data);
        let result = data;
        // console.log(result);



        // checking length
        let i = 0;
        while (result.length > i) {

            if (result[i].name == 'sf') {
                if (result[i].ltt == 'NA') {
                    return false;
                }
                let token = result[i].tk;

                // checking old net change 

                let old_netchng_data = Number(document.getElementById('old_netchng_' + token).innerHTML);

                let diff = Number(result[i].cng) - old_netchng_data;
                let class_name;
                switch (true) {
                    case diff > 0:
                        class_name = 'positive';
                        break;
                    case diff < 0:
                        class_name = 'negative';
                        break;

                    default:
                        class_name = '';
                }

                // updating data to table 

                document.getElementById('ltp_' + token).innerHTML = numberWithCommas(result[i].ltp);
                document.getElementById('netchng_' + token).innerHTML = Number(result[i].cng).toFixed(2);
                if (diff != 0) {
                    document.getElementById('netchng_' + token).className = class_name;
                }
                document.getElementById('percentagechange_' + token).innerHTML = Number(result[i].nc).toFixed(2);

                document.getElementById('old_netchng_' + token).innerHTML = Number(result[i].cng);

            }
            if (result[i].name == 'if') {
                console.log('if');
            }

            // checking connection $ getting new feed token
            if (result[i].task == 'cn') {
                if (result[i].ak == 'nk') {
                    // trigger feed token refresher
                    console.log('feed token expired');
                    feed_token_fun('update');
                }
            }
            i++;
        }


        // if (data.length == 0) {
        //     ws.close();
        // }




    }
}

function watch_list_fun() {


    let watchListArr = store.get('yamasha_watch_list_data1');

    var mw_command = '';

    // creating tables elements
    let t_i = 0;
    document.getElementById('t_body').innerHTML = '';
    if (watchListArr.length > 0) {
        while (watchListArr.length > t_i) {

            document.getElementById('t_body').innerHTML += `<tr class="line">
                    <td class="">
                        <p class="text-light textAlign">${watchListArr[t_i].name} (<span class="badge">${watchListArr[t_i].exch}</span>)</p>
                        <P class="text-light" style="font-size: small; position: relative;">${watchListArr[t_i].full_name}
                        </P>
                    </td>
                    <td>
                        <p class="text-light textAlign"><span id="ltp_${watchListArr[t_i].token}">00.00</span></p>

                    </td>
                    <td class="">
                        <p class="text-light textAlign"><span id="netchng_${watchListArr[t_i].token}"
                                class="">00.00</span><span id="old_netchng_${watchListArr[t_i].token}"
                                class="d-none">00.00</span></p>
                    </td>
                    <td>
                        <p class="text-light textAlign"><span id="percentagechange_${watchListArr[t_i].token}">00.00</span></p>
                    </td>
                    <td>
                    <button class="btn btn-primary" type="button" onclick="watch_list_action_fun('delete', ${t_i})">delete</button>
                    </td>
                </tr>`;
            let mw_e;
            switch (watchListArr[t_i].exch) {
                case 'BSE':
                    mw_e = 'bse_cm';
                    break;
                case 'NSE':
                    mw_e = 'nse_cm';
                    break;
                case 'NFO':
                    mw_e = 'nse_fo';
                    break;
                case 'MCX':
                    mw_e = 'mcx_fo';
                    break;
                case 'NCDEX':
                    mw_e = 'ncx_fo';
                    break;
                case 'CDS':
                    mw_e = 'cde_fo';
                    break;
                default:
                    mw_e = '';
            }
            var and = '';
            if (t_i > 0) {
                and = '&';
            }

            mw_command = `${mw_command}${and}${mw_e}'|'${watchListArr[t_i].token}`;

            t_i++;
        }
        websocket_fun(mw_command);
    }

}
watch_list_fun();

window.watch_list_action_fun = watch_list_action_fun;
function watch_list_action_fun(action, data) {
    
    console.log(store.get('yamasha_watch_list_data1'));
    let old_arr = store.get('yamasha_watch_list_data1');
    let new_arr;
    if (action == 'delete') {

        if (data > -1) {
            old_arr.splice(data, 1); // 2nd parameter means remove one item only
        }
        new_arr = old_arr;

    }
    if (action == 'add') {
        old_arr.push(data);
        new_arr = old_arr;
        d_none(byId('search_res_div'), true);
    }

    store.set('yamasha_watch_list_data1', new_arr);
    // console.log('actin');
    // console.log(store.get('yamasha_watch_list_data1'));
    watch_list_fun();
}

function index_websocket_fun() {


    let ws = new web_socket({
        client_code: "M101612",
        feed_token: store.get('yamasha_feed_token')
    });
 

    ws.connect()
    .then(() => {
        ws.runScript('bse_cm|SENSEX&nse_cm|Nifty 50', "sfi");// SCRIPT: nse_cm|2885, mcx_fo|222900  TASK: mw|sfi|dp

        // setTimeout(function () {
        //     ws.close();
        // }, 3000);
    });




    //add callback method where you can manipulate socket data
    ws.on('tick', receiveTick);

    //user defined function
    function receiveTick(data) {

        // console.log(data);
        if (data == 'Socket Closed') {
            console.log('Socket Closed');
            index_websocket_fun();
            // location.reload()
            // ws.connection();
        }
        var result = data;
        // console.log("index websocket");
        // console.log(result);



        // checking length
        var i = 0;

        while (result.length > i) {

            if (result[i].name == 'if') {
                if (result[i].tvalue == 'NA') {
                    return false;
                }
                var token = result[i].tk;
                // console.log(token);
                if (token == 'Nifty 50') {
                    token = 'nifty';
                }
                if (token == 'SENSEX') {
                    token = 'sensex';
                }
                // console.log(token);

                // checking old net change 

                let old_netchng_data = Number(document.getElementById('old_cng_' + token).innerHTML);

                // console.log(old_netchng_data)

                let diff = Number(result[i].cng) - old_netchng_data;
                let class_name;
                switch (true) {
                    case diff > 0:
                        class_name = 'positive';
                        break;
                    case diff < 0:
                        class_name = 'negative';
                        break;

                    default:
                        class_name = '';
                }

                // updating data to table 

                document.getElementById('iv_' + token).innerHTML = numberWithCommas(result[i].iv);
                document.getElementById('cng_' + token).innerHTML = Number(result[i].cng).toFixed(2);
                if (diff != 0) {
                    document.getElementById('cng_' + token).className = class_name;
                }
                document.getElementById('nc_' + token).innerHTML = Number(result[i].nc).toFixed(2);

                document.getElementById('old_cng_' + token).innerHTML = Number(result[i].cng);

            }


            // checking connection $ getting new feed token
            if (result[i].task == 'cn') {
                if (result[i].ak == 'nk') {
                    // trigger feed token refresher
                    console.log('feed token expired');
                    feed_token_fun('update');
                }
            }
            i++;
        }


        // if (data.length == 0) {
        //     ws.close();
        // }




    }
}
index_websocket_fun();
window.search_fun = search_fun;
function search_fun() {
    let query = byId('search_input').value;

    let search_btn = byId('search_btn');
    btn_loading(search_btn, 'Searching', true);

    if (query == '') {
        btn_loading(search_btn, '', false);
        return false;
    }
    var bodyFormData = new URLSearchParams();

    bodyFormData.append('action', 'search');
    bodyFormData.append('query', query);


    axios.post(api_base + 'script_master.php', bodyFormData)
        .then(function (response) {
            btn_loading(search_btn, '', false);
            let res = response.data;

            console.log(res);
            let search_res_div = byId('search_res_div');

            if (res.status == 0) {
                Toast.fire({
                    icon: 'error',
                    title: res.msg
                });
            }
            if (res.status == 1) {
                //    console.log(res.res_data.length);
                if (res.res_data.length > 0) {
                    d_none(search_res_div, false);
                    let i = 0;
                    search_res_div.innerHTML = '';
                    while (res.res_data.length > i) {
                        search_res_div.innerHTML += ` <button type="button" class="list-group-item list-group-item-action"onclick="watch_list_action_fun('add', {name: '${res.res_data[i].name}',token:'${res.res_data[i].token}',exch: '${res.res_data[i].exch}',full_name: '${res.res_data[i].full_name}'})">
                            ${res.res_data[i].name} (<span class="badge">${res.res_data[i].exch}</span>) <br>${res.res_data[i].full_name}</button>`;
                        i++;
                    }
                    setTimeout(() => {
                        d_none(search_res_div, true);
                    }, 10000);
                }
            }


        })
        .catch(function (error) {
            console.log(error);
        });


}
