import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Loading Stylesheets
import './assets/css/AboutPage.css';
import './assets/css/ContactPage.css';
import './assets/css/NavPage.css';
import './assets/css/PortfolioPage.css';



import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/contactPage.jsx';
import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'Contact',
        element: <ContactPage />,
      },
      {
        path: 'Resume',
        element: <ResumePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);