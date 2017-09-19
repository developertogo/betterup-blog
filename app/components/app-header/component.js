import Ember from 'ember';

const { Component, computed: { equal }, inject: { service } } = Ember;

export default Component.extend({
  router: service(),
  displayEditIcon: equal('router.currentRouteName', 'posts.show')
});
