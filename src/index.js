import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
// import { createContext, useContext } from "react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* UserContext.Provider value={{ username: "Mango" }}> */}
    <App />
    {/* </UserContext.Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
