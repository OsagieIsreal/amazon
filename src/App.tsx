import { RouterProvider} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appRouter } from "./appRouter";

function App() {

  return (
    <div>
     <ToastContainer />
     <RouterProvider  router={appRouter}/>
    </div>
  )
}

export default App
