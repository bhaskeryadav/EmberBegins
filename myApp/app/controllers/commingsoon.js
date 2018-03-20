import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    visible:false,
    emailAdd:"",
    emailSent:"",
    isValid: match('emailAdd', /^.+@.+\..+$/),
    isDisabled:not('isValid'),
    actions:{
        invite:function(){
            this.toggleProperty('visible');
            this.set('emailSent',this.get('emailAdd'));
            this.set('emailAdd',"");
        }
    }
});