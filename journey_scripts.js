const slidepage = document.querySelector(".slidepage");
const one_Btn =document.querySelector(".Btn1");
const two_Btn =document.querySelector(".Btn2");
const three_Btn =document.querySelector(".Btn3");
const four_Btn =document.querySelector(".Btn4");

const slidepage_2 = document.querySelector(".slidepage_2");
const one_Btn_2 =document.querySelector(".Btn1_2");
const two_Btn_2 =document.querySelector(".Btn2_2");
const three_Btn_2 =document.querySelector(".Btn3_2");
const four_Btn_2 =document.querySelector(".Btn4_2");
        
const slidepage_3 = document.querySelector(".slidepage_3");
const one_Btn_3 =document.querySelector(".Btn1_3");
const two_Btn_3 =document.querySelector(".Btn2_3");
const three_Btn_3 =document.querySelector(".Btn3_3");
const four_Btn_3 =document.querySelector(".Btn4_3");

const slidepage_4 = document.querySelector(".slidepage_4");
const one_Btn_4 =document.querySelector(".Btn1_4");
const two_Btn_4 =document.querySelector(".Btn2_4");
const three_Btn_4 =document.querySelector(".Btn3_4");
const four_Btn_4 =document.querySelector(".Btn4_4");

const slidepage_5 = document.querySelector(".slidepage_5");
const one_Btn_5 =document.querySelector(".Btn1_5");
const two_Btn_5 =document.querySelector(".Btn2_5");
const three_Btn_5 =document.querySelector(".Btn3_5");
const four_Btn_5 =document.querySelector(".Btn4_5");

one_Btn.addEventListener("click",function(){
    slidepage.style.marginLeft = "-0%";})
two_Btn.addEventListener("click",function(){
    slidepage.style.marginLeft = "-25%";});
three_Btn.addEventListener("click",function(){
    slidepage.style.marginLeft = "-50%";})
four_Btn.addEventListener("click",function(){
    slidepage.style.marginLeft = "-75%";})

one_Btn_2.addEventListener("click",function(){
    slidepage_2.style.marginLeft = "-0%";})
two_Btn_2.addEventListener("click",function(){
    slidepage_2.style.marginLeft = "-25%";});
three_Btn_2.addEventListener("click",function(){
    slidepage_2.style.marginLeft = "-50%";})
four_Btn_2.addEventListener("click",function(){
    slidepage_2.style.marginLeft = "-75%";})

one_Btn_3.addEventListener("click",function(){
    slidepage_3.style.marginLeft = "-0%";})
two_Btn_3.addEventListener("click",function(){
    slidepage_3.style.marginLeft = "-25%";});
three_Btn_3.addEventListener("click",function(){
    slidepage_3.style.marginLeft = "-50%";})
four_Btn_3.addEventListener("click",function(){
    slidepage_3.style.marginLeft = "-75%";})

one_Btn_4.addEventListener("click",function(){
    slidepage_4.style.marginLeft = "-0%";})
two_Btn_4.addEventListener("click",function(){
    slidepage_4.style.marginLeft = "-25%";});
three_Btn_4.addEventListener("click",function(){
    slidepage_4.style.marginLeft = "-50%";})
four_Btn_4.addEventListener("click",function(){
    slidepage_4.style.marginLeft = "-75%";})

one_Btn_5.addEventListener("click",function(){
    slidepage_5.style.marginLeft = "-0%";})
two_Btn_5.addEventListener("click",function(){
    slidepage_5.style.marginLeft = "-25%";});
three_Btn_5.addEventListener("click",function(){
    slidepage_5.style.marginLeft = "-50%";})
four_Btn_5.addEventListener("click",function(){
    slidepage_5.style.marginLeft = "-75%";})
        
function goToStep(step, clickedElement) {
    const progressContainer = clickedElement.closest('.step-progress');
    const steps = progressContainer.querySelectorAll('.step');
    const lines = progressContainer.querySelectorAll('.line');

    steps.forEach((stepElement, index) => {
        if (index + 1 < step) {
            stepElement.classList.add('completed');
            stepElement.classList.remove('active');
        } else if (index + 1 === step) {
            stepElement.classList.add('active');
            stepElement.classList.remove('completed');
        } else {
            stepElement.classList.remove('active', 'completed');
        }
    });

    lines.forEach((line, index) => {
        if (index < step - 1) {
            line.style.backgroundColor = '#f4bf00df';
        } else {
            line.style.backgroundColor = '#939393';
        }
    });
}

function initializeProgressBars() {
    document.querySelectorAll('.step-progress').forEach(progressContainer => {
        const firstStep = progressContainer.querySelector('.step');
        goToStep(1, firstStep);
    });
}

window.onload = initializeProgressBars;