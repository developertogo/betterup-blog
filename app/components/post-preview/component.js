import Ember from 'ember';

const { Component, get, computed, inject: { service } } = Ember;

export default Component.extend({
  maxLength: 125,
  routing: service('-routing'),

  previewText: computed('post.content', function() {
    let content = get(this, 'post.content');
    let maxLength = get(this, 'maxLength');
    return (content.length > maxLength) ? `${content.slice(0, maxLength)} ...` : content;
  }),

  click(e) {
    e.preventDefault();

    // let router = get(this, 'router');
    // router.transitionTo('posts.show', get(this, 'post.id'));
  }
});
