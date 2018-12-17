<div align="center">
  <img src="https://raw.githubusercontent.com/alexsan134/GeckoJS/master/bns.png" width="500">
  <br/>
  <br/>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg">
  <img src="https://badge.fury.io/js/geckojs.svg">
</div>
<br>
<div align="justify"><h3>JS Library, with the most usually tools in your project, like String to Int convertions, array operations, async functions, promises, callbacks, ES6 implementation, HTTP request, AJAX, data convertions, data parsers, JSON, responsive design, dom manipulation, etc.</h3></div>

## We have 1ms per loop vs 5ms per loop for jQuery
<div align="center"><h1>Installation (Basic and Compressed)</h1>
<h2>See the oficial documentation at <a href="https://alexsan134.github.io/GeckoJsPage">GeckoJs Page</a></h2>
</div>

```sh
npm i geckojs
```
--------------

<dl>
  <dt><h2>Latest Features:</h2></dt>
  <dd>* Select list of choised elements</dd>
  <dd>* New event outClick, check if you click outside of an element</dd>
  <dd>* All data convertions (String, Array, Number, Object)</dd>
</dl>

-------------

<div align="center"><h1>Documentation (Summary of Updates)</h1></div>
<div align="left"><h3>Selectors:</h3></div>

Base form:
You can select one element, or list of elements with class

```javascript
g("yourElement").event("yourEvent", () =>{
  //Do something ...
  
});

g(["yourEl1", "yourEl2", "yourEl3", "... etc"]).event("yourEvent", () =>{
  //Do something ...
  
});

```

You can select what element you want:

```javascript
//If you want only one element of a list with classes

var number = 2;
g("class", number).event("yourEvent", () =>{
  //Do something ...
  
});
```

And you can select a range of a list with elements

```javascript
//If you want to select a range: from first element to 7th element with '.class'

var limiter = 7;
g(".class", [limiter]).event("yourEvent", () =>{
  //Do something ...
  
});
```

Select a range of elements in a list with [Max, Min] or [Min, Max] 
it doesn't matter


```javascript
//If you want to select a range: from 3th element to 8th element with '.class'

var min = 3, max = 8;

g(".class", [max, min]).event("yourEvent", () =>{
  //Do something ...
  
});

// OR

g(".class", [min, max]).event("yourEvent", () =>{
  //Do something ...
  
});

```

<dl>
  <dt><h2>Feature:</h2></dt>
  <dd>* If you select negative coeficient (-1) is the inverted position of an element</dd>
</dl>

Example:
</br>
10 elements with '.class' 

```javascript
g(".class", [3, -2]).event("yourEvent", () =>{
  //Do something ...
  
}); //Return from 3th element to 9th element
```

<div align="left"><h3>Convertions:</h3></div>

-----------

<div align="left"><h4>Numbers:</h4></div>

--------------

```javascript
var n = 3457;
n.toString(); //Returns "3457"
n.toArray(); //Returns [3, 4, 5, 7]
n.toObject(); //Returns {3:5,5:7}
n.toObject(true); //Returns {0:"3", 1:"5", 2:"5", 3:"7"}
```

--------------

<div align="left"><h4>Arrays:</h4></div>

--------------

```javascript
var arry = ["g", "J", "S", "v.", 1];
arry.toString(); //Returns "gJSv.1"

var arry2 = ["3", 5, "1", 8];
arry2.toInt(); //Returns 3518

var arry3 = ["name", "gJS", "version", "1.0"];
arry3.toObject(); //Returns {name: "gJS", version: "1.0"}
arry3.toObject(true); //Returns {0: "name", 1: "gJS", 2:"version", 3:"1.0"}
```

---------------

<div align="left"><h4>Strings:</h4></div>

---------------

```javascript
var str = "1536";
str.toInt(); //Returns 1536
str.toArray(); //Returns [1, 5, 3, 6]
str.toObject(); //Returns {1: "5", 3: "6"}
str.toObject(true); //Returns {0: "1", 1: "5", 2:"3", 3:"6}
```

----------------

<div align="left"><h4>Objects:</h4></div>

---------------

```javascript
var obj = {name : "Gecko", type: "JavaScript"};
obj.toString() //Returns "name:Gecko, type:JavaScript";

var obj3 = {job : "Enginer", weight: "73kg"};
obj3.toArray() //Returns ["job", "Enginer", "weight", "73kg"];
```

----------------

<div align="left"><h3>Methods:</h3></div>

-----------

You dont need to load all the stupid properties in one object, with GeckoJS you just load one method

<dl>
  <dt><h2>Ussually:</h2></dt>
  <dd>* Css, Attr, Class, Events</dd>
  <dd>* Find, HTML, Text</dd>
  <dd>* Animates, Hover</dd>
</dl>



```javascript
g("#myEl").event("click", () =>{
  g("#child").find("strong").css("background:red");
});
```
