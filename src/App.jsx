import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <b>React demo</b>
      <hr />
      <hr />
      <SayHello name="Andrew" />
      <SayHello name="Team" />
      <hr />
      <hr />
    </div>
  );
};

const SayHello = (props) => {
  return <p>Hello {props.name}</p>;
};

export default App;
