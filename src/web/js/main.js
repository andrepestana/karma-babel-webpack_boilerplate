import '../css/main.css';
import { Person } from '../../common/es6/person'

console.log("That's from web build");
var testDir = document.querySelector('#test');

testDir.style.backgroundColor = 'black';
testDir.style.height = '100px';

var person = new Person('Andre', 'Pestana');
testDir.innerHTML = person.getFullName();
testDir.style.color = 'white';
