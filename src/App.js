import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.js';


const App = () => {
  return (
    <div className="App"> 
      <Sidebar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
