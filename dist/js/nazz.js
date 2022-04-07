headerInput.onclick  = function(e) {
    e.stopPropagation();

    inputList.style.display = "block";
}

headerMob.onclick  = function(e) {
    e.stopPropagation();

    if (e.target.id === 'headerInputMob') {
        inputListMob.style.display = "block";
    } else {
        inputListMob.style.display = "none";
    }
}

burger.onclick = () => {
    headerDesctop.style.display = "none";
    headerMob.style.display = "block";
}

closeHeader.onclick = () => {
    headerMob.style.display = "none";
    headerDesctop.style.display = "flex"; 
}

window.addEventListener('click', function (e) {
    let isClickInsideElement = document.querySelector('.header-magnifier').contains(e.target);

    if (isClickInsideElement) {
        headerBtnsSearch.style.display = "block";
    } else {
        headerBtnsSearch.style.display = "none";
        inputList.style.display = "none";
    }
});