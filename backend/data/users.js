import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Raaul ',
    email: 'raaul@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Vivek Pundkar',
    email: 'vivek@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users