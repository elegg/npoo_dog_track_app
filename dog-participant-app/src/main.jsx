import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
   fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
   defaultRadius:"xs"
  /** Put your mantine theme override here */
});
 
function Wrapper({children}) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper>
         <App />
    </Wrapper>
  </React.StrictMode>,
);
