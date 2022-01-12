const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/katrina_users_db');
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
    }
);

export default mongoose;