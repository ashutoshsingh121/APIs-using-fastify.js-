// IMPORTS
const fastify = require('fastify')();

// ROUTES
fastify.register(require('./routes/routes'));

// LISTENER
fastify.listen(3001, function (err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log('Server is up and running on port 3001...');
    }
}); 