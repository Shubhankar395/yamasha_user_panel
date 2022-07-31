
import axios from 'axios';
import store from 'store';
// import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, d_none, loginCheck, logOut, setUsernameInHeader, Toast } from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();





const data_table_body = byId('data_table_body');
const subscribe_btn = byId('subscribe_btn');
const unsubscribe_btn = byId('unsubscribe_btn'); 

function fetch_advisory_fun() {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append('action', 'get');

    console.log(store.get('yamasha_user_data1').ID);

    // return false;
    bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
    bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
    axios.post(api_base + 'advisory.php', bodyFormData)
        .then(function (response) {
            const res = response.data;
            console.log(res);
            if (res.status === 0) {
                Toast.fire({
                    icon: 'error',
                    title: res.msg
                });
            }
            if (res.status === 1) {
                // console.log(res.res_data[0]);
                // adding data to table
                let i = 0;
                while (res.res_data.length > i) {
                    // let   init_data = res.res_data[i]
                    const time = moment(res.res_data[i].TIME * 1000).startOf().fromNow();
                    data_table_body.innerHTML += `
                            <tr>
                                                <td>${time}</td>
                                                <td>${res.res_data[i].COMPANY_NAME}</td>
                                                <td>${res.res_data[i].CATEGORY}</td>
                                                <td>${res.res_data[i].MESSAGE}</td>
                                                <td>${res.res_data[i].BUY_PRICE}</td>
                                                <td>${res.res_data[i].SL_PRICE}</td>
                                               
                                              
                                             
                                            
                                                
                                           </tr>`;
                    i++;
                }

                // Initiate Datatables

            }
            if (res.status === -1) {
                logOut();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
fetch_advisory_fun();


function client_alerts_data_fun(action) {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append('action', action);
    bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
    bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
    axios.post(api_base + 'client_alerts_data.php', bodyFormData)
        .then(function (response) {
            const res = response.data;
            console.log(res);
            if (res.status === 0) {
                Toast.fire({
                    icon: 'error',
                    title: res.msg
                });
            }
            if (res.status === 1) {

                if (res.ADVISORY_SUBSCRIBE_STATUS === 0) {
                    d_none(subscribe_btn, false);
                }
                if (res.ADVISORY_SUBSCRIBE_STATUS === 1) {
                    d_none(unsubscribe_btn, false);
                }
            }
            if (res.status === 2) {


                d_none(subscribe_btn, true);


                d_none(unsubscribe_btn, false);
                Toast.fire({
                    icon: 'success',
                    title: 'advisory alerts Subscribed'
                });


            }
            if (res.status === 3) {


                d_none(subscribe_btn, false);


                d_none(unsubscribe_btn, true);
                Toast.fire({
                    icon: 'warning',
                    title: 'advisory alerts Unsubscribed'
                });

            }
            if (res.status === -1) {
                logOut();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
window.client_alerts_data_fun = client_alerts_data_fun;
client_alerts_data_fun('advisory_get');