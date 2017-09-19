import { test } from 'qunit';
import moduleForAcceptance from 'betterup-blog/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | posts/user can view posts');

test('user can view posts', async function(assert) {
  server.createList('post', 10);

  await visit('/');

  assert.equal(currentRouteName(), 'posts.index', 'landing page will redirect to the posts index');
  assert.equal(find(testSelector('post-preview')).length, 10, 'posts are loaded');
});
