const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    temperature: {
      type: String,
    },
    humidity: {
      type: String,
    },
    // Timestamp:{
    //   type: String,
    // },
    retrievalTime:{ Date,
    },
  },
);
const sensor = mongoose.model('sensor', userSchema);

module.exports = sensor;