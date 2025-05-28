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
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider();
    currentSlide = (currentSlide === slider.length - 1) ? 0 : currentSlide + 1;
    showSlider();
}

function prevSlider(){
    hideSlider();
    currentSlide = (currentSlide === 0) ? slider.length - 1 : currentSlide - 1;
    showSlider();
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);
