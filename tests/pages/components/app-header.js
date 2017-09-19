import { create, clickable } from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  newPostButton: clickable(testSelector('new-post-button')),
});
