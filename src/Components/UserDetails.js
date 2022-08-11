import React from 'react'


componentDidMount() {
    this.props.getUser(this.props.match.params.login);
}

const UserDetails = () => {
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails