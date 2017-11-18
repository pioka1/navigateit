import Ember from 'ember';

export default Ember.Controller.extend({
  publisher: 'all',
  search: '',
  education: '',
  date_sort: 'ascending',
  filteredBulletins: Ember.computed('model', 'publisher', 'search', 'education', 'date_sort', function() {
    let bulletins = this.get('model.bulletins');
    let publisher = this.get('publisher');
    let search = this.get('search');
    let education = this.get('education');
    let date_sort = this.get('date_sort');

    if (publisher !== "all") {
      bulletins = bulletins.filterBy('publisher.category', publisher);
    }
    if (search) {
      let regex = new RegExp(search, 'i');
      bulletins = bulletins.filter(bulletin => regex.test(bulletin.get('publisher.name')))
    }
    if (education) {
      bulletins = bulletins.filter(bulletin => {
        let educations = bulletin.get('educations');
        let match = false;
        educations.forEach(uni => {
          if (education === uni.get('id')) match = true;
        });
        return match;
      })
    }
    if (date_sort === 'descending') {
      bulletins = bulletins.sortBy('expires')
    } else {
      bulletins = bulletins.sortBy('posted').reverse()
    }

    return bulletins;
  })
});
