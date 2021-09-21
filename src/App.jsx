import React from 'react';

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
    <p style={{ fontSize: 'x-large' }}>
      Good {hour < 12 ? 'morning' : 'afternoon'} {props.name}
    </p>
  );
};

const HeaderNFooter = (props) => {
  return (
    <div style={{ width: '500px', margin: '50px' }}>
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
