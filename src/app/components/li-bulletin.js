import Ember from 'ember';

export default Ember.Component.extend({
  formattedExpired: Ember.computed('bulletin', function () {
    let bulletin = this.get('bulletin');
    let now = new Date().getTime();
    let then = bulletin.get('expires').getTime();
    let day = 1000*60*60*24;

    return Math.round((then - now) / day);
  })
});
