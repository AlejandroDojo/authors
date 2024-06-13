const Author = require('../models/author.model');

module.exports.index = (req, res) => {
    return res.status(200).json({message: "Connected correctly"})
}

module.exports.allAuthors = (req, res) => {
    return Author.find().sort({name: 1})
        .then((auth) => {
            return res.status(200).json(auth);
        })
        .catch((err) => {
            return res.status(406).json(err);
        });
}

module.exports.newAuthor = (req, res) => {
    return Author.create({name: req.body.name})
        .then(created => res.status(201).json(created))
        .catch(err => res.status(406).json(err))
}

module.exports.updateAuthor = (req, res) => {
    const {_id} = req.params;
    if (req.body.name === "") {
        return res.status(406).json({message: "Error, you need to put something"});
    }


    return Author.findByIdAndUpdate({_id: _id}, {name: req.body.name})
        .then((productUpdated) => {
            res.status(200).json({productUpdated});
        })
        .catch(err => res.status(206).json(err));
}

module.exports.deleteAuthor = (req, res) => {
    const {_id} = req.params;
    return Author.findByIdAndDelete({_id: _id})
        .then((productDeleted) => {
            res.status(200).json({productDeleted});
        })
        .catch(err => res.status(206).json(res));
}