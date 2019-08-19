import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Main from './components/Main'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>
          <div className="row">
            <div className="col-4">
              <Contact/>
            </div>
            <div className="col-8">
              <Main />
            <div>
          </div>
        </div>     
      </div>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);