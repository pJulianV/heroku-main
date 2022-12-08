import express from 'express';
import {router} from './routes/routes.js';
import cors from 'cors';
//import {shevento} from './controllers/eventcontrollers.js'
//import {db} from './basedatos.js';
//const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json())
app.use('/',router);
router.get('/', (req,res) => {
    res.send(" Pagina funcionando en Render")
})

//router.get('/eventos', shevento);

var PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Se conecto al servidor http://localhost:${PORT}`)
})