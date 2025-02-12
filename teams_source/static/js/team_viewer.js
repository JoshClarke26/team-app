function openTeamPage(e) {
    location.assign("/team/" + e.id)
}

function sendData(e, type, token) {
    var data = JSON.stringify({"type": type, "team_id": e.id})
    fetch(window.location.href, {
        method: "post",
        headers: {
            "X-CSRFToken": token
        },
        body: data
    })
    .then(() => {
        location.reload()
    })
}