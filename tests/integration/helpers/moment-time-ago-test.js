
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('moment-time-ago', 'helper:moment-time-ago', {
  integration: true
});

test('it renders converts a timestamp string into a readable {time} ago format', function(assert) {
  this.set('timestamp', '2017-08-31T04:03:18.700Z');

  this.render(hbs`{{moment-time-ago timestamp}}`);

  assert.ok(this.$().text().trim().indexOf('ago') > -1, 'text converted to `{time} ago` format');
});

