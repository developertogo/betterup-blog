
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('moment-time-ago', 'helper:moment-time-ago', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{moment-time-ago inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

