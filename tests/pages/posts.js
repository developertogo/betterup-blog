import { create, count, text, visitable, clickable } from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  visitPost: visitable('posts/:id'),
  editPostButton: clickable(testSelector('edit-post-button')),
  postPreviewCounts: count(testSelector('post-preview')),
  fullPostTitle: text(testSelector('post-full-header')),
  fullPostContent: text(testSelector('post-full-content')),
});
