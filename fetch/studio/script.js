//TODO: Add Your Code Below

window.addEventListener("load",  function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    return response.json(); }).then(function(json) {


    const container = document.querySelector("#container");
    const astronautCount = document.querySelector("#count");

    let astronauts = "";
    let count = 0;


    for(index of json) {
        count += 1;
        let activeStatus = "";
        if ((index.active) === true) {
            activeStatus = `<div id ="active">${index.active}</div>`
        } else activeStatus = `${index.active}`

        astronauts += `<div class="astronaut">
        <div class="bio">
            <h3>${index.firstName} ${index.lastName}</h3>
            <ul>
            <li>Hours in space: ${index.hoursInSpace}</li>
            <li>Active: ${activeStatus}</li>
            <li>Skills: ${index.skills}</li>
            </ul>
        </div>
        <img class="avatar" src=${index.picture}>
    </div>`
    container.innerHTML = astronauts;
    
    astronautCount.innerHTML = `Astronaut Count: ${count}`;


    }

    });

});
