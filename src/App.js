import AddUser from './AddUser';
import './App.css';
import UserInfo from './UserInfo';
import UserProfile from './UserProfile';
import Header from "./Header"
import {  Switch, Route } from 'react-router-dom';
import EditUsers from './EditUsers';



function App() {
  return (
    < >
      
      <Header />

      <Switch>
      <Route exact path="/edit-users/:id"><EditUsers /></Route>
      <Route exact path="/users/:id"><UserInfo /></Route>
      <Route exact path="/add-users" ><AddUser /></Route>
      <Route exact path="/"><UserProfile /></Route>
      </Switch>

    </>
  );
}

export default App;
