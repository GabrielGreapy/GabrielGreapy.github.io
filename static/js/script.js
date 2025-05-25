function sideBarOn() {
    document.getElementById('sidebar').classList.add('active');
}

function sideBarOff() {
    document.getElementById('sidebar').classList.remove('active');
}
function alternarTema(){
    const html = document.documentElement;
    const tema = html.getAttribute("data-theme")
    if(tema === "dark"){
        html.setAttribute("data-theme", "light")
    }
    else{
        html.setAttribute("data-theme", "dark")
    }
}
function abrirPopUp(){    
    document.getElementById("popup").style.display = "flex";
}
function fecharPopUp(){
    document.getElementById("popup").style.display = "none";
}