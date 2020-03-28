import React from 'react';
import SearchComponent from './components/search-input';
import LinkList from './components/link-list';

const App = () => {
  return (
        <div className="App">
          <SearchComponent/>
          <LinkList/>
        </div>
      );
}

export default App;
