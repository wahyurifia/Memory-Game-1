const emojis = ["😁", "😁" , "😍" , "😍" , "😯" , "😯" , "😒" , "😒" , "💀" , "💀" , "🥵" , "🥵" , "🥶" , "🥶" , "🐵" , "🐵"];
const spinEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
const span = document.querySelector('span');
let chosenBox = [];
let arrayBoxs = [];
let winGame = [];
let movesCount = 0;
// let disableDeck = false;

for (let i = 0; i < emojis.length; i++) {
    let box =  document.createElement('div');
    box.className = 'item';
    box.innerHTML = spinEmojis[i];
    document.querySelector('.game').appendChild(box);
}

const boxs = document.querySelectorAll('.item');
boxs.forEach((box) => {
    box.addEventListener('click', flipBox)
})

function flipBox(e) {
    movesCounter()
    const boxClicked = e.target;
    boxClicked.classList.add('boxOpen');
    arrayBoxs.push(boxClicked)

    let boxEmoji = boxClicked.innerHTML
    chosenBox.push(boxEmoji);

    if(chosenBox.length === 2){
        setTimeout(matchBox(arrayBoxs, boxClicked), 500)
    }  
}


function matchBox(arrayBox, boxClick) {
    if (chosenBox[0] == chosenBox[1]) {
         boxClick.removeEventListener('click', flipBox)
         winGame.push(chosenBox[0])
         console.log(winGame);
    }else if (chosenBox[0] !== chosenBox[1]) {
        setTimeout(() => {
            arrayBox[0].classList.remove('boxOpen')
            arrayBox[1].classList.remove('boxOpen')

            // console.log(arrayBox[0]);
            // console.log(arrayBox[1]);
        },800)
    }
    arrayBoxs = []
    chosenBox = []
    if (winGame.length == 8) {
        setTimeout(() => {
            alert(`anjay menang ${movesCount} kali moves`)
            movesCount = movesCount * 0 - 1;
            movesCounter()
        },100)
    }
}

const movesCounter = () => {
    movesCount = movesCount + 1;
    span.innerHTML = `${movesCount} kali`;
}