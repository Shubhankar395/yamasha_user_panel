<?php
$page_title = 'Main Wallet'
?>

<!doctype html>
<html lang="en" dir="ltr">

<head>
    <?php include "./includes/com_head.php";
    include "./includes/com_css.php"; ?>
    <!-- File Uploads css -->
    <link href="assets/plugins/fileuploads/css/dropify.css" rel="stylesheet" type="text/css" />

    <link href="./assets/css/filepond.css" rel="stylesheet" />
    <link href="./assets/css/filepond-plugin-image-preview.css" rel="stylesheet" />



    <style>
        .box {
            /* border: 2px solid rgb(206, 201, 201); */
            box-shadow: 0px 0px 1px 2px rgb(193, 190, 190);
            border-radius: 10px;
            box-shadow: inset;
        }

        .line {
            border: none;
            border-bottom: 2px solid rgb(114, 110, 110);
            margin: 0 25px;
            margin-top: 25px;
        }

        @media (max-width:576px) {
            .plus {
                text-align: center;
            }

            .box {
                margin: 28px;
            }
        }
    </style>
</head>

<body class="app sidebar-mini rtl">

    <!--Global-Loader-->
    <div id="global-loader"></div>

    <div class="page">
        <div class="page-main">

            <?php include "./includes/header.php";
            include "./includes/nav.php";
            ?>



            <!--content-area-->
            <div class="content-area">

                <div class="container">

                    <!-- page-header -->
                    <div class="page-header">
                        <h4 class="page-title"></h4>
                        <ol class="breadcrumb">
                            <!-- breadcrumb -->
                            <!-- <li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page"> Auto Investment</li> -->
                        </ol><!-- End breadcrumb -->
                    </div>
                    <!-- End page-header -->

                    <div id="deposit_div" class="row d-none">
                        <div class="col-md">
                            <div class="card overflow-hidden">
                                <div class="card-header " style="justify-content: center;">
                                    <h3 class="card-title ">Deposit</h3> <br>

                                </div>

                                <div class="card-body text-center">
                                    <p>Pay on following details and upload screen shot to verify your Deposits </p>
                                    <div class="row" style="justify-content: center;flex-direction: column;">
                                        <div class="">
                                            UPI : 7850940496@ybl
                                        </div>
                                        <br>
                                        <div class="img-fluid">
                                            <img src="https://cdn.discordapp.com/attachments/962990670962900992/978294269553029160/WhatsApp_Image_2022-05-23_at_1.41.36_PM.jpeg" alt="Qr code">
                                        </div>


                                    </div>
                                    <br>
                                    <form action="" method="post">
                                        <label for="img_link">Upload Payment Screenshot </label>
                                        <div class="row" style="justify-content: center;">
                                            <input type="url" id="img_link" class="form-control" value="" name="IMG" placeholder="You can place image link here or upload below" required>

                                            <input type="file" name="image" id="input_img" class="imgbb-filepond form-control" accept="image/*">
                                        </div>
                                        <br>
                                        <div id="deposit_err_div"></div>
                                        <button type="button" onclick="verify_dep_fun()" id="verify_dep_btn" class="btn btn-pill btn-primary"> Verify Deposit </button>
                                        <button type="button" onclick="depositInitFun(false)" id="verify_dep_btn" class="btn btn-pill btn-primary"> Go back </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="main_wallet_div">


                        <!-- Text -->
                        <div class=" text-center" style="background-color: #2724d6;letter-spacing: .01em;">
                            <p class="text-light p-4 font-weight-bold ">
                                Main Wallet
                            </p>
                        </div>
                        <!-- Boxes -->
                        <div style="background-color: #000; position:relative; top: -18px;">
                            <div class="container-fluid p-5">
                                <div class="row justify-content-center">

                                    <div class=" m-sm-5 m-md-0 text-center box">
                                        <p class="text-light pt-3 font-weight-bold">Total Balance</p>
                                        <p class="display-4 font-weight-bold text-light">₹<span id="main_wallet_span">Fetching...</span></p>
                                    </div>
                                </div>

                                <div id="withdraw_div" class="d-none">
                                    <div class="container-fluid p-4">


                                        <form action="" class="form-group">
                                            <div class="m-5">
                                                <label for="" class="text-light">Amount</label>
                                                <input type="number" id="amt_val" class="form-control" placeholder="Enter amount" style="border : none;border-bottom:2px solid white ;background-color: #000;">
                                                <label for="wm_select" class="text-light mt-5">Select withdrawal option</label>
                                                <select name="pets" id="wm_select" class="form-control" style="background-color: rgb(209, 204, 204);">
                                                    <!-- <option id="bank_select" value="bank"></option>
                                                    <option id="upi_select" value="upi"></option> -->
                                                    <option disabled> Loading...</option>
                                                </select>


                                            </div>
                                        </form>
                                        <div id="withdraw_err_div"></div>

                                        <div class="my-5 d-flex justify-content-center ">
                                            <button class="btn btn-info px-5 mx-3 border-0 " id="withdraw_btn" onclick="withdraw_fun()" style="background-color: #2724d6; ">Withdrawal Now</button>
                                            <button class="btn btn-info px-5 mx-3 border-0 " onclick="withdrawInitFun(false)" style="background-color: #2724d6; ">Go back</button>
                                        </div>
                                    </div>

                                </div>

                                <div id="main_wallet_btn_div">
                                    <div class="my-5 d-flex justify-content-center ">
                                        <button class="btn btn-info px-5 mx-3 border-0" onclick="depositInitFun(true)" style="background-color: #2724d6; ">Deposit</button>
                                        <button class="btn btn-info px-5 mx-3 border-0  " onclick="withdrawInitFun(true)" style="background-color: #2724d6; ">Withdrawal</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <br>
                        <div id="main_trx_div">
                            <div class="row">
                                <div class="col-md">

                                    <div class="mx-3 mt-5">
                                        <p class="text-dark font-weight-bold " style="font-size: larger;border: none;">Transactions History</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md">
                                    <table class="table table-borderless table-responsive-sm" style="position:relative; top: -18px;">
                                        <thead style="background-color: rgb(147, 146, 146);">
                                            <tr class="line">
                                                <th scope="col-2" class="text-light pl-5">Date</th>
                                                <th scope="col-2" class="text-light">Description</th>
                                                <th scope="col-2" class="text-light">Type</th>
                                                <th scope="col-2" class="text-light">Amount</th>
                                                <th scope="col-2" class="text-light">Closing Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody id="main_trx_body">
                                            <!-- <tr class="table-line">
                                        <th scope="row">
                                            <p>Date</p>
                                        </th>
                                        <td>
                                            <p>Description</p>

                                        </td>
                                        <td >
                                            <p>Type</p>
                                        </td>
                                        <td>
                                            <p> Amount</p>
                                        </td>
                                        <td>
                                            <p> Closing Balance</p>
                                        </td>
                                    </tr> -->

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div id="withdraw_history_div" class="d-none">
                            <div class="row">
                                <div class="col-md">

                                    <div class="mx-3 mt-5">
                                        <p class="text-dark font-weight-bold " style="font-size: larger;border: none;">Withdrawal History</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md">
                                    <table class="table table-borderless table-responsive-sm" style="position:relative; top: -18px;">
                                        <thead style="background-color: rgb(147, 146, 146);">
                                            <tr class="line">
                                                <th scope="col-2" class="text-light pl-5">Date</th>
                                                <th scope="col-2" class="text-light">Withdraw Method</th>
                                                <th scope="col-2" class="text-light">Status</th>
                                                <th scope="col-2" class="text-light">Amount</th>
                                                <th scope="col-2" class="text-light"></th>

                                            </tr>
                                        </thead>
                                        <tbody id="withdraw_history_body">
                                            <!-- <tr class="table-line ">
                                       <td>
                                           <p class="font-weight-bold">12/12/2022</p>
                                       </td>
                                       <td>
                                           <p class="text-capitalize">paytm Payment bank </p>
                   
                                       </td>
                                       <td class="">
                                           <p>successful</p>
                                       </td>
                                       <td>
                        <p class="font-weight-bold"> ₹500</p>
                        <p style="position: relative;top: -15px;">{INR}</p>

                    </td>
                    <td class="">
                        <button class="btn btn-outline-danger">Cancel</button>
                    </td>
                          </tr> -->
                                            <!-- <tr class="table-line ">
                    <td>
                        <p class="font-weight-bold">12/12/2022</p>
                    </td>
                    <td>
                        <p class="text-capitalize">paytm Payment bank </p>

                    </td>
                    <td class="">
                        <p>successful</p>
                    </td>
                    <td>
                        <p class="font-weight-bold"> ₹500</p>
                        <p style="position: relative;top: -15px;">{INR}</p>

                    </td>
                    <td>
                        <button class="btn btn-outline-danger">Delete</button>
                    </td>
                </tr> -->

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>



                    </div>
                    <!-- End row -->

                </div>
                <?php
                include "./includes/footer.php"; ?>
            </div>
            <!-- End content-area-->
        </div>
    </div>
    <!-- End Page-->
    <?php
    include "./includes/com_js.php";
    ?>

    <!--File uploads js -->
    <script src="assets/plugins/fileuploads/js/dropify.js"></script>
    <script src="assets/plugins/fileuploads/js/dropify-demo.js"></script>
    <!-- filepond -->
    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->
    <script src="https://unpkg.com/filepond/dist/filepond.js"></script>
    <script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"></script>
    <script src="./assets/js/sweetalert2.all.min.js"></script>

    <script>
        loginCheck()
        setUsernameInHeader()


        main_wallet_span = byId('main_wallet_span')
        main_trx_body = byId('main_trx_body')
        main_wallet_div = byId('main_wallet_div')
        deposit_div = byId('deposit_div')
        verify_dep_btn = byId('verify_dep_btn')
        img_link = byId('img_link')
        deposit_err_div = byId('deposit_err_div')
        withdraw_err_div = byId('withdraw_err_div')
        main_wallet_btn_div = byId('main_wallet_btn_div')
        main_trx_div = byId('main_trx_div')
        withdraw_history_div = byId('withdraw_history_div')
        withdraw_history_body = byId('withdraw_history_body')
        withdraw_err_div = byId('withdraw_err_div')
        amt_val = byId('amt_val')
        wm_select = byId('wm_select')
        withdraw_btn = byId('withdraw_btn')

        //updating wallets
        function fetchWallet() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);

            axios.post(api_base+'wallets.php', bodyFormData)
                .then(function(response) {
                    console.log(response.data);

                    if (response.data.status == 0) {

                    }
                    if (response.data.status == 1) {
                        main_wallet_span.innerHTML = response.data.MAIN
                    }


                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        fetchWallet()

        function mainTrxFun() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);

            axios.post(api_base+'main_trx.php', bodyFormData)
                .then(function(response) {
                    console.log(response.data);

                    if (response.data.status == 0) {

                    }
                    if (response.data.status == 1) {
                        res_index = 0
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
                                                    </tr>`

                                res_index++

                            }
                        }
                    }


                })
                .catch(function(error) {
                    console.log(error);
                });

        }
        mainTrxFun()

        function withdrawHistoryFun() {
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);
            axios.post(api_base+'withdraw_history.php', bodyFormData)
                .then(function(response) {
                    console.log(response.data);

                    if (response.data.status == 0) {

                    }
                    if (response.data.status == 1) {
                        res_index = 0
                        withdraw_history_body.innerHTML = ''
                        // console.log(response.data.res_data[res_index]);
                        if (response.data.res_data.length > 0) {
                            while (response.data.res_data.length > res_index) {
                                if (response.data.res_data[res_index].STATUS == 0) {
                                    STATUS = 'Pending'
                                    cancel_btn_class = ''

                                }
                                if (response.data.res_data[res_index].STATUS == 1) {
                                    STATUS = 'Completed'
                                    cancel_btn_class = 'd-none'

                                }
                                if (response.data.res_data[res_index].STATUS == 2) {
                                    STATUS = 'Cancelled'
                                    cancel_btn_class = 'd-none'
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
                                                      </tr>`

                                res_index++

                            }
                        }


                    }


                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        withdrawHistoryFun()

        function depositInitFun(status) {
            if (status == true) {
                d_none(main_wallet_div, true)
                d_none(deposit_div, false)
            }
            if (status == false) {
                d_none(main_wallet_div, false)
                d_none(deposit_div, true)
            }

        }

        function verify_dep_fun() {
            function validURL(str) {
                var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                return !!pattern.test(str);
            }
            urlValidate = validURL(img_link.value)
            if (urlValidate == false) {
                bootstrapAlert(deposit_err_div, "Enter Valid Url or simply upload your screenshot", "danger", 3)
                return false;
            }
            // call api
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);
            bodyFormData.append('img_link', img_link.value);

            axios.post(api_base+'verify_deposit.php', bodyFormData)
                .then(function(response) {
                    console.log(response.data);

                    if (response.data.status == 0) {
                        bootstrapAlert(deposit_err_div, response.data.msg, "danger", 3)
                    }
                    if (response.data.status == 1) {
                        bootstrapAlert(deposit_err_div, `Your Deposit verification request Submitted successfully, 
                        this may take maximum 4 hours update balance in your wallet`, "success", 5)
                        const myTimeout = setTimeout(() => {
                            depositInitFun(false)
                        }, 5 * 1000);
                    }
                    if (res.status == -1) {
                        logOut()
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function wm_select_fun() {
            // call api
            var bodyFormData = new URLSearchParams();

            bodyFormData.append('ID', store.get('yamasha_user_data').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);


            axios.post(api_base+'clients_data1.php', bodyFormData)
                .then(function(response) {
                    console.log(response.data);

                    if (response.data.status == 0) {

                    }
                    if (response.data.status == 1) {
                        wm_select.innerHTML = ''
                        if (response.data.UPI_ID != '') {
                            wm_select.innerHTML += `<option id="upi_select" value="upi">${response.data.UPI_ID}</option>`;
                        }


                        // bank selection
                        if (response.data.BANK_NAME != '' && response.data.BANK_AC_NUM != '') {
                            wm_select.innerHTML += `<option id="bank_select" value="bank">${response.data.BANK_NAME}(${response.data.BANK_AC_NUM })</option>`;
                        }

                        if (response.data.UPI_ID == '' && response.data.BANK_NAME == '') {
                            wm_select.innerHTML += `<option value=""> No Data Found</option>`;
                        }

                    }


                })
                .catch(function(error) {
                    console.log(error);
                });

        }

        function withdrawInitFun(status) {
            if (status == true) {
                d_none(main_wallet_btn_div, true)
                d_none(withdraw_div, false)
                d_none(main_trx_div, true)
                d_none(withdraw_history_div, false)
                wm_select_fun()
            }
            if (status == false) {
                d_none(main_wallet_btn_div, false)
                d_none(withdraw_div, true)
                d_none(main_trx_div, false)
                d_none(withdraw_history_div, true)
            }

        }

        function withdraw_fun() {
            btn_loading(withdraw_btn, 'Processing...', true)
            // validating inputs
            if (amt_val.value < 100) {
                bootstrapAlert(withdraw_err_div, "Withdraw amount must be 100+", "danger", 3)
                btn_loading(withdraw_btn, 'Processing...', false)
                return false
            }
            if ((wm_select.value != 'bank') & (wm_select.value != 'upi')) {
                bootstrapAlert(withdraw_err_div, "invalid Withdraw Method", "danger", 3)
                btn_loading(withdraw_btn, 'Processing...', false)
                return false
            }
            // api call
            var bodyFormData = new URLSearchParams();
            bodyFormData.append('ID', store.get('yamasha_user_data').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);
            bodyFormData.append('amt_val', amt_val.value);
            bodyFormData.append('wm_select', wm_select.value);
            axios.post(api_base+'withdraw_request.php', bodyFormData)
                .then(function(response) {
                    btn_loading(withdraw_btn, 'Processing...', false)
                    res = response.data
                    console.log(res);
                    if (res.status == 0) {
                        bootstrapAlert(withdraw_err_div, res.msg, "danger", 3)

                    }
                    if (res.status == 1) {
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

                                location.href = "./index.php";
                            }
                        })
                       
                        fetchWallet()
                        withdrawHistoryFun()
                    }
                    if (res.status == -1) {
                        logOut()
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function withdraw_cancel_fun(SN){
            // api call
            cw_btn = byId('cw_btn'+SN)
            btn_loading(cw_btn, '...', true)
            var bodyFormData = new URLSearchParams();
            bodyFormData.append('ID', store.get('yamasha_user_data').ID);
            bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);
            bodyFormData.append('SN', SN);
           
            axios.post(api_base+'withdraw_cancel.php', bodyFormData)
                .then(function(response) {
                    btn_loading(cw_btn, '...', false)
                    fetchWallet()
                        withdrawHistoryFun()
                    res = response.data
                    console.log(res);
                    if (res.status == 0) {
                        bootstrapAlert(withdraw_err_div, res.msg, "danger", 3)
                        Swal.fire({
                            title: 'Error',
                            text: res.msg,
                            icon: 'error',
                            timer: 3000,
                         
                            timerProgressBar: true,
                            showConfirmButton: false,

                        }).then((result) => {
                          
                        })

                    }
                    if (res.status == 1) {
                        Swal.fire({
                            title: 'Withdraw Cancelled successfully',
                            text: 'Withdraw amount is refunded in your wallet',
                            icon: 'success',
                            timer: 3000,
                         
                            timerProgressBar: true,
                            showConfirmButton: false,

                        }).then((result) => {
                          
                        })
                       
                        
                    }
                    if (res.status == -1) {
                        logOut()
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });

        }
    </script>

    <script>
        // register desired plugins...
        FilePond.registerPlugin(

            FilePondPluginImagePreview,

        );
        // Filepond: ImgBB with server property
        FilePond.create(document.querySelector(".imgbb-filepond"), {
            allowImagePreview: true,

            server: {
                process: (
                    fieldName,
                    file,
                    metadata,
                    load,
                    error,
                    progress,
                    abort
                ) => {
                    // We ignore the metadata property and only send the file

                    const formData = new FormData();
                    formData.append(fieldName, file, file.name);

                    const request = new XMLHttpRequest();
                    // you can change it by your client api key
                    request.open(
                        "POST",
                        "https://api.imgbb.com/1/upload?key=b5421852000117a841c8016b15fa67ea"
                    );

                    request.upload.onprogress = (e) => {
                        progress(e.lengthComputable, e.loaded, e.total);
                    };

                    request.onload = function() {
                        if (request.status >= 200 && request.status < 300) {
                            load(request.responseText);
                        } else {
                            error("oh no");
                        }
                    };

                    request.onreadystatechange = function() {
                        if (this.readyState == 4) {
                            if (this.status == 200) {
                                let response = JSON.parse(this.responseText);



                                console.log(response);

                                console.log(response.data.url);
                                $('input[name="IMG"]').val(response.data.url);
                            } else {


                                console.log("Error", this.statusText);
                            }
                        }
                    };

                    request.send(formData);
                },
            },
        });

        document.addEventListener('FilePond:removefile', (e) => {
            console.log('FilePond plugin is ready for use', e.detail);
            $('#img_link').val('');
        });
    </script>
</body>

</html>