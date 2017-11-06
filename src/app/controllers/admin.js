import Ember from 'ember';

export default Ember.Controller.extend({
  specializations: [],
  actions: {
    addSpecialization() {
      this.get('specializations').pushObject({});
    }
  }
});
