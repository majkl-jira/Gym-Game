const playerLvl = document.getElementById("playerLvl");
const playerXp = document.getElementById("playerXp");
const playerStr = document.getElementById("playerStr");
const playerMoney = document.getElementById("playerMoney");
const cinka = document.getElementById("cinka");
const capek = document.getElementById('capek');

let xp = parseInt(localStorage.getItem('xp')) || 0;
let str = parseInt(localStorage.getItem('str')) || 1;
let lvl = parseInt(localStorage.getItem('lvl')) || 1;
let money = parseInt(localStorage.getItem('money')) || 0;
let lvlUp = parseInt(localStorage.getItem('lvlUp')) || 20;
let xpMult = parseInt(localStorage.getItem('xpMult')) || 1;
let strMult = parseInt(localStorage.getItem('strMult')) || 1;

localStorage.setItem('xp', xp);
localStorage.setItem('str', str);
localStorage.setItem('lvl', lvl);
localStorage.setItem('money', money);
localStorage.setItem('lvlUp', lvlUp);
localStorage.setItem('xpMult', xpMult);
localStorage.setItem('strMult', strMult);

playerXp.innerHTML = "xp : " + xp + " / " + lvlUp;
playerMoney.innerHTML = "Money : " + money;
playerLvl.innerHTML = "LVL : " + lvl;
playerStr.innerHTML = "Streght : " + str;

cinka.onclick = () => {
    if (xp >= lvlUp) {
        xp = xp - lvlUp;
        str += 1 * strMult;
        lvl++;
        lvlUp = lvlUp + lvlUp;
        localStorage.setItem('xp', xp);
        localStorage.setItem('strMult', strMult);
    }
    xp += str *xpMult;
    money += str;
    playerXp.innerHTML = "xp : " + xp + " / " + lvlUp;
    playerMoney.innerHTML = "Money : " + money;
    playerLvl.innerHTML = "LVL : " + lvl;
    playerStr.innerHTML = "Streght : " + str;
    localStorage.setItem('xp', xp);
    localStorage.setItem('str', str);
    localStorage.setItem('lvl', lvl);
    localStorage.setItem('money', money);
    localStorage.setItem('lvlUp', lvlUp);
    localStorage.setItem('xpMult', xpMult);
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