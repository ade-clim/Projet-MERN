const Liste = require('../models/Liste');


exports.createListe = (req,res,next)=>{
    delete req.body._id;
    const liste = new Liste({
        ...req.body
    });

    liste.save()
        .then(() => res.status(201).json({message : "Objet enregistré"}))
        .catch(error => res.status(400).json({error}))
};

exports.getAllListes = (req, res, next)=>{
    Liste.find()
        .then(l => res.status(200).json(l))
        .catch(error => res.status(400).json({error}))
};

exports.deleteListe = (req,res,next)=>{
    Liste.deleteOne({_id:req.params.id})
        .then(() => res.status(200).json({message: 'tache supprimée !'}))
        .catch(error => res.status(400).json({error}))
};
