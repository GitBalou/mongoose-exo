
const mongoose = require('mongoose');

/* méthode 1
mongoose.connect('mongodb://localhost:27017/exo1', err => {
    if( err) {
        throw err
    }
});
*/

// méthode 2
mongoose.connect('mongodb://localhost:27017/exo1');

const db = mongoose.connection;

db.on('open', () => console.log("connection"));
db.on('error', () => console.log("connection failed"));