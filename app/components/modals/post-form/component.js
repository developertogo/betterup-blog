import Ember from 'ember';

const { Component, inject: { service }, get } = Ember;

export default Component.extend({
  store: service(),
  router: service(),

  'data-test-post-form': true,

  editingModel: null,

  didReceiveAttrs() {
    this._super(...arguments);

    let editingModel = get(this, 'modal.editingModel');

    if (editingModel) {
      this.setProperties({
        postTitle: get(editingModel, 'title'),
        postContent: get(editingModel, 'content')
      });
    }
  },

  actions: {
    submitPostForm() {
      let { postTitle, postContent } = this.getProperties('postTitle', 'postContent');
      let editingModel = get(this, 'modal.editingModel');
      let post = editingModel ? editingModel : get(this, 'store').createRecord('post');

      post.setProperties({ title: postTitle, content: postContent, createdAt: faker.date.past() });
      post.save().then((record) => {
        get(this, 'router').transitionTo('posts.show', record);
        get(this, 'modal.close')();
      });
    }
  }
});
