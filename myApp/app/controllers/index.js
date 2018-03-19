import Controller from '@ember/controller';

export default Controller.extend({
  edit: true,  // make data visible.
  color:"",
  color2:"",
  color3:"",
  colors:['red','green','thrdColor','fourthColor','fithColor'],
  clrIndex:0,
  actions:{ // trigger an event on the click.
    changeEdit: function(){
      console.log("changeEdit @ controller "+this.edit) ;
      this.toggleProperty('edit');
      
      this.set('color2',this.colors[(this.clrIndex+1)%this.colors.length]);
      this.set('color3',this.colors[(this.clrIndex+2)%this.colors.length]);
      this.set('color',this.colors[this.clrIndex++%this.colors.length]);
    }
  }
});