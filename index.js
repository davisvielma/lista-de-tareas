require('dotenv').config();
const app = require('./app');

const { PORT } = require('./src/config/config');

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));