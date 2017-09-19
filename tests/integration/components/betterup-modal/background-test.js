import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('betterup-modal/background', 'Integration | Component | betterup modal/background', {
  integration: true
});

test('it calls a close action when clicked on', function(assert) {
  assert.expect(2);

  this.set('closeAction', () => {
    assert.ok(true, 'the close action is called when the background is clicked on');
  });

  this.render(hbs`{{betterup-modal/background onClick=(action closeAction)}}`);

  let $backgroundModal = this.$(testSelector('modal-background'));

  assert.equal($backgroundModal.length, 1, 'background is rendered');

  $backgroundModal.click();
});
