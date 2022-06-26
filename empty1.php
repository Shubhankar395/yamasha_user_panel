<?php $nav_i = 0;
$page_title = 'empty';
include './includes/config.php';
?>

<!doctype html>
<html lang="en" dir="ltr">

<head>
	<?php include "./includes/com_head.php";
	include "./includes/com_css.php"; ?>



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


				<?php include "./views/index.php";
				include "./includes/footer.php"; ?>
			</div>
			<!-- End content-area-->
		</div>
	</div>
	<!-- End Page-->
	<?php
	include "./includes/com_js.php";
	?>
</body>

</html>