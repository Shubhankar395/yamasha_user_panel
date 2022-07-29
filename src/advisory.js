
import axios from 'axios';
import store from 'store';
// import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, loginCheck, logOut, setUsernameInHeader, Toast } from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();





let data_table_body = byId('data_table_body');
// yamasha_stock_price = byId('yamasha_stock_price')
// yamasha_stock_gain = byId('yamasha_stock_gain')

function fetch_advisory_fun() {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append('action', 'get');

    console.log(store.get('yamasha_user_data').ID);
  
// return false;
    bodyFormData.append('ID', store.get('yamasha_user_data').ID);
    bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);
    axios.post(api_base + 'advisory.php', bodyFormData)
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
                // console.log(res.res_data[0]);
                // adding data to table
                let i = 0;
                while (res.res_data.length > i) {
                    // let   init_data = res.res_data[i]
                    let time = moment(res.res_data[i].TIME * 1000).startOf().fromNow();
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
            if (res.status == -1) {
                logOut();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
fetch_advisory_fun();
