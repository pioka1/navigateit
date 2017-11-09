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
  skills_available: ["IT Project Management", "IT Strategy", "Software Development", "Organizational Studies", "Business Economics", "IT Law", "Innovation and Entrepreneurship", "Software Engineering", "Data Analytics", "Human Computer Interaction (HCI)", "Communications", "Digital Design", "Algorithms and Mathematics", "Artificial Intelligence", "IT Security", "Computer Graphics", "Cognitive Computing", "IT Change Management", "User Experience Design (UX)", "Statistics", "Business Intelligence", "Information Systems", "Databases", "Search Engine Optimization (SEO)", "Digital Marketing", "Servers and Hardware"].sort(),
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
      let sp = this.get('specializations');
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
      let name_en = this.get('name_en');
      console.log(this.get('name_da'));
      console.log(this.get('university'));
      console.log(this.get('description'));
      console.log(this.get('degree'));
      console.log(this.get('title'));
      console.log(this.get('specializations'));
      console.log(this.get('skills'));

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
    }
  }
});

