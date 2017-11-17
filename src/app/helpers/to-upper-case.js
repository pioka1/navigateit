import Ember from 'ember';

export function toUpperCase(params) {
  return params[0].toUpperCase();
}

export default Ember.Helper.helper(toUpperCase);
