import React, { useCallback, useContext } from 'react'
import NavBar from './Navbar'
import SideBar from './Side_Bar'
import Cards_Table from './Cards_Table'
import AuthContext from './AuthContext'
import Login from './Login'

export default function ManagerDashboard() {
    const authData = useContext(AuthContext);
  return ((
    authData.login ?
    <div>
      {/* <NavBar/> */}
    <Cards_Table/>
    </div>
    : <Login/>
  )
  )
}
