export default function(){
  this.transition(
    this.fromRoute('posts.index'),
    this.toRoute('posts.show'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
}
