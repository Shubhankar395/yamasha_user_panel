<?php
$page_title = 'Auto Investment !'
?>

<!doctype html>
<html lang="en" dir="ltr">

<head>
    <?php include "./includes/com_head.php";
	include "./includes/com_css.php"; ?>



    <style>
    .box {
        /* border: 2px solid rgb(206, 201, 201); */
        background-color: #022647;
        border-radius: 08px;
        box-shadow: 9px 5px 5px #0286FF;
    }

    .background_img {
        background-image: url('./assets/images/auto-investment-img/auto_invest_bg-img.png');
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .line {
        border: none;
        border-bottom: 3px solid #0286FF;
        margin: 0 25px;
        margin-top: 25px;
    }

    @media (max-width:991px) {
        .plus {
            text-align: center;
        }

        .box {
            margin: 28px;
        }

		.banner-img{
			display: none;
		}
    }
	@media (max-width:576px) {
	     
		.ai_action_init_div{
			display: flex;
			flex-wrap : wrap;
			/* flex-direction:column; */
			justify-content : center;
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
            <div class="content-area background_img">

                <div class="container-fluid">

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




                    <div class="">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-md">
                                            <div class=" text-center"
                                                style="background-color: #022647;letter-spacing: .01em;">
                                                <p class="text-light p-4 font-weight-bold ">
                                                    Auto Investment
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Box  -->
                                    <div class="container-fluid mt-5 pt-5">
                                        <div class="row justify-content-center">
                                            <div class="col-md-3 m-sm-5 m-md-0 text-center box">
                                                <p class=" pt-3 font-weight-bold text-light">Investment</p>
                                                <h2 class="font-weight-bold text-light">₹<span
                                                        id="ai_locked_span"></span></h2>
                                            </div>
                                            <div class="col-md-1 text-md-center text-sm-center plus"><span
                                                    class="display-2 text-light">+</span></div>
                                            <div class="col-md-3 m-sm-5 m-md-0 text-center box">
                                                <p class=" pt-3 font-weight-bold text-light">Profit</p>
                                                <h2 class=" font-weight-bold text-light">₹<span
                                                        id="ai_profit_span"></span></h2>
                                            </div>
                                            <div class="col-sm-1  text-md-center plus"><span
                                                    class="display-2 text-light">=</span></div>
                                            <div class="col-md-3 m-sm-5 m-md-0 text-center box">
                                                <p class=" pt-3 font-weight-bold text-light">Total</p>
                                                <h2 class=" font-weight-bold text-light">₹<span
                                                        id="ai_total_span"></span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="ai_action_div" class="d-none">
                                        <div class="container-fluid p-5">


                                            <form action="" class="form-group">
                                                <div class="m-5">
                                                    <label for="" class="">Amount</label>
                                                    <input type="number" id="amt_val" class="form-control"
                                                        placeholder="Enter amount"
                                                        style="border : none;border-bottom:2px solid white ;">



                                                </div>
                                            </form>
                                            <div id="ai_action_err_div"></div>

                                            <div class="my-5 d-flex justify-content-center ">
                                                <button id="i_i_n_btn" class="btn btn-info px-5 mx-3 border-0 d-none "
                                                    onclick="ai_action_fun('increase')"
                                                    style="background-color: #2724d6; ">Increase
                                                    Investment Now</button>

                                            </div>
                                            <div class="my-5 d-flex justify-content-center ">

                                                <button id="d_i_n_btn" class="btn btn-info px-5 mx-3 border-0 d-none  "
                                                    onclick="ai_action_fun('decrease')"
                                                    style="background-color: #2724d6; ">Decrease
                                                    Investment Now</button>

                                            </div>
                                            <div class="my-5 d-flex justify-content-center ">

                                                <button id="r_p_n_btn" class="btn btn-info px-5 mx-3 border-0 d-none  "
                                                    onclick="ai_action_fun('redeem')"
                                                    style="background-color: #2724d6; ">Redeem Profit
                                                    Now</button>
                                            </div>
                                            <div class="my-5 d-flex justify-content-center ">

                                                <button class="btn btn-info px-5 mx-3 border-0 "
                                                    onclick="location.reload()" style="background-color: #2724d6; ">Go
                                                    back</button>
                                            </div>

                                        </div>

                                    </div>
                                    <!-- Line draw -->
                                    <!-- <div class="line"></div> -->
                                    <div id="ai_action_init_div" class="ai_action_init_div d-flex justify-content-center mt-5 pt-5">
                                        <div class="my-5">
                                            <button onclick="ai_action_init_fun(i_i_n_btn)"
                                                class="btn btn-info px-5 mx-3 border-0"
                                                style="background-color: #0286FF; ">Increase Investment</button>
                                        </div>
                                        <div class="my-5">
                                            <button onclick="ai_action_init_fun(d_i_n_btn)"
                                                class="btn btn-info px-5 mx-3 border-0"
                                                style="background-color: #0286FF; ">Decrease Investment</button>
                                        </div>
                                        <div class="my-5">
                                            <button onclick="ai_action_init_fun(r_p_n_btn)"
                                                class="btn btn-info px-5 mx-3 border-0"
                                                style="background-color: #0286FF; ">Redeem Profit</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3"><img
                                        src="./assets/images/auto-investment-img/Auto_invest_Frame _1_1POSTER.png"
                                        alt="" class="mb-5 banner-img" /></div>
                            </div>
                        </div>
                    </div>

					<!-- Auto investment History -->
					<div id="ai_trx_div">
                    <!-- <div class="row">
                        <div class="col-md">

                            <div class="mx-3 mt-5">
                                <p class="text-light font-weight-bold mb-5" style="font-size: larger;border: none;">Auto
                                    Investment Profit History</p>
                            </div>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-md">
                            <table class="table table-borderless table-responsive-sm"
                                style="position:relative; top: -18px;">
                                <thead style="background-color: rgb(147, 146, 146);">
                                    <tr class="line">
                                        <th scope="col-2" class="text-light pl-5">Date</th>
                                        <th scope="col-2" class="text-light">Description</th>
                                        <th scope="col-2" class="text-light">Type</th>
                                        <th scope="col-2" class="text-light">Amount</th>
                                        <th scope="col-2" class="text-light">Closing Balance</th>
                                    </tr>
                                </thead>
                                <tbody id="ai_trx_body">
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

                </div>
            </div>
            <br>



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

    <script>
    loginCheck()
    setUsernameInHeader()

    ai_locked_span = byId('ai_locked_span')
    ai_profit_span = byId('ai_profit_span')
    ai_total_span = byId('ai_total_span')
    ai_action_div = byId('ai_action_div')
    amt_val = byId('amt_val')
    i_i_n_btn = byId('i_i_n_btn')
    d_i_n_btn = byId('d_i_n_btn')
    r_p_n_btn = byId('r_p_n_btn')
    ai_action_init_div = byId('ai_action_init_div')
    ai_action_err_div = byId('ai_action_err_div')

    //updating wallets
    function fetchWallet() {
        var bodyFormData = new URLSearchParams();

        bodyFormData.append('ID', store.get('yamasha_user_data').ID);
        bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);

        axios.post(api_base + 'wallets.php', bodyFormData)
            .then(function(response) {
                console.log(response.data);

                if (response.data.status == 0) {

                }
                if (response.data.status == 1) {
                    ai_locked_span.innerHTML = Number(response.data.AI_LOCKED).toFixed(2)
                    ai_profit_span.innerHTML = Number(response.data.AI_PROFIT).toFixed(2)
                    ai_total_span.innerHTML = Number(Number(response.data.AI_LOCKED) + Number(response.data
                        .AI_PROFIT)).toFixed(2)
                }


            })
            .catch(function(error) {
                console.log(error);
            });
    }
    fetchWallet()

    function aiTrxFun() {
        var bodyFormData = new URLSearchParams();

        bodyFormData.append('ID', store.get('yamasha_user_data').ID);
        bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);

        axios.post(api_base + 'ai_trx.php', bodyFormData)
            .then(function(response) {
                console.log(response.data);

                if (response.data.status == 0) {

                }
                if (response.data.status == 1) {
                    res_index = 0
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
    aiTrxFun()

    function ai_action_init_fun(btn_id) {
        d_none(ai_action_div, false)
        d_none(btn_id, false)
        d_none(ai_action_init_div, true)
    }

    function ai_action_fun(action) {
        var bodyFormData = new URLSearchParams();
        bodyFormData.append('action', action);
        bodyFormData.append('amt_val', amt_val.value);
        bodyFormData.append('ID', store.get('yamasha_user_data').ID);
        bodyFormData.append('TOKEN', store.get('yamasha_user_data').TOKEN);

        axios.post(api_base + 'ai_action.php', bodyFormData)
            .then(function(response) {
                console.log(response.data);

                if (response.data.status == 0) {
                    bootstrapAlert(ai_action_err_div, response.data.msg, "danger", 3)
                }
                if (response.data.status == 1) {
                    bootstrapAlert(ai_action_err_div, response.data.msg, "success", 3)
                    fetchWallet()
                    ai_trx_body.innerHTML = ""
                    aiTrxFun()
                }


            })
            .catch(function(error) {
                console.log(error);
            });
    }
    </script>

</body>

</html>