const title = document.querySelector("#title");

const CLICKED_CALSS="clicked";

function handleClik(){
    title.classList.toggle(CLICKED_CALSS);
}

function init(){
    title.addEventListener("click",handleClik);

}
init();