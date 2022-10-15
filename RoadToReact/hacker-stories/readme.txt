we have made the list of stories stateful with React’s useState Hook; passed the still searched stories down as props to the List component, 
and implemented a callback handler (handleRemoveStory) and handler (handleRemoveItem) to be used in their respective components to remove a story by clicking on a button. 
In order to implement this feature, we applied many lessons learned from before: state, props, handlers, and callback handlers.
You may have noticed that we had to introduce an additional handleRemoveItem handler in the Item component which is in charge to execute the incoming onRemoveItem callback handler. 
If you want to make this more elegant, you can use an inline handler which would allow you to execute the callback handler function in the Item component right in the JSX. 
There are two solutions using the incoming onRemoveItem function in the Item component as an inline handler. First, using JavaScript’s bind method:
Using JavaScript’s bind method110 on a function allows us to bind arguments directly to that function that should be used when executing it. The bind method returns a new function with the bound argument attached.