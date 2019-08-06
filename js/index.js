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

console.log(pics);
    for(i = 0; i < pics.length; i ++){
        pics[i].addEventListener('dblclick', (e) => {
            e.target.style.filter = "grayscale(100%)";

    })

}



    



