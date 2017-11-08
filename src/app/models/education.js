import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
  university: DS.attr('string'),
  description: DS.attr('string'),
  degree: DS.attr('string'),
	title: DS.attr('string'),
	specializations: DS.attr(),
	skills: DS.attr(),
	updated: DS.attr('date')
});

// course_programme: DS.attr(),

