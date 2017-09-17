export default function() {
  // this.timing = 1000; enable for testing loading states

  this.get('/posts');
  this.get('/posts/:id');
}
