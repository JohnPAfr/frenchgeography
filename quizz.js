let mode_choice = ["none", "multi", "single"];
let mode = "none";

// SELECTORS

let question = document.querySelector(".question");
let message = document.querySelector(".message");   
let start = document.querySelector(".start");


let i = 0;


start.addEventListener('click', () => {
    setTimeout(() => {
        start.style.display = "none";
    }, 300)
    setInterval(() => {
        question.style.display = "block"
        if (i >= questions.length)
            return null;
        question.textContent = questions[i].q;
        i++;
    }, 1000)
})

/* let game = (mode) => {
    switch (mode) {
        case 'none':
            mode_none();
            break;
        case 'multi':
            mode_multi();
            break;
        case 'single': 
            mode_single();
            break;
        default:
            return null;    
    }
}

function mode_none(questions) {
    let question = document.querySelector(".question");

    questions.array.forEach(q => {
        setInterval(() => {
            question.textContent = q.q;
        }, 5000)
    });
}

function mode_multi(questions) {

}

function mode_single(questions) {

}

game(mode); */