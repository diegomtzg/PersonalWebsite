import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import ReactFullpage from '@fullpage/react-fullpage';
import Particles from "react-tsparticles";
import particleParams from "./assets/particles.js";
import './index.css';
import App from './App';
import './App.css'
import theme from './theme'
import reportWebVitals from './reportWebVitals';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Particles height="100vh" params={particleParams} className="particles" />
          <App />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Fullpage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
