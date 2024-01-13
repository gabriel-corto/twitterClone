
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Status from "./pages/Status";
import TimeLine from "./pages/TimeLine";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <TimeLine />
      },
      {
        path: "/tweets",
        element: <Status />
      }
    ]
  },
 
  
])

