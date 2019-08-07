let nasa = document.querySelector(".blocks");
let allBlocks = document.querySelectorAll(".block");
console.log(allBlocks);
let launchPad = Array.from(allBlocks);
console.log(launchPad);
for(i = 0; i < launchPad.length; i++){
    
    launchPad[i].addEventListener('click', (e)=>{
        let child = e.target;
        nasa.removeChild(child);
        nasa.prepend(child);
        
    });
}


// function moveRockets(i) {
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         i.style.bottom = pos + "px"; 
//       }
//     }
//   }