const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;

const usersRouter = require('./src/routes/users');
const productsRouter = require('./src/routes/products');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({
    message: 'oi',
  });
});

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => console.log('Servidor iniciado com sucesso.'));
