// router is like a mini-app it lets us define routes and save them in their own area
const express = require('express');

// Make a router
// A router is like a mini-app
const router = express.Router();

// We can use a 'router' just like we use app
router.get('/book', (req, res) => {
    res.send(bookList);
})

router.post('/book', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

// Export our books "mini app"
module.exports = router;