import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Login />
      <Profile />
      <Logout />
    </div>
  );
}

export default App;
