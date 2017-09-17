import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-header', 'Integration | Component | app header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-header}}`);

  assert.ok(this.$('.logo').length, 'app-header component renders');
});