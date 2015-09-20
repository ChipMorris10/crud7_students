var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var Student = new Schema ({
    name: String,
    age: Number,
    graduate: Boolean
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/students');

module.exports = mongoose.model('students', Student);