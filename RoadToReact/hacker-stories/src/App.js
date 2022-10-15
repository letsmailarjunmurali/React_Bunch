import logo from "./logo.svg";
import "./App.css";
import React from "react";

const name = "React";
const obj = { firstname: "Arjun", lastname: "Murali" };

function getTitle(title) {
  return title;
}
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};
const initialStories = [
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
const App = () => {
  console.log("App renders");

  const [stories, setStories] = React.useState(initialStories);
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");
  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    //localStorage.setItem("search", event.target.value); // side effect should not run in handler method since its managing state
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Hello {getTitle("World!!!!!")}</h1>
      <h2>{obj.firstname}</h2>
      {/* B */}
      <Search search={searchTerm} onSearch={handleSearch} />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};
const Search = (props) => {
  console.log("Search renders");
  const { search, onSearch } = props;

  return (
    <>
      <InputWithLabel
        id="search"
        label="Search"
        value={search}
        onInputChange={onSearch}
        isFocused={true}
      >
        <strong>Search :</strong>
      </InputWithLabel>
      <InputWithLabel
        id="search"
        label="Search"
        value={search}
        isFocused={true}
        onInputChange={onSearch}
      >
        <strong>Search :</strong>
      </InputWithLabel>
    </>
  );
};

const InputWithLabel = ({
  id,
  label,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}) => {
  // A
  const inputRef = React.useRef();

  // C
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      {/* B */}
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

const List = ({ list, onRemoveItem }) => {
  console.log("List renders");

  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
};

const Item = ({ item, onRemoveItem }) => {
  // const handleRemoveItem = () => {
  //   onRemoveItem(item);
  // };

  return (
    <>
      <li>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <button type="button" onClick={onRemoveItem.bind(null, item)}>
            Dismiss
          </button>
        </span>
      </li>
    </>
  );
};

export default App;
