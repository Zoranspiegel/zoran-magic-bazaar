require('dotenv').config();
const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;
const server = require('./src/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@a30l14n.uk1f40m.mongodb.net/${DB_NAME}?retryWrites=true`)
  .then(() => {
    console.log(`🍃Connected to ${DB_NAME} MongoDB`);
    server.listen(PORT, () => {
      console.log(`🧞Listening on port ${PORT}...`);
    });
  });
