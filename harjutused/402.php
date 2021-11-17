<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Ülesanne 402</title>
</head>
<body>
<a href="../content/test.php"> tagasi....Ülesannete leht</a>
<h1>Ülesanne 402</h1>
<h2>1. 20 Checkbox tsükliga</h2>
<?php
    $i=1;
    while($i<=20){
        echo "<input type='checkbox' id='$i' name='box[]' value='$i'>";
        echo "<label for='$i'>box ".$i."</label><br>";
        $i++;
    }
?>
<h3>2. 20 teksti tsükliga</h3>
<?php
    $qw=1;
    while($qw<=20){
        echo "<input type='radio' id='l.$qw' name='radio[]' value='$qw'>";
        echo "<label for='l.$qw'>radio ".$qw."</label><br>";
        $qw++;
    }

?>
<h4>3. 20 raadionnuppud tsükliga</h4>
<?php
$a=1;
while($a<=20){
    echo "<input type='text' id='a.$a' name='text[]' value='$a'>";
    echo "<label for='a.$a'>text ".$a."</label><br>";
    $a++;
}
?>
</body>
</html>
