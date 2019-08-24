
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public/dist/public"));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(err) {
    if(err) {
        console.log("Error: ", err);
    }   else {
        console.log("Running on port 8000!");
    }
})