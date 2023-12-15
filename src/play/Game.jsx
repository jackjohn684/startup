import React from 'react';

import { Button } from 'react-bootstrap';
import './Game.css';
let val_c1 = 1;
let val_c2 = 1;
let val_c3 = 1;
let val_c4 = 1;
let val_c5 = 1;
let val_c6 = 1;
let val_c7 = 1;
let turn = 1;

export function SimonGame(props) {

  
  const userName = props.userName;
  const buttons = new Map();
  const mistakeSound = new Audio(`/error.mp3`);

  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [sequence, setSequence] = React.useState([]);
  const [playbackPos, setPlaybackPos] = React.useState(0);



  function check(player) {
    setTimeout(() => {

        for (let i = 1; i <= 7; i++) {
            for (let j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(1);
                    }
                    else{
                        saveScore(2);
                    }
                }

            }
        }

        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(1);
                    }
                    else{
                        saveScore(2);
                    }
                }

            }

        }

        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(1);
                    }
                    else{
                        saveScore(2);
                    }
                }

            }
        }

        for (let i = 1; i <= 4; i++) {
            for (let j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    document.getElementById("whosturn").innerText = `${player} wins`
                    if (player == "red")
                    {
                    saveScore(1);
                    }
                    else{
                        saveScore(2);
                    }
                }

            }
        }

    }, 200)

}


