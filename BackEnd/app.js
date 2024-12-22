import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user',userRoutes);





const port = 9000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

