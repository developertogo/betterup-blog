export default function() {
  this.timing = 4000; // enable for testing loading states

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.patch('/posts/:id');
}
