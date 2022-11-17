import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

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

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "STORIES_FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const App = () => {
  console.log("App renders");

  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");

  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);

  const handleFetchStories = React.useCallback(async () => {
    if (!searchTerm) return;
    dispatchStories({ type: "STORIES_FETCH_INIT" });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: "STORIES_FETCH_SUCCESS",
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: "STORIES_FETCH_FAILURE" });
    }
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({ type: "REMOVE_STORY", payload: item });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };

  const searchedStories = stories.data.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <h1 className="headline-primary">My Hacker Stories</h1>
      <SearchForm
        search={searchTerm}
        onSearch={handleSearchInput}
        onSubmit={handleSearchSubmit}
      />
      {stories.isError && <p>Something went wrong</p>}
      {stories.isLoading ? (
        <p>Loading......</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};
const SearchForm = ({ search, onSearch, onSubmit }) => {
  console.log("Search renders");

  return (
    <>
      <form onSubmit={onSubmit} className="search-form">
        <InputWithLabel
          id="search"
          label="Search"
          value={search}
          onInputChange={onSearch}
          isFocused={true}
        >
          <strong>Search :</strong>
        </InputWithLabel>
        <button
          type="submit"
          disabled={!search}
          className="button button-large"
        >
          Submit
        </button>
      </form>
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
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id} className="label">
        {children}
      </label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        className="input"
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
  return (
    <>
      <li className="item">
        <span style={{ width: "30%" }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: "30%" }}>{item.author}</span>
        <span style={{ width: "30%" }}>{item.num_comments}</span>
        <span style={{ width: "30%" }}>{item.points}</span>
        <span style={{ width: "30%" }}>
          <button
            className="button button_small"
            type="button"
            onClick={() => onRemoveItem(item)}
          >
            Dismiss
          </button>
        </span>
      </li>
    </>
  );
};

export default App;
