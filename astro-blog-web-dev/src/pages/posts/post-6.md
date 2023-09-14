---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Introduction to React"
author: Neoh Wei Jun
pubDate: 2023-09-03
description: ""
# image:
#   url: "https://docs.astro.build/assets/arc.webp"
#   alt: "Thumbnail of Astro arcs."
tags: ["javascript", "react"]
---

---

## [React](https://react.dev/)

---

### [React and JavaScript by Next.js](https://nextjs.org/learn/foundations/from-javascript-to-react)

### [Why React Rerenders](https://punits.dev/jargon-free-intros/why-react-rerenders-and-when-to-worry-about-it/)

#### 1. Functions

- React are made with the concept of reusable components which are essentially JavaScript functions. They take in _props_ (like parameter) as arguments and return elements or components (HTML in JSX format). You can think of React components as special functions that encapsulate a part of your user interface.

- Props (Properties): Props are a way to pass data from a parent component to a child component. They are read-only and help you create reusable components.

- **ALL elements in JSX must be wrapped in a parent element:**

  - `<> </>` or `<React.Fragment> </React.Fragment>` is a fragment, which is a special type of element that does not render anything. It is used to return multiple elements without adding an extra node to the DOM tree.

- **React components must start with a capital letter:**

  - React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope.

- Wrap your code in curly braces `{}` to embed JavaScript expressions in JSX:

  - `const name = "John";`
  - `<h1>Hello, {name}</h1>`

- To maintain a clean codebase, it's recommended to export and import your components consistently. You can export a function component as a named export or a default export. Similarly, you can import them using named imports or default imports.

Export the function component as named export or default export:

```jsx
// UserProfile.jsx
// Function component (named export)
export function UserProfile(props) {
	// Function that returns elements or components
	// (Think of HTML syntax in JSX format as components)
	return (
		<>
			<div>Name: {props.name}</div>
			<div>Age: {props.age}</div>
		</>
	);
}

// Arrow function component (also named export)
export const UserProfile = (props) => {
	// Component implementation same as above
};

// Default export (without a specific name)
export default function UserProfile(props) {
	// Component implementation same as above
}

// You can also export the function component as default
export default UserProfile;
```

Import the function component as named import or default import:

```jsx
// App.jsx
// Named import if you export the function component as named export
import { UserProfile } from "./UserProfile";

// You can also import the function component as default
import UserProfile from "./UserProfile";

// -----------------------------------------------------------------------
// The imported function component can be used as a JSX element
<UserProfile name={"John"} age={20} />
// will be rendered as
<>
	<div>Name: John</div>
	<div>Age: 20</div>
</>;
// -----------------------------------------------------------------------

function App() {
	const props = { name: "John", age: 20 };

	return (
		<>
			{/* Use the imported function component */}
			<UserProfile name={"John"} age={20} />
			{/* Or You can also pass in the props as an object */}
			<UserProfile {...{ name: "John", age: 20 }} />
			{/* Or You can also pass in the props as a variable */}
			<UserProfile {...props} />
		</>
	);
}
```

#### Children in JSX

The concept of the {children} slot is used for rendering dynamic content or components within a parent component. It allows you to create more flexible and reusable components by inserting content or components between the opening and closing tags of the parent component in JSX

```jsx
function ParentComponent({ children }) {
  return (
    <div>
      <h1>This is the parent component</h1>
      {children}
    </div>
  );
}

function App() {
  return (
    <ParentComponent>
      <p>Child 1: This is some content</p>
      <button>Child 2: Click me</button>
    </ParentComponent>
  );
}

// will be rendered as
<div>
  <h1>This is the parent component</h1>
  <p>Child 1: This is some content</p>
  <button>Child 2: Click me</button>
</div>;
```

---

#### 2. Conditional rendering

- Conditionally render components or elements based on certain conditions using conditional statements, ternary operators or logical operators.

