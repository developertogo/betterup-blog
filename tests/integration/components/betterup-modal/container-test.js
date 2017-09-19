import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('betterup-modal/container', 'Integration | Component | betterup modal/container', {
  integration: true
});

test('it renders block content', function(assert) {
  assert.expect(1);

  this.set('closeAction', () => {});

  this.render(hbs`
    {{#betterup-modal/container close=(action closeAction)}}
      <h1 data-test-modal-content>Hi!</h1>
    {{/betterup-modal/container}}
  `);

  assert.equal(this.$(testSelector('modal-content')).length, 1, 'block content is rendered');
});

test('it calls a close action when the close icon is clicked', function(assert) {
  assert.expect(1);

  this.set('closeAction', () => {
    assert.ok(true, 'the close action is called when the close icon is clicked on');
  });

  this.render(hbs`
    {{#betterup-modal/container close=(action closeAction)}}
      <h1>Hi!</h1>
    {{/betterup-modal/container}}
  `);

  this.$(testSelector('modal-container-close')).click();
});
