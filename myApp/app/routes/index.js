import Route from '@ember/routing/route';

export default Route.extend({
	// model: function() {
	// 	console.log("model fn @ Route.") ;
	// 	return ['Router', 'Model', 'View', 'Controller'];
        
    // },

    model: function() {
        console.log("model @ Route") ;
    
        var companies = [{
          "name" : "Google",
          "headquarters": "Mountain View",
          "revenue":"59b"
          },{
            "name" : "Facebook",
            "headquarters":"Menlo Park",
            "revenue":"7b"
          },{
            "name" : "twitter",
            "revenue": "664m",
            "headquarters":"San Francisco"
          }];
        return companies;
      }
   
});
console.log("in Route.") ;