function computerPlay(){
    answers = ["rock", "paper", "scissors"];
    return answers[Math.floor(Math.random() * 3)];
};


function play(userSelection){
    com = computerPlay()
    switch (userSelection) {
        case "rock":
            switch (com) {
                case "rock":
                    return [userSelection, com, 0]
            
                case "paper":
                    return [userSelection, com, 2]

                case "scissors":
                    return [userSelection, com, 1]
            }
            break;

        case "paper":
            switch (com) {
                case "rock":
                    return [userSelection, com, 1]
                
                case "paper":
                    return [userSelection, com, 0]
    
                case "scissors":
                    return [userSelection, com, 2]
            }
            break;

        case "scissors":
            switch (com) {
                case "rock":
                    return [userSelection, com, 2]
                    
                case "paper":
                    return [userSelection, com, 1]
        
                case "scissors":
                    return [userSelection, com, 0]
            }
            break;
    }
}


function game(userSelection){
    result = play(userSelection)
    const heading = document.querySelector("#heading")
    const info = document.querySelector("#info")

    com = document.querySelector("#com")
    com.style.visibility = "visible";
    com.textContent = `Computer has chosen ${result[1]}`

    if(result[2] == 0){
        heading.textContent = "Tie";
    }
    if(result[2] == 1){
        heading.textContent = "Won";
    }
    if(result[2] == 2){
        heading.textContent = "Loose";
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener('click', () => {
    game("rock");
});

paper.addEventListener('click', () => {
    game("paper");
});

scissors.addEventListener('click', () => {
    game("scissors");
});
