import express from 'express';
import { simpanUser, fileUsers } from './simpanData.js';

const dataUsers = fileUsers();
let isLogin = false;

export const loginValidation = (req, res, next) => {
  if (!isLogin) {
    res.redirect('/login');
  } else {
    next();
  }
};

export const indexPage = (req, res) => {
  res.render('index');
};
export const getData = (req, res) => {
  res.render('tampil-data', { dataUsers });
};

export const registerUser = (req, res) => {
  res.render('register');
};

export const postRegisterUser = (req, res) => {
  const { nama, email, password } = req.body;

  simpanUser(nama, email, password);
  res.redirect('/register');
  console.log({ nama, email, password });
};

export const loginUser = (req, res) => {
  res.render('login');
};
export const loginUserPost = (req, res) => {
  const { nama, password } = req.body;
  const login = dataUsers.find(
    (data) => nama === data.nama && password === data.password
  );
  console.log(login);
  if (!login) {
    return res.redirect('/login');
  } else {
    isLogin = true;
    res.redirect('/data');
    console.log(isLogin);
  }
};

export const dataJson = (req, res) => {
  res.json(dataUsers);
};

export const logOutUser = (req, res) => {
  isLogin = false;
  res.redirect('/login');
  console.log(isLogin);
};
