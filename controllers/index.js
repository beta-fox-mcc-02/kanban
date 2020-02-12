const axios = require('axios')

class MainController {
    static testKanban(req, res, next) {
        axios({
            method: 'GET',
            url: " https://api.jikan.moe/v3/search/anime?q=naruto&limit=16",
            responseType: 'json'
        })
            .then(response => {
                res.status(200).json(response.data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static testUnsplash(req, res, next) {
        axios({
            method: 'GET',
            url: "https://source.unsplash.com/random/1920x1080",
            responseType: 'blob'
        })
            .then(response => {
                res.status(200).json(response.data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = MainController