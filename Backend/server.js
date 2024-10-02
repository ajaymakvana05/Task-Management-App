const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 1000;
const UserAPI = require('./Routes/user');


app.use(cors());
app.use(express.json());


app.use('/api/v1', UserAPI);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
