let tog = 1;
let rollingSound = new Audio('diceroll.mp3');
let winSound = new Audio('victoryram.mp3');

let p1sum = 0;
let p2sum = 0;

function play(player, psum, correction, num) {
    let sum;
    let playerStatus;

    if (psum === 'p1sum') {
        p1sum = p1sum + num;

        if (p1sum > 100) {
            p1sum = p1sum - num;
        }

        if (p1sum === 2) {
            p1sum = 23;
        }
        if (p1sum === 7) {
            p1sum = 29;
        }
        if (p1sum === 22) {
            p1sum = 41;
        }
        if (p1sum === 33) {
            p1sum = 73;
        }
        if (p1sum === 51) {
            if (player1Status.length === 0) {
                p1sum = 6;
            } else {
                p1sum = 51; player1Status.pop();
                updatePlayerStatus(player, playerStatus);

            }
        }
        if (p1sum === 57) {
            if (player1Status.length === 0) {
                p1sum = 39;
            } else {
                p1sum = 57; player1Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        if (p1sum === 69) {
            p1sum = 90;
        }
        if (p1sum === 89) {
            if (player1Status.length === 0) {
                p1sum = 67;
            } else {
                p1sum = 89; player1Status.pop();
                updatePlayerStatus(player, playerStatus);
            }
        }
        if (p1sum === 97) {
            if (player1Status.length === 0) {
                p1sum = 76;
            } else {
                p1sum = 97; player1Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        if (p1sum === 99) {
            if (player1Status.length === 0) {
                p1sum = 3;
            } else {
                p1sum = 99; player1Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        sum = p1sum;
        playerStatus = player1Status;
    }

    if (psum === 'p2sum') {
        p2sum = p2sum + num;

        if (p2sum > 100) {
            p2sum = p2sum - num;
        }

        if (p2sum === 2) {
            p2sum = 23;
        }
        if (p2sum === 7) {
            p2sum = 29;
        }
        if (p2sum === 22) {
            p2sum = 41;
        }
        if (p2sum === 33) {
            p2sum = 73;
        }
        if (p2sum === 51) {
            if (player2Status.length === 0) {
                p2sum = 6;
            } else {
                p2sum = 51; player2Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        if (p2sum === 57) {
            if (player2Status.length === 0) {
                p2sum = 39;
            } else {
                p2sum = 57; player2Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        if (p2sum === 69) {
            p2sum = 90;
        }
        if (p2sum === 89) {
            if (player2Status.length === 0) {
                p2sum = 67;
            } else {
                p2sum = 89; player2Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        if (p2sum === 97) {
            if (player2Status.length === 0) {
                p2sum = 76;
            } else {
                p2sum = 97; player2Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        if (p2sum === 99) {
            if (player2Status.length === 0) {
                p2sum = 3;
            } else {
                p2sum = 99; player2Status.pop();

                updatePlayerStatus(player, playerStatus);
            }
        }
        sum = p2sum;
        playerStatus = player2Status;
    }

    // Check if player lands on special positions
    if (sum === 12) {
        playerStatus.push("Saranthya Bow");
        updatePlayerStatus(player, playerStatus);
    } else if (sum === 35 || sum === 78) {
        playerStatus.push("Sanjeevani");
        updatePlayerStatus(player, playerStatus);
    } else if (sum === 42) {
        playerStatus.push("Indrastra");
        updatePlayerStatus(player, playerStatus);
    } else if (sum === 82) {
        playerStatus.push("Brahmastra");
        updatePlayerStatus(player, playerStatus);
    }

    // Update player position on the board
    document.getElementById(`${player}`).style.transition = `linear all .5s`;

    if (sum < 10) {
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`;
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`;
    } else if (sum === 100) {
        winSound.play();
        setTimeout((user) => {
            if (player === 'p1') {
                alert("Player-1 Rescued SITA MAA !!");
            } else if (player === 'p2') {
                alert("Player-2 Rescued SITA MAA !!");
            }
            location.reload();
        }, 500);
    } else {
        numarr = Array.from(String(sum));
        n1 = eval(numarr.shift());
        n2 = eval(numarr.pop());

        if (n1 % 2 !== 0) {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${9 * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            }
        } else if (n1 % 2 === 0) {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${0 * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            }
        }
    }
}

// Function to update player status container
function updatePlayerStatus(player, statusArray) {
    const statusElement = document.getElementById(`${player}-status`);
    statusElement.textContent = statusArray.join(", ");
}

document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play();
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("dice").innerText = num;

    if (tog % 2 !== 0) {
        document.getElementById('tog').innerText = "Player-2 Turn : ";
        play('p1', 'p1sum', 0, num);
    } else if (tog % 2 === 0) {
        document.getElementById('tog').innerText = "Player-1 Turn : ";
        play('p2', 'p2sum', 55, num);
    }

    tog = tog + 1;
});

// Array to store player status
let player1Status = [];
let player2Status = [];
