import Ember from 'ember';
import moment from 'moment';

export function momentTimeAgo([timestamp]) {
  return moment(timestamp).fromNow();
}

export default Ember.Helper.helper(momentTimeAgo);
