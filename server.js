import  express  from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";

import "./models/index.js";

import doctorsRouter from "./routes/doctors.js";
import qualificationsRouter from "./routes/qualifications.js";
import doctorAvailabilitysRouter from "./routes/doctorAvailabilitys.js";
import registersRouter from "./routes/registers.js";


dotenv.config();


const app = express();
const port = 3000;




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use("/doctors", express.static("public/books.html"));

app.use("/api/doctors",doctorsRouter);
app.use("/api/qualifications", qualificationsRouter);
app.use("/api/doctorAvailabilitys", doctorAvailabilitysRouter);
app.use("/api/registers", registersRouter);

app.use((error, request, response, next) => {
    response.status(500).json({
      message: "Internal server error!",
    });
  
    console.log(error);
    next();
  });
   

startSequelize(sequelize);  

// routes / URL / endpoint utama method GET

const jalankanServer = async() => {
    try {
        app.get('/', (req, res) => {
            res.send('Hello World!')
        })
        
        app.get('/account', (req, res) => {
            // res.send('Hello World!')
            let account = [];
            res.json(account);
        })

        app.post('/Login', (req, res) => {
            res.send('Login berhasil')
        })
    } catch (error) {}
};

jalankanServer();

// routes / URL / endpoint utama method GET



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});