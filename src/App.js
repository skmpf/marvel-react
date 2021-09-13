// import packages and stylesheet
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";

// import components and containers
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Characters from "./containers/Characters/";
import Character from "./containers/Character/";
import Comics from "./containers/Comics/";
import Results from "./containers/Results/";
import Favorites from "./containers/Favorites/";
// import SignIn from "./containers/SignIn/";
// import SignUp from "./containers/SignUp/";

function App() {
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || [[], []]);
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters/:id">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics fav={fav} setFav={setFav} />
        </Route>
        <Route path="/search/:category/:searchInput">
          <Results fav={fav} setFav={setFav} />
        </Route>
        <Route path="/user/favorites">
          <Favorites fav={fav} setFav={setFav} />
        </Route>
        {/* <Route path="/user/sign_in">
          <SignIn />
        </Route>
        <Route path="/user/sign_up">
          <SignUp />
        </Route> */}
        <Route exact path="/">
          <Characters fav={fav} setFav={setFav} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
