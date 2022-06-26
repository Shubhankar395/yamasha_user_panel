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
    // checking number is already exist or not
    $number_ex_q = mysqli_num_rows(mysqli_query($con, "SELECT * FROM `clients` WHERE MOB_NUMBER='$MOB_NUMBER'"));

    if ($number_ex_q != 0) {
        die('Number already exists');
    }
    $FourDigitRandomNumber = mt_rand(1111, 9999);
    echo $FourDigitRandomNumber;
    // sending otp to submitted number 
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://www.fast2sms.com/dev/bulkV2?authorization=aW2tFnzYRJ6bfprPEKsBZOlL0kSCH4gmw5MX8hTUGjD137QidyJRSrTGtPQYqXAONgcZo18u4C5Vn3EW&variables_values=$FourDigitRandomNumber&route=otp&numbers=" . urlencode($MOB_NUMBER),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_SSL_VERIFYHOST => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "cache-control: no-cache"
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        // echo $response;
    }
    // saving otp log in db

    $otp_log_q = mysqli_query($con, "INSERT INTO `otp_log`( `MOB`, `OTP`, `DAT`) VALUES ('$MOB_NUMBER','$FourDigitRandomNumber','$CURRENT_DAT')");
    if_not_die($otp_log_q);

    // saving number in session

    $_SESSION['MOB_NUMBER'] = $MOB_NUMBER;
    $_SESSION['ORG_OTP'] = $FourDigitRandomNumber;
    // changing form level
    $_SESSION['form'] = 2;
    // refreshing page
    replace('./register.php');
    die('send_otp');
}
if (isset($_POST['verify_otp'])) {

    $MOB_NUMBER = $_SESSION['MOB_NUMBER'];

    // getting form details
    $MOB_OTP = mysqli_real_escape_string($con, Val_input($_POST['MOB_OTP']));

    $ORG_OTP =  $_SESSION['ORG_OTP'];
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
    $NAME = mysqli_real_escape_string($con, Val_input($_POST['NAME']));
    $ALT_NUM = mysqli_real_escape_string($con, Val_input($_POST['ALT_NUM']));
    $DOB = mysqli_real_escape_string($con, Val_input($_POST['DOB']));
    $DOC_TYPE = mysqli_real_escape_string($con, Val_input($_POST['DOC_TYPE']));
    $DOC_ID = mysqli_real_escape_string($con, Val_input($_POST['DOC_ID']));
    // echo $DOB;
    $DOB = strtotime($DOB);
    // echo $timestamp;
    // die('testing');
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
    $insert_q = mysqli_query($con, "INSERT INTO `clients`( `MOB_NUMBER`, `EMAIL`,`NAME`, `ALT_NUM`, `DOB`, `DOC_TYPE`, `DOC_ID`, `PASS`) VALUES ('$MOB_NUMBER','$EMAIL','$NAME','$ALT_NUM','$DOB','$DOC_TYPE','$DOC_ID','$str_pass')");
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
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $page_title = 'Register';
    include './includes/com_head.php' ?>

    <link href="../website/css/style.css" rel="stylesheet" type="text/css" />
    <link href="../website/css/responsive.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="../website/css/drop-down.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    <style>
        .backColor {
            background-color: #043766;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        form {
            border: 2px solid yellow;
            border-radius: 10px;
            margin-top: 40px;
            padding: 15px;
        }

        .input {
            color: #6b6745;
        }

        input {
            background-color: #043766;
            width: 100%;
            margin-top: 8px;
            border: none;
            border-bottom: 1px solid rgb(230, 230, 144);
        }

        select {
            background-color: #043766;
            width: 100%;
            margin-top: 8px;
            border: none;
            border-bottom: 1px solid rgb(230, 230, 144);
            color: #f3f8fd;
        }

        @media (min-width:577px) and (max-width:990px) {

            #logo1 {
                display: none;
            }

            .logo {
                display: none;
            }

            .para {
                display: none;
            }
        }

        @media (max-width:576px) {

            #logo1 {
                display: none;
            }

            .logo {
                display: none;
            }

            .para {
                display: none;
            }
        }

        .logo {
            margin-left: -132px;
            height: 180px;
            width: 60%;
        }
    </style>
