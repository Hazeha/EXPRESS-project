const db = require("../models");
const Rental = db.rental;
const Op = db.Sequelize.Op;

// Create and Send a new Preset TODO Should we have a create or should it be autoconfig?

exports.create = (req, res) => {
    // Validate request TODO Make validator.
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Preset data
    // Create a Tutorial
    const rental = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
    // Send Preset data to the database
    Rental.create(rental)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Get all Presets with user_id like user_id
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Rental.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while getting Presets!"
        });
    });
}
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Rental.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Rental.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };
  
  // Delete a Tutorial with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Rental.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };
/*
// Get specific preset by id
exports.getPreset = (req, res) => {
    const id = req.params.user_id;
    Preset.findByPk(id).then(data => {
        res.send(data);
    })
}

exports.putPreset = (req, res) => {
    const id = req.params.id;
    Preset.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Presets was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Presets with id=${id}. Maybe Preset was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Preset with id=" + id
            });
        });
};
exports.listAllSeatsInRoom = (req, res) => {
    Preset.findAll({ where: { id: 1 } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
*/