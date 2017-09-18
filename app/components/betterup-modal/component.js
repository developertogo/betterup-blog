import Ember from 'ember';

const { Component, get, $ } = Ember;

export default Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    let isOpen = get(this, 'isOpen');

    if (isOpen) {
      $('html').addClass('--scroll-locked');
    } else {
      $('html').removeClass('--scroll-locked');
    }
  }
});
