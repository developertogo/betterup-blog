import { create, count } from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  postPreviewCounts: count(testSelector('post-preview')),
});
