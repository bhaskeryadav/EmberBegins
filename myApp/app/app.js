import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';


const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

import numericBox from './helpers/number_box';  
// let textbox = numericBox.create();   // am:  lines added.
// console.log("number: ", textbox.valid("12"));
// textbox.onFocus();

// console.log("arithmetic: " ,textbox.valid("12 * 4"));  // false
// textbox.onFocus();

// console.log("string: " , textbox.valid("abc"));
// textbox.onFocus();

// // test would be invked based on order of extend in number_box file
// console.log("Test method called from: " , textbox.test("abc"));
// textbox.onFocus();

import Person from './helpers/person';  
// let person = Person.create({
  //   firstName: 'Ajay',
  //   lastName: 'Garg'
  // });
    
  // observer won't fire until `fullName` is consumed first
  // person.get('fullName');
  // person.set('firstName', 'Tony');
  // person.set('lastName', 'Grieg');
  
  
  // import timeManager from './helpers/time_manager';
  // let myTimeManager = timeManager.create({
  //   time: 12  // init value.
  // });

  // myTimeManager.set("time",22);

  import mother from './helpers/father';
  import child from './helpers/child';
  
  // let ajay = mother.create({
  //   name:'Ajay',
  //   age:40,
  //   address:'Whitefield'
  // });
  
  // var ram = child.create({
  //   school:'Whitefield High School',
  //   father: ajay
  // });
  
  // console.log("child's addr: " ,  ram.get('address'));
  // ajay.set('address','Mysore');
  // console.log("child's addr: " , ram.get('address'));

export default App;
