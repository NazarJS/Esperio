headerInput.onclick  = function(e) {
    e.stopPropagation();
    inputList.style.display = "block";
}
    
wrapper.onclick = () => {
    // console.log("done")
    inputList.style.display = "none";
}
magnifier.onclick = (e) => {
    magnifier.style.display = "none";
    headerBtnsSearch.style.display = "inline-block";
}
magnifierInput.onclick = () => {
    magnifier.style.display = "inline-block";
    headerBtnsSearch.style.display = "none";
}