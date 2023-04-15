import React from 'react'
import Home from '../Home/Home'
import Details from '../Details/Details'
export default function Route() {
  return (
    <div>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/details" element={<Details/>} />
    </div>
  )
}
