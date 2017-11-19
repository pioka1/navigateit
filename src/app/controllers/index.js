import Ember from 'ember';

export default Ember.Controller.extend({
  skills_available: ["IT Project Management", "IT Strategy", "Software Development", "Organizational Studies", "Business Economics", "IT Law", "Innovation and Entrepreneurship", "Software Engineering", "Data Analytics", "Communications", "Digital Design", "Algorithms and Mathematics", "IT Security/Governance", "Computer Graphics", "Artificial Intelligence/Cognitive Computing", "IT Change Management", "User Experience Design (UX)", "Statistics", "Business Intelligence (BI)",   "Information Systems", "Databases", "Digital Marketing", "Servers and Hardware",  "Big Data/Machine Learning", "Management"].sort(),
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
      let skills_selected = this.get('skills_selected');
      this.transitionToRoute('educations', { queryParams: { skills: skills_selected }});
    }
  }
});
