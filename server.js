const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let posts = [];
let products = [];
let userInfos = [];
let content = {};

app.get('/recentPosts', (req, res) => {
  res.json(posts);
});

app.post('/recentPosts', (req, res) => {
  const newPost = { ...req.body, id: posts.length + 1 };
  posts.push(newPost);
  res.json(newPost);
});

app.put('/recentPosts/:id', (req, res) => {
  const { id } = req.params;
  const updatedPost = { ...req.body, id: parseInt(id) };
  posts = posts.map(post => post.id === parseInt(id) ? updatedPost : post);
  res.json(updatedPost);
});

app.delete('/recentPosts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter(post => post.id !== parseInt(id));
  res.json({ message: 'Post deleted' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const updatedProduct = { ...req.body, id: parseInt(id) };
  products = products.map(product => product.id === parseInt(id) ? updatedProduct : product);
  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  products = products.filter(product => product.id !== parseInt(id));
  res.json({ message: 'Product deleted' });
});

app.get('/userInfos', (req, res) => {
  res.json(userInfos);
});

app.post('/userInfos', (req, res) => {
  const newUser = { ...req.body, id: userInfos.length + 1 };
  userInfos.push(newUser);
  res.json(newUser);
});

app.put('/userInfos/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = { ...req.body, id: parseInt(id) };
  userInfos = userInfos.map(user => user.id === parseInt(id) ? updatedUser : user);
  res.json(updatedUser);
});

app.delete('/userInfos/:id', (req, res) => {
  const { id } = req.params;
  userInfos = userInfos.filter(user => user.id !== parseInt(id));
  res.json({ message: 'User deleted' });
});

app.get('/content', (req, res) => {
  res.json(content);
});

app.put('/content', (req, res) => {
  content = req.body;
  res.json(content);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
