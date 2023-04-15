require('dotenv').config();
const {
  DB_DEPLOY,
  DB_NAME
} = process.env;
const server = require('./src/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;

mongoose.connect(DB_DEPLOY)
  .then(() => {
    console.log(`🍃Connected to ${DB_NAME} MongoDB`);
    server.listen(PORT, () => {
      console.log(`🧞Listening on port ${PORT}...`);
    });
  });
