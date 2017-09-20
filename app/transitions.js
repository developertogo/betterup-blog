export default function(){
  this.transition(
    this.fromRoute('posts.index'),
    this.toRoute('posts.show'),
    this.use('toLeft', { duration: 600, easing: [0.19, 1, 0.22, 1]}),
    this.reverse('toRight', { duration: 600, easing: [0.19, 1, 0.22, 1]})
  );
}