```jsx
const isLoggedIn = true;

// If isLoggedIn is true, render UserProfile component, else Login component
return <div>{isLoggedIn ? <UserProfile /> : <Login />}</div>;

// If isLoggedIn is true, render UserProfile component, else render nothing
return <div>{isLoggedIn && <UserProfile />}</div>;
```

---

#### 3. Destructuring

- Destructuring in React is a concise way to access values from objects or arrays. It is often used to extract values from props or to destructure the result of useState
- Destructuring makes your code more readable and less verbose.

React hooks use destructuring to access values from useState

```jsx
// Destructure the count variable and setCount function from useState
const [count, setCount] = useState(0);
// count = 0 (initial value of useState)
// setCount = function (function to update count)
```

In functional components, you can destructure props directly in the function parameter:

```jsx
const UserProfile = ({ name, age }) => {
  // Component implementation
};
```

If you prefer, you can also destructure props inside the function body:

```jsx
// Destructure the props object in the function parameter
// props = { name: "John", age: 20 };
const UserProfile = (props) => {
  const { name, age } = props; // Destructure props object

  // Equivalent to
  const name = props.name;
  const age = props.age;

  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </>
  );
};
```

---

#### 4. Map

- When working with arrays in React, you can use the .map() method to iterate over the array and render a list of components or elements. It's important to provide a **unique _key_** prop to each rendered item to help React efficiently update the DOM.

```jsx
const numbers = [1, 2, 3, 4, 5];

return (
	<ul>
		{numbers.map((number) => (
			{/* Provide a unique key prop to each rendered item */}
			<li key={number}>{number}</li>
		))}
	</ul>
);

// will be rendered as
<ul>
	<li key={1}>1</li>
	<li key={2}>2</li>
	<li key={3}>3</li>
	<li key={4}>4</li>
	<li key={5}>5</li>
</ul>;
```

---

## Hooks

React introduced Hooks in version 16.8, which allow you to use state and other React features in functional components, you cannot use them in class components.

### Essential Hooks

