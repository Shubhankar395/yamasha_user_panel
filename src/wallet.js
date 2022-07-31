import axios from 'axios';
import store from 'store';
import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, loginCheck, logOut, setUsernameInHeader, d_none,btn_loading ,bootstrapAlert ,Toast } from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();


     


      const  main_wallet_span = byId('main_wallet_span');
      const  main_trx_body = byId('main_trx_body');
    //   let  main_wallet_div = byId('main_wallet_div')
      const  deposit_div = byId('deposit_div');
      const  deposit_form = byId('deposit_form');
      const  deposit_txn_amount = byId('deposit_txn_amount');
      const  deposit_user_id = byId('deposit_user_id');
    //   let  verify_dep_btn = byId('verify_dep_btn')
    //   let   img_link = byId('img_link')
    //   let   deposit_err_div = byId('deposit_err_div')
      const   withdraw_err_div = byId('withdraw_err_div');
      const   main_wallet_btn_div = byId('main_wallet_btn_div');
      const   main_trx_div = byId('main_trx_div');
      const   withdraw_history_div = byId('withdraw_history_div');
      const  withdraw_history_body = byId('withdraw_history_body');
      const withdraw_div =byId('withdraw_div');
      
      const  amt_val = byId('amt_val');
      const  wm_select = byId('wm_select');
      const  withdraw_btn = byId('withdraw_btn');

        // reading query
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        // required verification
        if (params.trx_status) {

            if (params.trx_status === 'TXN_SUCCESS') {
                Swal.fire({
                    icon: 'success',
                    title: 'Transaction Successful 😍',
                   
                  
                });
            }else if(params.trx_status === 'TXN_FAILURE') {
                Swal.fire({
                    icon: 'error',
                    title: 'Transaction Failed',
                    text: params.res_msg,
                  
                });
            }

        }

        //updating wallets
        function fetchWallet() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

            axios.post(api_base + 'wallets.php', bodyFormData)
                .then(function (response) {
                   const res = response.data;
                    console.log(response.data);

                    if (res.status === 0) {
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

        function mainTrxFun() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

            axios.post(api_base + 'main_trx.php', bodyFormData)
                .then(function (response) {
                   const res = response.data;
                    console.log(response.data);

                    if (res.status === 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
                    }
                    if (response.data.status === 1) {
                        let     res_index = 0;
                        // console.log(response.data.res_data[res_index]);
                        if (response.data.res_data.length > 0) {
                            while (response.data.res_data.length > res_index) {

                                main_trx_body.innerHTML += `<tr class="table-line">
                                                        <th scope="row">
                                                            <p>${response.data.res_data[res_index].DAT}</p>
                                                        </th>
                                                        <td>
                                                            <p>${response.data.res_data[res_index].COMMENT}</p>

                                                        </td>
                                                        <td >
                                                            <p>${response.data.res_data[res_index].TYPE}</p>
                                                        </td>
                                                        <td>
                                                            <p>${response.data.res_data[res_index].AMOUNT}</p>
                                                        </td>
                                                        <td>
                                                            <p>${response.data.res_data[res_index].CLOSING_BALANCE}</p>
                                                        </td>
                                                    </tr>`;

                                res_index++;

                            }
                        }
                    }


                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        mainTrxFun();

        function withdrawHistoryFun() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
            axios.post(api_base + 'withdraw_history.php', bodyFormData)
                .then(function (response) {
                   const res = response.data;
                    console.log(response.data);

                    if (res.status === 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
                    }
                    if (response.data.status === 1) {
                        let     res_index = 0;
                        withdraw_history_body.innerHTML = '';
                        // console.log(response.data.res_data[res_index]);
                        if (response.data.res_data.length > 0) {
                            while (response.data.res_data.length > res_index) {


                                let STATUS , cancel_btn_class;
                                if (response.data.res_data[res_index].STATUS === 0) {
                                    STATUS = 'Pending';
                                    cancel_btn_class = '';

                                }
                                if (response.data.res_data[res_index].STATUS === 1) {
                                    STATUS = 'Completed';
                                    cancel_btn_class = 'd-none';

                                }
                                if (response.data.res_data[res_index].STATUS === 2) {
                                    STATUS = 'Cancelled';
                                    cancel_btn_class = 'd-none';
                                }

                                withdraw_history_body.innerHTML += `<tr class="table-line ">
                                                          <td>
                                                              <p class="font-weight-bold">${response.data.res_data[res_index].R_DAT}</p>
                                                          </td>
                                                          <td>
                                                              <p class="text-capitalize">${response.data.res_data[res_index].METHOD}(${response.data.res_data[res_index].METHOD_ID})</p>

                                                          </td>
                                                          <td class="">
                                                              <p>${STATUS}</p>
                                                          </td>
                                                          <td>
                                                              <p class="font-weight-bold"> ₹${response.data.res_data[res_index].AMOUNT}</p>
                                                              <p style="position: relative;top: -15px;">{INR}</p>
                                      
                                                          </td>
                                                          <td class="">
                                                              <button id="cw_btn${response.data.res_data[res_index].SN}" onclick="withdraw_cancel_fun(${response.data.res_data[res_index].SN})" class="btn btn-outline-danger ${cancel_btn_class}" >Cancel</button>
                                                          </td>
                                                      </tr>`;

                                res_index++;

                            }
                        }


                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        withdrawHistoryFun();



        // function verify_dep_fun() {
        //     function validURL(str) {
        //         var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        //             '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        //             '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        //             '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        //             '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        //             '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        //         return !!pattern.test(str);
        //     }
        //     urlValidate = validURL(img_link.value)
        //     if (urlValidate == false) {
        //         bootstrapAlert(deposit_err_div, "Enter Valid Url or simply upload your screenshot", "danger", 3)
        //         return false;
        //     }
        //     // call api
        //     var bodyFormData = new URLSearchParams();

        //     bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
        //     bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
        //     bodyFormData.append('img_link', img_link.value);

        //     axios.post(api_base + 'verify_deposit.php', bodyFormData)
        //         .then(function (response) {
        //            let res = response.data;
                    // console.log(response.data);

        //             if (response.data.status == 0) {
        //                 bootstrapAlert(deposit_err_div, response.data.msg, "danger", 3)
        //             }
        //             if (response.data.status == 1) {
        //                 bootstrapAlert(deposit_err_div, `Your Deposit verification request Submitted successfully, 
        //                 this may take maximum 4 hours update balance in your wallet`, "success", 5)
        //                 const myTimeout = setTimeout(() => {
        //                     depositInitFun(false)
        //                 }, 5 * 1000);
        //             }
        //             if (res.status === -1) {
        //                 logOut()
        //             }

        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // }

        function wm_select_fun() {
            // call api
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);


            axios.post(api_base + 'clients_data1.php', bodyFormData)
                .then(function (response) {
                   const res = response.data;
                    console.log(response.data);

                    if (res.status === 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
                    }
                    if (response.data.status === 1) {
                        wm_select.innerHTML = '';
                        if (response.data.UPI_ID !== '') {
                            wm_select.innerHTML += `<option id="upi_select" value="upi">${response.data.UPI_ID}</option>`;
                        }


                        // bank selection
                        if (response.data.BANK_NAME !== '' && response.data.BANK_AC_NUM !== '') {
                            wm_select.innerHTML += `<option id="bank_select" value="bank">${response.data.BANK_NAME}(${response.data.BANK_AC_NUM})</option>`;
                        }

                        if (response.data.UPI_ID === '' && response.data.BANK_NAME === '') {
                            wm_select.innerHTML += `<option value=""> No Data Found</option>`;
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

        function depositInitFun(status) {
            if (status === true) {
                d_none(main_wallet_btn_div, true);
                d_none(deposit_div, false);
                d_none(main_trx_div, true);
            }
            if (status === false) {
                d_none(main_wallet_btn_div, false);
                d_none(deposit_div, true);
                d_none(main_trx_div, false);
            }

        }window.depositInitFun=depositInitFun;

        function deposit_fun() {
            if (deposit_txn_amount.value < 1) {
                return false;
            }
            deposit_form.action = api_base + 'paytm/pgRedirect.php';
            deposit_user_id.value = store.get('yamasha_user_data1').ID;
            deposit_form.submit();
        }window.deposit_fun=deposit_fun;

        function withdrawInitFun(status) {
            if (status === true) {
                d_none(main_wallet_btn_div, true);
                d_none(withdraw_div, false);
                d_none(main_trx_div, true);
                d_none(withdraw_history_div, false);
                wm_select_fun();
            }
            if (status === false) {
                d_none(main_wallet_btn_div, false);
                d_none(withdraw_div, true);
                d_none(main_trx_div, false);
                d_none(withdraw_history_div, true);
            }

        }window.withdrawInitFun=withdrawInitFun;

        function withdraw_fun() {
            btn_loading(withdraw_btn, 'Processing...', true);
            // validating inputs
            if (amt_val.value < 100) {
                bootstrapAlert(withdraw_err_div, 'Withdraw amount must be 100+', 'danger', 3);
                btn_loading(withdraw_btn, 'Processing...', false);
                return false;
            }
            if ((wm_select.value !== 'bank') & (wm_select.value !== 'upi')) {
                bootstrapAlert(withdraw_err_div, 'invalid Withdraw Method', 'danger', 3);
                btn_loading(withdraw_btn, 'Processing...', false);
                return false;
            }
            // api call
            var bodyFormData = new URLSearchParams();
            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
            bodyFormData.append('amt_val', amt_val.value);
            bodyFormData.append('wm_select', wm_select.value);
            axios.post(api_base + 'withdraw_request.php', bodyFormData)
                .then(function (response) {
                    btn_loading(withdraw_btn, 'Processing...', false);
                  const  res = response.data;
                    console.log(res);
                    if (res.status === 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
                    }
                    if (res.status === 1) {
                        Swal.fire({
                            title: 'Withdraw requested successfully',
                            text: 'It will Reflect in your account in 2 working Days !!!',
                            icon: 'success',
                            timer: 30000,
                            timerProgressBar: true,
                            confirmButtonText: 'go to Dashboard',

                        }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {

                                location.href = './index.html';
                            }
                        });

                        fetchWallet();
                        withdrawHistoryFun();
                    }
                    if (res.status === -1) {
                        logOut();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }window.withdraw_fun=withdraw_fun;

        function withdraw_cancel_fun(SN) {
            // api call
          const  cw_btn = byId('cw_btn' + SN);
            btn_loading(cw_btn, '...', true);
            var bodyFormData = new URLSearchParams();
            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
            bodyFormData.append('SN', SN);

            axios.post(api_base + 'withdraw_cancel.php', bodyFormData)
                .then(function (response) {
                    btn_loading(cw_btn, '...', false);
                    fetchWallet();
                    withdrawHistoryFun();
                   const res = response.data;
                    console.log(res);
                    if (res.status === 0) {
                        bootstrapAlert(withdraw_err_div, res.msg, 'danger', 3);
                        Swal.fire({
                            title: 'Error',
                            text: res.msg,
                            icon: 'error',
                            timer: 3000,

                            timerProgressBar: true,
                            showConfirmButton: false,

                        });

                    }
                    if (res.status === 1) {
                        Swal.fire({
                            title: 'Withdraw Cancelled successfully',
                            text: 'Withdraw amount is refunded in your wallet',
                            icon: 'success',
                            timer: 3000,

                            timerProgressBar: true,
                            showConfirmButton: false,

                        });

                    }
                    if (res.status === -1) {
                        logOut();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }window.withdraw_cancel_fun=withdraw_cancel_fun;
   