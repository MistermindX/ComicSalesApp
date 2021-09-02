import './styles/App.css'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Main from './pages/Main'

function App() {
  const [seller, setSeller] = useState({})

  return (
    <div className="App">
      {/* <header>
        <Navbar />
      </header> */}
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Landing {...props} setSeller={setSeller} />}
          />
          <Route path="/main" component={() => <Main {...seller} />} />
        </Switch>
      </main>
    </div>
  )
}

export default App
