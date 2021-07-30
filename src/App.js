import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Menubar from './components/Menubar'
import Login from './components/Login'
import Signup from './components/Signup'
import QuoteList from './components/QuoteList'
import 'antd/dist/antd.css'
import './App.css'

const {Content}= Layout

function App() {
  const [user , setUser] = useState(null)
  return (
  <Router>
    <Layout>
      <Menubar user={user} />
      <Content className="site-layout"
        style={{padding: '0 50px' , marginTop: 64,
          minHeight: '100vh'}}>
        <QuoteList />
        <Switch>
          <Route path="/login" render={() => <Login setUser={setUser} />} />
          <Route path="/signup" render={() => <Signup setUser={setUser} />} />
        </Switch>
      </Content>
    </Layout>
  </Router>
  );
}

export default App;
