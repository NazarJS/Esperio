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

let rew = document.querySelectorAll('.info-comments-link');
let ans = document.querySelectorAll('.comments-answer')
rew.forEach(el => {
    el.addEventListener('click', () => {
        el.innerHTML = 'Ответ магазина'
        ans.style.display = 'none';
    })
})
