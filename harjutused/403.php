
<a href="../content/test.php"> tagasi....Ülesannete leht</a>
<h1>Ülesanne 403</h1>
<?php
$varv=array ('Black','Gold','Silver','Yellow','White','Crimson','Blue','Pink','Orange','Grey','Green','Red','Aqua','Brown','Coral');
//tsükliga kuvame värvi massiivist
for($i = 0; $i <15; $i++){
    echo "<span style='color: $varv[$i]' >$varv[$i]</span><br>";
}
?>

