---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Introduction to JavaScript (ES6)"
author: Neoh Wei Jun
pubDate: 2023-08-27
description: "After learning some Astro, I couldn't stop!"
# image:
#   url: "https://docs.astro.build/assets/arc.webp"
#   alt: "Thumbnail of Astro arcs."
tags: ["javascript", "react"]
---

---

## JavaScript

Live demo and relate with React + Chrome Dev Tools

- internal vs external javascript
- variables: let, const, var (operators: +, -, _, /, %, \*\*, ++, --, +=, -=, _=, /=, %=, \*\*=)
- data types: string, number, boolean, null, undefined, symbol, object
- control flow: if, else if, else, switch, for, while, do while, break, continue
- functions: function, return, arguments, parameters, default parameters, rest parameters, spread operator
- Scope
- objects: key value pairs, dot notation, bracket notation, object methods, this keyword
- arrays: .length, .push, .pop, .shift, .unshift, .slice, .splice, .indexOf, .includes, .concat, .join, .reverse, .sort, .forEach, .map, .filter, .reduce
- comparison operators: ==, ===, !=, !==, >, <, >=, <=
- event listeners: _click_, _submit_, keydown, keyup, keypress, input, _change_, mouseover, mouseout, mouseenter, mouseleave, mousemove, mousedown, mouseup, dblclick, contextmenu, wheel, drag, drop, focus, blur, resize, scroll, load, unload, error

---

### ES6

- modules: import / export
- arrow functions
- .map, .filter, .reduce, .sort, .includes,
- shortcircuiting
- destructuring
- ... syntax (spread operator / rest operator)
- ternary operator
- template literals
- async await
- optional chaining
- nullish coalescing

---

### Resources

[An Introduction to Functions, Execution Context and the Call Stack](https://www.youtube.com/watch?v=exrc_rLj5iw)

```js
cosnt num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

thread of execution, callstack, execution context, global memory, local memory, scope

[JavaScript info](https://javascript.info/)

[freecodecamp](https://www.freecodecamp.org/news/how-to-use-es6-javascript-features-in-react/)
