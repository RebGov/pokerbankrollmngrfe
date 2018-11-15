import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
import MomentUtils from '@date-io/moment';
// import {createStore, applyMiddleWare } from 'redux';
import {Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import {store} from './store';
// import rootReducer from './reducers/rootReducer';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import chipsBlackBgrd from './images/chipsBlackBgrd.jpg'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F7AEA8',
      main: '#72000E',
      dark: '#C41B0D',
      contrastText: '#fff',
    },
    secondary: {
      light: '#D3CCCC',
      main: '#C1ADAB',
      dark: '#927E7C',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
  backgroundImage: `url(${chipsBlackBgrd})`
});



// let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log('indexPage: ', store.getState())
ReactDOM.render(<Provider store={store}><MuiThemeProvider theme={theme}> <MuiPickersUtilsProvider utils={MomentUtils}><App /></MuiPickersUtilsProvider></MuiThemeProvider></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
