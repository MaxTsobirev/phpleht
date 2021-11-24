<?php
$serverinimi='localhost';
$kasutajanimi='maks20';
$parool='123456';
$andmebaasinimi='maks20';
$yhendus=new mysqli($serverinimi,$kasutajanimi,$parool,$andmebaasinimi);
$yhendus->set_charset('UTF8');
/*
 * CREATE TABLE loomad(
    id int primary key AUTO_INCREMENT,
    nimi varchar(50),
    kirjeldus text);

insert INTO loomad(nimi,kirjeldus)
VALUES ('koer','siia tuleb kirjeldus');

select * from loomad
 */
?>
