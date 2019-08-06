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
const page = document.querySelector('.main-navigation');
console.log(page);
page.addEventListener('wheel', (e) => {
    page.style.backgroundColor = "yellow";
})

//
