import Ember from 'ember';

export default Ember.Controller.extend({
  specializations: [],
  cand_selected: false,
  actions: {
    addSpecialization() {
      this.get('specializations').pushObject({});
    },
    removeSpecialization(index) {
      console.log(index);
      let sp = this.get('specializations');
      console.log(sp);
      this.get('specializations').removeAt(index, 1);
    },
    cand_select() {
      this.set('cand_selected', true);
      return true;
    },
    cand_deselect() {
      this.set('cand_selected', false);
      return true;
    }
  }
});
