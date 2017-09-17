import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('app-header', 'Integration | Component | app header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-header}}`);

  assert.ok(this.$(testSelector('header-logo')).length, 'app-header component renders');
});
