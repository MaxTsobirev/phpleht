
//перемножает
function calculate(val, currency){
    return(val* currency).toFixed(2);
    // toFixed(3) - 3 знака после запятой
}

function radioChange(event){
    var vastus=document.getElementById("vastus");
    var kogus=document.getElementById("kogus");
    var pilt=document.getElementById("pilt");


    const dollar=1.16;
    const rub=84.20;
    const hryvnia=30.79;
    const zloty=4.59;
    if(event.target.id=="dollar"){
        console.log("uhgyvgy")
        vastus.innerHTML=calculate(kogus.value, dollar) + "$";
        pilt.src="piltid/dol.png";
    } else if (event.target.id=="rub"){
        vastus.innerHTML=calculate(kogus.value, rub) + "₽";
        pilt.src="piltid/rub.jpg";
    } else if (event.target.id=="hryvnia"){
        vastus.innerHTML=calculate(kogus.value, hryvnia) + "₴";
        pilt.src="piltid/hry.png";
    } else if (event.target.id=="zloty"){
        vastus.innerHTML=calculate(kogus.value, zloty) + "Zł";
        pilt.src="piltid/zlo.jpg";
    }

}
function selectOptionChange(event){
    var vastus2=document.getElementById("vastus2");
    var kogus2=document.getElementById("kogus2");

    const dollar=1.16;
    const rub=84.20;
    const hryvnia=30.79;
    const zloty=4.59;

    var inputValue=kogus2.value;
    if(event.target.value==="dollar"){
        vastus2.innerHTML=calculate(inputValue, dollar) + "$";
    } else if (event.target.value==="rub"){
        vastus2.innerHTML=calculate(inputValue, rub) + "₽";
    } else if (event.target.value==="hryvnia"){
        vastus2.innerHTML=calculate(inputValue, hryvnia) + "₴";
    } else if (event.target.value==="zloty"){
        vastus2.innerHTML=calculate(inputValue, zloty) + "Zł";
    }
}
function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Sisesta kogus");
        return false;
    }
}
function inputCurrencyText(){
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    const dollar=1.16;
    const rub=84.20;
    const hryvnia=30.79;
    const zloty=4.59;

    if(inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$";
    }
}
function Change(event){
    var vastus4=document.getElementById("vastus4");
    var kolvo=document.getElementById("kolvo");


    const mm=1000000.0;
    const sm=100000.0;
    const dm=10000.0;
    const m=1000.0;

    if(event.target.id=="mm"){
        vastus4.innerHTML=calculate(kolvo.value, mm) + "mm";
    } else if (event.target.id=="sm"){
        vastus4.innerHTML=calculate(kolvo.value, sm) + "sm";
    } else if (event.target.id=="dm"){
        vastus4.innerHTML=calculate(kolvo.value, dm) + "dm";
    } else if (event.target.id=="m"){
        vastus4.innerHTML=calculate(kolvo.value, m) + "m";
    }

}
//перемножает
function calculate(val, currency){
    return(val* currency).toFixed(2);
    // toFixed(3) - 3 знака после запятой
}

function radioChange(event){
    var vastus=document.getElementById("vastus");
    var kogus=document.getElementById("kogus");
    var pilt=document.getElementById("pilt");


    const dollar=1.16;
    const rub=84.20;
    const hryvnia=30.79;
    const zloty=4.59;
    if(event.target.id=="dollar"){
        console.log("uhgyvgy")
        vastus.innerHTML=calculate(kogus.value, dollar) + "$";
        pilt.src="piltid/dol.png";
    } else if (event.target.id=="rub"){
        vastus.innerHTML=calculate(kogus.value, rub) + "₽";
        pilt.src="piltid/rub.jpg";
    } else if (event.target.id=="hryvnia"){
        vastus.innerHTML=calculate(kogus.value, hryvnia) + "₴";
        pilt.src="piltid/hry.png";
    } else if (event.target.id=="zloty"){
        vastus.innerHTML=calculate(kogus.value, zloty) + "Zł";
        pilt.src="piltid/zlo.jpg";
    }

}
function selectOptionChange(event){
    var vastus2=document.getElementById("vastus2");
    var kogus2=document.getElementById("kogus2");

    const dollar=1.16;
    const rub=84.20;
    const hryvnia=30.79;
    const zloty=4.59;

    var inputValue=kogus2.value;
    if(event.target.value==="dollar"){
        vastus2.innerHTML=calculate(inputValue, dollar) + "$";
    } else if (event.target.value==="rub"){
        vastus2.innerHTML=calculate(inputValue, rub) + "₽";
    } else if (event.target.value==="hryvnia"){
        vastus2.innerHTML=calculate(inputValue, hryvnia) + "₴";
    } else if (event.target.value==="zloty"){
        vastus2.innerHTML=calculate(inputValue, zloty) + "Zł";
    }
}
function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Sisesta kogus");
        return false;
    }
}
function inputCurrencyText(){
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    const dollar=1.16;
    const rub=84.20;
    const hryvnia=30.79;
    const zloty=4.59;

    if(inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$";
    }
}
function Change(event){
    var vastus4=document.getElementById("vastus4");
    var kolvo=document.getElementById("kolvo");


    const mm=1000000.0;
    const sm=100000.0;
    const dm=10000.0;
    const m=1000.0;

    if(event.target.id=="mm"){
        vastus4.innerHTML=calculate(kolvo.value, mm) + "mm";
    } else if (event.target.id=="sm"){
        vastus4.innerHTML=calculate(kolvo.value, sm) + "sm";
    } else if (event.target.id=="dm"){
        vastus4.innerHTML=calculate(kolvo.value, dm) + "dm";
    } else if (event.target.id=="m"){
        vastus4.innerHTML=calculate(kolvo.value, m) + "m";
    }

}