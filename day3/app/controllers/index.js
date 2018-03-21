import Controller from '@ember/controller';

export default Controller.extend({
  pressCount: 0,

  actions: {
    buttonClick: function() {
      console.log("buttonClick() @ contr >>> ",this.pressCount)	 ;
      this.incrementProperty('pressCount');
    }
  }
});