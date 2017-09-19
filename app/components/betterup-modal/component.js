import Ember from 'ember';

const { Component, get, $ } = Ember;

export default Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    let isOpen = get(this, 'isOpen');
    let $html = $('html');
    let lockClass = '--scroll-locked';

    if (isOpen) {
      $html.addClass(lockClass);
    } else {
      $html.removeClass(lockClass);
    }
  }
});
