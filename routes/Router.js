import express from 'express';
import {
  getData,
  registerUser,
  postRegisterUser,
  loginUser,
  loginUserPost,
  dataJson,
  loginValidation,
  logOutUser,
} from '../controllers/Users.js';

const router = express.Router();

router.get('/data', loginValidation, getData);
router.get('/register', registerUser);
router.post('/register', postRegisterUser);
router.get('/login', loginUser);
router.post('/login', loginUserPost);
router.get('/data-json', loginValidation, dataJson);
router.post('/data', logOutUser);
export default router;
