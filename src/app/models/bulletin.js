import DS from 'ember-data';

export default DS.Model.extend({
  publisher: DS.attr(),
  title: DS.attr('string'),
  description: DS.attr('string'),
  contact: DS.attr(),
  educations: DS.attr(),
  expires: DS.attr('date'),
  posted: DS.attr('date')
});


