const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  category: { type: String, enum:[
    'thriller',
    'action',
  ],
},
});

module.exports = mongoose.model("Movie", movieSchema);
