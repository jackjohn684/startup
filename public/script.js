// Game Logic
const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';
// Variables to track current position in each column
val_c1 = 1
val_c2 = 1
val_c3 = 1
val_c4 = 1
val_c5 = 1
val_c6 = 1
val_c7 = 1

// Variable to track whose turn it is
turn = 1
// Function to check for a win
const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = getPlayerName();
configureWebSocket();
function check(player) {
    setTimeout(() => {

        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(0);
                    }
                    else{
                        saveScore(1);
                    }
                }

            }
        }

        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(0);
                    }
                    else{
                        saveScore(1);
                    }
                }

            }

        }

        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(0);
                    }
                    else{
                        saveScore(1);
                    }
                }

            }
        }

        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(0);
                    }
                    else{
                        saveScore(1);
                    }
                }

            }
        }

    }, 200)

}


// Game Frontend
// playing

// Add event listeners to each column
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {

        sum = eval(`val_${e.id}`)
        eval(`val_${e.id}++`)


        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red"
            turn++
            check('red')
            document.getElementById("whosturn").innerText = "Yellow's Turn"
        }
        
        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow"
            turn++
            check('yellow')
            document.getElementById("whosturn").innerText = "Red's Turn"

        }
       
    })
})

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }


  function reload(){
    var container = document.getElementById("board");
    container.reload()
    broadcastEvent(this.getPlayerName(), GameStartEvent, {});
    
    
   //line is to watch the result in console , you can remove it later	
    console.log("Refreshed"); 
}

async function saveScore(score) {
    const userName = getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      broadcastEvent(userName, GameEndEvent, newScore);
      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      updateScoresLocal(newScore);
    }
  }
function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      displayMsg('system', 'game', 'connected');
    };
    socket.onclose = (event) => {
      displayMsg('system', 'game', 'disconnected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        if(msg.value.score == 0)
        {
            displayMsg('player', msg.from, "finished a game. Red won!");
        }
        else
        {
            displayMsg('player,', msg.from, "finshed a game. Yellow won!")
        }
        
      } else if (msg.type === GameStartEvent) {
        displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    socket.send(JSON.stringify(event));
  }