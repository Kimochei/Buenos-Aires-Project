import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';  
import morgan from 'morgan';

import clientRoutes from "./routes/client.js";
import adminRoutes from "./routes/admin.js";
import reservationRoutes from "./routes/reservation.js";
import venueRoutes from "./routes/venue.js";
/* config */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* routes */

app.use("/client", clientRoutes);
app.use("/admin", adminRoutes);
app.use("/reservation", reservationRoutes);
app.use("/venue", venueRoutes);

/* Mongoose Setup */

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {

                              useNewUrlParser: true,
                              useUnifiedTopology: true,
                              
                              }).then(() => {app.listen(PORT, () => console.log(`Server Port: ${PORT}`));


}).catch((error) => console.log(`${error} did not connect`));



                          