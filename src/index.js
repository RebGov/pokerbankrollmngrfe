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

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#14a37f',
      main: '#1de9b6',
      dark: '#4aedc4',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});



// let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log('indexPage: ', store.getState())
ReactDOM.render(<Provider store={store}><MuiThemeProvider theme={theme}> <MuiPickersUtilsProvider utils={MomentUtils}><App /></MuiPickersUtilsProvider></MuiThemeProvider></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
