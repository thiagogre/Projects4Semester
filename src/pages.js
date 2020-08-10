const video = require("./data")

function pageLanding(req, res) {
    return res.render("index.html")
}

function aboutProject(req, res) {
    return res.render("about_project.html")
}


function digitalSystems(req, res) {
    return res.render("digital_systems.html", { items: video })
}

module.exports = {
    pageLanding,
    aboutProject,
    digitalSystems,
}