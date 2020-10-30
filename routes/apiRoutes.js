const db = require('../models')


//console.log("diogo candido")

module.exports = (app) => { 
    app.get("/api/workouts", (req, res) => {  
        db.Workout.find({})
        .then(data => {res.json(data)})
        .catch(err => {res.status(400).json(err)});
    });

    app.post("/api/workouts", (req, res) => {    
        db.Workout.create({})
        .then(data => {res.json(data)})
        .catch(err => {res.status(400).json(err)});
    });

    app.get("/api/workouts/range", (req, res) => {  
        db.Workout.find({})
        .then(data => {res.json(data)})
        .catch(err => {res.status(400).json(err)});
    });

    app.post("/api/workouts/range", (req, res) => {    
        db.Workout.create({})
        .then(data => {res.json(data)})
        .catch(err => {res.status(400).json(err)});
    });


    app.put("/api/workouts/:id",({body,params},res)=>{   
        db.Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => {res.json(data)})
        .catch(err => {res.status(400).json(err)})
    
    });
}
