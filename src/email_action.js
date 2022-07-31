import axios from 'axios';
// import store from 'store';
import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, d_none } from './assets/modules/yamasha_utility.js';




// getting elements by id



let email_sending = byId('email_sending');
let email_sended_p = byId('email_sended_p');
let email_sended_img = byId('email_sended_img');
let email_sended_para = byId('email_sended_para');
let email_sending_img = byId('email_sending_img');
let before_email_send_para = byId('before_email_send_para');
let v_done_img = byId('v_done_img');
let verifying_img = byId('verifying_img');
let verification_div_one = byId('verification_div_one');
let verification_div_two = byId('verification_div_two');
let v_loading = byId('v_loading');
let v_done = byId('v_done');

// reading query
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let id;
let action;
// required verification
if (params.rv) {

    id = params.rv;
    action = 'send_v_link';
    d_none(verification_div_one, false);
}
//  verify link
if (params.vl) {
    id = params.vl;
    action = 'validate_v_link';
    d_none(verification_div_two, false);
}

function email_action_fun(id, action) {
    var bodyFormData = new URLSearchParams();

    bodyFormData.append('id', id);
    bodyFormData.append('action', action);
    bodyFormData.append('host_href', new URL('email_action.html', window.location.href));

    axios
        .post(api_base + 'email_action.php', bodyFormData)
        .then(function (response) {
            let res = response.data;
            console.log(response.data);
            res = response.data;

            if (response.data.status == 0) {
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
                    },
                });
            }
            if (response.data.status == 1) {
                d_none(email_sending, true);
                d_none(before_email_send_para, true);
                d_none(email_sended_p, false);
                d_none(email_sended_img, false);
                d_none(email_sended_para, false);
                d_none(email_sending_img, true);

            }
            if (response.data.status == 2) {
                d_none(v_loading, true);
                d_none(v_done, false);
                d_none(v_done_img, false);
                d_none(verifying_img, true);

                setTimeout(() => {
                    location.replace('index.html');
                }, 3000);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
email_action_fun(id, action);
