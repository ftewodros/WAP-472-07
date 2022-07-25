const express = require('express');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});


router.get('/add', (req, res, next) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <body>
    <h2>HTML Forms</h2>

    <form action="/user/add" method="post">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
    </form> 
    </body>
    </html>
    `;
    res.send(html);
});

router.post('/add', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.fname, req.body.lname);
    res.end('Done...');
});



module.exports = router;