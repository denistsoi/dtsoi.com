---
prev: /en/
next: false
sidebar: auto
---

# lesson 3

## What we will do

* learn DOM Events
* learn about eventListeners
* introduction to objects

## Events

Note: You dont need to know all of these - but you can check them here
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)  


``` md {4,13}
abort, 
beforeinput, 
blur, 
click, 
compositionstart, 
compositionupdate, 
compositionend, 
dblclick, 
error, 
focus, 
focusin, 
focusout, 
input, 
keydown, 
keypress, 
keyup, 
load, 
mousedown, 
mouseenter, 
mouseleave, 
mousemove, 
mouseout, 
mouseover, 
mouseup, 
resize, 
scroll, 
select, 
unload, 
wheel
```

## Event Listeners:

- Add Event Listener
- Remove Event Listener

``` js
ele.addEventListener(evt, listener, [options]);
```

`ele` – The HTML element the event listener will be listening for.  
`evt` – The targeted event.  
`listener` – Typically, a JavaScript function.  
`options` – (optional) An object with a set of boolean properties (listed below).  


### Bark Example

``` js
var dog = document.createElement('button');
dog.innerHTML = 'bark?'

dog.addEventListener('click', function bark (event) {
  // code here
  console.log(event.target);
}, false);  

// append dog to body
document.body.appendChild(dog);
```
::: tip Extra Reading
- [When to use buttons](https://css-tricks.com/use-button-element/)
:::

### onclick Example

``` js
var dog = document.createElement('button');
dog.innerHTML = 'bark?'

dog.onclick = function bark (event) {
  // code here
  console.log(event.target);
}, false);  

```

> view [bark](./bark.html)

### Event Delegate

> view [list](./list.html)

``` html
<body>
  <script>
  // Make a list
  var ul = document.createElement('ul');
  document.body.appendChild(ul);

  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  li1.innerHTML = 'first';
  li2.innerHTML = 'second';
  ul.appendChild(li1);
  ul.appendChild(li2);

  function hide(e){
    // e.target refers to the clicked <li> element
    // This is different than e.currentTarget which would refer to the parent <ul> in this context
    e.target.style.visibility = 'hidden';
  }

  // Attach the listener to the list
  // It will fire when each <li> is clicked
  ul.addEventListener('click', hide, false);
  </script>
</body>
```

## Event Bubbling

> It relates to the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example).

### Bubbling

``` html
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

```
### Stop Bubbling

``` html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

## Events Summary

The event handling process:

- When an event happens – the most nested element where it happens gets labeled as the “target element” (event.target).
- Then the event first moves from the document root down the event.target, calling handlers assigned with addEventListener(...., true) on the way.
- Then the event moves from event.target up to the root, calling handlers assigned using on`<event>` and addEventListener without the 3rd argument or with the 3rd argument false.

Each handler can access event object properties:

- `event.target` – the deepest element that originated the event.
- `event.currentTarget` (=this) – the current element that handles the event (the one that has the handler on it)
- `event.eventPhase` – the current phase (capturing=1, bubbling=3).



### DOM Selection (after load)
``` js
document.querySelector(selector) // get an element

document.querySelector('button')     // find an element with tagName button
document.querySelector('.className') // find an element with class className
document.querySelector('#idName')    // find an element with id idName
```

## Assignments

### Challenge 1: Change Background Color

  see [Challenge](01-challenge.md)  

### Challenge 2: Image Carousel (Optional)
  see [Challenge](02-challenge.md)  

### Challenge 3: Number Pad (Optional)
  see [Challenge](03-challenge.md)  