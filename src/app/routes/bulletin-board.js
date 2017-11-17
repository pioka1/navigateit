import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      educations: this.get('store').findAll('education'),
      bulletins: this.get('store').findAll('bulletin')
    });
  }
});
