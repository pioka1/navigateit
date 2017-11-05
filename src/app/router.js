import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('education', function() {
      this.route('edit', {
        path: ":education_id"
      });
    });
  });
  this.route('education');
  this.route('market', { path: '/marketplace' });
  this.route('asd');
});

export default Router;
