import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	title: DS.attr('string'),
	university: DS.attr('string'),
	degree: DS.attr('string'),
	specializations: DS.attr(),
	skills: DS.attr(),
	updated: DS.attr('date')
});

// course_programme: DS.attr(),

