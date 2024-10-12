import React from "react";
import loadable from "../utils/loadable";
import Loader from "../Components/loader/loader";

//HomePage

export const HomePage = loadable(
    () => import("../Components/homePage/homePage"),
    {
      fallback: <Loader />,
    }
  );