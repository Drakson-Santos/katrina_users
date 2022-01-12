const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobs_app');
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
    }
);

export default mongoose;