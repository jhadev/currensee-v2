import express from 'express';
const router = express.Router();

// collect all api endpoints
import apiRoutes from './api';

router.use('/api', apiRoutes);

// IF WE HAD HTML ROUTES, THEY'D BE SET UP HERE

export default router;
