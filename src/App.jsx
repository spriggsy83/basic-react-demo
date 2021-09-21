import React from 'react';
import './App.css';

const App = () => {
  return (
    <HeaderNFooter>
      <SayHello name="Andrew" />
      <SayHello name="Team" />
    </HeaderNFooter>
  );
};

const SayHello = (props) => {
  return <p>Hello {props.name}</p>;
};

const HeaderNFooter = (props) => {
  return (
    <div>
      <b>React demo</b>
      <hr />
      <hr />
      {props.children}
      <hr />
      <hr />
    </div>
  );
};

export default App;
