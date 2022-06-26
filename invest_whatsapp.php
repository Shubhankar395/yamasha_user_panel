<?php





$nav_i = 1;
$page_title = '';


?>

<!doctype html>
<html lang="en" dir="ltr">

<head>
	<?php include "./includes/com_head.php";
	include "./includes/com_css.php"; ?>
<style>
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.color{
    color: #0286FF;
}

.container1{
    height: 100vh;
    background-size: cover;
    background-image: url('https://cdn.discordapp.com/attachments/962990670962900992/983770224086093964/maxim-hopman-fiXLQXAhCfk-unsplash.jpg');
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-box{
    
    width: 70%;
    background-color:#fffcfc;
    border-radius: 6px;
    padding: 35px;
}

.wraper-box{

    display: flex;
    justify-content: space-around;
    align-items: center;
}


/* Left Div */
.left h4{
    font-size: x-large;
    padding: 10px 0;
}

.left h1{
    padding: 15px 0;
}
.left p{
    font-size: x-large;
    padding: 10px 2px;
}

.left .list{

        padding-left: 35px;
}
.list .list-item{
    padding: 15px 0;
    color: rgb(47, 46, 46);
    letter-spacing: .1rem;
}

/* Left Div Close */

/* Right Div Start */

.right .img{
    margin-left: 20px;
    width: 75%;
}

.right button{
    margin-top: 15px;
    background-color: green;
    border: 0;
    border-radius: 12px;
    padding: 10px;
    width: 100%;
}

.right button a{
    text-decoration: none;
    color: white;
}

.form{
    padding: 2rem;
}

form input{
    width: 100%;
    padding: 7px;
    border-radius: 6px;
    border: 1px solid #0286FF;
}

.termsConditions{
    display: inline-block;
    margin-left: 35px;
    margin-top: 5rem;
    text-decoration: none;
    color: gray;
}

@media (min-width:991px) and (max-width:1200px){

        .right{
            margin-left: 3rem;
        }

        .right .img{
            width: 80%;
        }
        .right button{
            width: 95%;
            margin-top: 3rem;
            
        }
}

@media (min-width:577px) and (max-width:991px) {

    .container1{
        height: auto;
        width: 100%;
    }

    .container-box{
        width: 100%;
        border-radius: 0;
        padding: 5px;
    }
    .wraper-box{
        flex-direction: column;
    }

    .left{
        /* text-align: ; */
        margin-top: 5rem;
    }
    .left h4{
        text-align: left;
        margin-top: 3rem;
    }

    .right .img{
        position: absolute;
        top: 15px;
        left: 0%;
        width: 29%;
    }
    /* .right button{
        width: 100%;
        padding: 10px 30px;
    } */
    
}

@media (max-width:577px){

    .container1{
        height: auto;
        width: 100%;
    }

    .container-box{
        width: 100%;
        border-radius: 0;
        padding: 5px;
    }
    .wraper-box{
        flex-direction: column;
    }

    .left{
        padding: 10px;
    }
    .left h4{
       
        margin-top: 2rem;
    }

    .right .img{
        display: none;
    }
    /* .right button{
        width: 100%;
        padding: 10px 30px;
    } */
}
</style>

</head>

<body class="app sidebar-mini rtl bg-img ">

	<!--Global-Loader-->
	<div id="global-loader"></div>

	<div class="page">
		<div class="page-main">

			<?php include "./includes/header.php";
			include "./includes/nav.php";
			?>



			<!--content-area-->
			<div class="content-area">
        <!-- Contact on Email -->

        <div class="contact">
            <div class="container1">
                <div class="container-box">
                    <div class="wraper-box">
                        <div class="left">
                            <h4 class="color">Investing</h4>
                            <h1 class="color"># START KAR KE DEKHO</h1>
                            <P>With YAMASHA , it's Easy</P>
                            <ul class="list">
                                <li class="list-item">Free Trading Platform & Advisory</li>
                                <li class="list-item">0 Brokrage On Delivery</li>
                                <li class="list-item">Minimum Fund Required 5,00,000 INR Only</li>
                            </ul>
                        </div>
                        <div class="right">
                            <img src="https://cdn.discordapp.com/attachments/962990670962900992/983770419502927912/Yamasha_Logo_pdf_Format1.png" class="img" alt="#error" />
                            <form action="" class="form">
                                <input type="text" placeholder="Client id" name="client" required>
                                <br><br>
                                <input type="password" placeholder="password" name="password" required>
                            </form>
                            <button type="button"><a href="https://wa.me/917850940696"><img src="https://cdn.discordapp.com/attachments/962990670962900992/983770540030427216/whatsapp.png" alt="" style="width: 20px; display: inline-block;vertical-align: middle;"></a></button>
                        </div>
                    </div>
                    <a href="#" class="termsConditions">Terms & Conditions</a>
                </div>
            </div>
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
        <script src="https://kit.fontawesome.com/914412e122.js" crossorigin="anonymous"></script>

</body>

</html>