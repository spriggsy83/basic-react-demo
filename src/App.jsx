import React from 'react';
import './App.css';

const App = () => {
  const nameList = ['Andrew', 'Alex', 'Team'];
  return (
    <HeaderNFooter>
      {nameList.map((name) => (
        <SayHello name={name} />
      ))}
    </HeaderNFooter>
  );
};

const SayHello = (props) => {
  const hour = new Date().getHours();
  return (
    <p>
      Good {hour < 12 ? 'morning' : 'afternoon'} {props.name}
    </p>
  );
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
