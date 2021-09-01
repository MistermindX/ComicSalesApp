import './styles/App.css'
import axios from 'axios'
import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { BASE_URL } from './globals'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Main from './pages/Main'

function App() {
  const [seller, setSeller] = useState({})
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
        </Switch>
      </main>
    </div>
  )
}

export default App
