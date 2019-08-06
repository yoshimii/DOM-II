// Your code goes here
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e)=> {
    logo.textContent = "Hop On!";
})

logo.addEventListener('mouseout', (e) => {
    logo.textContent = "Fun Bus";
})