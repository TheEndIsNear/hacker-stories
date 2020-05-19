import React from 'react';

function getTitle(title) {
  return title;
}

function App() {
  const welcome = {
    greeting: 'Hey',
    title: 'React'
  }
  
  return (
    <div>
      <h1>{welcome.greeting} {getTitle(welcome.title)}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
