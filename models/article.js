const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    content: String,
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
          }
    },
    subject: {
        type: {
            subject: String,
            tags: String,
        }
            
    }, 
});

module.exports = mongoose.model('Article', articleSchema);