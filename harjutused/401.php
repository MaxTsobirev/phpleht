<?php
// andmed massiivis
$data=[
    "nimi"=> "Maksim Tsõbirev",
    "aadress"=> "Kopli,Tallinn",
    "pilt"=> "arc.jpg",
    "koduleht"=>"https://tsybitev20.thkit.ee/php"
];
?>
<br>
<a href="../phpleht/index.php?leht=test"> tagasi....Ülesannete leht</a>
<h1>Ülesanne 401</h1>
<p> <b>
        <?=$data["nimi"]?>
    </b></p>
<p><i>
        <?=$data["aadress"]?>
    </i></p>
<img src="<?=$data["pilt"]?>"alt="pildike">
<br>
<a href="<?=$data["koduleht"]?>"target="_blank">Tsõbirev Koduleht</a>
// massiiv array funktsiooniga
<h1>Ülesanne 401/var 2 - array()</h1>
<?php
$array=array("Maksim Tsõbirev","Tallinn, Kopli","arc.jpg","tsybitev20.thkit.ee");
echo "<b>Nimi: ".$array[0]."</b><br>";
echo "<i>Aadress: ".$array[1]."</i><br>";
echo "<img src='$array[2]' alt='pildike'>";
echo "<br><a href='https://$array[3]'>Koduleht<a/>"
?>

