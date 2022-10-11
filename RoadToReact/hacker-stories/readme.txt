The concept of component composition is one of React’s more powerful features. Essentially we’ll discover how to use a React element in the same fashion as an HTML element, with an opening and closing tag
Instead of using the label prop from before, we inserted the text “Search:” between the component’s element’s tags.
In the InputWithLabel component, you have access to this information via React’s children prop now. 
Instead of using the label prop, use the children prop to render everything that has been passed down from above where you want it:
Now the React component’s elements behave similarly to native HTML. Everything that’s passed between a component’s elements can be accessed as children in the component and be rendered somewhere.
Sometimes when using a React component, you want to have more freedom from the outside regarding what to render on the inside of a component:
With this React feature, we can compose React components into each other. We’ve used it with a JavaScript string and with a string wrapped in an HTML <strong> element, but it doesn’t end here.