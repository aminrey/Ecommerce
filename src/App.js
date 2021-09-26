import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null

    }


    
  }
 unsubscribeFromAuth = null;
  componentDidMount(){
    auth.onAuthStateChanged(user=> {

      this.setState({currentUser:user});
      console.log(user);
    }); 

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    
  }

  render(){
    return (
      <div>
        <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/SignIn' component={SignInAndSignUpPage} />
          <Route path='/ShopPage' component={ShopPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }


}

 

export default App;
 