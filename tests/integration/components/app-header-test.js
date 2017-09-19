import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('app-header', 'Integration | Component | app header', {
  integration: true
});

test('it renders', function(assert) {
  let testAction = () => {};
  this.set('testAction', testAction);

  this.render(hbs`{{app-header currentPath='' openPostFormAction=testAction}}`);

  assert.ok(this.$(testSelector('header-logo')).length, 'app-header component renders');
});
