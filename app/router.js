import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tabs', {path: '/'}, function() {
    this.route('companies');
    this.route('users');
    this.route('abusers');
  });
});

export default Router;

