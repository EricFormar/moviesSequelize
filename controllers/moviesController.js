
const db = require('../database/models');
const Sequelize = require('sequelize')
let Op = Sequelize.Op;


module.exports = {
    list : function(req,res){
        db.Peliculas.findAll({
            include : [
                {
                    association : 'genero'
                },
                {
                    association : 'actores'
                }
            ]
        })
        .then( peliculas => {
            res.send(peliculas)
        })
    },
    detail : function(req,res){
        db.Peliculas.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {
                    association : 'genero'
                },
                {
                    association : 'actores'
                }
            ]
        })
        .then( pelicula => {
            res.send(pelicula)
        })
    },
    new : function(req,res){
        db.Peliculas.findAll({
            limit : 5,
            order : [
                ['release_date','DESC']
            ]
        })
        .then( peliculas => {
            res.send(peliculas)
        })
    },
    recommended : function(req,res){
        db.Peliculas.findAll({
            where : {
                awards : {
                    [Op.gte] : 8
                }
            }
        })
        .then( peliculas => {
            res.send(peliculas)
        })
    }
}