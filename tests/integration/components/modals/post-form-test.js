import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('modals/post-form', 'Integration | Component | modals/post form', {
  integration: true
});

test('it renders', function(assert) {
  this.set('postFormIsOpened', true);

  this.render(hbs`
    {{betterup-modal
      isOpen=postFormIsOpened
      modal=(hash component='modals/post-form' close=(action (mut postFormIsOpened)))}}
    {{betterup-modal/target}}
  `);

  assert.equal(this.$(testSelector('post-form')).length, 1, 'post form renders');
});

test('form submit is disabled by default when fields are empty', function(assert) {
  this.set('postFormIsOpened', true);

  this.render(hbs`
    {{betterup-modal
      isOpen=postFormIsOpened
      modal=(hash component='modals/post-form' close=(action (mut postFormIsOpened)))}}
    {{betterup-modal/target}}
  `);

  assert.equal(this.$(`${testSelector('post-form-submit')}[disabled]`).length, 1, 'form submit button is disabled');
});
