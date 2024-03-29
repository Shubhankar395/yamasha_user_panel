
import axios from 'axios';
// import store from 'store';
// import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, btn_loading, bootstrapAlert } from './assets/modules/yamasha_utility.js';









        // getting elements by id 
        // step1
    const    stepOneDiv = byId('stepOneDiv');
    const   stepOneBtn = byId('stepOneBtn');
    const    MOB_NUMBER = byId('MOB_NUMBER');
    const    stepOneErrDiv = byId('stepOneErrDiv');
        
        //step2
        const   stepTwoDiv = byId('stepTwoDiv');
        const   MOB_OTP1 = byId('MOB_OTP1');
        const   MOB_OTP2 = byId('MOB_OTP2');
        const   MOB_OTP3 = byId('MOB_OTP3');
        const   MOB_OTP4 = byId('MOB_OTP4');
        // let   stepTwoBtn = byId('stepTwoBtn');
        const   stepTwoErrDiv = byId('stepTwoErrDiv');
        const  ID2 = byId('ID2');

        //step3
        const  stepThreeDiv = byId('stepThreeDiv');

        const   PASS = byId('PASS');
        const   PASS2 = byId('PASS2');

        // let   stepThreeBtn = byId('stepThreeBtn');
        const  stepThreeErrDiv = byId('stepThreeErrDiv');

    




        // api functions
        
        function stepOneFun() {
            btn_loading(stepOneBtn, 'Loading...', true);
            // validating
            if (MOB_NUMBER.value.length !== 10) {

                bootstrapAlert(stepOneErrDiv, 'Enter valid 10 Digit Number', 'danger', 3);
                return false;
            }

            // calling api
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('MOB_NUMBER', MOB_NUMBER.value);
            bodyFormData.append('step', 'one');
            axios.post(api_base+'forgot_password.php', bodyFormData)
                .then(function(response) {
                   const res = response.data;
                    console.log(res);
                    btn_loading(stepOneBtn, 'Loading...', false);

                    if (response.data.status === 0) {



                        bootstrapAlert(stepOneErrDiv, response.data.msg, 'danger', 3);
                    }
                    if (response.data.status === 1) {

                        stepOneDiv.classList.add('d-none');
                        stepTwoDiv.classList.remove('d-none');
                        ID2.value = response.data.ID2;

                        MOB_OTP1.focus();

                    }


                })
                .catch(function(error) {
                    console.log(error);
                });
        }window.stepOneFun=stepOneFun;

        function stepTwoFun() {


            // calling api
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('MOB_NUMBER', MOB_NUMBER.value);
            bodyFormData.append('MOB_OTP1', MOB_OTP1.value);
            bodyFormData.append('MOB_OTP2', MOB_OTP2.value);
            bodyFormData.append('MOB_OTP3', MOB_OTP3.value);
            bodyFormData.append('MOB_OTP4', MOB_OTP4.value);
            bodyFormData.append('ID2', ID2.value);
            bodyFormData.append('step', 'two');
            axios.post(api_base+'forgot_password.php', bodyFormData)
                .then(function(response) {
                   const res = response.data;
                    console.log(res);

                    if (response.data.status === 0) {



                        bootstrapAlert(stepTwoErrDiv, response.data.msg, 'danger', 3);
                    }
                    if (response.data.status === 1) {

                        stepTwoDiv.classList.add('d-none');
                        stepThreeDiv.classList.remove('d-none');
                    

                    }


                })
                .catch(function(error) {
                    console.log(error);
                });
        }window.stepTwoFun=stepTwoFun;
      
    
        function stepThreeFun() {

            // validations
            if (PASS.value !== PASS2.value) {

                bootstrapAlert(stepThreeErrDiv, 'Confirmation Password not matching', 'danger', 3);
                return false;
            }



            // calling api
            var bodyFormData = new URLSearchParams();
            bodyFormData.append('MOB_OTP1', MOB_OTP1.value);
            bodyFormData.append('MOB_OTP2', MOB_OTP2.value);
            bodyFormData.append('MOB_OTP3', MOB_OTP3.value);
            bodyFormData.append('MOB_OTP4', MOB_OTP4.value);
            bodyFormData.append('ID2', ID2.value);
            bodyFormData.append('MOB_NUMBER', MOB_NUMBER.value);

            bodyFormData.append('PASS', PASS.value);


            bodyFormData.append('step', 'three');
            axios.post(api_base+'forgot_password.php', bodyFormData)
                .then(function(response) {
                   const res = response.data;
                    console.log(res);

                    if (response.data.status === 0) {



                        bootstrapAlert(stepThreeErrDiv, response.data.msg, 'danger', 3);
                    }
                    if (response.data.status === 1) {

                        bootstrapAlert(stepThreeErrDiv, response.data.msg, 'success', 3);
                         
                        setTimeout(() => {
                            location.replace('./login.html');
                        }, 3000);
                        

                    }


                })
                .catch(function(error) {
                    console.log(error);
                });
        }  window.stepThreeFun=stepThreeFun;