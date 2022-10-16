All state management in this application makes heavy use of React’s useState Hook. On the other hand, React’s useReducer Hook gives you more sophisticated state management.
We’ll move the stories state management from the useState hook to a new useReducer hook. First, introduce a reducer function outside of your components.
A reducer function always receives state and action. Based on these two arguments, a reducer always returns a new state:
In the App component, exchange useState for useReducer for managing the stories.
The new hook receives a reducer function and an initial state as arguments and returns an array with two items. The first item is the current state; the second item is the state updater function (also called dispatch function):