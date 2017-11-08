import Ember from 'ember';

export default Ember.Controller.extend({
  specializations: [],
  cand_selected: false,
  skills_available: ["IT Project Management", "IT Strategy", "Software Development", "Organizational Studies", "Business Economics", "IT Law", "Innovation and Entrepreneurship", "Software Engineering", "Data Analytics", "Human Computer Interaction (HCI)", "Communications", "Digital Design", "Algorithms and Mathematics", "Artificial Intelligence", "IT Security", "Computer Graphics", "Cognitive Computing", "Communications", "IT Change Management", "User Experience Design (UX)", "Statistics", "Business Intelligence", "Information Systems", "Databases", "Search Engine Optimization (SEO)", "Digital Marketing", "Servers and Hardware"],
  skills_selected: [],
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
    candSelect() {
      this.set('cand_selected', true);
      return true;
    },
    candDeselect() {
      this.set('cand_selected', false);
      return true;
    },
    addSkill(skill) {
      this.get('skills_selected').pushObject(skill);
      this.get('skills_available').removeObject(skill);
    },
    removeSkill(skill) {
      this.get('skills_selected').removeObject(skill);
      this.get('skills_available').pushObject(skill);
    }
  }
});