</head>

<body>
    <?php
    $header_base_url = '../website/';
    // $subheader_fixed_header = "fixed-header";
    include "../website/header.php";
    ?>

    <div class="container-fluid backColor">
        <div class="row justify-content-center align-items-center">
            <!-- image and  -->
            <div class="col-lg-6 d-flex " id="logo1">
                <img src="https://cdn.discordapp.com/attachments/873859091850743821/960291186537545748/Yamasha_Logo_pdf_Format.png" class='logo ' alt="#error">
                <p class="text-warning my-auto mx-5 p-2 para">World Class Investment Service, Primium Privileges ad unique Invesment Opportunities Just for You.
                </p>
            </div>
            <!-- Registration Form -->
            <div class="col-lg-3 col-sm-7 col-md-8 border-warning">
                <form action="#" class="form-group" id="form" method="post">
                    <div class="text-center">
                        <p class="text-warning">New User Registration</p>
                    </div>
                    <?php if ($form != 3) { ?>
                        <?php if ($form == 1) { ?>
                            <input type="text" name="MOB_NUMBER" id="MOB_NUMBER" placeholder="MOBILE NUMBER" title="enter valid 10 digit number" pattern="[1-9]{1}[0-9]{9}" required>
                        <?php  } ?>
                        <?php if ($form == 2) { ?>
                            <input type="text" name="MOB_NUMBER" id="MOB_NUMBER" value="<?php echo $_SESSION['MOB_NUMBER'] ?>" readonly>
                            <input type="text" name="MOB_OTP" id="MOB_OTP" class="form-control" placeholder="Enter OTP" required>
                        <?php  } ?>
                        <?php if ($form == 1) { ?>

                            <div class="text-center mt-2">
                                <button type="submit" name="send_otp" class="btn btn-warning px-5"> Send OTP</button>
                            </div>
                        <?php  } ?>
                        <?php if ($form == 2) { ?>

                            <div class="text-center mt-2">
                                <button type="submit" name="verify_otp" class="btn btn-warning px-5"> Verify OTP</button>
                            </div>
                        <?php  } ?>
                    <?php  } ?>

                    <?php if ($form == 3) { ?>

                        <input type="text" name="NAME" required autocomplete="name" placeholder="Full Name" class="">
                        <input type="text" name="ALT_NUM" placeholder="Alternate number" title="enter valid 10 digit number" pattern="[1-9]{1}[0-9]{9}" class="">
                        <input type="date" name="DOB" required autocomplete="birth date" placeholder="Date of Birth" class="input">
                        <div class="d-flex ">
                            <select type="dropdown" name="DOC_TYPE" required="" placeholder="Select Document" class="mx-2">
                                <option value="">No Select</option>
                                <option value="Pan Card">Pan Card</option>
                                <option value="Passport">Passport</option>
                            </select>
                            <input type="text" name="DOC_ID" required="" placeholder="Pan / Passport" class="mx-2">
                        </div>
                        <input type="email" name="EMAIL" required="" placeholder="Email ID" class="">
                        <input type="password" name="PASS" required="" placeholder="Password" class="">
                        <input type="password" name="PASS2" required="" placeholder="Password again" class="">
                        <div class="text-center mt-2">
                            <button type="submit" name="register" class="btn btn-warning px-5">Register</button>
                        </div>
                    <?php  } ?>
                    <div class="text-center mt-2">
                        <button type="button" onclick="location.replace('./login.php')" class="border-0 text-light" style="background-color: #043766;">Login Page</button>
                    </div>

                </form>

            </div>
        </div>

    </div>
    <div class="text-center">
        <?php
        include "../website/footer.php";
        ?>
    </div>



    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>

</html>