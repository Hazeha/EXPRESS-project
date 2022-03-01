module.exports = app => {
    let router = require("express").Router();

    const rental = require("../controllers/rental.controller.js");

    // TODO Update Presets.
    // router.put("/rental/:id", rentals.putPreset);
    // TODO Delete Presets.

    // TODO Select Seat.

    // TODO Retrieve Preset data.
    router.get("/", rental.findAll);
    router.get("/:id", rental.findOne);
    router.post("/create/", rental.create);
    router.delete("/deleteTool/:id", rental.delete);
    router.put("/putTool/:id", rental.update);

    app.use('/api', router);
};

// TODO In data base create trigger for activation of vents and seats.
