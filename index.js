window.onload = () => {
    weekNum = getWeek()
    chores = ["Washing Rags/Vacuuming (1x a week or as needed)", "Trash/Recycling (As needed)", "Cleaning Shower (1x a week)", "Cleaning Bathroom (1x a week)", "Cleaning Windows + Mirrors (1x a week or as needed)", "Cleaning Kitchen (Daily)"]
    order = ["Logan", "Hayden", "Chase W.", "Chase N.", "Forest", "Adam"]

    //change up the order based on what week it is
    for (let i = 0; i < weekNum; i++) {
        order.splice(0, 0, order.pop())
    }

    for (let i = 0; i < 6; i++) {
        let choretable = document.getElementById("choretable")

        let tr = document.createElement("tr")

        let name = document.createElement("th")
        name.setAttribute("scope", "row")
        name.innerHTML = order[i]

        let chore = document.createElement("td")
        chore.innerHTML = chores[i]

        tr.appendChild(name)
        tr.appendChild(chore)

        choretable.appendChild(tr)
    }

}

//get a number based on how many weeks it has been since the chore chart started
function getWeek() {
    var now = moment(new Date()); //todays date
    var end = moment("2020-10-11"); // start date
    var duration = moment.duration(now.diff(end));
    var weeks = duration.asWeeks();
    if (weeks < 6) return weeks
    else return weeks%6
}