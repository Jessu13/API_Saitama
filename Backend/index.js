import express from "express";
import router from "./routes/index.routes.js";
import cors from 'cors';
import db from "./configuracion/db.js";

const app = express();

db.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.log(err));

// Puerto
const port = 4000;

// Leer formato JSON
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use('/', router);
app.use('/monstruos', router);
app.use('/celulas', router);
app.use('/heroes', router);
app.use('/patrocinadores', router)
app.use('/fans', router);
app.use('/saitamaZone', router);
app.use('/batallas', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});