async function saveScore(score) {
  const date = new Date().toLocaleDateString();
  const newScore = { name: userName, score: score, date: date };

  try {
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);

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

  function reload(){
    var container = document.getElementById("board");
    container.reload()
    broadcastEvent(this.getPlayerName(), GameStartEvent, {});
    
    
   //line is to watch the result in console , you can remove it later	
    console.log("Refreshed"); 
}

function handleClick(i)
{
  if (i == 1)
    {
      if(turn % 2 != 0)
      {
        document.getElementById(`c1r${val_c1}`).style.backgroundColor = "red"
        val_c1++
        turn++
        check('red')
        document.getElementById("whosturn").innerText = "Yellow's Turn"
      }
      else
      {
        document.getElementById(`c1r${val_c1}`).style.backgroundColor = "yellow"
        val_c1++
        turn++
        check('yellow')
        document.getElementById("whosturn").innerText = "Red's Turn"
      }
    }
    else if (i == 2)
    {
      if(turn % 2 != 0)
      {
        document.getElementById(`c2r${val_c2}`).style.backgroundColor = "red"
        val_c2++
        turn++
        check('red')
        document.getElementById("whosturn").innerText = "Yellow's Turn"
      }
      else
      {
        document.getElementById(`c2r${val_c2}`).style.backgroundColor = "yellow"
        val_c2++
        turn++
        check('yellow')
        document.getElementById("whosturn").innerText = "Red's Turn"
      }
    }
   else if (i == 3)
    {
      if(turn % 2 != 0)
      {
        document.getElementById(`c3r${val_c3}`).style.backgroundColor = "red"
        val_c3++
        turn++
        check('red')
        document.getElementById("whosturn").innerText = "Yellow's Turn"
      }
      else
      {
        document.getElementById(`c3r${val_c3}`).style.backgroundColor = "yellow"
        val_c3++
        turn++
        check('yellow')
        document.getElementById("whosturn").innerText = "Red's Turn"
      }
    }
    else if (i == 4)
    {
      if(turn % 2 != 0)
      {
        document.getElementById(`c4r${val_c4}`).style.backgroundColor = "red"
        val_c4++
        turn++
        check('red')
        document.getElementById("whosturn").innerText = "Yellow's Turn"
      }
      else
      {
        document.getElementById(`c4r${val_c4}`).style.backgroundColor = "yellow"
        val_c4++
        turn++
        check('yellow')
        document.getElementById("whosturn").innerText = "Red's Turn"
      }
    }
   else if (i == 5)
    {
      if(turn % 2 != 0)
      {
        document.getElementById(`c5r${val_c5}`).style.backgroundColor = "red"
        val_c5++
        turn++
        check('red')
        document.getElementById("whosturn").innerText = "Yellow's Turn"
      }
      else
      {
        document.getElementById(`c5r${val_c5}`).style.backgroundColor = "yellow"
        val_c5++
        turn++
        check('yellow')
        document.getElementById("whosturn").innerText = "Red's Turn"
      }
    }
   else if (i == 6)
    {
      if(turn % 2 != 0)
      {
        document.getElementById(`c6r${val_c6}`).style.backgroundColor = "red"
        val_c6++
        turn++
        check('red')
        document.getElementById("whosturn").innerText = "Yellow's Turn"
      }
      else
      {
        document.getElementById(`c6r${val_c6}`).style.backgroundColor = "yellow"
        val_c6++
        turn++
        check('yellow')
        document.getElementById("whosturn").innerText = "Red's Turn"
      }
    }
    else if (i == 7)
    {
      if(turn % 2 != 0)
      {
        document.getElementById(`c7r${val_c7}`).style.backgroundColor = "red"
        val_c7++
        turn++
        check('red')
        document.getElementById("whosturn").innerText = "Yellow's Turn"
      }
      else
      {
        document.getElementById(`c7r${val_c7}`).style.backgroundColor = "yellow"
        val_c7++
        turn++
        check('yellow')
        document.getElementById("whosturn").innerText = "Red's Turn"
      }
    }
}
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
  return (
    <div>
          <Button variant='primary' onClick={() => location.reload()}>
            Reset
          </Button>
      <h2 id="whosturn">Red's Turn</h2>
    <div className = "board">
      <ul className = "column px-0" id = "c1" onClick ={()=> handleClick(1)}>
        <p id = "c1r6"></p>
        <p id="c1r5"></p>
        <p id="c1r4"></p>
        <p id="c1r3"></p>
        <p id="c1r2"></p>
        <p id="c1r1"></p>
        </ul>
        <ul className="column px-0" id="c2"onClick ={()=> handleClick(2)}>
        <p id="c2r6"></p>
        <p id="c2r5"></p>
        <p id="c2r4"></p>
        <p id="c2r3"></p>
        <p id="c2r2"></p>
        <p id="c2r1"></p>
    </ul>
    <ul className="column px-0" id="c3"onClick ={()=> handleClick(3)}>
        <p id="c3r6"></p>
        <p id="c3r5"></p>
        <p id="c3r4"></p>
        <p id="c3r3"></p>
        <p id="c3r2"></p>
        <p id="c3r1"></p>
    </ul>
          <ul className="column px-0" id="c4"onClick ={()=> handleClick(4)}>
        <p id="c4r6"></p>
        <p id="c4r5"></p>
        <p id="c4r4"></p>
        <p id="c4r3"></p>
        <p id="c4r2"></p>
        <p id="c4r1"></p>
    </ul>
          <ul className="column px-0" id="c5"onClick ={()=> handleClick(5)}>
        <p id="c5r6"></p>
        <p id="c5r5"></p>
        <p id="c5r4"></p>
        <p id="c5r3"></p>
        <p id="c5r2"></p>
        <p id="c5r1"></p>
    </ul>
          <ul className="column px-0" id="c6"onClick ={()=> handleClick(6)}>
        <p id="c6r6"></p>
        <p id="c6r5"></p>
        <p id="c6r4"></p>
        <p id="c6r3"></p>
        <p id="c6r2"></p>
        <p id="c6r1"></p>
    </ul>
          <ul className="column px-0" id="c7"onClick ={()=> handleClick(7)}>
        <p id="c7r6"></p>
        <p id="c7r5"></p>
        <p id="c7r4"></p>
        <p id="c7r3"></p>
        <p id="c7r2"></p>
        <p id="c7r1"></p>
    </ul>
    </div>
    </div>
  );
}
