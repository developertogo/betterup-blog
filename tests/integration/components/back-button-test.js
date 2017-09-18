import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('back-button', 'Integration | Component | back button', {
  integration: true
});

test('it hides and shows the back button depending on which route you are on', function(assert) {
  let postsIndex = 'posts.index';
  let postsShow = 'posts.show';

  this.set('currentPath', postsShow);
  this.render(hbs`{{back-button currentPath=currentPath}}`);

  assert.equal(this.$(testSelector('back-button')).length, 1, 'back button renders on a non-posts.index route');

  this.set('currentPath', postsIndex);

  assert.equal(this.$(testSelector('back-button')).length, 0, 'back button is hidden on the index route');
});
