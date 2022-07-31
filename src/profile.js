

import axios from 'axios';
import store from 'store';
import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, loginCheck, logOut, setUsernameInHeader, Toast ,d_none } from './assets/modules/yamasha_utility.js';
loginCheck();
window.logOut = logOut;
setUsernameInHeader();



 
    
      

        // elements byId
      const  cid_span1 = byId('cid_span1');
      const  cid_span2 = byId('cid_span2');
      const  cname_span1 = byId('cname_span1');
      const  cname_span2 = byId('cname_span2');
      const  UP_MOB_NUMBER_input = byId('UP_MOB_NUMBER_input');
    //   let  UP_MOB_NUMBER_edit_btn = byId('UP_MOB_NUMBER_edit_btn')
    //   let  UP_MOB_NUMBER_submit_btn = byId('UP_MOB_NUMBER_submit_btn')
      const  UP_EMAIL_input = byId('UP_EMAIL_input');
    //   let  UP_EMAIL_edit_btn = byId('UP_EMAIL_edit_btn')
    //   let   UP_EMAIL_submit_btn = byId('UP_EMAIL_submit_btn')
      const  UP_ALT_NUM_input = byId('UP_ALT_NUM_input');
    //   let  UP_ALT_NUM_edit_btn = byId('UP_ALT_NUM_edit_btn')
    //   let   UP_ALT_NUM_submit_btn = byId('UP_ALT_NUM_submit_btn')
      const   UP_DOC_TYPE = byId('UP_DOC_TYPE');
      const   UP_DOC_ID = byId('UP_DOC_ID');
      const   UP_AADHAR_NUM = byId('UP_AADHAR_NUM');
      const   UP_DOB = byId('UP_DOB');
      const   address_span = byId('address_span');
      



      const   BANK_edit_btn = byId('BANK_edit_btn');
    //   let   BANK_submit_btn = byId('BANK_submit_btn')
      const   BANK_NAME = byId('BANK_NAME');
      const  BANK_AC_NUM = byId('BANK_AC_NUM');
      const   BANK_IFSC = byId('BANK_IFSC');
      const  UPI_ID = byId('UPI_ID');
      let  NOMINEE_NAME = byId('NOMINEE_NAME');
      let  NOMINEE_NUMBER = byId('NOMINEE_NUMBER');
      let  NOMINEE_RELATION = byId('NOMINEE_RELATION');
      const  NOMINEE_NAME_span = byId('NOMINEE_NAME_span');
      const  NOMINEE_NUMBER_span = byId('NOMINEE_NUMBER_span');
      const  NOMINEE_RELATION_span = byId('NOMINEE_RELATION_span');
      let  nominee_submit_btn = byId('nominee_submit_btn');
      const  nominee_display_div = byId('nominee_display_div');
      let  nominee_add_div = byId('nominee_add_div');


        // setting id from local
        cid_span1.innerHTML = store.get('yamasha_user_data1').ID;
        cid_span2.innerHTML = store.get('yamasha_user_data1').ID;



        function fetch_clients_data() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

            axios.post(api_base + 'clients.php', bodyFormData)
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

                        cname_span1.innerHTML = response.data.NAME;
                        cname_span2.innerHTML = response.data.NAME;
                        UP_MOB_NUMBER_input.value = response.data.MOB_NUMBER;
                        UP_EMAIL_input.value = response.data.EMAIL;
                        UP_ALT_NUM_input.value = response.data.ALT_NUM;
                        UP_DOC_TYPE.innerHTML = response.data.DOC_TYPE;
                        UP_DOC_ID.innerHTML = response.data.DOC_ID;
                        UP_AADHAR_NUM.innerHTML = response.data.AADHAR_NUM;
                        UP_DOB.innerHTML = response.data.DOB;
                        address_span.innerHTML = response.data.ADDRESS + ',' + response.data.CITY;

                    }
                    if (res.status === -1) {
                        console.log('logout triggered');
						logOut();
					}


                })
                .catch(function (error) {
                    console.log(error);
                });
        }  fetch_clients_data();
       
        function fetch_clients_data1() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);

            axios.post(api_base + 'clients_data1.php', bodyFormData)
                .then(function (response) {
                  const  res = response.data;
                  
                    console.log(response.data);

                    if (response.data.status === 0) {
                        Swal.fire({
                            icon: 'error',
                            title: res.msg, toast: true,
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
                    if (response.data.status === 1) {


                        BANK_NAME.value = response.data.BANK_NAME;
                        BANK_AC_NUM.value = response.data.BANK_AC_NUM;
                        BANK_IFSC.value = response.data.BANK_IFSC;
                        UPI_ID.value = response.data.UPI_ID;

                        /* validation  */

                        if(response.data.BANK_AC_NUM ==='' &&  response.data.UPI_ID ==='' ){
                            d_none(BANK_edit_btn,false);
                        }

                        if (response.data.NOMINEE_NAME !== '') {
                            d_none(nominee_add_div, true);
                            d_none(nominee_display_div, false);

                            NOMINEE_NAME_span.innerHTML = response.data.NOMINEE_NAME;
                            NOMINEE_NUMBER_span.innerHTML = response.data.NOMINEE_NUMBER;
                            NOMINEE_RELATION_span.innerHTML = response.data.NOMINEE_RELATION;
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
        fetch_clients_data1();


       
        function prof_edit(id_base) {

          const  input_id = `${id_base}_input`;
          const  edit_btn_id = `${id_base}_edit_btn`;
          const  submit_btn_id = `${id_base}_submit_btn`;

            document.getElementById(input_id).removeAttribute('readonly');

            //   console.log(document.getElementById(input_id).classList)
            document.getElementById(edit_btn_id).classList.add('d-none');
            document.getElementById(submit_btn_id).classList.remove('d-none');

        } window.prof_edit=prof_edit; 

        function prof_bank_edit(status) {
            const   edit_btn = document.getElementById('BANK_edit_btn');
            const   submit_btn = document.getElementById('BANK_submit_btn');
            const   name_input = document.getElementById('BANK_NAME');
            const   ac_num_input = document.getElementById('BANK_AC_NUM');
            const   ifsc_input = document.getElementById('BANK_IFSC');
            const   upi_input = document.getElementById('UPI_ID');

            // actions
            if (status === true) {
                name_input.removeAttribute('readonly');
                ac_num_input.removeAttribute('readonly');
                ifsc_input.removeAttribute('readonly');
                upi_input.removeAttribute('readonly');
                edit_btn.classList.add('d-none');
                submit_btn.classList.remove('d-none');
            }
            if (status === false) {
                name_input.setAttribute('readonly', '');
                ac_num_input.setAttribute('readonly', '');
                ifsc_input.setAttribute('readonly', '');
                upi_input.setAttribute('readonly', '');
                edit_btn.classList.remove('d-none');
                submit_btn.classList.add('d-none');
            }


        }

        function add_nominee() {

            const   nominee_submit_div = document.getElementById('nominee_submit_div');
            nominee_add_div = document.getElementById('nominee_add_div');
            nominee_submit_div.classList.remove('d-none');
            nominee_add_div.classList.add('d-none');
        }window.add_nominee=add_nominee; 

        function prof_processing(id_base, status) {
            const   submit_btn_id = `${id_base}_submit_btn`;
            const   input_id = `${id_base}_input`;

            if (status === true) {
                document.getElementById(submit_btn_id).textContent = '...';
                document.getElementById(submit_btn_id).disabled = true;
                document.getElementById(input_id).setAttribute('readonly', '');
            }
            if (status === false) {
                document.getElementById(submit_btn_id).textContent = 'Submit';
                document.getElementById(submit_btn_id).disabled = false;
                document.getElementById(input_id).removeAttribute('readonly');
            }
        }

        function prof_submit(id_base) {
            const  input_id = `${id_base}_input`;
            const   edit_btn_id = `${id_base}_edit_btn`;
            const   submit_btn_id = `${id_base}_submit_btn`;

            // make button processing 
            prof_processing(id_base, true);

            const  input_value = document.getElementById(input_id).value;

            var bodyFormData = new URLSearchParams();
            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
            bodyFormData.append('info_name', id_base);
            bodyFormData.append(id_base, input_value);

            /// api call
            axios.post(api_base + 'edit_profile.php', bodyFormData)
                .then(function (response) {
                    const res = response.data;
                    prof_processing(id_base, false);
                    console.log(res);

                    if (response.data.status === 1) {
                        document.getElementById(input_id).setAttribute('readonly', '');
                        document.getElementById(submit_btn_id).classList.add('d-none');
                        document.getElementById(edit_btn_id).classList.remove('d-none');

                    } else {
                      
                    console.log(response.data);
                        document.getElementById(submit_btn_id).textContent = 'Retry';

                    }







                })
                .catch(function (error) {
                    console.log(error);
                });

        }window.prof_submit=prof_submit;
       
        function prof_bank_submit() {
            const  edit_btn = document.getElementById('BANK_edit_btn');
            // let   submit_btn = document.getElementById('BANK_submit_btn');
            const   name_input = document.getElementById('BANK_NAME');
            const   ac_num_input = document.getElementById('BANK_AC_NUM');
            const  ifsc_input = document.getElementById('BANK_IFSC');
            const  upi_input = document.getElementById('UPI_ID');

            // actions
            prof_bank_edit(false);
            edit_btn.textContent = 'Processing';
            edit_btn.disabled = true;
            var bodyFormData = new URLSearchParams();
            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
            bodyFormData.append('info_name', 'BANK');
            bodyFormData.append('BANK_NAME', name_input.value);
            bodyFormData.append('BANK_AC_NUM', ac_num_input.value);
            bodyFormData.append('BANK_IFSC', ifsc_input.value);
            bodyFormData.append('UPI_ID', upi_input.value);

            /// api call
            axios.post(api_base + 'edit_profile.php', bodyFormData)
                .then(function (response) {
                    edit_btn.disabled = false;

                   const res = response.data;
                    console.log(res);

                    if (res.status === 1) {

                        d_none(BANK_edit_btn,true);



                    } else {
               
                    console.log(res);
                        edit_btn.textContent = 'Retry';

                    }







                })
                .catch(function (error) {
                    console.log(error);
                });


        } window.prof_bank_submit=prof_bank_submit;

        function submit_nominee() {
            nominee_submit_btn = document.getElementById('nominee_submit_btn');
            NOMINEE_NAME = document.getElementById('NOMINEE_NAME');
            NOMINEE_NUMBER = document.getElementById('NOMINEE_NUMBER');
            NOMINEE_RELATION = document.getElementById('NOMINEE_RELATION');

            ///actions
            nominee_submit_btn.textContent = 'Processing';
            nominee_submit_btn.disabled = true;

            var bodyFormData = new URLSearchParams();
            bodyFormData.append('ID', store.get('yamasha_user_data1').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data1').TOKEN);
            bodyFormData.append('info_name', 'NOMINEE');
            bodyFormData.append('NOMINEE_NAME', NOMINEE_NAME.value);
            bodyFormData.append('NOMINEE_NUMBER', NOMINEE_NUMBER.value);
            bodyFormData.append('NOMINEE_RELATION', NOMINEE_RELATION.value);
            /// api call
            axios.post(api_base + 'edit_profile.php', bodyFormData)
                .then(function (response) {
                    nominee_submit_btn.disabled = false;

                   const res = response.data;
                    console.log(res);

                    if (res.status === 1) {

                        fetch_clients_data1();
                        nominee_submit_btn.textContent = 'EDIT';


                    } else {
                
                    console.log(res);
                        nominee_submit_btn.textContent = 'Retry';

                    }







                })
                .catch(function (error) {
                    console.log(error);
                });


        }window.submit_nominee=submit_nominee; 
    