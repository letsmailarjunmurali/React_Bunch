The rest operator is always used to separate an object from some of its properties.
Now it can be used in our List component to separate the objectID from the item, because the objectID is only used as a key and isn’t used in the Item component. 
Only the remaining (rest) item gets spread as attribute/value pairs into the Item component (as before):