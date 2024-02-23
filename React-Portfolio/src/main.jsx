import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Loading Stylesheets
import './Assets/css/NavPage.css';
import './assets/css/AboutPage.css';
import './Assets/css/PortfolioPage.css';
import './Assets/css/Contact.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/contactPage';
import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import App from './App';

// Define the accessible routes, and which components respond to which URL
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


// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);