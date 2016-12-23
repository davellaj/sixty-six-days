import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import Goals from '../models/goals';
import Stickers from '../models/stickers';

import bodyParser from 'body-parser';

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const DATABASE_URL = 'mongodb://accountability:accountability@ds139428.mlab.com:39428/accountability';
const jsonParser = bodyParser.json();

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));
app.use(jsonParser);


app.get('/api/home', (request, response) => {
  Goals.find({})
  .then((goals) => {
    return response.status(200).json(goals);
  })
  .catch(err => {
    console.error(err);
    response.status(500).json({message: 'internal server error'})
  })
})

function runServer() {
    return new Promise((resolve, reject) => {
      mongoose.connect(DATABASE_URL, err => {
          if (err) {
          return reject(err);
   }
      app.listen(PORT, HOST, (err) => {
          if (err) {
              console.error(err);
              reject(err);
            }
          const host = HOST || 'localhost';
          console.log(`Listening on ${host}:${PORT}`);
        });
    });
})}

app.post('/api/home', function(req, res) {
// in future will have to find individual user and then add goal
  let goal = new Goals()
  // console.log(req.body);
      goal.goal = req.body.goal
      goal.user = req.body.user
      goal.completed = false

      goal.save((err, goal) => {
          if(err){
              res.send(err)
          }

          Goals.find({}, (err, goal) => {
              if(err){
                  res.send(err)
              }
              res.json(goal)
          })
      })
})

app.put('/api/home/:id', (req, res) => {
  // console.log(req.body)
  Goals.findOneAndUpdate(
    {_id: req.params.id},
    {$set:{goal: req.body.goal}},
    {upsert: true},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
      Goals.find({}, (err, goal) => {
          if(err){
              res.send(err)
          }
          res.json(goal)
      })
      }
  );
});

app.put('/api/home/completed/:id', (req, res) => {

  Goals.findOne({_id: req.params.id}, function(err,obj) {
    // console.log(obj.completed);
  Goals.findOneAndUpdate(
    {_id: req.params.id},
    {$set:{completed: !obj.completed}},
    {upsert: true},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
    });

      Goals.find({}, (err, goal) => {
          if(err){
              res.send(err)
          }
          res.json(goal)
      })
      }
  );
});

app.delete('/api/home/:id', (req, res) => {
  Goals.findByIdAndRemove(
    {_id: req.params.id},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
    res.sendStatus(204);
    }
  );
})

app.get('/api/home/stickers', (req, res) => {
  Stickers.find({})
  .then((stickers) => {
    return res.status(200).json(stickers);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({message: 'internal server error'})
  })
})


if (require.main === module) {
    runServer();
}
