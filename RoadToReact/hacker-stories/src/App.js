import logo from "./logo.svg";
import "./App.css";

const name = "React";
const obj = { firstname: "Arjun", lastname: "Murali" };

function getTitle(title) {
  return title;
}

function App() {
  const title = "Zoamto";
  return (
    <div>
      <h1>Hello {getTitle("World!!!!!")}</h1>
      <h2>{obj.firstname}</h2>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;

/*

JSX - combines HTML and JavaScript. 
JSX-specific attributes like className and onClick instead of class and onclick, which follows the camel case
*/
