import React from 'react';


const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    },
    {
      title: 'Elixir',
      url: 'https://elixir-lang.org/',
      author: 'José Valim',
      num_comments: 12,
      points: 30,
      objectID: 2
    },
    {
      title: 'Phoenix',
      url: 'https://www.phoenixframework.org/',
      author: 'Chris McCord',
      num_comments: 10,
      points: 24,
      objectID: 3
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(story => {
    return story.title.includes(searchTerm);
  })

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories}/>
      
    </div>
  );
}

const Search = props => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch}/>
    </div>
  );
}

const List = (props) => {
  return props.list.map((item) => {
    return (
        <div key={item.objectID}>
        <span>
          <a href={item.url}>
            {item.title}
          </a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        </div>
    );
  })
}

export default App;
