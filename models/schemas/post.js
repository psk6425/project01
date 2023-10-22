const { Schema } = require('mongoose');
const shortId = require('./types/short-id');

const PostSchema = new Schema({
  shortId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = PostSchema;