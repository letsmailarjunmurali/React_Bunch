A React component’s returned output is defined by its props and state. In contrast, side-effects don’t change this output directly (but can change it indirectly). 
They are used to interact with APIs outside of the component (e.g. browser’s localStorage API, remote APIs for data fetching), measuring HTML element’s width and height, or setting timers in JavaScript.
The handler function should mostly be concerned with updating the state, but now it has this side-effect. 
If we use the setSearchTerm function elsewhere in our application, we may break the feature we implemented because we cannot enforce that the local storage will also get updated. 
Let’s fix this by handling the side-effect at a centralized place. We’ll use React’s useEffect Hook to trigger the side-effect each time the searchTerm changes:
