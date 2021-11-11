//variables to interact with html
const dino = document.querySelector(".dino");
const background = document.querySelector('.background');
//variable for make dino jump only one time
//as the button is pressed
let isjumping = false;
//and position to know if dino is jumping
let position = 0;

//function to set a keyboard button for command
//and setting it to jump 
function handleKeyUp(event){
    //if space is pressed
    if (event.keyCode === 32) {
    //if its not already jumping
        if (!isjumping) {
    //dino will jump    
            jump();
        }
    }
}

function jump() {
    isjumping = true;

    let upInterval = setInterval(()=>{
        if (position >= 150) {
            clearInterval(upInterval)
// Part that makes dino go down
            let downInterval = setInterval(()=>{
                if (position <= 0){
                    clearInterval(downInterval);
                    isjumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
// Part that makes dino go Up
            position += 20;
            dino.style.bottom = position + 'px';
        }
       
    }, 20);
}

function createCactus(){
    //here we are creating html with js
    //and creating the cactus(style)
    const cactus = document.createElement('div');
    let cactusPositon = 1020;
//creating a random number to generate the number 
//of cactus, cuz the quantity is random.
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

//here is the logic behind our cactus
    let leftInterval = setInterval(() =>{
        
//making the cactus dissapear when passed
        if (cactusPositon< -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
//and the others keep going
        } else if (cactusPositon > 0 && cactusPositon < 60 && position < 60) {
            //gameover
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class ="game-over">Fim de Jogo</h1>'
        } else{    
            cactusPositon -= 10;
            cactus.style.left = cactusPositon + 'px';
        }
    },20);

//setTimeout for execute a function after a time that was set(our const randomTime)
//here im actually doing what i said when i created the randomtime variable
//this is for create cactus in a random way. 
    setTimeout(createCactus, randomTime)
}

createCactus();



document.addEventListener('keyup', handleKeyUp);