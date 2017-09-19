import { test } from 'qunit';
import moduleForAcceptance from 'betterup-blog/tests/helpers/module-for-acceptance';
import postsPage from 'betterup-blog/tests/pages/posts';

moduleForAcceptance('Acceptance | posts/user can view posts');

test('user can view posts', async function(assert) {
  server.createList('post', 10);

  await visit('/');

  assert.equal(currentRouteName(), 'posts.index', 'landing page will redirect to the posts index');
  assert.equal(postsPage.postPreviewCounts, 10, 'posts are loaded on posts index route');
});
