import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import theme from './themes/theme';
import configureStore from './store/configureStore';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const rootApp = (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(rootApp, document.getElementById('root'));

// const tracks = [
//   {
//     title: 'Some track'
//   },
//   {
//     title: 'Some other track'
//   }
// ];

// ReactDOM.render(
//   <div>
//     {tracks.map(track => (
//       <div className="track">{track.title}</div>
//     ))}
//   </div>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
