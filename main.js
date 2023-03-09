var bgColor, ballTop
var task = document.createElement("div")
var btn = document.createElement("button")
var ball = document.createElement("div")
var firstShadowBall = document.createElement("div")
var secondShadowBall = document.createElement("div")
var yourNote = document.createElement("textarea")
var tasks = []
var btns = []
var yourNotes = []
var yourTasks = []
var i = 0

function orangeTask() {
    bgColor = "#FDA769"
    ballTop = (window.innerHeight - 230) / 2 + 20
    createBall()
    createTask()
}

function greenTask() {
    bgColor = "#CDE990"
    ballTop = (window.innerHeight - 230) / 2 + 60
    createBall()
    createTask()
}

function redTask() {
    bgColor = "#F55050"
    ballTop = (window.innerHeight - 230) / 2 + 100
    createBall()
    createTask()
}

function blueTask() {
    bgColor = "#AEE2FF"
    ballTop = (window.innerHeight - 230) / 2 + 140
    createBall()
    createTask()
}

function purpleTask() {
    bgColor = "#A084DC"
    ballTop = (window.innerHeight - 230) / 2 + 180
    createBall()
    createTask()
}

function createBall() {
    ball.classList.add("ball")
    ball.style.top = `${ballTop}px`
    ball.style.backgroundColor = bgColor
    document.querySelector("body").appendChild(ball)
    createFirstShadow()
    createSecondShadow()
    moveBall()
}

function createFirstShadow() {
    firstShadowBall.classList.add("ball")
    firstShadowBall.classList.add("firstShadow")
    firstShadowBall.style.top = `${ballTop}px`
    firstShadowBall.style.backgroundColor = bgColor
    document.querySelector("body").appendChild(firstShadowBall)
    moveFirstShadow()
}

function createSecondShadow() {
    secondShadowBall.classList.add("ball")
    secondShadowBall.classList.add("secondShadow")
    secondShadowBall.style.top = `${ballTop}px`
    secondShadowBall.style.backgroundColor = bgColor
    document.querySelector("body").appendChild(secondShadowBall)
    moveSecondShadow()
}

function moveBall() {
    ball.animate({
        left: "262.5px", 
        top: "287px"
    }, {
        duration: 1000,
        iterations: 1,
        easing: "linear",
    })
}

function moveFirstShadow() {
    firstShadowBall.animate({
        left: "262.5px",
        top: "287px"
    }, {
        duration: 1000,
        iterations: 1,
        delay: 50,
        easing: "linear",
    })
}

function moveSecondShadow() {
    secondShadowBall.animate({
        left: "262.5px",
        top: "287px"
    }, {
        duration: 1000,
        iterations: 1,
        delay: 100,
        easing: "linear",
    })
}

function moveTasks() {
    for (let j = 0; j < tasks.length; j++) {
        tasks[j].style.order =  tasks.length - j
    }
}

function createTask() {
    moveTasks()
    task.classList.add("task")
    task.style.backgroundColor = bgColor
    tasks[i] = task
    createTextarea()
    createBtn()
    document.getElementById("container").appendChild(tasks[i])
    task = document.createElement("div")
    printTask()
}

function printTask() {
    tasks[i].animate([
        {opacity : 0},
        {opacity : 1}
    ], {
        duration : 1000,
        fill : "forwards",
        delay: 1000
    })
    i++
}

function createBtn() {
    btn.classList.add("btn")
    btns[i] = btn
    tasks[i].appendChild(btns[i])
    makeBtnWork()
    btn = document.createElement("button")
}

function createTextarea() {
    yourNote.classList.add("text")
    yourNote.cols = "15"
    yourNote.rows = "7"
    yourNote.placeholder = "Type your note..."
    yourNote.style.backgroundColor = bgColor
    yourNotes[i] = yourNote
    tasks[i].appendChild(yourNotes[i])
    yourNote = document.createElement("textarea")
}

function makeBtnWork() {
    for (let j = 0; j < btns.length; j++) {
        btns[j].addEventListener("click", () => {
            tasks[j].animate([
                {opacity: 1},
                {opacity: 0}
            ], {
                duration: 1000,
                fill: "forwards"
            })

            setTimeout(() => {
                document.getElementById("container").removeChild(tasks[j])
            }, 1000)
        })
    }
}
