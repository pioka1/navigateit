import Ember from 'ember';

export default Ember.Controller.extend({
  publisher_name: "",
  publisher_type: "",
  title: "",
  description: "",
  contact_name: "",
  contact_position: "",
  contact_email: "",
  contact_phone: "",
  expires: new Date((+new Date) + 2592000000),
  selected_education: "",
  target_educations: [],
  computed_educations: Ember.computed('model', 'target_educations.[]', function () {
    let educations = this.get('model');
    let te = this.get('target_educations');
    educations = educations.filter(education => {
      let is_target = false;
      te.forEach(te => {
        if (te === education.get('id')) is_target = true;
      });
      return is_target;
    });
    return educations;
  }),
  actions: {
    updateExpires(value) {
      console.log(value);
      switch(value) {
        case 30:
          this.set('expires', new Date((+new Date) + 2592000000));
          break;
        case 60:
          this.set('expires', new Date((+new Date) + 2592000000 * 2));
          break;
        case 120:
          this.set('expires', new Date((+new Date) + 2592000000 * 4));
          break;
        default:
          this.set('expires', new Date((+new Date) + 2592000000));
          break;
      }
    },
    addEducation() {
      let selected_education = this.get('selected_education');
      let target_educations = this.get('target_educations');
      target_educations.pushObject(selected_education);
    },
    removeEducation(index) {
      let target_educations = this.get('target_educations');
      console.log(index);
      target_educations.removeAt(index);
    },
    submitBulletin() {
      let bulletin = this.get('store').createRecord('bulletin', {
        publisher: {
          type: this.get('publisher_type'),
          name: this.get('publisher_name')
        },
        title: this.get('title'),
        description: this.get('description'),
        contact: {
          name: this.get('contact_name'),
          position: this.get('contact_position'),
          email: this.get('contact_email'),
          phone: this.get('contact_phone')
        },
        educations: this.get('target_educations'),
        expires: this.get('expires'),
      });

      console.log(this.get('target_educations'));

    }
  }
});
