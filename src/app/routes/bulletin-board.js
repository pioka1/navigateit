import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      bulletins: this.get('store').findAll('bulletin', {include: 'educations'}),
      educations: this.get('store').findAll('education')
    });
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('publisher', 'all');
      controller.set('date_sort', 'ascending');
    }
  }
});
