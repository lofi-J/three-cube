import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {css, Global} from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const initialStyle = css`
  * {
    padding: 0;
    margin: 0;
  }
`;

root.render(
  <>
    <Global styles={initialStyle} />
    <App />
  </>
);
