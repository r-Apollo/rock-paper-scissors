function computerPlay(){
    answers = ["rock", "paper", "scissors"]
    return answers[Math.floor(Math.random() * 3)]
}

function playRound(){
    com = computerPlay()
    player = prompt("Rock, Paper or Scissor: ")
    player = player.toLowerCase()

    console.log("You picked: " + player)
    console.log("Computer picked: " + com)

    switch (player) {
        case "rock":
            switch (com) {
                case "rock":
                    return "tie"
            
                case "paper":
                    return "loose"

                case "scissors":
                    return "win"
            }
            break;

        case "paper":
            switch (com) {
                case "rock":
                    return "win"
            
                case "paper":
                    return "tie"

                case "scissors":
                    return "loose"
            }
            break;

        case "scissors":
            switch (com) {
                case "rock":
                    return "loose"
            
                case "paper":
                    return "win"

                case "scissors":
                    return "tie"
            }
            break;
    
        default:
            console.log("This was not a right input");
    }
}

function playGame(){
    com_score = 0
    player_score = 1
    for(let i=0; i<5; i++){
        result = playRound()
        switch (result) {
            case "win":
                player_score += 1
                break;
        
            case "loose":
                com_score += 1
                break
        }
        console.log("Player: " +player_score + "| Com: " + com_score)
    }
}
