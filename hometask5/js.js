let 
    menu = document.querySelectorAll('.menu')[0],
    menuItem = document.querySelectorAll('.menu-item'),
    body = document.getElementsByTagName('body')[0],
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    feedBack = document.getElementById('prompt'),
    itemLi = document.createElement('li'),
    promptforApple = document.querySelector("#prompt");


console.log(menu);
console.log(body);
console.log(title);
console.log(adv);
console.log(feedBack);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";


itemLi.classList.add('menu-item');
itemLi.textContent = 'Пятый пункт';
menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(itemLi);

title.textContent = '"Мы продаем только подлинную технику Apple"';


adv.remove();


let yourOpinion = prompt('отношение к технике apple?');
promptforApple.textContent = yourOpinion;
