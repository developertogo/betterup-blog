import { create, clickable, fillable } from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  titleInput: fillable(`${testSelector('post-title-input')} input`),
  contentInput: fillable(`${testSelector('post-content-input')} textarea`),
  submitFormButton: clickable(testSelector('post-form-submit')),

  fillOutForm(title, content) {
    return this.titleInput(title)
      .contentInput(content);
  }
});
