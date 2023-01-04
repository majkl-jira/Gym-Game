const playerLvl = document.getElementById("playerLvl");
const playerXp = document.getElementById("playerXp");
const playerStr = document.getElementById("playerStr");
const playerMoney = document.getElementById("playerMoney");
const protein = document.getElementById("protein");
const creatin = document.getElementById("creatin");
const tren = document.getElementById("tren");
const test = document.getElementById("test");

let xp = parseInt(localStorage.getItem('xp'));
let str = parseInt(localStorage.getItem('str'));
let lvl = parseInt(localStorage.getItem('lvl'));
let money = parseInt(localStorage.getItem('money'));
let lvlUp = parseInt(localStorage.getItem('lvlUp'));
let xpMult = parseInt(localStorage.getItem('xpMult')) || 1;
let strMult = parseInt(localStorage.getItem('strMult')) || 1;

 localStorage.setItem('xp', xp);
 localStorage.setItem('money', money);
 localStorage.setItem('str', str);
 localStorage.setItem('lvl', lvl);
 localStorage.setItem('lvlUp', lvlUp);
 localStorage.setItem('xpMult', xpMult);
 localStorage.setItem('strMult', strMult);

playerXp.innerHTML = "xp : " + xp + " / " + lvlUp;
playerMoney.innerHTML = "Money : " + money;
playerLvl.innerHTML = "LVL : " + lvl;
playerStr.innerHTML = "Streght : " + str;

creatin.onclick = () => {
    if (money >= 100) {
        money = money - 100;
        xpMult = 2;
        creatin.style.display = 'none';
        playerMoney.innerHTML = "Money : " + money;
        parseInt(localStorage.setItem('money', money));
        localStorage.setItem('xpMult', xpMult);
    }
}

protein.onclick = () => {
    if (money >= 100) {
        money = money - 100;
        strMult = 2;
        protein.style.display = 'none';
        playerMoney.innerHTML = "Money : " + money;
        parseInt(localStorage.setItem('money', money));
        localStorage.setItem('strMult', strMult);
    }
}

tren.onclick = () => {
    if (money >= 10000) {
        money = money - 10000;
        strMult = 20;
        tren.style.display = 'none';
        playerMoney.innerHTML = "Money : " + money;
        parseInt(localStorage.setItem('money', money));
        localStorage.setItem('strMult', strMult);
    }
}

test.onclick = () => {
    if (money >= 10000) {
        money = money - 10000;
        xpMult = 20;
        test.style.display = 'none';
        playerMoney.innerHTML = "Money : " + money;
        parseInt(localStorage.setItem('money', money));
        localStorage.setItem('xpMult', xpMult);
    }
}
window.onload = () => {
    if (xpMult >= 2) {
        creatin.style.display = 'none';
    }
    if (strMult >= 2) {
        protein.style.display = 'none';
    }
    if (xpMult >= 20) {
        test.style.display = 'none';
    }
    if (strMult >= 20) {
        tren.style.display = 'none';
    }
}


window.onload = () => {

if (lvl >= 2 && lvl < 4) {
    document.getElementById('capek').src = './res/img/player2.png'
}

else if (lvl >= 4 && lvl < 6) {
    document.getElementById('capek').src = './res/img/player3.png'
}

else if (lvl >= 6 && lvl < 8) {
    document.getElementById('capek').src = './res/img/player4.png'
}

else if (lvl >= 8 && lvl < 10) {
    document.getElementById('capek').src = './res/img/player5.png'
}
}