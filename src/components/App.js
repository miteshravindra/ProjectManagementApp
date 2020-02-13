import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Projectdetails from './Projectdetails'
import Signinpage from './Signinpage'
import Signuppage from './Signuppage'
import '../css/App.css';
import Createproject from './Createproject';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route  path='/project/:id' component={Projectdetails}></Route>
          <Route  path='/signin' component={Signinpage}></Route>
          <Route  path='/signup' component={Signuppage}></Route>
          <Route  path='/create' component={Createproject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
