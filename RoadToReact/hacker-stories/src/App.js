import logo from "./logo.svg";
import "./App.css";
import React from "react";

const name = "React";
const obj = { firstname: "Arjun", lastname: "Murali" };

function getTitle(title) {
  return title;
}

const App = () => {
  console.log("App renders");

  const stories = [
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
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Hello {getTitle("World!!!!!")}</h1>
      <h2>{obj.firstname}</h2>
      {/* B */}
      <Search onSearch={handleSearch} />
      <List list={searchedStories} />
    </div>
  );
};
const Search = (props) => {
  console.log("Search renders");

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={props.onSearch} />
    </div>
  );
};
const List = (props) => {
  console.log("List renders");

  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;
