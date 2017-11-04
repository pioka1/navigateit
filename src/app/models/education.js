import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string')
});

// name: DS.attr(),
// title: DS.attr('string'),
// university: DS.attr('string'),
// degree: DS.attr('string'),
// specializations: DS.attr(),
// areasOfStudy: DS.attr(),
// course_programme: DS.attr(),
// updated: DS.attr('date')
