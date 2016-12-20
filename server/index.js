import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import Goals from '../models/goals'

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const DATABASE_URL = 'mongodb://accountability:accountability@ds139428.mlab.com:39428/accountability';

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));


app.get('/api/home', (request, response) => {
  Goals.find({})
  .then((goals) => {
    return response.status(200).json(goals[0].goal);
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

if (require.main === module) {
    runServer();
}
