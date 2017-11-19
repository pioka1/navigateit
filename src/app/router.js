import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('add-education', { path: "admin/educations/add" });
  this.route('educations');
  this.route('education', { path: '/education/:education_id' });
  this.route('bulletin-board');
  this.route('add-bulletin', { path: '/bulletin-board/add' });
  this.route('bulletin', { path: '/bulletin/:bulletin_id' });
});

export default Router;
