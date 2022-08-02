import axios from 'axios';
import { byId, logOut, Toast } from './assets/modules/yamasha_utility';

import moment from 'moment';
import store from 'store';
import Swal from 'sweetalert2';
import { api_base } from './assets/modules/config';

window.logOut = logOut;


const yamasha_stock_price_display = byId('yamasha_stock_price_display');
const yamasha_stock_gain_display = byId('yamasha_stock_gain_display');
const stock_quantity_input = byId('stock_quantity_input');
const stock_buy_btn = byId('stock_buy_btn');
const data_table_body = byId('data_table_body');


function yamasha_stock_action_fun(action, stock_quantity) {

    if (action === 'buy_stocks' && stock_quantity < 1) {

        Toast.fire({
            icon: 'error',
            title: 'enter stock quantity properly'
        });

        return false;
    }



    var bodyFormData = new URLSearchParams();

    bodyFormData.append('action', action);
    bodyFormData.append('stock_quantity', stock_quantity);
    bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
    bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
    axios.post(api_base + 'yamasha_stock.php', bodyFormData)
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

                yamasha_stock_price_display.innerHTML = res.yamasha_stock_price;
                yamasha_stock_gain_display.innerHTML = res.yamasha_stock_gain;





            }
            if (res.status === 2) {

                Swal.fire({
                    icon: 'success',
                    title: 'Purchased Complete',

                });


                setTimeout(() => {
                    location.reload();
                }, 1000);



            }
            if (res.status === 3) {


                // adding data to table
                let i = 0;
                while (res.res_data.length > i) {
                    // let   init_data = res.res_data[i]
                    // const time = moment(res.res_data[i].TIME * 1000).startOf().fromNow();

                    const date =moment(res.res_data[i].TIME * 1000).format('DD/MM/YYYY');
                    const time =moment(res.res_data[i].TIME * 1000).format('LT');
                     
                    const after_year_date=moment(res.res_data[i].TIME * 1000).add(1, 'y');

                    const lock_in_time = after_year_date.fromNow(true);
                    
                    data_table_body.innerHTML += `
            <tr>
                <td>${date} ${time}</td>
              
                <td>${res.res_data[i].QUANTITY}</td>
                <td>${res.res_data[i].PRICE}</td>
                <td>${lock_in_time}</td>
            
            
            
            
            
            
            </tr>`;
                    i++;
                }


            }


            if (res.status === -1) {
                logOut();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

yamasha_stock_action_fun('get_price', 0);
yamasha_stock_action_fun('get_history', 0);

stock_buy_btn.addEventListener('click', function () { yamasha_stock_action_fun('buy_stocks', stock_quantity_input.value); }, false);

