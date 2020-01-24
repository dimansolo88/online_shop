import React from 'react'
import Home from '@/Components/Home'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/:id" render={() => <div> current product </div>} />
      </Switch>
    </div>
  )
}

export default App
