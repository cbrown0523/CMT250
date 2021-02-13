import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Joke from './components/layout/pages/Jokes'
import About from './components/layout/pages/About'
import Joke2 from './components/layout/pages/Jokes2'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
    
        <div className="container mx-auto">
          <Route path="/" exact component={Joke} />
          <Route path="/about" exact component={About} />
          <Route path="/classComponet" exact component={Joke2} />

        </div>
      </div>
    </Router>


  );
}

export default App;
