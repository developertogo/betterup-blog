import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';
import Ember from 'ember';

moduleForComponent('betterup-modal', 'Integration | Component | betterup modal farts', {
  integration: true
});

const { Component } = Ember;

test('it does not display a modal when isOpen is false', function(assert) {
  this.register('component:integration-test-modal', Component.extend({
    layout: hbs`<h1 data-test-modal>test-modal</h1>`
  }));

  this.render(hbs`
    {{betterup-modal
      isOpen=false
      modal=(hash component='integration-test-modal')
    }}
    {{betterup-modal/target}}
  `);

  assert.equal(this.$(testSelector('modal')).length, 0,  'modal is not rendered');
});

test('it does display a passed-in modal component when isOpen is set to true', function(assert) {
  this.register('component:integration-test-modal', Component.extend({
    layout: hbs`<h1 data-test-modal>test-modal</h1>`
  }));

  this.render(hbs`
    {{betterup-modal
      isOpen=true
      modal=(hash component='integration-test-modal')
    }}
    {{betterup-modal/target}}
  `);

  assert.equal(this.$(testSelector('modal')).length, 1,  'modal is rendered');
});

test('arbitrarily named properties can be passed into the betterup-modal hash and be used in the rendered component', function(assert) {
  this.register('component:integration-test-modal', Component.extend({
    layout: hbs`<h1 data-test-modal>{{modal.name}}</h1>`
  }));

  this.render(hbs`
    {{betterup-modal
      isOpen=true
      modal=(hash component='integration-test-modal' name="super neato name")}}
    {{betterup-modal/target}}
  `);

  assert.equal(this.$(testSelector('modal')).text().trim(), 'super neato name', 'passing properties to the passed-in component works');
});
