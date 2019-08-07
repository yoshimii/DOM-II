// mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e)=> {
    logo.textContent = "Hop On!";
    e.stopPropagation();
})

// mouseout
logo.addEventListener('mouseout', (e) => {
    logo.textContent = "Fun Bus";
    e.stopPropagation();
})

// dblclick
const pics = document.querySelectorAll('img');
for(i = 0; i < pics.length; i ++){
    pics[i].addEventListener('dblclick', (e) => {
        e.target.style.filter = "grayscale(100%)";
    })//e function
}//for loop

// wheel
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('wheel', (e) => {
    mainNav.style.backgroundColor = "yellow";
    e.stopPropagation();
})

// drag (highlight text first, then drag)
for(i = 0; i < pics.length; i ++){
    pics[i].addEventListener('drag', (e) => {
        e.target.setAttribute('src', "https://i.ytimg.com/vi/vDuDNCORd8I/maxresdefault.jpg")
        e.stopPropagation();
    })
}

//animationend
const funWords = document.querySelectorAll('p');
for(i = 0; i < funWords.length; i++){
    funWords[i].addEventListener('animationend', (e) => {
        e.target.style.color = "blue";
        e.stopPropagation();
    })
}

//scroll
window.addEventListener('scroll', (e)=>{
    for(i = 0; i < funWords.length; i++){
        funWords[i].textContent = "Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet?";
        funWords[i].style.fontWeight = "bold";
    }
    e.stopPropagation();
})

// load
let hyper = document.querySelector("html");
window.addEventListener('load', (e)=> {
    setTimeout(function(){
        hyper.style.background = "url(https://img.buzzfeed.com/buzzfeed-static/static/2017-08/17/12/enhanced/buzzfeed-prod-fastlane-01/original-14351-1502988161-12.png)";
    }, 3000);
   
    e.stopPropagation();
})

// // create new element
// let boxx = document.createElement("div");
// boxx.style.width = "50px";
// boxx.style.height = "50px";
// boxx.style.background = "yellow";

// let bigBoxx = document.createElement("div");
// bigBoxx.style.width = "300px";
// bigBoxx.style.height = "300px";
// bigBoxx.style.background = "red";
// // add body to variable

// const bod = document.querySelector("body");
// // append to container
// bigBoxx.append(boxx);
// bod.append(bigBoxx);





