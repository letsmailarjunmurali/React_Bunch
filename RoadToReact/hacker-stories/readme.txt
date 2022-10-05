Always manage state at a component level where every component that’s interested in it is one that either manages the state (using information directly from state, 
e.g. App component) or a component below the managing component (using information from props, e.g. List or Search). 
If a component below needs to update the state (e.g. Search), pass a callback handler down to it which allows it to update it. 
If a component needs to use the state (e.g. displaying it), pass it down as props.