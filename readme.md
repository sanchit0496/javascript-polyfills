# JavaScript Polyfills - Interview Guide

Polyfills allow developers to use modern JavaScript features in environments that do not support them natively.  
This guide covers essential polyfills you should know for interviews, demonstrating both JavaScript fundamentals and compatibility skills.

---

## Polyfills Table

| Category | Method | Purpose | Use Case |
|----------|---------|---------|----------|
| **Array Methods** | `Array.prototype.map()` | Transforms each element using a provided function and returns a new array. | Convert numbers to their squares, modify elements. |
| | `Array.prototype.filter()` | Creates a new array with elements that pass a test. | Extract even numbers from an array. |
| | `Array.prototype.reduce()` | Reduces an array to a single value using an accumulator function. | Sum numbers, flatten nested arrays. |
| | `Array.prototype.forEach()` | Executes a function once for each element. | Logging, updating each element. |
| | `Array.prototype.find()` | Returns the first element matching a condition. | Find first user over age 18. |
| | `Array.prototype.includes()` | Checks if an array contains a specified value. | Verify if an item exists in the list. |
| **Object Methods** | `Object.create()` | Creates a new object with the specified prototype. | Demonstrating prototypal inheritance. |
| | `Object.entries()` | Returns array of `[key, value]` pairs. | Iterating over object properties. |
| | `Object.values()` | Returns array of property values. | Summing or filtering object values. |
| | `Object.assign()` | Copies properties from source to target object. | Merge multiple configuration objects. |
| **String Methods** | `String.prototype.includes()` | Checks if a string contains a substring. | Search text within a string. |
| | `String.prototype.startsWith()` | Checks if a string starts with given characters. | Validate URL prefix or path. |
| **Promise Polyfills** | `Promise` | Represents asynchronous operations. | Fetch data from API, async workflows. |
| | `Promise.finally()` | Executes a callback when a promise is settled. | Cleanup/reset after async task. |
| | `Promise.all()` | Aggregates multiple promises into one. | Fetch data from multiple APIs concurrently. |
| **Function Methods** | `Function.prototype.bind()` | Creates a new function with fixed `this`. | Preserve context in callbacks. |
| | `Function.prototype.call()` | Calls function with specific `this` and arguments. | Manually invoke with custom context. |
| | `Function.prototype.apply()` | Similar to `call()` but accepts arguments as array. | Passing variable arguments dynamically. |
| **Collections** | `Set` | Stores unique values of any type. | Remove duplicates from arrays. |
| | `Map` | Stores key-value pairs with preserved order. | Store metadata where keys aren’t just strings. |

---

## Why Important for Interviews?
- Shows strong understanding of **JavaScript fundamentals**.  
- Demonstrates ability to write **cross-environment compatible code**.  
- Polyfill implementation questions often test **problem-solving and core JS knowledge**.

---

## Next Steps
- Practice writing **custom polyfills** for methods like `map`, `filter`, `reduce`, and `bind`.  
- Be ready to explain **time complexity** and **edge cases** during interviews.  
- Use this guide as a **quick revision sheet** before interviews.
- Raise PRs, if you feel you can have better implementation for a question, or want to add a solution to a new question

---
