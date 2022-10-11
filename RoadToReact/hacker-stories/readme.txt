React is inherently declarative, starting with JSX and ending with hooks. 
In JSX, we tell React what to render and not how to render it. In a React side-effect Hook (useEffect), we express when to achieve what instead of how to achieve it. 
Sometimes, however, we’ll want to access the rendered elements of JSX imperatively, most often as a side-effect,  in cases such as these:
• read/write access to elements via the DOM API:
– measuring (read) an element’s width or height

We want to execute the focus() method programmatically via the input field element’s DOM API once it has been rendered– setting (write) an input field’s focus state


• (A) First, create a ref with React’s useRef Hook. This ref object is a persistent value which stays intact over the lifetime of a React component. It comes with a property called current, which, in contrast to the ref object, can be changed.
• (B) Second, the ref is passed to the input field’s JSX-reserved ref attribute and the element instance is assigned to the changeable current property.
• (C) Third, opt into React’s lifecycle with React’s useEffect Hook, performing the focus on the input field when the component renders (or its dependencies change).
• (D) And fourth, since the ref is passed to the input field’s ref attribute, its current property gives access to the element. Execute its focus programmatically as a side-effect, but only if isFocused is set and the current property is existent.