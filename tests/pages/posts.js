import { create, count, text } from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  postPreviewCounts: count(testSelector('post-preview')),
  fullPostTitle: text(testSelector('post-full-header')),
  fullPostContent: text(testSelector('post-full-content')),
});
