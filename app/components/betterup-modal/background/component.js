import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  click(e) {
    e.preventDefault();

    let onClick = this.get('onClick');

    if (onClick) {
      return onClick();
    }
  }
});
