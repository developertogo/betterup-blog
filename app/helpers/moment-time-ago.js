import Ember from 'ember';

export function momentTimeAgo([timestamp]) {
  return moment(timestamp).fromNow();
}

export default Ember.Helper.helper(momentTimeAgo);
