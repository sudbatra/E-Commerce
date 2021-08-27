const sequlize = require('./config/connection');
const express = require('express');
const routes = require('./routes');

// exporting the sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

// syncing sequelize models to the database, then turn on the server
sequlize.sync().then(app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})
;)

