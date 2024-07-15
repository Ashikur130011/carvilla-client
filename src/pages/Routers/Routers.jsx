
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home/Home';
import Services from '../Services/Services/Services';
import About from '../Home/About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Products from '../Home/Products/Products';

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/services",
            element: <Services/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {  path: '/products', element: <Products/>},
        


      ],
    },
  ]);


export default Routers;