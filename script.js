


function show () {
    document.querySelector(".popup").setAttribute("style" , "  opacity: 1; top: 50%;");
    document.querySelector(".popup-overlay").setAttribute("style" , "display: block;");
}

var popupCloseBtn = document.querySelector(".popup-close-btn");

popupCloseBtn.addEventListener("click" , function(){
    document.querySelector(".popup").setAttribute("style" , " opacity: 0; ");
    document.querySelector(".popup-overlay").setAttribute("style" , "display: none;");
});