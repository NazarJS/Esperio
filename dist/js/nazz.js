headerInput.onclick  = function(e) {
    e.stopPropagation();
    inputList.style.display = "block";
}
headerInputMob.onclick  = function(e) {
    e.stopPropagation();
    inputListMob.style.display = "block";
}
magnifier.onclick = (e) => {
    magnifier.style.display = "none";
    headerBtnsSearch.style.display = "inline-block";
}    
wrapper.onclick = (e) => {
    // e.stopPropagation();
    inputListMob.style.display = "none";
    headerBtnsSearch.style.display = "none";
    inputList.style.display = "none";
    window.innerWidth < 992 ? false: magnifier.style.display = "inline-block";
}
magnifier.onclick = (e) => {
    e.stopPropagation();
    magnifier.style.display = "none";
    headerBtnsSearch.style.display = "inline-block";
    console.log('magnifier')
}
burger.onclick = () => {
    headerDesctop.style.display = "none";
    headerMob.style.display = "block";
}
closeHeader.onclick = () => {
    headerMob.style.display = "none";
    headerDesctop.style.display = "flex";
    setTimeout(() =>  magnifier.style.display = "none", 0.1);    
}

