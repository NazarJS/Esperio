headerInput.onclick  = function(e) {
    e.stopPropagation();
    inputList.style.display = "block";
}
headerInputMob.onclick  = function(e) {
    e.stopPropagation();
    inputListMob.style.display = "block";
}
magnifier.onclick = (e) => {
    e.stopPropagation();
    magnifier.style.display = "none";
    headerBtnsSearch.style.display = "inline-block";
}    
wrapper.onclick = (e) => {
    e.stopPropagation();
    // inputList.style.display = "none";
    inputListMob.style.display = "none";
    headerBtnsSearch.style.display = "none";
    inputList.style.display = "none";
    magnifier.style.display = "inline-block";
}

//hide input
// magnifierInput.onclick = () => {
//     magnifier.style.display = "inline-block";
//     headerBtnsSearch.style.display = "none";
// }
burger.onclick = () => {
    headerDesctop.style.display = "none";
    headerMob.style.display = "block";
}
closeHeader.onclick = () => {
    headerDesctop.style.display = "flex";
    headerMob.style.display = "none";
}