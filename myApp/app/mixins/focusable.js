import Mixin from '@ember/object/mixin';

export default Mixin.create({
   onFocus: function(){
     console.log("on focus");
   }, 

   test:function(abc){
       console.log("Test focusable");
       return "focusable";
   }
});