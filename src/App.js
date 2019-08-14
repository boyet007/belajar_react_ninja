import React from 'react';
import Ninjas from './Ninjas'

function App() {
  return (
    <div className="App">
     <h1>My First React app</h1>
    <p>Welcome</p>
    <Ninjas name="Ryu" age="25" belt="black"/>
    <Ninjas name="Yoshi" age="26" belt="red" />
    </div>
  );
}

export default App;
