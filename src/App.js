import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Menubar from './components/Menubar'
import Login from './components/Login'
import QuoteList from './components/QuoteList'
import 'antd/dist/antd.css'
import './App.css'

const {Content}= Layout

function App() {
  return (
  <Router>
    <Layout>
      <Menubar />
      <Content className="site-layout"
        style={{padding: '0 50px' , marginTop: 64,
          minHeight: '100vh'}}>
        <QuoteList />
        <Switch>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Content>
    </Layout>
  </Router>
  );
}

export default App;
