const holes = [...document.querySelectorAll('.hole')]
console.log(holes)

const musicPunch = new Audio ('assets/mixkit-game-ball-tap-2073.wav')
const cursor = document.querySelector('.cursor')
const scoreElement = document.querySelector('.score span')
const playBtn = document.querySelector('#playgame');
const stopBtn = document.querySelector('#stopgame');


window.addEventListener('mousemove', element=>{
    cursor.style.top = element.pageY + `px`
    cursor.style.left = element.pageX + `px`
})

let score = 0; 
let timeOver = 30;


const run = () =>{

    const randomPos = Math.floor(Math.random() * holes.length)
    const hole = holes[randomPos];
    


    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/mole-png.png'
    
    hole.appendChild(img)

        img.addEventListener('click', ()=>{
        img.src = 'assets/mole-x.png'
        musicPunch.play()
        //remplazar el score
        score += 5
        scoreElement.textContent = score

        clearTimeout(timer)
        timerClick = setTimeout(()=>{
            hole.removeChild(img)
            run()
        }, 100)
    })

    timer = setTimeout(()=>{
        hole.removeChild(img)
        run()
    }, 700)
}

const countDown = () =>{
    timeOver--
    if (timeOver === 0) {
        clearInterval(countDownTimer);
        clearInterval(timer);
        alert('Your score is ' + score)
        location.reload()
    }
}

let countDownTimer = setInterval(countDown, 1000)

playBtn.addEventListener('click', run);
