// Create Scene
const root = document.getElementById('root');
root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
const screen = document.createElement('div');
screen.style.position = "relative";
screen.style.width = "700px";
screen.style.height = "400px";
screen.style.border = "solid 1px black";
screen.style.background = "linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)";

const floor = document.createElement('div');
floor.style.position = "absolute";
floor.style.bottom = 0;
floor.style.width = "700px";
floor.style.height = "10px";
floor.style.border = "solid 1px green";
floor.style.backgroundColor = "green";
screen.appendChild(floor);

const box = document.createElement('div');
box.style.position = "absolute";
box.style.bottom = "12px";
box.style.right = "25px";
box.style.width = "80px";
box.style.height = "120px";
box.style.backgroundColor = "#eae060";
box.style.border = "solid 2px #bbb44f";
box.style.borderRadius = "5px";
screen.appendChild(box);

const perso = document.createElement('div');
perso.style.position = "absolute";
perso.style.bottom = "12px";
perso.style.left = "25px";
perso.style.width = "30px";
perso.style.height = "30px";
perso.style.backgroundColor = "red";
perso.style.border = "solid 2px black";
perso.style.borderRadius = "20px";
screen.appendChild(perso);

root.appendChild(screen);


// Make the character move and jump!

// Param
const motionSpeed = 5;
counter = 10;
interval = null;
moveTime = 0;

// Keys capture
document.addEventListener('keydown', (event) => {
    const presskey = event.key;
  
    if (presskey === 'ArrowRight') {
    //   console.log("droite")
        return MoveRight();
    };

    if (presskey === 'ArrowLeft') {
        // console.log("gauche")
        return Moveleft();
    };

    if (presskey === 'ArrowUp') {
        // console.log("haut")
        return MoveJump();
    };

    if (presskey === 'ArrowDown') {
        return startTic();
    };
});

// Horizontal moves
function MoveRight() {
    let persoPosition = +perso.style.left.replace('px','');
    if (zoneLimit(persoPosition) == false) {
        return perso.style.left = '665px'
    } else {
        persoPosition = persoPosition + motionSpeed;
        perso.style.left = persoPosition + 'px';
    }
};

function Moveleft() {
    let persoPosition = +perso.style.left.replace('px','');
    if (zoneLimit(persoPosition) == false) {
        return perso.style.left = '5px'
    } else {
        persoPosition = persoPosition - motionSpeed;
        perso.style.left = persoPosition + 'px';
    }
};

// Confine zone
function zoneLimit(persoPosition) {
    if (persoPosition <= 0 | persoPosition >= 670) {
        console.log('Bong !');
        return false;
    } else {
        return true;
    }
};

// Vertical moves
// function MoveJump() {
//     let persoVertiOrigin = +perso.style.bottom.replace('px','');
//     let persoVertiPosition = +perso.style.bottom.replace('px','');

//     if (persoVertiPosition = 12) {
//         while (persoVertiPosition < 150) {
//             console.log(persoVertiPosition);
//             persoVertiPosition = persoVertiPosition + motionSpeed;
//             var jump = setInterval(perso.style.bottom = persoVertiPosition + 'px', 1000);
//         }
//     }
// }


// function MoveJump() {
//     let persoVertiOrigin = +perso.style.bottom.replace('px','');
//     let persoVertiPosition = +perso.style.bottom.replace('px','');
//     jump = setInterval(VerticalMoves(persoVertiPosition, true), 1000);

//     if (persoVertiPosition = 12) {
//         while (persoVertiPosition < 150) {
//             console.log(persoVertiPosition);
//             jump;
//         }
//     }
// }

function MoveJump() {
    let persoVertiOrigin = +perso.style.bottom.replace('px','');
    let persoVertiPosition = +perso.style.bottom.replace('px','');
    console.log("persoVertiPosition : " + persoVertiPosition + " - persoVertiOrigin : " + persoVertiOrigin)

    if (persoVertiPosition = persoVertiOrigin) {
        truc = startTic(15);

        // while (counter < 150) {
            console.log(">>>>>>>>>>>" + truc);
        //     persoVertiPosition = persoVertiPosition + (motionSpeed * counter);
        //     perso.style.bottom = persoVertiPosition
        // };
    };
}

function VerticalMoves(persoVertiPosition, direction){
    if (direction = true) {
        persoVertiPosition += motionSpeed;
        perso.style.bottom = persoVertiPosition + 'px';
        console.log(persoVertiPosition)
    } else {
        persoVertiPosition -= motionSpeed;
        perso.style.bottom = persoVertiPosition + 'px';
        console.log(persoVertiPosition)
    }
}


// proto

// function proto() {
//     interval = setInterval(console.log("ok"), 500);
// }

// interval = setInterval(function() {console.log("ok")}, 500);


// function tic(){
//     counter++;
//     console.log("counter : " + counter);
//     return counter
// };

function tic(){
    counter--;
    if (counter == 0) {
        stopTic();
    } else {
        moveTime = counter;
    };
};

function startTic(time) {
    counter = time;
    interval = setInterval(tic, 1000);
    // return interval
};

function stopTic() {
    clearInterval(interval)
};

// function consoleOk(messsage){console.log(messsage)};
// interval = setInterval(consoleOk("ok"), 500);