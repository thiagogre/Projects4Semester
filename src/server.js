const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, aboutProject, digitalSystems, eletricity} = require("./pages")

nunjucks.configure('src/views', {
    express:server,
    noCache: true,
    autoescape: false
})

server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/about_project", aboutProject)
.get("/digital_systems", digitalSystems)
.get("/eletricity", eletricity)
.listen(5000)