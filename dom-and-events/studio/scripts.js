// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init () {
    const confirmTakeOff = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = 0;
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

 
    rocket.style.position = "absolute";
    rocket.style.top = "250px";
    rocket.style.left = "225px";
    rocket.style.overflow = "hidden";


    // Put your code for the exercises here.
    
    confirmTakeOff.addEventListener("click", () => {
        const userConfirmed = window.confirm(
          "Confirm that the shuttle is ready for takeoff"
        );
        if (userConfirmed) {
          flightStatus.innerHTML = "Shuttle in flight";

        shuttleBackground.style.backgroundColor = "blue";

        height += 10000;
        shuttleHeight.innerHTML = height;

        rocket.style.top = parseInt(rocket.style.top) - 10 + "px"
        shuttleHeight.innerHTML = height;
        }});

    landButton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.top = "250px";
        rocket.style.left = "225px";
    })

    abortButton.addEventListener("click", () => {
        const userAbort = window.confirm("Confirm that you want to abort the mission.");
        if (userAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.top = "250px";
            rocket.style.left = "225px";
        }
    })

    up.addEventListener("click", () => {
        rocket.style.top = parseInt(rocket.style.top) - 10 + "px"
        height += 10000;
        shuttleHeight.innerHTML = height;
    })

    down.addEventListener("click", () => {
        rocket.style.top = parseInt(rocket.style.top) + 10 + "px"
        height -= 10000;
        shuttleHeight.innerHTML = height;
    })

    left.addEventListener("click", () => {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px"
    })

    right.addEventListener("click", () => {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px"
    })



};

window.addEventListener("load", init);
