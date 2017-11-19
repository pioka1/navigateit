import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search_filter', 'university_filter', 'degree_filter', 'skills'],
  search_filter: "",
  university_filter: [],
  degree_filter: [],
  skills: [],
  skills_available: ["IT Project Management", "IT Strategy", "Software Development", "Organizational Studies", "Business Economics", "IT Law", "Innovation and Entrepreneurship", "Software Engineering", "Data Analytics", "Communications", "Digital Design", "Algorithms and Mathematics", "IT Security/Governance", "Computer Graphics", "Artificial Intelligence/Cognitive Computing", "IT Change Management", "User Experience Design (UX)", "Statistics", "Business Intelligence (BI)",   "Information Systems", "Databases", "Search Engine Optimization (SEO)", "Digital Marketing", "Servers and Hardware",  "Big Data/Machine Learning", "Management"].sort(),
  filteredEducations: Ember.computed('model', 'search_filter', 'university_filter', 'degree_filter', 'skills', function() {
    let educations = this.get('model');
    let search_filter = this.get('search_filter');
    let university_filter = this.get('university_filter');
    let degree_filter = this.get('degree_filter');
    let skills = this.get('skills');

    if (search_filter) {
      let regex = new RegExp(search_filter, 'i');
      educations = educations.filter(education => regex.test(education.get('name.en')));
    }
    if (university_filter.length > 0) {
      educations = educations.filter(education => university_filter.includes(education.get('university')));
    }
    if (degree_filter.length > 0) {
      educations = educations.filter(education => degree_filter.includes(education.get('degree')));
    }
    if (skills.length > 0) {
      educations = educations.filter(education => {
        let skills_match = true;
        skills.forEach(skill => {
          if (education.get('skills').indexOf(skill) === -1) {
            skills_match = false;
          }
        });
        return skills_match;
      });
    }

    return educations;

  }),
  actions: {
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
    toggleUniversity(event) {
      let university_filter = this.get('university_filter');
      let name = event.target.name;
      if (university_filter.includes(name)) {
        return university_filter.removeObject(name);
      }
      university_filter.pushObject(name);
    },
    toggleDegree(event) {
      let degree_filter = this.get('degree_filter');
      let name = event.target.name;
      if (degree_filter.includes(name)) {
        return degree_filter.removeObject(name);
      }
      degree_filter.pushObject(name);
    }
  }
});
