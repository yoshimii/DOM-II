let allBlocks = document.querySelectorAll(".block");
console.log(allBlocks);
let launchPad = Array.from(allBlocks);
console.log(launchPad);
for(i = 0; i < launchPad.length; i++){
    let child = launchPad[i];
    launchPad[i].addEventListener('click', (e)=>{
        document.querySelector(".blocks").removeChild(e.target);
        // launchPad.prepend(moveToTop);
        console.log(child);
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