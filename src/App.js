import React from 'react';
import { Search } from './Search';
import { List } from './List';


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

  const searchedStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories}/>
      
    </div>
  );
}

export default App;
