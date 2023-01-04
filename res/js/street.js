const playerLvl = document.getElementById("playerLvl");
const playerXp = document.getElementById("playerXp");
const playerStr = document.getElementById("playerStr");
const playerMoney = document.getElementById("playerMoney");

let xp = parseInt(localStorage.getItem('xp'));
let str = parseInt(localStorage.getItem('str'));
let lvl = parseInt(localStorage.getItem('lvl'));
let money = parseInt(localStorage.getItem('money'));
let lvlUp = parseInt(localStorage.getItem('lvlUp'));

playerXp.innerHTML = "xp : " + xp + " / " + lvlUp;
playerMoney.innerHTML = "Money : " + money;
playerLvl.innerHTML = "LVL : " + lvl;
playerStr.innerHTML = "Streght : " + str;


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