import Ember from 'ember';

export default Ember.Controller.extend({
  name_en: "",
  name_da: "",
  university: "",
  description: "",
  degree: "",
  title: "",
  specializations: [],
  skills: [],
  cand_selected: false,
  skills_available: ["IT Project Management", "IT Strategy", "Software Development", "Organizational Studies", "Business Economics", "IT Law", "Innovation and Entrepreneurship", "Software Engineering", "Data Analytics", "Communications", "Digital Design", "Algorithms and Mathematics", "IT Security/Governance", "Computer Graphics", "Artificial Intelligence/Cognitive Computing", "IT Change Management", "User Experience Design (UX)", "Statistics", "Business Intelligence (BI)",   "Information Systems", "Databases", "Digital Marketing", "Servers and Hardware",  "Big Data/Machine Learning", "Management"].sort(),
  actions: {
    candSelect(value) {
      this.set('degree', value);
      this.set('cand_selected', true);
      return true;
    },
    candDeselect(value) {
      this.set('degree', value);
      this.set('cand_selected', false);
      return true;
    },
    addSpecialization() {
      this.get('specializations').pushObject({
        "name": "",
        "description": ""
      });
    },
    removeSpecialization(index) {
      this.get('specializations').removeAt(index, 1);
    },
    updateSpecialization(index, target, event) {
      let specialization = this.get('specializations').objectAt(index);
      Ember.set(specialization, target, event.target.value) // target must be either "name" or "description"
    },
    addSkill(skill) {
      let skills_selected = this.get('skills');
      let skills_available = this.get('skills_available');
      skills_selected.pushObject(skill);
      skills_available.removeObject(skill);
      skills_selected.sort();
    },
    removeSkill(skill) {
      let skills_selected = this.get('skills');
      let skills_available = this.get('skills_available');
      skills_selected.removeObject(skill);
      skills_available.pushObject(skill);
      skills_available.sort();
    },
    submitEducation() {
      let education = this.get('store').createRecord('education', {
        name: {
          en: this.get('name_en'),
          da: this.get('name_da')
        },
        university: this.get('university'),
        description: this.get('description'),
        degree: this.get('degree'),
        title: this.get('title'),
        specializations: this.get('specializations'),
        skills: this.get('skills'),
        updated: new Date()
      });
      education.save();
      this.transitionToRoute('admin');
    }
  }
});
