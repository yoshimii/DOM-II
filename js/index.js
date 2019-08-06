// mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e)=> {
    logo.textContent = "Hop On!";
})
// mouseout
logo.addEventListener('mouseout', (e) => {
    logo.textContent = "Fun Bus";
})

// keydown


// dblclick
const pics = document.querySelectorAll('img');

for(i = 0; i < pics.length; i ++){
    pics[i].addEventListener('dblclick', (e) => {
        e.target.style.filter = "grayscale(100%)";
    })//e function
}//for loop

// wheel
const mainNav = document.querySelector('.main-navigation');
console.log(mainNav);
mainNav.addEventListener('wheel', (e) => {
    mainNav.style.backgroundColor = "yellow";
})

// select
const funWords = document.querySelectorAll('p');
for(i = 0; i < funWords.length; i++){
    funWords[i].addEventListener('drag', (e) => {
        e.target.textContent = "Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet? Are we having fun yet?";
    })
}
// drag (highlight text first, then drag)
for(i = 0; i < pics.length; i ++){
    pics[i].addEventListener('drag', (e) => {
        e.target.setAttribute('src', "https://i.ytimg.com/vi/vDuDNCORd8I/maxresdefault.jpg")
    })
}

// keydown

const headers = document.querySelectorAll('h4');
console.log(headers);