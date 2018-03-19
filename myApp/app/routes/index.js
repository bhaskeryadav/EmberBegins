import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
		console.log("model fn @ Route.") ;
		return {
            name:'bhasker',
            values:['Router', 'Model', 'View', 'Controller']
        };
    },
   
});
console.log("in Route.") ;