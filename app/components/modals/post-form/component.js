import Ember from 'ember';

const { Component, inject: { service }, get, set, computed } = Ember;

export default Component.extend({
  store: service(),
  router: service(),
  notify: service(),
  saving: false,

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

  disableSubmit: computed('postTitle', 'postContent', 'saving', function() {
    let {
      postTitle, postContent, saving
    } = this.getProperties('postTitle', 'postContent', 'saving');
    return (!postTitle || !postContent) || saving;
  }),

  actions: {
    submitPostForm() {
      let { postTitle, postContent } = this.getProperties('postTitle', 'postContent');
      let editingModel = get(this, 'modal.editingModel');
      let successMessage = `Your post has been ${(editingModel ? 'updated' : 'created')}!`;
      let post = editingModel ? editingModel : get(this, 'store').createRecord('post');

      set(this, 'saving', true);

      post.setProperties({ title: postTitle, content: postContent, createdAt: faker.date.past() });
      post.save().then((record) => {
        set(this, 'saving', false);
        get(this, 'notify').success(successMessage);
        get(this, 'router').transitionTo('posts.show', record);
        get(this, 'modal.close')();
      }, () => {
        set(this, 'saving', false);
        get(this, 'notify').alert('There was a problem saving your post. Please try again.');
      });
    }
  }
});
