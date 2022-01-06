import './App.css';
import { Fragment, useEffect , useState } from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import Favourites from './components/Favourites';
import NavBar from './components/NavBar';
import axios from 'axios'

function App() {

  const [ APOD, setAPOD ] = useState({})

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=JFf9n73oABjTS0ukDbs6g5kEuyIal04xawkurRE2').then((res) => {
      setAPOD(res.data)
  })},[])

  return (
      <Fragment>
        <Router>
          <div className="app">
            <NavBar />
            <Route exact path="/home" render={() => (<Home APOD = {APOD}/>)}/>
            <Route exact path={"/search"} render={() => ( <Search />)} />
            <Route exact path="/favourites" render={() => (<Favourites />)}/>
          </div>
        </Router>
      </Fragment>
  );
}

export default App;
