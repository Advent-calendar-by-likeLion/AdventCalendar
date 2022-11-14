import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import {authService} from "fbase"
import { MediaDiv } from "../styles/layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <MediaDiv>
        {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "init.."}
      </MediaDiv>
    </>
  )
}

export default App;
