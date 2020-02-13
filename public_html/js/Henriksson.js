/* 
Toni Henriksson
 */

let palkinnot = new Array();
let henkilöt = new Array(); 

function newPrize() {
    let prize = document.getElementById("prize").value;
    palkinnot.push(prize);
    printPrizes.innerHTML = palkinnot;
    document.getElementById("prize").value ="";
    
    printPrizes();
    document.getElementById("prize").focus();
}

function newPerson() {
    let person = document.getElementById("person").value;
    henkilöt.push(person);
    printPersons.innerHTML = henkilöt;
    document.getElementById("person").value ="";
    
    printPersons();
    document.getElementById("person").focus();
}

function printPrizes() {
    document.getElementById("prizes").innerHTML ="";
        
    for (let i = 0; i < palkinnot.length; i++) {
        document.getElementById("prizes").innerHTML += 
                "<li>" + palkinnot[i] + "</li>";
    }
}

function printPersons() {
    document.getElementById("persons").innerHTML ="";
        
    for (let i = 0; i < henkilöt.length; i++) {
        document.getElementById("persons").innerHTML += 
                "<li>" + henkilöt[i] + "</li>";
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function toPerson() {
    if (palkinnot.length === 0 && henkilöt.length > 0) {
        ilmoitus1 = "No more prizes.";
        return alert(ilmoitus1);       
    } else if (henkilöt.length === 0 && palkinnot.length > 0) {
        ilmoitus2 = "No more persons.";
        return alert(ilmoitus2);
    } else if (palkinnot.length === 0 && henkilöt.length === 0) {
        return;
    }
    let henkilö = getRndInteger(0, henkilöt.length - 1);
    document.getElementById("personAndPrice").innerHTML += 
            "<li>" + palkinnot[0] + " : " + henkilöt[henkilö] + "</li>";
    
    palkinnot.splice(0, 1);
    henkilöt.splice(henkilö, 1);
    
    printPrizes();
    printPersons();
}

