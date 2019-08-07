let nasa = document.querySelector(".blocks");// Stores parent node
let allBlocks = document.querySelectorAll(".block"); // Stores child nodes (blocks)
let launchPad = Array.from(allBlocks);// Converts child Nodelist to array
for(i = 0; i < launchPad.length; i++){// Adds EventListeners to each child
    
    launchPad[i].addEventListener('click', (e)=>{// On click removes target and prepends to parent
        let child = e.target;
        nasa.removeChild(child);
        nasa.prepend(child);
        e.stopPropagation();               
    });

    }

    for(i = 0; i < launchPad.length; i++){// Adds EventListeners to each child
            // for(j = 0; j < launchPad.length; j ++){
            //     launchPad[i].addEventListener('mouseup', (e)=>{
            //             e.target.style.position = "absolute";
            //             e.target.style.left = "500px";
            //     })
            // }
        launchPad[i].addEventListener('mousedown', (e)=>{// On click removes target and prepends to parent
            let child = e.target;  
            let pos = 0;            
            child.style.position = "absolute";
            child.style.left = "100px";
   
                let id = setInterval((frame) => {
            if (pos == 1500) {
              clearInterval(id);
            } else {
              pos++;              
              child.style.left = pos + "px"; 
            }
    }, 5);

        });
    
        }


// let redItem = Array.from(red);
// console.log(redItem);
// let redBlock = document.querySelector(".block--red");
// redBlock.style.color = "purple";
// function moveRed(){
//     let pos = 0;
//     let id = setInterval((frame) => {
//             if (pos == 350) {
//               clearInterval(id);
//             } else {
//               pos++; 
              
//               red.style.left = pos + "px"; 
//             }
//     }, 5);
// }

// moveRed();
