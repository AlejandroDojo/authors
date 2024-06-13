const express = require('express');
const cors = require('cors');
const app = express();
const AuthorRoute = require('./routes/author.routes')
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AuthorRoute(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})