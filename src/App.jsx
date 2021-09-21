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
  let [counter, updateCounter] = React.useState(0);
  return (
    <p onClick={() => updateCounter(counter + 1)}>
      Good morning {props.name} (clicked {counter} times)
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
