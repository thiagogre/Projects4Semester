const video = require("./data")

function pageLanding(req, res) {
    const home = {
        avatar_img:"https://avatars0.githubusercontent.com/u/66977846?s=460&u=c178aae17f4f091d3bbb133a86a80bfe769a493f&v=4",
        name: "thiagogre",
        welcome: "Welcome",
        description: "I'm Technology Enthusiast",
        links: [
            {
                name: "github",
                url: "https://github.com/thiagogre"
            },
            {
                name: "linkedin",
                url: "https://linkedin.com/in/thiagogre"
            }
        ]
    }
    return res.render("index.html", { home })
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