

import axios from 'axios';
import Swal from 'sweetalert2';
import { api_base } from './assets/modules/config';
import { btn_loading, byId, d_none } from './assets/modules/yamasha_utility';







const EMAIL_INPUT = document.getElementById('EMAIL_INPUT');

const change_pass_token = byId('change_pass_token');
const change_pass_id = byId('change_pass_id');
const PASS = byId('PASS');
const PASS2 = byId('PASS2');

const stepOneDiv = byId('stepOneDiv');
const stepThreeDiv = byId('stepThreeDiv');

const proceedSubmitBtn = byId('proceedSubmitBtn');
const stepThreeBtn = byId('stepThreeBtn');



// reading query
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

console.log(params);
if (params.token && params.id) {
    change_pass_token.value = params.token;
    change_pass_id.value = params.id;
    console.log('trig');
    d_none(stepOneDiv, true);
    d_none(stepThreeDiv, false);
}



// EMAIL_INPUT;
function proceedFun(action) {
    if(action ==='change_pass'){
          // validating pass
    if (PASS.value !== PASS2.value) {
        Swal.fire({
            icon: 'error',
            title: 'Password not matching',


        });
        return false;
    }
    }
  

    if(action ==='send_email'){

 if (!EMAIL_INPUT.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {


    Swal.fire({
        icon: 'error',
        title: 'Enter valid Email',


    });
    return false;
}
    }
   
    btn_loading(proceedSubmitBtn, 'Loading...', true);
    btn_loading(stepThreeBtn, 'Loading...', true);

    var bodyFormData = new URLSearchParams();

    bodyFormData.append('email', EMAIL_INPUT.value);
    bodyFormData.append('action', action);
    bodyFormData.append('target_href', window.location.href);
    bodyFormData.append('change_pass_token', change_pass_token.value);
    bodyFormData.append('change_pass_id', change_pass_id.value);
    bodyFormData.append('PASS', PASS.value);

    axios
        .post(api_base + 'email_forget_pass.php', bodyFormData)
        .then(function (response) {
            let res = response.data;
            console.log(response.data);
            res = response.data;
            btn_loading(proceedSubmitBtn, 'Loading...', false);
            btn_loading(stepThreeBtn, 'Loading...', false);

            if (response.data.status === 0) {
                res.msg;
                Swal.fire({
                    icon: 'error',
                    title: res.msg,


                });
            }
            if (response.data.status === 1) {
                d_none(stepOneDiv, true);
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sended successfully',
                    text: 'Check your registered email and click on sended link to forget your password ',

                });

            }
            if (response.data.status === 2) {
                d_none(stepThreeDiv, true);
                Swal.fire({
                    icon: 'success',
                    title: 'Password Reset Complete',
                    text: 'Now you can login with your new password',

                });

                setTimeout(() => {
                    location.replace('login.html');
                }, 1000);
            }
        })
        .catch(function (error) {
            console.log(error);
        });


}

proceedSubmitBtn.addEventListener('click', function () { proceedFun('send_email'); }, false);
stepThreeBtn.addEventListener('click', function () { proceedFun('change_pass'); }, false);



