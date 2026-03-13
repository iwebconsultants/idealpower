import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LeDiYcsAAAAAC5Af5o4bDZs6YByNyyMsErsWEH-">
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
);
