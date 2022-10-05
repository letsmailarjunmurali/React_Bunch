import logo from "./logo.svg";
import "./App.css";

const name = "React";
const obj = { firstname: "Arjun", lastname: "Murali" };

function getTitle(title) {
  return title;
}

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => (
  <div>
    <h1>Hello {getTitle("World!!!!!")}</h1>
    <h2>{obj.firstname}</h2>

    <ul>
      {list.map((item) => (
        <li key={item.objectID}>{item.title}</li>
      ))}
    </ul>
    <List />
    {/* Creatting another instance */}
    <List />
    {/* Creatting another instance */}
    <List />
  </div>
);
const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
};
const List = () => {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default App;
