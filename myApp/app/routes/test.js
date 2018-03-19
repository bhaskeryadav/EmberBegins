import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
		console.log("model inside.") ;
		return ['Router', 'Model', 'View', 'Controller'];
	}
});
console.log("in Route.") ;