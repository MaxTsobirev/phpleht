function kustuta(){
    var t=document.getElementById("tahvel").getContext("2d");
    t.clearRect(0,0,400,300); //x,y, laius,kõrgus
}

//joon

function joonistaJoon(){
    var t=document.getElementById("tahvel").getContext("2d");
    //lihtme joon
    t.beginPath();
    t.moveTo(100,95); //x, y
    t.lineTo(150,30)
    t.stroke();

    // joon valge värviga ja laiusega

    t.beginPath();
    t.strokeStyle="white";
    t.lineWidth=5;
    t.moveTo(10,10);
    t.lineTo(150,30)
    t.stroke();
}

//ring

function joonistaRing(){
    var t=document.getElementById("tahvel").getContext("2d");
    t.beginPath();
    t.arc(150, 80, 50,0, 2*Math.PI, true); //x, y, R , arc-duga
    t.stroke();

    //täidetud ring2
    t.beginPath();
    t.fillStyle="blue";
    t.arc(100, 100, 30,0, 2*Math.PI, true); //x, y, R , arc-duga
    t.fill();

}

//ruut

function joonistaRuut(){
    var t=document.getElementById("tahvel").getContext("2d");
    t.fillStyle="red";
    t.fillRect(120,50,60,60)
}

//legs

function joonistaLegs(){
    var t=document.getElementById("tahvel").getContext("2d");
    //nogi
    t.fillStyle="green";
    t.fillRect(150,100,40,25)

    t.fillStyle="green";
    t.fillRect(90,100,40,25)

    //4ernie kubiki

    t.fillStyle="black";
    t.fillRect(150,120,40,5)

    t.fillStyle="black";
    t.fillRect(90,120,40,5)

}

//chest

function joonistaChest(){
    var t=document.getElementById("tahvel").getContext("2d");
    t.fillStyle="green";
    t.fillRect(118,40,45,60)
}

//head

function joonistaHead(){
    var t=document.getElementById("tahvel").getContext("2d");
    t.fillStyle="green";
    t.fillRect(104,10,75,40)
}

//figure face

function joonistaFace(){
    var t=document.getElementById("tahvel").getContext("2d");
    //glaza
    t.fillStyle="black";
    t.fillRect(150,20,15,10)

    t.fillStyle="black";
    t.fillRect(118,20,15,10)

    //lico

    t.fillStyle="black";
    t.fillRect(133,30,17,5)

    t.fillStyle="black";
    t.fillRect(129,35,25,5)

    t.fillStyle="black";
    t.fillRect(129,35,4,9)

    t.fillStyle="black";
    t.fillRect(150,35,4,9)

}

//full

function joonistaFull(){
    var t=document.getElementById("tahvel").getContext("2d");
    //nogi
    t.fillStyle="green";
    t.fillRect(150,100,40,25)

    t.fillStyle="green";
    t.fillRect(90,100,40,25)

    //4ernie kubiki

    t.fillStyle="black";
    t.fillRect(150,120,40,5)

    t.fillStyle="black";
    t.fillRect(90,120,40,5)

    t.fillStyle="green";
    t.fillRect(118,40,45,60)

    t.fillStyle="green";
    t.fillRect(104,10,75,40)

    //glaza
    t.fillStyle="black";
    t.fillRect(150,20,15,10)

    t.fillStyle="black";
    t.fillRect(118,20,15,10)

    //lico

    t.fillStyle="black";
    t.fillRect(133,30,17,5)

    t.fillStyle="black";
    t.fillRect(129,35,25,5)

    t.fillStyle="black";
    t.fillRect(129,35,4,9)

    t.fillStyle="black";
    t.fillRect(150,35,4,9)
}