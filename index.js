function getBook(){
    el = document.getElementById("modal");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    document.body.classList.add('modal-opened')
}