var screen_width = innerWidth >= 375 // shows the screen width in px


var answer = document.querySelectorAll(".a")
var question = document.querySelectorAll(".q")
var arrow = document.querySelectorAll(".q .img")
var qLength = document.querySelectorAll(".q").length

if(screen_width){ //if the screen_width is greater than 375 it will add the box image and change the illustration women online mobile and pattern image to the desktop image one 
    exchnangeimages()
}

for(var i = 0; i < qLength; i++){
    
    get(i)

}

function get(number){

    console.log(question[number].addEventListener("click", function(){
        this.classList.toggle("bold")
        arrow[number].classList.toggle("rotate")
        console.log(answer[number].classList.toggle("view"))

    }))

}


function exchnangeimages(){
    document.querySelector(".card").insertAdjacentHTML("afterbegin", "<img src='images/illustration-box-desktop.svg' alt='' class='box'>")
    document.querySelector(".women").setAttribute("src", "images/illustration-woman-online-desktop.svg");
    document.querySelector(".pattern").setAttribute("src", "images/bg-pattern-desktop.svg")
}