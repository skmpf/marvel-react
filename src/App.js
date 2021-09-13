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
  // add to favorites
  const addFav = (id, from) => {
    let favCopy = [...fav];
    if (from === "characters") {
      if (favCopy[0].indexOf(id) === -1) {
        favCopy[0].push(id);
      }
    } else if (favCopy[1].indexOf(id) === -1) {
      favCopy[1].push(id);
    }
    setFav(favCopy);
    Cookies.set("fav", JSON.stringify(favCopy), { expires: 100 });
  };

  // remove from favorites
  const handleRemoveFav = id => {
    const fav = Cookies.get("fav");
    const tabFav = fav && JSON.parse(fav);

    let newFav = [[], []];
    for (let i = 0; i < tabFav.length; i++) {
      for (let j = 0; j < tabFav[i].length; j++) {
        if (i === 0) {
          if (tabFav[i][j] !== id) {
            newFav[0].push(tabFav[i][j]);
          }
        } else {
          if (tabFav[i][j] !== id) {
            newFav[1].push(tabFav[i][j]);
          }
        }
      }
    }
    setFav(newFav);
    Cookies.set("fav", JSON.stringify(newFav), { expires: 100 });
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters/:id">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics addFav={addFav} handleRemoveFav={handleRemoveFav} />
        </Route>
        <Route path="/search/:category/:searchInput">
          <Results addFav={addFav} handleRemoveFav={handleRemoveFav} />
        </Route>
        <Route path="/user/favorites">
          <Favorites fav={fav} handleRemoveFav={handleRemoveFav} />
        </Route>
        {/* <Route path="/user/sign_in">
          <SignIn />
        </Route>
        <Route path="/user/sign_up">
          <SignUp />
        </Route> */}
        <Route exact path="/">
          <Characters addFav={addFav} handleRemoveFav={handleRemoveFav} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
