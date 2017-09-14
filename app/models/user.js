import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  username: attr('string'),
  avatarUrl: attr('string'),
  posts: hasMany('post')
});
