<?php
$page_title = 'Auto Investment'
?>

<!doctype html>
<html lang="en" dir="ltr">

<head>
	<?php include "./includes/com_head.php";
	include "./includes/com_css.php"; ?>



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




					<div class="row">
						<div class="col-md">
							<div class=" text-center" style="background-color: #2724d6;letter-spacing: .01em;">
								<p class="text-light p-4 font-weight-bold ">
									Auto Investment
								</p>
							</div>

							<!-- Box  -->
							<div class="container-fluid ">
								<div class="row justify-content-center">
									<div class="col-md-3 m-sm-5 m-md-0 text-center box">
										<p class="text-muted pt-3 font-weight-bold">Investment</p>
										<p class="display-4 font-weight-bold">₹<span id="ai_locked_span"></span></p>
									</div>
									<div class="col-md-1 text-md-center text-sm-center plus"><span class="display-2">+</span></div>
									<div class="col-md-3 m-sm-5 m-md-0 text-center box">
										<p class="text-muted pt-3 font-weight-bold">Profit</p>
										<p class="display-4 font-weight-bold">₹<span id="ai_profit_span"></span></p>
									</div>
									<div class="col-sm-1  text-md-center plus"><span class="display-2">=</span></div>
									<div class="col-md-3 m-sm-5 m-md-0 text-center box">
										<p class="text-muted pt-3 font-weight-bold">Total</p>
										<p class="display-4 font-weight-bold">₹<span id="ai_total_span"></span></p>
									</div>
								</div>
							</div>
							<div id="ai_action_div" class="d-none">
								<div class="container-fluid p-5">


									<form action="" class="form-group">
										<div class="m-5">
											<label for="" class="">Amount</label>
											<input type="number" id="amt_val" class="form-control" placeholder="Enter amount" style="border : none;border-bottom:2px solid white ;">



										</div>
									</form>
									<div id="ai_action_err_div"></div>

									<div class="my-5 d-flex justify-content-center ">
										<button id="i_i_n_btn" class="btn btn-info px-5 mx-3 border-0 d-none " onclick="ai_action_fun('increase')" style="background-color: #2724d6; ">Increase Investment Now</button>
										
									</div>
									<div class="my-5 d-flex justify-content-center ">
										
										<button id="d_i_n_btn" class="btn btn-info px-5 mx-3 border-0 d-none  " onclick="ai_action_fun('decrease')" style="background-color: #2724d6; ">Decrease Investment Now</button>
										
									</div>
									<div class="my-5 d-flex justify-content-center ">
									
										<button id="r_p_n_btn" class="btn btn-info px-5 mx-3 border-0 d-none  " onclick="ai_action_fun('redeem')" style="background-color: #2724d6; ">Redeem Profit Now</button>
									</div>
									<div class="my-5 d-flex justify-content-center ">
									
										<button class="btn btn-info px-5 mx-3 border-0 " onclick="location.reload()" style="background-color: #2724d6; ">Go back</button>
									</div>
								
								</div>

							</div>
							<!-- Line draw -->
							<div class="line"></div>
							<div id="ai_action_init_div">
								<div class="my-5 d-flex justify-content-center ">
									<button onclick="ai_action_init_fun(i_i_n_btn)" class="btn btn-info px-5 mx-3 border-0" style="background-color: #121061; ">Increase Investment</button>
									
								</div>
								<div class="my-5 d-flex justify-content-center ">
								<button onclick="ai_action_init_fun(d_i_n_btn)" class="btn btn-info px-5 mx-3 border-0" style="background-color: #121061; ">Decrease Investment</button>
									
									
								</div>
								<div class="my-5 d-flex justify-content-center ">
								<button onclick="ai_action_init_fun(r_p_n_btn)" class="btn btn-info px-5 mx-3 border-0" style="background-color: #121061; ">Redeem Profit</button>
									
								</div>
							</div>

						</div>
					</div>

					<br>

				
					<div id="ai_trx_div">
                            <div class="row">
                                <div class="col-md">

                                    <div class="mx-3 mt-5">
                                        <p class="text-dark font-weight-bold " style="font-size: larger;border: none;">Auto Investment Profit History</p>
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

			axios.post(api_base+'wallets.php', bodyFormData)
				.then(function(response) {
					console.log(response.data);

					if (response.data.status == 0) {

					}
					if (response.data.status == 1) {
						ai_locked_span.innerHTML = Number(response.data.AI_LOCKED).toFixed(2)
						ai_profit_span.innerHTML = Number(response.data.AI_PROFIT).toFixed(2)
						ai_total_span.innerHTML = Number(Number(response.data.AI_LOCKED) + Number(response.data.AI_PROFIT)).toFixed(2)
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

            axios.post(api_base+'ai_trx.php', bodyFormData)
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

			axios.post(api_base+'ai_action.php', bodyFormData)
				.then(function(response) {
					console.log(response.data);

					if (response.data.status == 0) {
						bootstrapAlert(ai_action_err_div, response.data.msg, "danger", 3)
					}
					if (response.data.status == 1) {
						bootstrapAlert(ai_action_err_div, response.data.msg, "success", 3)
						fetchWallet()
						ai_trx_body.innerHTML =""
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