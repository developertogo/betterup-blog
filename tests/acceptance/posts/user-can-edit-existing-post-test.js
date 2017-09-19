import { test } from 'qunit';
import moduleForAcceptance from 'betterup-blog/tests/helpers/module-for-acceptance';
import postsPage from 'betterup-blog/tests/pages/posts';
import postFormComponent from 'betterup-blog/tests/pages/components/modals/post-form';

moduleForAcceptance('Acceptance | posts/user can add new post');

test('user can edit an existing post', async function(assert) {
  let newTitle = 'title';
  let newContent = 'content';

  let { id } = server.create('post', { title: 'original title', content: 'original content' });

  await postsPage.visitPost({ id });
  await postsPage.editPostButton();
  await postFormComponent.fillOutForm(newTitle, newContent);
  await postFormComponent.submitFormButton();

  assert.equal(currentRouteName(), 'posts.show', 'user stays on the post page after form closes');
  assert.equal(postsPage.fullPostTitle, newTitle, 'page displays the updated title');
  assert.equal(postsPage.fullPostContent, newContent, 'page displays the updated content');
});
