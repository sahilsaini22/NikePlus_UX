import React from 'react';
import {BrowserRouter, Route,  Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Detail from './Detail';
import * as serviceWorker from './serviceWorker';

function Routes(){
  return(
  <Switch>
          <Route path="/" component={App} />
          
  </Switch>
  )
}


ReactDOM.render(
   

    <BrowserRouter>
    <Switch>          
          <Route path="/browse" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/" component={App} />
          
          
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

