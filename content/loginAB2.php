<?php
//login vorm AB salvestatud kasutajanimega
session_start();
if(isset($_SESSION['tuvastamine'])){
    header('Location: Materialid.php');
    exit();
}
//kontroll kas login vorm on täidetud?
if(!empty($_POST['login2']) && !empty($_POST['pass2'])) {
    $login = $_POST['login2'];
    $pass = $_POST['pass2'];
    $sool = 'vagavagatekst';
    $krypt = crypt($pass, $sool);
    //kontrollime kas AB on selline kasutaja
    require('conf.php');
    global $yhendus;
    $kask = $yhendus->prepare("Select nimi,onAdmin, koduleht FROM kasutajad where nimi=? and parool=?");
    $kask->bind_param("ss", $login, $krypt);
    $kask->bind_result($nimi, $onAdmin, $koduleht);
    $kask->execute();
    if ($kask->fetch()) {
        $_SESSION['tuvastamine'] = 'niilihtne';
        $_SESSION['kasutaja'] = $nimi;
        $_SESSION['onAdmin'] = $onAdmin;
        if (isset($koduleht)) {
            header("Location: ".$koduleht);
        } else
            header('Location: kontakt.php');
        exit();

    } else {
        echo "kasutaja $login või parool $krypt on vale";
    }
}
?>

<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="../style/style.css";>
</head>
<body>
<h1>Login vorm</h1>
<form action="" method="post">
    Login:
    <input type="text" name="login2" placeholder="kasutaja nimi">
    <br>
    Parool
    <input type="password2" name="pass">
    <br>
    <input type="submit" value="Logi sisse">
</form>
</body>
</html>
