
import axios from 'axios';
// import store from 'store';
// import Swal from 'sweetalert2';
// import { DataTable } from "simple-datatables";
// import moment from 'moment';
import { api_base } from './assets/modules/config.js';
import { byId, btn_loading, bootstrapAlert,  Toast } from './assets/modules/yamasha_utility.js';



        // getting elements by id 
        // step1
     const   stepOneDiv = byId('stepOneDiv');
     const   stepOneBtn = byId('stepOneBtn');
     const   MOB_NUMBER = byId('MOB_NUMBER');
     const   stepOneErrDiv = byId('stepOneErrDiv');

        //step2
        const    stepTwoDiv = byId('stepTwoDiv');
        const   MOB_OTP1 = byId('MOB_OTP1');
        const   MOB_OTP2 = byId('MOB_OTP2');
        const   MOB_OTP3 = byId('MOB_OTP3');
        const  MOB_OTP4 = byId('MOB_OTP4');
        // let  stepTwoBtn = byId('stepTwoBtn');
        // let  stepTwoErrDiv = byId('stepTwoErrDiv');
        const  ID2 = byId('ID2');

        //step3
        const   stepThreeDiv = byId('stepThreeDiv');
        const   NAME = byId('NAME');
        const  ALT_NUM = byId('ALT_NUM');
        const  DOB = byId('DOB');
        const  DOC_TYPE = byId('DOC_TYPE');
        const  DOC_ID = byId('DOC_ID');
        const  MOB_NUMBER2 = byId('MOB_NUMBER2');
        const  EMAIL = byId('EMAIL');
        const  AADHAR_NUM = byId('AADHAR_NUM');
        const  CITY = byId('CITY');
        const ADDRESS = byId('ADDRESS');
        const  PASS = byId('PASS');
        const  PASS2 = byId('PASS2');
        const  ref_code = byId('ref_code');
        // let   stepThreeBtn = byId('stepThreeBtn');
        const  stepThreeErrDiv = byId('stepThreeErrDiv');

        // checking query
        // reading query
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        const refer = params.refer;
        console.log(refer);
        ref_code.value = refer;
        ref_code.disabled = true;




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
            axios.post(api_base + 'register.php', bodyFormData)
                .then(function (response) {
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
                .catch(function (error) {
                    console.log(error);
                });
        }     window.stepOneFun=stepOneFun;
       
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
            axios.post(api_base + 'register.php', bodyFormData)
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

                        stepTwoDiv.classList.add('d-none');
                        stepThreeDiv.classList.remove('d-none');
                        MOB_NUMBER2.value = MOB_NUMBER.value;

                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
        } window.stepTwoFun=stepTwoFun;

        function stepThreeFun() {

            // validations
            if (PASS.value !== PASS2.value) {

                bootstrapAlert(stepThreeErrDiv, 'Confirmation Password not matching', 'danger', 3);
                return false;
            }
            if (ALT_NUM.value.length !== 10) {

                bootstrapAlert(stepThreeErrDiv, 'Enter valid 10 Digit Alternate Number', 'danger', 3);
                return false;
            }
            if (CITY.value.length < 3) {

                bootstrapAlert(stepOneErrDiv, 'Enter valid City', 'danger', 3);
                return false;
            }
            // email validation
            // eslint-disable-next-line no-useless-escape
            var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!EMAIL.value.match(mail_format)) {

                bootstrapAlert(stepThreeErrDiv, 'Enter valid Email', 'danger', 3);
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
            bodyFormData.append('NAME', NAME.value);
            bodyFormData.append('ALT_NUM', ALT_NUM.value);
            bodyFormData.append('DOB', DOB.value);
            bodyFormData.append('DOC_TYPE', DOC_TYPE.value);
            bodyFormData.append('DOC_ID', DOC_ID.value);
            bodyFormData.append('EMAIL', EMAIL.value);
            bodyFormData.append('AADHAR_NUM', AADHAR_NUM.value);
            bodyFormData.append('CITY', CITY.value);
            bodyFormData.append('ADDRESS', ADDRESS.value);
            bodyFormData.append('PASS', PASS.value);
            bodyFormData.append('ref_code', ref_code.value);

            bodyFormData.append('step', 'three');
            axios.post(api_base + 'register.php', bodyFormData)
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

                        bootstrapAlert(stepThreeErrDiv, response.data.msg, 'success', 3);
                   
                     const   url = './email_action.html?rv=' + response.data.ID;
                        location.href = url;

                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
        }window.stepThreeFun=stepThreeFun;
    