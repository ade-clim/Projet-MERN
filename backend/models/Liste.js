const mongoose = require ("mongoose");

const listeSchema = mongoose.Schema({
    description : {type: String, required: true}
});

module.exports = mongoose.model('Liste', listeSchema);