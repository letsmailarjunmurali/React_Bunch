There is no way to pass information up the component tree, since props are naturally only passed downwards. 
However, we can introduce a callback handler: A callback function gets introduced (A), is used elsewhere (B), but “calls back” to the place it was introduced (C):
Callback handlers passed as functions in props can be used to communicate up the component hierarchy