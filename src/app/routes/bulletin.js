import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('bulletin', params.bulletin_id);
  }
});
