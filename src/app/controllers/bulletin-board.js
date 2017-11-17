import Ember from 'ember';

export default Ember.Controller.extend({
  publisher: 'all',
  search: '',
  education: '',
  date_sort: 'ascending',
  filteredBulletins: Ember.computed('model', 'publisher', 'search', 'education', 'date_sort', function() {
    let bulletins = this.get('model.bulletins');
    let educations = this.get('model.educations');

    return bulletins;
  })
});
