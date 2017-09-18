import Ember from 'ember';

const { Component, run: { next } } = Ember;

export default Component.extend({
  didInsertElement() {
    next(() => {
      this.$().addClass('--is-opened');
    });
  }
});
