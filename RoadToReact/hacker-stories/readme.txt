
All the essential steps are marked with comments that are explained step by step:
• (A) First, create a ref with React’s useRef Hook. This ref object is a persistent value which stays intact over the lifetime of a React component. It comes with a property called current, which, in contrast to the ref object, can be changed.
• (B) Second, the ref is passed to the input field’s JSX-reserved ref attribute and the element instance is assigned to the changeable current property.
• (C) Third, opt into React’s lifecycle with React’s useEffect Hook, performing the focus on the input field when the component renders (or its dependencies change).
• (D) And fourth, since the ref is passed to the input field’s ref attribute, its current property gives access to the element. Execute its focus programmatically as a side-effect, but only if isFocused is set and the current property is existent.
This was an example of how to move from declarative to imperative programming in React. It’s not always possible to go the declarative way, so the imperative approach can be performed whenever it’s necessary.