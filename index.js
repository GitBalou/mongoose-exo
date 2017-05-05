const mongoose = require('mongoose');
const UserModel = require('./users');

// workaround to retrieve deprecation messages for mongoose promises
mongoose.Promise = global.Promise;

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

db.on('error', () => console.log("connection failed"));

db.on('open', () => {
    console.log("connection");

    /* add user's to db
    UserModel.create({
        //email: 'bibi@mail.com',
        name: 'john doe',
    }, {
        email: 'bibiche@mail.com',
    }, {
        email: 'bla@mal.com',
    })

    .then( result => {
        console.log(result);
    })

    .catch(e => {
        console.log(e.errors);
    });
    */

    /* get all users
    UserModel.find()
    .then( results => console.log(results))
    .catch(e => console.log(e));
    */

    /* find one user
    UserModel.find({email:'bibiche@mail.com'})
    .then(results => console.log(results))
    .catch(e => console.log(e));
    */

    /* update user bibiche
    UserModel.findOne({email:'bibiche@mail.com'})
    .then(results => {
        results.active = true;

        return results.save();
    })
    .then( result => console.log(result))
    .catch(e => console.log(e));
    */

    /* remove user bibiche
    UserModel.findOne({email:'bibiche@mail.com'})
    .then(results => {
        const id = results._id;

        return UserModel.remove( {_id: id});
    })
    .then( result => console.log(result.result))
    .catch(e => console.log(e));
    */
});