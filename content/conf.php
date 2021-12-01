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
/*
 * create table puud(
    id int primary key AUTO_INCREMENT,
    puunimi varchar(50),
    pilt TEXT)
 * */


/*
 * create TABLE kasutajad (
    id int not null primary key AUTO_INCREMENT,
    nimi varchar (12),
    parool varchar(120),
    onAdmin tinyint,
    koduleht varchar(100))
 */

/*
 * create table meterialid(
    id int primary key AUTO_INCREMENT,
    materialid varchar(50))
 */

?>
