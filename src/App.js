import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
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
   this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=> {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(Snapshot=>{
        this.setState({
          currentUser:{
            id:Snapshot.id,
            ...Snapshot.data()
          }
        });

        console.log(this.state);
      });
     }
     
    this.setState({currentUser:userAuth});
    
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
 