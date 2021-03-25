const mongoose = require('mongoose');
const { update } = require('../controllers/articles');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: false,
    },
    body: {
        type: String, 
        required: true,
    },
    date: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
          }
    },

    
}, { timestamps: true});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
