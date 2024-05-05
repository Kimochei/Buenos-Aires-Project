import React from 'react'
import { Outlet } from "react-router-dom";

function template() {
  return (
    <div>
        
        {/* Calling the Outlet component from react-router-dom */}
        {/* This is used to render the nested routes */}
        <Outlet />

    </div>
  )
}

export default template