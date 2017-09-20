import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('loading-indicator', 'Integration | Component | loading indicator', {
  integration: true
});

test('it renders without any settings being passed in', function(assert) {
  this.render(hbs`{{loading-indicator}}`);

  assert.equal(this.$(testSelector('loader')).text().trim(), 'Loading...', 'loader renders');
});

test('it renders size and color when they are passed in', function(assert) {
  this.render(hbs`{{loading-indicator size='50px' color='#000'}}`);

  let expectedStyle = 'font-size: 50px; color: #000';
  assert.equal(this.$(testSelector('loader')).attr('style'), expectedStyle, 'it generates style based on passed-in attributes');
});
