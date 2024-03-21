function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Takeoff button

    button.addEventListener("click", event =>
    paragraph.innerHTML = `Houston, we have liftoff!`
    );

    // Mission Abort button functions

    missionAbort.addEventListener("mouseover", event =>
    missionAbort.style.color = "red"
    );
    missionAbort.addEventListener("mouseout", event =>
    missionAbort.style.color = ""
    )

    missionAbort.addEventListener("click", function (event) {
    let response = confirm("Are you sure you want to abort the mission?")
    if (response) {
        paragraph.innerHTML = `Mission aborted! Space shuttle returning home`
    }}
    )
}

window.addEventListener("load", init);
