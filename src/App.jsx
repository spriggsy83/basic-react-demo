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
  const hour = new Date().getHours();
  /**
  if (hour < 12) {
    return <p>Good morning {props.name}</p>;
  } else {
    return <p>Good afternoon {props.name}</p>;
  } 
  **/
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
