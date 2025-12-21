import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import App from './App.tsx'
import "./i18n"

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>

  </StrictMode>

)
