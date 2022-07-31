//spread operator - se expande por 
//lo que tenemos divs diferenciados
const holes = [...document.querySelectorAll('.hole')]
console.log(holes)

const musicPunch = new Audio ('assets/mixkit-game-ball-tap-2073.wav')
const cursor = document.querySelector('.cursor')
const scoreElement = document.querySelector('.score span')
let score = 0; //guardar los puntos cada vez que se hace click

//cambiar estilo de cursor
window.addEventListener('mousemove', element=>{
    cursor.style.top = element.pageY + `px`
    cursor.style.left = element.pageX + `px`
})

const run = () =>{
    //se movera entre las 8 posiciones del array del
    //spread operator
    const randomPos = Math.floor(Math.random() * holes.length)
    const hole = holes[randomPos];

    //añadimos la imagen del topo
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
        //
        //cada vez que hago click remplazo la imagen del topo
        //y vuelvo a lanzar "run"
        clearTimeout(timer)
        setTimeout(()=>{
            hole.removeChild(img)
            run()
        }, 500)
    })

    timer = setTimeout(()=>{
        hole.removeChild(img)
        run()
    }, 1300)

    gameover = setInterval(()=>{
        hole.removeChild(img)
        clearTimeout(timer)
        score = 0
    }, 10000)
}



