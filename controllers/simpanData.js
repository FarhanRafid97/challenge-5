import fs from 'fs';

const folder = './data';
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}
const path = './data/data.json';
if (!fs.existsSync(path)) {
  fs.writeFileSync(path, '[]', 'utf-8');
}

export const fileUsers = () => {
  const file = fs.readFileSync('./data/data.json', 'utf-8');
  const users = JSON.parse(file);
  return users;
};

export const simpanUser = (nama, email, password) => {
  const dataUser = {
    nama,
    email,
    password,
  };
  const contacts = fileUsers();

  contacts.push(dataUser);
  fs.writeFileSync('./data/data.json', JSON.stringify(contacts));
  console.log(contacts);
};
