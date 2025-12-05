import React from 'react'
import { Route, Routes } from "react-router-dom";
import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import WatchList from './WatchList'
function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider>
      </GeneralContextProvider> */}
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
