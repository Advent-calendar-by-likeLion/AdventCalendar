import AppRouter from "components/Router";
import { useState } from "react";
import {authService} from "fbase"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      {/* <footer>&copy; {new DataTransfer().getFullYear()} Calendar</footer> */}
    </>
  )
}

export default App;
