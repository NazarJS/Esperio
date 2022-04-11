headerInput.onclick  = function(e) {
    e.stopPropagation();

    inputList.style.display = "block";
}

window.addEventListener('click', function (e) {
    let isClickInsideElement = document.querySelector('.header-magnifier').contains(e.target);

    if (isClickInsideElement) {
        headerBtnsSearch.style.display = "block";
    } else {
        headerBtnsSearch.style.display = "none";
        inputList.style.display = "none";
    }

    if (e.target.id === 'burgerImg') {
        headerDesctop.style.display = "none";
        headerMob.style.display = "block";  
    }

    if (e.target.id === 'headerBtnsSearch') {
        inputList.style.display = "block";
    }

    if (e.target.id === 'burgerImg') {
        headerDesctop.style.display = "none";
    }

    if (e.target.id === 'headerInputMob') {
        inputListMob.style.display = "block";
    } else {
        inputListMob.style.display = "none";
    }

    if (e.target.id === 'closeHeader') {
        headerMob.style.display = "none";
        headerDesctop.style.display = "flex"; 
    }

    e.stopPropagation();
});

let content = document.querySelectorAll('.info-comments-wrap');

for (let i = 0; i < content.length; ++i) {
    let btn = content[i].childNodes[1];
    let answer = content[i].childNodes[3];

    btn.onclick = function () {
        answer.classList.toggle('active');
        
        if (btn.innerText === 'ответ магазина') {
            btn.innerText = 'свернуть ответ';
        } else {
            btn.innerText = 'ответ магазина';
        }
    }
}
