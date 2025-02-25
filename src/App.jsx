/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import store from "./redux/store";

export const userDataContext = createContext();

const App = () => {
  const [loggInUser, setLoggInUser] = useState(false);

  return (
    <div>
      <userDataContext.Provider value={[loggInUser]}>
        <Provider store={store}>
          <div className="max-w-screen-4xl mx-auto bg-base-300  ">
            <RouterProvider router={router} />
          </div>
        </Provider>
        <Toaster />
      </userDataContext.Provider>
    </div>
  );
};

export default App;
