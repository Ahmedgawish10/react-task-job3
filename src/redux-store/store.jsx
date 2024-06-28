import { configureStore } from '@reduxjs/toolkit'
import Auth1 from "./AuthSlice"
 const store = configureStore({
  reducer: {
    auth:Auth1,

  },
})
export default  store

