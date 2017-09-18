import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('betterup-modal/container', 'Integration | Component | betterup modal/container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{betterup-modal/container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#betterup-modal/container}}
      template block text
    {{/betterup-modal/container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
