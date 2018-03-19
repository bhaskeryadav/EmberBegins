import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  console.log("Router.map() @ Router.js") ;
  // this.route("products",{ path: "/products" });
  this.route("products");  //alt way of defining route.
  this.route("about",{ path: "/about" });
  this.route("test");
});

export default Router;
