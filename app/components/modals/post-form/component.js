import Ember from 'ember';

const { Component, inject: { service }, get } = Ember;

export default Component.extend({
  store: service(),
  router: service(),

  actions: {
    submitPostForm() {
      let { postTitle, postContent } = this.getProperties('postTitle', 'postContent');

      let post = get(this, 'store').createRecord('post', { title: postTitle, content: postContent, createdAt: faker.date.past() });

      post.save().then((newRecord) => {
        get(this, 'router').transitionTo('posts.show', newRecord);
        get(this, 'modal.close')();
      });
    }
  }
});
