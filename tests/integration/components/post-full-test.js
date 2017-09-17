import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('post-full', 'Integration | Component | post full', {
  integration: true
});

test('it renders the post', function(assert) {
  let title = 'Title';
  let content = 'There\'s a snake in my boot!';
  let postStub = {
    id: 1,
    title,
    content
  };
  this.set('postStub', postStub);
  this.render(hbs`{{post-full post=postStub}}`);

  assert.equal(this.$(testSelector('post-full-header')).text().trim(), title, 'title renders');
  assert.equal(this.$(testSelector('post-full-content')).text().trim(), content, 'content renders');
});