**I recommend learning these hooks from the official React documentation [here](https://react.dev/reference/react) or the old documentation [here](https://legacy.reactjs.org/docs/hooks-faq.html).** I will only be providing a brief overview of each hook below:

These essential React hooks empower functional components to handle various aspects of state, side effects, and context sharing

#### 1. [useState](https://react.dev/reference/react/useState) (`const [state, setState] = useState(initialState);`)

useState is a hook that allows a component to remember information between renders and manage its local state. It returns an array with two elements:

- The first element is the state value
- The second element is a function to update the state value

```jsx
const [count, setCount] = useState(0);
// count = 0 (initial value of useState)
// setCount = function (function to update count)

const increment = () => {
  setCount(count + 1); // count(0) + 1 (1)
};
```

#### Tips

- **Avoid overusing**: Not everything needs to be stored in component state. Avoid using state for data that doesn't impact the component's rendering or behavior.
- **Choose descriptive variable names** for your state variables to make your code more self-explanatory. Typically, the variable name should start with the word _"is"_ or _"has"_ to indicate that it is a boolean value.

```jsx
const [count, setCount] = useState(0); // count is self-explanatory
const [isLoggedIn, setIsLoggedIn] = useState(false); // isSomething true or false
const [hasError, setHasError] = useState(false); // hasSomething?
```

---

#### 2. [useEffect](https://react.dev/reference/react/useEffect)(`useEffect(setup, dependencies?)`)

useEffect allows you to perform side effects or synchronise components with external system. Side effects can include data fetching, DOM manipulation, or subscriptions. It takes two arguments:
`useEffect(() => { // effect }, [dependency]);`

- A function containing the code to run.
- An optional dependency array that specifies when the effect should re-run.

The **dependency array** is used to tell React when to re-run the effect. If the dependency array is empty, the effect will only run once after the initial render. If the dependency array is not provided, the effect will re-run after every render of the component.

- `React.useEffect(() => { // effect }, [dependency]);` Run effect whenever the dependency changes
- `React.useEffect(() => { // effect });` Run effect after every render
- `React.useEffect(() => { // effect }, []);` Run effect only once after initial render

Use the dependency array to tell React when to re-run the effect (example):

```jsx
// count using effect
const [count, setCount] = useState(0);
let double = count * 2;

useEffect(() => {
  console.log("I only run once after initial render");
}, []); //  Run effect only once after initial render

useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes

useEffect(() => {
  console.log(`My double count is ${double}`);
  // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
}); // Run effect after every render
```

**Real world example for fetching data from an API:**

```jsx
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    // Simulate a data fetch after component renders
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once

  return (
    <div>
      {user ? (
        <div>
          <p>Name: {user[0].name}</p>
          <p>Email: {user[0].email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

**Clean up function** (optional): If your effect returns a function, React will run it when it is time to clean up. This is useful for cleaning up subscriptions or removing event listeners.

For the example below, if your component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect. This is to prevent memory leaks. If it is not cleaned up, the timer will continue to run even after the component is unmounted.

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("This will run after 3 seconds");
  }, 3000);

  // Clean up function
  return () => {
    clearTimeout(timer);
  };
}, []);
```

---

#### 3. [Context Provider](https://www.freecodecamp.org/news/context-api-in-react/): [useContext](https://react.dev/reference/react/useContext) and [createContext](https://react.dev/reference/react/createContext) (Covered in TalentLabs)

- useContext is a hook that enables functional components to access data provided by a Context at a higher level in the component tree.
- Context provides a way to share data without manually passing props through every level of your component hierarchy.
- Prevents prop drilling, which is a term for continuously passing props from a component to another component that is not a direct child or parent of the component

```jsx
import React, { createContext, useState } from "react";

// Step 1: Create a new context
const UserContext = createContext();

// Step 2: Create a custom provider component
function UserProvider({ children }) {
  // Define the state or data you want to share via the context
  const [user, setUser] = useState(null);

  // You can include any functions or logic related to the context data here
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Provide / Group the context data and functions to the children components
  const contextValue = {
    user,
    login,
    logout,
  };

  // Step 3: Return the context provider component and pass in the context value
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export { UserProvider, UserContext };
```

1. Create a new context using createContext and name it UserContext.
2. Create a custom provider component called UserProvider. This component manages the state or data you want to share via the context.
3. Inside UserProvider, you can define any functions or logic related to the context data. In this case, we have login and logout functions to manipulate the user data.
4. Provide the context data and functions to the children components using the value prop of UserContext.Provider.
5. Finally, export both the UserProvider and UserContext. The UserProvider can be placed at a higher level in your component tree to wrap the components that need access to this context.
6. Using the context provider "UserProvider" to wrap the components that need access to the context data.

```jsx
import React from "react";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";

function App() {
	return (
		{/* Step 4: Wrap the components that need access to the context data */}
		<UserProvider>
			<div className="App">
				<h1>My App</h1>
				<UserProfile />
			</div>
		</UserProvider>
	);
}

export default App;
```

7. Access the context data and functions using useContext in the child components.
8. Import the UserContext and the useContext hook from the UserContext.js file.
9. Use the useContext(UserContext) hook to access the context data provided by the UserProvider.
10. Destructure the user, login, and logout values from the context. Now we can use the user, login, and logout values in the UserProfile component to update the user data in the context.

```jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  // Step 5: Access the context data using useContext
  const { user, login, logout } = useContext(UserContext);
  // It will be the value prop of UserContext.Provider

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button
            onClick={() => login({ name: "John", email: "john@example.com" })}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
```

---

#### 4. [useReducer](https://react.dev/reference/react/useReducer)(`const [state, dispatch] = useReducer(reducer, initialArg, init?)`): Alternative to useState for managing complex state logic, similar to switch case

- useReducer is usually used to manage state that involves multiple sub-values or when the next state depends on the previous state.
- useReducer accepts a reducer function with the application initial state, returns the current application state, then dispatches a function (action) to update the state.
- The action is an object that **describes** what happened. The reducer function will switch on the action type and return the next state.
- This pattern is used in Redux, a popular state management library for React.

```jsx
import { useReducer } from "react";

// Define a reducer function
// state = current state, action = object that describes what happened
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  // Initialize state using useReducer, (reducer, initialState) as arguments
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  // State is an object with a count property (state.count)
  // dispatch is a function to update the state

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
```

---

#### 5. [useRef](https://react.dev/reference/react/useRef)(`useRef(initialValue)`) Referring to DOM Elements or Values that’s not needed for rendering

- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
- useRef is useful for accessing DOM nodes or storing values that are not needed for rendering. In most cases, you should use controlled components to access form values instead of useRef.
- To access the DOM node, use the .current property. The value of .current will be the DOM node. When the ref is first created, .current is null. React will assign the DOM node to .current when the component mounts, and assign it back to null when it unmounts. ref.current will always point to the DOM node regardless of when you access it.

```jsx
import { useRef } from "react";

// Referring to DOM elements (similar to document.getElementById())
function TextInputWithFocusButton() {
  const inputEl = useRef(null); // Initialize a ref with null
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus(); // Focus the input element
  };

  return (
    <>
      {/* Assign / "Hook" the ref to the input element */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

// Referring to values that’s not needed for rendering
export default function Counter() {
  let ref = useRef(0); // Initialize a ref with 0

  function handleClick() {
    ref.current = ref.current + 1; // Update the ref value
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

---

### Performance Optimisation Hooks

7. useCallback
8. useMemo
9. memo

#### There are many more hooks, but these are the most commonly used ones. Find out more about hooks [here](https://react.dev/reference/react).

---

### Why

1. Why does my console log twice?

React by default have strict mode enabled, which will throw warnings for unsafe lifecycle methods and legacy string ref API usage. This includes componentWillMount, componentWillReceiveProps, and componentWillUpdate. React will invoke these methods twice in strict mode to help you identify side effects in your code.

You can disable strict mode by removing `<React.StrictMode>` in `index.js` or `App.js`. This is not recommended as it is a good practice to write code that follows the best practices and avoid unsafe lifecycle methods and legacy string ref API usage. You can read more about strict mode [here](https://reactjs.org/docs/strict-mode.html).

---

### React Gotchas

1. The `&&` operator can be used to conditionally render the right-hand side component if the left-hand side is truthy. **BUT be aware that if the left-hand side is 0, it will be considered truthy and render the right-hand side**. To avoid this, explicitly check for conditions like !== 0 or > 0 if needed

```jsx
const number = [];

// Problem: in JSX, 0 is not falsey, therefore it will render 0
return (
  <>
    {/* Problem: Renders 0 even though it is falsy */}
    {number.length && <h1>Number of items: {number.length}</h1>}
  </>
);

// Solution: explicitly check for length > 0 or !== 0
return (
  <>
    {/* !== 0 or > 0 */}
    {number.length > 0 && <h1>Number of items: {number.length}</h1>}
  </>
);
```

2. **DO NOT use index of array as keys**, they will change once the array is sorted or filtered.

3. **Batch state updates**

- React batches or groups multiple state updates together before re-rendering the component
- When updating state based on its previous value, use functional updates to ensure correctness, especially in asynchronous scenarios.

```jsx
// Problem: count will only be incremented once
const [count, setCount] = useState(0);

const increment = () => {
  // Avoid this (may lead to unexpected behavior)
  setCount(count + 1); // count(0) + 1 (1)
  setCount(count + 1); // count(0) + 1 (1) again, not 2
};

// Solution: Correct way using functional update
const increment = () => {
  setCount((prevCount) => prevCount + 1); // count(0) + 1 (1)
  setCount((prevCount) => prevCount + 1); // count(1) + 1 (2)
};

return (
  <>
    <button onClick={increment}>Add counter</button>
    <div>counter: {count}</div>
  </>
);
```

---

### Resources

[React's new documentation to learn](https://react.dev/)
