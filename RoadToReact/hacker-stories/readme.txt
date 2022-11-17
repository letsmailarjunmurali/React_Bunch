Forms aren’t much different in React than in plain HTML. When we have input fields and a button to submit data from them, we can give our HTML more structure by wrapping it into a form element with a onSubmit handler.
The button that executes the submission needs only the “submit” type. After all, it makes it more accessible for keyboard users as well.
Since the handler is used for the form event, it executes preventDefault in React’s synthetic event. This prevents the HTML form’s native behavior, which leads to a browser reload
