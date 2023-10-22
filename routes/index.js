const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.get('/test', (req, res) => {
  res.sendFile("/views/test.html", {root: "."})
})

module.exports = router;