# JavaScript Polyfills - Interview Guide

This guide covers essential JavaScript polyfills that are important to understand for technical interviews. Polyfills allow developers to use modern JavaScript features in older environments that do not support them natively. Knowing these polyfills demonstrates your understanding of JavaScript fundamentals and your ability to write code compatible with a wide range of environments.

## 1. Array Methods

### `Array.prototype.map()`
- **Purpose**: Transforms each element of an array according to a provided function and returns a new array.
- **Use Case**: Apply transformations to each element in an array (e.g., converting an array of numbers to their squares).

### `Array.prototype.filter()`
- **Purpose**: Creates a new array with all elements that pass the test implemented by the provided function.
- **Use Case**: Filter out unwanted elements from an array (e.g., extracting even numbers from an array).

### `Array.prototype.reduce()`
- **Purpose**: Reduces an array to a single value by applying a function against an accumulator and each element.
- **Use Case**: Summing up all numbers in an array or flattening a nested array.

### `Array.prototype.forEach()`
- **Purpose**: Executes a provided function once for each array element.
- **Use Case**: Iterating over an array to perform operations such as logging or updating each element.

### `Array.prototype.find()`
- **Purpose**: Returns the value of the first element that satisfies the provided testing function.
- **Use Case**: Finding the first occurrence of an element that meets specific criteria.

### `Array.prototype.includes()`
- **Purpose**: Determines whether an array contains a specified value.
- **Use Case**: Checking if a specific item exists within an array.

## 2. Object Methods

### `Object.assign()`
- **Purpose**: Copies enumerable own properties from one or more source objects to a target object.
- **Use Case**: Merging objects into one, such as combining configuration objects.

### `Object.entries()`
- **Purpose**: Returns an array of a given object's own enumerable property `[key, value]` pairs.
- **Use Case**: Converting an object into an array to iterate over keys and values.

### `Object.values()`
- **Purpose**: Returns an array of a given object's own enumerable property values.
- **Use Case**: Extracting all values from an object for operations like summing them up.

## 3. String Methods

### `String.prototype.includes()`
- **Purpose**: Determines whether a string contains the specified substring.
- **Use Case**: Searching within a string to find specific characters or substrings.

### `String.prototype.startsWith()`
- **Purpose**: Determines whether a string begins with the specified characters.
- **Use Case**: Checking if a URL or path starts with a particular prefix.

### `String.prototype.trim()`
- **Purpose**: Removes whitespace from both ends of a string.
- **Use Case**: Cleaning up user input before processing or storage.

## 4. Promise Polyfills

### `Promise`
- **Purpose**: Handles asynchronous operations, allowing for cleaner and more manageable code.
- **Use Case**: Fetching data from an API and processing the result once the data is available.

### `Promise.finally()`
- **Purpose**: Executes a callback function when a promise is settled, regardless of its outcome.
- **Use Case**: Releasing resources or resetting states after an asynchronous operation.

## 5. Function Methods

### `Function.prototype.bind()`
- **Purpose**: Creates a new function that, when called, has its `this` keyword set to the provided value.
- **Use Case**: Ensuring that a function retains the correct `this` context when passed as a callback.

### `Function.prototype.call()` and `apply()`
- **Purpose**: Invokes a function with a specific `this` context and arguments provided individually (`call`) or as an array (`apply`).
- **Use Case**: Manually setting `this` and passing arguments to a function.

## 6. ES6+ Features

### `fetch()`
- **Purpose**: Provides a modern interface for making HTTP requests, replacing the older `XMLHttpRequest`.
- **Use Case**: Fetching data from APIs and handling responses using Promises.

### `Array.from()`
- **Purpose**: Creates a new array from an array-like or iterable object.
- **Use Case**: Converting NodeLists or other iterable objects into arrays for manipulation.

## 7. Number Methods

### `Number.isNaN()`
- **Purpose**: Determines whether the passed value is `NaN` and its type is `Number`.
- **Use Case**: More reliable than the global `isNaN` function, which converts the argument to a number first.

## 8. Destructuring (via Babel)

- **Purpose**: Allows unpacking values from arrays or properties from objects into distinct variables.
- **Use Case**: Common in modern JavaScript for cleaner and more concise code.

## 9. `requestAnimationFrame`

- **Purpose**: Schedules a function to run at the next available screen repaint, improving performance and visual smoothness.
- **Use Case**: Optimizing animations and avoiding unnecessary work during browser reflows.

## 10. `Set` and `Map`

### `Set`
- **Purpose**: Stores unique values of any type.
- **Use Case**: Managing a collection of unique items, such as removing duplicates from an array.

### `Map`
- **Purpose**: Stores key-value pairs and remembers the original insertion order of the keys.
- **Use Case**: Managing collections of keyed data where the keys can be of any type.

## 11. `Object.create()`

- **Purpose**: Creates a new object with the specified prototype object and properties.
- **Use Case**: Understanding prototypal inheritance in JavaScript and creating objects with a specific prototype.