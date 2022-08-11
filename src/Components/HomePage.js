import React from 'react'
import Users from "./Users";
import Search from "./Search";

const HomePage = (props) => {
  return (
    <>
    <Search
      searchUsers={props.searchUsers}
      clearUsers={props.clearUsers}
      showClearButton={props.users.length > 0 ? true : false}
      setAlert={props.setAlert}
    />
    <Users
      users={props.users}
      loading={props.loading}
    />
  </>
  )
}

export default HomePage