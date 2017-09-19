import Ember from 'ember';

const { Component, get, $ } = Ember;

export default Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    let isOpen = get(this, 'isOpen');
    let $container = $('.application-container');
    let lockClass = '--scroll-locked';

    if (isOpen) {
      $container.addClass(lockClass);
    } else {
      $container.removeClass(lockClass);
    }
  }
});
