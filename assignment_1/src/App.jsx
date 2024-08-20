import React from "react";
import {
  BrowserRouter,
  Route,
  Routes

} from 'react-router-dom'
import Feed from "./pages/Feed"
import Prod from "./pages/Prod"

function App() {
  const token = localStorage.getItem('token')
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/product" element={<Prod />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App