import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "mapbox-gl/dist/mapbox-gl.css";
const progress = new ProgressBar({
  size: 4,
  color: "#9381FF",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", () => {
  progress.start();
});

Router.events.on("routeChangeComplete", () => {
  progress.finish();
});
Router.events.on("routeChangeError", () => {
  progress.finish();
});
const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </SessionProvider>
  );
};

export default App;
