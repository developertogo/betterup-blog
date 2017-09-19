import Ember from 'ember';

const { Component, get, computed, inject: { service } } = Ember;

export default Component.extend({
  router: service(),

  displayBackButton: computed('router.currentRouteName', function() {
    return get(this, 'router.currentRouteName') !== 'posts.index';
  }),

  click(e) {
    e.preventDefault();
    get(this, 'router').transitionTo('posts.index');
  }
});
