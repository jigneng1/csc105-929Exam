import { configureStore } from "@reduxjs/toolkit";
import { Picture } from "../Gallery/Gallery";
const store = () => {
  return configureStore({ reducer: { picture:Picture } });
};
export default store;
