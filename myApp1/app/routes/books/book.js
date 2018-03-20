import Route from '@ember/routing/route';

export default Route.extend({
    model: function(params){
        console.log(params.id);
        return this.store.findAll('book',params.id);
    }
});