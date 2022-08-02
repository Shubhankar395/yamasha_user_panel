'use strict';
import axios from 'axios';
import store from 'store';
import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, loginCheck, logOut, setUsernameInHeader, Toast } from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();


let a =123;

 a='abc';
 a;




//updating wallets
const main_wallet_span = byId('main_wallet_span');
const yamasha_stock_price = byId('yamasha_stock_price');
const yamasha_stock_gain = byId('yamasha_stock_gain');

function fetchWallet() {
    var bodyFormData = new URLSearchParams();

    bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
    bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

    axios.post(api_base + 'wallets.php', bodyFormData)
        .then(function (response) {

            const res = response.data;
            console.log(response.data);

            if (response.data.status === 0) {
                Toast.fire({
                    icon: 'error',
                    title: res.msg
                });
            }
            if (response.data.status === 1) {
                main_wallet_span.innerHTML = response.data.MAIN;
            }
            if (res.status === -1) {
                logOut();
            }


        })
        .catch(function (error) {
            console.log(error);
        });
}
fetchWallet();

function fetch_yamasha_stock_data_fun() {
    var bodyFormData = new URLSearchParams();

    bodyFormData.append('action', 'get_price');
    bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
    bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
    axios.post(api_base + 'yamasha_stock.php', bodyFormData)
        .then(function (response) {
            const res = response.data;
            console.log(res);


            if (res.status === 0) {

                Swal.fire({
                    icon: 'error',
                    title: res.msg,
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
            }
            if (res.status === 1) {

                yamasha_stock_price.innerHTML = res.yamasha_stock_price;
                yamasha_stock_gain.innerHTML = res.yamasha_stock_gain;





            }
            if (res.status === -1) {
                logOut();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
fetch_yamasha_stock_data_fun();
