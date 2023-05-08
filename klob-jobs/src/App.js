import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"
import {createBrowserRouter} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store'
import Home from "./views/Home";
import Layout from "./views/Layout";
import Form from "./components/Form";
import Detail from "./views/Detail";
import Applied from "./views/Applied";









const router = createBrowserRouter([
    {
      element: <Layout/>,
     
      children : [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/buat-lowongan-kerja",
          element: <Form/>,
        },
        {
          path: "/detail-lowongan-perkerjaan/:jobVacancyCode",
          element: <Detail/>,
        },
        {
          path: "/lamaran-terkirim",
          element: <Applied/>,
        },
       

    
      ]
    },
   
   
]);



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;