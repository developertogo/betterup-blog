import { test } from 'qunit';
import moduleForAcceptance from 'betterup-blog/tests/helpers/module-for-acceptance';
import postsPage from 'betterup-blog/tests/pages/posts';
import appHeaderComponent from 'betterup-blog/tests/pages/components/app-header';
import postFormComponent from 'betterup-blog/tests/pages/components/modals/post-form';

moduleForAcceptance('Acceptance | posts/user can add new post');

test('user can add a new post', async function(assert) {
  let title = 'title';
  let content = 'content';

  await visit('/');
  await appHeaderComponent.newPostButton();
  await postFormComponent.fillOutForm(title, content);
  await postFormComponent.submitFormButton();

  assert.equal(currentRouteName(), 'posts.show', 'user is directed to posts.show after submitting form');
  assert.equal(postsPage.fullPostTitle, title, 'posts.show page displays the newly added post title');
  assert.equal(postsPage.fullPostContent, content, 'posts.show page displays the newly added post content');
});
