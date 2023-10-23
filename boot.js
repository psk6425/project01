const mongoose = require('mongoose');
const { Post } = require('./models');

mongoose.connect('mongodb://localhost:27017/simple-board');

async function boot() {
  for (let i = 0; i < 100; i++) {
    await Post.create({
      title: `게시글 ${i} 번`,
      content: `게시글 ${i} 번 내용`,
    });
  }
}

boot()
  .then(() => process.exit());
