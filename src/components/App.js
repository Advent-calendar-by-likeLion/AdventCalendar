import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import {authService} from "fbase"
import { GlobalStyle, MediaDiv } from "../styles/layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
    <GlobalStyle/>
      <MediaDiv>
        {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "init.."}
      </MediaDiv>
    </>
  )
}

export default App;
