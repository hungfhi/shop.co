import { Provider } from "react-redux";
import { } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from "react-router";
import { persistor, store } from "./store";
import Routing from "./components/Routing";
import InitComponent from "./components/InitComponent";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <InitComponent />
          <Routing />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
export default App;
