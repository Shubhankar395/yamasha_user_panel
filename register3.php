<?php


$LOGIN_CHECK = false;
include './includes/config.php';
include './includes/val_input.php';
include './includes/if_not_die.php';

// form levels
if (!isset($_SESSION['form'])) {
	$_SESSION['form'] = 1;
}

// form actions 
if (isset($_POST['send_otp'])) {
	// getting form details
	$MOB_NUMBER = mysqli_real_escape_string($con, Val_input($_POST['MOB_NUMBER']));
	// sending otp to submitted number 

	// saving number in session

	$_SESSION['MOB_NUMBER'] = $MOB_NUMBER;

	// changing form level
	$_SESSION['form'] = 2;
	// refreshing page
	replace('./register.php');
	die('send_otp');
}
if (isset($_POST['verify_otp'])) {
	// getting form details
	$MOB_OTP = mysqli_real_escape_string($con, Val_input($_POST['MOB_OTP']));

	$ORG_OTP = 123456;
	// matching otp
	if ($MOB_OTP != $ORG_OTP) {
		die('OTP Miss Match');
	}
	// changing form level
	$_SESSION['form'] = 3;
	// refreshing page
	replace('./register.php');
	die('verify_otp');
}
if (isset($_POST['register'])) {
	// getting form details
	$EMAIL = mysqli_real_escape_string($con, Val_input($_POST['EMAIL']));
	$PASS = mysqli_real_escape_string($con, Val_input($_POST['PASS']));
	$PASS2 = mysqli_real_escape_string($con, Val_input($_POST['PASS2']));
	$MOB_NUMBER = $_SESSION['MOB_NUMBER'];
	// checking email already exist 

	// matching pass
	if ($PASS != $PASS2) {
		die('Both pass Not Matching');
	}
	// encrypting password
	$str_pass = password_hash($PASS, PASSWORD_BCRYPT);
	// inserting data
	$insert_q = mysqli_query($con, "INSERT INTO `clients`( `MOB_NUMBER`, `EMAIL`, `PASS`) VALUES ('$MOB_NUMBER','$EMAIL','$str_pass')");
	if_not_die($insert_q);
	// changing form level
	$_SESSION['form'] = 1;
	// refreshing page
	replace('./login.php');
	die('register');
}


// final data

$form = $_SESSION['form'];
?>


<!doctype html>
<html lang="en" dir="ltr">

<head>
	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<meta name="msapplication-TileColor" content="#0061da">
	<meta name="theme-color" content="#1643a3">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

	<!-- Title -->
	<!-- Title -->
	<title> User register</title>

	<!-- Dashboard css -->
	<link href="assets/css/dashboard.css" rel="stylesheet" />

	<!-- Font family -->
	<link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,700" rel="stylesheet">

	<!-- C3 Charts css -->
	<link href="assets/plugins/charts-c3/c3-chart.css" rel="stylesheet" />

	<!-- Custom scroll bar css-->
	<link href="assets/plugins/scroll-bar/jquery.mCustomScrollbar.css" rel="stylesheet" />

	<!---Font icons css-->
	<link href="assets/plugins/iconfonts/plugin.css" rel="stylesheet" />
	<link href="assets/fonts/fonts/font-awesome.min.css" rel="stylesheet">

</head>

<body class="login-img">
	<div class="page ">

		<!-- page-single -->
		<div class="page-single">
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col mx-auto">
						<div class="text-center mb-6">
							<img src="https://cdn.discordapp.com/attachments/873859091850743821/960236935413104691/Yamasha_Logo_pdf_Format1.png" class="" alt="">
						</div>
						<div class="row justify-content-center">
							<div class="col-md-8 col-lg-6 col-xl-5 col-sm-7">
								<div class="card-group mb-0">
									<div class="card p-4">
										<div class="card-body">
											<h1>Register</h1>
											<p class="text-muted">Create New Account</p>
											<?php if ($form != 3) { ?>
												<form action="#" method="POST">
													<label for="MOB_NUMBER">Mob Number</label>
													<?php if ($form == 1) { ?>

														<div class="input-group mb-3">
															<span class="input-group-addon"><i class="fa fa-user w-4"></i></span>
															<input type="text" name="MOB_NUMBER" id="MOB_NUMBER" class="form-control" placeholder="Mob Number" required>
														</div>
													<?php  } ?>
													<?php if ($form == 2) { ?>

														<div class="input-group mb-3">
															<span class="input-group-addon"><i class="fa fa-user w-4"></i></span>
															<input type="text" name="MOB_NUMBER" id="MOB_NUMBER" class="form-control" value="<?php echo $_SESSION['MOB_NUMBER'] ?>" readonly>
														</div>
														<label for="MOB_OTP">OTP </label>

														<div class="input-group mb-3">
															<span class="input-group-addon"><i class="fa fa-user w-4"></i></span>
															<input type="text" name="MOB_OTP" id="MOB_OTP" class="form-control" placeholder="MOB_OTP" required>
														</div>
													<?php  } ?>
													<?php if ($form == 1) { ?>
														<button type="submit" name="send_otp" class="btn btn-gradient-primary btn-block px-4">
															Send OTP
														</button>
													<?php  } ?>
													<?php if ($form == 2) { ?>
														<button type="submit" name="verify_otp" class="btn btn-gradient-primary btn-block px-4">
															verify OTP
														</button>
													<?php  } ?>
												</form>
											<?php  } ?>




											<?php if ($form == 3) { ?>
												<form action="#" method="POST">
													<label for="EMAIL">EMAIL</label>

													<div class="input-group mb-3">
														<span class="input-group-addon"><i class="fa fa-user w-4"></i></span>
														<input type="email" name="EMAIL" id="EMAIL" class="form-control" placeholder="EMAIL" required>
													</div>



													<label for="PASS">Password</label>

													<div class="input-group mb-3">
														<span class="input-group-addon"><i class="fa fa-user w-4"></i></span>
														<input type="password" name="PASS" id="PASS" class="form-control" placeholder="PASS" required>
													</div>



													<label for="PASS2">Confirm Password</label>

													<div class="input-group mb-3">
														<span class="input-group-addon"><i class="fa fa-user w-4"></i></span>
														<input type="password" name="PASS2" id="PASS2" class="form-control" placeholder="Confirm Password" required>
													</div>


													<div class="row">
														<div class="col-12">
															<button type="submit" name="register" class="btn btn-gradient-primary btn-block px-4">Create a new account</button>
														</div>
													</div>
												</form>
											<?php  } ?>
											<br>
											<div class="text-center ">
												<p class="text-gray-600">
													Already have an account?
													<a href="./login.php" class="font-bold">Log in</a>.
												</p>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div><!-- row end -->
					</div>
				</div><!-- row end -->
			</div>
		</div>
		<!-- page-single end -->
	</div>

	<!-- Jquery js-->
	<script src="assets/js/vendors/jquery-3.2.1.min.js"></script>

	<!--Bootstrap js-->
	<script src="assets/js/vendors/bootstrap.bundle.min.js"></script>

	<!--Jquery Sparkline js-->
	<script src="assets/js/vendors/jquery.sparkline.min.js"></script>

	<!-- Chart Circle js-->
	<script src="assets/js/vendors/circle-progress.min.js"></script>

	<!-- Star Rating js-->
	<script src="assets/plugins/rating/jquery.rating-stars.js"></script>

	<!-- Custom scroll bar js-->
	<script src="assets/plugins/scroll-bar/jquery.mCustomScrollbar.concat.min.js"></script>

</body>

</html>