

import axios from 'axios';
import store from 'store';
// import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, loginCheck, logOut, setUsernameInHeader, Toast,d_none ,bootstrapAlert} from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();


		loginCheck();
		setUsernameInHeader();

	let	ai_locked_span = byId('ai_locked_span');
	let	ai_profit_span = byId('ai_profit_span');
	let	ai_total_span = byId('ai_total_span');
	let	ai_action_div = byId('ai_action_div');
	let	amt_val = byId('amt_val');
	// let	i_i_n_btn = byId('i_i_n_btn');
	// let	d_i_n_btn = byId('d_i_n_btn');
	// let	r_p_n_btn = byId('r_p_n_btn');
	let	ai_action_init_div = byId('ai_action_init_div');
	let	ai_action_err_div = byId('ai_action_err_div');
    let ai_trx_body = byId('ai_trx_body');

		//updating wallets
		function fetchWallet() {
			var bodyFormData = new URLSearchParams();

			bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
			bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

			axios.post(api_base+'wallets.php', bodyFormData)
				.then(function(response) { let res = response.data;
					console.log(response.data);

					if (response.data.status == 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
					}
					if (response.data.status == 1) {
						ai_locked_span.innerHTML = Number(response.data.AI_LOCKED).toFixed(2);
						ai_profit_span.innerHTML = Number(response.data.AI_PROFIT).toFixed(2);
						ai_total_span.innerHTML = Number(Number(response.data.AI_LOCKED) + Number(response.data.AI_PROFIT)).toFixed(2);
					}


				})
				.catch(function(error) {
					console.log(error);
				});
		}
		fetchWallet();
		function aiTrxFun() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

            axios.post(api_base+'ai_trx.php', bodyFormData)
                .then(function(response) { 
                
                   let res = response.data;
                    console.log(response.data);

                    if (response.data.status == 0) {
                        Toast.fire({
                            icon: 'error',
                            title: res.msg
                        });
                    }
                    if (response.data.status == 1) {
                        let  res_index = 0;
                        // console.log(response.data.res_data[res_index]);
                        if (response.data.res_data.length > 0) {
                            while (response.data.res_data.length > res_index) {

                                   ai_trx_body.innerHTML += `<tr class="table-line">
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
                .catch(function(error) {
                    console.log(error);
                });

        }
        aiTrxFun();
window.ai_action_init_fun=ai_action_init_fun;
		function ai_action_init_fun(btn_id) {
			d_none(ai_action_div, false);
			d_none(btn_id, false);
			d_none(ai_action_init_div, true);
		}
window.ai_action_fun=ai_action_fun;
		function ai_action_fun(action) {
			var bodyFormData = new URLSearchParams();
			bodyFormData.append('action', action);
			bodyFormData.append('amt_val', amt_val.value);
			bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
			bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

			axios.post(api_base+'ai_action.php', bodyFormData)
				.then(function(response) {
					console.log(response.data);

					if (response.data.status == 0) {
						bootstrapAlert(ai_action_err_div, response.data.msg, "danger", 3);
					}
					if (response.data.status == 1) {
						bootstrapAlert(ai_action_err_div, response.data.msg, "success", 3);
						fetchWallet();
						ai_trx_body.innerHTML ="";
						aiTrxFun();
					}


				})
				.catch(function(error) {
					console.log(error);
				});
		}
	