import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js';

// check this was as follow for older version
// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postsRoutes);
const CONNECTION_UR =
   'mongodb+srv://MarvelHomes:diehard@traningdb.r3yxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
   .connect(CONNECTION_UR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() =>
      app.listen(PORT, () => console.log(`Server running on port :${PORT}`))
   )
   .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
