const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task', {
    useNewUrlParser: true,   
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the MongoDB database...");
})
.catch((err) => {
    console.error("Database connection error:", err.message); 
});

module.exports = mongoose;
