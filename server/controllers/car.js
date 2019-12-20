const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const cookieParser = require('cookie-parser');

module.exports = {
    get: (req, res, next) => {
        models.Car.find()
            .then((cars) => res.send(cars))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { firstName, lastName, username, password } = req.body;
            models.User.create({ firstName, lastName, username, password, role: "user" })
                .then((createdUser) => res.send(createdUser))
                .catch(result => {
                    debugger;
                })
        },

        add: (req, res, next) => {
            const { manufactuer, model, platteNumber, description, thumbnailImageUrl  } = req.body;
            const {_id} = req.user;
            models.Car.create({ manufactuer, model, platteNumber, description, thumbnailImageUrl, user: _id })
                .then(car => {
                    debugger;
                })
                .catch(err => {
                    debugger;
                })

        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};