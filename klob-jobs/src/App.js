import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"
import {createBrowserRouter} from "react-router-dom";
import store from './store'
import Home from "./views/Home";
import Layout from "./views/Layout";






const router = createBrowserRouter([
    {
      element: <Layout/>,
     
      children : [
        {
          path: "/",
          element: <Home/>,
        },
       

    
      ]
    },
   
   
]);


function App() {

  return (
    <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
  )
}

export default App;