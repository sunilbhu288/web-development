// I want to use foo function from a.js
// I want to buz function from b.js

// import<nameOfTheVariableThatYouWantToImport>from<path>

//import foo from "./a.js";
import {foo,fun} from "./a.js";
import baz from "./b.js";

foo();
baz();
fun();