require('dotenv').config();

const server = require('./api/server.js');

// make dynamic
const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));
