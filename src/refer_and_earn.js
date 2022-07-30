

import axios from 'axios';
import store from 'store';
// import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import ClipboardJS from 'clipboard';
import { api_base } from './assets/modules/config.js';
import { byId, loginCheck, logOut, setUsernameInHeader, Toast } from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();











        //updating wallets
        let   referral_points = byId('referral_points');
        let   t_body = byId('t_body');
        let   refer_link = byId('refer_link');

       
let url = new URL( './register.html',location.href)
        // if (location.host == '192.168.100.5') {
        //     url = 'http://192.168.100.5/yamasha_v1/user_panel/register.html';
        // } else {
        //     url = 'https://user.yamasha.in/register.html';
        // }
        refer_link.value = url + '?refer=' + store.get('yamasha_user_data1').ID;

        new ClipboardJS('#copy_btn');

        const showReferrals = () => {

            const showReferralsList = document.getElementById('refList');
            const viewRef = document.getElementById('referrals');

            showReferralsList.style.display = "block";
            viewRef.style.display = "none";

        };
        window.showReferrals=showReferrals;
     
        const show = () => {
            const hide = document.getElementById('hide');
            const d_show = document.getElementById("show");
            d_show.style.display = "block";
            hide.style.display = "none";
        };
        window.show=show;

        function fetchWallet() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

            axios.post(api_base+'wallets.php', bodyFormData)
                .then(function(response) {
                   let res = response.data;
                    console.log(res);

                    if (res.status == 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
                    }
                    if (response.data.status == 1) {
                        referral_points.innerHTML = response.data.REFERRAL;
                    }


                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        fetchWallet();


        function referral_history_fun() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

            axios.post(api_base+'referral_history.php', bodyFormData)
                .then(function(response) {
                  let  res = response.data;
                    console.log(res);

                    if (res.status == 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
                    }
                    if (res.status == 1) {


                        if (res.res_data.length > 0) {
                          let  i = 0;
                            t_body.innerHTML = '';
                            while (res.res_data.length > i) {
let REF_BY_PRIZE_STATUS;
                                if (res.res_data[i].REF_BY_PRIZE_STATUS == 0) {
                                    REF_BY_PRIZE_STATUS = 'Pending';
                                }
                                if (res.res_data[i].REF_BY_PRIZE_STATUS == 1) {
                                    REF_BY_PRIZE_STATUS = 'Success';
                                }
                                if (res.res_data[i].REF_BY_PRIZE_STATUS == 2) {
                                    REF_BY_PRIZE_STATUS = 'Expired';
                                }

                                t_body.innerHTML += `<tr class="table-line ">
                                    <td>
                                        <p class="font-weight-bold">${res.res_data[i].REF_DAT}</p>
                                    </td>
                                    <td>
                                        <p class="text-capitalize">${res.res_data[i].NAME}</p>

                                    </td>
                                    <td class="">
                                        <p>${REF_BY_PRIZE_STATUS}</p>
                                    </td>
                                    <td>
                                        <p class="font-weight-bold">${res.res_data[i].REF_BY_PRIZE_DAT}</p>
                                    </td>
                                </tr>`;

                                i++;
                            }
                        }
                    }


                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        referral_history_fun();
    