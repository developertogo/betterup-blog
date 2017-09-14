import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  createdAt: attr('date'),
  user: belongsTo('user')
});
