const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, aboutProject, digitalSystems} = require("./pages")

nunjucks.configure('src/views', {
    express:server,
    noCache: true,
})

server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/about_project", aboutProject)
.get("/digital_systems", digitalSystems)
.listen(5000)