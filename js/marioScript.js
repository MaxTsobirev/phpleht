
var kellekord="kart/qq.png";

function klik(pilt){
    pilt.src=kellekord;

    if(vyidukontroll()){
        alert("sa võtsid!");
        lopp=true;
    }
    if(kellekord=="i/i1.png"){
        kellekord="i/i2.png";
    } else {
        kellekord="i/i1.png";
    }
    if(ruuduKasutatud()){
        alert("Mäng on läbi");
    }
}
function ruuduKasutatud(){
    lopp=true;
    kart=document.images;
    for(var i=0; i<kart.length; i++){
        if(kart[i].src.split("/").pop()=="qq.png"){
            return false;
            //split("/") - делает массив из пути файлов
            //pop() - выбирает из массива последнее значение
        }
    }
    return true;

}
function klikValik(pilt){
    kellekord=pilt.src;
    document.getElementById("qw").src=kellekord;
}
// определяем победителя
function sisu(nr){
    var fnimi=document.getElementById("pilt"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c, sisulopp){
    sisulopp=sisulopp.split("/").pop();
    //a,b,c номера картинок, sisulopp- адрес нужной картинки
    if(sisu(a)==sisulopp && sisu(b)==sisulopp && sisu(c)==sisulopp)
    {return true;}else {return false;}






    return false;
}
function vyidukontroll(){
    if(kontrollsisu(1,2,3, kellekord)){return true;}
    if(kontrollsisu(4,5,6, kellekord)){return true;}
    if(kontrollsisu(7,8,9, kellekord)){return true;}
    if(kontrollsisu(1,4,7, kellekord)){return true;}
    if(kontrollsisu(2,5,8, kellekord)){return true;}
    if(kontrollsisu(3,6,9, kellekord)){return true;}
    if(kontrollsisu(1,5,9, kellekord)){return true;}
    if(kontrollsisu(3,5,7, kellekord)){return true;}
    return false;
}