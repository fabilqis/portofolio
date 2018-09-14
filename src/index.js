import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Pdf from './App/Pdf'


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/resume" component={Pdf} />
        </div>
    </Router>
    , document.getElementById('root')
)
registerServiceWorker()