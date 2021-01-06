import './App.css'
import Header from "./Header"
import "./Header.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
import {useEffect} from "react"

function App() {
  const [{user}, dispatch] = useStateValue();
  // code which runs based on given condition
  // useEffect <<Powerful

  useEffect(() => 
  {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // use is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }
        else {
          // use is logged out

          dispatch({
            type: "SET_USER",
            user: null,
          })
        }
      
    })
    return () => {
      // any cleanup operations go in here
      unsubscribe();
    } 
  }, [])

   console.log('USER IS >>> ', user)



  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
          {/* this is default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
