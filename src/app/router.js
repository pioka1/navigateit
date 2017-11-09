import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('add', { path: "admin/educations/add" });
  this.route('education');
  this.route('market', { path: '/marketplace' });
});

export default Router;
