import Ember from 'ember';

export default Ember.Controller.extend({
  skills_available: ["IT Project Management", "IT Strategy", "Software Development", "Organizational Studies", "Business Economics", "IT Law", "Innovation and Entrepreneurship", "Software Engineering", "Data Analytics", "Human Computer Interaction (HCI)", "Communications", "Digital Design", "Algorithms and Mathematics", "Artificial Intelligence", "IT Security", "Computer Graphics", "Cognitive Computing", "IT Change Management", "User Experience Design (UX)", "Statistics", "Business Intelligence", "Information Systems", "Databases", "Search Engine Optimization (SEO)", "Digital Marketing", "Servers and Hardware"].sort(),
  skills_selected: [],
  actions: {
    addSkill(skill) {
      let skills_selected = this.get('skills_selected');
      let skills_available = this.get('skills_available');
      skills_selected.pushObject(skill);
      skills_available.removeObject(skill);
      skills_selected.sort();
    },
    removeSkill(skill) {
      let skills_selected = this.get('skills_selected');
      let skills_available = this.get('skills_available');
      skills_selected.removeObject(skill);
      skills_available.pushObject(skill);
      skills_available.sort();
    },
    search() {
      this.transitionToRoute('education');
    }
  }
});
