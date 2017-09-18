import Ember from 'ember';

const { Component, get, computed, inject: { service } } = Ember;

export default Component.extend({
  router: service(),

  displayBackButton: computed('currentPath', function() {
    let path = get(this, 'currentPath');
    return path !== 'posts.index';
  }),

  click(e) {
    e.preventDefault();
    get(this, 'router').transitionTo('posts.index');
  }
});
