import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import Header from "./components/Header.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import store from "./cart/store.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>
);
