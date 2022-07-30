import axios from 'axios';
import store from 'store';

import { api_base } from './assets/modules/config.js';
import { byId, btn_loading, Toast } from './assets/modules/yamasha_utility.js';


let MOB_NUMBER = byId("MOB_NUMBER");
let PASS = byId("PASS");
//   let  err_div = byId("err_div");
let login_btn = byId("login_btn");

function errorMessage(msg) {
    Toast.fire({
        icon: 'error',
        title: msg
    });
}
window.login = login;
function login() {
    btn_loading(login_btn, "Loading...", true);
    var bodyFormData = new URLSearchParams();

    bodyFormData.append("MOB_NUMBER", MOB_NUMBER.value);
    bodyFormData.append("PASS", PASS.value);

    axios
        .post(api_base + "login.php", bodyFormData)
        .then(function (response) {
           let res = response.data;
                    console.log(res);
            btn_loading(login_btn, "Loading...", false);

            if (response.data.status == 0) {
                // loading(false);
                errorMessage(response.data.msg);
            }
            if (response.data.status == 1) {
                // location.replace('./index.html');
                // storing data to local storage
                store.set("yamasha_user_data", {
                    ID: response.data.ID,
                    TOKEN: response.data.TOKEN,
                    NAME: response.data.NAME,
                });
                location.replace("./index.html");
            }
            if (response.data.status == -1) {


                let url = "./email_action.html?rv=" + response.data.ID;
                location.href = url;
            }
            if (response.data.status == -2) {



                let url = "./ip_action.html?r_id=" + response.data.ID + "&r_ip=" + response.data.IP;

                location.href = url;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}