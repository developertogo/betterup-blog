import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-preview', 'Integration | Component | post preview', {
  integration: true
});

test('it renders post title and truncated content', function(assert) {
  let maxLength = 125;
  let maxLengthWithEllipsis = maxLength + 4; // ' ...'
  let content = 'Iure quisquam ut eligendi dicta minus soluta dolor enim mollitia. Aut asperiores eum nostrum ut minima provident officia quia rerum.';
  let title = 'Post Title';

  let postStub = {
    id: 1,
    title,
    content
  };

  this.set('postStub', postStub);
  this.render(hbs`{{post-preview post=postStub}}`);

  // this assertion is here to ensure that we don't get a false positive
  // test by accidentally providing a string shorter than the maxlength
  assert.ok(content.length > maxLengthWithEllipsis, 'content is originally longer than the max length');

  assert.equal(this.$('.__header').text().trim(), title, 'component renders full title');
  assert.equal(this.$('.__content-preview').text().trim().length, maxLengthWithEllipsis, 'content is truncated when rendered')
});
