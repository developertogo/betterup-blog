import { test } from 'qunit';
import moduleForAcceptance from 'betterup-blog/tests/helpers/module-for-acceptance';
import postsPage from 'betterup-blog/tests/pages/posts';
import appHeaderComponent from 'betterup-blog/tests/pages/components/app-header';
import postFormComponent from 'betterup-blog/tests/pages/components/modals/post-form';

moduleForAcceptance('Acceptance | posts/user receives success and error notifications');

test('user receives success notification for editing a post', async function(assert) {
  let { id } = server.create('post', { title: 'title', content: 'content' });
  let expectedMessage = 'Your post has been updated!';

  await postsPage.visitPost({ id });
  await postsPage.editPostButton();
  await postFormComponent.submitFormButton();

  let $successNotification = find('.ember-notify.success');
  let $successMessage = find('.ember-notify .message');

  console.log(find('.ember-notify'));

  assert.ok($successNotification.length, 'a success notification renders');
  assert.equal($successMessage.text().trim(), expectedMessage, 'notification messaging is correct on update');
});

test('user receives success notification for adding a new post', async function(assert) {
  let expectedMessage = 'Your post has been created!';

  await visit('/');
  await appHeaderComponent.newPostButton();
  await postFormComponent.fillOutForm('title', 'content');
  await postFormComponent.submitFormButton();

  let $successNotification = find('.ember-notify.success');
  let $successMessage = find('.ember-notify .message');

  assert.ok($successNotification.length, 'a success notification renders');
  assert.equal($successMessage.text().trim(), expectedMessage, 'notification messaging is correct on create');
});

test('user receives an error notification if the app errors on save', async function(assert) {
  server.post('posts', function() {
    return new Response(404)
  });

  let expectedMessage = 'There was a problem saving your post. Please try again.';

  await visit('/');
  await appHeaderComponent.newPostButton();
  await postFormComponent.fillOutForm('title', 'content');
  await postFormComponent.submitFormButton();

  let $alertNotification = find('.ember-notify.alert');
  let $alertMessage = find('.ember-notify .message');

  assert.ok($alertNotification.length, 'an alert notification renders');
  assert.equal($alertMessage.text().trim(), expectedMessage, 'alert messaging is correct on errored save');
});
