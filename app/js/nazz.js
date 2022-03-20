headerInput.onclick = function (e) {
  e.stopPropagation();
  inputList.style.display = "block";
};

wrapper.onclick = () => {
  inputList.style.display = "none";
};
magnifier.onclick = () => {
  magnifier.style.display = "none";
  headerBtnsSearch.style.display = "inline-block";
};
//hide input
magnifierInput.onclick = () => {
  magnifier.style.display = "inline-block";
  headerBtnsSearch.style.display = "none";
};
