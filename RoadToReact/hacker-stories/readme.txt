Each time text is typed in the input field of the SearchForm component, this computation runs again with an output of “C”. 
This may be fine for a non-heavy computation like this one, but imagine this computation would take more than 500ms.
It would give the re-rendering a delay, because everything in the component has to wait for this computation.
We can tell React to only run a function if one of its dependencies has changed. If no dependency changed, the result of the function stays the same.
React’s useMemo Hook helps us here: