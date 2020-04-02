import express from 'express';
import withAuth from '../../middleware/authentication';

import {
  getUserProfile,
  register,
  login
} from '../../controllers/user-controller';

const router = express.Router();

router.route('/').get(withAuth, getUserProfile);

router.route('/login').post(login);

router.route('/register').post(register);

export default router;
