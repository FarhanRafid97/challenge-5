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
  indexPage,
} from '../controllers/Users.js';

const router = express.Router();
router.get('/', indexPage);
router.get('/data', loginValidation, getData);
router.get('/register', registerUser);
router.post('/register', postRegisterUser);
router.get('/login', loginUser);
router.post('/login', loginUserPost);
router.get('/data-json', loginValidation, dataJson);
router.post('/logout', logOutUser);
export default router;
